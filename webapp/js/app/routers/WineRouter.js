/*globals define*/
'use strict';

define(
  [
    'backbone', 'src/routers/CrudRouter',
    'app/config', 'app/models/WineModel', 'app/models/WineCollection',
    'text!app/views/wines/wineForm.html'
  ],
  function(Backbone, CrudRouter,
    config, WineModel, WineCollection,
    wineFormTemplate
  ) {

var Router = CrudRouter.extend({
  config: config,
  Model: WineModel,
  Collection: WineCollection,
  formTemplate: wineFormTemplate,
  baseUrl: 'wines'
});

  return Router;
});