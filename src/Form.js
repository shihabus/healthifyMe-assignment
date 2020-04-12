import React from "react";

function Form(props) {
  return (
    <form
      aria-label="form"
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(e);
      }}
    >
      {props.children}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
