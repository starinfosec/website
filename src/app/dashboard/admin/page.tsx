import { requireRole } from '@/lib/auth-helpers';

export default async function AdminPage() {
  const user = await requireRole(['ADMIN']);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Control Panel</h2>
        <p className="text-muted-foreground">
          System administration and configuration
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Admin panel coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• User management (CRUD)</li>
          <li>• Role assignment</li>
          <li>• Service configuration</li>
          <li>• Monthly target setting</li>
          <li>• Report export (CSV/PDF)</li>
          <li>• Audit log viewing</li>
        </ul>
      </div>
    </div>
  );
}
