module.exports = {
  bind : function (app, assetPath) {

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

    /*-----------------------------------------------------*/
    app.get('/COA_2/2COA_2Aquery', function (req, res) {
      var yinhouse = req.query.housenum;
      var yinpostcode = req.query.postcode;
  
      var BROKEN ="";
      var BROKEN2 ="";

      if (yinhouse != "" && yinpostcode != ""){
        BROKEN = yinhouse;
        BROKEN2 = yinpostcode;

        res.render('COA_2/2COA_A_alt', {'assetPath' : assetPath, 'ROUTECHOICE' : BROKEN, 'ROUTECHOICE2' : BROKEN2 })
      }  
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/BINGO', function (req, res) {
      var yin = req.query.BINGO;
      if (yin == "route1"){
        res.render('Testsummary', {'assetPath' : assetPath, 'ROUTECHOICE' : yin})
      } else { 
        res.render('Testsummary2', {'assetPath' : assetPath, 'ROUTECHOICE' : yin})
      }
    });

    /*-----------------------------------------------------*/
    app.get('/HOUSE', function (req, res) {
      var yin2 = req.query.HOUSE;
      if (yin2 == "route1"){
        res.render('Testsummary', {'assetPath' : assetPath, 'ROUTECHOICE' : yin2})
      } else { 
        res.render('Testsummary2', {'assetPath' : assetPath, 'ROUTECHOICE' : yin2})
      }
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/EpilepsyDecsion1', function (req, res) {
      var yin3a = req.query.EpilepsyDecsion1a;
      var yin3b = req.query.EpilepsyDecsion1b;
      var yin3c = req.query.EpilepsyDecsion1c;
      if (yin3a == "sad" || yin3a == "happy"){
        res.render('Notify/Epilepsy2', {'assetPath' : assetPath, 'ROUTECHOICE' : yin3a})
      } else if (yin3b == "sad" || yin3b == "happy") { 
        res.render('Notify/Epilepsy3', {'assetPath' : assetPath, 'ROUTECHOICE' : yin3b})
      } else if (yin3c == "sad" || yin3c == "happy") {
        res.render('Notify/Epilepsy5', {'assetPath' : assetPath, 'ROUTECHOICE' : yin3c})
      }
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/Notify6', function (req, res) {
      var yin6a = req.query.Notify6a;
      var yin7a = req.query.Notify6b;
      var yin8a = "happy"
      if (yin6a == "happy" ){
        res.render('Notify/Notify_6a', {'assetPath' : assetPath, 'ROUTECHOICE' : yin8a})
      } else if (yin7a == "happy" ) { 
        res.render('Notify/Epilepsy1', {'assetPath' : assetPath, 'ROUTECHOICE' : yin8a})
      }
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/Notify6a', function (req, res) {
      var yin8b = "happy"
      res.render('Notify/Epilepsy1', {'assetPath' : assetPath, 'ROUTECHOICE' : yin8b})
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/Notify7', function (req, res) {
      var yin4 = req.query.Notify7a;
      if (yin4 == "happy"){
        res.render('Notify/Notify_8', {'assetPath' : assetPath, 'ROUTECHOICE' : yin4})
      } else if (yin4 == "sad") { 
        res.render('Notify/Notify_8', {'assetPath' : assetPath, 'ROUTECHOICE' : yin4})
      }
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/Notify8', function (req, res) {
      var yin5 = req.query.Notify8a;
      if (yin5 == "happy"){
        res.render('Notify/hypoglycaemia', {'assetPath' : assetPath, 'ROUTECHOICE' : yin5})
      } else if (yin5 == "sad") { 
        res.render('Notify/hypoglycaemia', {'assetPath' : assetPath, 'ROUTECHOICE' : yin5})
      }
    });

    /*-----------------------------------------------------*/
    app.get('/Notify/hypoglycaemia1', function (req, res) {
      var yin6 = req.query.hypo1a;
      var yin7 = req.query.hypo2a;
      var yin8 = "sad"
      if (yin6 == "sad" || yin7== "sad"){
        res.render('Notify/Epilepsy1', {'assetPath' : assetPath, 'ROUTECHOICE' : 'sad'})
      } else { 
        res.render('Notify/Notify_6', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      }
    });

    /*-----------------------Notify Diab------------------*/
    app.get('/NotifyDiab/YourCAREcheck', function (req, res) {
      var yin10 = req.query.eye1;
      res.render('NotifyDiab/YourCARE', {'assetPath' : assetPath, 'ROUTECHOICE' : yin10})
    });
    
    /*---comes form YourCARE----------------------------------------------------*/
    app.get('/NotifyDiab/hypocheck', function (req, res) {
      var yin11 = req.query.care1;
      if (yin11 == "happy"|| yin11 == "sad"){
        res.render('NotifyDiab/hypoglycaemia', {'assetPath' : assetPath, 'ROUTECHOICE' : yin11})
      } else if (yin11 == "MOREINFOhappy") {
        res.render('NotifyDiab/extrainfo', {'assetPath' : assetPath, 'ROUTECHOICE2' : 'happy', 'MOREINFOCHECK' :"YES"})
      } else if (yin11 == "MOREINFOsad") {
        res.render('NotifyDiab/extrainfo', {'assetPath' : assetPath, 'ROUTECHOICE2' : 'sad', 'MOREINFOCHECK' :"YES"})
      }
    });

    /*---comes form extrainfo----------------------------------------------------*/
    app.get('/NotifyDiab/conadd1', function (req, res) {
      var yin12 = req.query.exinfo1;
      res.render('NotifyDiab/consultantAddress', {'assetPath' : assetPath, 'ROUTECHOICE' : yin12})
    });

    /*---comes form consultantAddress----------------------------------------------------*/
    app.get('/NotifyDiab/confirmadd1', function (req, res) {
      var yin13 = req.query.sub;
      res.render('NotifyDiab/confirmaddress', {'assetPath' : assetPath, 'ROUTECHOICE' : yin13})
    });

    /*---comes form confirmAddress----------------------------------------------------*/
    app.get('/NotifyDiab/hypocheck2', function (req, res) {
      var yin13 = req.query.sub;
      res.render('NotifyDiab/hypoglycaemia', {'assetPath' : assetPath, 'ROUTECHOICE' : yin13})
    });

    /*---comes form confirmAddress----------------------------------------------------*/
    app.get('/NotifyDiab/hypocheck2a', function (req, res) {
      var yin16 = req.query.hypogroup1;
      var yin17 = req.query.hypogroup2;
      if (yin17== "sad"){
        res.render('NotifyDiab/hypoglycaemia2', {'assetPath' : assetPath, 'ROUTECHOICE' : 'sad'})
      } else { 
        res.render('NotifyDiab/hypoglycaemia2', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      }
    });

    /*---comes form hypoglycaemia2----------------------------------------------------*/
    app.get('/NotifyDiab/Lasereyes', function (req, res) {
      var yin18 = req.query.hypo1a;
      var yin19 = req.query.hypo2a;
      if (yin18== "sad" || yin19== "sad"){
        res.render('NotifyDiab/Lasereyes', {'assetPath' : assetPath, 'ROUTECHOICE' : 'sad'})
      } else { 
        res.render('NotifyDiab/Lasereyes', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      }
    });

    /*---comes form lasereyes----------------------------------------------------*/
    app.get('/NotifyDiab/specialcarcheck', function (req, res) {
      var yin18a = req.query.eye1;
      res.render('NotifyDiab/specialcar', {'assetPath' : assetPath, 'ROUTECHOICE' : yin18a})
    });

    /*---comes form specialcar----------------------------------------------------*/
    app.get('/NotifyDiab/D497check', function (req, res) {
      var yin20 = req.query.specialgroup1;
      if (yin20== "yessad"){
        res.render('NotifyDiab/D497', {'assetPath' : assetPath, 'ROUTECHOICE' : 'sad'})
      } else if (yin20== "yeshappy") { 
        res.render('NotifyDiab/D497', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      } else if (yin20== "nohappy") { 
        res.render('NotifyDiab/summary', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      } else if (yin20== "nosad") { 
        res.render('NotifyDiab/summary', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      } else { 
        res.render('NotifyDiab/summary', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      }
    });

    /*---comes form D497 ----------------------------------------------------*/
    app.get('/NotifyDiab/summary', function (req, res) {
      var yin21 = req.query.sub;
      res.render('NotifyDiab/summary', {'assetPath' : assetPath, 'ROUTECHOICE' : yin21})
    });

    /*---comes form Summary----------------------------------------------------*/
    app.get('/NotifyDiab/finish', function (req, res) {
      var yin18b = req.query.sub;
      if (yin18b== "happy" ){
        res.render('NotifyDiab/FinishHAPPY', {'assetPath' : assetPath, 'ROUTECHOICE' : 'sad'})
      } else { 
        res.render('NotifyDiab/FinishSAD', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
      }
    });
  
    /*-----------------------------------------------------*/
    app.get('/NotifyDiab/Verify', function (req, res) {
        res.render('NotifyDiab/Verify', {'assetPath' : assetPath, 'VERIFIER_CHOICE' : 'verizon'})
    });

    /*-----------------------------------------------------*/
    app.get('/NotifyDiab/Signin', function (req, res) {
        res.render('NotifyDiab/Signin', {'assetPath' : assetPath, 'VERIFIER_CHOICE' : 'verizon'})
    });

    /*-----------------------------------------------------*/
    app.get('/NotifyDiab/Options', function (req, res) {
        res.render('NotifyDiab/Options', {'assetPath' : assetPath, 'EXTERNAL_CHOICE' : 'surrender'})
    });

    /*-----------------------------------------------------*/
    app.get('/NotifyDiab/Surrender_1', function (req, res) {
        res.render('NotifyDiab/Surrender_1', {'assetPath' : assetPath, 'EXTERNAL_CHOICE' : 'surrender'})
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
    app.get('/alpha/start', function (req, res) {
        res.render('alpha/start', {'assetPath' : assetPath, 'DRIVER' : 'JB12345'})
    });

    app.get('/alpha/landing', function (req, res) {
        res.render('alpha/landing', {'assetPath' : assetPath, 'DRIVER' : 'JB12345'})
    });

    app.get('/alpha/notify/page-1', function (req, res) {
        res.render('alpha/notify/page-1', {'assetPath' : assetPath, 'DRIVER' : 'JB12345'})
    });

    app.get('/alpha/notify/page-2', function (req, res) {
        res.render('alpha/notify/page-2', {'assetPath' : assetPath, 'DRIVER' : 'JB12345'})
    });
    
    app.get('/alpha/notify/page-3', function (req, res) {
        res.render('alpha/notify/page-3', {'assetPath' : assetPath, 'DRIVER' : 'JB12345'})
    });
    
    app.get('/alpha/notify/finish', function (req, res) {
        res.render('alpha/notify/finish', {'assetPath' : assetPath, 'DRIVER' : 'JB12345'})
    });
  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/
