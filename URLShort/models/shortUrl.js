const knex = require("../database/connection");
const appConfig = require("../configs/app");

exports.all = () => {
  return knex.select("*").from("urlsComplete");
};

exports.create = (urlObject) => {
  return knex("urlsComplete").insert({
    url: urlObject.url,
    hash: urlObject.hash,
    shortUrl: `http://localhost:${appConfig.expressPort}/${urlObject.hash}`,
  });
};

exports.findHash = (hash) => {
  return knex.select("*").from("urlsComplete").where("hash", hash).first();
};
exports.changeCounter = (item) => {
  return knex("urlsConplete")
    .update({ visited: item.visited + 1 })
    .where("id", item.id);
};