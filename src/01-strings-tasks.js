/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  return value.replace(/(Hello, )|(!)/g, '');
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  const regexp = new RegExp(value);

  return str.replace(regexp, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.replace(/<|>/g, '');
}

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const horizontalSide = '─';
  const verticalSide = '│';

  const topRightEdge = '┐';
  const bottomRightEdge = '┘';
  const bottomLeftEdge = '└';
  const topLeftEdge = '┌';

  let rectangle = '';

  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      const isTopLeftEdge = i === 0 && j === 0;
      const isTopRightEdge = i === 0 && j === width - 1;

      const isBottomLeftEdge = i === height - 1 && j === 0;
      const isBottomRightEdge = i === height - 1 && j === width - 1;

      const isHorizontalTopSide =
        i === 0 && (!isTopLeftEdge || !isTopRightEdge);
      const isHorizontalBottomSide =
        i === height - 1 && (!isBottomLeftEdge || !isBottomRightEdge);

      const isVerticalLeftSide =
        j === 0 && (!isTopLeftEdge || !isBottomLeftEdge);
      const isVerticalRightSide =
        j === width - 1 && (!isTopRightEdge || !isBottomRightEdge);

      if (isTopLeftEdge) {
        rectangle += topLeftEdge;
      } else if (isTopRightEdge) {
        rectangle += topRightEdge;
      } else if (isBottomLeftEdge) {
        rectangle += bottomLeftEdge;
      } else if (isBottomRightEdge) {
        rectangle += bottomRightEdge;
      } else if (isHorizontalTopSide || isHorizontalBottomSide) {
        rectangle += horizontalSide;
      } else if (isVerticalLeftSide || isVerticalRightSide) {
        rectangle += verticalSide;
      } else {
        rectangle += ' ';
      }
    }

    rectangle += '\n';
  }

  return rectangle;
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const minCharCodeUpperCase = 65;
  const maxCharCodeUpperCase = 90;

  const minCharCodeLowerCase = 97;
  const maxCharCodeLowerCase = 122;

  const cipherStep = 13;

  const checkCaseLetter = ({ charCode, min, max }) =>
    charCode >= min && charCode <= max;
  const encryptLetter = ({ charCode, min, max }) =>
    String.fromCharCode(charCode <= max ? charCode : charCode - max + min - 1);

  return str.split('').reduce((acc, letter) => {
    const charCode = letter.charCodeAt();
    const isUpperCaseLetter = checkCaseLetter({
      charCode,
      min: minCharCodeUpperCase,
      max: maxCharCodeUpperCase,
    });
    const isLowerCaseLetter = checkCaseLetter({
      charCode,
      min: minCharCodeLowerCase,
      max: maxCharCodeLowerCase,
    });
    const newCharCode = charCode + cipherStep;

    let newLetter = '';

    if (isUpperCaseLetter) {
      newLetter = encryptLetter({
        charCode: newCharCode,
        min: minCharCodeUpperCase,
        max: maxCharCodeUpperCase,
      });
    } else if (isLowerCaseLetter) {
      newLetter = encryptLetter({
        charCode: newCharCode,
        min: minCharCodeLowerCase,
        max: maxCharCodeLowerCase,
      });
    } else {
      newLetter = letter;
    }

    return acc + newLetter;
  }, '');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const summand = {
    '♣': 0,
    '♦': 13,
    '♥': 26,
    '♠': 39,
    A: 0,
    J: 10,
    Q: 11,
    K: 12,
  };

  if (value.length === 3) {
    return summand[value.slice(-1)] + 9;
  }

  const [start, end] = value.split('');

  return start in summand
    ? summand[start] + Number(summand[end])
    : Number(start) + Number(summand[end]) - 1;
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
