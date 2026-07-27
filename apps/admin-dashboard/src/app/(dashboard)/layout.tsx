"use client";

import React from "react";
import AdminSidebar from "@/components/layout/AdminSidebar";
import AdminHeader from "@/components/layout/AdminHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        <AdminHeader />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
