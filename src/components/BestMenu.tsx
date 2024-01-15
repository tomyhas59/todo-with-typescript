import React from "react";
import { Menu } from "../modelType/data";

interface OwnProps extends Menu {}
//type OwnProps = Menu & {};

const BestMenu: React.FC<OwnProps> = ({ name, price }) => {
  return (
    <div>
      BestMenus
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default BestMenu;
