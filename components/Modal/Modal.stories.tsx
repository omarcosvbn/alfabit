import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal, { type ModalProps } from "./Modal";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const ModalStoryInfo = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>
          Today, every company I talk to wants to implement a design system from
          scratch. Unfortunately, the details of a design system are not
          explored, so often they are not used to the maximum to create a useful
          user experience.
        </Typography>
        <Typography>
          New designers can take a look at any of the design patterns listed
          below to learn best practices and make informed design decisions on
          their projects.
        </Typography>
        <div className=" flex flex-col gap-3">
          <Button>Primary Button</Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
        </div>
      </Modal>
    </>
  );
};

const ModalStoryChoice = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>Your changes will be lost</Typography>
        <div className=" flex flex-col gap-3">
          <Button>Save changes</Button>
          <Button variant="secondary">Don`t save</Button>
        </div>
      </Modal>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  title: "Design System/Molecules/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalInfo: Story = {
  args: {
    isOpen: false,
    title: "Modal Info",
  },
  render: (args: ModalProps) => {
    return <ModalStoryInfo {...args} />;
  },
};

export const ModalChoice: Story = {
  args: {
    isOpen: false,
    title: "Do you want to save your changes?",
  },
  render: (args: ModalProps) => {
    return <ModalStoryChoice {...args} />;
  },
};