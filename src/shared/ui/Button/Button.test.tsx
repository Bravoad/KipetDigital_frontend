import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Отправить</Button>);
    expect(screen.getByRole('button', { name: 'Отправить' })).toBeInTheDocument();
  });

  it('supports disabled state', () => {
    render(<Button disabled>Загрузка</Button>);
    expect(screen.getByRole('button', { name: 'Загрузка' })).toBeDisabled();
  });
});
