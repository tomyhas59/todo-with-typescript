import React, { useState } from "react";

import "./App.css";
import Store from "./components/Store";
import { Address, ChineseFood } from "./modelType/data";
import BestMenu from "./components/BestMenu";

const data: ChineseFood = {
  name: "북경반점",
  category: "중식",
  address: {
    city: "서울",
    detail: "관악구 OO동 OO번지",
    zipCode: 234234,
  },
  menu: [
    { name: "짜장면", price: 5000 },
    { name: "짬뽕", price: 6000 },
    { name: "탕수육", price: 15000 },
  ],
};

const App: React.FC = () => {
  const [myStore, setMyStore] = useState<ChineseFood>(data);
  const changeAddress = (address: Address) => {
    setMyStore({ ...myStore, address: address });
  };
  return (
    <div className="App">
      <Store data={myStore} changeAddress={changeAddress} />
      <BestMenu name="양장피" price={20000} />
    </div>
  );
};

export default App;
