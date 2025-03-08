import React, { useState } from "react";
import Overview from "./Overview";
import Settings from "./Settings";
import Ballot from "./Ballot";
import Preview from "./Preview";
import Voters from "./Voters";
import Launch from "./Launch";

const logo = require("../assets/images/logo.png");

const menuItems = [
  { id: "overview", label: "Overview", icon: "M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z M8 4L2 8v7h5v-3h2v3h5V8z" },
  { id: "settings", label: "Settings", icon: "M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zm1.225-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" },
  { id: "ballot", label: "Ballot", icon: "M12 10h5V8h-5zm0 6h5v-2h-5zm-3-5q.825 0 1.413-.587T11 9t-.587-1.412T9 7t-1.412.588T7 9t.588 1.413T9 11m0 6q.825 0 1.413-.587T11 15t-.587-1.412T9 13t-1.412.588T7 15t.588 1.413T9 17m-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" },
  { id: "voters", label: "Voters", icon: "M8 2.002a1.998 1.998 0 1 0 0 3.996a1.998 1.998 0 0 0 0-3.996M12.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5 7.993A1 1 0 0 1 6 7h4a1 1 0 0 1 1 1v3a3 3 0 0 1-.146.927A3.001 3.001 0 0 1 5 11zM4 8c0-.365.097-.706.268-1H2a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 3.436 2.319A4 4 0 0 1 4 10.999zm8 0v3c0 .655-.157 1.273-.436 1.819A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-2.268c.17.294.268.635.268 1"},
  { id: "preview", label: "Preview", icon: "M4.998 7.78C6.729 6.345 9.198 5 12 5s5.27 1.345 7.002 2.78a12.7 12.7 0 0 1 2.096 2.183c.253.344.465.682.618.997c.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997a12.7 12.7 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19s-5.27-1.345-7.002-2.78a12.7 12.7 0 0 1-2.096-2.183a6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.7 12.7 0 0 1 4.998 7.78M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"},
  { id: "launch", label: "Launch", icon: "M5.752 12A13 13 0 0 0 8 14.248v4.002c0 .414.336.75.75.75a5 5 0 0 0 4.797-6.414a12.98 12.98 0 0 0 5.45-10.848a.75.75 0 0 0-.735-.735L18 1C13.634 1 9.77 3.153 7.414 6.453A5 5 0 0 0 1 11.25c0 .414.336.75.75.75zM13 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4" },
];

const Sidebar = ({ setPage, page, isOpen, toggleSidebar }: { setPage: (page: string) => void; page: string; isOpen: boolean; toggleSidebar: () => void }) => (
  <div
    className={`fixed inset-y-0 left-0 z-50 w-72 bg-black transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:relative md:translate-x-0 md:w-1/3 lg:w-1/3 h-full flex flex-col items-start gap-5`}
  >
    {/* Close button on mobile */}
    <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4 text-white text-2xl">
      ✖
    </button>

    <div className="w-full bg-bluerry h-16 flex items-center cursor-pointer">
      <img src={logo} className="w-20 h-12" alt="logo" />
      <span className="text-white font-kanit text-2xl md:text-2xl font-bold -ml-4">eVote Restart</span>
    </div>

    {menuItems.map((item) => (
      <div
        key={item.id}
        className={`w-full p-3 flex gap-4 items-center cursor-pointer rounded-md hover:bg-bluerry transition ${
          page === item.id ? "bg-bluerry" : ""
        }`}
        onClick={() => {
          setPage(item.id);
          toggleSidebar(); // Close sidebar on mobile after selection
        }}
      >
        <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d={item.icon} />
        </svg>
        <span className="font-kanit text-white text-lg md:text-2xl">{item.label}</span>
      </div>
    ))}
  </div>
);

const Dashboard: React.FunctionComponent = () => {
  const [page, setPage] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)

  };

  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar setPage={setPage} page={page} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Mobile menu button */}
      <button
        className={`absolute top-4 left-4 md:hidden z-50 bg-bluerry text-white p-2 rounded-md ${isSidebarOpen ? "hidden" : "flex"}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Content Area */}
      <div className="w-full h-full bg-white p-4 overflow-auto">
        {page === "overview" && <Overview />}
        {page === "settings" && <Settings />}
        {page === "ballot" && <Ballot />}
        {page === "voters" && <Voters />}
        {page === "preview" && <Preview />}
        {page === "launch" && <Launch />}
      </div>
    </section>
  );
};

export default Dashboard;
