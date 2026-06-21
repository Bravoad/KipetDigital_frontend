import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createOrder } from '@/entities/order/api';
import { normalizeApiError } from '@/shared/api/errors';
import { Button } from '@/shared/ui/Button/Button';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage';
import { InputField, TextareaField } from '@/shared/ui/FormField/FormField';
import '../contact-form/Form.css';

const orderSchema = z
  .object({
    name: z.string().trim().min(2, 'Укажите имя минимум из 2 символов').max(100, 'Имя слишком длинное'),
    email: z.string().trim().email('Укажите корректный email').optional().or(z.literal('')),
    phone: z.string().trim().min(5, 'Телефон слишком короткий').optional().or(z.literal('')),
    service: z.string().trim().max(120, 'Название услуги слишком длинное').optional().or(z.literal('')),
    budget: z.string().trim().max(120, 'Бюджет слишком длинный').optional().or(z.literal('')),
    description: z.string().trim().min(20, 'Описание должно быть не короче 20 символов').max(3000, 'Описание слишком длинное'),
  })
  .refine((data) => Boolean(data.email || data.phone), {
    message: 'Укажите email или телефон',
    path: ['email'],
  });

type OrderFormValues = z.infer<typeof orderSchema>;

type OrderFormProps = {
  initialService?: string;
};

export function OrderForm({ initialService = '' }: OrderFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: initialService,
      budget: '',
      description: '',
    },
  });

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => reset({ service: initialService, name: '', email: '', phone: '', budget: '', description: '' }),
  });

  const onSubmit = handleSubmit((values) => {
    mutation.mutate({
      name: values.name.trim(),
      email: values.email?.trim() || undefined,
      phone: values.phone?.trim() || undefined,
      service: values.service?.trim() || undefined,
      budget: values.budget?.trim() || undefined,
      description: values.description.trim(),
    });
  });

  return (
    <form className="data-form" onSubmit={onSubmit} noValidate>
      <InputField label="Имя" placeholder="Как к вам обращаться" error={errors.name?.message} {...register('name')} />
      <div className="data-form__grid">
        <InputField label="Email" placeholder="mail@example.com" error={errors.email?.message} {...register('email')} />
        <InputField label="Телефон" placeholder="+7 999 000-00-00" error={errors.phone?.message} {...register('phone')} />
      </div>
      <div className="data-form__grid">
        <InputField label="Услуга" placeholder="CRM, сайт, интеграция" error={errors.service?.message} {...register('service')} />
        <InputField label="Бюджет" placeholder="Например, 150 000 ₽" error={errors.budget?.message} {...register('budget')} />
      </div>
      <TextareaField label="Описание задачи" placeholder="Что нужно сделать, сроки, интеграции, важные ограничения" error={errors.description?.message} {...register('description')} />

      {mutation.isError && <ErrorMessage message={normalizeApiError(mutation.error)} />}
      {mutation.isSuccess && <div className="data-form__success">Заявка создана. Мы вернёмся с предложением.</div>}

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Создаём...' : 'Оставить заявку'}
      </Button>
    </form>
  );
}
