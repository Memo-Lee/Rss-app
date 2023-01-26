import express from "express";
const router = express.Router();
import Apkrss from "../controllers/apkrss";

router.post(
	"/",
	Apkrss.Create
);
router.get(
	"/:rss_id", Apkrss.Get
);
router.put("/:rss_id", Apkrss.Update);
router.delete("/:rss_id", Apkrss.Delete);

export default router;
