import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uafivyzacxajjhmtduhs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhZml2eXphY3hhampobXRkdWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NDQ1MTQsImV4cCI6MjA0MjIyMDUxNH0.PvBbpHhu-FJvqxvWvyMGb5L9Dbvd7JJCkVbEuIUM_14";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
