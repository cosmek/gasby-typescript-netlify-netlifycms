import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout';

export default () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/page-3/">Page 3 pls</Link>
      </li>
    </ul>
  </Layout>
);