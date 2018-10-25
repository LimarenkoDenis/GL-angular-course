export interface IProduct {
  id: number;
  title: string;
  description: string;
  photo: string;
  price: number;
  type: string;
}

export interface ICart extends IProduct {
  amount: number;
}
