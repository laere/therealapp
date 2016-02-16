var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/todosAPI');

var Todo = require('../models/todosModel');

var app = express();

var port = process.env.PORT || 3000;


var todosRouter = express.Router();


todosRouter.route('/todos')

  .get(function(req,res) {
      var query = {};
      if(req.query.id) {
        query.id = req.query.id
      }
      Todo.find(query, function(err, todos) {
          if(err) {
            res.status(500).send(err);
          } else {
              res.json(todos);
          }
      });
  });

todosRouter.route('/todos/:todoId')
  .get(function(req,res) {

      Todo.findById(rq.params.todosId, function(err, todo) {
          if(err) {
            res.status(500).send(err);
          } else {
              res.json(todo);
          }
      });
  });

app.use('/api', todosRouter);



app.get('/', function(req, res) {
  res.send('welcome to my api');
});

app.listen(port, function() {
  console.log('running on port ' + port);
});
