export interface QuoteWizardData {
  formType: "quote-wizard";
  from: string;
  to: string;
  date: string;
  bedrooms: string;
  furnishing: string;
  name: string;
  email: string;
  phone: string;
  details?: string;
}

export interface QuoteFormData {
  formType: "contact-form";
  name: string;
  phone: string;
  email: string;
  from: string;
  to: string;
  date: string;
  size: string;
  details?: string;
}

export type FormSubmission = QuoteWizardData | QuoteFormData;

export interface ApiResponse {
  success: boolean;
  message: string;
}
