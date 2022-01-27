/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { db } from "../firebase-config";

const { Search } = Input;

export default function Navbar() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const getItems = () => {
    db.collection("items")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data().item,
          }))
        );
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
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
                disabled
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
                  onClick={() => {
                    navigate("/cart");
                  }}
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
