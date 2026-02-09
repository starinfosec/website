import { auth } from './auth';
import { Role } from '@prisma/client';
import { redirect } from 'next/navigation';

export async function getSession() {
  return await auth();
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user;
}

export async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    redirect('/login');
  }
  return session.user;
}

export async function requireRole(allowedRoles: Role[]) {
  const user = await requireAuth();
  if (!allowedRoles.includes(user.role)) {
    redirect('/dashboard');
  }
  return user;
}

export function canAccessResource(
  userRole: Role,
  resourceOwner: { assignedToId?: string | null; userId?: string | null },
  userId: string
): boolean {
  // Admin can access everything
  if (userRole === 'ADMIN') {
    return true;
  }

  // Sales manager can access team resources (same service)
  if (userRole === 'SALES_MANAGER') {
    return true; // Will be filtered by service in queries
  }

  // Sales executive can only access their own resources
  const ownerId = resourceOwner.assignedToId || resourceOwner.userId;
  return ownerId === userId;
}
