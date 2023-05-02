import {
  TbHome,
  TbCashBanknote,
  TbHelp,
  TbUser,
  TbMenu,
  TbX,
  TbLogout,
} from "solid-icons/tb";
import logo from "../logo.svg";
import { Component, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";

const tabs = [
  { name: "Home", icon: <TbHome size={30} class="inline" />, path: "/" },
  {
    name: "Recharge",
    icon: <TbCashBanknote size={30} class="inline" />,
    path: "/recharge",
  },
  {
    name: "Support",
    icon: <TbHelp size={30} class="inline" />,
    path: "/support",
  },
  {
    name: "Profile",
    icon: <TbUser size={30} class="inline" />,
    path: "/profile",
  },
];

const Header: Component = () => {
  const [isMenuOpen, setMenuOpen] = createSignal(false);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.setItem("token", "");
    navigate("/login");
  };
  return (
     (
      <header class="p-4 w-full md:h-full md:w-72 lg:w-96  border border-gray-300">
        <div
          class={`bg-white border  md:border-none border-gray-300 fixed md:static  top-0 left-0 z-10 w-full overflow-hidden transition-[height] duration-300 ${
            isMenuOpen() ? "h-full" : "h-25"
          }  md:h-full`}
        >
          <div class="md:flex md:flex-col justify-between items-center">
            <div class="flex justify-between items-center px-10 py-4 ">
              <img class="w-24 md:w-32" src={logo} alt="Skynet" />
              <div class="md:hidden">
                {isMenuOpen() ? (
                  <TbX onClick={() => setMenuOpen(false)} size={35} />
                ) : (
                  <TbMenu onClick={() => setMenuOpen(true)} size={35} />
                )}
              </div>
            </div>

            <nav
              class={`h-full pt-10 px-10 ${
                isMenuOpen() ? "block" : "hidden"
              } md:block`}
            >
              <ul>
                {tabs.map(({ name, icon, path }) => (
                  <li class="flex gap-x-5 my-6">
                    {icon}
                    <A
                      onClick={() => setMenuOpen(false)}
                      href={path}
                      class="font-semibold text-lg"
                    >
                      {name}
                    </A>
                  </li>
                ))}
                <li class="mt-12 space-x-5">
                  <TbLogout size={30} class="inline" />
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      logout();
                    }}
                    class="font-semibold text-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
