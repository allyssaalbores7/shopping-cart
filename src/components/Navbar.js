/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Badge, Button, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function Navbar({ items }) {
  // console.log(items);
  // const menu = (
  //   <Menu className="mx-12">
  //     {items.map((item) => (
  //       <Menu.Item>{item.display_name}</Menu.Item>
  //     ))}

  //     <Button type="primary" block>
  //       Checkout
  //     </Button>
  //   </Menu>
  // );

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-10 w-auto"
                src="https://i.imgur.com/jLXVuor.png"
                alt="Tinda-han"
              />
              <img
                className="hidden lg:block h-10 w-auto"
                src="https://i.imgur.com/DOKvX6r.png"
                alt="Tinda-han"
              />
            </div>
            <div className="md:flex items-center justify-center hidden sm:block sm:ml-8">
              <Search
                placeholder="What are you looking for?"
                allowClear
                style={{ width: 350 }}
              />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-10">
              <Badge count={items.length}>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  size="regular"
                >
                  Cart
                </Button>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
