import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";
import errorHandler from "../utils/error.js";

export const test = async (req, res, next) => {
  console.log("comment route hit");
  res.status(200).json("comment hit successfully");
};

export const createComment = async (req, res, next) => {
  try {
    const { content, postId } = req.body;
    const user = await User.findById(req.params.userId);
    const User2 = await User.findOne({ email: req.user.email });

    if (!user._id.toString() || !User2._id.toString()) {
      return next(errorHandler(404, "User not found"));
    }

    if (user._id.toString() !== User2._id.toString()) {
      return next(errorHandler(403, "You are not allowed to crate this user"));
    }

    const newComment = new Comment({
      content,
      postId,
      userId: user._id.toString(),
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    return next(error);
  }
};