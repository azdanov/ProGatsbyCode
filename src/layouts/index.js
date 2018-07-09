import { graphql } from 'graphql-relay';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import './index.css';

const RootWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.desc },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

RootWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  data: PropTypes.shape({
    sizes: PropTypes.PropTypes.shape({}),
  }).isRequired,
};

RootWrapper.defaultProps = {
  children: () => {},
};

export default RootWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
        keywords
      }
    }
    background: imageSharp(id: { regex: "/bg.jpeg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
