import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DTO } from './DTO/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private _TasksService: TasksService) {}

  //Leer
  @Get()
  getTasks(): Promise<Task[]> {
    return this._TasksService.getTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this._TasksService.getTask(taskId);
  }

  //Crear
  @Post()
  createTask(@Body() task: DTO): Promise<Task> {
    return this._TasksService.createTask(task);
  }

  //Actualizar
  @Put(':id')
  updateTask(@Body() task: DTO, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Updating a task';
  }

  //Eliminar
  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return 'Deleting a task number:' + id;
  }
}
