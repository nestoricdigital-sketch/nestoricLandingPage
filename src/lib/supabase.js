import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tcsfhsjvdwedulygnson.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjc2Zoc2p2ZHdlZHVseWduc29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNjk2NTAsImV4cCI6MjA3Nzc0NTY1MH0.9Td-A2V-pTJ71bLxSk_s1EXAMxVjt3WC1Qpq5qxWBTI';

// console.log('VITE_SUPABASE_URL', import.meta.env.VITE_SUPABASE_URL)
// console.log('VITE_SUPABASE_ANON_KEY', import.meta.env.VITE_SUPABASE_ANON_KEY)

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

