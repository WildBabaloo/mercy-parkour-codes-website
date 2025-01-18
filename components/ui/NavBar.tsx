"use client";
import React from "react";
import Image from "next/image";
import Guardian_Angel from "@/public/images/guardian-angel-abd887839bb9315af13b39dacd1b2b2b607bc45bf23ddd428e9e93602d7c25b1.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { GlobeIcon, MoonIcon } from "@radix-ui/react-icons";

export const MercyParkourLogo = () => {
  return (
    <div className="relative w-9 h-9 mr-2">
      <Image src={Guardian_Angel} alt="Logo" fill />
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["New/Latest Codes", "Learn Mercy Tech", "Extras"];

  return (
    <Navbar
      position="static"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <MercyParkourLogo />
          <Link href="/">
            <p className="font-bold text-inherit">mercyparkour.codes</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/codes">
            New/Latest Codes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tech" aria-current="page">
            Learn Mercy Tech
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/extras">
            Extras
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <MoonIcon className="w-6 h-6" />
        </NavbarItem>
        <NavbarItem>
          <GlobeIcon className="w-6 h-6" />
        </NavbarItem>
        <NavbarItem>
          <Button variant="default">Login</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
