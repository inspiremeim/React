import SanitizeInput from "./SanitizeInput";

const SanitizeForm = (formData) => {
  const sanitizedData = {};

  Object.keys(formData).forEach((key) => {
    const value = formData[key];

    sanitizedData[key] =
      typeof value === "string" ? SanitizeInput(value) : value;
  });

  return sanitizedData;
};

export default SanitizeForm;
