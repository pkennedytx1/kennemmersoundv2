const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
var admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.addInvoice = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {
        const invoice = req.body;
        db.collection('invoices').add(invoice).then(res => {
            return res
        }).catch((error) => console.log(error))
    })
    return res.json()
})