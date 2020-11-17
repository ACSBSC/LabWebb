const router = require("express").Router();
const UrlsController = require("../controllers/UrlsController");

router.get("/", UrlsController.all);
router.get("/:hash", UrlsController.getById);
router.post("/", UrlsController.store);
router.get("/:hash/stadistics", UrlsController.stadistics);