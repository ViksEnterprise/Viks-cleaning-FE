export interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  country: string;
  state: string;
  program: string;
  course: string;
  level: string;
  price: string;
}

export interface FormErrors {
  full_name?: string;
  email?: string;
  phone_number?: string;
  country?: string;
  state?: string;
  program?: string;
  course?: string;
  level?: string;
}

export interface ContactFormData {
  full_name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  full_name?: string;
  email?: string;
  message?: string;
}
