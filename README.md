# adam-sparks.com

Personal portfolio site for Adam Sparks — Electrical & Computer Engineering student at Oregon State University, focused on RF, embedded systems, and UAV platforms.

## Stack

- HTML5, CSS3, Vanilla JavaScript
- No build step, no frameworks
- Hosted on GitHub Pages
- Custom domain: [adam-sparks.com](https://adam-sparks.com)

## Structure

```
.
├── index.html      # Main page
├── styles.css      # All styling
├── script.js       # Project switcher logic
├── CNAME           # GitHub Pages custom domain
└── README.md
```

## Local Development

Just open `index.html` in a browser. No build, no install.

For live reload, use any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing Projects

Project data lives in the `projects` object at the top of `script.js`. Add or edit entries there — each has a corresponding `<button class="project-item">` in `index.html` that should match the `data-project` key.
