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

    it('should have no children', function () {
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
});
