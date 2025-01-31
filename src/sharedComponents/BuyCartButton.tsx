import { useBuyingContext } from "@/Context/BuyingContext";
import { Product } from "@/types/Product";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import { TbShoppingCartPlus, TbShoppingCartX } from "react-icons/tb";

interface Props {
  product: Product;
  colorScheme: string;
}

export const BuyCartButton = (props: Props) => {
  const { addProduct, products, removeProduct } = useBuyingContext();
  const { product, colorScheme } = props;

  const isInCart = () => products.some((p) => p._id === product._id);

  const handleAddToCart = () => (isInCart() ? removeProduct(product) : addProduct(product));

  const colors = {
    light: "#F57F1E",
    dark: "#531FC2",
  };

  const getButtonColor = () => (colorScheme === "light" ? colors.light : colors.dark);

  const getButtonHoverColor = () => (colorScheme === "light" ? "#d96e1a" : "#7a3bff");

  return (
    <HStack justifyContent="space-between" gap={1}>
      <Button
        id="buyNow"
        onClick={handleAddToCart}
        bg={getButtonColor()}
        color="white"
        _hover={{ bg: getButtonHoverColor() }}
        paddingInline="8px"
        flex="1"
        
      >
        {isInCart() ? "REMOVER" : "COMPRAR"}
      </Button>

      <IconButton
        id="addToCart"
        onClick={handleAddToCart}
        bg={!isInCart() ? "transparent" : getButtonColor()}
        border="2.5px solid"
        borderColor={getButtonColor()}
        color="white"
        aria-label="Adicionar ao carrinho"
        _hover={{ bg: getButtonHoverColor() }}
      >
        {isInCart() ? (
          <TbShoppingCartX color="white" />
        ) : (
          <TbShoppingCartPlus color={getButtonColor()} />
        )}
      </IconButton>
    </HStack>
  );
};