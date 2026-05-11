import { Heart, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProductImage } from "./ProductImage";

export function ProductQuickView({ product, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {product ? (
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <div className={`min-h-80 rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${product.glow} p-6`}>
              <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30">
                <ProductImage
                  src={product.image}
                  alt={product.imageAlt}
                  className="absolute inset-0"
                  fallbackLabel="Add product image"
                  fallbackHint="Place the file in public/products/ using the configured name."
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">{product.category}</p>
                  <p className="mt-3 font-display text-3xl uppercase text-white">{product.name}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <DialogTitle className="font-display text-4xl uppercase text-white">{product.name}</DialogTitle>
                <DialogDescription className="mt-4 text-base leading-7 text-white/60">
                  Clean-cut luxury streetwear designed for elevated daily styling, premium layering, and standout campaign energy.
                </DialogDescription>
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/60">Details</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/65">
                    <span>Premium fabric blend</span>
                    <span>Oversized silhouette</span>
                    <span>In-store styling support</span>
                    <span>Limited drop aesthetic</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <p className="mr-auto font-display text-3xl uppercase text-white">{product.price}</p>
                <Button variant="outline" size="icon" aria-label="Add to wishlist">
                  <Heart size={18} />
                </Button>
                <Button>
                  Add to Cart
                  <ShoppingBag className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
