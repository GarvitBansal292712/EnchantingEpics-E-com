import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Bookstore", to: "/store", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact", to: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#FFFDD0]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#734F96] hover:text-[#309aac7a] ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMiniBars3BottomLeft
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* E-COM LOGO */}
                <div className="flex flex-shrink-0 items-center">
                  <span
                    className="text-xl font-bold text-black"
                    
                  >
                    E
                  </span>
                  <span className="text-xl font-semibold text-blue-800">
                    nchanting
                  </span>
                  <span
                    className="text-xl font-bold text-black"
                    
                  >
                    E
                  </span>
                  <span className="text-xl font-semibold text-blue-800">
                    pics
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "text-[#734F96] text-lg "
                            : "text-[#734F96] text-lg hover:text-[#309aac7a]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* SHOPPING CART ICON */}
                <NavLink
                  to="/cart"
                  className="relative rounded-full bg-[#ffffff00] p-1 text-[#734F96] text-lg hover:text-[#301d43]  focus:text-[#309aac7a]"
                >
                  <FaCartShopping className="h-6 w-6" aria-hidden="true" />
                  {/* This is going to be dynamically updated */}

                  <h1 className="absolute top-[-10px] left-3  text-black font-bold">
                    {/*                   {cart.reduce((total, item) => total + item.quantity, 0)}
                     */}{" "}
                  </h1>
                </NavLink>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {/* MENU BUTTON NOT USEFUL RIGHT NOW SO COMMENTED IT OUT */}
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items> */}
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "hover:text-[#734F96] text-[#734F96] "
                      : "text-[#734F96]  hover:text-[#734F96]  text-center text-[25px]",
                    "block  rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
