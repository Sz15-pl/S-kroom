# Kroom-JS

_A lightweight package to short your url´s_

## Starting 🚀


### Pre-requisitos 📋

_What do i need to use this module?_

```
Node.js
VS-code
NPM
Http module
Https module
(Http and Https modules are used to make the request on my server.)
```

### Instalación 🔧



_At first_

```
npm install --save kroom-js
```

## How works this module? ⚙️

_Well, this module works by making "GET" request to my API url shortener server and then processing the json response._

   EXAMPLE:
   ```
var kroom = require('kroom-js');

kroom.shorten('https://google.com', function(res, err) {
    if(err){
        console.error(err)
    }
var data = JSON.parse(res)
console.log(data.url) 
console.log(data.status)
    
});
```




## Build with🛠️



* [NodeJS](https://nodejs.org/en/) -
* [Https](https://nodejs.org/api/https.html) - 
* [Http](https://nodejs.org/api/http.html) -


## Autors ✒️



* **Skitt** - *Unique Autor* - [skitt](https://github.com/Sz15-pl)




## License 📄

This project is under ISC license.

---
⌨️ with ❤️ by [skitt](https://github.com/Sz15-pl) 😊