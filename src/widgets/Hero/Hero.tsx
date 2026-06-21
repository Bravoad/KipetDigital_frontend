import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container/Container';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <span className="hero__eyebrow">Django • React • PostgreSQL • Integrations</span>
            <h1>Разрабатываем цифровые продукты, которые выдерживают реальную нагрузку</h1>
            <p>
              Собираем сайты, CRM, внутренние сервисы и интеграции с внешними каналами: от аналитики и архитектуры до запуска и сопровождения.
            </p>
            <div className="hero__actions">
              <Link to="/contacts"><Button>Обсудить проект</Button></Link>
              <Link to="/projects"><Button variant="secondary">Смотреть проекты</Button></Link>
            </div>
          </div>
          <div className="hero__panel" aria-hidden="true">
            <div className="hero__card hero__card--large">CRM</div>
            <div className="hero__card">API</div>
            <div className="hero__card">S3</div>
            <div className="hero__card hero__card--wide">Telegram • Avito • VK • Mail</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
