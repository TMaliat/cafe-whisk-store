
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
export const revalidate=0;
interface ProductPageProps{
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async({
    params
}) => {
    const product = await getProduct(params.productId);

        console.log('Product:', product); // Debug: Log the product details

        // Get the category ID of the current product
        const categoryId = product?.category?.id;

        console.log('Category ID:', categoryId); // Debug: Log the extracted category ID

        // Fetch suggested products from the same category as the current product
        const suggestedProducts = categoryId ? await getProducts({ categoryId }) : [];

        console.log('Suggested Products:', suggestedProducts); // Debug: Log the suggested products
    return(
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-2">
                        <Gallery images={product.images} />
                        <div className="mt-6 px-4 sm:mt-10 sm:px-0 lg:mt-0">
                           <Info data={product}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <ProductList title="Related Items" items={suggestedProducts}/>
                </div>
            </Container>
            
        </div>
    );
}


export default ProductPage;