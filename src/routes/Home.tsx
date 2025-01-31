import { FilterBar } from '@/sharedComponents/OneTimeUsed/sections/Products/FilterBar';
import { useAllProductsContext } from '../Context/AllProductsContext';
import { Carrosel } from '../sharedComponents/OneTimeUsed/Carrosel';
import { Outdoor } from '../sharedComponents/OneTimeUsed/Outdoor';
import { PromotionBanner } from '../sharedComponents/OneTimeUsed/PromotionBanner';
import { ProductShelf } from '../sharedComponents/OneTimeUsed/sections/Products/ProductShelf';
import { OutdoorCard } from '../sharedComponents/OutdoorCard';
import { Products } from '@/Sections/Products';


function Home() {

    const { products, isLoading } = useAllProductsContext();


    return (
        <>
           
                <Outdoor>
                    <OutdoorCard priority={1.5}>
                        <Carrosel></Carrosel>
                    </OutdoorCard>
                    <OutdoorCard priority={1}>
                        <PromotionBanner product={isLoading ? undefined : products[3]}></PromotionBanner>
                    </OutdoorCard>
                </Outdoor>
                
                <Products></Products>
            
        </>
    );
}

export default Home;
