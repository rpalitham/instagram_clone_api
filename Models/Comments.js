class Comments {
  constructor(user) {
    this.commentSchema = sequelize.import("../Schemas/comments");
    this.user = { ...user };
  }

  async create(like) {
    return await this.commentSchema.create({
      ...like,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: this.user.id,
      updated_by: this.user.id,
    });
  }

  async findOne(condition) {
    return await this.commentSchema.findOne({
      where: {
        ...condition,
      },
    });
  }

  async readAll(condition) {
    return await this.commentSchema.findAndCountAll({
      where: {
        ...condition,
      },
      raw: true,
    });
  }

  async delete(condition) {
    return await this.commentSchema.destroy({
      where: {
        ...condition,
      },
    });
  }
}

export default Comments;
