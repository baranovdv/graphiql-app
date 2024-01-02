export default function isJSONParse(string: string): boolean {
  try {
    JSON.parse(string);
  } catch (event) {
    return false;
  }
  return true;
}
