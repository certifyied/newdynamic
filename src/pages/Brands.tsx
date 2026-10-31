import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useCanonical } from "@/hooks/useCanonical";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { brandCatalog, BrandInfo, getBrandProductCategory, getBrandProductDescription } from "@/data/brandProducts";
import { Layers, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";

const Brands = () => {
  useCanonical();
  const [searchParams, setSearchParams] = useSearchParams();
  const normalizeBrandId = (id?: string | null): string => {
    if (!id) return "delta";
    const lower = id.toLowerCase();
    if (lower === "innovance") return "inovance";
    return brandCatalog.some((b) => b.id === lower) ? lower : "delta";
  };

  const [selectedBrandId, setSelectedBrandId] = useState<string>(() => {
    return normalizeBrandId(searchParams.get("brand"));
  });

  useEffect(() => {
    const fromUrl = searchParams.get("brand");
    if (fromUrl) {
      setSelectedBrandId(normalizeBrandId(fromUrl));
    }
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
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Helmet>
        <title>Associated Clients &amp; Partner Brands | Dynamic Control Systems</title>
        <meta
          name="description"
          content="Explore authorized automation products and components from premier global manufacturers including Delta, Omron, Innovance, Schneider, Lubi, Advantech, Nidec, Hiwin, and Baumer."
        />
        <meta property="og:title" content="Associated Clients &amp; Partner Brands | Dynamic Control Systems" />
        <meta
          property="og:description"
          content="Authorized components and industrial automation hardware integrated from premier global manufacturers. View specifications and configurations."
        />
        <link rel="canonical" href="https://dynamiccontrolsystems.in/brands" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-[calc(var(--header-height-mobile)+3rem)] pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-muted/40 via-muted/20 to-background border-b border-border/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-4 tracking-wide uppercase shadow-2xs">
                <Cpu className="h-4 w-4" />
                <span>Authorized Global Technology Partners</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Associated Clients &amp; Partner Brands
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                We collaborate with and integrate premier industrial automation technologies from world-renowned manufacturers. Select a brand below to explore products with direct access to official technical specifications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brand Selector & Components Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* 9 Brands Selector Grid */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4 px-1">
                <h2 className="font-display text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span>Select an Automation Brand</span>
                </h2>
                <span className="text-xs text-muted-foreground font-medium">
                  {brandCatalog.length} Global Partners Available
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                {brandCatalog.map((brand, index) => {
                  const isSelected = brand.id === activeBrand.id;
                  return (
                    <motion.button
                      type="button"
                      key={brand.id}
                      onClick={() => handleSelectBrand(brand.id)}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl group cursor-pointer"
                    >
                      <Card
                        className={`overflow-hidden transition-all duration-300 border ${
                          isSelected
                            ? "border-primary shadow-md ring-2 ring-primary/20 bg-primary/5"
                            : "border-border/70 hover:border-border hover:shadow-sm bg-card"
                        }`}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <div className="w-full h-full bg-white flex items-center justify-center p-3 relative overflow-hidden">
                            <img
                              src={brand.logo}
                              alt={brand.name}
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
                              className={`text-xs md:text-sm font-semibold truncate ${
                                isSelected ? "text-primary font-bold" : "text-foreground"
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
            </div>

            {/* Selected Brand Products Showcase Container */}
            <div className="bg-card border border-border/80 rounded-2xl p-5 md:p-8 shadow-sm">
              {/* Product Cards Grid with Framer Motion */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBrand.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {activeBrand.products.map((product, idx) => {
                    const categoryBadge = getBrandProductCategory(product, activeBrand.name);
                    const description = getBrandProductDescription(product, activeBrand.name);

                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.04 }}
                      >
                        <Card className="h-full hover-lift cursor-pointer group overflow-hidden flex flex-col bg-card border border-border/80 rounded-2xl shadow-sm hover:shadow-md transition-all">
                          {/* Top Image Frame */}
                          <AspectRatio ratio={16 / 9} className="bg-white">
                            <div className="w-full h-full bg-white flex items-center justify-center p-6 border-b border-border/40 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.title}
                                loading="lazy"
                                className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = activeBrand.logo;
                                  target.className =
                                    "max-h-16 max-w-[60%] object-contain opacity-70";
                                }}
                              />
                            </div>
                          </AspectRatio>

                          {/* Card Content Body */}
                          <CardContent className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              {/* Dark Pill Badge */}
                              <Badge className="bg-[#1e293b] text-white hover:bg-[#1e293b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-fit">
                                {categoryBadge}
                              </Badge>

                              {/* Red Title */}
                              <h3 className="font-display text-xl font-bold mb-3 text-red-600 group-hover:text-red-700 transition-colors">
                                {product.title}
                              </h3>

                              {/* Description Text */}
                              <p className="text-muted-foreground mb-4 text-sm flex-1 leading-relaxed">
                                {description}
                              </p>
                            </div>

                            {/* Solid Red Details Button */}
                            <Button
                              size="sm"
                              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 mt-auto text-sm shadow-sm"
                              asChild
                            >
                              <a
                                href={product.redirectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Integration Support CTA */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Need Custom Automation or Control Panel Integration?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              Our engineering team specializes in multi-brand automation integration, SCADA development, control panel manufacturing, and retrofit solutions across Kerala and South India.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-hover transition-all shadow-sm"
              >
                <span>Talk to Our Engineers</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted transition-all shadow-sm"
              >
                <span>Browse Mitsubishi Electric Catalog</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Brands;
