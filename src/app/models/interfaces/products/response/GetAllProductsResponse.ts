export interface GetAllProductsResponse {
  id: string;
  name: string;
  amout: number;
  description: string;
  price: string;
  category: {
    id: string;
    name: string;
  };
}
