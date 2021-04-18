let express = require(`express`);
let app = express();
let port = 8000;

app.get(`/`, (req, res) => {
    res.send(`I am Nina`)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});