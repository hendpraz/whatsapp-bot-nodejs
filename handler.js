// import WhatsappBot from './server/controllers/WhatsappBot';

export const search = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Search`,
    }),
  };
};