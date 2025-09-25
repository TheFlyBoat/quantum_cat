'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Award, Bolt, Fish } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useAchievements } from '@/context/achievements-context';
import { usePoints } from '@/context/points-context';
import { useBadges } from '@/context/badge-context';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function AppHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { displayName } = useAuth();
  const { streak } = useAchievements();
  const { points } = usePoints();
  const { unlockedBadges } = useBadges();

  const isHomePage = pathname === '/home';

  const safeBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) router.back();
    else router.push('/home');
  };

  return (
    <TooltipProvider>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 text-sm font-semibold">
          {!isHomePage && (
            <Button aria-label="Go back" variant="ghost" size="icon" className="w-7 h-7" onClick={safeBack}>
              <ArrowLeft />
            </Button>
          )}
          {displayName && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1 bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 cursor-default" aria-label="Your nickname">
                  <User className="w-4 h-4" />
                  <span>{displayName}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your Nickname</p>
              </TooltipContent>
            </Tooltip>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1 cursor-default" aria-label="Badges unlocked">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>{unlockedBadges.length}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Badges Unlocked</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1 cursor-default" aria-label="Daily streak">
                <Bolt className="w-5 h-5 text-red-500" />
                <span>{streak}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Daily Streak</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1 cursor-default" aria-label="Fish points">
                <Fish className="w-5 h-5 text-blue-500" />
                <span>{points}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Fish Points</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
