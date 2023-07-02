import { CHANNEL_ID } from "./app.mjs";
import { Events } from "discord.js";

export async function botMain(api, client) {
  const ch = await client.channels.fetch(CHANNEL_ID);

  const onReaction = async (reaction) => {
    if (reaction.message.channelId !== CHANNEL_ID) return;
    try {
      const r = await reaction.fetch();
      let c = 0;
      for (const i of r.message.reactions.cache.values()) {
        c += i.count || 0;
      }
      console.log(r.message.id, c);
    } catch (error) {
      console.error(error);
    }
  };

  client.on(Events.MessageReactionAdd, onReaction);
  client.on(Events.MessageReactionRemove, onReaction);
  return chainListener(api, client, ch);
}

async function chainListener(api, client, ch) {}
async function reactionHandler(api, client, ch) {}
