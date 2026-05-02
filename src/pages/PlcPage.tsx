import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PlcPage = () => {
  return (
    <div className="container py-5">

      {/* ✅ META TAGS */}
      <Helmet>
        <title>
          PLC System Guide 2026 | PLC Programming, Applications & PLC Purchase
        </title>

        <meta
          name="description"
          content="Looking for PLC solutions? Explore PLC programming, automation, applications, and a complete PLC purchase guide to choose the right controller for your industry."
        />

        <link rel="canonical" href="https://dynamiccontrolsystems.in/plc-system" />
      </Helmet>

      {/* HERO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">
          PLC: Complete Guide to Programmable Logic Controllers (2026)
        </h1>

        <p className="fs-5 mt-4">
          A PLC (Programmable Logic Controller) is an industrial digital
          computer designed to control machines, processes, and automation
          systems in real time.
        </p>
      </div>

      {/* WHAT IS PLC */}
      <section className="mb-5">
        <h2 className="fw-bold">What is PLC?</h2>
        <p className="fs-5">
          PLCs are widely used in factories and industries to automate
          repetitive tasks with high precision and reliability. Unlike
          traditional control systems, PLCs are programmable and flexible.
        </p>
      </section>

      {/* IMPORTANCE */}
      <section className="mb-5">
        <h2 className="fw-bold">Why PLC is Important in Automation</h2>
        <ul className="fs-5">
          <li>Replacing manual control systems</li>
          <li>Reducing human error</li>
          <li>Increasing production speed</li>
          <li>Ensuring consistent output</li>
        </ul>
      </section>

      {/* WORKING */}
      <section className="mb-5">
        <h2 className="fw-bold">How PLC Works</h2>
        <ol className="fs-5">
          <li>Input Scan – Reads signals from sensors</li>
          <li>Program Execution – Runs logic</li>
          <li>Output Update – Controls devices</li>
          <li>Repeats continuously</li>
        </ol>
      </section>

      {/* COMPONENTS */}
      <section className="mb-5">
        <h2 className="fw-bold">PLC Components</h2>
        <ul className="fs-5">
          <li>CPU (Brain of PLC)</li>
          <li>Input Modules</li>
          <li>Output Modules</li>
          <li>Power Supply</li>
          <li>Communication Interface</li>
        </ul>
      </section>

      {/* TYPES */}
      <section className="mb-5">
        <h2 className="fw-bold">Types of PLC</h2>
        <ul className="fs-5">
          <li>Compact PLC</li>
          <li>Modular PLC</li>
          <li>Rack-Mounted PLC</li>
          <li>Safety PLC</li>
        </ul>
      </section>

      {/* APPLICATIONS */}
      <section className="mb-5">
        <h2 className="fw-bold">PLC Applications</h2>
        <ul className="fs-5">
          <li>Manufacturing</li>
          <li>Automotive Industry</li>
          <li>Power Plants</li>
          <li>Water Treatment</li>
        </ul>
      </section>

      {/* ADVANTAGES */}
      <section className="mb-5">
        <h2 className="fw-bold">Advantages of PLC</h2>
        <ul className="fs-5">
          <li>High reliability</li>
          <li>Flexibility</li>
          <li>Fast operation</li>
          <li>Reduced wiring</li>
        </ul>
      </section>

      {/* PURCHASE GUIDE */}
      <section className="mb-5">
        <h2 className="fw-bold">PLC Purchase Guide</h2>
        <ul className="fs-5">
          <li>Application requirement</li>
          <li>I/O capacity</li>
          <li>Scalability</li>
          <li>Communication support</li>
          <li>Budget</li>
        </ul>
      </section>

      {/* INTERNAL LINKS (VERY IMPORTANT FOR SEO) */}
      <section className="mt-5 p-4 bg-light rounded">
        <h3 className="fw-bold">Learn More</h3>
        <p className="fs-5">
          Explore related automation topics:
        </p>

        <ul>
          <li><Link to="/scada-system">SCADA System Guide</Link></li>
          <li><Link to="/vfd-drive">VFD System Guide</Link></li>
          <li><Link to="/hmi-system">HMI System Guide</Link></li>
        </ul>
      </section>

    </div>
  );
};

export default PlcPage;