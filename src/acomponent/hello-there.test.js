import { helloThere } from './hello-there'; 


beforeEach(() => {
  true;
});


afterEach(() => {
  true;
});


test('description:',async () => { 
  expect.assertions(1);
  

  const expected = true; 
  const actual = false; 
  expect(actual).toEqual(expected); 
});
