/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled(({ className, ...props }) => (
  <div className={className}>{props.children}</div>
))`
  text-align: center;
  font-size: 36px;
  margin: auto;
  padding-top: 30px;
  font-weight: 700;
`;

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
