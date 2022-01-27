import React, { useEffect, useState } from "react";
import { Row, Col, List, message } from "antd";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import Navbar from "../components/Navbar";
import BaseButton from "../components/Button/BaseButton";

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
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

  //   const groupItems = async (list, key) =>
  //     list.reduce((a, b) => {
  //       (a[b[key]] = a[b[key]] || []).push(b);
  //       return a;
  //     }, {});

  const onProductRemove = (id) => {
    db.collection("items").doc(id).delete();
    message.success("Removed from cart");
  };
  useEffect(() => {
    getItems();
  }, [firstLoad]);

  return (
    <>
      <Navbar items={items} />
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
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
                    onProductRemove(item.id);
                  }}
                />,
              ]}
            >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={4}>
                  <div className="text-tertiary_text">2 pcs</div>
                </Col>
                <Col className="gutter-row" span={12}>
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
