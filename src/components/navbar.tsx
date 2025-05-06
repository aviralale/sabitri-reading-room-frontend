import { useState } from "react";
import Logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const menuItems = [
    { name: "About", to: "#about" },
    { name: "Facilities", to: "#facilities" },
    { name: "Membership", to: "#membership" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav
      data-state={menuState && "active"}
      className="fixed z-20 w-full border-b border-dashed bg-white/80 backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
    >
      <div className="m-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
          <div className="flex w-full justify-between lg:w-auto">
            <Link
              to="/"
              aria-label="home"
              className="flex items-center space-x-2 text-lg font-bold"
            >
              <img
                src={Logo}
                className="h-12 drop-shadow-white/50 drop-shadow"
                alt="Sabitri Reading Room Logo"
              />
            </Link>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
            <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 lg:mt-0 lg:ml-6 lg:border-l lg:border-border/20 lg:pl-6">
              <ModeToggle />
              {/* Book Now Button */}
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-600/90 hover:to-blue-600/90 transition-all shadow hover:shadow-primary/20 hover:shadow-md"
              >
                <Link to="#membership">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
