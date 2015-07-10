module.exports = {
  bind : function (app, assetPath) {

    var p1 = 'sprint-6';
    var p2 = 'sprint-7';
    var p3 = 'sprint-8';

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    /*-----------------------------------------------------*/
    /* DVLA VERIFY - DO NOT REMOVE/MODIFY THIS AREA!       */
    /*-----------------------------------------------------*/
    app.get('/verify/verify-1', function (req, res) {
        res.render('verify/verify-1', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/verify/verify-2', function (req, res) {
        res.render('verify/verify-2', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/verify/verify-3', function (req, res) {
        res.render('verify/verify-3', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/verify/verify-4', function (req, res) {
        res.render('verify/verify-4', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/verify/verify-5', function (req, res) {
        res.render('verify/verify-5', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/verify/verify-6', function (req, res) {
        res.render('verify/verify-6', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/verify/verify-7', function (req, res) {
        res.render('verify/verify-7', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    /*-----------------------------------------------------*/
    /* PROTOTYPE 1 - DO NOT REMOVE/MODIFY THIS AREA!       */
    /*-----------------------------------------------------*/
    app.get('/alpha/'+p1+'/landing', function (req, res) {
        res.render('alpha/'+p1+'/landing', {'assetPath' : assetPath, 'verify' : req.query.verify, 'auth' : req.query.auth})
    });

    app.get('/alpha/'+p1+'/new-or-renew', function (req, res) {
        res.render('alpha/'+p1+'/new-or-renew', {'assetPath' : assetPath})
    });

    app.get('/alpha/'+p1+'/your-details', function (req, res) {
        res.render('alpha/'+p1+'/your-details', {'assetPath' : assetPath})
    });

    app.get('/alpha/'+p1+'/medical-conditions', function (req, res) {
        res.render('alpha/'+p1+'/medical-conditions', {'assetPath' : assetPath})
    });
    
    app.get('/alpha/'+p1+'/summary', function (req, res) {
        res.render('alpha/'+p1+'/summary', {'assetPath' : assetPath, 'flow' : req.query.flow, 'conditions' : req.query.conditions})
    });
    
    app.get('/alpha/'+p1+'/finish', function (req, res) {
        res.render('alpha/'+p1+'/finish', {'assetPath' : assetPath})
    });
    
    /*-----------------------------------------------------*/
    app.get('/alpha/'+p1+'/diabetes-start', function (req, res) {
        res.render('alpha/'+p1+'/diabetes-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/diabetes-symptoms', function (req, res) {
        res.render('alpha/'+p1+'/diabetes-symptoms', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/hypoglycaemia-episodes', function (req, res) {
        res.render('alpha/'+p1+'/hypoglycaemia-episodes', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/'+p1+'/glaucoma-start', function (req, res) {
        res.render('alpha/'+p1+'/glaucoma-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/double-vision', function (req, res) {
        res.render('alpha/'+p1+'/double-vision', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/vision-control', function (req, res) {
        res.render('alpha/'+p1+'/vision-control', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/eyesight-standard', function (req, res) {
        res.render('alpha/'+p1+'/eyesight-standard', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/vision-condition', function (req, res) {
        res.render('alpha/'+p1+'/vision-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p1+'/another-condition', function (req, res) {
        res.render('alpha/'+p1+'/another-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-------- Medical Consent ---------------------------*/
    app.get('/alpha/'+p1+'/medical-consent', function (req, res) {
        res.render('alpha/'+p1+'/medical-consent', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });
    
    app.get('/alpha/'+p1+'/medical-care-1', function (req, res) {
        res.render('alpha/'+p1+'/medical-care-1', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/medical-care-2', function (req, res) {
        res.render('alpha/'+p1+'/medical-care-2', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/medical-care-3', function (req, res) {
        res.render('alpha/'+p1+'/medical-care-3', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/medical-care-4', function (req, res) {
        res.render('alpha/'+p1+'/medical-care-4', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/eyesight-treatment', function (req, res) {
        res.render('alpha/'+p1+'/eyesight-treatment', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/insulin-declaration', function (req, res) {
        res.render('alpha/'+p1+'/insulin-declaration', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/diabetic-care', function (req, res) {
        res.render('alpha/'+p1+'/diabetic-care', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/eyesight-dystrophies', function (req, res) {
        res.render('alpha/'+p1+'/eyesight-dystrophies', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/catmac-details', function (req, res) {
        res.render('alpha/'+p1+'/catmac-details', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/special-adaptations', function (req, res) {
        res.render('alpha/'+p1+'/special-adaptations', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p1+'/D497', function (req, res) {
        res.render('alpha/'+p1+'/D497', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    /*-----------------------------------------------------*/
    /* PROTOTYPE 2 - DO NOT REMOVE/MODIFY THIS AREA!       */
    /*-----------------------------------------------------*/
    app.get('/alpha/'+p2+'/landing', function (req, res) {
        res.render('alpha/'+p2+'/landing', {'assetPath' : assetPath, 'verify' : req.query.verify, 'auth' : req.query.auth})
    });

    app.get('/alpha/'+p2+'/new-or-renew', function (req, res) {
        res.render('alpha/'+p2+'/new-or-renew', {'assetPath' : assetPath})
    });

    app.get('/alpha/'+p2+'/your-details', function (req, res) {
        res.render('alpha/'+p2+'/your-details', {'assetPath' : assetPath})
    });

    app.get('/alpha/'+p2+'/medical-conditions', function (req, res) {
        res.render('alpha/'+p2+'/medical-conditions', {'assetPath' : assetPath, 'search': req.query.search})
    });

    app.get('/alpha/'+p2+'/review-conditions', function (req, res) {
        res.render('alpha/'+p2+'/review-conditions', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions': req.query.conditions})
    });

    app.get('/alpha/'+p2+'/eyesight-standard', function (req, res) {
        res.render('alpha/'+p2+'/eyesight-standard', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions': req.query.conditions})
    });

    app.get('/alpha/'+p2+'/eyesight-conditions', function (req, res) {
        res.render('alpha/'+p2+'/eyesight-conditions', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions': req.query.conditions})
    });
    
    app.get('/alpha/'+p2+'/medical-care-2', function (req, res) {
        res.render('alpha/'+p2+'/medical-care-2', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions': req.query.conditions, 'name': req.query.name,  'location': req.query.location})
    });
    
    app.get('/alpha/'+p2+'/medical-care-3', function (req, res) {
        res.render('alpha/'+p2+'/medical-care-3', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions': req.query.conditions, 'name': req.query.name,  'location': req.query.location})
    });

    app.get('/alpha/'+p2+'/summary', function (req, res) {
        res.render('alpha/'+p2+'/summary', {'assetPath' : assetPath, 'flow' : req.query.flow, 'conditions' : req.query.conditions})
    });
    
    app.get('/alpha/'+p2+'/finish', function (req, res) {
        res.render('alpha/'+p2+'/finish', {'assetPath' : assetPath})
    });

   /*-----------------------------------------------------*/
    app.get('/alpha/'+p2+'/diabetes-start', function (req, res) {
        res.render('alpha/'+p2+'/diabetes-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p2+'/diabetes-symptoms', function (req, res) {
        res.render('alpha/'+p2+'/diabetes-symptoms', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p2+'/hypoglycaemia-episodes', function (req, res) {
        res.render('alpha/'+p2+'/hypoglycaemia-episodes', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p2+'/insulin-declaration', function (req, res) {
        res.render('alpha/'+p2+'/insulin-declaration', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p2+'/your-vehicle', function (req, res) {
        res.render('alpha/'+p2+'/your-vehicle', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p2+'/special-controls', function (req, res) {
        res.render('alpha/'+p2+'/special-controls', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/'+p2+'/glaucoma-start', function (req, res) {
        res.render('alpha/'+p2+'/glaucoma-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-----------------------------------------------------*/
    /* PROTOTYPE 3 - DO NOT REMOVE/MODIFY THIS AREA!       */
    /*-----------------------------------------------------*/
    app.get('/alpha/'+p3+'/landing', function (req, res) {
        res.render('alpha/'+p3+'/landing', {'assetPath' : assetPath, 'verify' : req.query.verify, 'auth' : req.query.auth})
    });

    app.get('/alpha/'+p3+'/new-or-renew', function (req, res) {
        res.render('alpha/'+p3+'/new-or-renew', {'assetPath' : assetPath})
    });

    app.get('/alpha/'+p3+'/your-details', function (req, res) {
        res.render('alpha/'+p3+'/your-details', {'assetPath' : assetPath})
    });

    app.get('/alpha/'+p3+'/medical-conditions', function (req, res) {
        res.render('alpha/'+p3+'/medical-conditions', {'assetPath' : assetPath})
    });
    
    app.get('/alpha/'+p3+'/summary', function (req, res) {
        res.render('alpha/'+p3+'/summary', {'assetPath' : assetPath, 'flow' : req.query.flow, 'conditions' : req.query.conditions})
    });
    
    app.get('/alpha/'+p3+'/finish', function (req, res) {
        res.render('alpha/'+p3+'/finish', {'assetPath' : assetPath})
    });
    
    /*-----------------------------------------------------*/
    app.get('/alpha/'+p3+'/diabetes-start', function (req, res) {
        res.render('alpha/'+p3+'/diabetes-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/diabetes-symptoms', function (req, res) {
        res.render('alpha/'+p3+'/diabetes-symptoms', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/hypoglycaemia-episodes', function (req, res) {
        res.render('alpha/'+p3+'/hypoglycaemia-episodes', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/hypoglycaemia-severe', function (req, res) {
        res.render('alpha/'+p3+'/hypoglycaemia-severe', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/hypoglycaemia-warning', function (req, res) {
        res.render('alpha/'+p3+'/hypoglycaemia-warning', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/hypoglycaemia-symptoms-information', function (req, res) {
        res.render('alpha/'+p3+'/hypoglycaemia-symptoms-information', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/eyesight', function (req, res) {
        res.render('alpha/'+p3+'/eyesight', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/'+p3+'/glaucoma-start', function (req, res) {
        res.render('alpha/'+p3+'/glaucoma-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/double-vision', function (req, res) {
        res.render('alpha/'+p3+'/double-vision', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/vision-control', function (req, res) {
        res.render('alpha/'+p3+'/vision-control', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/eyesight-standard', function (req, res) {
        res.render('alpha/'+p3+'/eyesight-standard', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/vision-condition', function (req, res) {
        res.render('alpha/'+p3+'/vision-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+p3+'/another-condition', function (req, res) {
        res.render('alpha/'+p3+'/another-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-------- Medical Consent ---------------------------*/
    app.get('/alpha/'+p3+'/medical-consent', function (req, res) {
        res.render('alpha/'+p3+'/medical-consent', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });
    
    app.get('/alpha/'+p3+'/medical-care-1', function (req, res) {
        res.render('alpha/'+p3+'/medical-care-1', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/medical-care-2', function (req, res) {
        res.render('alpha/'+p3+'/medical-care-2', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/medical-care-3', function (req, res) {
        res.render('alpha/'+p3+'/medical-care-3', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/medical-care-4', function (req, res) {
        res.render('alpha/'+p3+'/medical-care-4', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/eyesight-treatment', function (req, res) {
        res.render('alpha/'+p3+'/eyesight-treatment', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/insulin-declaration', function (req, res) {
        res.render('alpha/'+p3+'/insulin-declaration', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/diabetic-care', function (req, res) {
        res.render('alpha/'+p3+'/diabetic-care', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/eyesight-dystrophies', function (req, res) {
        res.render('alpha/'+p3+'/eyesight-dystrophies', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/catmac-details', function (req, res) {
        res.render('alpha/'+p3+'/catmac-details', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/special-adaptations', function (req, res) {
        res.render('alpha/'+p3+'/special-adaptations', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+p3+'/D497', function (req, res) {
        res.render('alpha/'+p3+'/D497', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/
