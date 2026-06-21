import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button';
import { Container } from '@/shared/ui/Container/Container';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <Container>
      <div className="not-found-page">
        <span>404</span>
        <h1>Страница не найдена</h1>
        <p>Возможно, адрес изменился или раздел ещё не опубликован.</p>
        <Link to="/"><Button>На главную</Button></Link>
      </div>
    </Container>
  );
}
