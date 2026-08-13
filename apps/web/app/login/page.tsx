"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ShieldCheck } from 'lucide-react';

export default function AuthPage() {
    const supabase = createClientComponentClient();

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 selection:bg-primary">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-2xl font-black italic tracking-tighter mb-4">
                        <div className="w-10 h-10 bg-primary rotate-45 flex items-center justify-center">
                            <span className="rotate-[-45deg] text-white text-xs font-black italic">AM</span>
                        </div>
                        ASPIRE<span className="text-primary">MOTORS</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome Back</h1>
                    <p className="text-white/40 text-sm">Sign in to manage your listings, favorites, and valuations.</p>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl">
                    <Auth
                        supabaseClient={supabase}
                        appearance={{
                            theme: ThemeSupa,
                            variables: {
                                default: {
                                    colors: {
                                        brand: '#2563eb',
                                        brandAccent: '#1d4ed8',
                                        inputBackground: 'transparent',
                                        inputText: 'white',
                                        inputPlaceholder: 'rgba(255, 255, 255, 0.4)',
                                    }
                                }
                            }
                        }}
                        theme="dark"
                        providers={['google']}
                        redirectTo={`${window.location.origin}/auth/callback`}
                    />
                </div>

                <div className="flex items-center gap-2 justify-center text-white/20 text-[10px] uppercase font-black tracking-widest">
                    <ShieldCheck size={14} /> Encrypted and Secure via Supabase
                </div>
            </div>
        </div>
    );
}
