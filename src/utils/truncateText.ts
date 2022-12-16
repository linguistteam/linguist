/* Takes text longer than 200 chars and truncates it */
const truncateText = (shouldTruncate: boolean, text: string) =>
  shouldTruncate ? `${text.substring(0, 200).trim()}...` : text;

export default truncateText;
