"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, MessageSquare, ChevronRight, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/inventory", label: "Inventory", icon: Car },
  { href: "/admin/leads", label: "Leads", icon: MessageSquare },
];

function SidebarContent({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-secondary">Edwin Kibira</p>
          <p className="text-lg font-black uppercase text-gray-900 leading-tight">Isuzu Sales</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-700">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-bold text-sm transition-all ${
                isActive
                  ? "bg-secondary text-white shadow-sm shadow-secondary/30"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white font-black text-sm">EK</div>
          <div>
            <p className="text-sm font-black text-gray-800">Edwin Kibira</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 font-bold text-sm transition-all">
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-gray-100 shadow-sm flex-col flex-shrink-0 fixed h-full z-30">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-72 bg-white h-full flex flex-col shadow-xl">
            <SidebarContent pathname={pathname} onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-100 shadow-sm px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-20">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-900">
            <Menu size={22} />
          </button>
          <nav className="hidden sm:flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-400">
            <span>Admin</span>
            <ChevronRight size={12} />
            <span className="text-gray-700">
              {navItems.find(n => n.exact ? pathname === n.href : pathname.startsWith(n.href))?.label || "Dashboard"}
            </span>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/inventory/new"
              className="bg-secondary text-white px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-[#b82222] transition-colors"
            >
              + Add Vehicle
            </Link>
          </div>
        </header>
        <div className="flex-1 p-4 sm:p-8">{children}</div>
      </main>
    </div>
  );
}
