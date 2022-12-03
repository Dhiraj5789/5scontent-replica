import { useState } from "react";
import { IterateMain } from "./elements";

export const NameGenerator = () => {
  const [state, setState] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const obj = IterateMain(event.target[0].value);
    const store = obj[0];
    const ind = obj[1];
    console.log("ITERATE", store, ind);
    const element = store === "J" ? "no element found" : store;
    setState(element);
  }

  console.log(state);
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
        {state}
      </form>
    </>
  );
};

export default NameGenerator;
