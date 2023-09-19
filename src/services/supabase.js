import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbaudkikxgtswsbucysk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiYXVka2lreGd0c3dzYnVjeXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMjg0NzYsImV4cCI6MjAxMDYwNDQ3Nn0.bFPuKEoZU9GFa4xBdmIjmD3Uhn4_LAV6_M-koySpqvM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
