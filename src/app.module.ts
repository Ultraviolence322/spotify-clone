import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.4y5pr.mongodb.net/spotify-clone?retryWrites=true&w=majority'),
    TrackModule,
  ]
})

export class AppModule {}
