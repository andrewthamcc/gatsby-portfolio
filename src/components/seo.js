import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        defaultDescription: description
        defaultImage: image
        keywords
        defaultTitle: title
        twitterUserName
        url
      }
    }
  }
`;

function SEO({ lang, title, description, image }) {
  const { site } = useStaticQuery(query);

  const {
    author,
    defaultDescription,
    defaultImage,
    keywords,
    defaultTitle,
    twitterUserName,
    url,
  } = site.siteMetadata;

  const seo = {
    lang,
    author,
    description: description || defaultDescription,
    image: image || defaultImage,
    keywords,
    title: title || defaultTitle,
    twitterUserName,
    url,
  };

  console.log(seo);

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.lang,
      }}
      title={seo.title}
      titleTemplate={`${defaultTitle} | %s`}
      meta={[
        {
          name: `author`,
          content: seo.author,
        },
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `keywords`,
          content: seo.keywords,
        },
        {
          name: `image`,
          content: seo.image,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:content`,
          content: seo.description,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:creator`,
          content: seo.twitterUserName,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  title: "",
  description: null,
  image: null,
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
