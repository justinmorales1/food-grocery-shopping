import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { deepClone } from '../Utilities/reduxUtilities';

it('it should deep clone the object', () => {
  let obj = { test: { val: 5 } };
  let newObj = deepClone(obj);
  newObj.test.val = 4;

  expect(obj.test.val).to.equal(5);
  expect(newObj.test.val).to.equal(4);
});
