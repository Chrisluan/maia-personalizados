import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { Product } from "@/types/Product";

interface AllProductsContext {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const AllProductsContext = createContext<AllProductsContext | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // Verifica se os dados já estão no localStorage
      const cachedProducts = sessionStorage.getItem('products');
      
      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts)); // Se estiverem, usa os dados do cache
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://maia-personalizados-api.vercel.app/getProducts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);

        // Salva os dados no localStorage
        sessionStorage.setItem('products', JSON.stringify(data));
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <AllProductsContext.Provider value={{ products, isLoading: loading, error }}>
      {children}
    </AllProductsContext.Provider>
  );
};

export const useAllProductsContext = () => {
  const context = useContext(AllProductsContext);
  if (!context) {
    throw new Error("AllProductsContext must be used within a ProductsProvider");
  }
  return context;
};
