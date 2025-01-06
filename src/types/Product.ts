export interface Product {
  id?: string;
  name?: string;
  price: number;
  description?: string;
  imageLink?: string;
  categories?: string[];
}

export class ProductClass {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  imageLink?: string;
  categories?: string[];

  constructor({
    id,
    name,
    price,
    description,
    imageLink,
    categories,
  }: Partial<Product> = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageLink = imageLink;
    this.categories = categories || [];
  }
}
