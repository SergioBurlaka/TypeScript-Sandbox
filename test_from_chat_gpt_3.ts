// ts-node ./test_from_chat_gpt_3.ts

type IsNumberString_6<T extends string> = `${T}` extends `${number}` ? T : never;

const stringToNumber_6 = <T extends string>(str: IsNumberString_6<T>) =>
  parseInt(str);

stringToNumber_6("123"); 
stringToNumber_6("abc"); 
