import React, { useState } from "react";
import axios from "axios";
import endpoint from "./constants/endpoint";
import Overlay from "./components/Overlay";
import Spinner from "./components/Spinner";
import Toast from "./components/Toast";

const LOADING = 0;
const SUCCESS = 1;
const FAILED = -1;

const fetchChars = setState => {
  setState(LOADING);
  axios
    .get(endpoint)
    .then(data => data.json())
    .then(resp => setState(SUCCESS))
    .catch(error => setState(FAILED));
};

const Notification = (type, message) => (
  <Toast aria-label="notification" type={type} message={message} />
);

function Form(props) {
  const [loading, setLoading] = useState(null);

  return (
    <form
      aria-label="form"
      onSubmit={e => {
        e.preventDefault();
        fetchChars(setLoading);
        props.onSubmit(e);
      }}
    >
      {props.children}
      <button type="submit">Submit</button>
      {loading === LOADING && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
      {loading === SUCCESS && Notification("success", "Login was successful")}
      {loading === FAILED && Notification("error", "Login failed")}
    </form>
  );
}

export default Form;
