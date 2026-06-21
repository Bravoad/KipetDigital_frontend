import { useServices } from '@/entities/service/hooks';
import { ContentCard } from '@/shared/ui/ContentCard/ContentCard';
import { ItemsGrid } from '@/shared/ui/ItemsGrid/ItemsGrid';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { QueryState } from '@/shared/ui/QueryState/QueryState';
import { Section } from '@/shared/ui/Section/Section';

export function ServicesPage() {
  const { data = [], isLoading, error } = useServices();

  return (
    <>
      <PageTitle title="Услуги" description="Разработка, интеграции, автоматизация и сопровождение цифровых продуктов." />
      <Section compact>
        <QueryState isLoading={isLoading} error={error} isEmpty={data.length === 0}>
          <ItemsGrid>
            {data.map((service) => <ContentCard key={service.id} item={service} hrefBase="/services" label="Услуга" />)}
          </ItemsGrid>
        </QueryState>
      </Section>
    </>
  );
}
