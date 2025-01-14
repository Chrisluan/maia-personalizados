import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ProductsProvider } from "./Context/AllProductsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ProductsProvider>
        <Theme appearance="light">
          <App />
        </Theme>
      </ProductsProvider>


    </Provider>
  </StrictMode>
);
