import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import Error from './Error';


const {{reactfunctionName}} = ({ isLoading, error, data, }) => (
  <div>
    {isLoading && <Loading />}
    {error && <Error error={error} />}
    {data &&  }
  </div>
);

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object
};