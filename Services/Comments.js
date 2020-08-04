import Comments from "../Models/Comments";

class CommentsService {
  constructor(user) {
    this.commentsModel = new Comments(user);
    this.user = { ...user };
  }

  async create(payload) {
    try {
      let { type, id, text } = payload;
      let obj = {
        type,
        text,
        parent_id: id,
        user_id: this.user.id,
      };
      await this.commentsModel.create(obj);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async get({ id, type }) {
    try {
      let obj = {
        type,
        parent_id: id,
        user_id: this.user.id,
      };
      let userLiked = await this.likesModel.findOne(obj);
      let likesCount = await this.likesModel.countAll({ type, parent_id: id });
      userLiked = userLiked ? true : false;
      return { userLiked, likesCount };
    } catch (error) {
      throw error;
    }
  }

  async delete({ id, commentId }) {
    try {
      let like = await this.commentsModel.findOne({ id });
      if (like) {
        await this.commentsModel.delete({ id });
        return true;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default CommentsService;
