import Likes from "../../Services/Likes";

export default async (req, res) => {
  try {
    let { body, user } = req;
    let likeService = new Likes(user);
    let result = await likeService.create(body);
    if (result) {
      res.json({ status: "ok" }).status(200);
    } else {
      res.status(500).send("Internal server error");
    }
  } catch (error) {
    let msg = {
      message:
        "The server encountered an unexpected condition which prevented it from fulfilling the request.",
      errors: error,
    };
    res.status(500).send(msg);
  }
};
