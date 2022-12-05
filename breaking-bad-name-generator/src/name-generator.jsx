import { useState } from "react";
import { IterateMain } from "./elements";

export const NameGenerator = () => {
  const [firstPart, setFirst] = useState("");
  const [secondPart, setSecond] = useState("");
  const [thirdPart, setThird] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const target = event.target[0].value;
    const obj = IterateMain(target);
    const store = obj[0];
    const ind = obj[1];
    const letters = obj[2];
    const element = store === "J" ? "No Element Found" : store;
    if (ind === 0) {
      setSecond(target.substring(0, letters));
      setThird(target.substring(letters));
    } else {
      setFirst(target.substring(0, ind));
      setSecond(target.substring(ind, store.length));
      setFirst(target.substring(0, ind));
    }
    console.log("ITERATE", store, ind);
    // setState(element);//
  }

  return (
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name</label>
        <br />
        <input type="text" name="name" />
        <br />
        <input type="submit" />
        <br />
        {/* {IterateDouble(state)} */}
        {/* {state} */}
        {firstPart}
        <span style={{ color: "green" }}>{secondPart}</span>
        {thirdPart}
      </form>
    </>
  );
};

export default NameGenerator;
