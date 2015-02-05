$(function () {
  window.Tasker = {
    newTaskInput: null,
    newTaskButton: null,
    taskList: null,
    taskCounter: null,
    doneCounter: null,
    addTask: function (text) {
      var self = this;
      // This method adds a new task to the list.
      var newTask = $('<li></li>').text(text);
      newTask.off().on('click', function (event) {
        $(this).toggleClass('completed');
        self.updateDoneTaskCounter();
        self.updateRemainingTaskCounter();
      });

      this.taskList.append(newTask);

      this.newTaskInput.val('').focus();
    },
    init: function () {
      // This method initializes the task list application.
      var self = this;

      this.newTaskInput = $('input#task_text');
      this.newTaskButton = $('form#add_task');
      this.taskList = $('#tasks > ul');
      this.taskCount = 0;
      this.taskCounter = $('#done_tasks');
      this.taskCounter.text(this.taskCount + " tasks completed");
      this.remCount = 0;
      this.remCounter = $('#rem_tasks');
      this.remCounter.text(this.remCount + " tasks remaining");

      this.newTaskButton.off().on('submit', function (event) {
        event.preventDefault();

        var taskText = self.newTaskInput.val();
        self.addTask(taskText);
      });
    },
    updateDoneTaskCounter: function () {
      this.taskCounter.text(this.taskList.children('li.completed').length + " tasks completed");
    },
    updateRemainingTaskCounter: function () {
      // something
      this.remCounter.text(this.taskList.children('li').not('.completed').length + " tasks remaining");
    },
    clear: function () {
      // This method clears the task list of all tasks
      this.taskList.empty();

    }
  };

  Tasker.init();

});
