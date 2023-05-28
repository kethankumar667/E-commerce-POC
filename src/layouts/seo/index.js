import React from 'react';
import { Helmet } from 'react-helmet';

const SeoSection = (content) => {
  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{HeaderTitle ? HeaderTitle : 'local'}</title>
        <title>hello world</title>
      </Helmet> */}
      <Helmet>
        <title>Nested Title</title>
        <meta name="description" content={content} />
      </Helmet>
    </div>
  );
};

export default SeoSection;
