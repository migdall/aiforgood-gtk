import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, MapPin, Users, Trophy } from 'lucide-react';
import { z } from 'zod';
import laSunsetStreet from '@/assets/la-sunset-street.jpg';

const authSchema = z.object({
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters').regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  ),
  username: z.string().trim().min(3, 'Username must be at least 3 characters').max(20, 'Username must be less than 20 characters').regex(
    /^[a-zA-Z0-9_]+$/,
    'Username can only contain letters, numbers, and underscores'
  ).optional(),
});

export default function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validationData = isLogin 
        ? { email, password }
        : { email, password, username };
      
      const result = authSchema.safeParse(validationData);
      
      if (!result.success) {
        const firstError = result.error.errors[0];
        toast.error(firstError.message);
        setLoading(false);
        return;
      }

      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: result.data.email,
          password: result.data.password,
        });
        if (error) throw error;
        toast.success('Welcome back!');
        navigate('/');
      } else {
        const { error } = await supabase.auth.signUp({
          email: result.data.email,
          password: result.data.password,
          options: {
            data: {
              username: result.data.username || result.data.email.split('@')[0],
            },
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
        toast.success('Account created! Welcome to GetToKnow.City!');
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${laSunsetStreet})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sunset-pink rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sunset-purple rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-4 md:gap-8 items-center relative z-10">
        {/* Hero Section */}
        <div className="text-white space-y-3 md:space-y-6 px-4">
          <div className="space-y-2 md:space-y-4">
            <h1 className="font-poppins font-black text-3xl md:text-6xl lg:text-7xl leading-tight">
              <span className="neon-text-pink">GetToKnow</span>
              <span className="neon-text-purple">.City</span>
            </h1>
            <p className="hidden md:block text-xl md:text-2xl text-white/90 font-light">
              Explore cities like never before. Discover hidden gems, connect with local culture & fellow travelers, collect badges for real world prizes—all before you even visit IRL!
            </p>
          </div>

          <div className="space-y-2 md:space-y-4 pt-2 md:pt-4">
            <div className="flex items-center gap-3 md:gap-4 text-white/80">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-4 h-4 md:w-6 md:h-6 text-sunset-pink" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg">Real-World Quests</h3>
                <p className="hidden md:block text-sm text-white/70">Discover locations in immersive 3D</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 text-white/80">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Trophy className="w-4 h-4 md:w-6 md:h-6 text-sunset-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg">Collect Badges</h3>
                <p className="hidden md:block text-sm text-white/70">Earn achievements as you explore</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 text-white/80">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-4 h-4 md:w-6 md:h-6 text-sunset-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg">Connect & Share</h3>
                <p className="hidden md:block text-sm text-white/70">Meet fellow explorers online</p>
              </div>
            </div>
          </div>
        </div>

        {/* Auth Form */}
        <div className="glass-panel rounded-2xl p-4 md:p-8 lg:p-10 w-full max-w-md mx-auto">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-xl md:text-3xl font-poppins font-bold text-white mb-1 md:mb-2">
              {isLogin ? 'Welcome Back' : 'Join the Adventure'}
            </h2>
            <p className="text-sm md:text-base text-white/70">
              {isLogin ? 'Sign in to continue exploring' : 'Create your account to get started'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-3 md:space-y-5">
            {!isLogin && (
              <div>
                <Label htmlFor="username" className="text-white/90 font-medium">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required={!isLogin}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-sunset-pink focus:ring-sunset-pink"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email" className="text-white/90 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-sunset-pink focus:ring-sunset-pink"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white/90 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-sunset-pink focus:ring-sunset-pink"
              />
              {!isLogin && (
                <p className="text-xs text-white/60 mt-1">
                  Min 8 chars, 1 uppercase, 1 lowercase, 1 number
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-sunset-pink to-sunset-purple hover:from-sunset-purple hover:to-sunset-pink text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-sunset-pink/20"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </>
              ) : (
                <>{isLogin ? 'Sign In' : 'Sign Up'}</>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
