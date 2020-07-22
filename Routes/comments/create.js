import Comments from "../../Services/Comments";

export default async (req, res) => {
  try {
    let { body, user } = req;
    let commentsService = new Comments(user);
    let result = await commentsService.create(body);
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
