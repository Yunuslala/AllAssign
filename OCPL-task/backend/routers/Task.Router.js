const {
  CreateTask,
  deleteTask,
  UpdateTask,
  GetAllTask,
} = require("../controllers/Task.Controller");
const express=require("express");
const { body, validationResult, check } = require("express-validator");
const TaskRouter = express.Router();
const {Authentication} = require("../middlewares/Authentication");

TaskRouter.use(Authentication);

TaskRouter.post(
  "/add",
  [
    body("name").notEmpty().withMessage("name is required"),
    body("Content").notEmpty().withMessage("Content is required"),
  ],
  CreateTask
);
TaskRouter.patch(
  "/update/:taskId",
  [
    check("taskId")
      .exists()
      .withMessage("taskId is required")
      .isString()
      .withMessage("taskId must be a string"),
  ],
  UpdateTask
);
TaskRouter.delete(
  "/deleteTask/:TaskId",
  [
    check("TaskId")
      .exists()
      .withMessage("TaskId is required")
      .isString()
      .withMessage("TaskId must be a string"),
  ],

  deleteTask
);
TaskRouter.get("/get", GetAllTask);

module.exports = {
  TaskRouter,
};
