import { getLinkPreview } from "link-preview-js";
import { validateURL } from "../../utils";

export default async function handler(req, res) {
  let url = req.query.url;
  const isValid = validateURL(url);

  if (!isValid) {
    res
      .status(400)
      .json({ error: true, message: "Given string is not a valid URL!" });
    return;
  }

  if (url.startsWith("www")) {
    url = `http://${url}`;
  }

  const data = await getLinkPreview(url);
  res.status(200).json(data);
}
