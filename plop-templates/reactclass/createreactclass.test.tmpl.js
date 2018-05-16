
import React from 'react';
import renderer from 'react-test-renderer';


test('{{reactFeature}} works',async () => { 
  expect.assertions(1);

  const expected = true; 
  const actual = {{functionName}}();
  expect(actual).toEqual(expected); 
});