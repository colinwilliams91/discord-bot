# Discord Bot/Integration Template

### Description:
This repo is a Discord Bot Bootstrap with all the necessary setup configured. Just plug in your [variables](./example.env)
and start building event listeners/handlers in the [index.js](./src/index.js)
the [setup](https://github.com/colinwilliams91/discord-bot#setup) below walks through the Discord-side integration steps.

### [API](https://old.discordjs.dev/#/docs/discord.js/main/general/welcome)

### Setup:
[Discord Docs Home/Guide/API](https://discord.js.org/)

- visit the [Discord Developer Portal](https://discord.com/developers/applications)
- click "New Application" to create the bot/integration container
  - name the Application and agree to ToS
- configure "General Information" if needed
- click "Bot" in left-side panel
  - toggle `PUBLIC BOT` on or off
  - toggle on all 3 "Priveleged Gateway Intents"
  - select "Bot Permissions" as needed
- click "OAuth2" in left-side panel
  - click "URL Generator"
    - select "bot" for bot scopes and permissions
    - select "applications.commands" for `/` commands permissions if needed (to interact with bot in Discord)
  - this will open the `BOT PERMISSIONS` section
    - select "Administrator" for all permissions || specify permissions here
  - click "Copy" button in lower-right to copy `GENERATED URL`
- paste copied URL into Discord Server's channel || in the web browser
- click pasted URL to invite Bot to Discord Server

```bash
npm init -y
# --> inside package.json: "main": "src/index.js"
mkdir src
cd src
touch index.js
cd ..
npm i discord.js
```

### Environment:
- rename `example.env` to `.env`
- replace `TOKEN=` value with the Token from the Bot you want to build in your [Application Container](https://discord.com/developers/applications)
  - it will be located in the "Bot" section in the left-side panel

`src/index.js`

```js
import { Client, IntentsBitField } from "discord.js";
```

- this will import the Client from discord library and IntentsBitsField...
- see [DOCS](https://github.com/colinwilliams91/discord-bot#docs): section for how Intents work

### [DOCS](https://old.discordjs.dev/#/docs/discord.js/main/general/welcome):

##### [List of Intents](https://discord.com/developers/docs/topics/gateway#list-of-intents)

We must explicitly define "Intents" in the options object to our Client generator function.
Each "Intent" (i.e.; Guilds) will give access to a list of events (see documentation)
that our bot will gain access to by passing in. (SO OUR BOT WILL KNOW WHEN THESE EVENTS OCCUR)

### IMPORTANT:

_A "GUILD" in Discord Development represents a SERVER_

```js
const client = new Client({
  intents: [
    /* IntentsBitField.Flags.Guilds, */
    /* intents here... */
  ],
});
```


# TERMS OF USE
_By using this repository in anyway you are agreeing to follow the Code of Conduct listed [here](https://github.com/colinwilliams91/discord-bot/blob/main/CODE_OF_CONDUCT.md)_