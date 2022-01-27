import React, { useEffect, useState } from "react";
import { Row, Col, List, message } from "antd";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import Navbar from "../components/Navbar";
import BaseButton from "../components/Button/BaseButton";

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);
  const [firstLoad, setFirstLoad] = useState(false);

  const getItems = () => {
    db.collection("items")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data().item,
            key: doc.data().key,
          }))
        );
        setFirstLoad(true);
      });
  };

  const totalSum = () =>
    setSum(
      items
        .reduce((prev, cur) => prev + parseFloat(cur.item.price), 0)
        .toFixed(2)
    );

  const onProductRemove = (id, price) => {
    setSum((sum - price).toFixed(2));
    db.collection("items").doc(id).delete();
    message.success("Removed from cart");
  };

  useEffect(() => {
    getItems();
    totalSum();
  }, [firstLoad]);

  return (
    <>
      <Navbar items={items} />
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 pb-12 overflow-hidden">
        <p className="mt-8 text-2xl font-bold text-primary_text lg:mx-auto">
          Your Cart
        </p>
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              actions={[
                <BaseButton
                  title="Remove"
                  type="default"
                  size="normal"
                  onClick={() => {
                    onProductRemove(item.id, item.item.price);
                  }}
                />,
              ]}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={16}>
                  <div className="font-bold">{item.item.display_name}</div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div className="text-secondary_text">
                    PHP {item.item.price}
                  </div>
                </Col>
              </Row>
            </List.Item>
          )}
        />
        <hr />
        <div className="flex justify-between items-center font-bold text-2xl mt-8">
          <p className="font-bold text-xl">Total</p>
          <p className="text-secondary_accent">PHP {sum}</p>
        </div>
        <div className="checkout flex justify-center items-center mt-14 gap-6">
          <BaseButton
            title="Back to Home"
            type="default"
            size="large"
            onClick={() => {
              navigate("/");
            }}
          />
          <BaseButton title="Proceed to Checkout" type="primary" size="large" />
        </div>
      </div>
    </>
  );
}
