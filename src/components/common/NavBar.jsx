import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useState } from 'react';
import logo from '../../assets/img/logo-provisorio.png';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar className="text-dark bg-[#35443770] font-oswald" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarBrand>
            <Link to='/'>
              <img className="w-[50px]" src={logo} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden menu-toggle"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem isActive={location.pathname === '/'}>
            <Link
              to="/"
              className={`font-bold text-white  ${location.pathname === '/' ? ' rounded-md bg-[#D6CC99] p-1 text-[#001524]' : ''}`}
            >
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/formulario'}>
            <Link
              to="/formulario"
              className={`font-bold text-white  ${location.pathname === '/formulario' ? ' rounded-md bg-[#D6CC99] p-1 text-[#001524]' : ''}`}
            >
              Coperar
            </Link>
          </NavbarItem>
          <NavbarItem  isActive={location.pathname === '/donaciones'}>
            <Link
              to="/donaciones"
              className={` font-bold text-white  ${location.pathname === '/donaciones' ? ' rounded-md bg-[#D6CC99] p-1 text-[#001524]' : ''}`}
            >
              Donaciones
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="w-full flex justify-center font-bold" to='/'>
              Inicio
            </Link>
            <Link className="w-full flex justify-center font-bold" to='/donaciones'>
              Donaciones
            </Link>
            <Link className="w-full flex justify-center font-bold" to='/formulario'>
              Formulario
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavBar;