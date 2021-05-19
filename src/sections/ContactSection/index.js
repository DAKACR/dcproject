import { useContext } from "react";

import { LanguageContext } from "context/languagecontext";

import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import ContactData from "components/ContactData";
import Button from "components/Button";

import {
  ContactDataContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from "./styles";

import { CONTACT_DATA, FORM_INFO } from "./contactdata";

export default function ContactSection() {
  const { lang } = useContext(LanguageContext);

  return (
    <Layout id="contact" section="contact">
      <SectionTitle title={lang === "es" ? "contacto" : "contact"} />
      <ContactDataContainer>
        {CONTACT_DATA[lang].map(({ icon, text, important }) => (
          <ContactData
            key={text}
            icon={icon}
            text={text}
            important={important}
          />
        ))}
      </ContactDataContainer>
      <StyledForm
        name="contact"
        method="POST"
        encType="multipart/form-data"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        {FORM_INFO[lang].map(
          ({
            tag,
            type,
            label,
            name,
            placeholder,
            min,
            max,
            accept,
            required,
          }) => {
            if (tag === "input") {
              return (
                <StyledLabel key={label} required={required}>
                  {label}
                  <StyledInput
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    minLength={min}
                    maxLength={max}
                    accept={accept && accept}
                    required={required}
                  />
                </StyledLabel>
              );
            } else {
              return (
                <StyledLabel key={label} required={required}>
                  {label}
                  <StyledTextarea
                    name={name}
                    placeholder={placeholder}
                    minLength={min}
                    maxLength={max}
                    required={required}
                  ></StyledTextarea>
                </StyledLabel>
              );
            }
          }
        )}
        <Button text={lang === "es" ? "enviar" : "send"} section="contact" />
      </StyledForm>
    </Layout>
  );
}
