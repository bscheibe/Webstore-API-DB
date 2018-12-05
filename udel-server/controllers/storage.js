
Product = require('../model/product');

exports.test=function(req,res,next){
	res.status(200).json({
        test: 'Good to go'
	});
}

exports.importing=function(req,res,next){
	let product = new Product({
		catagory: req.body.catagory,
    	price: req.body.price,
    	quantity: req.body.quantity,
		productName: req.body.productName,
    	description: req.body.description,
    	image: req.body.image
	});
	product.save(function (err, product) {
		if (err) { return next(err); }
		let productInfo = product.toJson();
		res.status(201).json({
			product: productInfo
		});
	});
};

exports.clothing=function(req,res,next){
    const query = req.query || {};

	Product.find({
		catagory : "clothing"
	}, function(err, products) {
		if (err) {
			return next(err);
		} else {
			console.log(products);
			res.status(200).json({
				products
			});
		}
	});
};

exports.accessories=function(req,res,next){
    const query = req.query || {};

	Product.find({
		catagory : "accessories"
	}, function(err, products) {
		if (err) {
			return next(err);
		} else {
			console.log(products);
			res.status(200).json({
				products
			});
		}
	});
};

exports.supplies=function(req,res,next){
    const query = req.query || {};

	Product.find({
		catagory : "supplies"
	}, function(err, products) {
		if (err) {
			return next(err);
		} else {
			console.log(products);
			res.status(200).json({
				products
			});
		}
	});
};