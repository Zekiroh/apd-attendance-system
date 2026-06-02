import { supabase } from '../services/supabase'

function Login() {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })
  }

  return (
    <main>
      <h1>APD Attendance System</h1>
      <p>Sign in with your Google account to continue.</p>

      <button type="button" onClick={handleGoogleLogin}>
        Continue with Google
      </button>
    </main>
  )
}

export default Login