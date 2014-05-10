/**
 * Call: comment.add
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, debug) {
  return function (params, callback) {
    debug('add: [%s] %s <%s>', params.article, params.name, params.email);
    ns('model.comment_list').add(params, callback);
  }
};
