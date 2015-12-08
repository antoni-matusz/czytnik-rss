(function() {
    APP.Views.AddNewFeed = Backbone.View.extend({
        tagName: "div",
        template: _.template($("#showAddNewFeedTemplate").html()),
        initialize: function() {
            this.render();
            this.listenTo(this.model, "update", this.redirectToHome);
        },
        render: function() {
            var html = this.template(this.model.toJSON());
            this.$el.html(html);
            APP.Regions.appContent.html(this.el);
            this.stickit();
        },
        bindings: {
            "#title": "title",
            "#description": "description",
            "#date": "date"
        },
        events: {
            "submit form": "addNew",
            "click .goHome": "redirectToHome"
        },
        addNew: function(e) {
            e.preventDefault();
            var addNewFeed = this.model.save({wait: true});
            if (addNewFeed) {
                this.redirectToHome();
            }
        },
        redirectToHome: function() {
            APP.router.navigate("/", {trigger: true});
        }
    });
})();