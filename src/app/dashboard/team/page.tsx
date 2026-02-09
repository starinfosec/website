import { requireAuth } from '@/lib/auth-helpers';

export default async function TeamPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Sales Team</h2>
        <p className="text-muted-foreground">
          Manage your sales team and track performance
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Team management interface coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Team member profiles</li>
          <li>• Performance metrics</li>
          <li>• Target tracking</li>
          <li>• Lead assignments</li>
          <li>• Activity history</li>
        </ul>
      </div>
    </div>
  );
}
