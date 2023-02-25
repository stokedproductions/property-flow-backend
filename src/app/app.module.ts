import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// config stuff
import {AppConfigurationService} from '../config/config.service'
import { AppConfigurationModule } from 'src/config/config.module';

// mongo stuff

import { MongooseModule, MongooseModuleOptions  } from '@nestjs/mongoose';
import { OrganisationModule } from 'src/organisation/organisation.module';
import { AgentsModule } from 'src/agents/agents.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
