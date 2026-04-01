export interface FormData {
  postcode: string;
  full_name: string;
  email: string;
  phone_number: string;
  title: string;
  address: string;
  location: string;
  city: string;
  pet: string;
  cleaning_type: string;
  parking: string;
  ironing: string;
  access: string;
  hours: number;
  date_time: string;
  price: number;
  notes?: string;
}

export interface FormErrors {
  postcode?: string;
  full_name?: string;
  email?: string;
  phone_number?: string;
  title?: string;
  address?: string;
  location?: string;
  city?: string;
  pet?: string;
  cleaning_type?: string;
  parking?: string;
  ironing?: string;
  access?: string;
  hours?: number;
  date_time?: string;
  price?: number;
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
