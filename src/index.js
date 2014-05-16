/**
 * peento-blog-comment-local
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, plugin, debug) {

  plugin.load(__dirname);

  var app = ns('app');
  app.once('start', function () {
    // register nav link
    var links = [
      {
        name:  'comment_local_admin_list',
        type:  2,
        title: 'Comments',
        url:   '/admin/comment/list'
      }
    ];
    links.forEach(function (item) {
      app.call('nav.update', item, function (err) {
        if (err) {
          console.error((err && err.stack) || err);
        }
      });
    });
  });

};
