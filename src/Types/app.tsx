/*** write all types in project and import it in any component */

export interface NavProps {
  categories: string[];

  onSelectcategory: (category: string) => void;
}
export interface Product {
  id: number;
  price: string;
  title: string;
  category: string;
  description: string;
  image?: string; // Add the image property option
}

export interface ProductsProps {
  Products: Product[];
  selectedCategory: string;
}

export interface ProductItemProps {
  product: Product;
}
