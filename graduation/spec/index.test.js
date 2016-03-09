var expect = require("expect.js");
var index = require("../src/scripts/index.js");

 describe('book', function(){
 	

    it('test', function () {
     expect(index.add([1,2,3])).to.eql(6);    
    })

    
  });



