import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { store } from "../../../App";
import "./RegistrationForm.scss";
import setCursorLocation from "../../../utils/helpers/setCursorLocation";
import PaymentService from "../../../services/payment.service";
import { PAYMENT_AMOUNT } from "../../../constants/payment.constants";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await PaymentService.initiatePayment({
        ...formData,
        amount: PAYMENT_AMOUNT,
      });
      window.location.href = response.data.paymentUrl;
    } catch (error) {
      console.error("Error submitting form:", error);
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
