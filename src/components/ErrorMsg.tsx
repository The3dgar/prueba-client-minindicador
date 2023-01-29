import React from 'react';

export const ErrorMsg = ({ msg = 'Ha ocurrido un error' }) => {
  return (
    <div className='d-flex p-5 justify-content-center align-item-center vh-100'>
      {msg}
    </div>
  );
};
