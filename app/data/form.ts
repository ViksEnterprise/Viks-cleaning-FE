export interface FormData {
  postcode: string;
  full_name: string;
  email: string;
  phone_number: string;
  title: string;
  address: string;
  pet: string;
  cleaning_type: string;
  service_frequency: string;
  prefer_day: string;
  parking: string;
  ironing: string;
  access: string;
  hours: number;
  date: string;
  time: string;
  notes?: string;
}

export interface FormErrors {
  postcode?: string;
  full_name?: string;
  email?: string;
  phone_number?: string;
  title?: string;
  address?: string;
  pet?: string;
  cleaning_type?: string;
  service_frequency?: string;
  prefer_day?: string;
  parking?: string;
  ironing?: string;
  access?: string;
  hours?: number;
  date?: string;
  time?: string;
  notes?: string;
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
