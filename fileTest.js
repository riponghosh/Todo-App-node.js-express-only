function newFnc(){
  this.response=Object.create({
    'app': { configurable: true, enumerable: true, writable: true, value: 'app' }
  })

  return this.response;
}