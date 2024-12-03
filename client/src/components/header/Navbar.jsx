import "../../../src/style.css";
import { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'HOME', href: '/home', current: false },
  { name: 'MOVIES', href: '/movies', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const location = useLocation(); // Hook to get the current route
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Update navigation items to highlight based on the current route
  navigation.forEach(item => {
    item.current = location.pathname === item.href;
  });

  return (
    <Disclosure as="nav" className="absolute top-0 z-10 w-full bg-transparent backdrop-blur-xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Logo is removed here */}
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-purple-500 text-white' : 'text-gray-200 hover:bg-purple-400 hover:text-white',
                          'rounded-md px-4 py-2 text-lg font-semibold transition-all duration-300 transform hover:scale-105'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <form action={`/search/${searchValue}`} className="flex items-center max-w-lg mx-14">
                  <label htmlFor="voice-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <i className="ri-search-2-line text-gray-400 text-xl"></i>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white font-semibold focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                      placeholder="Search..."
                      required
                      value={searchValue}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>

                {/* Login Icon */}
                <a
                  href="/login"
                  className="relative group mr-2 rounded-md border transition-all duration-300 hover:bg-gray-800"
                >
                  <img src="/public/log.png" className="w-10 h-10 rounded-full" />
                  <div className="absolute -left-0 -bottom-7 bg-white bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Login
                  </div>
                </a>

                {/* Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-green-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <i className="ri-user-3-fill h-8 w-8 rounded-full text-lg text-white transition-all duration-300 transform hover:scale-105"></i>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'backdrop-blur-3xl' : '', 'block px-4 py-2 text-xs font-bold text-orange-500')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'backdrop-blur-3xl' : '', 'flex items-center px-4 py-2 text-xs font-bold text-orange-500')}
                          >
                            LogIn
                            <img src="/public/log.png" className="w-6 h-6 ml-1" />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'backdrop-blur-3xl' : '', 'block px-4 py-2 text-xs font-bold text-orange-500')}
                          >
                            Log Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}