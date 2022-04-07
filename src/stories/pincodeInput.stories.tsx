import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PinCodeInput } from "../index";

export default {
  title: "Components/PinCodeInput",
  component: PinCodeInput,
  argTypes: {
    length: {},
  },
} as ComponentMeta<typeof PinCodeInput>;

const PinCodeInputTemplate: ComponentStory<typeof PinCodeInput> = (args) => (
  <PinCodeInput {...args} />
);

export const SimplePinCodeINput = PinCodeInputTemplate.bind({});
SimplePinCodeINput.args = {
  length: 6,
};
