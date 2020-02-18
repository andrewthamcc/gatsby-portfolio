import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

function SEO({
  author,
  description,
  image,
  keywords,
  lang,
  meta,
  title,
  twitterName,
  url,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            image
            keywords
            title
            twitterName
            url
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:content`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
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
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterName,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata.url,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  author: `Andrew Tham`,
  description: `Andrew Tham is a Toronto based developer.`,
  image: ``,
  keywords: ``,
  title: ``,
  twitterName: ``,
  url: ``,
};

SEO.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SEO;
