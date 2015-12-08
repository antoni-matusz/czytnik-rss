(function() {
    APP.Views.FeedsListItemView = Backbone.View.extend({
        tagName: "li",
        template: _.template($("#feedsListItemTemplate").html()),
        render: function() {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            return this;
        },
        events: {
            "click .title": "redirectToDetails",
            "click .deleteFeed": "deleteFeed",
            "click .addFeed": "addFeed"
        },
        deleteFeed: function() {
            APP.router.navigate("/delete-feed/" + this.model.get("_id"), {trigger: true});
        },
        redirectToDetails: function() {
            APP.router.navigate("/feed/" + this.model.get("_id"), {trigger: true});
        },
        addFeed: function() {
            APP.router.navigate("new-feed", {trigger: true});
        }
    });
})();