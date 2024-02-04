import EN_MESSAGES from './translations/en.json';

const convertedMessageObject = (
  message: string | object,
  parentKey: string,
  messageObject: Record<string, string>
): Record<string, string> => {
  Object.entries(message).map(([key, value]) => {
    const childKey: string = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'object')
      convertedMessageObject(value, childKey, messageObject);
    else messageObject[childKey] = value;
    return null;
  });
  return messageObject;
};

export const LOCALES = {
  ENGLISH: 'en'
};

export const messages = {
  [LOCALES.ENGLISH]: convertedMessageObject(EN_MESSAGES, '', {})
};
