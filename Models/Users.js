class User {
  constructor() {
    this.UserSchema = sequelize.import("../Schemas/users");
    this.PostSchema = sequelize.import("../Schemas/posts");
    this.RelationshipSchema = sequelize.import("../Schemas/Posts");
  }

  async create(userObj) {
    return await this.UserSchema.create({
      ...userObj,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  async findOne(condition) {
    return await this.UserSchema.findOne({
      where: {
        ...condition,
      },
      raw: true,
    });
  }

  async readAll(condition, limit) {
    return await this.UserSchema.findAll({
      where: {
        ...condition,
      },
      limit: limit,
      raw: true,
    });
  }
}

export default User;
