import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './FormField.css';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function InputField({ label, error, id, ...props }: InputFieldProps) {
  const fieldId = id ?? props.name;

  return (
    <label className="form-field" htmlFor={fieldId}>
      <span>{label}</span>
      <input id={fieldId} aria-invalid={Boolean(error)} {...props} />
      {error && <small>{error}</small>}
    </label>
  );
}

export function TextareaField({ label, error, id, ...props }: TextareaFieldProps) {
  const fieldId = id ?? props.name;

  return (
    <label className="form-field" htmlFor={fieldId}>
      <span>{label}</span>
      <textarea id={fieldId} aria-invalid={Boolean(error)} {...props} />
      {error && <small>{error}</small>}
    </label>
  );
}
