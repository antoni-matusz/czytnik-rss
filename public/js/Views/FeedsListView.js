(function() {
    APP.Views.FeedsListView = Backbone.View.extend({
        tagName: "ul",
        className: 'feeds-list',
        initialize: function() {
            this.listenTo(this.collection, "reset", this.render);
        },
        render: function() {
            this.collection.each(this.addOne, this);
            APP.Regions.appContent.append(this.el);
        },
        addOne: function(model) {
            var view = new APP.Views.FeedsListItemView({model: model});
            this.$el.append(view.render().el);
        }

    });
})();