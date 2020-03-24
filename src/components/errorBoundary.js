import React, { Component } from 'react';
import ErrorBox from './errorMessage';
import styled  from 'styled-components';

const OuterDiv = styled.div`
  padding: 1rem;
`;

class ErrorBoundary extends Component {
  state = { 
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,

    })
  }
  render() { 
    const { error } = this.state;
    if (this.state.hasError) {
      return (
        <OuterDiv>
          <ErrorBox error={ error }/>
        </OuterDiv>
      );
    }
    return this.props.children;
  } 
}
 
export default ErrorBoundary;

