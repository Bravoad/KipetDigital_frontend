import './EmptyState.css';

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = 'Пока пусто',
  description = 'Данные появятся здесь после наполнения в админке.',
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
