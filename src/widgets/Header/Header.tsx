import { NavLink } from 'react-router-dom';
import { Container } from '@/shared/ui/Container/Container';
import './Header.css';

const navItems = [
  { to: '/services', label: 'Услуги' },
  { to: '/projects', label: 'Проекты' },
  { to: '/news', label: 'Новости' },
  { to: '/vacancies', label: 'Вакансии' },
  { to: '/contacts', label: 'Контакты' },
];

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <NavLink to="/" className="site-header__logo" aria-label="KipetDigital — на главную">
            Kipet<span>Digital</span>
          </NavLink>
          <nav className="site-header__nav" aria-label="Основная навигация">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink to="/contacts" className="site-header__cta">
            Обсудить проект
          </NavLink>
        </div>
      </Container>
    </header>
  );
}
