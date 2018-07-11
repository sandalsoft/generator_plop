import { {{ functionName }} } from './{{kebabCase functionName}}';
import { readFile } from '@sandalsoft/utils';

const testFile = './test/format-option.stub.json';
const testData = readFile({ filePath: testFile });

beforeEach(() => {
  true;
});


afterEach(() => {
  true;
});


test('{{functionName}} works', async () => {
  expect.assertions(1);
  testData;
  const expected = true;

  expect(actual).toEqual(expected);
});
