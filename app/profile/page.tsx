'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data
    fetch('/api/auth/user')
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          // Not logged in, redirect to login
          router.push('/api/auth/google');
        } else {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching user:', err);
        setLoading(false);
      });
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome!</h1>
          <p className="text-gray-600 mb-6">You are logged in.</p>
          
          <div className="bg-gray-50 rounded-md p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2">User Profile:</h2>
            <pre className="text-sm text-gray-800 overflow-auto">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
