'use client';

import { useAuth } from '../context/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <p className="text-gray-700 mb-2">Username: <span className="font-medium">{user.username}</span></p>
        <p className="text-gray-500 text-sm mt-4">Authentication is currently disabled. You are using the app as a guest.</p>
      </div>
    </div>
  );
} 