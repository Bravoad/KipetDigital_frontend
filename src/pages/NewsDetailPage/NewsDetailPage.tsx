import { useParams } from 'react-router-dom';
import { useNewsDetail } from '@/entities/news/hooks';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Section } from '@/shared/ui/Section/Section';
import { formatDate } from '@/shared/utils/date';
import { DetailView } from '@/widgets/DetailView/DetailView';

export function NewsDetailPage() {
  const { idOrSlug } = useParams();
  const { data, isLoading, error } = useNewsDetail(idOrSlug);

  if (isLoading) return <Section><Loader /></Section>;
  if (error) return <Section><ErrorMessage error={error} /></Section>;
  if (!data) return <Section><ErrorMessage message="Новость не найдена" /></Section>;

  return (
    <DetailView
      item={data}
      backHref="/news"
      backLabel="К новостям"
      meta={[formatDate(data.published_at || data.created_at), data.author ?? ''].filter(Boolean) as string[]}
    />
  );
}
