module.exports = {
  bind : function (app, assetPath) {

    var version = 'sprint-6';

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/landing', function (req, res) {
        res.render('alpha/'+version+'/landing', {'assetPath' : assetPath, 'verify' : req.query.verify, 'auth' : req.query.auth})
    });

    app.get('/alpha/new-or-renew', function (req, res) {
        res.render('alpha/'+version+'/new-or-renew', {'assetPath' : assetPath})
    });

    app.get('/alpha/your-details', function (req, res) {
        res.render('alpha/'+version+'/your-details', {'assetPath' : assetPath})
    });

    app.get('/alpha/your-details-nodrivernumber', function (req, res) {
        res.render('alpha/'+version+'/your-details-nodrivernumber', {'assetPath' : assetPath})
    });
    
    app.get('/alpha/medical-conditions', function (req, res) {
        res.render('alpha/'+version+'/medical-conditions', {'assetPath' : assetPath})
    });
    
    app.get('/alpha/summary', function (req, res) {
        res.render('alpha/'+version+'/summary', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });
    
    app.get('/alpha/finish', function (req, res) {
        res.render('alpha/'+version+'/finish', {'assetPath' : assetPath})
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
    app.get('/alpha/diabetes-start', function (req, res) {
        res.render('alpha/'+version+'/diabetes-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/diabetes-symptoms', function (req, res) {
        res.render('alpha/'+version+'/diabetes-symptoms', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/hypoglycaemia-episodes', function (req, res) {
        res.render('alpha/'+version+'/hypoglycaemia-episodes', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/diabetes-symptoms', function (req, res) {
        res.render('alpha/'+version+'/diabetes-symptoms', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/glaucoma-start', function (req, res) {
        res.render('alpha/'+version+'/glaucoma-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/double-vision', function (req, res) {
        res.render('alpha/'+version+'/double-vision', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/vision-control', function (req, res) {
        res.render('alpha/'+version+'/vision-control', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/eyesight-standard', function (req, res) {
        res.render('alpha/'+version+'/eyesight-standard', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/vision-condition', function (req, res) {
        res.render('alpha/'+version+'/vision-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/another-condition', function (req, res) {
        res.render('alpha/'+version+'/another-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-------- Medical Consent ---------------------------*/
    app.get('/alpha/medical-consent', function (req, res) {
        res.render('alpha/'+version+'/medical-consent', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });
    
    app.get('/alpha/medical-care-1', function (req, res) {
        res.render('alpha/'+version+'/medical-care-1', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/medical-care-2', function (req, res) {
        res.render('alpha/'+version+'/medical-care-2', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/medical-care-3', function (req, res) {
        res.render('alpha/'+version+'/medical-care-3', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/medical-care-4', function (req, res) {
        res.render('alpha/'+version+'/medical-care-4', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/eyesight-treatment', function (req, res) {
        res.render('alpha/'+version+'/eyesight-treatment', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/insulin-declaration', function (req, res) {
        res.render('alpha/'+version+'/insulin-declaration', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/diabetic-care', function (req, res) {
        res.render('alpha/'+version+'/diabetic-care', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/eyesight-dystrophies', function (req, res) {
        res.render('alpha/'+version+'/eyesight-dystrophies', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/catmac-details', function (req, res) {
        res.render('alpha/'+version+'/catmac-details', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/special-adaptations', function (req, res) {
        res.render('alpha/'+version+'/special-adaptations', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/D497', function (req, res) {
        res.render('alpha/'+version+'/D497', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/
