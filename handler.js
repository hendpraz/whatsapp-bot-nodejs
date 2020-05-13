import WhatsappBot from './WhatsappBot';

export const search = async (event, context) => {
  const data = JSON.parse(event.body);
  const body = data.Body;
  console.log(body);

  const result = WhatsappBot.googleSearch(body);

  return {
    statusCode: 200,
    body: result,
  };
};