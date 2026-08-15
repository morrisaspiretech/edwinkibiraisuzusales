"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCar, FaMessage, FaUsers, FaMagnifyingGlass, FaGauge, FaDollarSign, FaChartBar, FaRightFromBracket, FaBell, FaGear } from "react-icons/fa6";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: FaGauge, exact: true },
  { href: "/admin/inventory", label: "Inventory", icon: FaCar },
  { href: "/admin/leads", label: "Enquiries", icon: FaMessage },
  { href: "/admin/customers", label: "Customers", icon: FaUsers },
  { href: "/admin/sales", label: "Sales", icon: FaDollarSign },
  { href: "/admin/analytics", label: "Analytics", icon: FaChartBar },
];

function Sidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="w-[260px] bg-[#0F172A] flex flex-col h-screen fixed z-30">
      {/* Logo */}
      <div className="px-6 py-7 flex items-center gap-3 border-b border-white/5">
        <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/40">
          <span className="text-white font-black text-lg">I</span>
        </div>
        <div>
          <p className="text-white font-bold text-[15px] leading-tight">Edwin Isuzu</p>
          <p className="text-white/40 text-[11px]">Sales & Service</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest px-3 mb-3">Main Menu</p>
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-all ${
                isActive
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/30"
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Admin Profile */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer mb-2">
          <div className="w-9 h-9 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400 font-bold text-sm flex-shrink-0">
            EK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold truncate">Edwin Kibira</p>
            <p className="text-white/40 text-xs">Super Admin</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 w-full rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all text-sm font-semibold">
          <FaRightFromBracket size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

function Topbar({ title }: { title?: string }) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-20">
      <h1 className="text-xl font-bold text-gray-900">{title || "Dashboard"}</h1>
      <div className="flex items-center gap-3">
        <div className="relative">
          <FaMagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none focus:border-red-400 transition-colors w-48"
          />
        </div>
        <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 relative">
          <FaBell size={17} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
          <FaGear size={17} />
        </button>
        <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-xs">
            EK
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 leading-tight">Edwin Kibira</p>
            <p className="text-[10px] text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentPage = navItems.find((item) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Sidebar pathname={pathname} />
      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <Topbar title={currentPage?.label} />
        <div className="flex-1 p-8">{children}</div>
      </main>
    </div>
  );
}
