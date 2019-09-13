import React from 'react';

const ErrorPage = ({ location}) => {
  console.log(location)
  return (
    <h2>
      {`Woops, page not found for`}
      <code>
        {location.pathname}
      </code>
    </h2>
  )
}

export default ErrorPage
