import { Controller, Get, Put, RequestParam, Delete, Post, RequestBody } from '@kites/rest';
import { TodoService } from './todo.service';

@Controller('/todo')
export class TodoController {

    constructor(public svTodo: TodoService) { }

    @Get('/')
    list() {
        return this.svTodo.getAll();
    }

    @Get('/:id')
    details(@RequestParam('id') task) {
        return this.svTodo.get(task);
    }

    @Post('/')
    create(@RequestBody() body) {
        return this.svTodo.create(body);
    }

    @Put('/:id')
    begin(@RequestParam('id') task) {
        return this.svTodo.begin(task);
    }

    @Delete('/:id')
    remove(@RequestParam('id') task) {
        return this.svTodo.trash(task);
    }
}
