import Likes from "../Models/Likes";

class LikesService {
  constructor(user) {
    this.likesModel = new Likes(user);
    this.user = { ...user };
  }

  async create(payload) {
    try {
      let { type, id } = payload;
      let obj = {
        type,
        parent_id: id,
        user_id: this.user.id,
      };
      await this.likesModel.create(obj);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async delete({ id, type }) {
    try {
      let like = await this.likesModel.findOne({ id, type });
      if (like) {
        await this.likesModel.delete({ id });
        return true;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default LikesService;
