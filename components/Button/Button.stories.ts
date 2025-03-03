import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Design System/Molecules/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
    variant: "secondary",
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    className: "theme-violet",
  },
};

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    className: "theme-violet",
    variant: "secondary",
  },
};
