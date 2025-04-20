import React from "react";
import { Button } from "../components/ui/Button";
import { TextField } from "../components/ui/InputTextField";
import { TextAreaField } from "../components/ui/InputTextAreaField";
const UI = () => {
  // const nameRef = React.useRef(null);
  const cahtBotRef = React.useRef(null);
  return (
    <>
      {/* <TextField
        valueRef={nameRef}
        defaultValue={"Nandan"}
        name={"Name"}
        label={"Full Name"}
        placeholder={"Ex: John Deo"}
      /> */}
      {/* <Button
        defaultLabel={"Submit"}
        loadingLabel={"Loading..."}
        clickEvent={() => console.log("Button Clicked")}
        className={"primary"}
      /> */}

      <TextAreaField
        valueRef={cahtBotRef}
        defaultValue={"Nandan"}
        name={"Chart Area"}
        placeholder={"Ex: Ask any thing.."}
      />
    </>
  );
};

export default UI;
