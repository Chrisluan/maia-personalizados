const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });


const express = require('express')
const app = express()
const port = 3000
app.get('/teste', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



async function main() {
  const dbcon = process.env.mongodb;
  const client = new MongoClient(dbcon);

  try {
    await client.connect();
    const db = client.db("maia");
    const collection = db.collection("products");
    const produtos = await collection.find({}).toArray();

    produtos.forEach((produto) => console.log(produto.name));
  } catch (e) {
    console.error("Erro ao buscar produtos:", e);
  } finally {
    await client.close();
  }
}

main();

