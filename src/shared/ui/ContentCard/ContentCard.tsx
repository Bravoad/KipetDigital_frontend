import { Link } from 'react-router-dom';
import type { BaseContentEntity } from '@/shared/types/content';
import { getEntityImage, getEntitySummary, getEntityTitle, getEntityUrlId, truncateText } from '@/shared/utils/content';
import './ContentCard.css';

type ContentCardProps<T extends BaseContentEntity> = {
  item: T;
  hrefBase: string;
  label?: string;
};

export function ContentCard<T extends BaseContentEntity>({ item, hrefBase, label }: ContentCardProps<T>) {
  const title = getEntityTitle(item);
  const summary = truncateText(getEntitySummary(item), 160);
  const imageUrl = getEntityImage(item);
  const href = `${hrefBase}/${getEntityUrlId(item)}`;

  return (
    <article className="content-card">
      {imageUrl ? (
        <img className="content-card__image" src={imageUrl} alt={title} loading="lazy" />
      ) : (
        <div className="content-card__image content-card__image--placeholder" aria-hidden="true" />
      )}
      <div className="content-card__body">
        {label && <span className="content-card__label">{label}</span>}
        <h3>{title}</h3>
        {summary && <p>{summary}</p>}
        <Link to={href} className="content-card__link">
          Подробнее
        </Link>
      </div>
    </article>
  );
}
