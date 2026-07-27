"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  CarFront, 
  LayoutDashboard, 
  Settings, 
  Users, 
  ChevronLeft,
  Settings2,
  Database,
  Image as ImageIcon,
  LogOut,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Inventory", icon: CarFront, href: "/inventory" },
    { label: "Sourcing", icon: Sparkles, href: "/sourcing" },
    { label: "Leads", icon: Users, href: "/leads" },
    { label: "Analytics", icon: BarChart3, href: "/analytics" },
    { label: "Media Library", icon: ImageIcon, href: "/media" },
    { label: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-primary border-r border-white/5 flex flex-col fixed left-0 top-0">
      <div className="p-8 border-b border-white/5">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            ASPIRE<span className="text-accent">ADMIN</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold uppercase transition-all group",
                isActive 
                  ? "bg-accent text-primary" 
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={20} className={cn("transition-colors", isActive ? "text-primary" : "text-white/20 group-hover:text-accent")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all font-bold uppercase text-xs"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
