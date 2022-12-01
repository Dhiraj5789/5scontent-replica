import { useState } from "react";
import { IterateMain } from "./elements";

export const NameGenerator = () => {
  const [state, setState] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const element = IterateMain(event.target[0].value) || "no element found";
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
