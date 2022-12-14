import { Component, createSignal } from 'solid-js';
import { Routes, Route, A } from "@solidjs/router"
import { TbHome, TbCashBanknote, TbHelp, TbUser, TbMenu, TbX } from 'solid-icons/tb'
import logo from "./logo.svg"
import Home from './home';
import Recharge from './recharge';
import Profile from './profile';

const App: Component = () => {
  const [isMenuOpen, setMenuOpen] = createSignal(false)
  const tabs = [
    { name: "Home", icon: <TbHome size={30} class='inline' />, path: "/" },
    { name: "Recharge", icon: <TbCashBanknote size={30} class='inline' />, path: "/recharge" },
    { name: "Support", icon: <TbHelp size={30} class='inline' />, path: "/" },
    { name: "Profile", icon: <TbUser size={30} class='inline' />, path: "/profile" },
  ]
  return (
    <div class='h-screen w-full md:flex md:flex-grow'>
      <header class='p-4 md:h-full md:w-72  border border-gray-300'>
        <div class={`bg-white border  md:border-none border-gray-300 fixed md:static  top-0 left-0 z-10 w-full overflow-hidden transition-[height] duration-300 ${isMenuOpen() ? "h-full" : "h-25"}  md:h-full`} >
          <div class='md:flex md:flex-col justify-between items-center' >
            <div class='flex justify-between items-center px-10 py-4 ' >
              <img class='w-24 md:w-32' src={logo} alt="Skynet" />
              <div class='md:hidden'>
                {
                  isMenuOpen() ? (<TbX onClick={() => setMenuOpen(false)} size={35} />) : (<TbMenu onClick={() => setMenuOpen(true)} size={35} />)
                }
              </div>
            </div>

            <nav
              class={`pt-10 px-10 ${isMenuOpen() ? "block" : "hidden"} md:block`} >
              <ul>
                {
                  tabs.map(({ name, icon, path }) => (
                    <li class='flex gap-x-5 my-6' >
                      {icon}
                      <A onClick={() => setMenuOpen(false)} href={path} class='font-semibold text-lg' >{name}</A>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div class='pt-24 md:pt-4' >
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/recharge" component={Recharge} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
