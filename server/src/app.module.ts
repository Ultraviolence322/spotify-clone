import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.4y5pr.mongodb.net/spotify-clone?retryWrites=true&w=majority'),
    TrackModule,
    FileModule
  ]
})

export class AppModule {}
