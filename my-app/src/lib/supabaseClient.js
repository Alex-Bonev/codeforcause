import { SUPABASE_API_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://czczpypccpeuwjtdixgb.supabase.co', SUPABASE_API_KEY)