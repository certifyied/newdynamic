import React from "react";

const PillarPage = () => {
  return (
    <div className="container py-5">
      
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-dark">
          Complete Guide to VFD, PLC, SCADA, and HMI
        </h1>

        <p className="fs-5 text-dark mt-4">
          Industrial automation is the backbone of modern industries. Systems
          like PLC, HMI, SCADA, and VFD help factories improve productivity,
          reduce manual work, increase safety, and ensure efficient operations.
        </p>

        <p className="fs-5 text-dark">
          This complete guide explains everything about VFD, PLC, SCADA, and
          HMI, how they work, their benefits, and how they are connected in
          real-world industrial automation systems.
        </p>
      </div>

      {/* PLC Section */}
      <div className="mb-5 p-4 border rounded shadow-sm">
        <h2 className="fw-bold mb-3">What is PLC (Programmable Logic Controller)?</h2>

        <p className="text-dark fs-5">
          A PLC is an industrial digital computer used to automate machines and
          industrial processes. It receives input signals from sensors,
          processes them using programmed logic, and sends output signals to
          control motors, pumps, valves, relays, and alarms.
        </p>

        <h4 className="fw-semibold mt-4">Main Functions of PLC</h4>
        <ul className="fs-5">
          <li>Machine automation</li>
          <li>Process control</li>
          <li>Safety monitoring</li>
          <li>Sequential operations</li>
          <li>Data processing</li>
        </ul>

        <h4 className="fw-semibold mt-4">Example</h4>
        <p className="text-dark fs-5">
          If the water level in a tank reaches maximum level, the PLC
          automatically turns OFF the pump.
        </p>
      </div>

      {/* HMI Section */}
      <div className="mb-5 p-4 border rounded shadow-sm">
        <h2 className="fw-bold mb-3">What is HMI (Human Machine Interface)?</h2>

        <p className="text-dark fs-5">
          HMI is the interface between humans and machines. It is usually a
          touch screen panel or display that allows operators to monitor
          machine status, control operations, and view alarms.
        </p>

        <h4 className="fw-semibold mt-4">Main Features of HMI</h4>
        <ul className="fs-5">
          <li>Start and stop machine operations</li>
          <li>View system status</li>
          <li>Monitor alarms</li>
          <li>Adjust settings</li>
          <li>Check production reports</li>
        </ul>

        <h4 className="fw-semibold mt-4">Example</h4>
        <p className="text-dark fs-5">
          A touchscreen panel showing motor speed, temperature, and pressure
          inside a manufacturing plant.
        </p>
      </div>

      {/* SCADA Section */}
      <div className="mb-5 p-4 border rounded shadow-sm">
        <h2 className="fw-bold mb-3">
          What is SCADA (Supervisory Control and Data Acquisition)?
        </h2>

        <p className="text-dark fs-5">
          SCADA is a centralized system used for monitoring and controlling
          industrial operations. It collects real-time data from PLCs and field
          devices and displays them for operators in a control room.
        </p>

        <h4 className="fw-semibold mt-4">Main Features of SCADA</h4>
        <ul className="fs-5">
          <li>Real-time monitoring</li>
          <li>Alarm management</li>
          <li>Historical data storage</li>
          <li>Remote access and control</li>
          <li>Report generation</li>
        </ul>

        <h4 className="fw-semibold mt-4">Example</h4>
        <p className="text-dark fs-5">
          A water treatment plant where operators monitor all pumps, motors,
          and tank levels from one control room.
        </p>
      </div>

      {/* VFD Section */}
      <div className="mb-5 p-4 border rounded shadow-sm">
        <h2 className="fw-bold mb-3">What is VFD (Variable Frequency Drive)?</h2>

        <p className="text-dark fs-5">
          A VFD controls the speed and torque of electric motors by adjusting
          the frequency and voltage supplied to the motor. It helps reduce
          energy consumption and improves motor performance.
        </p>

        <h4 className="fw-semibold mt-4">Main Benefits of VFD</h4>
        <ul className="fs-5">
          <li>Energy saving</li>
          <li>Smooth motor starting</li>
          <li>Reduced maintenance</li>
          <li>Improved speed control</li>
          <li>Longer motor life</li>
        </ul>

        <h4 className="fw-semibold mt-4">Example</h4>
        <p className="text-dark fs-5">
          Controlling conveyor belt speed in a manufacturing production line.
        </p>
      </div>

      {/* Conclusion */}
      <div className="p-4 bg-light rounded shadow-sm">
        <h2 className="fw-bold mb-3">Conclusion</h2>

        <p className="text-dark fs-5">
          PLC, HMI, SCADA, and VFD form the foundation of modern industrial
          automation. Together they improve productivity, reduce downtime,
          save energy, and make industrial operations smarter and safer.
        </p>

        <p className="text-dark fs-5">
          Understanding these systems is essential for engineers, technicians,
          and professionals working in automation and industrial control systems.
        </p>
      </div>
    </div>
  );
};

export default PillarPage;