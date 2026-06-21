import { useParams } from 'react-router-dom';
import { useProjectDetail } from '@/entities/project/hooks';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Section } from '@/shared/ui/Section/Section';
import { DetailView } from '@/widgets/DetailView/DetailView';

export function ProjectDetailPage() {
  const { idOrSlug } = useParams();
  const { data, isLoading, error } = useProjectDetail(idOrSlug);

  if (isLoading) return <Section><Loader /></Section>;
  if (error) return <Section><ErrorMessage error={error} /></Section>;
  if (!data) return <Section><ErrorMessage message="Проект не найден" /></Section>;

  return (
    <DetailView
      item={data}
      backHref="/projects"
      backLabel="К проектам"
      meta={[data.client ?? '', data.industry ?? '', data.result ?? ''].filter(Boolean)}
    />
  );
}
