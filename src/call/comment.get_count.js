/**
 * Call: comment.get_count
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, debug) {
  return function (params, callback) {
    debug('get count');

    var query = {};

    ns('model.comment_list').count(query, callback);

  }
};
