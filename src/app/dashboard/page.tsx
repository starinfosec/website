import { requireAuth } from '@/lib/auth-helpers';
import { prisma } from '@/lib/prisma';
import { StatCard } from '@/components/dashboard/shared/stat-card';
import {
  Users,
  Briefcase,
  CheckCircle,
  DollarSign,
  Clock,
  TrendingUp,
} from 'lucide-react';

async function getDashboardStats(userId: string, userRole: string, serviceId: string | null) {
  // Build where clause based on role
  const whereClause = userRole === 'ADMIN'
    ? {}
    : userRole === 'SALES_MANAGER'
    ? { service: { id: serviceId || undefined } }
    : { assignedToId: userId };

  const [
    totalLeads,
    activeDeals,
    closedWonDeals,
    pendingFollowups,
  ] = await Promise.all([
    prisma.lead.count({ where: whereClause }),
    prisma.deal.count({
      where: {
        ...whereClause,
        stage: { notIn: ['CLOSED_WON', 'CLOSED_LOST'] },
      },
    }),
    prisma.deal.count({
      where: {
        ...whereClause,
        stage: 'CLOSED_WON',
      },
    }),
    prisma.lead.count({
      where: {
        ...whereClause,
        nextFollowUp: { lte: new Date() },
      },
    }),
  ]);

  // Calculate monthly revenue
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const monthlyDeals = await prisma.deal.findMany({
    where: {
      ...whereClause,
      stage: 'CLOSED_WON',
      closedAt: { gte: startOfMonth },
    },
    select: { value: true },
  });

  const monthlyRevenue = monthlyDeals.reduce(
    (sum, deal) => sum + Number(deal.value),
    0
  );

  // Calculate conversion rate
  const conversionRate = totalLeads > 0 
    ? Math.round((closedWonDeals / totalLeads) * 100) 
    : 0;

  return {
    totalLeads,
    activeDeals,
    closedWonDeals,
    monthlyRevenue,
    pendingFollowups,
    conversionRate,
  };
}

export default async function DashboardPage() {
  const user = await requireAuth();
  const stats = await getDashboardStats(user.id, user.role, user.serviceId);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">
          Welcome back, {user.name}! Here's your dashboard overview.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Leads"
          value={stats.totalLeads}
          description="All time leads"
          icon={Users}
        />
        <StatCard
          title="Active Deals"
          value={stats.activeDeals}
          description="Currently in pipeline"
          icon={Briefcase}
        />
        <StatCard
          title="Converted Clients"
          value={stats.closedWonDeals}
          description="Closed won deals"
          icon={CheckCircle}
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${stats.monthlyRevenue.toLocaleString()}`}
          description="This month"
          icon={DollarSign}
        />
        <StatCard
          title="Pending Follow-ups"
          value={stats.pendingFollowups}
          description="Due or overdue"
          icon={Clock}
        />
        <StatCard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          description="Lead to client"
          icon={TrendingUp}
        />
      </div>

      {/* Coming soon sections */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Revenue Trend</h3>
          <p className="text-sm text-muted-foreground">
            Chart showing monthly revenue trends will appear here
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">
            Recent activities and updates will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
