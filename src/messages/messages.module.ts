import { Module } from '@nestjs/common';


import { MessageController } from './controller/message/message.controller';

@Module({
  controllers: [ MessageController]
})
export class MessagesModule {}

