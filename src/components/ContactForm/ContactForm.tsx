import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { store } from "../../App";
import toast, { Toaster } from "react-hot-toast";
import playAudio from "../../utils/helpers/playAudio";

export default function ContactForm() {
  const form = useRef<any>(null);
  const [state] = useContext(store); // Removed unused dispatch
  const input1 = useRef<HTMLInputElement | null>(null);
  const input2 = useRef<HTMLInputElement | null>(null);
  const input3 = useRef<HTMLTextAreaElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    toast.success(
      state.language === "english" ? "Nachricht abgeschickt!" : "Message sent!",
      {
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
      }
    );

    emailjs
      .sendForm(
        "service_hwlatcp",
        "template_x91gkla",
        form.current,
        "Mrn8YWI9fUIH8c3vx"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );

    // Clear fields after submitting message
    let fields = document.getElementsByClassName("field");
    let field1 = fields[0] as HTMLInputElement,
      field2 = fields[1] as HTMLInputElement,
      field3 = fields[2] as HTMLTextAreaElement;
    field1.value = "";
    field2.value = "";
    field3.value = "";
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`contact-form-container ${
        state.darkmode ? "dark-card" : "light-card"
      } ${state.darkmode ? "dark-shadow" : "light-shadow"}`}>
      <div className="input-container">
        <input
          ref={input1}
          name="from_name"
          className={`field data ${
            state.darkmode ? "dark-field" : "light-field"
          }`}
          type="text"
          placeholder={state.language === "english" ? "Ihr Name" : "Your name"}
          required
        />
        <input
          ref={input2}
          className={`field data ${
            state.darkmode ? "dark-field" : "light-field"
          }`}
          type="email"
          name="from_email"
          placeholder={
            state.language === "english"
              ? "Ihre E-Mail-Adresse"
              : "Your email address"
          }
          required
        />
      </div>
      <textarea
        ref={input3}
        name="message"
        placeholder={
          state.language === "english"
            ? "Ihre Nachricht an mich"
            : "Your message for us"
        }
        className={`field ${state.darkmode ? "dark-field" : "light-field"}`}
        required
      />
      <input
        type="submit"
        value={state.language === "english" ? "Absenden" : "Submit"}
        className="submit"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      />
    </form>
  );
}
