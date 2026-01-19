import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Lazy-loaded Supabase client to avoid build errors when env vars are not set
let _supabase: SupabaseClient<Database> | null = null;

export const supabase = {
  from: (table: string) => {
    if (!_supabase) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        // Return a mock that throws on actual queries but doesn't break imports
        return {
          select: () => ({
            eq: () => ({ single: () => Promise.reject(new Error("Supabase not configured")), order: () => Promise.reject(new Error("Supabase not configured")) }),
            or: () => Promise.reject(new Error("Supabase not configured")),
            order: () => Promise.reject(new Error("Supabase not configured")),
            limit: () => Promise.reject(new Error("Supabase not configured")),
          }),
        };
      }

      _supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
    }
    return _supabase.from(table);
  },
} as unknown as SupabaseClient<Database>;

// Server-side client with service role for admin operations
export const createServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase server credentials not configured");
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey);
};

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
};
