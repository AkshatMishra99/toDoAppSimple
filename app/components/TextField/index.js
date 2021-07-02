/**
 *
 * TextField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField as MaterialText } from '@material-ui/core';
const TextField = styled(({ className, ...props }) => (
  <MaterialText
    className={className}
    value={props.value}
    onChange={props.onChange}
    id={props.id}
    label={props.label}
    variant={props.variant}
    color={props.color}
    // {...props}
  />
))`
  color: #f48fb1;
  margin: 10px auto;
  width: 200px;
`;

TextField.propTypes = {};

export default TextField;
