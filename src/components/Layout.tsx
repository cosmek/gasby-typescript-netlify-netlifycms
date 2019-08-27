import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Header } from '../components/Header';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Page = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: 1rem;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: 20em;
`;


export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <Normalize />
        <Root>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
          />
          <Header title={data.site.siteMetadata.title} />
          <Main>
            <Page>
              <Container>
                {children}
              </Container>
            </Page>
          </Main>
        </Root>
      </>
    )}
  />
);
