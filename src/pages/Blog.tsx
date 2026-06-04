import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";

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

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  /* Extract the blog ID from the URL search params */
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id') || urlParams.get('slug');

  return (
    <div className="min-h-screen bg-background">
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
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
    </div>
  );
};

export default Blog;
