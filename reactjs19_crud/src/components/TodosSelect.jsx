import { useEffect, useState } from "react";
import { getTodoList } from "../data/getTodoList.js";
import Select from "react-select";

export default function TodosSelect({ name, value, onChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!value) {
      const fetchTodos = async () => {
        const Todos = await getTodoList();
        if (Todos.length > 0) {
          const opts = Todos.map((todo) => ({
            value: todo.id,
            label: todo.todo,
          }));
          setOptions(opts);
        }
      };
      fetchTodos();
    }
  }, [value]);

  return (
    <Select
      name={name}
      placeholder={"Select a your favourite todo"}
      options={options}
      isSearchable={true}
      value={options.find((x) => x.value === value) || null}
      onChange={(selectedValue) =>
        onChange({ target: { name, value: selectedValue?.value || "" } })
      }
      styles={{
        control: (base, todo) => ({
          ...base,
          borderRadius: "0.75rem", // rounded-xl
          padding: "2px",
          minHeight: "42px",
          borderColor: todo.isFocused
            ? "#3b82f6" // blue-500
            : "#d1d5db", // gray-300
          boxShadow: todo.isFocused
            ? "0 0 0 2px rgba(59, 130, 246, 0.4)" // ring-2 ring-blue-500/40
            : "none",
          "&:hover": {
            borderColor: todo.isFocused ? "#3b82f6" : "#9ca3af", // gray-400
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
