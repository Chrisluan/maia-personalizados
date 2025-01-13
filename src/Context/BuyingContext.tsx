import { Product } from "@/types/Product";
import { createContext, ReactNode, useContext, useState } from "react";

interface BuyingContextProps {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

const BuyingContext = createContext<BuyingContextProps | undefined>(undefined);




export const BuyingProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);


  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  console.log(product._id)
  };
  const removeProduct = (product:Product) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p._id !== product._id));
  };

  return (
    <BuyingContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </BuyingContext.Provider>
  );
};

export const useBuyingContext = () => {
  const context = useContext(BuyingContext);
  if (!context) {
    throw new Error("useBuyingContext must be used within a BuyingProvider");
  }
  return context;
};
