import React from 'react';
import styled from 'styled-components';

const ErrrorWrapper = styled.div`
  width: 20rem;
  padding: 2rem;
  border-left: 8px solid #e64e37;
  margin: -2rem auto 2rem auto;
  background: #f8f8f8;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #c0bebe;

  @media(min-width: 414px) {
      width: 25rem
    }
`;

const ErrorTitle = styled.h3`
  line-height: 2;
`;

const Button = styled.button`
  padding: 0.77rem 3rem;
  display: block;
  margin-top: 1.5rem;
  background: #448026;
  color:#f8f8f8;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const ErrorBox = ({ error, onOK }) => {
  return ( 
    <ErrrorWrapper>
      <ErrorTitle>Error:</ErrorTitle>
      {error.name ==='AbortError' ? 
        <p>Your request timedout. Try again.</p> :
        <p>{error.message }</p> }
        <Button
          onClick={ onOK }
          type='button'>OK
        </Button>
    </ErrrorWrapper>
   );
}
 
export default ErrorBox;