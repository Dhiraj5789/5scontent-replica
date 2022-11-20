import { useState } from "react";

export const NameGenerator = () => {
  const [state, setState] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setState(event.target[0].value);
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
        {state}
      </form>
    </>
  );
};

export default NameGenerator;
