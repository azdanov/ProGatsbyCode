import { graphql } from 'graphql-relay';
import PropTypes from 'prop-types';
import React from 'react';

const PostPage = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div>
      <span>{data.contentfulBlogPost.createdAt}</span>
      <h1>{data.contentfulBlogPost.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
        }}
      />
    </div>
  );
};

PostPage.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      createdAt(formatString: "MMMM DD, YYYY")
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
