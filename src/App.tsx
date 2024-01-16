import React, { useState, useRef } from "react";
import "./App.css";
import AllList from "./components/AllList";
import { AllData } from "./modelType/allList";

const initialAllData: AllData[] = [
  {
    id: 1,
    data: "타입스크립트 공부",
    done: false,
  },
];

const App: React.FC = () => {
  const [allData, setAllData] = useState<AllData[]>(initialAllData);
  const [todo, setTodo] = useState<string>("");
  const todoRef = useRef<HTMLInputElement | null>(null);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onAddTodo = () => {
    if (todo.trim() !== "") {
      const newTodo: AllData = {
        id: allData.length + 1,
        data: todo,
        done: false,
      };
      setAllData([...allData, newTodo]);
      setTodo("");
      todoRef.current?.focus();
    }
  };

  return (
    <div>
      <input
        placeholder="할 일을 적어주세요!"
        onChange={onChangeTodo}
        value={todo}
        ref={todoRef}
      />
      <button onClick={onAddTodo}>추가</button>
      <AllList allData={allData} setAllData={setAllData} />
    </div>
  );
};

export default App;
