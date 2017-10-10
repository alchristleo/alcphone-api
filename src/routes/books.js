import express from "express";
import request from 'request-promise';
import authenticate from '../middlewares/authenticate';
import { parseString } from 'xml2js';

const router = express.Router();
router.use(authenticate);

router.get("/search", (req, res) => {
	request.get(`https://www.goodreads.com/search/index.xml?key=YlaJm2zkgZ8N1Zb12H8SfQ&q=${req.query.q}`)
		.then(results => parseString(results, (err, goodreadsResult) => 
			res.json({
				books: goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(
					work => ({
						bookId: work.best_book[0].id[0]._,
						title: work.best_book[0].title[0],
						author: work.best_book[0].author[0].name[0],
						cover: [work.best_book[0].image_url[0]],
					})
				)
			}) 
		));

	// res.json({
	// 	application: [
	//       {
	//         appId: 1,
	//         name: "Facebook",
	//         developer: "Facebook, Inc",
	//         logo: "http://is1.mzstatic.com/image/thumb/Purple118/v4/57/3d/d9/573dd964-6678-ec2a-a4ef-5e15003afa97/source/1200x630bb.jpg"
	//       },
	//       {
	//         appId: 2,
	//         name: "Twitter",
	//         developer: "Twitter, Inc",
	//         logo: "http://is5.mzstatic.com/image/thumb/Purple118/v4/d9/99/0f/d9990fd7-4696-ee87-3e05-3976143c20ba/source/1200x630bb.jpg"
	//       }
  //   	]
	// });
});

router.get("/list", (req, res) => {
	res.json({
		application: [
	      {
	        bookId: 1,
	        title: "Facebook",
	        author: "Facebook, Inc",
	        cover: "http://is1.mzstatic.com/image/thumb/Purple118/v4/57/3d/d9/573dd964-6678-ec2a-a4ef-5e15003afa97/source/1200x630bb.jpg"
	      },
	      {
	        bookId: 2,
	        title: "Twitter",
	        author: "Twitter, Inc",
	        cover: "http://is5.mzstatic.com/image/thumb/Purple118/v4/d9/99/0f/d9990fd7-4696-ee87-3e05-3976143c20ba/source/1200x630bb.jpg"
	      }
    	]
	});
});

export default router;