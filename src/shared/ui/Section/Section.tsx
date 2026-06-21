import type { PropsWithChildren } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import './Section.css';

type SectionProps = PropsWithChildren<{
  title?: string;
  description?: string;
  compact?: boolean;
}>;

export function Section({ title, description, compact = false, children }: SectionProps) {
  return (
    <section className={`section ${compact ? 'section--compact' : ''}`}>
      <Container>
        {(title || description) && (
          <div className="section__header">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
