(function() {
    APP.Views.FeedDetails = Backbone.View.extend({
        tagName: "div",
        template: _.template($("#feedDetailsTemplate").html()),
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
            "click .title": "showDetails"
        },
        redirectToHome: function() {
            APP.router.navigate("/", {trigger: true});
        },
        showDetails: function() {
            APP.router.navigate("/feed/" + this.model.get("_id") + "/details", {trigger: true});
        }
    });
})();