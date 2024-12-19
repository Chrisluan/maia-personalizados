const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const express = require('express');
const app = express();
const port = 3000;

app.get('/getProducts', async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    res.status(500).send("Erro no servidor");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function getData() {
  const dbcon = process.env.mongodb;
  const client = new MongoClient(dbcon);

  try {
    await client.connect();
    const db = client.db("maia");
    const collection = db.collection("products");
    const produtos = await collection.find({}).toArray();

    return produtos;
  } catch (e) {
    console.error("Erro ao buscar produtos:", e);
  } finally {
    await client.close();
  }
}
