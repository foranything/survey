export namespace Util {

  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';

  const rand = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min) + min);

  export const randChar = (length = 8) => {
    const randChars = [];
    for (let i = 0; i < length; i++) {
      randChars.push(chars[rand(0, chars.length)]);
    }

    return randChars.join('');
  }
}