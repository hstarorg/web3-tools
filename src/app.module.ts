import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ensureDirSync } from 'fs-extra';

import { ALL_CONTROLLERS } from './controllers';
import { INJECTED_SERVICES } from './services';

// const webAppDir = join(__dirname, './web');
const webAppDir = join(__dirname, '../src/web');
ensureDirSync(webAppDir);
console.log(`web app dir: ${webAppDir}`);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: webAppDir,
      exclude: ['/api/*all'],
    }),
  ],
  controllers: ALL_CONTROLLERS,
  providers: [...INJECTED_SERVICES],
})
export class AppModule {}
