import { useRef, useState } from "react";
import SanitizeForm from "../utils/SanitizeInput.jsx";
import toast from "react-hot-toast";
import CountrySelect from "./CountrySelect.jsx";

export default function SidebarForm({ open, setOpen, formData, setFormData }) {
  const [errors, setErrors] = useState({});

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const countryCodeRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthdateRef = useRef(null);

  const closeSidebar = () => {
    setOpen(false);

    setFormData({
      username: "",
      email: "",
      mobileNumber: "",
      firstName: "",
      lastName: "",
      birthdate: "",
      gender: "",
      address: "",
      countryCode: "",
    });

    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const sanitizedData = SanitizeForm(formData);
    const formControlErrors = {};
    let firstInvalidRef = null;

    // USERNAME
    if (!sanitizedData.username.trim()) {
      formControlErrors.username = "Username is required";
      if (!firstInvalidRef) firstInvalidRef = usernameRef;
    } else if (sanitizedData.username.length < 3) {
      formControlErrors.username = "Username must be at least 3 characters";
      if (!firstInvalidRef) firstInvalidRef = usernameRef;
    } else if (sanitizedData.username.length > 100) {
      formControlErrors.username = "Username can be up to 100 characters";
      if (!firstInvalidRef) firstInvalidRef = usernameRef;
    }

    // EMAIL
    if (!sanitizedData.email.trim()) {
      formControlErrors.email = "Email is required.";
      if (!firstInvalidRef) firstInvalidRef = emailRef;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(sanitizedData.email)
    ) {
      formControlErrors.email = "Enter a valid email address.";
      if (!firstInvalidRef) firstInvalidRef = emailRef;
    }

    // MOBILE NUMBER
    if (!sanitizedData.mobileNumber.trim()) {
      formControlErrors.mobileNumber = "Mobile Number is required.";
      if (!firstInvalidRef) firstInvalidRef = mobileNumberRef;
    } else if (!/^[0-9]{10}$/.test(sanitizedData.mobileNumber)) {
      formControlErrors.mobileNumber = "Mobile Number must be 10 digits.";
      if (!firstInvalidRef) firstInvalidRef = mobileNumberRef;
    }

    // FIRST NAME
    if (!sanitizedData.firstName.trim()) {
      formControlErrors.firstName = "First Name is required";
      if (!firstInvalidRef) firstInvalidRef = firstNameRef;
    } else if (sanitizedData.firstName.length > 50) {
      formControlErrors.firstName = "First Name can be up to 50 characters";
      if (!firstInvalidRef) firstInvalidRef = firstNameRef;
    }

    // LAST NAME
    if (!sanitizedData.lastName.trim()) {
      formControlErrors.lastName = "Last Name is required";
      if (!firstInvalidRef) firstInvalidRef = lastNameRef;
    } else if (sanitizedData.lastName.length > 50) {
      formControlErrors.lastName = "Last Name can be up to 50 characters";
      if (!firstInvalidRef) firstInvalidRef = lastNameRef;
    }

    // BIRTHDATE
    if (sanitizedData.birthdate.trim() !== "") {
      const date = new Date(sanitizedData.birthdate);
      const today = new Date();
      const ageDiff = today.getFullYear() - date.getFullYear();
      const monthDiff = today.getMonth() - date.getMonth();
      const dayDiff = today.getDate() - date.getDate();

      if (isNaN(date.getTime())) {
        formControlErrors.birthdate = "Enter a valid birthdate.";
        if (!firstInvalidRef) firstInvalidRef = birthdateRef;
      } else if (date > today) {
        formControlErrors.birthdate = "Birthdate cannot be in the future.";
        if (!firstInvalidRef) firstInvalidRef = birthdateRef;
      } else if (
        ageDiff < 18 ||
        (ageDiff === 18 && monthDiff < 0) ||
        (ageDiff === 18 && monthDiff === 0 && dayDiff < 0)
      ) {
        formControlErrors.birthdate = "You must be at least 18 years old.";
        if (!firstInvalidRef) firstInvalidRef = birthdateRef;
      }
    }

    // COUNTRY
    if (sanitizedData.countryCode.trim() === "") {
      formControlErrors.countryCode = "Country is required.";
      if (!firstInvalidRef) firstInvalidRef = countryCodeRef;
    }

    setErrors(formControlErrors);

    if (Object.keys(formControlErrors).length > 0) {
      if (firstInvalidRef?.current) {
        firstInvalidRef.current.focus();
      }
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      toast.success("User details saved successfully!");
      closeSidebar();
    }
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 opacity-100 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl p-6 rounded-l-2xl transition-transform duration-300
    overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Save User Details</h2>
            <button
              onClick={closeSidebar}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Username */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Username</span>
            <input
              ref={usernameRef}
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.username
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.username && (
              <span className="text-xs text-red-600">{errors.username}</span>
            )}
          </label>

          {/* Email */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Email</span>
            <input
              ref={emailRef}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-600">{errors.email}</span>
            )}
          </label>

          {/* Mobile Number */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Mobile Number</span>
            <input
              ref={mobileNumberRef}
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.mobileNumber
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              minLength={10}
              maxLength={10}
            />
            {errors.mobileNumber && (
              <span className="text-xs text-red-600">
                {errors.mobileNumber}
              </span>
            )}
          </label>

          {/* First Name */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">First Name</span>
            <input
              ref={firstNameRef}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.firstName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.firstName && (
              <span className="text-xs text-red-600">{errors.firstName}</span>
            )}
          </label>

          {/* Last Name */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Last Name</span>
            <input
              ref={lastNameRef}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.lastName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.lastName && (
              <span className="text-xs text-red-600">{errors.lastName}</span>
            )}
          </label>

          {/* Birthdate */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Birthdate</span>
            <input
              ref={birthdateRef}
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.birthdate
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.birthdate && (
              <span className="text-xs text-red-600">{errors.birthdate}</span>
            )}
          </label>

          {/* Gender */}
          <div className="mb-4">
            <span className="block text-sm font-medium mb-2">Gender</span>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>Male</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Email */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Address</span>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.address
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.address && (
              <span className="text-xs text-red-600">{errors.address}</span>
            )}
          </label>

          {/* Country */}
          <label className="flex flex-col gap-2 mb-4">
            <span className="text-sm font-medium">Country</span>
            <CountrySelect
              reference={countryCodeRef}
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.countryCode
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.countryCode && (
              <span className="text-xs text-red-600">{errors.countryCode}</span>
            )}
          </label>

          <div className="mt-6 flex justify-center gap-3">
            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Save
            </button>

            <button
              onClick={closeSidebar}
              className="px-5 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
