/**
 * Call: comment.get_list
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, debug) {
  var utils = ns('utils');
  return function (params, callback) {
    debug('get list');
    var comment_list = ns('model.comment_list');
    params = utils.cloneObject(params);

    var query = {};

    var options = comment_list.formatListOptions(params);
    comment_list.list(query, options, callback);

  }
};
