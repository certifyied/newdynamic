import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCanonical } from "@/hooks/useCanonical";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogPosts, blogImageMap } from "./Blog";
import { formatBlogContent } from "@/lib/blogUtils";
import NotFound from "./NotFound";

const BlogDetail = () => {
  useCanonical();
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id, 10) : null;
  const blog = blogPosts.find((p) => p.id === blogId);

  if (!blog) {
    return <NotFound />;
  }

  // Generate canonical URL dynamically
  const canonicalUrl = `https://dynamiccontrolsystems.in/blog/${blog.id}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`${blog.title} | Dynamic Control Systems`}</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${blog.title} | Dynamic Control Systems`} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {blogImageMap[blog.id] && (
          <meta property="og:image" content={`https://dynamiccontrolsystems.in${blogImageMap[blog.id]}`} />
        )}
      </Helmet>

      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/blog">
                <ArrowLeft size={16} />
                Back to all case-studies
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  {blog.category}
                </Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
              >
                {blog.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {blog.excerpt}
              </motion.p>
            </header>

            {/* Featured Image */}
            {blogImageMap[blog.id] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12 rounded-xl overflow-hidden shadow-lg border border-border"
              >
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={blogImageMap[blog.id]}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </AspectRatio>
              </motion.div>
            )}

            {/* Content Body */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <div
                className="prose prose-neutral dark:prose-invert max-w-none text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: formatBlogContent(blog.content) }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                }}
              />
            </motion.div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
