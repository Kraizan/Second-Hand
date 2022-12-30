import React from "react";

function FormInput(props) {
  return (
    <div className="align-items-start w-100 my-2">
      <label htmlFor={props.labelFor}>{props.label}</label>
      <input
        className="form-control my-2"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default FormInput;
