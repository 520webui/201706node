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
function write(data,callback) { //用来写入到json中的方法
  fs.writeFile('./book.json',JSON.stringify(data),callback)
}

let sliders = require('./sliders');
http.createServer(function (req,res) {
  let {pathname,query} = url.parse(req.url,true);
  let id = query.id; //看路径后面是否有id
  // 所有接口都以 /api开头  /api/sliders
  if(pathname === '/api/sliders'){
      res.end(JSON.stringify(sliders));
  }else if(pathname=== '/api/hot'){
    read(function (books) { //取倒序6本书
      books = books.reverse().slice(0,6);
      res.setHeader('content-type','application/json;charset=utf-8');
      res.end(JSON.stringify(books))
    });
  }else if(pathname === '/api/book'){
    switch(req.method){
      case 'GET': //查询一个返回对象 查询所有返回数组
        if(id){

        }else{
          read(function (books) {
            res.end(JSON.stringify(books))
          });
        }
        break;
      case 'POST': //返回增加的那一项
        let str = '';
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
          let modifyBook = JSON.parse(str);
          read(function (books) {
            modifyBook.id = books.length>0?books[books.length-1].id+1:1;
            books.push(modifyBook);
            write(books,function () {
              res.end(JSON.stringify(modifyBook));
            })
          });
        });
        break;
      case 'PUT'://返回修改的那一项
        break;
      case 'DELETE': //返回空对象
        break;
    }
  }
}).listen(3000);
