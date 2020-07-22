import Relationships from "../../Services/Relationships";

export default async (req, res) => {
  try {
    let { user } = req;
    let { userId, type } = req.params;
    let relationshipService = new Relationships(user);
    let result = await relationshipService.update({ userId, type });
    res.send({ ...result, status: "ok" }).status(200);
  } catch (error) {
    console.log("error", error);
    let msg = {
      message:
        "The server encountered an unexpected condition which prevented it from fulfilling the request.",
      errors: error,
    };
    res.status(500).send(msg);
  }
};
