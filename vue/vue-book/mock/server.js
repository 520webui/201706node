let http = require('http');
let url = require('url');

let sliders = require('./sliders');
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  // 所有接口都以 /api开头  /api/sliders
  if(pathname === '/api/sliders'){
      res.end(JSON.stringify(sliders));
  }
}).listen(3000);
