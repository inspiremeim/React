import Select from "react-select";
import { City } from "country-state-city";

export default function CitySelect({ name, country, state, value, onChange }) {
  const cities = country && state ? City.getCitiesOfState(country, state) : [];

  const options = cities.map((c) => ({
    value: c.name,
    label: c.name,
  }));

  return (
    <Select
      name={name}
      placeholder={country && state ? "Select a city" : "Select a state first"}
      isDisabled={!country || !state}
      options={options}
      isSearchable={true}
      value={options.find((x) => x.value === value) || null}
      onChange={(selectedValue) =>
        onChange({ target: { name, value: selectedValue?.value || "" } })
      }
      styles={{
        control: (base, city) => ({
          ...base,
          borderRadius: "0.75rem", // rounded-xl
          padding: "2px",
          minHeight: "42px",
          borderColor: city.isFocused
            ? "#3b82f6" // blue-500
            : "#d1d5db", // gray-300
          boxShadow: city.isFocused
            ? "0 0 0 2px rgba(59, 130, 246, 0.4)" // ring-2 ring-blue-500/40
            : "none",
          "&:hover": {
            borderColor: city.isFocused ? "#3b82f6" : "#9ca3af", // gray-400
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
