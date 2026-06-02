import { User } from '@supabase/supabase-js'
import { supabase } from '../../config/supabase'
import { UserProfile } from './user.types'

export const getUserProfileByGoogleId = async (
  authUser: User,
): Promise<UserProfile | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('google_id', authUser.id)
    .maybeSingle()

  if (error) {
    throw new Error(error.message)
  }

  return data
}