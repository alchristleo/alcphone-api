import express from "express";

const router = express.Router();

router.get("/search", (req, res) => {
	res.json({
		application: [
	      {
	        appId: 1,
	        name: "Facebook",
	        developer: "Facebook, Inc",
	        logo: "http://is1.mzstatic.com/image/thumb/Purple118/v4/57/3d/d9/573dd964-6678-ec2a-a4ef-5e15003afa97/source/1200x630bb.jpg"
	      },
	      {
	        appId: 2,
	        name: "Twitter",
	        developer: "Twitter, Inc",
	        logo: "http://is5.mzstatic.com/image/thumb/Purple118/v4/d9/99/0f/d9990fd7-4696-ee87-3e05-3976143c20ba/source/1200x630bb.jpg"
	      }
    	]
	});
});

export default router;