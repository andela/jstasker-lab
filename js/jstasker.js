$(function () {
  window.Tasker = {
    newTaskInput: null,
    newTaskButton: null,
    taskList: null,
    addTask: function (text) {
      var newTask = $('<li></li>').text(text);
      newTask.off().on('click', function (event) {
        $(this).toggleClass('completed');
      });

      this.taskList.append(newTask);

      this.newTaskInput.val('').focus();
    },
    init: function () {
      var self = this;

      this.newTaskInput = $('input#task_text');
      this.newTaskButton = $('form#add_task');
      this.taskList = $('#tasks > ul');

      this.newTaskButton.off().on('submit', function (event) {
        event.preventDefault();

        var taskText = self.newTaskInput.val();
        self.addTask(taskText);
      });
    }
  };

  Tasker.init();

});
