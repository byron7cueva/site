import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { color } from '../../config/constants'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl: url
        twitterUsername
      }
    }
  }
`

export const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: siteUrl
  }

  return (
    <Helmet title={seo.title}>
      <meta name='theme-color' content={`rgb(${color.rgb.alternative})`} />
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta property='og:site_name' content='Byron Cueva'/>
      <meta property='og:locale' content='es_EC' />
      <meta property='og:type' content='website' />

      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && <meta property='og:description' content={seo.description} />}
      {seo.image && <meta property='og:image' content={seo.image} />}
      {seo.image && <meta property='og:image:secure_url' content={seo.image} />}
      {seo.image && <meta property='og:image:type' content='image/jpeg' />}
      {seo.image && <meta property='og:image:width' content='1200' /> }
      {seo.image && <meta property='og:image:height' content='630' /> }
      {seo.image && <meta property='og:image:alt' content='Byron Cueva' /> }

      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && <meta name='twitter:creator' content={twitterUsername} />}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && <meta name='twitter:description' content={seo.description} />}
      {seo.image && <meta name='twitter:image' content={seo.image} />}
    </Helmet>
  )
}


SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null
}