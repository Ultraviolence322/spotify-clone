import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./shemas/comment.schema";
import { Track, TrackDocument } from "./shemas/track.schema";

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
  ) {}
  
  }

  async getAll() {

  }

  async getOne() {

  }

  async delete() {
    
  }
}