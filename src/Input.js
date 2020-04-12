import React, { useRef } from "react";
import useState from "./useStateHook";
import validityChecker from "./utils/inputValidator";

const initialState = {
  value: "",
  isValid: false,
  errorMessage: ""
};

function Input(props) {
  const el = useRef(null);
  const [input, setInput] = useState(initialState);
  const { value, errorMessage, isValid } = input;

  const handleChange = e => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const { isValid, errorMessage } = validityChecker(
      props.type || "",
      value,
      el.current
    );
    setInput({ value, isValid, errorMessage });
  };

  const clear = () => setInput(initialState);

  return (
    <div>
      <input
        ref={el}
        value={value}
        data-testid="input"
        onChange={handleChange}
        {...props}
      />
      {!isValid && <p>{errorMessage}</p>}
    </div>
  );
}

export default Input;
