<img src="https://raw.githubusercontent.com/rohitdhas/link-preview-generator/main/public/logo.png" width="70px" height="70px">

## Link Preview Generator

Generate awesome link previews in your own website...

![Banner](https://raw.githubusercontent.com/rohitdhas/link-preview-generator/main/public/link-preview-banner.png)

## 🌐 Link Preview API

Get link preview data in JSON format with this api

### Example GET Request:

```js
fetch(
  "https://link-preview-generator.vercel.app/api/getPreview?url=https://github.com"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Response:

```json
{
  "url": "https://github.com/",
  "title": "GitHub: Where the world builds software",
  "siteName": "GitHub",
  "description": "GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it.",
  "mediaType": "object",
  "contentType": "text/html",
  "images": [
    "https://github.githubassets.com/images/modules/site/social-cards/github-social.png"
  ],
  "videos": [],
  "favicons": ["https://github.githubassets.com/favicons/favicon.svg"]
}
```

---

<b>Built with Next JS, Tailwind CSS and link-preview-js, as a part of <a href="https://findcoder.io">findcoder.io</a> hackathon</b>
