export function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Telegraph Image Hosting</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/static/style.css" />
        <link href="/favicon.ico" rel="icon" />
      </head>

      <body>
        <div className="full-window" ondragover="event.preventDefault()">
          <div className="container card">
            <h3 className="text-center">Telegraph Image Hosting</h3>
            <p className="text-center text-muted">
              Free & Unlimited Image Hosting
            </p>
            <button
              id="upload"
              className="btn btn-primary mx-auto"
              type="button"
              title="Supported formats: Images, videos, GIFs"
            >
              <span className="spinner-grow spinner-grow-sm d-none"></span>
              <span className="upload-text">
                Drag & Drop your files or{" "}
                <u>
                  <i>Browse</i>
                </u>
              </span>
              <input
                id="fileInput"
                type="file"
                name="file"
                accept="image/*, video/*"
              />
            </button>
            <div
              id="uploadStatus"
              className="text-center"
              style="margin-top: 10px"
            ></div>
            <a
              className="text-center text-muted"
              href="https://github.com/ifyour/cf-image-hosting"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/browser-image-compression/2.0.2/browser-image-compression.min.js"></script>
        <script src="/static/script.js"></script>
      </body>
    </html>
  );
}
