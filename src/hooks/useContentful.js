import { useState, useEffect } from "react";

import { useLanguageContext } from "context/languagecontext";

const useContentful = ({ query }) => {
  const [data, setData] = useState(null);
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

        setData(data);
      })
      .catch((err) => console.log(err));
  }, [lang]);

  console.log(data);

  return data;
};

export default useContentful;
