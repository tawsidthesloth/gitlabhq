/* eslint-disable */

import * as constants from '~/droplab/constants';

describe('constants', function () {
  describe('DATA_TRIGGER', function () {
    it('should be `data-dropdown-trigger`', function() {
      expect(constants.DATA_TRIGGER).toBe('data-dropdown-trigger');
    });
  });

  describe('DATA_DROPDOWN', function () {
    it('should be `data-dropdown`', function() {
      expect(constants.DATA_DROPDOWN).toBe('data-dropdown');
    });
  });

  describe('SELECTED_CLASS', function () {
    it('should be `droplab-item-selected`', function() {
      expect(constants.SELECTED_CLASS).toBe('droplab-item-selected');
    });
  });

  describe('ACTIVE_CLASS', function () {
    it('should be `droplab-item-active`', function() {
      expect(constants.ACTIVE_CLASS).toBe('droplab-item-active');
    });
  });
});
