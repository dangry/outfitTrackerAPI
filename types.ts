export interface Garment {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Outfit {
  id: string;
  name: string;
  description: string;
  garmentIds: string[];
}
