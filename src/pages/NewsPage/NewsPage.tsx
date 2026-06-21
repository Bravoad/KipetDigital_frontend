import { useNews } from '@/entities/news/hooks';
import { ContentCard } from '@/shared/ui/ContentCard/ContentCard';
import { ItemsGrid } from '@/shared/ui/ItemsGrid/ItemsGrid';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { QueryState } from '@/shared/ui/QueryState/QueryState';
import { Section } from '@/shared/ui/Section/Section';

export function NewsPage() {
  const { data = [], isLoading, error } = useNews();

  return (
    <>
      <PageTitle title="Новости" description="Обновления компании, заметки по разработке и практические разборы." />
      <Section compact>
        <QueryState isLoading={isLoading} error={error} isEmpty={data.length === 0}>
          <ItemsGrid>
            {data.map((item) => <ContentCard key={item.id} item={item} hrefBase="/news" label="Новость" />)}
          </ItemsGrid>
        </QueryState>
      </Section>
    </>
  );
}
