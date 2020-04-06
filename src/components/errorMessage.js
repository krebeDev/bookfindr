import React from 'react';
import styled from 'styled-components';

const ErrrorWrapper = styled.div`
  width: 20rem;
  padding: 1rem;
  border-left: 8px solid ${props => props.theme.warnRed};
  margin: -2rem auto 2rem auto;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  box-shadow: 1px 1px 5px ${props => props.theme.grey};

  @media (min-width: 768px) {
      width: 25rem;
      padding: 2rem;
    }
`;

const ErrorTitle = styled.h3`
  line-height: 2;
`;

const Button = styled.button`
  padding: 0.6rem 2.5rem;
  display: block;
  margin-top: 1.5rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.textColorLight};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0.77rem 3rem;
  }
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