//funcao anonima
export default (text, length = 10) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
};


//funcao com alias no export
// export const truncateText = (text, length = 10) => {
//   if (text.length > length) {
//     return text.substring(0, length) + "...";
//   }
//   return text;
// };

// export { truncateText as cortaTexto };