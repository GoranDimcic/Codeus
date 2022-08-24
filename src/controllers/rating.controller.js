import * as ratingService from "../services/rating.service.js";

export const UpdateRating = async (req, res) => {
  const { gameId, rate } = req.body;

  try {
    const [rating] = await ratingService.getRating(req.id, gameId);

    if (!rating) {
      await ratingService.createRating(req.id, gameId, rate);
      const newRating = await ratingService.newRating(gameId);
      res.status(201).json({
        data: newRating,
        message: "Created rating.",
      });
    } else {
      await ratingService.updateRating(req.id, gameId, rate);
      const newRating = await ratingService.newRating(gameId);
      res.status(201).json({
        data: newRating,
        message: "You updated the rating.",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Error",
    });
  }
};
