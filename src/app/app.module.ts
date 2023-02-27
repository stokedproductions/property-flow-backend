import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// config stuff
import {AppConfigurationService} from '../config/config.service'
import { AppConfigurationModule } from 'src/config/config.module';

// mongo stuff

import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { OrganisationModule } from 'src/organisation/organisation.module';
import { AgentsModule } from 'src/agents/agents.module';
import { ListingsModule } from 'src/listings/listings.module';

import { AuthMiddleware } from 'src/middleware/auth/auth.middleware';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AppConfigurationModule,
    MongooseModule.forRootAsync({
      imports: [AppConfigurationModule],
      inject: [AppConfigurationService],
      useFactory: (appConfigService: AppConfigurationService) => {
        const options: MongooseModuleOptions = {
          uri: appConfigService.connectionString,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
        return options;
      },
    }),
    OrganisationModule,
    AgentsModule,
    ListingsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('');
  }
}
