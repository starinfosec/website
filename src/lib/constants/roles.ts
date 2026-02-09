export const ROLES = {
  ADMIN: 'ADMIN',
  SALES_MANAGER: 'SALES_MANAGER',
  SALES_EXECUTIVE: 'SALES_EXECUTIVE',
} as const;

export type RoleType = typeof ROLES[keyof typeof ROLES];

// Route-based access control list
export const ROUTE_ACL: Record<string, RoleType[]> = {
  '/dashboard': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/services': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/leads': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/deals': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/team': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/analytics': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/training': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/notifications': [ROLES.ADMIN, ROLES.SALES_MANAGER, ROLES.SALES_EXECUTIVE],
  '/dashboard/admin': [ROLES.ADMIN],
};

export function hasAccess(userRole: RoleType, route: string): boolean {
  // Find the most specific route match
  const matchingRoute = Object.keys(ROUTE_ACL)
    .filter(r => route.startsWith(r))
    .sort((a, b) => b.length - a.length)[0];

  if (!matchingRoute) {
    return false;
  }

  return ROUTE_ACL[matchingRoute].includes(userRole);
}
