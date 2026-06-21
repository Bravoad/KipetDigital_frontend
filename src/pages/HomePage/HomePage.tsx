import { Link } from 'react-router-dom';
import { useNews } from '@/entities/news/hooks';
import { useProjects } from '@/entities/project/hooks';
import { useServices } from '@/entities/service/hooks';
import { useTechnologies } from '@/entities/technology/hooks';
import { Button } from '@/shared/ui/Button/Button';
import { ContentCard } from '@/shared/ui/ContentCard/ContentCard';
import { ItemsGrid } from '@/shared/ui/ItemsGrid/ItemsGrid';
import { QueryState } from '@/shared/ui/QueryState/QueryState';
import { Section } from '@/shared/ui/Section/Section';
import { Hero } from '@/widgets/Hero/Hero';
import './HomePage.css';

export function HomePage() {
  const servicesQuery = useServices();
  const projectsQuery = useProjects();
  const newsQuery = useNews();
  const technologiesQuery = useTechnologies();

  const services = servicesQuery.data?.slice(0, 6) ?? [];
  const projects = projectsQuery.data?.slice(0, 3) ?? [];
  const news = newsQuery.data?.slice(0, 3) ?? [];
  const technologies = technologiesQuery.data?.slice(0, 12) ?? [];

  return (
    <>
      <Hero />

      <Section title="Что делаем" description="Закрываем полный цикл разработки: от аналитики и прототипа до инфраструктуры, интеграций и поддержки.">
        <QueryState isLoading={servicesQuery.isLoading} error={servicesQuery.error} isEmpty={services.length === 0}>
          <ItemsGrid>
            {services.map((service) => <ContentCard key={service.id} item={service} hrefBase="/services" label="Услуга" />)}
          </ItemsGrid>
        </QueryState>
      </Section>

      <Section title="Проекты" description="Кейсы и решения, которые можно развивать итерационно без переписывания с нуля.">
        <QueryState isLoading={projectsQuery.isLoading} error={projectsQuery.error} isEmpty={projects.length === 0}>
          <ItemsGrid>
            {projects.map((project) => <ContentCard key={project.id} item={project} hrefBase="/projects" label="Кейс" />)}
          </ItemsGrid>
        </QueryState>
        <div className="home-page__more">
          <Link to="/projects"><Button variant="ghost">Все проекты</Button></Link>
        </div>
      </Section>

      <Section title="Технологии" description="Используем практичный стек под задачи бизнеса, а не ради моды.">
        <QueryState isLoading={technologiesQuery.isLoading} error={technologiesQuery.error} isEmpty={technologies.length === 0}>
          <div className="home-page__tags">
            {technologies.map((technology) => <span key={technology.id}>{technology.title || technology.name}</span>)}
          </div>
        </QueryState>
      </Section>

      <Section title="Новости и заметки" description="Публикуем обновления, разборы решений и технические заметки.">
        <QueryState isLoading={newsQuery.isLoading} error={newsQuery.error} isEmpty={news.length === 0}>
          <ItemsGrid>
            {news.map((item) => <ContentCard key={item.id} item={item} hrefBase="/news" label="Новость" />)}
          </ItemsGrid>
        </QueryState>
      </Section>
    </>
  );
}
