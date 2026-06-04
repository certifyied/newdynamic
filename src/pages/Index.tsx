import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { useStructuredData } from "@/hooks/useStructuredData";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductCarousel from "@/components/home/ProductCarousel";
import MissionSection from "@/components/home/MissionSection";
import ServicesSection from "@/components/home/ServicesSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  useCanonical();

  useEffect(() => {
    // Load CDN Embed Script
    const script = document.createElement("script");
    script.src = "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed";
    script.async = true;
    document.body.appendChild(script);

    // MutationObserver to prefix dynamic image paths with /src
    const container = document.getElementById("certifyied-blog-container");
    let observer: MutationObserver | null = null;
    if (container) {
      const fixImgSrc = (img: HTMLImageElement) => {
        const src = img.getAttribute("src");
        if (src) {
          const cleanSrc = src.trim();
          if ((cleanSrc.startsWith("/assets/") || cleanSrc.startsWith("assets/")) && !cleanSrc.startsWith("/src/")) {
            const prefix = cleanSrc.startsWith("/") ? "/src" : "/src/";
            img.setAttribute("src", prefix + cleanSrc);
          }
        }
      };

      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as HTMLElement;
                const imgs = element.tagName === "IMG" ? [element as HTMLImageElement] : element.querySelectorAll("img");
                imgs.forEach(fixImgSrc);
              }
            });
          } else if (mutation.type === "attributes" && mutation.attributeName === "src") {
            fixImgSrc(mutation.target as HTMLImageElement);
          }
        });
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["src"]
      });
    }

    return () => {
      document.body.removeChild(script);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Update SEO metadata for Home page Hello
  // useEffect(() => {
  //   // Update document title
  //   document.title = "SCADA Programming in Kochi";

  //   // Update meta description
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute(
  //       "content",
  //       "Dynamic Control Systems delivers reliable industrial automation and SCADA programming in Kochi with Mitsubishi Electric solutions for diverse industries."
  //     );
  //   }

  //   // Update Open Graph tags
  //   const ogTitle = document.querySelector('meta[property="og:title"]');
  //   if (ogTitle) {
  //     ogTitle.setAttribute(
  //       "content",
  //       "SCADA Programming in Kochi"
  //     );
  //   }

  //   const ogDescription = document.querySelector('meta[property="og:description"]');
  //   if (ogDescription) {
  //     ogDescription.setAttribute(
  //       "content",
  //       "Dynamic Control Systems delivers reliable industrial automation and SCADA programming in Kochi with Mitsubishi Electric solutions for diverse industries."
  //     );
  //   }

  //   // Cleanup function to restore default meta tags when component unmounts
  //   return () => {
  //     document.title = "SCADA Programming in Kochi";
  //     if (metaDescription) {
  //       metaDescription.setAttribute(
  //         "content",
  //         "Dynamic Control Systems delivers reliable industrial automation and SCADA programming in Kochi with Mitsubishi Electric solutions for diverse industries."
  //       );
  //     }
  //     if (ogTitle) {
  //       ogTitle.setAttribute(
  //         "content",
  //         "SCADA Programming in Kochi"
  //       );
  //     }
  //     if (ogDescription) {
  //       ogDescription.setAttribute(
  //         "content",
  //         "Dynamic Control Systems delivers reliable industrial automation and SCADA programming in Kochi with Mitsubishi Electric solutions for diverse industries."
  //       );
  //     }
  //   };
  // }, []);

  // Organization Schema (Identity Schema)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dynamiccontrolsystems.in/#organization",
    "name": "Dynamic Control Systems",
    "alternateName": "DCS",
    "url": "https://dynamiccontrolsystems.in",
    "logo": "https://dynamiccontrolsystems.in/dynamic_logo.png",
    "description": "Dynamic Control Systems delivers advanced industrial automation, SCADA, and energy solutions powered by Mitsubishi Electric in Kochi. Authorized Channel Partner for Mitsubishi Electric India Private Limited.",
    "foundingDate": "1998",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "52/3106, Near SBI Bank, NH Bypass, Vyttila",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682019",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-48440-41177",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-94477-07855",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-85473-27855",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      }
    ],
    "email": ["admin@dynamiccontrolsystems.in", "sales@dynamiccontrolsystems.in"],
    "sameAs": [
      "https://www.facebook.com/dynamiccontrolsystems",
      "https://www.twitter.com/dynamiccontrolsystems",
      "https://www.linkedin.com/company/dynamic-control-systems",
      "https://www.youtube.com/@dynamiccontrolsystems"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Industrial Automation",
      "SCADA Systems",
      "Factory Automation",
      "Process Automation",
      "Industrial IoT",
      "Embedded Systems",
      "Mitsubishi Electric Products",
      "PLC Programming",
      "HMI Systems",
      "Servo Motors",
      "Variable Frequency Drives"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Automation Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engineering & Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial, Factory & Process Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SCADA System Integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial IoT Solution Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Embedded System Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Training"
          }
        }
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://dynamiccontrolsystems.in/#website",
    "url": "https://dynamiccontrolsystems.in",
    "name": "Dynamic Control Systems",
    "description": "Dynamic Control Systems delivers advanced industrial automation, SCADA, and energy solutions powered by Mitsubishi Electric in Kochi.",
    "publisher": {
      "@id": "https://dynamiccontrolsystems.in/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dynamiccontrolsystems.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // LocalBusiness Schema (additional identity)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dynamiccontrolsystems.in/#localbusiness",
    "name": "Dynamic Control Systems",
    "image": "https://dynamiccontrolsystems.in/dynamic_logo.png",
    "url": "https://dynamiccontrolsystems.in",
    "telephone": "+91-48440-41177",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "52/3106, Near SBI Bank, NH Bypass, Vyttila",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9312",
      "longitude": "76.2673"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  useStructuredData(organizationSchema, "organization-schema");
  useStructuredData(websiteSchema, "website-schema");
  useStructuredData(localBusinessSchema, "localbusiness-schema");
  return (
    <div className="min-h-screen">

      {/* ✅ ADD HERE */}
      <Helmet>
        <title>SCADA Programming in Kochi</title>

        <meta
          name="description"
          content="Dynamic Control Systems delivers reliable industrial automation and SCADA programming in Kochi with Mitsubishi Electric solutions for diverse industries."
        />

        <meta property="og:title" content="SCADA Programming in Kochi" />
        <meta
          property="og:description"
          content="Dynamic Control Systems delivers reliable industrial automation and SCADA programming in Kochi with Mitsubishi Electric solutions for diverse industries."
        />

        <link rel="canonical" href="https://dynamiccontrolsystems.in/" />
      </Helmet>

      <Navigation />

      <main>
        <HeroSection />
        <ProductCarousel />
        <MissionSection />
        <ServicesSection />

        {/* Blog Section */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Latest Insights & Case Studies
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with our latest announcements, technical guides, and automation trends.
              </p>
            </div>
            {/* Container where the 3x3 blog grid will load */}
            <div
              id="certifyied-blog-container"
              data-project-id="4024d9ee-af39-411b-a70f-c388fe32dd47"
              data-limit="9"
              data-redirect-url="/blog"
            ></div>
          </div>
        </section>

        <div className="text-center my-5">
          <Link to="/automation" className="btn btn-outline-dark">
            Explore Automation Systems →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
