module.exports = {
  bind : function (app, assetPath) {

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/notify/landing', function (req, res) {
        var verify = req.query.verify;
        var auth = req.query.auth;
        res.render('alpha/notify/landing', {'assetPath' : assetPath, 'verify' : verify, 'auth' : auth})
    });

    /*-----------------------------------------------------*/
    app.get('/Verify/Verify_1', function (req, res) {
        res.render('Verify/Verify_1', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_2', function (req, res) {
        res.render('Verify/Verify_2', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_3', function (req, res) {
        res.render('Verify/Verify_3', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_4', function (req, res) {
        res.render('Verify/Verify_4', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_5', function (req, res) {
        res.render('Verify/Verify_5', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_6', function (req, res) {
        res.render('Verify/Verify_6', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_7', function (req, res) {
        res.render('Verify/Verify_7', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });
    
    /*-----------------------------------------------------*/
    app.get('/alpha/notify/medical-consent', function (req, res) {
        res.render('alpha/notify/medical-consent', {'assetPath' : assetPath, 'path' : req.query.path})
    });
    
    app.get('/alpha/notify/medical-care-1', function (req, res) {
        res.render('alpha/notify/medical-care-1', {'assetPath' : assetPath, 'path' : req.query.path})
    });

    app.get('/alpha/notify/medical-care-2', function (req, res) {
        res.render('alpha/notify/medical-care-2', {'assetPath' : assetPath, 'path' : req.query.path})
    });

    app.get('/alpha/notify/medical-care-3', function (req, res) {
        res.render('alpha/notify/medical-care-3', {'assetPath' : assetPath, 'path' : req.query.path})
    });

    app.get('/alpha/notify/medical-care-4', function (req, res) {
        res.render('alpha/notify/medical-care-4', {'assetPath' : assetPath, 'path' : req.query.path})
    });

    app.get('/alpha/notify/eyesight-treatment', function (req, res) {
        res.render('alpha/notify/eyesight-treatment', {'assetPath' : assetPath, 'path' : req.query.path})
    });

  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/
