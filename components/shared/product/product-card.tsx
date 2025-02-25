import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product:any }) => {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
          <Link href={`/product/${product.slug}`}>
            <Image src={product.images[0]} alt={product.name} height={300} width={300} priority={true}/>
          </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
          <div className="text-xs">{product.brand}</div>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
          <div className="flex-between gap-4">
            <p>{product.rating}</p>
            { product.stock > 0 ? (
              <ProductPrice value={Number(product.price)}/>
            ) : (
              <p className="text-destructive">Out of Stock </p>
            )}          
          
          </div>
        </CardContent>
      </Card>
    );
};
 
export default ProductCard;