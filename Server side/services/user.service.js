const { ObjectID } = require("mongodb");
let db = require("../database");

let client = db.getClient();
let url = db.getUrl();
let databaseName = db.getDatabase();
let collectionName = db.getAccountCollection();

exports.getUser = (request, response) => {
  const { username } = request.body;
  const { password } = request.body;

  client.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db(databaseName);
    dbo.collection(collectionName).findOne({ username: username, password: password }, function (err, result) {
      if (err) {
        response.status(500).send({ message: "An error occured while trying to find the account" });
      }
      else {
        if(result !== null){
          response.status(200).send({ message: "An account was found", res: result });
        }
        else{
          response.status(500).send({ message: "No account was found!", res: result});
        }
        
        console.log(result);
      }

    });
  })
};

exports.getUserByUsername = (request, response) => {
  const { username } = request.body;

  console.log(username);

  client.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db(databaseName);
    dbo.collection(collectionName).findOne({ username: username }, function (err, result) {
      if (err) {
        response.status(500).send({ message: "An error occured while trying to find the account" });
      }
      else {
        response.status(200).send({ message: "An account was found", res: result });
        console.log(result);
      }

    });
  })
};

exports.create = (req, response) => {
  const { username } = req.body;
  const { password } = req.body;

  let user = {
    username: username,
    password: password,
  };

  client.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db(databaseName);
    dbo.collection(collectionName).insertOne(user, (err, res) => {
      if (err) {
        response.status(500).send({ message: "An error occured while adding the user" });
      }
      else {
        response.status(200).send({ message: "User added successfully", result: res });
      }
      db.close();
    })
  })
};

exports.deleteUser = (req, res) => {
  const { username } = req.body;
  const { pass } = req.body;

  client.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db(databaseName);

    dbo.collection(collectionName).deleteOne({ username: username, password: pass }, (err, result) => {
      if (err) {
        res.status(500).send({ message: "Could not delete user" });
      }
      else {
        res.status(200).send({ data: result, message: "User successfully deleted!" });
      }
      db.close();
    })
  })

};

