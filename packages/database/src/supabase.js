"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupabaseServerClient = exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
const getSupabaseServerClient = () => {
    return (0, supabase_js_1.createClient)(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY || '', {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
};
exports.getSupabaseServerClient = getSupabaseServerClient;
