/**
 *
 * ManageCart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectManageCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getuserInfoAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ManageCart extends React.Component {
  constructor(props) {
    super(props);

    const { getUserInfo } = props;
    getUserInfo('U10000');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>ManageCart</title>
          <meta name="description" content="Description of ManageCart" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <section className="sectionbox">
          <div>
            <div>
              <h5>Shafeek</h5>
              <div>
                <div>300000</div>:
                <div>
                  <div
                    className="loader"
                    title=" We're getting the price for this item..."
                  />
                </div>
              </div>
              <p>DESC</p>
              <section>
                <span className="item-quantity">Quantity: 34565</span>
                <button className="btn btn-secondary" type="button">
                  ..-..
                </button>
                <button className="btn btn-secondary" type="button">
                  ..+..
                </button>
              </section>
            </div>{' '}
            : <div className="loader" />
          </div>
        </section>
      </div>
    );
  }
}

ManageCart.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manageCart: makeSelectManageCart(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: userId => dispatch(getuserInfoAction(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'manageCart', reducer });
const withSaga = injectSaga({ key: 'manageCart', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ManageCart);
