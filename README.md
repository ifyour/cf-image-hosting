### Cloudflare Image Hosting

Free unlimited image hosting on Telegraph, deployed on Cloudflare.

#### Features

- Free & Unlimited
- Drag & Drop to upload
- Copy & Paste to upload
- Max file size is 5MB

#### Screenshots

<img src="https://cf-image-hosting.ifyour.workers.dev/file/fd4045cb45789bcfcbe88.png" width="700">

#### Development

```
npm install
npm run dev
```

#### Deployment

```
npm run deploy
```

#### FAQ

<details>
  <summary>How to bind a domain name？</summary>
  Triggers -> Custom Domains -> Add a custom domain.
  <img src="https://cf-image-hosting.ifyour.workers.dev/file/a7e19c9e0f169861fefa6.png" width="700">
</details>

<details>
  <summary>How to deploy to Cloudflare?</summary>

```bash
$ git clone https://github.com/ifyour/cf-image-hosting.git
$ cd cf-image-hosting && npm run install
$ npm run deploy
```

</details>

#### Credits

- [missuo/Telegraph-Image-Hosting](https://github.com/missuo/Telegraph-Image-Hosting)
- Telegraph
- Cloudflare

#### License

Distributed under the MIT License.
