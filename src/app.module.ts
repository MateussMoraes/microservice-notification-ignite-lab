import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http.module';
@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}

// Inversão de Dependencia => uma classe que
// recebe as dependencias atraves de um construtor

// Injeção de Dependencia => uma forma de 
// automatizar a inserção dessas dependencias
// quando a classe é instanciada