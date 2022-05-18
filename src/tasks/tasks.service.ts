import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilter(filerDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filerDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((element) => {
  //       return element.status === status;
  //     });
  //   }
  //   if (search) {
  //     tasks = tasks.filter((element) => {
  //       return (
  //         element.title.includes(search) || element.description.includes(search)
  //       );
  //     });
  //   }
  //   return tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // getTaskById(id: string): Task {
  //   const task = this.tasks.find((element) => element.id == id);
  //   if (task) {
  //     return task;
  //   }
  //   throw new NotFoundException();
  // }
  // deleteTask(id: string): void {
  //   const _ = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((element) => element.id !== id);
  // }
  // udpateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
