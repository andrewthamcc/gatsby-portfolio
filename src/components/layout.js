import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { Container } from "./SharedStyles";
require("../index.css");

const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const LayoutDiv = styled.div`
  opacity: 0;
  animation: ${FadeIn} 0.6s 0.3s ease-in forwards;
`;

const Header = styled.header`
  display: ${props => (props.none ? "none" : "block")};
  text-align: right;
  padding-top: 1.5rem;
`;

const HomeLink = styled.span`
  background-color: #080808;
  color: #ffffff;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid #080808;
  border-radius: 5px;
  transition: 0.3s ease transform;

  :hover {
    transform: scale(1.1);
  }
`;

const Footer = styled.footer`
  background-color: #080808;
  color: #ffffff;
  padding: 0.25rem 0;
  font-size: 0.7rem;
  margin-top: 5rem;
`;

const Layout = ({ children, none }) => {
  return (
    <>
      <LayoutDiv>
        <Header none={none}>
          <Container>
            <Link to="/">
              <HomeLink>at</HomeLink>
            </Link>
          </Container>
        </Header>
        <main>{children}</main>
        <Footer>
          <Container>Andrew Tham © {new Date().getFullYear()}</Container>
        </Footer>
      </LayoutDiv>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
