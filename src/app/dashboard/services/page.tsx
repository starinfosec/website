import { requireAuth } from '@/lib/auth-helpers';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default async function ServicesPage() {
  const user = await requireAuth();
  
  const services = await prisma.service.findMany({
    where: { isActive: true },
    include: {
      _count: {
        select: {
          leads: true,
          deals: true,
          users: true,
        },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Services Overview</h2>
        <p className="text-muted-foreground">
          Track performance across all StarInfoSec services
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{service.name}</CardTitle>
              </div>
              <CardDescription className="line-clamp-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Leads:</span>
                  <span className="font-semibold">{service._count.leads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deals:</span>
                  <span className="font-semibold">{service._count.deals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Size:</span>
                  <span className="font-semibold">{service._count.users}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
