import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DTO} from './DTO/create-task.dto';

@Injectable()
export class TasksService {
  /*
  tasks: Task[] = [
    { id: 1, title: 'Testing', description: 'testing description', done: true },
    { id: 2, title: 'Testing', description: 'testing description', done: true },
    { id: 3, title: 'Testing', description: 'testing description', done: true },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id): Task {
    return this.tasks.find(task => task.id === id);
  }
  */

  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.find(id);
  }

  async createTask(task: DTO){
    const newTask =  new this.taskModel(task);
    return await newTask.save();
    //console.log(newTask);
  }
}
