import { describe, expect, it } from 'vitest';
import { ApiError, normalizeApiError } from './errors';

describe('normalizeApiError', () => {
  it('returns ApiError message', () => {
    expect(normalizeApiError(new ApiError('Ошибка сервера', 500))).toBe('Ошибка сервера');
  });

  it('returns common Error message', () => {
    expect(normalizeApiError(new Error('Сетевая ошибка'))).toBe('Сетевая ошибка');
  });

  it('returns fallback for unknown values', () => {
    expect(normalizeApiError(null)).toContain('неизвестная ошибка');
  });
});
