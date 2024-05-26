import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

import { useState } from 'react';
import logo from '../../assets/img/logo-provisorio.png'
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
          <Link  className="text-2xl font-bold  text-white" color="foreground" to='/' >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        <Link  className="text-2xl font-bold  text-white" color="foreground" to='/formulario ' >
            formulario
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link  className="text-2xl font-bold  text-white" color="foreground" to='/donaciones' >
            Donaciones
          </Link>
        </NavbarItem>
      </NavbarContent>
     {/*  <NavbarContent justify="end">
      </NavbarContent> */}
      <NavbarMenu>
          <NavbarMenuItem >
            <Link
              className="w-full flex justify-center font-bold "
              href="#"
              size="lg"
              to='/'
            >
              Inicio
            </Link>
            <Link
             className="w-full flex justify-center font-bold"
             href="#"
             size="lg"
             to='/donaciones'
           >
             Donaciones
           </Link>
           <Link
             className="w-full flex  justify-center font-bold"
             href="#"
             size="lg"
             to='/formulario'
           >
             Formulario
           </Link>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>

    </> 
  )
}

export default NavBar
