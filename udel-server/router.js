const AuthenticationController = require('./controllers/authentication'),  
const StorageController = require('./controllers/storage'),
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
    apiRoutes.get('/clothing', StorageController.clothing);
    apiRoutes.get('/accessories', StorageController.accessories);
    apiRoutes.get('/supplies', StorageController.supplies);
    apiRoutes.get('/test', StorageController.test);

    otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
    
    otherRoutes.get('/checkout',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
        
    apiRoutes.use('/stuff',otherRoutes);
    app.use('/api', apiRoutes);
};