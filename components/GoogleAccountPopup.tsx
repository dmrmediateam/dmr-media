'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    google?: any;
  }
}

interface GoogleAccount {
  id: string;
  email: string;
  name: string;
  picture: string;
}

export default function GoogleAccountPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState<GoogleAccount | null>(null);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    fetch('/api/auth/user')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setCurrentUser(data.user);
        } else {
          // Load Google Identity Services
          const script = document.createElement('script');
          script.src = 'https://accounts.google.com/gsi/client';
          script.async = true;
          script.defer = true;
          script.onload = () => {
            setIsGoogleLoaded(true);
          };
          document.head.appendChild(script);
        }
      })
      .catch(err => console.error('Error checking auth:', err));
  }, []);

  useEffect(() => {
    if (isGoogleLoaded && window.google) {
      console.log('Initializing Google One Tap...');
      console.log('Using Client ID:', '830886197038-4r4ior04d7dq1382ahqvgq6to50p0hb9.apps.googleusercontent.com');
      console.log('Current origin:', window.location.origin);
      
      // Initialize Google Identity Services
      window.google.accounts.id.initialize({
        client_id: '830886197038-4r4ior04d7dq1382ahqvgq6to50p0hb9.apps.googleusercontent.com',
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: false,
        context: 'signin',
        itp_support: true,
      });

      // Show the One Tap prompt immediately - this shows the account picker
      setTimeout(() => {
        console.log('Triggering Google One Tap prompt...');
        window.google.accounts.id.prompt((notification: any) => {
          console.log('One Tap notification:', notification);
          
          if (notification.isNotDisplayed()) {
            const reason = notification.getNotDisplayedReason();
            console.log('One Tap not displayed. Reason:', reason);
            console.log('If reason is "unregistered_origin", verify http://localhost:3000 is in Google Console JavaScript origins');
            // Show our fallback popup
            setShowPopup(true);
          } else if (notification.isSkippedMoment()) {
            console.log('One Tap skipped');
            setShowPopup(true);
          } else if (notification.isDismissedMoment()) {
            console.log('One Tap dismissed');
          }
        });
      }, 500);
    }
  }, [isGoogleLoaded]);

  const handleCredentialResponse = async (response: any) => {
    try {
      // Send the credential to our backend
      const result = await fetch('/api/auth/google/credential', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await result.json();
      
      if (data.success) {
        // Store recent account
        const recentAccount = {
          id: data.user.sub,
          email: data.user.email,
          name: data.user.name,
          picture: data.user.picture,
        };
        
        // Save to localStorage
        const existing = localStorage.getItem('recentGoogleAccounts');
        let accounts = existing ? JSON.parse(existing) : [];
        const existingIndex = accounts.findIndex((a: any) => a.id === recentAccount.id);
        if (existingIndex >= 0) {
          accounts.splice(existingIndex, 1);
        }
        accounts.unshift(recentAccount);
        accounts = accounts.slice(0, 3);
        localStorage.setItem('recentGoogleAccounts', JSON.stringify(accounts));

        // Reload page to update UI
        window.location.reload();
      }
    } catch (error) {
      console.error('Error handling credential:', error);
    }
  };

  const handleSignInClick = () => {
    if (window.google) {
      // Trigger the prompt again
      window.google.accounts.id.prompt();
    }
  };

  const handleDismiss = () => {
    setShowPopup(false);
  };

  // Don't show our custom popup if user is already logged in
  if (currentUser) {
    return null;
  }

  // Only show fallback popup if One Tap didn't appear
  if (!showPopup) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-[100]"
        onClick={handleDismiss}
      />

      {/* Fallback Popup Window */}
      <div className="fixed top-4 right-4 z-[101] w-[380px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-slide-in">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-medium text-gray-900">Sign in</h2>
                <p className="text-sm text-gray-600">to continue to DMR Media</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="p-6">
          <button
            onClick={handleSignInClick}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-600">
            To continue, Google will share your name, email address, and profile picture with DMR Media.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
