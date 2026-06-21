import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/Container/Container';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <Link to="/" className="site-footer__logo">
              Kipet<span>Digital</span>
            </Link>
            <p>Разработка сайтов, CRM, интеграций и автоматизация процессов под задачи бизнеса.</p>
          </div>
          <div>
            <h3>Навигация</h3>
            <Link to="/services">Услуги</Link>
            <Link to="/projects">Проекты</Link>
            <Link to="/vacancies">Вакансии</Link>
          </div>
          <div>
            <h3>Связь</h3>
            <Link to="/contacts">Оставить заявку</Link>
            <a href="mailto:hello@kipetdigital.ru">hello@kipetdigital.ru</a>
          </div>
        </div>
        <div className="site-footer__bottom">© {new Date().getFullYear()} KipetDigital</div>
      </Container>
    </footer>
  );
}
