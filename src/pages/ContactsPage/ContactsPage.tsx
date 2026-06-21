import { ContactForm } from '@/features/contact-form/ContactForm';
import { OrderForm } from '@/features/order-form/OrderForm';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { Section } from '@/shared/ui/Section/Section';
import './ContactsPage.css';

export function ContactsPage() {
  return (
    <>
      <PageTitle title="Контакты" description="Расскажите о задаче — предложим понятный план реализации и следующий шаг." />
      <Section compact>
        <div className="contacts-page__grid">
          <div className="contacts-page__card">
            <h2>Заявка на проект</h2>
            <p>Подходит, если уже есть задача, бюджет, сроки или список интеграций.</p>
            <OrderForm />
          </div>
          <div className="contacts-page__card">
            <h2>Быстрое сообщение</h2>
            <p>Подходит для вопроса, консультации или первого знакомства.</p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
