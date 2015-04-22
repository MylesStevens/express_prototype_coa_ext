module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

   // app.get('/Notify/Notify_2', function (req, res) {
   //    res.render('Notify/Notify_2', {'messy' : 'Go fuck yourself'});
   //  });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

    /*-----------------------------------------------------*/
    /*---------------FOR CHANGE OF ADDRESS!!!!!-----------------*/


    
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

  // if (yinhouse == "" && yinpostcode != ""){
  //   BROKEN2 ="1";
    

  //    res.render('COA_2/2COA_A_alt', {'assetPath' : assetPath, 'ROUTECHOICE' : BROKEN, 'ROUTECHOICE2' : BROKEN2 })

  //   }  

  //   if (yinhouse != "" && yinpostcode == ""){
  //   BROKEN ="1";
    

  //    res.render('COA_2/2COA_A_alt', {'assetPath' : assetPath, 'ROUTECHOICE' : BROKEN, 'ROUTECHOICE2' : BROKEN2 })

  //   } 


    
 


  
    });






    /*-----------------------------------------------------*/
    /*----------FOR NOTIFY!!!!!!!--------------------------*/




  app.get('/Notify/BINGO', function (req, res) {

    var yin = req.query.BINGO;

    if (yin == "route1"){

    res.render('Testsummary', {'assetPath' : assetPath, 'ROUTECHOICE' : yin})

  } else
  { 
    res.render('Testsummary2', {'assetPath' : assetPath, 'ROUTECHOICE' : yin})
  }

    });

  /*-----------------------------------------------------*/

  app.get('/HOUSE', function (req, res) {

    var yin2 = req.query.HOUSE;

    if (yin2 == "route1"){

    res.render('Testsummary', {'assetPath' : assetPath, 'ROUTECHOICE' : yin2})

  } else
  { 
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

  } else if (yin3b == "sad" || yin3b == "happy")
  { 
    res.render('Notify/Epilepsy3', {'assetPath' : assetPath, 'ROUTECHOICE' : yin3b})

  } else if (yin3c == "sad" || yin3c == "happy")
  {
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

  } else if (yin7a == "happy" )
  { 
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

  } else if (yin4 == "sad")
  { 
    res.render('Notify/Notify_8', {'assetPath' : assetPath, 'ROUTECHOICE' : yin4})
}
    
    });


/*-----------------------------------------------------*/


       app.get('/Notify/Notify8', function (req, res) {

    var yin5 = req.query.Notify8a;
 

   if (yin5 == "happy"){

    res.render('Notify/hypoglycaemia', {'assetPath' : assetPath, 'ROUTECHOICE' : yin5})

  } else if (yin5 == "sad")
  { 
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

  } else
  { 
    res.render('Notify/Notify_6', {'assetPath' : assetPath, 'ROUTECHOICE' : 'happy'})
}
    
    });

  }
};

