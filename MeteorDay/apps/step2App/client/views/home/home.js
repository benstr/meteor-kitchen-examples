Template.Home.rendered = function() {
	
};

Template.Home.events({
	"click #page-close-button": function(e, t) {
		e.preventDefault();
		Router.go("", {});
	}
});

Template.Home.helpers({

});

Template.HomeHomeJumbotron.rendered = function() {
	
};

Template.HomeHomeJumbotron.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("about", {});
	}
});

Template.HomeHomeJumbotron.helpers({

});
