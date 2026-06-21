import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { BaseContentEntity } from '@/shared/types/content';
import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container/Container';
import { getEntityBody, getEntityImage, getEntityTitle } from '@/shared/utils/content';
import './DetailView.css';

type DetailViewProps<T extends BaseContentEntity> = {
  item: T;
  backHref: string;
  backLabel: string;
  meta?: string[];
  children?: ReactNode;
};

export function DetailView<T extends BaseContentEntity>({ item, backHref, backLabel, meta = [], children }: DetailViewProps<T>) {
  const title = getEntityTitle(item);
  const body = getEntityBody(item);
  const image = getEntityImage(item);

  return (
    <article className="detail-view">
      <Container>
        <Link to={backHref} className="detail-view__back">← {backLabel}</Link>
        <div className="detail-view__header">
          <div>
            {meta.length > 0 && <div className="detail-view__meta">{meta.filter(Boolean).join(' • ')}</div>}
            <h1>{title}</h1>
          </div>
          <Link to="/contacts"><Button>Обсудить задачу</Button></Link>
        </div>

        {image && <img className="detail-view__image" src={image} alt={title} />}

        {body && <div className="detail-view__body">{body}</div>}
        {children}
      </Container>
    </article>
  );
}
