'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  Shield,
  Users,
  Kanban,
  UserCog,
  BarChart,
  GraduationCap,
  Bell,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  userRole: string;
}

const navItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: Home,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Services',
    href: '/dashboard/services',
    icon: Shield,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Leads',
    href: '/dashboard/leads',
    icon: Users,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Deal Pipeline',
    href: '/dashboard/deals',
    icon: Kanban,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Sales Team',
    href: '/dashboard/team',
    icon: UserCog,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Training',
    href: '/dashboard/training',
    icon: GraduationCap,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell,
    roles: ['ADMIN', 'SALES_MANAGER', 'SALES_EXECUTIVE'],
  },
  {
    title: 'Admin Panel',
    href: '/dashboard/admin',
    icon: Settings,
    roles: ['ADMIN'],
  },
];

export function DashboardSidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();

  const filteredNavItems = navItems.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-slate-900 text-slate-100">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-slate-800 px-6">
          <Shield className="mr-2 h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">StarInfoSec CRM</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {filteredNavItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/dashboard' && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 p-4 text-xs text-slate-400">
          © 2026 StarInfoSec
        </div>
      </div>
    </aside>
  );
}
