import {expect} from 'chai';

describe.only('SETS', () => {

  it('has an add method and a has method', ()=> {

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set
    const mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);

    expect(mySet.has(1)).to.be.true;
    expect(mySet.has(2)).to.be.true;
    expect(mySet.has(3)).to.be.true;
    expect(mySet.has(4)).to.equal(false);

  });


  it('doesn`t allow duplicates', ()=> {

    // Create a new Set called 'mySet'
    // add the number 1 to it three times
    const mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(1);

    expect(mySet.has(1)).to.be.true;
    expect(mySet.size).to.equal(1);

  });

});
