const caesarCipher = (string, shift) => {
  const wordsArray = string.split(' ');
  let cipher = '';
  wordsArray.forEach(word => {
    [...word].forEach((char, i) => {
      const code = word.charCodeAt(i);
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        if ((code + shift > 122) || (code + shift > 90 && code < 97)) {
          cipher += String.fromCharCode(code + (shift - 26));
        } else {
          cipher += String.fromCharCode(code + shift);
        }
      } else {
        cipher += char[i];
      }
    });
    cipher += ' ';
  });
  return cipher.trim();
};

module.exports = caesarCipher;
