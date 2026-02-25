import { useState } from "react";
import { FaHome, FaUser, FaChartBar, FaBars } from "react-icons/fa";

function SidebarLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Profile", icon: <FaUser /> },
    { name: "Analytics", icon: <FaChartBar /> }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative
          ${isOpen ? "w-64" : "w-20"}
          bg-gray-900 text-white
          transition-all duration-300
          ${isMobileOpen ? "left-0" : "-left-full"}
          md:left-0
          top-0 h-dvh
        `}
      >

        {/* Toggle Button */}
        <div className="flex items-center justify-between p-4">
          {isOpen && <h1 className="text-xl font-bold">My App</h1>}
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-3 hover:bg-gray-700 cursor-pointer"
            >
              <span className="text-lg">{item.icon}</span>

              {isOpen && (
                <span className="text-sm font-medium">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <button
          className="md:hidden mb-4"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <FaBars />
        </button>

        <h1 className="text-2xl font-bold">
          Main Content Area
        </h1>
      </div>
    </div>
  );
}

export default SidebarLayout;