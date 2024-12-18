const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

export  async function main() {
  const dbcon = process.env.mongodb;

  // Conexão com o cliente MongoDB
  const client = new MongoClient(dbcon);
  try {
    // Conecta ao MongoDB
    await client.connect();

    // Acessa o banco de dados "maia" e a coleção "produtos"
    const db = client.db("maia");
    const collection = db.collection("products");

    // Busca todos os documentos da coleção "produtos"
    const produtos = await collection.find({}).toArray();

    // Exibe os produtos no console
    produtos.forEach((produto) => console.log(produto.name));
  } catch (e) {
    console.error("Erro ao buscar produtos:", e);
  } finally {
    // Fecha a conexão com o cliente
    await client.close();
  }
}
main();