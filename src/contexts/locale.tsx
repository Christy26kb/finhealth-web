import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES, messages } from '@i18n';

type LocaleProviderProps = {
  children: ReactNode;
};

const LocaleProvider = ({ children }: LocaleProviderProps) => {
  // TODO: move currentLocale state to rtk slice
  const currentLocale = LOCALES.ENGLISH;
  return (
    <IntlProvider
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
      messages={messages[currentLocale]}
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
