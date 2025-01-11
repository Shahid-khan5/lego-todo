/**
 * Utility module for local storage operations
 */

/**
 * Save tasks to local storage as JSON
 * @param {Array} tasks - Array of task objects
 */
function saveTasks(tasks) {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to local storage:', error);
  }
}

/**
 * Retrieve tasks from local storage as JSON
 * @returns {Array} - Array of task objects
 */
function getTasks() {
  try {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error retrieving tasks from local storage:', error);
    return [];
  }
}

/**
 * Delete a task from local storage
 * @param {Object} task - Task object to delete
 */
function deleteTaskFromLocalStorage(task) {
  try {
    const tasks = getTasks();
    const updatedTasks = tasks.filter(t => t.title !== task.title);
    saveTasks(updatedTasks);
  } catch (error) {
    console.error('Error deleting task from local storage:', error);
  }
}

/**
 * Add a task to local storage
 * @param {Object} task - Task object to add
 */
function addTaskToLocalStorage(task) {
  try {
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
  } catch (error) {
    console.error('Error adding task to local storage:', error);
  }
}

/**
 * Update a task in local storage
 * @param {Object} task - Task object to update
 */
function updateTaskInLocalStorage(task) {
  try {
    const tasks = getTasks();
    const updatedTasks = tasks.map(t => t.title === task.title ? task : t);
    saveTasks(updatedTasks);
  } catch (error) {
    console.error('Error updating task in local storage:', error);
  }
}
