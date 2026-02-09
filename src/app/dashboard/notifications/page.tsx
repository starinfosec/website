import { requireAuth } from '@/lib/auth-helpers';

export default async function NotificationsPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Notifications</h2>
        <p className="text-muted-foreground">
          Stay updated with important alerts and reminders
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Notification center coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Follow-up reminders</li>
          <li>• Payment due alerts</li>
          <li>• Training batch notifications</li>
          <li>• Inactive lead warnings</li>
          <li>• SLA deadline alerts</li>
        </ul>
      </div>
    </div>
  );
}
