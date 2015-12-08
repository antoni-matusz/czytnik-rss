(function() {
    APP.Models.Feeds = Backbone.Model.extend({
        idAttribute: "_id",
        url: function() {
            if (this.isNew()) {
                return "/feeds"
            } else {
                return "/feed/" + this.get("_id");
            }
        }
    });
})();