import { useEffect, useRef, useState } from "react";
import { countryLookupByIP } from "../data/countryLookupByIP.js";
import SanitizeForm from "../utils/SanitizeInput.jsx";
import toast from "react-hot-toast";
import UserTypeSelect from "./UserTypeSelect.jsx";
import CountrySelect from "./CountrySelect.jsx";
import StateSelect from "./StateSelect.jsx";
import CitySelect from "./CitySelect.jsx";
import PhoneInput from "./PhoneInput.jsx";
import TodosSelect from "./TodosSelect.jsx";

export default function SidebarForm({ open, setOpen, formData, setFormData }) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData.country) {
      const fetchCountryCode = async () => {
        const countryCode = await countryLookupByIP();
        if (countryCode) {
          setFormData((prevData) => ({
            ...prevData,
            country: countryCode,
          }));
        }
      };
      fetchCountryCode();
    }
  }, [formData.country, setFormData]);

  const userTypeRef = useRef(null);
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const birthdateRef = useRef(null);
  const mobileNumberRef = useRef(null);

  const closeSidebar = () => {
    if (loading) return;

    setOpen(false);

    setFormData({
      userType: "",
      name: "",
      username: "",
      email: "",
      birthdate: "",
      gender: "",
      country: "",
      state: "",
      city: "",
      address: "",
      mobileNumber: "",
      todo: "",
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

    //User Type
    if (sanitizedData.userType <= 0) {
      formControlErrors.userType = "User Type is required.";
      if (!firstInvalidRef) firstInvalidRef = userTypeRef;
    }

    // NAME
    if (!sanitizedData.name.trim()) {
      formControlErrors.name = "Name is required";
      if (!firstInvalidRef) firstInvalidRef = nameRef;
    } else if (sanitizedData.name.length > 50) {
      formControlErrors.name = "Name can be up to 50 characters";
      if (!firstInvalidRef) firstInvalidRef = nameRef;
    }

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

    // MOBILE NUMBER
    if (!sanitizedData.mobileNumber.trim()) {
      formControlErrors.mobileNumber = "Mobile Number is required.";
      if (!firstInvalidRef) firstInvalidRef = mobileNumberRef;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      await new Promise((p) => setTimeout(p, 10000)); // Simulate async operation

      console.log("Form submitted:", formData);
      toast.success("User details saved successfully!");
      closeSidebar();
    }

    setLoading(false);
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 opacity-100 transition-opacity duration-300"
          onClick={() => {
            if (!loading) closeSidebar();
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-[900px] bg-white shadow-xl p-6 rounded-l-2xl 
    transition-transform duration-300 overflow-y-auto overflow-x-hidden
    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
    ${open ? "translate-x-0" : "translate-x-full"}
    opacity-100
  `}
      >
        <form
          onSubmit={handleSubmit}
          noValidate
          className={`${loading ? "pointer-events-none opacity-90" : ""}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Save User Details</h2>
            <button
              type="button"
              onClick={() => {
                if (!loading) closeSidebar();
              }}
              className={`text-gray-500 hover:text-gray-700 ${
                loading ? "pointer-events-none opacity-40" : ""
              }`}
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* { UserTypes} */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">User Type</span>
              <UserTypeSelect
                ref={userTypeRef}
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                error={errors.userType}
              />
              {errors.userType && (
                <span className="text-xs text-red-600">{errors.userType}</span>
              )}
            </label>

            {/* Name */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">Name</span>
              <input
                ref={nameRef}
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-600">{errors.name}</span>
              )}
            </label>

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
          </div>

          <div className="grid grid-cols-3 gap-4">
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
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Country */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">Country</span>
              <CountrySelect
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </label>

            {/* State */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">State</span>
              <StateSelect
                name="state"
                country={formData.country}
                value={formData.state}
                onChange={handleChange}
              />
            </label>

            {/* City */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">City</span>
              <CitySelect
                name="city"
                country={formData.country}
                state={formData.state}
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <span className="text-xs text-red-600">{errors.city}</span>
              )}
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Address */}
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

            {/* Mobile Number */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">Mobile Number</span>
              <PhoneInput
                name="mobileNumber"
                country={(formData.country || "IN").toLowerCase()}
                value={formData.mobileNumber}
                onChange={handleChange}
                error={errors.mobileNumber}
              />
              {errors.mobileNumber && (
                <span className="text-xs text-red-600">
                  {errors.mobileNumber}
                </span>
              )}
            </label>

            {/* Todos Select */}
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm font-medium">Todo List</span>
              <TodosSelect
                name="todo"
                value={formData.todo}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className={`relative flex items-center justify-center gap-2 px-6 py-2
              rounded-lg text-white font-medium shadow-sm transition-all
              ${
                loading
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                if (!loading) closeSidebar();
              }}
              className={`px-5 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition-all duration-200 shadow-sm hover:shadow-md ${
                loading ? "pointer-events-none opacity-40" : ""
              }`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
