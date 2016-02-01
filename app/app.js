var express = require('express');
var app = express();
app.get('/html/baseData.html', function (req, res) {
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    console.log(req.route.path);
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get('http://10.2.144.38:8080/github/open-wb/app/html/baseData.html');
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });
});

app.get('/html/login.html', function (req, res) {
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    console.log(req.route.path);
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get('http://10.2.144.38:8080/github/open-wb/app/html/login.html');
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });
});

app.get('/html/fansGroup.html', function (req, res) {
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    console.log(req.route.path);
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get('http://10.2.144.38:8080/github/open-wb/app/html/fansGroup.html');
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });
});

app.get('/html/hotGroup.html', function (req, res) {
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    console.log(req.route.path);
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get('http://10.2.144.38:8080/github/open-wb/app/html/hotGroup.html');
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });
});

app.get('/v1/*/*', function (req, res) {
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    // 查询本机ip，这里需要根据实际情况选择get还是post
    console.log(req.originalUrl);
    var sreq = superagent.get('http://dev.useastore.com:8086' + req.originalUrl);
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });
});

app.listen(3001);
console.log('Express started on 127.0.0.1:3001');