import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as Error).message === 'string'
  );
}

export function handleResponseErrors(
  error: FetchBaseQueryError | SerializedError | undefined
) {
  if (isFetchBaseQueryError(error)) {
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
    if (
      typeof JSON.parse(errMsg) === 'object' &&
      'errors' in JSON.parse(errMsg)
    )
      toast(
        JSON.stringify(
          JSON.parse(errMsg).errors.forEach((e: { message: string }) => {
            toast.warn(e.message, { theme: 'dark' });
          })
        )
      );
    else {
      toast(errMsg);
    }
  } else if (isErrorWithMessage(error)) {
    toast(error.message);
  }
}
