import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

const Head = ({ title = '', description = '' }: HeadProps = {}) => (
  <Helmet title={title} defaultTitle="finhealth">
    <meta name="description" content={description} />
  </Helmet>
);

export default Head;
