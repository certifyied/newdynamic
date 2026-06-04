import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  useCanonical();

  useEffect(() => {
    // Update SEO metadata for Blog page
    document.title = "Blog & Case Studies | Dynamic Control Systems";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore expert tips and insights on industrial automation, PLC programming, SCADA systems, and energy management at the Dynamic Control Systems blog."
      );
    }

    // Load CDN Embed Script
    const script = document.createElement("script");
    script.src = "https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed";
    script.async = true;
    document.body.appendChild(script);

    // MutationObserver to prefix dynamic image paths with /src
    const rootEl = document.getElementById("root");
    let observer: MutationObserver | null = null;
    if (rootEl) {
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

      observer.observe(rootEl, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["src"]
      });
    }

    return () => {
      // Cleanup the script and observer when the component unmounts
      document.body.removeChild(script);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  /* Extract the blog ID from the URL search params */
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id') || urlParams.get('slug');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-1 ">
          {blogId ? (
            /* 1. If an ?id= is in the URL, render the Single Post Reader */
            <div
              id="certifyied-blog-post"
              data-project-id="4024d9ee-af39-411b-a70f-c388fe32dd47"
            ></div>
          ) : (
            /* 2. Otherwise (just /blog), render the Grid List of all blogs */
            <div
              id="certifyied-blog-container"
              data-project-id="4024d9ee-af39-411b-a70f-c388fe32dd47"
              data-limit="9"
              data-redirect-url="/blog"
            ></div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
