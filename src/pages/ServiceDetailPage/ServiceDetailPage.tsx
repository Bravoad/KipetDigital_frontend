import { useParams } from 'react-router-dom';
import { useServiceDetail } from '@/entities/service/hooks';
import { OrderForm } from '@/features/order-form/OrderForm';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Section } from '@/shared/ui/Section/Section';
import { getEntityTitle } from '@/shared/utils/content';
import { DetailView } from '@/widgets/DetailView/DetailView';

export function ServiceDetailPage() {
  const { idOrSlug } = useParams();
  const { data, isLoading, error } = useServiceDetail(idOrSlug);

  if (isLoading) return <Section><Loader /></Section>;
  if (error) return <Section><ErrorMessage error={error} /></Section>;
  if (!data) return <Section><ErrorMessage message="Услуга не найдена" /></Section>;

  return (
    <DetailView item={data} backHref="/services" backLabel="К услугам">
      <Section title="Оставить заявку" description="Опишите задачу — подготовим предложение по срокам, этапам и бюджету." compact>
        <OrderForm initialService={getEntityTitle(data)} />
      </Section>
    </DetailView>
  );
}
