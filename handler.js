import WhatsappBot from './WhatsappBot';

const getBody = queryString => {
  const urlParams = new URLSearchParams(queryString);
  const body = urlParams.get('Body');

  return body;
};

export const search = async (event, context) => {
  const body = getBody(event.body);

  const result = await WhatsappBot.googleSearch(body);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/xml',
    },
    body: result,
  };
};