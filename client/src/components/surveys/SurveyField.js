// SurveyFiled contains logic to render a singles label and text input
import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
    return (
      <div>
          <label>{ label }</label>
          <input { ...input } sytle={{ marginBottom: '5px' }} />
          <div className="red-text" style={{ marginBottom: '20px' }}>
            { touched && error }
          </div>
      </div>  
    );
}