import { Router } from "express";

import { Todo } from "../models/Todo";
import { todo } from "node:test";

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
	res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
	const newTodo: Todo = {
		id: new Date().toISOString(),
		text: req.body.text,
	};

	todos.push(newTodo);

	res.status(201).json({ message: "Added todo", todo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
	const tid = req.params.todoId;
	const totoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
	if (totoIndex >= 0) {
		todos[totoIndex] = { id: todos[totoIndex].id, text: req.body.text };
		return res.status(200).json({ message: "Updated todo", todos: todos });
	}
	res.status(404).json({ message: "Could not find the item for this ID" });
});

router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    res.status(200).json({message: 'Deleted todo', todos: todos});
})

export default router;
