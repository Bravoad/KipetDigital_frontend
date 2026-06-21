import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { sendContactForm } from '@/entities/order/api';
import { normalizeApiError } from '@/shared/api/errors';
import { Button } from '@/shared/ui/Button/Button';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { InputField, TextareaField } from '@/shared/ui/FormField/FormField';
import './Form.css';

const contactSchema = z
  .object({
    name: z.string().trim().min(2, 'Укажите имя минимум из 2 символов').max(100, 'Имя слишком длинное'),
    email: z.string().trim().email('Укажите корректный email').optional().or(z.literal('')),
    phone: z.string().trim().min(5, 'Телефон слишком короткий').optional().or(z.literal('')),
    message: z.string().trim().min(10, 'Сообщение должно быть не короче 10 символов').max(2000, 'Сообщение слишком длинное'),
  })
  .refine((data) => Boolean(data.email || data.phone), {
    message: 'Укажите email или телефон',
    path: ['email'],
  });

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const mutation = useMutation({
    mutationFn: sendContactForm,
    onSuccess: () => reset(),
  });

  const onSubmit = handleSubmit((values) => {
    mutation.mutate({
      name: values.name.trim(),
      email: values.email?.trim() || undefined,
      phone: values.phone?.trim() || undefined,
      message: values.message.trim(),
    });
  });

  return (
    <form className="data-form" onSubmit={onSubmit} noValidate>
      <InputField label="Имя" placeholder="Как к вам обращаться" error={errors.name?.message} {...register('name')} />
      <div className="data-form__grid">
        <InputField label="Email" placeholder="mail@example.com" error={errors.email?.message} {...register('email')} />
        <InputField label="Телефон" placeholder="+7 999 000-00-00" error={errors.phone?.message} {...register('phone')} />
      </div>
      <TextareaField label="Сообщение" placeholder="Кратко опишите задачу" error={errors.message?.message} {...register('message')} />

      {mutation.isError && <ErrorMessage message={normalizeApiError(mutation.error)} />}
      {mutation.isSuccess && <div className="data-form__success">Заявка отправлена. Мы свяжемся с вами.</div>}

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Отправляем...' : 'Отправить'}
      </Button>
    </form>
  );
}
