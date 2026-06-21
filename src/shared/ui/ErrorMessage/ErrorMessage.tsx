import { normalizeApiError } from '@/shared/api/errors';
import './ErrorMessage.css';

type ErrorMessageProps = {
  error?: unknown;
  message?: string;
};

export function ErrorMessage({ error, message }: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      {message ?? normalizeApiError(error)}
    </div>
  );
}
