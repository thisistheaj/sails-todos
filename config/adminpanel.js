'use strict';

module.exports.adminpanel = {
  instances: {
    todos: {
      title: 'Todos',
      model: 'Todos',
      list: {
        fields: {
          id: 'ID',
          text: 'text',
          completed: 'Completed',
          createdAt: 'Created'
        }
      },
      edit: {
        fields: {
          id: 'ID',
          text: 'text',
          completed: 'Completed',
          createdAt: 'Created'
        }
      }
    }
  }
};

