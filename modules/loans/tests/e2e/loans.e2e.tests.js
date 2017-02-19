'use strict';

describe('Loans E2E Tests:', function () {
  describe('Test Loans page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/loans');
      expect(element.all(by.repeater('loan in loans')).count()).toEqual(0);
    });
  });
});
