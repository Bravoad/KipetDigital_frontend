import { Container } from '@/shared/ui/Container/Container';
import './PageTitle.css';

type PageTitleProps = {
  title: string;
  description?: string;
};

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="page-title">
      <Container>
        <span className="page-title__eyebrow">KipetDigital</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Container>
    </div>
  );
}
