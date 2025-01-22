import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { store } from "../../../App";
import "./RegistrationForm.scss";
import setCursorLocation from "../../../utils/helpers/setCursorLocation";
import PaymentService from "../../../services/payment.service";
import { PAYMENT_AMOUNT } from "../../../constants/payment.constants";
import toast from "react-hot-toast";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const courses = [
  "Web App Development",
  "Mobile App Development",
  "Graphics Designing",
];

const programsOfStudy = [
  "Computer Science",
  "Computer Engineering",
  "Electrical Engineering",
  "Information Technology",
  "Telecommunications Engineering",
  "Mathematics",
  "Physics",
  "Other",
];

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [state] = useContext(store);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    programOfStudy: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    // Validate full name
    if (formData.fullName.trim().length < 2) {
      toast.error("Please enter a valid full name", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });
      return false;
    }

    // Validate phone number (basic validation for numbers only)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });
      return false;
    }

    // Validate course selection
    if (!formData.course) {
      toast.error("Please select a course", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });
      return false;
    }

    // Validate program of study
    if (!formData.programOfStudy) {
      toast.error("Please select a program of study", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await PaymentService.initiatePayment({
        ...formData,
        amount: PAYMENT_AMOUNT,
      });

      // Show success toast before redirecting
      toast.success("Registration successful! Redirecting to payment...", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });

      // Short delay before redirect to show the success message
      setTimeout(() => {
        window.location.href = response.data.paymentUrl;
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-left",
        style: {
          border: state.darkmode
            ? "2px solid hsla(0,0%,51.4%,.16)"
            : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : "",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add handler to prevent click propagation on the form
  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="registration-overlay"
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={onClose}
      onMouseMove={(e) => setCursorLocation(e)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="registration-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseMove={(e) => setCursorLocation(e)}
          >
            <motion.div
              className={`registration-form ${
                state.darkmode ? "dark-card" : "light-card"
              }`}
              initial={{ scale: 0, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              onClick={handleFormClick}
              onMouseMove={(e) => setCursorLocation(e)}
            >
              <div className="form-header">
                <h1
                  className={state.darkmode ? "dark-heading" : "light-heading"}
                >
                  Registration Form
                </h1>
                <button className="close-button" onClick={onClose}>
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`field ${
                      state.darkmode ? "dark-field" : "light-field"
                    }`}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`field ${
                      state.darkmode ? "dark-field" : "light-field"
                    }`}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`field ${
                      state.darkmode ? "dark-field" : "light-field"
                    }`}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`field ${
                      state.darkmode ? "dark-field" : "light-field"
                    }`}
                    required
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="programOfStudy"
                    value={formData.programOfStudy}
                    onChange={handleChange}
                    className={`field ${
                      state.darkmode ? "dark-field" : "light-field"
                    }`}
                    required
                  >
                    <option value="">Select Program of Study</option>
                    {programsOfStudy.map((programOfStudy) => (
                      <option key={programOfStudy} value={programOfStudy}>
                        {programOfStudy}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Pay Now"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationForm;
