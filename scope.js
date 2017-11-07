function outer(){
  var apple = 'apples';
  var banana = {
    default: 'banoonoos',
  };

  function inner(apple, banana){
    var apple = 'ardvark';
    var banana = 'baboon';
    console.log(apple);
    console.log(banana);
  }

  inner(apple, banana);
    console.log(apple);
    console.log(banana);
  }

outer();
