import { createClient } from "@supabase/supabase-js";

// Use environment variables so keys are not checked into source control.
// For Vite the variables should be prefixed with VITE_.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase client initialized without VITE_SUPABASE_URL or VITE_SUPABASE_KEY. Make sure to add them to .env.local'
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
