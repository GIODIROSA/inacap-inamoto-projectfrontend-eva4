export interface Country {
  name: {
    common: string;
  };
  capital?: string[];
}

export interface FormData {
  id: string; // Unique ID for each entry
  name: string;
  lastName: string;
  address: string;
  email: string;
  country: string;
  capital: string;
  message: string;
}