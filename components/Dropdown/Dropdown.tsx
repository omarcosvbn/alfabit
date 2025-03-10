import React, { useState, Fragment } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { dropdownStyles } from "./Dropdown.style";

export type DropdownProps = {
  list: string[];
};

const Dropdown = ({ list = [] }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState(list[0]);
  const [query, setQuery] = useState("");

  const filteredItem =
    query === ""
      ? list
      : list.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedItem} onChange={(value: string) => setSelectedItem(value)}>
      <div className={dropdownStyles.container}>
        <div className={dropdownStyles.containerMenu}>
          <ComboboxInput
            className={dropdownStyles.input}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className={dropdownStyles.button}>
            <ChevronDownIcon
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions className={dropdownStyles.optionsContainer}>
            {filteredItem.length === 0 && query !== "" ? (
              <div className={dropdownStyles.noResult}>Nenhum selecionado.</div>
            ) : (
              filteredItem.map((item) => (
                <ComboboxOption
                  className={({ active }) =>
                    `${dropdownStyles.option} ${
                      active ? "bg-dark text-gray-primary" : "text-gray-900"
                    }`
                  }
                  key={item}
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-primary" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                    </>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Dropdown;
