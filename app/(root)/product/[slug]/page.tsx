import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import ProductPrice from "@/components/shared/product/product-price";


const ProductDetailsPage = async (props: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await props.params;

    const product = await getProductBySlug(slug);
    if (!product) notFound();
    return (
        <>
            <section>
                <div className="grid gird-cols-1 md:grid-cols-5">
                    {/* Images Column */}
                    <div className="col-span-2">
                        {/* Images Component */}
                    </div>
                    {/* Details Column */}
                    <div className="col-span-2">
                        <div className="flex flex-col gap-6">
                            <p>
                                Brand: {product.brand}<br />
                                Category: {product.category}
                            </p>
                            <h1 className="h3-bold">{product.name}</h1>
                            <p>{product.rating} of {product.numReviews} Reviews</p>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <ProductPrice value={(Number(product.price))} className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductDetailsPage;