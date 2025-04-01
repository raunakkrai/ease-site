import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://fpzmkkjeqkbddvetulna.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwem1ra2plcWtiZGR2ZXR1bG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MTM0OTcsImV4cCI6MjA1OTA4OTQ5N30.V1BaHGDgHblTEH4XGc4N2I0oUFcu50D46M2o6QybL0E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
