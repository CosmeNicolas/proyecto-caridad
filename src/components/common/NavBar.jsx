import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { useState } from 'react';
import logo from '../../assets/img/logo-provisorio.png';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar className="text-dark bg-[#35443770]  font-oswald" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarBrand>
            <Link to='/'>
              <img className="w-[50px]" src={logo} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden  menu-toggle"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem isActive={location.pathname === '/'}>
            <Link
              to="/"
              className={`font-bold   ${location.pathname === '/' ? ' rounded-md bg-[#D6CC99] p-2 text-[#001524]' : 'text-[#D6CC99]'}`}
            >
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/formulario'}>
            <Link
              to="/formulario"
              className={`font-bold   ${location.pathname === '/formulario' ? ' rounded-md bg-[#D6CC99] p-2 text-[#001524]' : 'text-[#D6CC99]'}`}
            >
              Cooperar
            </Link>
          </NavbarItem>
          <NavbarItem  isActive={location.pathname === '/donaciones'}>
            <Link
              to="/donaciones"
              className={` font-bold   ${location.pathname === '/donaciones' ? ' rounded-md bg-[#D6CC99] p-2 text-[#001524]' : ' text-[#D6CC99]'}`}
            >
              Donaciones
            </Link>
          </NavbarItem>
        </NavbarContent>

      <NavbarMenu className="sm:hidden mx-auto  backdrop-filter backdrop-blur-md bg-opacity-70 rounded-2xl p-5 bg-[#8b89892a]  shadow-lg  overflow-y-auto flex flex-col justify-center" >
{/*       <NavbarBrand className="flex flex-col justify-center"> */}
            <Link to='/'>
              <img className="mx-auto" src={logo} alt="logo" />
              <p className= "text-center text-[#473B23] font-bold text-lg">#ReciclaDesdeCasa</p>
            </Link>
    {/*       </NavbarBrand> text-[#027039c9]  */}
          <NavbarMenuItem>
            <Button variant="bordered" as={Link} className="w-full flex justify-center font-bold my-1 bg-verde-militar border-black text-white" to='/'>
              Inicio
            </Button>
            <Button variant="bordered" as={Link} className="w-full flex justify-center font-bold bg-verde-militar border-black text-white my-1" to='/donaciones'>
              Donaciones
            </Button>
            <Button variant="bordered" as={Link} className="w-full flex justify-center font-bold bg-verde-militar border-black text-white my-1" to='/formulario'>
              Formulario
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavBar;