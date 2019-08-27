import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';

export default () => (
  <Layout>
    <h1>Welcome from page 3 u fool</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/">Take me back home.</Link>
      </li>
    </ul>
  </Layout>
);

