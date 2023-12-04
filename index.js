const dotenv = require("dotenv");
dotenv.config();

const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.shortcut(
  "add_to_getdocumentai_drive_message_shortcut",
  async ({ shortcut, body, ack, context, client }) => {
    await ack();
    console.log(shortcut);
  }
);

app.shortcut(
  "add_to_getdocumentai_drive_message_shortcut",
  async ({ shortcut, ack, client }) => {
    try {
      await ack();
      console.log("Shortcut Clicked", shortcut, ack, client);
      // Trigger to open a modal which shows add to drive
    } catch (err) {
      console.error("LOG:Error" + err);
    }
  }
);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 5000);

  console.log("⚡️ Bolt app is running!");
})();
