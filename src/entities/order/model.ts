export interface ContactFormPayload {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

export interface OrderPayload {
  name: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  description: string;
}

export interface ApiSuccessResponse {
  id?: string | number;
  detail?: string;
  message?: string;
}
