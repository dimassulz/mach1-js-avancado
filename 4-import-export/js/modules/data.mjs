export const DATE_NOW = new Date();

export function dateFormat(date) {
  return new Date(date).toLocaleDateString("pt-BR");
}

export default dateFormat;
