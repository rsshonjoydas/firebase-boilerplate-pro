import Head from 'next/head';

const SEO = ({
  description = 'RS Shonjoy',
  author = 'RS Shonjoy',
  meta,
  title = 'RS Shonjoy',
}: any) => {
  const metaData = [
    {
      id: 1,
      name: `description`,
      content: description,
    },
    {
      id: 2,
      property: `og:title`,
      content: title,
    },
    {
      id: 3,
      property: `og:description`,
      content: description,
    },
    {
      id: 4,
      property: `og:type`,
      content: `website`,
    },
    {
      id: 5,
      name: `twitter:site`,
      content: `@rsshonjoydas`,
    },
    {
      id: 6,
      name: `twitter:card`,
      content: `summary`,
    },
    {
      id: 7,
      name: `twitter:title`,
      content: title,
    },
    {
      id: 8,
      name: `twitter:creator`,
      content: author,
    },
    {
      id: 9,
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>RS Shonjoy | {title}</title>
      {metaData.map(({ id, name, content }) => (
        <meta key={id} name={name} content={content} />
      ))}
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
