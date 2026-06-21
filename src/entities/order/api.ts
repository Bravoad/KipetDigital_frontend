import { ENDPOINTS } from '@/shared/api/endpoints';
import { apiPost } from '@/shared/api/http';
import type { ApiSuccessResponse, ContactFormPayload, OrderPayload } from './model';

export function sendContactForm(payload: ContactFormPayload) {
  return apiPost<ApiSuccessResponse, ContactFormPayload>(ENDPOINTS.contactForm, payload);
}

export function createOrder(payload: OrderPayload) {
  return apiPost<ApiSuccessResponse, OrderPayload>(ENDPOINTS.orders, payload);
}
