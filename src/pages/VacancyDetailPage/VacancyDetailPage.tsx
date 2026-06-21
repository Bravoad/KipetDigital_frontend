import { useParams } from 'react-router-dom';
import { useVacancyDetail } from '@/entities/vacancy/hooks';
import { ContactForm } from '@/features/contact-form/ContactForm';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Section } from '@/shared/ui/Section/Section';
import { DetailView } from '@/widgets/DetailView/DetailView';

export function VacancyDetailPage() {
  const { idOrSlug } = useParams();
  const { data, isLoading, error } = useVacancyDetail(idOrSlug);

  if (isLoading) return <Section><Loader /></Section>;
  if (error) return <Section><ErrorMessage error={error} /></Section>;
  if (!data) return <Section><ErrorMessage message="Вакансия не найдена" /></Section>;

  return (
    <DetailView
      item={data}
      backHref="/vacancies"
      backLabel="К вакансиям"
      meta={[data.location ?? '', data.employment_type ?? '', data.salary ? String(data.salary) : ''].filter(Boolean)}
    >
      {data.requirements && (
        <Section title="Требования" compact>
          <div className="detail-view__body">{data.requirements}</div>
        </Section>
      )}
      <Section title="Откликнуться" description="Оставьте контакты и короткое сообщение. Мы вернёмся с деталями." compact>
        <ContactForm />
      </Section>
    </DetailView>
  );
}
