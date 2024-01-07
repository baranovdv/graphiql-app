import { Component, ErrorInfo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../interfaces/interfaces';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    toast.error(`${error.message}${errorInfo}`);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError === true) {
      return (
        <ToastContainer
          position="top-center"
          autoClose={false}
          theme="colored"
          style={{ top: '50%' }}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
