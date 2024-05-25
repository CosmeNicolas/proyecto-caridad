import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { useState } from 'react';
import logo from '../../assets/img/logo-provisorio.png'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Donaciones",
    "Detalles"
  ];
  return (
    <>
      <Navbar className="text-dark bg-[#445D48]" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <img className="w-[50px]" src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden menu-toggle"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
      <NavbarItem>
          <Link className="text-2xl font-bold" color="foreground" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-2xl font-bold" href="#" aria-current="page">
            Donaciones
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-2xl font-bold" color="foreground" href="#">
            Detalles
          </Link>
        </NavbarItem>
      </NavbarContent>
     {/*  <NavbarContent justify="end">
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full flex  justify-center font-bold"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

    </> 
  )
}

export default NavBar
