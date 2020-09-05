import React from 'react';

import TxtField from '../TxtField';

import { FieldsContainer } from './styled';

const FormFields = ({ fields }) => {
  return (
    <FieldsContainer>
      {
        fields &&
        fields.map(field => {
          return (
            <TxtField
              key={field.name}
              name={field.name}
              labelName={field.labelName}
              isPassword={field.isPassword}
            />
          );
        })
      }
    </FieldsContainer>
  );
};

export default FormFields;