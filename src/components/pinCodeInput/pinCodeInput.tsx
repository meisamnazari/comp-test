import React, { FC } from "react";
import { PinCodeInputProps } from "./types";
import PinInput from "react-pin-input";

const PinCodeInput: FC<PinCodeInputProps> = ({
  onComplete,
  onChange,
  length,
  disabled = false,
}) => {
  return (
    <PinInput
      length={length}
      initialValue=""
      onChange={onChange}
      type="numeric"
      inputMode="number"
      style={{ padding: "5px" }}
      inputStyle={{
        borderColor: "#F5F5F5",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        boxSizing: "border-box",
        width: 48,
        height: 48,
        fontSize: 18,
      }}
      inputFocusStyle={{ borderColor: "#F5F5F5" }}
      onComplete={onComplete}
      autoSelect={true}
      regexCriteria={/^[0-9]*$/}
      disabled={disabled}
    />
  );
};

export default PinCodeInput;
