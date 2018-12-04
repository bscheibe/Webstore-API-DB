
Product = require('../model/product');

exports.test=function(req,res,next){
	res.status(200).json({
        test: 'Good to go'
	});
}

exports.clothing=function(req,res,next){
    const query = req.query || {};

	Product.apiQuery(query)
		.select('clothing')
		.then(clothing => {
			res.json(clothing);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
        });
};

exports.accessories=function(req,res,next){
    const query = req.query || {};

	Product.apiQuery(query)
		.select('accessories')
		.then(accessories => {
			res.json(accessories);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
        });
};

exports.supplies=function(req,res,next){
    const query = req.query || {};

	Product.apiQuery(supplies)
		// limit the information returned (server side) – e.g. no password
		.select('supplies')
		.then(supplies => {
			res.json(supplies);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
        });
};