(function() {
    APP.Views.FeedShowDetails = Backbone.View.extend({
        tagName: "div",
        template: _.template($("#feedShowDetailsTemplate").html()),
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },
        render: function() {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
        },
        events: {
            "click .goHome": "redirectToHome",
            "click .goFeed": "showFeed"
        },
        redirectToHome: function() {
            APP.router.navigate("/", {trigger: true});
        },
        showFeed: function() {
            APP.router.navigate("/feed/" + this.model.get("_id"), {trigger: true});
        }
    });
})();