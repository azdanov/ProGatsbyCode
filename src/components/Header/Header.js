import Img from 'gatsby-image';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  background: #bcaaa4;
  h1 {
    img {
      height: 80px;
    }
  }
  height: ${({ isHome }) => (isHome ? '70vh' : '7rem')};
  margin-bottom: 1.47rem;
  overflow: hidden;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.47rem 1.0877rem;
  position: relative;
  z-index: 2;
`;

const MainNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #fafafa;
        &:hover {
          border-bottom: 3px solid #fafafa;
        }
      }
    }
  }
`;

export default class Header extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    data: PropTypes.shape({
      sizes: PropTypes.string,
    }).isRequired,
  };

  componentDidUpdate({ location: prevLocation }) {
    const { location } = this.props;
    if (location.pathname !== prevLocation.pathname) {
      if (location.pathname === '/') {
        this.wrapper.animate([{ height: '7rem' }, { height: '70vh' }], {
          duration: 300,
          easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          fill: 'forwards',
          iterations: 1,
        });
      } else {
        this.wrapper.animate([{ height: '7rem' }, { height: '70vh' }], {
          duration: 300,
          easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          fill: 'forwards',
          iterations: 1,
          direction: 'reverse',
        });
      }
    }
  }

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => {
          // eslint-disable-next-line react/no-find-dom-node, Used for Web Animations API
          this.wrapper = ReactDOM.findDOMNode(wrapper);
        }}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: 0,
                  height: 0,
                  overflow: 'hidden',
                }}
              >
                {data.site.siteMetadata.title}
              </span>
              <img src={logo} alt={data.site.siteMetadata.title} />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            height: '100%',
            left: 0,
            opacity: 0.5,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }
}
