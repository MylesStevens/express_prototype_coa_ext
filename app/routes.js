module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

    
    app.get('/COA_2/2COA_1', function (req, res) {
      var pcode = req.query.postcode;
      var hnum = req.query.housenum;
       var errortext = "Not Quite Working";

// if (pcode == "pop"){
      res.render('COA_2/2COA_1', {'assetPath' : assetPath, 'err' : pcode });
     // }
  });

  }
};
