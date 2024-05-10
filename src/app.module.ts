import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ALL_CONTROLLERS } from './controllers';
import { INJECTED_SERVICES } from './services';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './web'),
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: ALL_CONTROLLERS,
  providers: [...INJECTED_SERVICES],
})
export class AppModule {}
