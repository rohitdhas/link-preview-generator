import { getLinkPreview } from "link-preview-js";
import { validateURL } from "../../utils";

export default async function handler(req, res) {
  const { url } = req.query;
  const isValid = validateURL(url);

  if (!isValid) {
    res
      .status(400)
      .json({ error: true, message: "Given string is not a valid URL!" });
    return;
  }

  const data = await getLinkPreview(url);
  res.status(200).json(data);
}
