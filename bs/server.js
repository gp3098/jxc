var express = require('express');
var app = express();

app.use(express.static('www'));

app.get('/bs', function (req, res) {
   res.sendFile( __dirname + "/bs" + "index.html" );

})
app.get('/bs/showData',function(req,res){
  data =[{
    id:1,
    cname:"zhangsan"
  },{
    id:2,
    cname:"lisi"
  }];
  console.log(data);
  res.end(JSON.stringify(data))
})


var server = app.listen(88, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})