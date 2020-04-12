import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Form from "./Form";

const Wrapper = styled.div`
  background: red;
  height: 100%;
`;

function Login({ submit }) {
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
        <Input type="email" id="username" aria-label="username" />
        <Input type="password" id="password" aria-label="password" />
      </Form>
    </Wrapper>
  );
}

export default Login;
