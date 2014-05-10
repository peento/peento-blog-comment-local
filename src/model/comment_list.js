/**
 * Model: comment_list
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, createModel, debug) {

  var model = createModel({
    connection: ns('db'),
    table:      'comment_list',
    primary:    'id',
    limit:      ns('config.model.limit'),
    fields: {
      id:         'number',
      article_id: 'number',
      name:       'string',
      email:      'string',
      content:    'string',
      created_at: 'number'
    },
    queryFields: ['article_id', 'email', 'is_removed'],
    requiredFields: ['article_id', 'name', 'email', 'content'],
    input: function (data, callback, type) {
      if (type === 'add') {
        data.created_at = model.timestamp();
      }
      if (type === 'get' || type === 'list' || type === 'count') {
        data.is_removed = 0;
      }
      callback(null, data);
    },
    output: function (item, callback) {
      if (item) {
        item.is_removed = !!item.is_removed;
        item.created_at = new Date(item.created_at * 1000);
      }
      callback(null, item);
    }
  });


  return model;

};
