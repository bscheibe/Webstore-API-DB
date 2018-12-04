const AuthenticationController = require('./controllers/authentication'),  
const ProductController = require('./controllers/product'),
      express = require('express'),
      passportService = require('./security/passport');
     
module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router(),
            authRoutes = express.Router(),
            otherRoutes = express.Router();

    apiRoutes.use('/auth', authRoutes);
    // /api/auth/register
    authRoutes.post('/register', AuthenticationController.register);
    // /api/auth/login
    authRoutes.post('/login', AuthenticationController.login);
    // /api/auth/authorize
    authRoutes.get('/authorize',passportService.requireAuth,AuthenticationController.authorize);
    // Our added routes for each catagory.
    apiRoutes.get('/clothing', ProductController.clothing);
    apiRoutes.get('/accessories', ProductController.accessories);
    apiRoutes.get('/supplies', ProductController.supplies);
    apiRoutes.get('/test', ProductController.test);

    otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
    
    otherRoutes.get('/checkout',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
        
    apiRoutes.use('/stuff',otherRoutes);
    app.use('/api', apiRoutes);
};