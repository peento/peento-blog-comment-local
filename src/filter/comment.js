/**
 * Filters: comment
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, registerFilter, debug) {
  var app = ns('app');


  function get_comment_list_by_article_id (article_id, callback, context) {
    if (!(article_id > 0)) return callback(null, []);
    app.call('comment.get_list', {article_id: article_id}, function (err, ret) {
      callback(null, ret);
    });
  }
  get_comment_list_by_article_id.enableCache = true;
  registerFilter('get_comment_list_by_article_idAsync', get_comment_list_by_article_id);


  function get_comment_count_by_article_id (article_id, callback, context) {
    if (!(article_id > 0)) return callback(null, 0);
    app.call('comment.get_count', {article_id: article_id}, function (err, ret) {
      callback(null, ret);
    });
  }
  get_comment_count_by_article_id.enableCache = true;
  registerFilter('get_comment_count_by_article_idAsync', get_comment_count_by_article_id);


};
