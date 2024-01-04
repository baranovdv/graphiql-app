import { Component, ErrorInfo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from '../../interfaces/interfaces';

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    toast.error(`${error.message}${errorInfo}`);
    this.setState({ hasError: true });
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
