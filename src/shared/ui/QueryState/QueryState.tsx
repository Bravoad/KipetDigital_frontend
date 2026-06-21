import type { PropsWithChildren } from 'react';
import { EmptyState } from '@/shared/ui/EmptyState/EmptyState';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { Loader } from '@/shared/ui/Loader/Loader';

type QueryStateProps = PropsWithChildren<{
  isLoading: boolean;
  error: unknown;
  isEmpty?: boolean;
  emptyTitle?: string;
}>;

export function QueryState({ isLoading, error, isEmpty, emptyTitle, children }: QueryStateProps) {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (isEmpty) {
    return <EmptyState title={emptyTitle} />;
  }

  return <>{children}</>;
}
