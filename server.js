const port = 3000;
const express = require("express")
const app = express()
app.use(express.json())
let fruit = [
    {"id": "1", "fruit": "Apple", "size": "Large", "color": "Red"}
]

app.get('/', (req, res) =>{
    res.header("Content-Type", "text/html; charset=utf8");
    res.status(200);
    res.send(fruit);
})
//Create:
app.post("/fruit", (req, res) => {
    console.log(req.body);
    let newFr = req.body;
    fruit.push(newFr);
    res.send(JSON.stringify (req.body));
})
//Read:
app.get("/fruit", (req, res) => {
    res.header("Content-Type", "Application/json");
    res.status(200);
    res.json(fruit);
})
//Update:
app.put("/fruit/:id", (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    let newFr = req.body;
    fruit[id] = newFr;
    res.send(JSON.stringify (req.body));
})
//Delete:
app.delete('/fruit/:id', (req, res) => {
    let id = req.params.id;
    fruit.splice(id, 1);
    res.send(JSON.stringify (req.body));
});




app.listen(port, () => {
    console.log(`Port: ${port}`);
});