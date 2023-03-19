const num = '0123456789';
export function validateLetter(letter, validateKeyCode) {
  if (validateKeyCode !== 8) {
    if (num.includes(letter) !== true) {
      return false;
    }
    if (num.includes(letter)) {
      return true;
    }
  } else if (validateKeyCode === 8) {
    return true;
  }
}
