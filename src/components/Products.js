import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import Papa from "papaparse";

import productsCSV from "../products.csv";

import BaseButton from "./Button/BaseButton";

const { Column } = Table;

export default function Products({ addToCart }) {
  const [data, setData] = useState([]);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    Papa.parse(productsCSV, {
      header: true,
      download: true,
      complete: (results) => {
        setData(results);
        setFirstLoad(true);
      },
    });
  }, [firstLoad]);

  return (
    <div className="relative bg-white overflow-hidden pb-24">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <p className="mt-8 text-2xl font-bold text-primary_text lg:mx-auto">
          Browse our products
        </p>
        <Table dataSource={data.data}>
          <Column
            title="Product Name"
            dataIndex="display_name"
            key="display_name"
          />
          <Column title="Brand" dataIndex="brand" key="brand" />
          <Column title="Category" dataIndex="category" key="category" />
          <Column title="Price (PHP)" dataIndex="price" key="price" />
          <Column
            title="Action"
            key="action"
            render={(record) => (
              <BaseButton
                title="Add to cart"
                type="default"
                size="normal"
                onClick={() => {
                  addToCart(record);
                  message.success("Added to cart");
                }}
              />
            )}
          />
        </Table>
      </div>
    </div>
  );
}
