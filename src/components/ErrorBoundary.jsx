import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    this.props.onError?.(error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div role="alert">Erro inesperado.</div>;
    }
    return this.props.children;
  }
}