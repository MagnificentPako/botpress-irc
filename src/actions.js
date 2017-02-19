import _ from "lodash"

const createMessage = (channel, txt) => {
  return {
    platform: "irc",
    type: "message",
    text: txt,
    raw: {
      to: channel
    }
  }
}

module.exports = {
  createMessage
}
