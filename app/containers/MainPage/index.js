/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { loadStore } from './actions';
import { makeToDoListSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function MainPage(props) {
  const { toDoList, loadStore: loadStoreProp } = props;
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });
  useEffect(() => {
    loadStoreProp(1, 2);
    // console.log(loadStore);
  }, []);
  // console.log(`the todos are ${toDoList}`, props);
  // console.log(makeToDoListSelector);
  return (
    <div>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

MainPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  toDoList: PropTypes.object,
  loadStore: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // mainPage: makeSelectMainPage(),
  toDoList: makeToDoListSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadStore: (a, b) => dispatch(loadStore(a, b)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
