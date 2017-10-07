import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        {"id": 1, "firstName": "Thitita", "lastName": "Yothaya", "email": "a@b.com"},
        {"id": 2, "firstName": "Reso", "lastName": "Fufu", "email": "rto@mon.com"},
        {"id": 3, "firstName": "Fifi", "lastName": "Koy", "email": "ert23@gmail.com"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
