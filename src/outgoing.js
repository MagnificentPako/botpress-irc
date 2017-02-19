const handlePromise = (next,promise) => {
  return promise.then(res => {
    next()
    return res
  })
  .catch(err => {
    next(err)
    throw err
  })
}

const handleMessage = (event, next, irc) => {
  if(event.platform !== "irc" || event.type !== "message") {
    return next()
  }
  const channel = event.raw.to
  const text = event.text
  irc.say(channel, text)
  next()
}

module.exports = {
  "message": handleMessage,
  "pm": handleMessage,
  pending: {}
}
