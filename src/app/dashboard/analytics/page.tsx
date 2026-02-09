import { requireAuth } from '@/lib/auth-helpers';

export default async function AnalyticsPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          Deep dive into revenue and performance metrics
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Analytics dashboard coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Revenue by service charts</li>
          <li>• Revenue by team member</li>
          <li>• Monthly growth trends</li>
          <li>• Conversion funnel</li>
          <li>• Average deal size</li>
        </ul>
      </div>
    </div>
  );
}
