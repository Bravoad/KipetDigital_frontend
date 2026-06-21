import type { ReactNode } from 'react';
import './ItemsGrid.css';

type ItemsGridProps = {
  children: ReactNode;
};

export function ItemsGrid({ children }: ItemsGridProps) {
  return <div className="items-grid">{children}</div>;
}
