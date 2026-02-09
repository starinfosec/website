import { requireAuth } from '@/lib/auth-helpers';

export default async function LeadsPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Lead Management</h2>
        <p className="text-muted-foreground">
          Manage and track your sales leads
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Lead management interface coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Data table with sorting and filtering</li>
          <li>• Lead creation and editing forms</li>
          <li>• Stage management and tracking</li>
          <li>• Follow-up scheduling</li>
          <li>• Lead assignment</li>
        </ul>
      </div>
    </div>
  );
}
