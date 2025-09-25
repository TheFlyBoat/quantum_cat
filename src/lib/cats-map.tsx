import React from 'react';
import {
  GingerCatIcon, GhostCatIcon, ShadowCatIcon, BonesCatIcon, IdentityCrisisCatIcon,
  AltCat, BreuCatIcon, ZumbiCatIcon, BlizzardCatIcon, VoodooCatIcon,
  SleepyCatIcon, HologramCatIcon, GravityCatIcon, GlitchCatIcon
} from '@/components/cats';

// Explicit React component type for fallback
const Unknown: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className} aria-label="Unknown cat" />
);

// Map of known cats
export const catComponentMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ginger: GingerCatIcon,
  ghost: GhostCatIcon,
  shadow: ShadowCatIcon,
  bones: BonesCatIcon,
  'identity-crisis': IdentityCrisisCatIcon,
  alt: AltCat,
  breu: BreuCatIcon,
  zumbi: ZumbiCatIcon,
  blizzard: BlizzardCatIcon,
  voodoo: VoodooCatIcon,
  sleepy: SleepyCatIcon,
  hologram: HologramCatIcon,
  gravity: GravityCatIcon,
  paradox: GlitchCatIcon,
  glitch: GlitchCatIcon,
};

// Return an ElementType so <CatComponent /> is legal
export function getCatComponent(id?: string): React.ElementType {
  const Comp: React.ElementType = (id && catComponentMap[id]) || Unknown;
  if (!id || !catComponentMap[id]) console.warn('[cats-map] Unknown cat id:', id);
  return Comp;
}
