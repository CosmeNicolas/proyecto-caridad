// ...imports iguales
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
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
            className="sm:hidden border-2 border-white menu-toggle w-10 h-10"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {[
            { path: "/", label: "Inicio" },
            { path: "/donaciones", label: "Donaciones" },
            { path: "/formulario", label: "Formulario Donación" },
            { path: "/ComoReciclar", label: "Cómo usar la app" },
            { path: "/compra", label: "Compra" },
            { path: "/vende", label: "Vende" },
            { path: "/recicla", label: "Recicla" }
          ].map(({ path, label }) => (
            <NavbarItem key={path} isActive={location.pathname === path}>
              <Link
                to={path}
                className={`font-bold ${location.pathname === path
                  ? 'rounded-md bg-[#D6CC99] p-2 text-[#001524]'
                  : 'text-[#D6CC99]'}`}
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu className="sm:hidden mx-auto backdrop-filter backdrop-blur-md bg-opacity-70 rounded-2xl p-5 bg-[#8b89892a] shadow-lg overflow-y-auto flex flex-col justify-center">
          <Link to='/'>
            <img className="mx-auto" src={logo} alt="logo" />
            <p className="text-center text-[#473B23] font-bold text-lg">#ReciclaDesdeCasa</p>
          </Link>
          {[
            { path: "/", label: "Inicio" },
            { path: "/donaciones", label: "Donaciones" },
            { path: "/formulario", label: "Formulario Donación" },
            { path: "/ComoReciclar", label: "Cómo usar la app" },
            { path: "/compra", label: "Compra" },
            { path: "/vende", label: "Vende" },
            { path: "/recicla", label: "Recicla" }
          ].map(({ path, label }) => (
            <Button
              key={path}
              variant="bordered"
              as={Link}
              className="w-full flex justify-center font-bold my-1 bg-verde-militar border-black text-white"
              to={path}
            >
              {label}
            </Button>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavBar;
