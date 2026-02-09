import { requireAuth } from '@/lib/auth-helpers';

export default async function TrainingPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Training & Internship</h2>
        <p className="text-muted-foreground">
          Manage training batches and student enrollments
        </p>
      </div>

      <div className="rounded-lg border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          Training management coming soon. This will include:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Batch management</li>
          <li>• Student enrollments</li>
          <li>• Progress tracking</li>
          <li>• Certification management</li>
          <li>• Placement tracking</li>
        </ul>
      </div>
    </div>
  );
}
