// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import dynamicLogo from "@/assets/new_dynamic_logo.png";
// import brochure from "@/assets/DCS brochure .pdf";

// const Navigation = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Products", path: "/products" },
//     { name: "Blog", path: "/blog" },
//     { name: "Clients", path: "/clients" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-24 md:h-28">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img
//               src={dynamicLogo}
//               alt="Dynamic Control Systems"
//               className="h-27 sm:h-28 md:h-32 lg:h-40 xl:h-44 w-auto flex-shrink-0 object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors relative group ${
//                   location.pathname === link.path
//                     ? "text-primary"
//                     : "text-foreground hover:text-primary"
//                 }`}
//               >
//                 {link.name}
//                 <span
//                   className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
//                     location.pathname === link.path
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }`}
//                 />
//               </Link>
//             ))}

//             {/* Training Institute */}
//             <Button variant="default" size="sm" asChild>
//               <a
//                 href="https://dcsri.org/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Training Institute
//               </a>
//             </Button>

//             {/* View Brochure */}
//             <Button
//               size="sm"
//               className="bg-red-600 hover:bg-red-700 text-white"
//               asChild
//             >
//               <a href={brochure} target="_blank" rel="noopener noreferrer">
//                 View Brochure
//               </a>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-card border-t"
//           >
//             <div className="container mx-auto px-4 py-6 space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={`block px-4 py-3 rounded-md transition-colors ${
//                     location.pathname === link.path
//                       ? "bg-primary text-primary-foreground"
//                       : "hover:bg-muted"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               {/* Training Institute */}
//               <Button variant="default" className="w-full" asChild>
//                 <a
//                   href="https://dcsri.org/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Training Institute
//                 </a>
//               </Button>

//               {/* View Brochure */}
//               <Button
//                 className="w-full bg-red-600 hover:bg-red-700 text-white"
//                 asChild
//               >
//                 <a
//                   href={brochure}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   View Brochure
//                 </a>
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navigation;



import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dynamicLogo from "@/assets/new_dynamic_logo.png";
import brochure from "@/assets/DCS brochure .pdf";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ UPDATED NAVLINKS (added type + buttons)
  const navLinks = [
    { name: "Home", path: "/", type: "link" },
    { name: "About Us", path: "/about", type: "link" },
    { name: "Products", path: "/products", type: "link" },
    { name: "Blog", path: "/blog", type: "link" },
    { name: "Clients", path: "/clients", type: "link" },
    { name: "Contact", path: "/contact", type: "link" },
    { name: "Automation Guide", path: "/pillar-page", type: "link" },

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
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={dynamicLogo}
              alt="Dynamic Control Systems"
              className="h-27 sm:h-28 md:h-32 lg:h-40 xl:h-44 w-auto flex-shrink-0 object-contain"
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
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : ""
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
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((item) => {
                if (item.type === "button") {
                  return (
                    <Button
                      key={item.name}
                      className={`w-full ${
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

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;