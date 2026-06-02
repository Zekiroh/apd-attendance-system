export interface UserProfile {
  id: string
  google_id: string
  email: string
  full_name: string
  section: string
  year_level: string
  gender: string
  phone_number: string | null
  student_number: string | null
  role: string
  created_at: string
  updated_at: string
}