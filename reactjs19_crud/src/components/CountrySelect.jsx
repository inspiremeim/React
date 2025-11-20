// import Select from 'react-select';
// import ReactCountryFlag from 'react-country-flag';
// import { useRef } from 'react';
import { countries } from "../data/countries";

export default function CountrySelect({
  name,
  className,
  reference,
  value,
  onChange,
}) {
  return (
    <select
      name={name}
      className={className}
      ref={reference}
      value={value}
      onChange={onChange}
    >
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}
