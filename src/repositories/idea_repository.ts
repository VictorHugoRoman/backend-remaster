import BaseRepository from './base_repository';
import {IUser, IdeaDocument} from '../models'
import { IdeaService } from '../services';
import { HttpError, HttpStatus } from '../common';
import { IIdeaRepository } from './types';

export class IdeaRepository extends BaseRepository<IdeaDocument> implements IIdeaRepository<IdeaDocument>
{
    constructor(private readonly ideaService: IdeaService ) {
        super(ideaService);
    }
    
    async getByAuthor(idAuthor: string): Promise<IdeaDocument[]> {
        if (!idAuthor) throw new HttpError("author must be sent", HttpStatus.BAD_REQUEST);
        return await this.ideaService.getByUser(idAuthor);
    }
    
    async upVote(ideaId: string): Promise<IdeaDocument | null> {
        if (!ideaId) throw new HttpError("author must be sent", HttpStatus.BAD_REQUEST);
        const idea = await this.ideaService.getById(ideaId);
        if (!idea) throw new HttpError("idea does not exist", HttpStatus.NOT_FOUND);
        idea.upvotes.push(true);
        return await this.ideaService.updateEntity(ideaId, { upvotes: idea.upvotes });
    }

    async downVote(ideaId: string): Promise<IdeaDocument | null> {
        if (!ideaId) throw new HttpError("author must be sent", HttpStatus.BAD_REQUEST);
        const idea = await this.ideaService.getById(ideaId);
        if (!idea) throw new HttpError("idea does not exist", HttpStatus.NOT_FOUND);
        idea.downvotes.push(true);
        return await this.ideaService.updateEntity(ideaId, { downvotes: idea.downvotes });
    }
}
