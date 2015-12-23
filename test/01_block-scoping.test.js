import {expect} from 'chai';

describe.skip('Block Scoped Variables', () => {

  it('can be used in place of `var`', () => {

    // Declare 'bandName' using 'let'
      let bandName = 'Queen';
    // Declare 'isBestBand' using 'let'
      let isBestBand = true;

    expect(bandName).to.equal('Queen');
    expect(isBestBand).to.be.true;
  });


  it('can modify the value of a `let` variable', () => {

    // Delcare 'releaseName' using 'let', setting the value to 'ES6'
    let releaseName = 'ES6';
    // Change value of 'releaseName' to be `ES2015`, the new name for ES6
    releaseName = 'ES2015';

    expect(releaseName).to.equal('ES2015');
  });

  it('cannot modify the value of a `const` variable', () => {

    const releaseName = 'ES6';

    // This doesn't even transpile, so we can't actually test this...
    // once you've changed the `var` above to `cost`, comment out the line below
    // releaseName = 'ES2015';
    expect(releaseName).to.equal('ES6');
  });


  it('is trapped inside of an `if` statement', () => {

    if (true) {
      // Change to `var` to `let`, so that 'b' is scoped inside of the if-statement
      let b = 1;
    }

    expect(()=> console.log(b)).to.throw('b is not defined');
  });


  it('prevents loop counters from hoisting', () => {

    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (let i = 0; i < 10; i++) {

      }
      return i;
    }

    expect(doLoop).to.throw('i is not defined');
  });


  it('means that we can start using block statements', () => {

    // BLOCK STATEMENT
    {
      // Change to `const` declaration
      const d = 2;
    }

    expect(()=> console.log('d', d)).to.throw('d is not defined');
  });

});
