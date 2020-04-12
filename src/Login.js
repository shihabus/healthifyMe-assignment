import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Form from "./Form";
import useState from "./useStateHook";

const Wrapper = styled.div`
  background: red;
  height: 100%;
`;

const initialState = {
  isEmailValid: false,
  isPasswordValid: false
};

function Login({ submit }) {
  const [isValid, setIsValid] = useState(initialState);
  return (
    <Wrapper>
      <Form
        onSubmit={e => {
          const { username, password } = e.target.elements;
          submit({
            username: username.value,
            password: password.value
          });
        }}
      >
        <Input
          type="email"
          id="username"
          aria-label="username"
          onChange={validity => setIsValid({ isEmailValid: validity })}
        />
        <Input
          type="password"
          id="password"
          aria-label="password"
          onChange={validity => setIsValid({ isEmailValid: validity })}
        />
      </Form>
    </Wrapper>
  );
}

export default Login;
