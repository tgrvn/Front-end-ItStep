export function validateHead(str) {
  if (str.length > 2 && str.length < 13) {
    return true;
  }
  return false;
}

export function validateTxt(str) {
  if (str.length > 2 && str.length < 31) {
    return true;
  }
  return false;
}

