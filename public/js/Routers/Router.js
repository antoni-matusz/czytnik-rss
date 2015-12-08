(function() {
    APP.Routers.Router = Backbone.Router.extend({
        routes: {
            "": "showFeedsList",
            "feeds": "showFeedsList",
            "feed/:id": "showFeedDetails",
            "feed/:id/details": "showFeedDetailsDescription",
            "new-feed": "showAddNewFeed",
            "delete-feed/:id": "showDeleteFeed"
        },
        showFeedsList: function() {
            var feeds = new APP.Collections.FeedsListCollection(),
                    view = new APP.Views.FeedsListView({collection: feeds});

            APP.showMainView(view);
            feeds.fetch({
                reset: true,
                data: {
                }
            });
        },
        showFeedDetails: function(id) {
            var feed = new APP.Models.Feeds({_id: id}),
                    view = new APP.Views.FeedDetails({model: feed});
            APP.showMainView(view);
            feed.fetch();
        },
        showFeedDetailsDescription: function(id) {
            var feed = new APP.Models.Feeds({_id: id}),
                    view = new APP.Views.FeedShowDetails({model: feed});
            APP.showMainView(view);
            feed.fetch();
        },
        showDeleteFeed: function(id) {
            var feed = new APP.Models.Feeds({_id: id}),
                    view = new APP.Views.FeedDelete({model: feed});
            APP.showMainView(view);
            feed.fetch();
        },
        showAddNewFeed: function() {
            var feed = new APP.Models.Feeds(),
                    view = new APP.Views.AddNewFeed({model: feed});
            APP.showMainView(view);
        }

    });
})();