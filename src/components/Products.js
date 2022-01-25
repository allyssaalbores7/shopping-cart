import React from "react";
import { Table } from "antd";

import BaseButton from "./Button/BaseButton";

const { Column } = Table;

const data = [
  {
    key: "1",
    productName: "Coke Regular Bottle",
    brand: "Coca Cola",
    category: "Softdrinks",
    price: 54.17,
  },
  {
    key: "2",
    productName: "Coke Regular Bottle",
    brand: "Coca Cola",
    category: "Softdrinks",
    price: 54.17,
  },
  {
    key: "3",
    productName: "Coke Regular Bottle",
    brand: "Coca Cola",
    category: "Softdrinks",
    price: 54.17,
  },
  {
    key: "4",
    productName: "Coke Regular Bottle",
    brand: "Coca Cola",
    category: "Softdrinks",
    price: 54.17,
  },
  {
    key: "5",
    productName: "Coke Regular Bottle",
    brand: "Coca Cola",
    category: "Softdrinks",
    price: 54.17,
  },
  {
    key: "6",
    productName: "Coke Regular Bottle",
    brand: "Coca Cola",
    category: "Softdrinks",
    price: 54.17,
  },
];

export default function Products() {
  return (
    <div className="relative bg-white overflow-hidden pb-24">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <p className="mt-8 text-2xl font-bold text-primary_text lg:mx-auto">
          Browse our categories
        </p>
        <Table dataSource={data}>
          <Column
            title="Product Name"
            dataIndex="productName"
            key="productName"
          />
          <Column title="Brand" dataIndex="brand" key="brand" />
          <Column title="Category" dataIndex="category" key="category" />
          <Column title="Price (PHP)" dataIndex="price" key="price" />
          <Column
            title="Action"
            key="action"
            render={() => (
              <BaseButton title="Add to cart" type="default" size="normal" />
            )}
          />
        </Table>
      </div>
    </div>
  );
}
