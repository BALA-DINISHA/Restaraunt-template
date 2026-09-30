// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  throw new Error(
    "Missing Supabase env vars. Did you create .env.local and restart the dev server?"
  );
}

export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,       // survives refresh
    autoRefreshToken: true,     // renews JWT automatically
    detectSessionInUrl: true,   // handles magic-link redirects (future)
  },
}); 