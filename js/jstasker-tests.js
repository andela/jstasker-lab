'use strict';

describe('Tasker: ', function () {

  describe('Adding tasks', function () {

    beforeEach(function () {
      this.Tasker = Tasker;
      this.Tasker.init();
    });

    afterEach(function () {
      this.Tasker = undefined;
    });

    it('should be empty', function () {
      expect(this.Tasker.taskList.children('li').length).toBe(0);
    });

    it('should add a task', function () {
      this.Tasker.newTaskInput.val('Hello, World');
      this.Tasker.newTaskButton.trigger('submit');

      expect(this.Tasker.taskList.children('li').length).toBe(1);
    });

    it('should have the text in the new task match the text entered into the input', function () {
      this.Tasker.newTaskInput.val('Learn jQuery');
      this.Tasker.newTaskButton.trigger('submit');

      expect(this.Tasker.taskList.children('li').last().text()).toBe("Learn jQuery");
    });

  });

  describe('Checking off tasks', function () {

    beforeEach(function () {
      this.Tasker = Tasker;
      this.Tasker.init();
    });

    afterEach(function () {
      this.Tasker = undefined;
    });

    it('should cross a list item off when clicked', function () {
      this.Tasker.newTaskInput.val('Clickable Task');
      this.Tasker.newTaskButton.trigger('submit');

      var listItem = this.Tasker.taskList.children('li').last();
      listItem.trigger('click');

      expect(listItem.hasClass('completed')).toBe(true);
    });

    it('should restore a crossed list item when clicked', function () {
      this.Tasker.newTaskInput.val('Another clickable task');
      this.Tasker.newTaskButton.trigger('submit');

      var listItem = this.Tasker.taskList.children('li').last();
      listItem.trigger('click');
      listItem.trigger('click');

      expect(listItem.hasClass('completed')).toBe(false);
    });
  });

  describe('Completed tasks', function () {

    beforeEach(function () {
      this.Tasker = Tasker;
      this.Tasker.init();
    });

    afterEach(function () {
      this.Tasker = undefined;
    });

    it('should maintain a count of the number of completed tasks', function () {
      this.Tasker.clear();
      var texts = ['Eat', 'Sleep', 'Read'];
      for (var key in texts) {
        this.Tasker.newTaskInput.val(texts[key]);
        this.Tasker.newTaskButton.trigger('submit');
      }
      var listItem = this.Tasker.taskList.children('li').last();
      listItem.trigger('click');

      var activeCount = this.Tasker.taskList.children('li.completed').length;

      expect(activeCount).toBe(1);
    });

    it('should show the number of completed tasks', function () {
      this.Tasker.clear();
      var texts = ['Eat', 'Sleep', 'Read'];
      for (var key in texts) {
        this.Tasker.newTaskInput.val(texts[key]);
        this.Tasker.newTaskButton.trigger('submit');
      }
      var listItem = this.Tasker.taskList.children('li').last();
      listItem.trigger('click');

      expect(this.Tasker.taskCounter.text()).toBe(1 + " tasks completed");
    });

  });

  describe('Remaining tasks', function () {

    beforeEach(function () {
      this.Tasker = Tasker;
      this.Tasker.init();
    });

    afterEach(function () {
      this.Tasker = undefined;
    });

    it('should maintain a count of the number of remaining tasks', function () {
      this.Tasker.clear();
      var texts = ['Eat', 'Sleep', 'Read'];
      for (var key in texts) {
        this.Tasker.newTaskInput.val(texts[key]);
        this.Tasker.newTaskButton.trigger('submit');
      }
      var listItem = this.Tasker.taskList.children('li').last();
      listItem.trigger('click');

      var remainingCount = this.Tasker.taskList.children('li').not('.completed').length;

      expect(remainingCount).toBe(2);
    });

    it('should show the number of remaining tasks', function () {
      this.Tasker.clear();
      var texts = ['Eat', 'Sleep', 'Read'];
      for (var key in texts) {
        this.Tasker.newTaskInput.val(texts[key]);
        this.Tasker.newTaskButton.trigger('submit');
      }
      var listItem = this.Tasker.taskList.children('li').last();
      listItem.trigger('click');

      expect(this.Tasker.remCounter.text()).toBe(2 + " tasks remaining");
    });
  });
});
