import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AutomationHub = () => {
    return (
        <div className="container py-5">

            {/* META */}
            <Helmet>
                <title>
                    Industrial Automation Guide 2026 | PLC, SCADA, VFD & HMI
                </title>

                <meta
                    name="description"
                    content="Complete guide to industrial automation including PLC, SCADA, VFD, and HMI systems. Learn how automation works in modern industries."
                />

                <link rel="canonical" href="https://dynamiccontrolsystems.in/automation" />
            </Helmet>

            {/* TITLE */}
            <div className="text-center mb-5">
                <h1 className="fw-bold display-4">
                    Industrial Automation Complete Guide (2026)
                </h1>

                <p className="fs-5 mt-3">
                    Explore all major industrial automation systems including PLC, SCADA,
                    VFD, and HMI. Learn how modern industries use automation to improve
                    efficiency and productivity.
                </p>
            </div>

            {/* LINKS */}
            <div className="row g-4">

                <div className="col-md-6">
                    <div className="p-4 border rounded shadow-sm">
                        <h3>PLC System</h3>
                        <p>Learn about PLC programming, applications, and automation.</p>
                        <Link to="/plc-system">Read Full Guide →</Link>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 border rounded shadow-sm">
                        <h3>SCADA System</h3>
                        <p>Understand SCADA architecture, software, and monitoring systems.</p>
                        <Link to="/scada-system">Read Full Guide →</Link>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 border rounded shadow-sm">
                        <h3>VFD System</h3>
                        <p>Learn how VFD controls motor speed and saves energy.</p>
                        <Link to="/vfd-drive">Read Full Guide →</Link>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="p-4 border rounded shadow-sm">
                        <h3>HMI System</h3>
                        <p>Explore HMI interfaces, design, and industrial applications.</p>
                        <Link to="/hmi-system">Read Full Guide →</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AutomationHub;