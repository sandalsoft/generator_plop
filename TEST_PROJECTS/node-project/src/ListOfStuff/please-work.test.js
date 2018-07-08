import { pleaseWork } from './please-work'; 
import { readFile } from '@sandalsoft/utils';

const testFile = './test/format-option.stub.json';
const testData = readFile({ filePath: testFile });

beforeEach(() => {
  true;
});


afterEach(() => {
  true;
});


test('pleaseWork works',async () => { 
  expect.assertions(1);

  const expected = true; 
  const actual = pleaseWork();
  expect(actual).toEqual(expected); 
});
