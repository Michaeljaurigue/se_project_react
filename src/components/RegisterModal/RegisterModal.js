import { useEffect, useContext } from "react";
import { ValidationContext } from "../../contexts/ValidationContext";
import { useFormAndValidation } from "../../utils/useFormAndValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

function RegisterModal({ isLoading }) {
  const { setDisableButton, handleSignupSubmit } =
    useContext(ValidationContext);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleSignupSubmit(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    setDisableButton(!isValid);
  }, [values, isValid, setDisableButton]);

  return (
    <ModalWithForm
      title="Sign Up"
      name="signup"
      buttonText={isLoading ? "Saving..." : "Sign Up"}
      handleSubmit={handleSubmit}
      alternateButton={{ value: true, text: "or Log In", path: "signin" }}
    >
      <label className="modal__label">Email</label>
      <input
        className="modal__input modal__input_type_text"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        minLength="1"
        maxLength="30"
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className="modal__input-error" id="email-error">
        {errors.email}
      </span>

      <label className="modal__label">Password</label>
      <input
        className="modal__input modal__input_type_text"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        minLength="9"
        maxLength="30"
        value={values.password || ""}
        onChange={handleChange}
      />
      <span className="modal__input-error" id="password-error">
        {errors.password}
      </span>

      <label className="modal__label">Name</label>
      <input
        className="modal__input modal__input_type_text"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
        minLength="2"
        maxLength="30"
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className="modal__input-error" id="name-error">
        {errors.name}
      </span>

      <label className="modal__label">Avatar URL</label>
      <input
        className="modal__input modal__input_type_text"
        type="url"
        name="avatar"
        id="avatar"
        placeholder="Avatar URL"
        required
        value={values.avatar || ""}
        onChange={handleChange}
      />
      <span className="modal__error avatar__error" id="avatar-error">
        {errors.avatar}
      </span>
    </ModalWithForm>
  );
}

export default RegisterModal;
