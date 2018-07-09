import { graphql } from 'graphql-relay';
import PropTypes from 'prop-types';
import React from 'react';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulBlogPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          slug: PropTypes.string,
          createdAt: PropTypes.string,
          body: PropTypes.shape({
            childMarkdownRemark: PropTypes.shape({
              excerpt: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
