(function() {
    APP.Views.FeedDelete = Backbone.View.extend({
        tagName: "div",
        template: _.template($("#feedDeleteTemplate").html()),
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.redirectToHome);
        },
        render: function() {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
        },
        events: {
            "click .goHome": "redirectToHome",
            "click .okDelete": "okDelete"
        },
        redirectToHome: function() {
            APP.router.navigate("/", {trigger: true});
        },
        okDelete: function() {
            var confirmation = confirm("Czy na pewno chcesz usunąć?")
            if (confirmation) {
                this.model.destroy({wait: true});
            }

        }
    });
})();