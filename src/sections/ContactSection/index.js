import useContentful from "hooks/useContentful";
import { useLanguageContext } from "context/languagecontext";

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

import { FORM_INFO } from "./contactdata";

const query = (lang) => {
  return `
  {
    contactCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
      items {
        text
        icon
        important
      }
    }
  }
  `;
};

export default function ContactSection() {
  const landingData = useContentful({ query });
  const contactData = landingData?.contactCollection.items;
  const { lang } = useLanguageContext();

  return (
    <Layout id="contact" section="contact">
      <SectionTitle title={"contact"} />
      <ContactDataContainer>
        {contactData
          ? contactData.map(({ text, icon, important }) => (
              <ContactData
                key={text}
                icon={icon}
                text={text}
                important={important}
              />
            ))
          : null}
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
