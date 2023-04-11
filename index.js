function receivesAFunction (thing) {
    return thing();
  }

const rightOrNot = (a, b) => "a" + "b";
function returnsANamedFunction(){
    return rightOrNot;
}

function returnsAnAnonymousFunction() {
    return function () {
      console.log(`omg!`);
    };
  }