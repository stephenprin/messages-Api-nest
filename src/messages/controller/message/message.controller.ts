import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from '../../dto/create-message.dto';
@Controller('message')
export class MessageController {
    @Get()
    listMessages() {
        return 'This action returns all messages';
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto) { 
        console.log(body)
    }
     
    @Get(':id')
    getMessage() { 
        return 'This action returns one message';
    }
}
