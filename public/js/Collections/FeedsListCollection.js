(function() {
    APP.Collections.FeedsListCollection = Backbone.Collection.extend({
        model: APP.Models.Feeds,
        url: "/feeds"
    });
})();