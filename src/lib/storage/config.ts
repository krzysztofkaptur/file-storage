import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.BE_URL!, process.env.API_SECRET!)

export { supabase }
