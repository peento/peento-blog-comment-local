/**
 * Router: local comment
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, router) {
  var app = ns('app');

  router.post('/local_comment', ns('middleware.multiparty'), function (req, res, next) {
    app.call('comment.add', req.body, function (err, id) {
      if (err) return next(err);
      res.redirect('/article/' + req.body.article_id + '#comment-' + id);
    });
  });

};
