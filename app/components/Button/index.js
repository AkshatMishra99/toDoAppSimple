/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Button = styled(({ className, ...props }) => (
  <div className={className}>
    <MaterialButton {...props}>
      <FormattedMessage {...messages.header} />
    </MaterialButton>
  </div>
))`
  margin: 15px;
`;

Button.propTypes = {};

export default Button;
