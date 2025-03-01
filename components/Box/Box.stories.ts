import { Meta, StoryObj } from "@storybook/react";

import Box, {type BoxProps} from './Box'

const meta: Meta<BoxProps> = {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    children: { type: "string" },
    type: { type: "string" },
    rounded: { type: "boolean" },
    border: { type: "boolean" },
    filledBackground: { type: "boolean" },
    className: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: {},
};

export const Default: StoryObj<BoxProps> = {
  args: {
    children: "Default box",
    filledBackground: true,
    type: "primary",
  },
};

export const BoxAlert: StoryObj<BoxProps> = {
  args: {
    children: "Alert!",
    filledBackground: true,
    rounded: true,
    type: "alert",
  },
};

export const BoxSuccess: StoryObj<BoxProps> = {
  args: {
    children: "Success!",
    filledBackground: true,
    rounded: true,
    type: "success",
  },
};

export const BoxError: StoryObj<BoxProps> = {
  args: {
    children: "Error.",
    filledBackground: true,
    rounded: true,
    type: "error",
  },
};