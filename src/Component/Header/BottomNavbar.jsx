import React, { useState, useEffect } from "react";
import { ChevronDown, Home, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const navItems = [
  {
    name: 'Home',
    path: '/',
    isHome: true,
  },
  {
    name: 'About Us',
    path: '/about-us',
    dropdownItems: [
      {
        name: 'DSEU Memoir',
        path: '/about-us/DSEU-Memoir',
        dropdownItems: [
          { name: 'Convocation', path: '/about-us/DSEU-Memoir/Convocation' },
          { name: 'Former VCs', path: '/about-us/DSEU-Memoir/Former-VCs' },
        ],
      },
      {
        name: 'University Calendar',
        path: '/about-us/University-Calendar',
      },
      // {
      //   name: 'VC Message and Videos',
      //   path: '/about-us/VC-Message-and-Videos',
      // },
      {
        name: 'Vision and Mission',
        path: '/about-us/Vision-and-Mission',
      },
      {
        name: 'Annual Report',
        path: '/about-us/Annual-Report',
        dropdownItems: [
          { name: 'Year-wise', path: '/about-us/Annual-Report/Year-wise' },
        ],
      },
      {
        name: 'Governing Bodies',
        path: '/about-us/Governing-Bodies',
      },
      {
        name: 'Handbook (Brochure)',
        path: '/about-us/Handbook',
      },
      {
        name: 'About the College',
        path: '/about-us/About-the-College',
        dropdownItems: [
          { name: 'Disabled Friendliness', path: '/about-us/About-the-College/Disabled-Friendliness' },
          { name: 'Green Policy', path: '/about-us/About-the-College/Green-Policy' },
          { name: 'E-Governance', path: '/about-us/About-the-College/E-Governance' },
        ],
      },
      {
        name: 'Policy',
        path: '/about-us/Policy',
      },
    ],
  },
  {
    name: 'Academics',
    path: '/academics',
    dropdownItems: [
      { name: 'Programs', path: '/academics/programs' },
      { name: 'Departments', path: '/academics/departments' },
      { name: 'Faculty', path: '/academics/faculty' },
    ],
  },
  {
    name: 'Campuses',
    path: '/campus',
    dropdownItems: [
      { name: 'North', path: '/campus/north' },
      { name: 'South', path: '/campus/south' },
      { name: 'East', path: '/campus/east' },
      { name: 'West', path: '/campus/west' },
    ],
  },
  {
    name: 'Courses',
    path: '/courses',
    dropdownItems: [
      { name: 'Under Graduate', path: '/Courses/UG' },
      { name: 'Post Graduate', path: '/Courses/PG' },
      { name: 'Diploma', path: '/Courses/Diploma' },
    ],
  },
  {
    name: 'Research',
    path: '/research',
    dropdownItems: [
      { name: 'Publications', path: '/research/publications' },
      { name: 'Projects', path: '/research/projects' },
      { name: 'Labs', path: '/research/labs' },
    ],
  },
  {
    name: 'Admission',
    path: '/admission',
    dropdownItems: [
      { name: 'Facilities', path: '/admission/facilities' },
      { name: 'Partners', path: '/admission/partners' },
      { name: 'Events', path: '/admission/events' },
    ],
  },
  {
    name: 'Administration',
    path: '/administration',
    dropdownItems: [
      { name: 'News', path: '/administration/news' },
      { name: 'Events', path: '/administration/events' },
      { name: 'Calendar', path: '/administration/calendar' },
    ],
  },
  {
    name: 'Amenities',
    path: '/amenities',
    dropdownItems: [
      { name: 'Awards', path: '/amenities/awards' },
      { name: 'Honors', path: '/amenities/honors' },
      { name: 'Rankings', path: '/amenities/rankings' },
    ],
  },
  {
    name: 'Alumni',
    path: '/alumni',
    dropdownItems: [
      { name: 'Jobs', path: '/alumni/jobs' },
      { name: 'Internships', path: '/alumni/internships' },
      { name: 'Training', path: '/alumni/training' },
    ],
  },
  {
    name: 'Entrepreneurship',
    path: '/entrepreneurship',
    dropdownItems: [
      { name: 'About', path: '/entrepreneurship/about' },
      { name: 'Leadership', path: '/entrepreneurship/leadership' },
      { name: 'Contact', path: '/entrepreneurship/contact' },
    ],
  },
];

const DropdownMenu = ({ items }) => {
  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-50 min-w-[250px]">
      {items.map((item) => (
        <div key={item.name} className="relative group">
          {item.dropdownItems ? (
            <div className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-700 transition duration-200 rounded-sm cursor-default">
              <div className="flex justify-between items-center">
                <span>{item.name}</span>
                {item.dropdownItems && (
                  <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-blue-700" />
                )}
              </div>
            </div>
          ) : (
            <Link
              to={item.path}
              className="block px-4 py-3 text-sm text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-700 transition duration-200 rounded-sm"
            >
              {item.name}
            </Link>
          )}

          {item.dropdownItems && (
            <div className="absolute top-0 left-full min-w-[250px] bg-white shadow-lg rounded-md py-2 z-50 hidden group-hover:block">
              <DropdownMenu items={item.dropdownItems} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="w-full max-w-7xl mx-auto border-t-2 border-gray-200">
        <div className="relative h-16 px-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute left-6 top-1/2 -translate-y-1/2 z-20"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

        
          <div className="hidden lg:flex justify-center items-center h-full w-full gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative inline-flex items-center"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.isHome ? (
                  <Link
                    to={item.path}
                    className="group inline-flex items-center text-sm font-medium text-[#005CB9] hover:text-[#005CB9] whitespace-nowrap relative"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <div className="group inline-flex items-center text-sm font-medium text-[#005CB9] hover:text-[#005CB9] whitespace-nowrap relative cursor-default">
                    {item.name}
                    {item.dropdownItems && (
                      <ChevronDown className="ml-0.5 h-3 w-3" />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                )}

                {item.dropdownItems && openDropdown === item.name && (
                  <DropdownMenu items={item.dropdownItems} />
                )}
              </div>
            ))}
          </div>
        </div>

        
        <div
          className={`lg:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-300 z-50 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            maxHeight: isMobileMenuOpen ? "80vh" : "0",
            overflow: "auto",
          }}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <div
                className="flex items-center justify-between px-6 py-3 border-b border-gray-100"
                onClick={() =>
                  openDropdown === item.name
                    ? setOpenDropdown(null)
                    : setOpenDropdown(item.name)
                }
              >
                {item.isHome ? (
                  <Link
                    to={item.path}
                    className="flex items-center text-sm font-medium text-[#005CB9] hover:text-[#005CB9] "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                ) : (
                  <div className="flex items-center text-sm font-medium text-[#005CB9] cursor-default">
                    {item.name}
                  </div>
                )}
                {item.dropdownItems && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
              {item.dropdownItems && openDropdown === item.name && (
                <div className="bg-gray-50">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.path}
                      className="block px-8 py-2 text-sm text-[#005CB9] hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

