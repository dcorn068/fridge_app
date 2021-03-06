import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import styled from 'styled-components';

const Container = styled.section`
  padding-top: 16px;
  max-width: 900px;
  margin: auto;
`;

export const RecipePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

const RecipePage = ({ data }) => {
  const { markdownRemark: recipe } = data;

  return (
    <Layout>
      <RecipePageTemplate
        content={recipe.html}
        contentComponent={HTMLContent}
        description={recipe.frontmatter.description}
        helmet={<Helmet title={`${recipe.frontmatter.title} | Recipe`} />}
        tags={recipe.frontmatter.tags}
        title={recipe.frontmatter.title}
      />
    </Layout>
  );
};

RecipePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default RecipePage;

export const pageQuery = graphql`
  query RecipePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        path
        templateKey
        tags
      }
    }
  }
`;
