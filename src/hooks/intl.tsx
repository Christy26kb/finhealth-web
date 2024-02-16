import { useIntl } from 'react-intl';

const useTranslate = () => {
  const { $t } = useIntl();
  const translate = (messageId: string, variables?: Record<string, string>) =>
    $t({ id: messageId }, variables);
  return translate;
};

export default useTranslate;
