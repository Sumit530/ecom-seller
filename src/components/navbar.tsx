import type { FC } from "react";
import { Button, DarkThemeToggle, Navbar,Dropdown } from "flowbite-react";
import profile from '../assets/images/default_profile.png'

const ExampleNavbar: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3 fixed mt-14 z-10 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Pricee
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
          
          <Dropdown label={<div className="bg-gray-400 w-16 h-16 rounded-full overflow-hidden"> < img  src={profile} className="ouline-none "/> </div>} trigger="hover" className="bg-none" style={{background:"none",border:"none"}} >
         <Dropdown.Header>
         <span className="block text-sm">
            Seller Name
            </span>
          <span className="block truncate text-sm font-medium">
           Seller@gmail.com
           </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  Profile
                </Dropdown.Item>
                
                <Dropdown.Divider />
                <Dropdown.Item>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;
