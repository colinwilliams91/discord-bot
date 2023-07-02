// const {  }
import { Client, IntentsBitField } from "discord.js";

/**
 * @description This array represents the categories of Events we want available to our Bot.
 * @argument: `IntentsBitField.Flags.Guilds`
 * @satisfies Intents with "Guilds" flags facilitates Server access
 * @argument: `IntentsBitField.Flags.MessageContent`
 * @satisfies "MessageContent" permits your app to receive message content data across the APIs.
 * @see https://discord.com/developers/docs/topics/gateway#message-content-intent
 */
const intentOptions = [
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMembers,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.MessageContent
];

/**
 * @class: `Client` from discord.js
 * @instance: `client` is our Bot instance
 * @argument: must take in an options object with `intents` array, all other properties are optional
 */
const client = new Client({
  intents: intentOptions
});
