import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import Papa from "papaparse";
import firebase from "firebase/compat/app";
import { db } from "../firebase-config";
import "firebase/compat/firestore";
import BaseButton from "./Button/BaseButton";

import productsCSV from "../products.csv";

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

  const onProductAdd = (product) => {
    addToCart(product);
    db.collection("items").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      item: product,
      key: product.id,
    });
    message.success("Added to cart");
  };

  return (
    <div id="products" className="relative bg-white overflow-hidden pb-24">
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
                  onProductAdd(record);
                }}
              />
            )}
          />
        </Table>
      </div>
    </div>
  );
}
