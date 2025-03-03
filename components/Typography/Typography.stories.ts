import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Design System/Atoms/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "xl", "title1", "title2", "title3"],
    },
    children: { control: "text" },
    element: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Text",
    variant: "secondary",
    size: "md",
  },
};

export const TextHeadingH1: Story = {
  args: {
    children: "Text",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
};

export const TextHeadingH2: Story = {
  args: {
    children: "Text",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
};

export const TextHeadingH3: Story = {
  args: {
    children: "Text",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
};

export const TextParagraph: Story = {
  args: {
    children: "Text",
    element: "p",
    size: "md",
    className: "text-primary",
  },
};
