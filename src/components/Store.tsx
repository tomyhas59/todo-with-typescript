import React from "react";
import { Address, ChineseFood } from "../modelType/data";

interface OwnProps {
  data: ChineseFood;
  changeAddress(address: Address): void; //아무 타입 없을 때 void
}

const Store: React.FC<OwnProps> = ({ data, changeAddress }) => {
  return (
    <div>
      <div>{data.name}</div>
      {data.menu &&
        data.menu.map((menu, index) => (
          <div key={index}>
            <div>{menu.name}</div>
            <div>{menu.price}</div>
          </div>
        ))}
    </div>
  );
};

export default Store;
