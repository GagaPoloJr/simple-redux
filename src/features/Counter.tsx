import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { useState } from "react";
import {
  decreament,
  increment,
  incrementByAmount,
} from "../store/state/counter/counterSlice";
import "./Counter.module.css";
export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState(2);

  const handleIncrement = () => {
    dispatch(incrementByAmount(incrementAmount));
    setIncrementAmount(2);
  };
  return (
    <>
      <div className="wrapper">
        <button type="button" onClick={() => dispatch(decreament())}>
          Kurang gan
        </button>
        <div
          style={{
            width: "50px",
          }}
        >
          {count}
        </div>
        <button type="button" onClick={() => dispatch(increment())}>
          tambah gan
        </button>

        <button onClick={() => dispatch(handleIncrement)}>
          increment amount {count}
        </button>
      </div>
    </>
  );
}
