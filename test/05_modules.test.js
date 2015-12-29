// WRITE YOUR IMPORT STATEMENTS HERE

// Importing Named exports
import * as Mathy from '../common/Mathy';
import * as myMathy from '../common/Mathy';
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy';

// Importing default exports.
import time from '../common/Physics';
import myTime from '../common/Physics';

//import from node_modules.
import _ from 'lodash';


import {expect} from 'chai';

describe('ES6 Modules', () => {
  it('can import Mathy', () => {

    // I DID THIS ONE FOR YOU!
    expect(Mathy.sqrt).to.exist;
    expect(Mathy.square).to.exist;
    expect(Mathy.diag).to.exist;
  });

  it('Can alias the import name', () => {

    // Import `myMathy` to ge these tests to pass.
    // NOTE: All import statements have to be done at the top of the file

    expect(myMathy).to.exist;
    expect(myMathy.sqrt).to.equal(Mathy.sqrt);
    expect(myMathy.square).to.equal(Mathy.square);
    expect(myMathy.diag).to.equal(Mathy.diag);
  });

  it('can destructure the import, to only retain pieces of the import', () => {

    // Import `Mathy` again, but pull out only the `sqrt` as mySqrt, and `square` as mySquare
    // NOTE: All import statements have to be done at the top of the file

    expect(mySqrt).to.exist;
    expect(mySquare).to.exist;
    expect(mySqrt).to.equal(Mathy.sqrt);
    expect(mySquare).to.equal(Mathy.square);
  });

  it('can import time', () => {

    expect(time).to.exist;
  });

  it('can import time as myTime', () => {
    expect(myTime).to.equal(time);
  });

  it('can import from my node_modules', () => {

    // import `lodash`
    // NOTE: All import statements have to be done at the top of the file

    expect(_).to.exist;

  });
});
