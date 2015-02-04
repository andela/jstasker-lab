$(function () {
  window.Tasker = {
    newTaskInput: null,
    newTaskButton: null,
    taskList: null,
    addTask: function () {

    },
    init: function () {
      var self = this;

      this.newTaskInput = $('input#task_text');
      this.newTaskButton = $('form#add_task');
      this.taskList = $('#tasks > ul');

      this.newTaskButton.off().on('submit', function (event) {
        event.preventDefault();

        var taskText = self.newTaskInput.val();

        var newTask = $('<li></li>').text(taskText);

        self.taskList.append(newTask);

        self.newTaskInput.val('').focus();
      });
    }
  };

  Tasker.init();

});
