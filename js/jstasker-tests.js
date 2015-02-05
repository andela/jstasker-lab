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
});
