var http = require("http")
var https = require("https")

module.exports = {
  shorten: function(url, cb) {
    if (typeof cb === "function") {
      https.get('https://www.kroom.tk/short?url=' + encodeURIComponent(url), res => {
        res.on('data', chunk => {
          cb(chunk.toString())
        })
      }).on("error", err => {
        cb(null, err)
      })
    } else {
      return new Promise((resolve, reject) => {
        https.get('https://www.kroom.tk/short?url=' + encodeURIComponent(url), res => {
          res.on('data', chunk => {
            resolve(chunk.toString())
          })
        }).on("error", err => {
          reject(err)
        })
      })
    }
}
}