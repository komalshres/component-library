import React from "react";
import { Select, SelectOption } from "../../components/Select";

const options = [
  { label: "Apple", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Strawberry", value: 3 },
  { label: "Orange", value: 4 },
  { label: "Grape", value: 5 },
];

const SelectPage = () => {
  const [value1, setValue1] = React.useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = React.useState<SelectOption | undefined>(
    options[0]
  );

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </>
  );
};

export default SelectPage;
