import flagpole from 'flagpole';

const suite = flagpole('Basic Smoke Test of Site').base(
  'https://www.google.com'
);

suite
  .scenario('Homepage Loads', 'html')
  .open('/')
  .next(async (context) => {});
