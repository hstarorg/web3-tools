import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ensureDirSync } from 'fs-extra';

import { ALL_CONTROLLERS } from './controllers';
import { INJECTED_SERVICES } from './services';

const webAppDir = join(__dirname, './web');
ensureDirSync(webAppDir);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: webAppDir,
      exclude: ['/api/(.*)'],
    }),
  ],
  controllers: ALL_CONTROLLERS,
  providers: [...INJECTED_SERVICES],
})
export class AppModule {}
