



  
var kroom = require('kroom-js');

kroom.shorten('https://google.com', function(res, err) {
    if(err){
        console.error(err)
    }
var data = JSON.parse(res)
console.log(data.url) 
console.log(data.status)
    
});

