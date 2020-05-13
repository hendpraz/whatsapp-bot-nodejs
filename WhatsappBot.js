import { google } from 'googleapis';
import dotenv from 'dotenv';
import twilio from 'twilio';
dotenv.config();

const {
  SID: accountSid,
  KEY: TwilloAuthToken,
  APIKEY: googleApiKey,
  CX: cx
} = process.env;

twilio(accountSid, TwilloAuthToken);
const { MessagingResponse } = twilio.twiml;
const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */
class WhatsappBot {
  /**
   * @memberof WhatsappBot
   * @param {object} body body of the request
   * @returns {string} - search result content
   */
  static async googleSearch(body) {
    const twiml = new MessagingResponse();
    const q = body;
    const options = { cx, q, auth: googleApiKey };

    const result = await customsearch.cse.list(options);
    const firstResult = result.data.items[0];
    const searchData = firstResult.snippet;
    const link = firstResult.link;

    twiml.message(`${searchData} ${link}`);

    return twiml.toString();
  }
}

export default WhatsappBot;