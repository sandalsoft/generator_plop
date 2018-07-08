import { oTree } from './o-tree'; 
import { readFile } from '@sandalsoft/utils';

const testFile = './test/format-option.stub.json';
const testData = readFile({ filePath: testFile });

beforeEach(() => {
  true;
});


afterEach(() => {
  true;
});


test('oTree works',async () => { 
  expect.assertions(1);

  const expected = true; 
  const actual = oTree();
  expect(actual).toEqual(expected); 
});
