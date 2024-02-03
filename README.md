## Cloudflare Image Hosting

Free unlimited image hosting on Telegraph, deployed on Cloudflare.

### Features

- Free & Unlimited
- Drag & Drop to upload
- Copy & Paste to upload
- Max file size is 5MB

### Screenshots

<img src="https://images.mingming.dev/file/a880a86209e32ccec4f24.png" width="700" />

### Development

```
npm install
npm run dev
```

### Deployment

```
npm run deploy
```

### Development Plan

- [x] Redesign UI
- [ ] Save history of uploading
- [ ] Support setting white list to prevent abusing
- [ ] Support copying multiple formats, such as Markdown
- [ ] Support compressed images

### FAQ

<details>
  <summary>How to deploy to Cloudflare?</summary>

```bash
$ git clone https://github.com/ifyour/cf-image-hosting.git
$ cd cf-image-hosting
$ npm run install && npm run deploy
```

</details>

<details>
  <summary>How to bind a domain name?</summary>
  Triggers -> Custom Domains -> Add a custom domain.
  <img src="https://images.mingming.dev/file/a7e19c9e0f169861fefa6.png" width="700" />
</details>

### Credits

- [missuo/Telegraph-Image-Hosting](https://github.com/missuo/Telegraph-Image-Hosting)
- Telegraph
- Cloudflare

### License

MIT
