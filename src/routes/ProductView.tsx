import React from 'react'
import { useParams } from 'react-router-dom';
import { useAllProductsContext } from "@/Context/AllProductsContext";


export const ProductView = () => {
    const { id } = useParams(); // Pega o id da URL
    const { products } = useAllProductsContext(); // Pega os produtos do contexto

    const finalProduct = products.find((p) => p._id === id)
    return (
        <div>
            <h1>Detalhes do Produto</h1>
            <p>Produto ID: {finalProduct?.name}</p>
        </div>
    )
}
