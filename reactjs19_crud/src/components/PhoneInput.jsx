import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function PhoneInput({ name, country, value, onChange, error }) {
  const inputRef = useRef(null);
  const itiRef = useRef(null);

  useEffect(() => {
    itiRef.current = intlTelInput(inputRef.current, {
      separateDialCode: true,
      initialCountry: "auto",
    });

    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  // When "selectedCountry" changes → update the phone input
  useEffect(() => {
    if (itiRef.current && country) {
      itiRef.current.setCountry(country.toLowerCase());
    }
  }, [country]);

  return (
    <input
      name={name}
      ref={inputRef}
      type="tel"
      value={value}
      onChange={(selectedValue) => {
        onChange({
          target: { name: name, value: selectedValue },
        });
      }}
      className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
        error
          ? "border-red-500 focus:ring-red-400"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />
  );
}
