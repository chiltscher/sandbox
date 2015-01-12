var Door = Backbone.Model.extend({
	defaults: {
		name: 'Tür',
		status: 'closed'
	},
	urlRoot: '/doors'
});