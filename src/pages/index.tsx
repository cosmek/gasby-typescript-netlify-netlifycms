import * as React from 'react';
import { Link, graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { IndexPageQuery } from '../types/graphql';

interface Props {
  data: IndexPageQuery;
}

export default (props: Props) => (
  <Layout>
    <h1>Test</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <ul>
      {props.data.allMarkdownRemark.edges.map(edge => (
        <li>
          <Link to={edge!.node!.fields!.slug!}>
            {edge!.node!.frontmatter!.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(filter: {fields: {layout: {eq: "blog"}}}) {
      edges {
        node {
          fields {
            layout
            slug
          }
          html
          tableOfContents
          timeToRead
          frontmatter {
            title
          }
        }
      }
    }
  }
`;