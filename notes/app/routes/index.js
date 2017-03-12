const notesRoutes = require('./notes_routes.js');

module.exports = function(app, db){
  notesRoutes(app, db);
};
