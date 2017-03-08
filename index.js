var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

var port = 3000;
app.listen(port, function ()
{
   console.log('listening on port', port);
});

var messages = [];

app.get('/messages', function (req, res, next)
{
    res.status(200).json({
       messages: messages
    });
});

app.post('/messages', function (req, res, next)
{
   console.log(req.body);
   var message = req.body.message;
   if(message)
   {
      messages.push(new Message(message));
   }
   res.status(200).json({
      messages: messages
   })
});

function Message(message, date = new Date())
{
   this.message = message;
   this.time = date;
}