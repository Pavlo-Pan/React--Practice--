import { useState } from 'react';
import TaskItem from './TaskItem/TaskItem';

import styles from './TaskList.module.css';

const TaskList = () => {

    // Используем useState для хранения списка задач
    const [tasks, setTasks] = useState([
        { id: 1, text: "Купить воздушный шар", completed: false },
        { id: 2, text: "Съездить на Ямайку", completed: false },
        { id: 3, text: "Начать получать 10000$ в месяц", completed: false },
    ]);

    // Храним текст новой задачи в состоянии
    const [newTask, setNewTask] = useState("");


    // Удаляем задачу из списка по `id`

    const onDelete = (id) => {
        // Обновляем список задач, исключая задачу с указанным id
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }


    // Переключаем статус выполнения задачи (completed / не completed)

    const onToggle = (id) => {
        // Перебираем задачи и изменяем свойство `completed` у нужной
        setTasks(tasks => tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    }


    // Добавляем новую задачу в список

    const addNewTask = () => {
        // Проверяем, не пустая ли строка перед добавлением
        if (!newTask.trim()) {
            return;
        }
        // Добавляем новую задачу с уникальным id (используем Date.now())
        setTasks([...tasks,
        {
            id: Date.now(),
            text: newTask,
            completed: false
        }
        ]);
        // Очищаем поле ввода
        setNewTask("");
    }


    return (
        <div className="todo">
            <h2>Список дел</h2>

            {/* Поле ввода для новой задачи */}
            <input
                type="text"
                value={newTask} // Значение input берётся из состояния newTask
                onChange={(event) => setNewTask(event.target.value)} // Обновляем состояние при вводе
            />

            {/* Кнопка добавления задачи */}
            <button onClick={addNewTask}>Добавить задачу</button>


            {/* Список задач */}
            <ul className="todoList">
                {tasks.map(task => (
                    // Отображаем каждую задачу с помощью компонента TaskItem
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </ul>

        </div>
    );
};

export default TaskList;