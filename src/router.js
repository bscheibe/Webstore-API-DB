const AuthenticationController = require('./controllers/authentication'),  
      StorageController = require('./controllers/storage'),
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

    // Our Routes //
    // Test routes to check for regestering users.
    apiRoutes.get('/users', AuthenticationController.returnusers);
    apiRoutes.get('/test', StorageController.test);

    // Return a JSON array of the product records in each catagory.
    apiRoutes.get('/clothing', StorageController.clothing);
    apiRoutes.get('/accessories', StorageController.accessories);
    apiRoutes.get('/supplies', StorageController.supplies);

    // Insert a JSON object into the database as a record.
    apiRoutes.post('/import', StorageController.importing);

    // Secure checkout transaction. Expects a token that is returned from a login/regestration.
    authRoutes.put('/transaction', passportService.requireAuth, AuthenticationController.transaction);
    // End Our Routes //

    otherRoutes.get('/info',passportService.requireAuth,function(req,res,next){
        res.json({user: req.user.toJson()})});
        
    apiRoutes.use('/stuff',otherRoutes);
    app.use('/api', apiRoutes);
};