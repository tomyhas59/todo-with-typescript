import React from "react";
import { AllData } from "../modelType/allList";

interface OwnProps {
  allData: AllData[];
  setAllData: React.Dispatch<React.SetStateAction<AllData[]>>;
}

const AllList: React.FC<OwnProps> = ({ allData, setAllData }) => {
  const onCheckboxChange = (id: Number) => {
    const index = allData.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedAllData = [...allData];
      updatedAllData[index].done = !updatedAllData[index].done;
      setAllData(updatedAllData);
    }
  };
  const onDeleteTodo = (id: Number) => {
    const updatedAllData = allData.filter((v) => v.id !== id);
    setAllData(updatedAllData);
  };

  return (
    <div>
      {allData.map((item) => (
        <div
          key={item.id.toString()}
          style={item.done ? { textDecoration: "line-through" } : {}}
        >
          {item.id.toString()}:{item.data}
          <input
            type="checkbox"
            checked={!!item.done}
            onChange={() => onCheckboxChange(item.id)}
          />
          <button onClick={() => onDeleteTodo(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default AllList;
