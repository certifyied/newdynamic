import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { brandCatalog, BrandInfo } from "@/data/brandProducts";
import { Layers } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const AssociatedClients = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedBrandId, setSelectedBrandId] = useState<string>(() => {
    const fromUrl = searchParams.get("brand");
    if (fromUrl && brandCatalog.some((b) => b.id === fromUrl.toLowerCase())) {
      return fromUrl.toLowerCase();
    }
    return "delta";
  });

  // Listen for brand-selected custom event from navbar or URL changes
  useEffect(() => {
    const fromUrl = searchParams.get("brand");
    if (fromUrl && brandCatalog.some((b) => b.id === fromUrl.toLowerCase())) {
      setSelectedBrandId(fromUrl.toLowerCase());
    }

    const handleBrandEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && brandCatalog.some((b) => b.id === customEvent.detail)) {
        setSelectedBrandId(customEvent.detail);
      }
    };

    window.addEventListener("brand-selected", handleBrandEvent as EventListener);
    return () =>
      window.removeEventListener("brand-selected", handleBrandEvent as EventListener);
  }, [searchParams]);

  const activeBrand: BrandInfo =
    brandCatalog.find((b) => b.id === selectedBrandId) || brandCatalog[0];

  const handleSelectBrand = (brandId: string) => {
    setSelectedBrandId(brandId);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("brand", brandId);
        return next;
      },
      { replace: true }
    );
  };

  return (
    <section id="associated-clients" className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3 tracking-wide uppercase">
            Global Automation Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Associated Clients &amp; Brand Components
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore components and authorized industrial automation solutions from premier global manufacturers. Select a brand below to view products with direct access to technical specifications.
          </p>
        </motion.div>

        {/* 10 Brands Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-10">
          {brandCatalog.map((brand, index) => {
            const isSelected = brand.id === activeBrand.id;
            return (
              <motion.button
                type="button"
                key={brand.id}
                onClick={() => handleSelectBrand(brand.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`text-left rounded-xl transition-all duration-300 outline-none group relative overflow-hidden ${
                  isSelected
                    ? "ring-2 ring-primary border-primary shadow-md scale-[1.02]"
                    : "hover:border-primary/50 hover:shadow-sm"
                }`}
              >
                <Card
                  className={`h-full border transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "border-primary bg-primary/5 dark:bg-primary/10"
                      : "border-border/70 hover:border-primary/50 bg-card"
                  }`}
                >
                  <AspectRatio ratio={16 / 9}>
                    <div className="w-full h-full bg-white flex items-center justify-center p-3 relative overflow-hidden">
                      <img
                        src={brand.logo}
                        alt={`${brand.fullName} logo`}
                        loading="lazy"
                        className="max-h-10 md:max-h-12 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector(".fallback-brand-text")) {
                            const text = document.createElement("span");
                            text.className =
                              "fallback-brand-text font-bold text-sm text-primary";
                            text.innerText = brand.name;
                            parent.appendChild(text);
                          }
                        }}
                      />
                      {isSelected && (
                        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                  </AspectRatio>
                  <div className="p-2.5 text-center border-t border-border/40 bg-muted/20">
                    <div className="flex items-center justify-center gap-1.5">
                      <h3
                        className={`font-semibold text-xs md:text-sm transition-colors ${
                          isSelected
                            ? "text-primary font-bold"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {brand.name}
                      </h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                        {brand.products.length}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Brand Products Showcase */}
        <div className="bg-card border border-border/80 rounded-2xl p-5 md:p-8 shadow-sm">
          {/* Product Cards Grid with Smooth Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBrand.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
            >
              {activeBrand.products.map((product) => (
                <a
                  key={product.id}
                  href={product.redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full text-left"
                >
                  <Card className="h-full flex flex-col justify-between overflow-hidden border border-border/80 hover:border-primary/60 hover:shadow-lg transition-all duration-300 bg-card hover:-translate-y-1">
                    <div>
                      {/* Product Image Frame */}
                      <div className="w-full bg-white flex items-center justify-center p-4 relative overflow-hidden border-b border-border/50 aspect-[4/3]">
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          className="max-h-36 md:max-h-40 max-w-[88%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = activeBrand.logo;
                            target.className =
                              "max-h-16 max-w-[70%] object-contain opacity-70";
                          }}
                        />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-muted text-foreground/80 tracking-wide uppercase shadow-2xs">
                          {activeBrand.name}
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h4 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {product.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          Official specifications &amp; configurations
                        </p>
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="px-4 pb-4 pt-1">
                      <div className="pt-2.5 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-primary-hover">
                        <span className="flex items-center gap-1">
                          <Layers className="h-3.5 w-3.5" />
                          <span>View Product</span>
                        </span>
                        <div className="flex items-center gap-0.5">
                          <span>Details</span>
                          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AssociatedClients;
