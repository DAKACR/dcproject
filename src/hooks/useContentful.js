import { useState, useEffect } from "react";

import { useLanguageContext } from "context/languagecontext";

const useContentful = ({ query }) => {
  const [dataLanding, setLandingData] = useState(
    query.constructor === Function ? { es: null, en: null } : null
  );
  const { lang } = useLanguageContext();

  const queryParam = query.constructor === Function ? query(lang) : query;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            query: queryParam,
          }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        if (query.constructor === Function) {
          if (dataLanding[lang] === null) {
            setLandingData((prevData) => ({ ...prevData, [lang]: data }));
          }
        } else {
          if (dataLanding === null) {
            setLandingData(data);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [queryParam, lang, query.constructor, dataLanding]);

  if (query.constructor === Function) {
    return dataLanding[lang];
  } else {
    return dataLanding;
  }
};

export default useContentful;
