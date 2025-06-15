'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HistoryPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Content History</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700">
          This page will display your generated content history.
          (Currently, this feature is not implemented as content generation history is not being stored.)
        </p>
        {/* Future implementation: Display a list of generated content */}
      </div>
    </div>
  );
} 