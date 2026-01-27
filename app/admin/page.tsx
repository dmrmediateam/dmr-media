'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Hardcoded credentials
    if (username === 'DMR' && password === '123456') {
      // Set session in localStorage
      localStorage.setItem('dmr_auth', JSON.stringify({
        user: 'DMR',
        client: 'legendary',
        timestamp: Date.now()
      }));
      
      // Redirect to legendary dashboard
      router.push('/legendary');
    } else {
      setError('Invalid username or password');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3c88c0]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3c88c0]/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-md p-12 bg-[#fafaf9] rounded-sm shadow-2xl border border-[#e7e7e5] relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-[#0f0f0f] mb-3 tracking-tight">DMR Media</h1>
          <p className="text-[#525252] font-light uppercase tracking-[0.2em] text-xs">Client Dashboard Access</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-xs uppercase tracking-[0.2em] text-[#525252] mb-3 font-light">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-[#e7e7e5] text-[#0f0f0f] placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-[#3c88c0] focus:border-transparent font-light"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs uppercase tracking-[0.2em] text-[#525252] mb-3 font-light">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-[#e7e7e5] text-[#0f0f0f] placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-[#3c88c0] focus:border-transparent font-light"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200">
              <p className="text-red-700 text-sm font-light">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-[#0f0f0f] hover:opacity-80 disabled:opacity-40 text-[#fafaf9] font-light uppercase tracking-[0.2em] text-xs transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-[#3c88c0] focus:ring-offset-2"
          >
            {loading ? 'Signing in...' : 'Access Dashboard'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#525252] font-light uppercase tracking-wider">
            Authorized access only
          </p>
        </div>
      </div>
    </div>
  );
}
