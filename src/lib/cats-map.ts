import React from 'react';
import {
  GingerCatIcon, GhostCatIcon, ShadowCatIcon, BonesCatIcon, IdentityCrisisCatIcon,
  AltCat, BreuCatIcon, ZumbiCatIcon, BlizzardCatIcon, VoodooCatIcon,
  SleepyCatIcon, HologramCatIcon, GravityCatIcon, GlitchCatIcon
} from '@/components/cats';

const Unknown = ({ className }: { className?: string }) => (
  <div className={className} aria-label="Unknown cat" />
);

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
  glitch: GlitchCatIcon
};

export function getCatComponent(id?: string) {
  const Comp = (id && catComponentMap[id]) || Unknown;
  if (!id || !catComponentMap[id]) console.warn('[cats-map] Unknown cat id:', id);
  return Comp;
}
