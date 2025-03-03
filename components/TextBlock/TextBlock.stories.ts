import type { Meta, StoryObj } from "@storybook/react";

import TextBlock, { TextBlockProps } from "./TextBlock";

const meta: Meta<typeof TextBlock> = {
  title: "Design System/Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
    className: {
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<TextBlockProps>;

export const Primary: Story = {
  args: {
    title: "Title",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
};