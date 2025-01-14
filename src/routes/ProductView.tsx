import { useAllProductsContext } from "@/Context/AllProductsContext";
import { Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export const ProductView = () => {
    const { id } = useParams(); // Pega o id da URL
    const { products } = useAllProductsContext(); // Pega os produtos do contexto

    const finalProduct = products.find((p) => p._id === id)
    return (
        <div>
            <h1>Detalhes do Produto</h1>
            <p>Produto ID: {finalProduct?.name}</p>
            <Image src={finalProduct?.imageLink}></Image>
            <p>{finalProduct?.price}</p>
        </div>
    )
}
