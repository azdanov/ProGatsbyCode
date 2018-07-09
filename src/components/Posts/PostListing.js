import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const PostListing = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <span>{post.createdAt}</span>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
);

PostListing.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        excerpt: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PostListing;
