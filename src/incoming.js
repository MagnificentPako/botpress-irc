import outgoing from "./outgoing"

module.exports = (bp, irc) => {
  irc.addListener("message", (from, to, message) => {
      if(to === irc.nick) {
        bp.middlewares.sendIncoming({
            platform: "irc",
            type: "pm",
            user: from,
            text: message,
            raw: {
              from: from,
              message: message
            }
          })
      }else{
        bp.middlewares.sendIncoming({
          platform: "irc",
          type: "message",
          user: from,
          channel: to,
          text: message,
          raw: {}
        })
      }
  })
  /*irc.addListener("pm", function(from, message) {
  bp.middlewares.sendIncoming({
      platform: "irc",
      type: "pm",
      user: from,
      text: message,
      raw: {
        from: from,
        message: message
      }
    })
  })*/
}
