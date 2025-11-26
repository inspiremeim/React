import Select from "react-select";
import { userTypes } from "../data/usertypes";

export default function UserTypeSelect({ name, value, onChange, error }) {
  const options = userTypes.map((usertype) => ({
    value: usertype.value,
    label: usertype.label,
  }));

  return (
    <Select
      name={name}
      placeholder="Select user type"
      options={options}
      isSearchable={true}
      value={options.find((x) => x.value === value) || null}
      onChange={(selectedValue) =>
        onChange({ target: { name, value: selectedValue?.value || "" } })
      }
      styles={{
        control: (base, state) => ({
          ...base,
          borderRadius: "0.75rem", // rounded-xl
          padding: "2px",
          minHeight: "42px",
          borderColor: error
            ? "#ef4444" // red-500
            : state.isFocused
            ? "#3b82f6" // blue-500
            : "#d1d5db", // gray-300
          boxShadow: state.isFocused
            ? "0 0 0 2px rgba(59, 130, 246, 0.4)" // ring-2 ring-blue-500/40
            : "none",
          "&:hover": {
            borderColor: state.isFocused ? "#3b82f6" : "#9ca3af", // gray-400
          },
        }),
        menu: (base) => ({
          ...base,
          borderRadius: "0.75rem",
          overflow: "hidden",
          zIndex: 50,
        }),
        menuList: (base) => ({
          ...base,
          paddingTop: 0, // removes extra space above search bar
          paddingBottom: 0,
        }),
        input: (base) => ({
          ...base,
          margin: 0,
          padding: 0,
        }),
        option: (base, state) => ({
          ...base,
          padding: "8px 12px",
          backgroundColor: state.isSelected
            ? "#dbeafe" // blue-100
            : state.isFocused
            ? "#f3f4f6" // gray-100
            : "white",
          color: "#111827",
          cursor: "pointer",
        }),
      }}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
}
