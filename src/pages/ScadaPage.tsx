import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ScadaPage = () => {
  return (
    <div className="container py-5">

      {/* ✅ META TAGS */}
      <Helmet>
        <title>SCADA System Guide 2026 | SCADA Software, Architecture & Uses</title>

        <meta
          name="description"
          content="Explore SCADA systems, SCADA software, working principles, and real-world applications. Learn how SCADA improves industrial automation efficiency."
        />

        <link rel="canonical" href="https://dynamiccontrolsystems.in/scada-system" />
      </Helmet>

      {/* HERO */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">
          SCADA: Complete Guide to Supervisory Control and Data Acquisition (2026)
        </h1>

        <p className="fs-5 mt-4">
          SCADA is a powerful industrial automation system used to monitor,
          control, and analyze real-time data from machines and processes.
        </p>
      </div>

      {/* INTRO */}
      <section className="mb-5">
        <h2 className="fw-bold">What is SCADA?</h2>
        <p className="fs-5">
          SCADA (Supervisory Control and Data Acquisition) is a centralized
          system that collects and processes real-time data, allowing operators
          to monitor and control industrial operations efficiently.
        </p>
      </section>

      {/* FULL FORM */}
      <section className="mb-5">
        <h2 className="fw-bold">SCADA Full Form</h2>
        <ul className="fs-5">
          <li>Supervisory → Monitoring</li>
          <li>Control → Managing processes</li>
          <li>Data Acquisition → Collecting real-time data</li>
        </ul>
      </section>

      {/* WORKING */}
      <section className="mb-5">
        <h2 className="fw-bold">How SCADA Works</h2>
        <ol className="fs-5">
          <li>Data collection from sensors</li>
          <li>Transmission to PLC/RTU</li>
          <li>Processing</li>
          <li>Visualization in HMI</li>
          <li>Control actions</li>
        </ol>
      </section>

      {/* ARCHITECTURE */}
      <section className="mb-5">
        <h2 className="fw-bold">SCADA Architecture</h2>
        <ul className="fs-5">
          <li>Field Devices (Sensors, Actuators)</li>
          <li>PLC (Controller)</li>
          <li>RTU (Remote Units)</li>
          <li>SCADA Software</li>
          <li>HMI Interface</li>
          <li>Communication Network</li>
        </ul>
      </section>

      {/* TYPES */}
      <section className="mb-5">
        <h2 className="fw-bold">Types of SCADA</h2>
        <ul className="fs-5">
          <li>Traditional SCADA</li>
          <li>Distributed SCADA</li>
          <li>Networked SCADA</li>
          <li>IoT-Based SCADA</li>
        </ul>
      </section>

      {/* APPLICATIONS */}
      <section className="mb-5">
        <h2 className="fw-bold">SCADA Applications</h2>
        <ul className="fs-5">
          <li>Manufacturing</li>
          <li>Power plants</li>
          <li>Water treatment</li>
          <li>Oil & Gas</li>
          <li>Building automation</li>
        </ul>
      </section>

      {/* BENEFITS */}
      <section className="mb-5">
        <h2 className="fw-bold">Benefits of SCADA</h2>
        <ul className="fs-5">
          <li>Real-time monitoring</li>
          <li>Increased efficiency</li>
          <li>Reduced downtime</li>
          <li>Remote access</li>
          <li>Better analytics</li>
        </ul>
      </section>

      {/* SOFTWARE */}
      <section className="mb-5">
        <h2 className="fw-bold">SCADA Software</h2>
        <ul className="fs-5">
          <li>Real-time dashboards</li>
          <li>Alarm management</li>
          <li>Data logging</li>
          <li>Trend analysis</li>
        </ul>
      </section>

      {/* PURCHASE GUIDE */}
      <section className="mb-5">
        <h2 className="fw-bold">SCADA Purchase Guide</h2>
        <ul className="fs-5">
          <li>Scalability</li>
          <li>Compatibility</li>
          <li>User Interface</li>
          <li>Security</li>
          <li>Support</li>
        </ul>
      </section>

      {/* INTERNAL LINKS (VERY IMPORTANT) */}
      <section className="mt-5 p-4 bg-light rounded">
        <h3 className="fw-bold">Related Automation Guides</h3>

        <ul>
          <li><Link to="/plc-system">PLC System Guide</Link></li>
          <li><Link to="/vfd-drive">VFD System Guide</Link></li>
          <li><Link to="/hmi-system">HMI System Guide</Link></li>
        </ul>
      </section>

    </div>
  );
};

export default ScadaPage;