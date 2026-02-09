import { requireAuth } from '@/lib/auth-helpers';

export default async function DealsPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Deal Pipeline</h2>
        <p className="text-muted-foreground">
          Visualize and manage your sales pipeline
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Kanban board coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Drag-and-drop deal cards</li>
          <li>• Stage-based pipeline view</li>
          <li>• Deal value tracking</li>
          <li>• Expected close dates</li>
          <li>• Team collaboration</li>
        </ul>
      </div>
    </div>
  );
}
