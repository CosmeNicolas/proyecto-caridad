import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure
} from "@heroui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo-provisorio.png";

const NavBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/donaciones", label: "Donaciones" },
    { path: "/formulario", label: "Formulario Donación" },
    { path: "/ComoReciclar", label: "Cómo usar la app" },
    { path: "/compra", label: "Compra" },
    { path: "/vende", label: "Vende" },
    { path: "/recicla", label: "Recicla" },
  ];

  return (
    <>
      <Navbar className="text-dark bg-[#35443770] font-oswald">
        <NavbarContent>
          <NavbarBrand>
            <Link to="/">
              <img className="w-[50px]" src={logo} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="sm:hidden border-2 border-white menu-toggle w-10 h-10"
            onClick={onOpen}
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLinks.map(({ path, label }) => (
            <NavbarItem key={path} isActive={location.pathname === path}>
              <Link
                to={path}
                className={`font-bold ${location.pathname === path
                  ? "rounded-md bg-[#D6CC99] p-2 text-[#001524]"
                  : "text-[#D6CC99]"}`}
              >
                {label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </Navbar>

      {/* Drawer lateral funcional */}
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 text-white bg-[#001524] py-4">
                <img className="w-12 mx-auto" src={logo} alt="logo" />
                <span className="text-center text-lg font-bold">#ReciclaDesdeCasa</span>
              </DrawerHeader>

              <DrawerBody className="bg-[#001524] text-white flex flex-col gap-2 px-4 pt-4">
                {navLinks.map(({ path, label }) => (
                  <Button
                    key={path}
                    as={Link}
                    to={path}
                    onPress={onClose}
                    fullWidth
                    className="bg-verde-militar font-bold text-white border border-black"
                  >
                    {label}
                  </Button>
                ))}
              </DrawerBody>

              <DrawerFooter className="bg-[#001524] justify-center pb-4 text-white/60">
                <small>© 2025 TucuManos</small>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
