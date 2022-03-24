import { fizzBuzz } from "../utils/utils.js";
import { fizzBuzzValidator } from "../validators/fizzBuzzValidator.js";

export const handleFizzBuzz = (req, res) => {
  const [err, inputData] = fizzBuzzValidator(req.body.data);
  if (err)
    return res.status(400).json({ success: false, message: err.message });

  return res.json(fizzBuzz(inputData));
};
