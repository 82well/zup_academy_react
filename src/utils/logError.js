export function logError({ component, error, info, userId }) {
  console.error({
    component,
    stack: error?.stack,
    timestamp: new Date().toISOString(),
    userId,
    info,
  });
}