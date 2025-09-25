'use client';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QuantumCatBox } from '@/components/quantum-cat-box';

export default function RootPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (user) router.replace('/home');
    else router.push('/login');
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <QuantumCatBox
          onClick={() => {}}
          isLoading={true}
          isAmbientShaking={false}
          catState={{ outcome: 'initial' }}
        />
      </div>
    );
  }
  return null;
}
