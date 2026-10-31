import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/new_banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/60 md:bg-gradient-to-r md:from-background/95 md:via-background/80 md:to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              font-display 
              text-3xl 
              sm:text-5xl 
              md:text-6xl 
              lg:text-6xl 
              font-bold 
              mb-4 
              sm:mb-6 
              leading-tight 
              tracking-tight
            "
          >
            Powering industries{" "}
            <span className="text-red-500">with smart, reliable </span>
            Automation solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          >
            Empowering industries across Kerala with smart automation, advanced energy solutions, and expert SCADA programming, powered by Mitsubishi Electric.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button size="lg" asChild className="group w-full sm:w-auto shadow-md">
              <Link to="/products">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group w-full sm:w-auto shadow-sm">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16"
          >
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1">28+</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/85 leading-snug">Years of Innovation</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1">1000+</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/85 leading-snug">Projects Served</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5 sm:mb-1">400+</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/85 leading-snug">Global Customers</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Shown only on desktop/tablet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
