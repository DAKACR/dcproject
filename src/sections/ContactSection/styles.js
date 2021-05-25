import styled, { css } from "styled-components";

const formControl = css`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  margin-top: 5px;
  padding: 0.375rem 0.75rem;
  font-size: 15px;
  font-family: "Roboto-Regular";
  line-height: 1.42857143;
  color: #000;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  border-radius: 7px;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: 0 0 0px 3px #0476d040;
  }
`;

const ContactDataContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  padding: 1rem;
  margin: 3rem auto 0 auto;
  border-radius: 7px;
  @media (max-width: 640px) {
    width: 90%;
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-family: "Roboto-Regular";
  &:first-of-type {
    margin-top: 0;
  }
  ${({ required }) =>
    required &&
    css`
      &::before {
        content: "*";
        margin-right: 0.3rem;
        color: #ed3131;
        font-family: "Roboto-Bold";
      }
    `}
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;

const StyledInput = styled.input`
  ${formControl}
`;

const StyledTextarea = styled.textarea`
  ${formControl}
  min-height: 100px;
  resize: none;
`;

export {
  ContactDataContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
};
