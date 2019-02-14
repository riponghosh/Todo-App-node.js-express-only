exports = module.exports = newFnc;


function createApplication2() {
  var app = Object.create({
    app: { configurable: true, enumerable: true, writable: true, value: app }
  }) 
  app = function(req, res, next) {
    console.log('app function')
  };

  app.response = Object.create({
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })
  app.b=5;
  return app;
}


function newFnc(){
  this.response=Object.create({
    'app': { configurable: true, enumerable: true, writable: true, value: 'app' }
  })

  return this.response;
}
newFnc.b=100;