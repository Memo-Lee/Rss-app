import Apkrss from "../../models/apkrss";
import Boom from "boom";
import Parser from 'rss-parser';

const Get = async (req, res, next) => {
	const { rss_id } = req.params;

	if (!rss_id) {
		return next(Boom.badRequest("Missing paramter (:rss_id)"));
	}
	try {
		const apkrss = await Apkrss.findById(rss_id);

		res.json(apkrss);

	} catch (e) {
		next(e);
	}
};


const Create = async(req,res,next) => {
    
        let parser = new Parser();
        try {
        // 'https://www.apkmirror.com/apk/instagram/feed/'
        (async () => {
            let feed = await parser.parseURL('https://www.apkmirror.com/apk/instagram/feed/');
            feed.items.forEach(i => {
                    if (
                    !i.title.split(" ").includes("alpha") &&
                    !i.title.split(" ").includes("beta")
                    ) 
                    {
                        const apkrss = new Apkrss({
                            versionID : i.title.split(" ")[1],
                            pubDate :  i.pubDate,
                            variantID : i.guid.slice(i.guid.indexOf("=")+1)
                        });
                        const saveData = apkrss.save();
                        // res.json(saveData);
                    }
                });

            })();
        } catch (error) {
            res.status(400).json({
                status : 'fail',
                error
            })
        }
};

const Delete = async (req, res, next) => {
	const { rss_id } = req.params;

	try {
		const deleted = await Apkrss.findByIdAndDelete(rss_id);

		if (!deleted) {
			throw Boom.badRequest("RSS not found.");
		}

		res.json(deleted);
        
	} catch (e) {
		next(e);
	}
};

const Update = async (req, res, next) => {
	const { rss_id } = req.params;

	try {
		const updated = await Apkrss.findByIdAndUpdate(rss_id, req.body, {
			new: true,
		});
		res.json(updated);
	} catch (e) {
		next(e);
	}
};

export default {
    Get,
	Create,
    Delete,
    Update,
};
