'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    // Authentication is disabled - redirect to dashboard
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to dashboard...</p>
      </div>
    </div>
  );
} 