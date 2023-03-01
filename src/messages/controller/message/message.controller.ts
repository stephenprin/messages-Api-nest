import { Controller, Get, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    listMessages() {
        return 'This action returns all messages';
    }
    @Post()
    createMessage() { 
        return 'This action adds a new message';
    }
     
    @Get(':id')
    getMessage() { 
        return 'This action returns one message';
    }
}
