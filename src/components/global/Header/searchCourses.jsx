"use client";

import * as React from "react";

import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/cmdk";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

const courses = [
  {
    value: "File and folder structure",
    path: "/courses/sfsd/learn",
    label: "File and folder structure",
  },

  {
    value: "Databases",
    path: "/courses/bdd/learn",
    label: "Databases",
  },
  {
    value: "Algebra 3",
    path: "/courses/algebra/learn",
    label: "Algebra 3",
  },

  {
    value: "Graph theory ",
    // path: "/courses/thg/learn",
    label: "Graph theory",
  },
  {
    value: "Data architecture ",
    label: "Data architecture",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] md:w-[200px] justify-between px-2"
        >
          {value
            ? courses.find((course) => course.value === value)?.label
            : "Select course..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search course..." className="h-9" />
          <CommandList>
            <CommandEmpty>No courses found.</CommandEmpty>
            <CommandGroup>
              {courses.map((course) => (
                <CommandItem
                  key={course.value}
                  value={course.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    router.replace(course.path ?? "/coming-soon");
                  }}
                >
                  {course.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
