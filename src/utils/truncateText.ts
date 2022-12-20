/* Truncates text longer than 200 chars */
const truncateText = (shouldTruncate: boolean, text: string) =>
  shouldTruncate ? `${text.substring(0, 200).trim()}...` : text;

export default truncateText;
