import React from 'react';
import { FormProvider as Provider } from 'react-hook-form';

const FormProvider = ({ children, onSubmit, methods }) => {
  return (
    <Provider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Provider>
  );
};

export default FormProvider;
