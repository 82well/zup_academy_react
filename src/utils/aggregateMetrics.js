export function aggregateMetrics(data) {
  // Exemplo: soma de valores num array de métricas
  return data.reduce((acc, curr) => acc + curr.value, 0);
}