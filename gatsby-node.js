const path = require('path');

const PostPage = path.resolve('./src/components/Posts/PostPage.js');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(({ data }) => {
      data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: PostPage,
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
