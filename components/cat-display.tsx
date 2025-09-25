
import { type CatState } from '@/lib/types';
import { getCatComponent } from '@/lib/cats-map';

interface CatDisplayProps {
  state: CatState;
}



export function CatDisplay({ state }: CatDisplayProps) {
  const { outcome, catId } = state;

  if (outcome === 'initial' || !catId) return null;

  const CatComponent = getCatComponent(catId);

  return CatComponent ? (
      <div className="animate-bounce-in">
        <CatComponent className="w-52 h-52 md:w-56 md:h-56" />
      </div>
  ) : null;
}
