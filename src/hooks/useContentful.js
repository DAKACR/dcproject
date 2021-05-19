import { useState, useEffect } from "react";

const query = `
{
  landingCollection(locale: "en-US") {
    items {
      homeTitle
      homeParagraph
      homeCta
    }
  }
}
`;

const useContentful = () => {
  const [text, setText] = useState({});

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
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setText(data.landingCollection.items[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return { text };
};

export default useContentful;
