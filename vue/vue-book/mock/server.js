let http = require('http');
let url = require('url');
let fs = require('fs');

function read(callback) { //用来读取book.json中的数据
  fs.readFile('./book.json','utf8',function (err,data) {
      if(err || data===''){
        return callback([]); //如果数据为空 传递空数组
      }
      callback(JSON.parse(data));
  })
}
let sliders = require('./sliders');
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  // 所有接口都以 /api开头  /api/sliders
  if(pathname === '/api/sliders'){
      res.end(JSON.stringify(sliders));
  }else if(pathname=== '/api/hot'){
    read(function (books) { //取倒序6本书
      books = books.reverse().slice(0,6);
      res.setHeader('content-type','application/json;charset=utf-8');
      res.end(JSON.stringify(books))
    });
  }
}).listen(3000);
