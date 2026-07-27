"use client";

import React, { useEffect, useState } from "react";
import { Bell, Search, UserCircle } from "lucide-react";
import { createClient } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

const AdminHeader = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-4 py-2 rounded-md w-96">
        <Search size={18} className="text-slate-400" />
        <input 
          type="text" 
          placeholder="Search cars, leads, or analytics..." 
          className="bg-transparent border-none text-sm focus:outline-none w-full font-medium"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white" />
        </button>
        
        <div className="h-10 w-[1px] bg-slate-200" />
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-primary leading-none">
              {user?.email?.split('@')[0] || "Admin User"}
            </p>
            <p className="text-xs font-extrabold text-slate-500 uppercase mt-1 tracking-wider leading-none">
              {user?.email || "Super Admin"}
            </p>
          </div>
          <div className="w-10 h-10 bg-accent/20 border border-accent/20 rounded-lg flex items-center justify-center text-accent">
            <UserCircle size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
