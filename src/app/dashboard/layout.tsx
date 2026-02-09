import { requireAuth } from '@/lib/auth-helpers';
import { DashboardSidebar } from '@/components/dashboard/layout/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/layout/dashboard-header';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAuth();

  return (
    <div className="flex h-screen">
      <DashboardSidebar userRole={user.role} />
      
      <div className="flex-1 ml-64">
        <DashboardHeader
          userName={user.name || ''}
          userEmail={user.email || ''}
          userRole={user.role}
        />
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
