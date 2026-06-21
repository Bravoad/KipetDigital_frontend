import { useProjects } from '@/entities/project/hooks';
import { ContentCard } from '@/shared/ui/ContentCard/ContentCard';
import { ItemsGrid } from '@/shared/ui/ItemsGrid/ItemsGrid';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { QueryState } from '@/shared/ui/QueryState/QueryState';
import { Section } from '@/shared/ui/Section/Section';

export function ProjectsPage() {
  const { data = [], isLoading, error } = useProjects();

  return (
    <>
      <PageTitle title="Проекты" description="Примеры цифровых продуктов, интеграций и внутренних систем." />
      <Section compact>
        <QueryState isLoading={isLoading} error={error} isEmpty={data.length === 0}>
          <ItemsGrid>
            {data.map((project) => <ContentCard key={project.id} item={project} hrefBase="/projects" label="Кейс" />)}
          </ItemsGrid>
        </QueryState>
      </Section>
    </>
  );
}
