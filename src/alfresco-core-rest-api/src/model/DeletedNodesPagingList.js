(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNodeMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNodeMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodesPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodeMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, DeletedNodeMinimalEntry, Pagination) {
  'use strict';

  /**
   * The DeletedNodesPagingList model module.
   * @module model/DeletedNodesPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodesPagingList</code>.
   * @alias module:model/DeletedNodesPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DeletedNodesPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodesPagingList} obj Optional instance to populate.
   * @return {module:model/DeletedNodesPagingList} The populated <code>DeletedNodesPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [DeletedNodeMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/DeletedNodeMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));
