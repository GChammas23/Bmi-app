let db = require("../database");

let client = db.getClient();
let url = db.getUrl();
let databaseName = db.getDatabase();
let collectionName = db.getBmiValuesCollection();

exports.addBmi = (req, response) => {
    const { height } = req.body;
    const { weight } = req.body;
    const { bmi } = req.body;
    const { username } = req.body;

    let record = {
        user_username: username,
        user_height: height,
        user_weight: weight,
        bmi: bmi,
    };

    client.connect(url, (err, db) => {
        if (err) throw err;
        let dbo = db.db(databaseName);
        dbo.collection(collectionName).insertOne(record, (err, res) => {
            if (err) {
                response.status(500).send({ message: "An error occured while adding the record" });
            }
            else {
                response.status(200).send({ message: "Record added successfully", result: res });
            }
            db.close();
        })
    })
};