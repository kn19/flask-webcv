define([
    'backbone'
], function (Backbone) {

    var ProjectModel = Backbone.Model.extend({

        urlRoot: '/cv',

        isLoaded: false,

        // @override
        // Override the fetch function to check if the model is already loaded
        fetch: function (options) {
            if (this.isLoaded) {
                return this;
            }
            return Backbone.Model.prototype.fetch.apply(this, arguments);
        }
    });
    return ProjectModel;
});
