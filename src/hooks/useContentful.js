import { useState, useEffect } from "react";

const query = (lang) => `
{
  headerLogoCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
    items {
      img {
        url
        title
      }
    }
  }
  homeCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
    items {
      title
      subtitle
      cta
      background {
        url
      }
    }
  }
  servicesCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
    items {
      img {
        url
        title
      }
      title
      description
    }
  }
  aboutCollection(locale: "${lang === "es" ? "es" : "en-US"}") {
    items {
      title
      paragraph
      img {
        url
        title
      }
    }
  }
  softwaresCollection {
    items {
      list
    }
  }
  galleryCollection {
    items {
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}
`;

const useContentful = (lang) => {
  const [data, setData] = useState(null);

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
          body: JSON.stringify({ query: query(lang) }),
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

  return { data };
};

export default useContentful;
