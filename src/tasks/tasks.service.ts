import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository) private tasksRepository: TasksRepository,
  ) {}
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

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);

    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

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
