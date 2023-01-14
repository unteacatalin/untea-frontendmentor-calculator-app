import { createContext, useState } from 'react';

const SelectedTheme = createContext({
  theme: {},
  screenVal: {},
  postTheme: (newScreen) => {},
  postScreen: (newTheme) => {},
});

export function SelectedThemeProvider(props) {
  const [themeState, setThemeState] = useState({});
  const [screenState, setScreenState] = useState({});

  function parseValue(value) {
    try {
      if (value.length <= 15) {
        if (
          /* Take out the leading zero */
          value[0] === '0' &&
          value.length > 1 &&
          !['+', '-', '/', 'x', '.'].includes(value[1])
        ) {
          return value.substring(1, value.length);
        } else if (
          /* do not allow a decimal point after a mathematical operator */
          value[value.length - 1] === '.' &&
          value.length > 1 &&
          !['+', '/', 'x'].includes(value[value.length - 2])
        ) {
          return value.substring(0, value.length);
        } else if (value.length === 0) {
          /* Initialize screen with zero if no value present */
          return '0';
        } else if (
          /* Prevent division by zero */
          value.length > 1 &&
          value[value.length - 2] === '/' &&
          value[value.length - 1] === '0'
        ) {
          return value.substring(0, value.length - 1);
        } else if (
          /* prevent doubling the mathematical operator */
          value.length > 1 &&
          ['-', '+', '/', 'x', '.'].includes(value[value.length - 2]) &&
          ['-', '+', '/', 'x', '.'].includes(value[value.length - 1])
        ) {
          return value.substring(0, value.length - 1);
        } else if (value[value.length - 1] !== '=') {
          /* Format the equation entered if the last character isn't equal */
          const arrayOfStrings = value
            .replaceAll(',', '')
            .split('=')
            .join('|')
            .split('-')
            .join('|-')
            .split('+')
            .join('|+')
            .split('/')
            .join('|/')
            .split('x')
            .join('|x')
            .split('|')
            .filter((item) => item !== '');
          const formatedArrayOfStrings = arrayOfStrings.map((string) => {
            if (string[0] === '-' && string.length > 1) {
              return (
                '-' +
                parseFloat(string.substring(1, string.length)).toLocaleString(
                  'en-US'
                )
              );
            } else if (string[0] === '+' && string.length > 1) {
              return (
                '+' +
                parseFloat(string.substring(1, string.length)).toLocaleString(
                  'en-US'
                )
              );
            } else if (string[0] === 'x' && string.length > 1) {
              return (
                'x' +
                parseFloat(string.substring(1, string.length)).toLocaleString(
                  'en-US'
                )
              );
            } else if (string[0] === '/' && string.length > 1) {
              return (
                '/' +
                parseFloat(string.substring(1, string.length)).toLocaleString(
                  'en-US'
                )
              );
            } else if (
              string.length > 0 &&
              !['-', '+', 'x', '/'].includes(string[0])
            ) {
              return parseFloat(
                string.substring(0, string.length)
              ).toLocaleString('en-US');
            } else {
              return string;
            }
          });
          return formatedArrayOfStrings.join('');
        } else {
          /* compute equation & format the result */
          let result = 0;
          const arrayOfStrings = value
            .replaceAll(',', '')
            .split('=')
            .join('|')
            .split('-')
            .join('|-')
            .split('+')
            .join('|+')
            .split('/')
            .join('|/')
            .split('x')
            .join('|*')
            .split('|')
            .filter((string) => string !== '');
          arrayOfStrings.forEach((string) => {
            if (string[0] === '-') {
              result -= parseFloat(string.substring(1, string.length));
            } else if (string[0] === '+') {
              result += parseFloat(string.substring(1, string.length));
            } else if (string[0] === '*') {
              result *= parseFloat(string.substring(1, string.length));
            } else if (string[0] === '/') {
              result /= parseFloat(string.substring(1, string.length));
            } else {
              result += parseFloat(string.substring(0, string.length));
            }
          });
          const indexDecimal = result.toString().indexOf('.');
          if (indexDecimal === -1 && result.toString().length > 15) {
            setEnteredValue('Result too large');
          } else if (indexDecimal !== -1) {
            const parsedData = parseFloat(
              result.toFixed(
                15 - indexDecimal - 1 - (Math.ceil(indexDecimal / 3) - 1)
              )
            ).toLocaleString('en-US', {
              minimumFractionDigits:
                15 - indexDecimal - 1 - (Math.ceil(indexDecimal / 3) - 1),
            });
            return parsedData;
          } else {
            const parsedData = parseFloat(result.toFixed()).toLocaleString(
              'en-US',
              {
                minimumFractionDigits: 15 - result.toString().length - 1,
              }
            );
            return parsedData;
          }
        }
      } else {
        return value.substring(0, value.length - 1);
      }
    } catch (error) {
      console.error({ error });
      return 'Error!';
    }
  }

  function updateTheme(themeData) {
    setThemeState((prevThemeData) => {
      return themeData;
    });
  }

  function updateScreen(screenData) {
    setScreenState((prevScreenData) => {
      const result = parseValue(screenData.val);
      return { val: result };
    });
  }

  const context = {
    theme: themeState,
    screenVal: screenState,
    postTheme: updateTheme,
    postScreen: updateScreen,
  };

  return (
    <SelectedTheme.Provider value={context}>
      {props.children}
    </SelectedTheme.Provider>
  );
}

export default SelectedTheme;
