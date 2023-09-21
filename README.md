# Next Reviews

This is a sample application used in the [**Next.js by Example**](https://www.udemy.com/course/nextjs-by-example/?referralCode=590EBB6EDE0917E3CF58) course.

## Notes

### Lecture 13

- Prerendering: next js rendered the react components on the server and generates the html to send to the browser. It is the main feature of next js compared to traditional react app.
  - Faster Page Load, client side takes more time.
  - Search Engine Friendly.
  - Support NON-JS clients. (unless you want interactive web pages)
    - need to add `'use client'` to top of a component page that needs client side logic (like useEffect)

<img src="./docs/img/server_and_client_components.png">

### Lecture 14: Dev vs Prod server

- dev server is designed to help us develop the app
  - regenerates code

run `npx next --help`. We see the following output:

```bash
❯ npx next --help
Usage
  $ next <command>

Available commands
  build, start, export, dev, lint, telemetry, info, experimental-compile, experimental-generate

Options
  --version, -v   Version number
  --help, -h      Displays this message

For more information run a command with the --help flag
  $ next build --help
```


The build step generates our static HTML into our `.next` folder.  

```bash
❯ npm run build

> build
> next build

- info Creating an optimized production build  
- info Compiled successfully
- info Linting and checking validity of types  
- info Collecting page data  
[    ] - info Generating static pages (0/7)[HomePage] rendering
- info Generating static pages (7/7)
- info Finalizing page optimization  

Route (app)                                Size     First Load JS
┌ ○ /                                      837 B          77.9 kB
├ ○ /about                                 152 B          77.2 kB
├ ○ /reviews                               152 B          77.2 kB
├ ○ /reviews/hollow-knight                 152 B          77.2 kB
└ ○ /reviews/stardew-valley                152 B          77.2 kB
+ First Load JS shared by all              77.1 kB
  ├ chunks/2443530c-82eff788789df68b.js    50.5 kB
  ├ chunks/488-a3144eabfc954df8.js         24.7 kB
  ├ chunks/main-app-370263150151e44e.js    216 B
  └ chunks/webpack-8074fabf81ca3fbd.js     1.61 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   181 B          73.9 kB
+ First Load JS shared by all              73.7 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-5756f2d7835519c9.js        26.8 kB
  ├ chunks/pages/_app-b555d5e1eab47959.js  195 B
  └ chunks/webpack-8074fabf81ca3fbd.js     1.61 kB
○  (Static)  automatically rendered as static HTML (uses no initial props)
```

then we can start
```bash
> next start
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```
The most important take away is when we run app in dev mode things work differently than prod. Dev server re renders are pages every time we request them, but that's not the same in prod, at least with static pages.