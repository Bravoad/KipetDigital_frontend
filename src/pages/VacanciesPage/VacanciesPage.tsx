import { useVacancies } from '@/entities/vacancy/hooks';
import { ContentCard } from '@/shared/ui/ContentCard/ContentCard';
import { ItemsGrid } from '@/shared/ui/ItemsGrid/ItemsGrid';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { QueryState } from '@/shared/ui/QueryState/QueryState';
import { Section } from '@/shared/ui/Section/Section';

export function VacanciesPage() {
  const { data = [], isLoading, error } = useVacancies();

  return (
    <>
      <PageTitle title="Вакансии" description="Ищем людей, которым интересно делать устойчивые и полезные продукты." />
      <Section compact>
        <QueryState isLoading={isLoading} error={error} isEmpty={data.length === 0} emptyTitle="Активных вакансий пока нет">
          <ItemsGrid>
            {data.map((vacancy) => <ContentCard key={vacancy.id} item={vacancy} hrefBase="/vacancies" label="Вакансия" />)}
          </ItemsGrid>
        </QueryState>
      </Section>
    </>
  );
}
