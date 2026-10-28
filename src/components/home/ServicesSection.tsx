import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Service images
import engineeringDesignImg from "@/assets/services/Engineering & Design.jpg";
import industrialAutomationImg from "@/assets/services/Industrial, Factory & Process Automation.jpg";
import scadaIntegrationImg from "@/assets/services/SCADA System Integration.jpg";
import industrialIotImg from "@/assets/services/Industrial IoT Solution Development.jpg";
import embeddedSystemImg from "@/assets/services/embeded_system.jpg";
import projectTrainingImg from "@/assets/services/Project Training.jpg";
import roboticIntegrationImg from "@/assets/services/robotic_project_integration.jpg";
import programmingTestingImg from "@/assets/services/programming_testing_commissioning.jpg";
import controlPanelImg from "@/assets/services/control_panel_manufacturing.jpg";
import modificationRetrofitImg from "@/assets/services/modification_retrofit_solutions.jpg";
import homeGateAutomationImg from "@/assets/services/home_and_gate_automation.jpg";
import specializedTradingImg from "@/assets/services/specialized_industrial_product_trading.jpg";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const ServicesSection = () => {
  const services: ServiceItem[] = [
    {
      title: "Engineering & Design",
      description:
        "At DCS, we deliver result-oriented, cost-effective, and time-efficient engineering solutions tailored to your operational needs with intelligent and adaptable approaches, utilizing Mitsubishi Electric for optimal performance.",
      image: engineeringDesignImg,
    },
    {
      title: "Industrial, Factory & Process Automation",
      description:
        "Companies in manufacturing and process sectors need an expert technology partner. We leverage advanced automation platforms to maximize plant throughput, reduce downtime, and drive end-to-end operational efficiency.",
      image: industrialAutomationImg,
    },
    {
      title: "SCADA System Integration",
      description:
        "Dynamic Control Systems specializes in designing, building, and deploying advanced SCADA systems customized to meet diverse industrial requirements with real-time monitoring and data visualization.",
      image: scadaIntegrationImg,
    },
    {
      title: "Industrial IoT Solution Development",
      description:
        "Enables seamless device connectivity, edge-to-cloud analytics, remote diagnostics, alarm management, digital twin architectures, and enterprise ERP integration across modern smart factory setups.",
      image: industrialIotImg,
    },
    {
      title: "Embedded System",
      description:
        "We design and deliver high-reliability embedded hardware and firmware solutions for industrial monitoring and precision control, custom tailored to challenging industrial and commercial environments.",
      image: embeddedSystemImg,
    },
    {
      title: "Project Training",
      description:
        "Dynamic Control Systems is committed to equipping engineers and fresh graduates with real-world automation, PLC programming, SCADA, and drive commissioning skills through industry-aligned hands-on training.",
      image: projectTrainingImg,
    },
    {
      title: "Robotic Project Integration",
      description:
        "Turnkey industrial robotic solutions including articulated arms and SCARA systems for precision assembly, machine tending, pick-and-place, welding, and palletizing powered by Mitsubishi Electric robotics.",
      image: roboticIntegrationImg,
    },
    {
      title: "Programming, Testing Commissioning",
      description:
        "End-to-end PLC, HMI, and SCADA control software programming, simulation, rigorous factory acceptance testing (FAT), and rapid on-site commissioning to guarantee smooth and reliable plant startup.",
      image: programmingTestingImg,
    },
    {
      title: "Control Panel Manufacturing",
      description:
        "Custom engineering and manufacturing of electrical control panels, PCC, MCC, VFD drive panels, and PLC automation enclosures compliant with international electrical and safety standards.",
      image: controlPanelImg,
    },
    {
      title: "Modification & Retrofit Solutions",
      description:
        "Revitalize existing machinery with cost-effective retrofit solutions, migrating obsolete control hardware and legacy PLCs/drives to modern Mitsubishi platforms with zero unnecessary disruption.",
      image: modificationRetrofitImg,
    },
    {
      title: "Home and Gate Automation",
      description:
        "Smart automation solutions for residential and commercial infrastructure, featuring heavy-duty automated sliding and swing gate systems, smart intercoms, biometric access, and integrated security controls.",
      image: homeGateAutomationImg,
    },
    {
      title: "Specialized Industrial Product Trading",
      description:
        "Authorized sourcing, distribution, and technical supply of genuine industrial automation products, high-precision sensors, servo systems, PLCs, HMIs, and electrical switchgear from global tier-1 brands.",
      image: specializedTradingImg,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3 tracking-wide uppercase">
              End-to-End Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Services & Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive industrial automation, robotics, control panel manufacturing, and engineering services powered by decades of industry expertise across Kerala and beyond.
            </p>
          </div>
          <Button asChild className="hidden md:inline-flex group">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Card className="h-full hover-lift cursor-pointer group overflow-hidden border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <AspectRatio ratio={16 / 10}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </AspectRatio>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto group/btn text-primary hover:text-primary-hover font-semibold"
                    asChild
                  >
                    <Link to="/contact">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button asChild className="w-full group">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
