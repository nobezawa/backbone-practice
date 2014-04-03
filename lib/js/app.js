$(function(){
  var Task =  Backbone.Model.extend({
      defaults: {
	  title: "do something !",
	  completed: false
      }  

  });
  var task = new Task();
  // View
  var TaskView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($("#task-template").html()),
      render: function(){
	  var template = this.template(this.model.toJSON());
	  this.$el.html(template);
	  return this;
      }
  });

  // Collection
  var Tasks = Backbone.Collection.extend({
      model: Task
  });

  var tasksView = Backbone.View.extend({
      tagName: 'ul',
      render: function(){
	  this.collection.each(function(task){
	      var taskView = new TaskView({model: task});
	  });
      }
  });
    
  var tasks = new Tasks([
  {
      title: "task1",
      completed: true
  },
  {
      title: "task2"
  },
  {
      title: "task3"
  }
  ]);
  console.log(tasks.toJSON());

});
