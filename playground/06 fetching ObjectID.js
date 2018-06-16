// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID }  = require('mongodb');


// this is a method that takes two argument
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('We are connected');


  /////////////////////////////////////////////////
  // this is the part where we can fetch any data from the server
    // to fetch any data using ObjectID
      // you have to use the ObjectID method
  db.collection('Todos').find({
    _id: new ObjectID('5b22e5eb9434a7987cfbf7e4')
  }).toArray().then((docs) => {
    console.log(docs)
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch todos', err)
  })


  db.close();
});