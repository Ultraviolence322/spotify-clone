import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { FileService, FileType } from "src/file/file.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./shemas/comment.schema";
import { Track, TrackDocument } from "./shemas/track.schema";

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService
  ) {}
  
  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
    const audionPath = this.fileService.createFile(FileType.AUDIO, audio)
    const track = await this.trackModel.create({
      ...dto,
      picture: picturePath,
      audio: audionPath,
      listens: 0,
    })

    return track
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find()

    return tracks
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments')

    return track
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id)

    return track._id
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.track_id)
    const comment = await this.commentModel.create({
      ...dto
    })

    track.comments.push(comment._id)
    await track.save()

    return comment
  }
}