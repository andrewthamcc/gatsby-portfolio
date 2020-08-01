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

function SEO({ title, description, image }) {
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
    author,
    description: description || defaultDescription,
    image: image || defaultImage,
    keywords,
    title: title || defaultTitle,
    twitterUserName,
    url,
  };

  return (
    <Helmet title={seo.title} titleTemplate={`${defaultTitle} | %s`}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.author && <meta name="author" content={seo.author} />}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      <meta property="og:type" content="website" />
      {seo.url && <meta name="og:url" content={seo.keywords} />}
      {seo.title && <meta name="og:title" content={seo.title} />}
      {seo.description && <meta name="og:description" content={seo.title} />}
      {seo.image && <meta name="og:image" content={seo.image} />}

      <meta property="twitter:card" content="summary_large_image" />
      {seo.url && <meta name="twitter:url" content={seo.keywords} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.title} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

SEO.defaultProps = {
  title: "",
  description: null,
  image: null,
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
