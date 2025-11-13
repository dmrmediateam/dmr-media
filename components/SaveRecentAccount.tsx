'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SaveRecentAccount() {
  const router = useRouter();

  useEffect(() => {
    // Get the recent account cookie
    const cookies = document.cookie.split(';');
    const recentAccountCookie = cookies.find(c => c.trim().startsWith('recentAccount='));
    
    if (recentAccountCookie) {
      const accountData = JSON.parse(decodeURIComponent(recentAccountCookie.split('=')[1]));
      
      // Get existing accounts from localStorage
      const existing = localStorage.getItem('recentGoogleAccounts');
      let accounts = existing ? JSON.parse(existing) : [];
      
      // Add new account (avoiding duplicates)
      const existingIndex = accounts.findIndex((a: any) => a.id === accountData.id);
      if (existingIndex >= 0) {
        accounts.splice(existingIndex, 1);
      }
      accounts.unshift(accountData); // Add to front
      
      // Keep only last 3 accounts
      accounts = accounts.slice(0, 3);
      
      // Save back to localStorage
      localStorage.setItem('recentGoogleAccounts', JSON.stringify(accounts));
    }
  }, []);

  return null;
}
