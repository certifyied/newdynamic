import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamicLogo from "@/assets/new_dynamic_logo.png";

// Brand logos for mega-menu and mobile drawer
import deltaLogo from "@/assets/brands/delta.png";
import omronLogo from "@/assets/brands/omron.png";
import innovanceLogo from "@/assets/brands/innovance.png";
import schneiderLogo from "@/assets/brands/schneider.png";
import lubiLogo from "@/assets/brands/lubi.png";
import advantechLogo from "@/assets/brands/advantech.png";
import nidecLogo from "@/assets/brands/nidec.png";
import hiwinLogo from "@/assets/brands/hiwin.png";
import baumerLogo from "@/assets/brands/baumer.png";

interface ProductCategory {
  name: string;
  path: string;
}

interface PartnerBrand {
  name: string;
  logo: string;
}

const productCategories: ProductCategory[] = [
  { name: "All Products", path: "/products" },
  { name: "AC Servo", path: "/products?category=AC%20Servo" },
  { name: "HMI", path: "/products?category=HMI" },
  { name: "Invertors", path: "/products?category=Invertors" },
  {
    name: "Low Voltage Switch gears",
    path: "/products?category=Low%20Voltage%20Switch%20gears",
  },
  { name: "PLC", path: "/products?category=PLC" },
  { name: "Robot", path: "/products?category=Robot" },
  { name: "Software", path: "/products?category=Software" },
];

const partnerBrands: PartnerBrand[] = [
  { name: "Delta", logo: deltaLogo },
  { name: "Omron", logo: omronLogo },
  { name: "Innovance", logo: innovanceLogo },
  { name: "Schneider", logo: schneiderLogo },
  { name: "Lubi", logo: lubiLogo },
  { name: "Advantech", logo: advantechLogo },
  { name: "Nidec", logo: nidecLogo },
  { name: "Hiwin", logo: hiwinLogo },
  { name: "Baumer", logo: baumerLogo },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"main" | "products">("main");
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile submenus on route change or close
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileView("main");
    setIsProductsDropdownOpen(false);
  }, [location.pathname, location.search]);

  const handleMouseEnterProducts = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 250);
  };

  const handleCompanyClick = () => {
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setMobileView("main");
  };

  const navLinks = [
    { name: "Home", path: "/", type: "link" },
    { name: "About Us", path: "/about", type: "link" },
    { name: "Products", path: "/products", type: "dropdown" },
    { name: "Blog", path: "/blog", type: "link" },
    { name: "Clients", path: "/clients", type: "link" },
    { name: "Contact", path: "/contact", type: "link" },
    {
      name: "Training Institute",
      href: "https://dcsri.org/",
      type: "button",
      variant: "default",
    },
    {
      name: "View Brochure",
      href: "https://github.com/",
      type: "button",
      variant: "danger",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={dynamicLogo}
              alt="Dynamic Control Systems"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto flex-shrink-0 object-contain py-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => {
              if (item.type === "button") {
                return (
                  <Button
                    key={item.name}
                    size="sm"
                    variant={item.variant === "default" ? "default" : undefined}
                    className={
                      item.variant === "danger"
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-sm"
                        : "shadow-sm"
                    }
                    asChild
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </Button>
                );
              }

              if (item.type === "dropdown" && item.name === "Products") {
                const isProductsActive = location.pathname.startsWith("/products");

                return (
                  <div
                    key={item.name}
                    className="h-full flex items-center"
                    onMouseEnter={handleMouseEnterProducts}
                    onMouseLeave={handleMouseLeaveProducts}
                  >
                    <Link
                      to="/products"
                      className={`text-sm font-medium transition-colors inline-flex items-center gap-1.5 py-2 relative group ${
                        isProductsActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isProductsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          isProductsActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>

                    {/* Desktop Mega-Menu (Centered within container, consistent layout) */}
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          onMouseEnter={handleMouseEnterProducts}
                          onMouseLeave={handleMouseLeaveProducts}
                          className="absolute left-0 right-0 mx-auto top-full mt-1 w-full max-w-[840px] max-w-[calc(100vw-2rem)] bg-background border border-border/80 shadow-2xl rounded-2xl overflow-hidden z-50 text-left before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                        >
                          <div className="grid grid-cols-12 min-h-[360px]">
                            {/* Left Panel: Product Categories (5 cols) */}
                            <div className="col-span-5 bg-muted/20 p-5 border-r border-border/60 flex flex-col justify-between min-w-0">
                              <div>
                                <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-border/50">
                                  <Layers className="h-4 w-4 text-primary" />
                                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted-foreground">
                                    Product Categories
                                  </h4>
                                </div>
                                <ul className="space-y-0.5">
                                  {productCategories.map((subcat) => (
                                    <li key={subcat.name}>
                                      <Link
                                        to={subcat.path}
                                        onClick={() =>
                                          setIsProductsDropdownOpen(false)
                                        }
                                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-foreground/85 hover:text-primary hover:bg-background transition-all group"
                                      >
                                        <span>{subcat.name}</span>
                                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-3 border-t border-border/40 text-[11px] text-muted-foreground">
                                Authorized partner for Mitsubishi Electric in Kerala
                              </div>
                            </div>

                            {/* Right Panel: Partner Brands & Companies (7 cols) */}
                            <div className="col-span-7 bg-background p-5 flex flex-col justify-between min-w-0">
                              <div>
                                {/* Header */}
                                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-border/60">
                                  <div>
                                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-muted-foreground">
                                      Partner Brands & Companies
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      Leading automation technologies we integrate
                                    </p>
                                  </div>
                                  <Link
                                    to="/products"
                                    onClick={handleCompanyClick}
                                    className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 group flex-shrink-0"
                                  >
                                    <span>View All</span>
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                  </Link>
                                </div>

                                {/* 9 Brands Cards Grid (3 columns x 3 rows) */}
                                <div className="grid grid-cols-3 gap-2">
                                  {partnerBrands.map((brand) => (
                                    <Link
                                      key={brand.name}
                                      to={`/products?category=${encodeURIComponent(brand.name)}`}
                                      onClick={handleCompanyClick}
                                      title={brand.name}
                                      className="h-14 bg-white rounded-xl border border-border/70 hover:border-primary/60 hover:shadow-md transition-all flex items-center justify-center p-2 group cursor-pointer overflow-hidden shadow-sm min-w-0"
                                    >
                                      <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-h-7 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                          const target = e.target as HTMLImageElement;
                                          target.style.display = "none";
                                          const parent = target.parentElement;
                                          if (parent && !parent.querySelector("span")) {
                                            const span = document.createElement("span");
                                            span.className = "text-xs font-bold text-primary";
                                            span.innerText = brand.name;
                                            parent.appendChild(span);
                                          }
                                        }}
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Bottom highlight bar */}
                              <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-1.5 text-muted-foreground">
                                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                                  <span>Need custom retrofit or panel solutions?</span>
                                </div>
                                <Link
                                  to="/contact"
                                  onClick={() => setIsProductsDropdownOpen(false)}
                                  className="font-semibold text-primary hover:underline flex items-center gap-1"
                                >
                                  <span>Talk to our engineers</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground transition-colors"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setMobileView("main");
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Responsive Menu with 100% Opaque Solid Background and Right-to-Left Sliding Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden bg-background text-foreground border-t border-border shadow-2xl overflow-hidden max-h-[88vh] overflow-y-auto"
            style={{ backgroundColor: "hsl(var(--background))" }}
          >
            <div className="container mx-auto px-4 py-5 min-h-[420px] bg-background">
              <AnimatePresence mode="wait" initial={false}>
                {mobileView === "main" ? (
                  /* MAIN MOBILE MENU */
                  <motion.div
                    key="main-menu"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-1.5"
                  >
                    {navLinks.map((item) => {
                      if (item.type === "button") {
                        return (
                          <Button
                            key={item.name}
                            className={`w-full mt-2 ${
                              item.variant === "danger"
                                ? "bg-red-600 hover:bg-red-700 text-white"
                                : ""
                            }`}
                            variant={
                              item.variant === "default" ? "default" : undefined
                            }
                            asChild
                          >
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          </Button>
                        );
                      }

                      if (item.type === "dropdown" && item.name === "Products") {
                        const isProductsActive = location.pathname.startsWith("/products");
                        return (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => setMobileView("products")}
                            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all text-left font-medium ${
                              isProductsActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <Layers className="h-4 w-4 text-primary" />
                              <span className="text-base">{item.name}</span>
                            </span>
                            <div className="flex items-center gap-1 text-xs text-primary font-semibold">
                              <span>Categories & Brands</span>
                              <ChevronRight className="h-4 w-4" />
                            </div>
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-xl transition-colors font-medium text-base ${
                            location.pathname === item.path
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                ) : (
                  /* SUB-MENU: Products, Categories & Companies (Sliding Right-to-Left) */
                  <motion.div
                    key="products-menu"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4 pb-4"
                  >
                    {/* Submenu Top Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-border/60">
                      <button
                        type="button"
                        onClick={() => setMobileView("main")}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover px-2 py-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Back to Menu</span>
                      </button>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                        Products & Partners
                      </span>
                    </div>

                    {/* Product Categories List */}
                    <div>
                      <p className="text-xs uppercase font-bold text-muted-foreground px-1 mb-2 tracking-wider">
                        Categories
                      </p>
                      <div className="bg-muted/30 border border-border/60 rounded-xl overflow-hidden divide-y divide-border/50">
                        {productCategories.map((subcat) => (
                          <Link
                            key={subcat.name}
                            to={subcat.path}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileView("main");
                            }}
                            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/60 hover:text-primary transition-colors"
                          >
                            <span>{subcat.name}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 3. Partner Companies & Brands Logo Grid (Matching Screenshot 2) */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between px-1 mb-2.5">
                        <p className="text-xs uppercase font-bold text-muted-foreground tracking-wider">
                          Partner Companies
                        </p>
                        <Link
                          to="/products"
                          onClick={handleCompanyClick}
                          className="text-xs font-semibold text-primary flex items-center gap-0.5"
                        >
                          <span>View All</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </div>

                      {/* Clean 2-column Logo Cards Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {partnerBrands.map((brand) => (
                          <Link
                            key={brand.name}
                            to={`/products?category=${encodeURIComponent(brand.name)}`}
                            onClick={handleCompanyClick}
                            className="h-14 bg-white rounded-xl border border-border/70 shadow-sm flex items-center justify-center p-2 active:scale-95 transition-all min-w-0"
                          >
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="max-h-7 max-w-[85%] w-auto object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector("span")) {
                                  const span = document.createElement("span");
                                  span.className = "text-xs font-bold text-primary";
                                  span.innerText = brand.name;
                                  parent.appendChild(span);
                                }
                              }}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;