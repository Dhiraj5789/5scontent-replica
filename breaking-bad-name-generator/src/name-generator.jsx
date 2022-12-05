import { useState } from "react";
import { startCase } from "lodash";
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

    if (ind === undefined) {
      setFirst("Element ");
      setSecond("No");
      setThird("t found");
    }
    if (ind === 0) {
      setFirst("");
      setSecond(target.substring(0, letters));
      setThird(target.substring(letters));
    } else if (ind !== undefined) {
      setFirst(target.substring(0, ind));
      setSecond(target.substring(ind, ind + letters));
      setThird(target.substring(ind + letters));
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
        <h2 style={{ fontWeight: "300" }}>
          {firstPart}
          <span style={{ color: "green", fontWeight: "700" }}>
            {startCase(secondPart)}
          </span>
          {thirdPart}
        </h2>
      </form>
    </>
  );
};

export default NameGenerator;
