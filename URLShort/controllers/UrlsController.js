const Url = require("../models/shortUrl");

exports.all = (req, res) => {
  let urls = Url.all().then((objects) => {
    res.render("UrlLayout/index", { urls: objects });
  });
};

exports.store = (req, res) => {
  let urlObject = {};
  const { nanoid } = require("nanoid");
  urlObject.url = req.body.urlInicial;
  urlObject.hash = nanoid(10);
  Url.create(urlObject).then((id) => {

    console.log("Url's id:", id);
    return res.redirect("/");
  });
};

exports.getById = async (req, res) => {
  const hash = req.params.hash;
  const finalLetter = hash.toString();
  const isPlus = finalLetter.charAt(finalLetter.length - 1);
  if (isPlus == "+") {
    
    return res.redirect(`/${hash}/stadistics`);
  } else {
    console.log("HASH", hash);
    Url.findHash(hash).then((item) => {
      console.log(item);
      Url.changeCounter(item).then((id) => {
        console.log(id);
      });
      return res.redirect(item.url);
    });
  }
};

exports.stadistics = async (req, res) => {
  const hash = req.params.hash;
  console.log("HASH", hash);
  Url.findHash(hash.slice(0, -1)).then((item) => {
    console.log(item);

    res.render("UrlLayout/stadistics", { item: item });
  });
};