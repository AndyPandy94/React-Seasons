import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  )
};

// The below is for when a message prop is not given and a default message it given.
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
