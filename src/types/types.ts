import React from 'react';

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

interface Client {
  username: string;
  email: string;
  firstPassword: string;
  secondPassword: string;
}

export type { Client };
