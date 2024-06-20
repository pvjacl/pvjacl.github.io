# Puyallup Valley JACL website

This is the source code for the Puyallup Valley JACL main website. This site was bootstrapped from [the Astro JS](https://astro.build) website framework and compiles down to static HTML/CSS/Javascript and requires development tools to modify the website

## Required Development tools

Modifying this website requires the following tools on any PC/Mac/Linux computer:

* Complete installation of [Node JS](https://nodejs.org) including the NPM dependency library. Test by typing ```node --version``` into a terminal or command line.
* A fairly modern version of [Git](https://git-scm.org), which might be installed by default on some computers. Test by typing ```git --version``` into any terminal or command line.
* A good code editor to change the code. [Microsoft's Visual Studio Code](https://code.visualstudio.com/Download) is free and available for Windows/Mac/Linux and many other OSes.

## Built using Astro JS

Technologies used to create this website: 

* This website uses [Astro JS](https://astro.build) to create a static website (HTML, CSS and Javascript files with NO server). 
* All code is written using [TypeScript](https://www.typescriptlang.org/).
* We use this account's Github Pages address [https://pvjacl.github.io](https://pvjacl.github.io). The combination of naming the repository ```pvjacl.github.io``` and turning on the Github Pages option means that the Pages website will publish the static files located in the ```/docs``` folder.

* [React](https://react.dev) is used for all user interactions with this website. 

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── docs/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## How To Start Developing the Website

Use ```git``` to clone the source code repository by typing the following line into a terminal. Be sure to choose an appropriate directory where you want to place the source code. The following line will clone the source code into the directory titled ```pvjacl``` (you can choose any directory name that you like here). After that, change to the pvjacl directory and start the build process

```
git clone https://github.com/pvjacl/pvjacl.github.io pvjacl

cd pvjacl
npm run dev
```

At this point, the website will show up on any browser in this computer at http://localhost:4321. Start modifying the source code and watch your changes happen as soon as you save your files. Adding some photos will require that you restart again. Hit ctrl-C (sometimes twice) to quit the development engine, then start it up again with ```npm run dev```.

Once you have everything looking perfectly in the website, you can stop the development engine as above, then next type ```npm run build``` to actually create the static website. 

Now that you've built the static website, all you have to do is to do a GIT commit (using VSCode or via terminal command line) and Git push. Once you push to the origin, your changes will be reflected on the website within minutes.

To Review:
1. ```npm run dev``` to develop and debug the website.
2. ```npm run build``` to create the static website.
3. Commit the website using Git, then Push to Origin

The website will update within a few minutes.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./docs/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Links that can't change
QR codes from the Reemembrance Gallery go directly to the following URLs and must never change, or must be handled.

* ```/gallery/gallery-names```
* ```/gallery/gallery-tours```
* ```/gallery/gallery-donate```

Redirections can be handled by Astro in the ```astro.config.mujs``` file as shown here where a redirects folder has three files that do a client side redirect (it works, but sometimes you can see a flash of a page change). Use of redirects will be saved for the future.
```
  redirects: {
    '/redirects/gallery-names': '/gallery/gallery-names',
    '/redirects/gallery-donate': '/gallery/gallery-donate',
    '/redirects/gallery-tours': '/gallery/gallery-tours'
  },
```

## Add a gallery event

To add a Gallery Event, you simply create a file in the ```src/content/galleryEvents``` folder. The name of the file must not contain spaces, so it makes sense to replace spaces with hyphens. For example, a Gallery Special Fall Tour event might be called **"fall-tour-2025."** To create a [Markdown](https://docs.astro.build/en/guides/markdown-content/) file, this file would be **"fall-tour-2025.md."** If you need to add special code components to the markdown, you would create a [MDX](https://docs.astro.build/en/guides/markdown-content/) file, so **"fall-tour-2025.mdx."** If you're capable of working HTML and CSS and need special control of how a web page displays on screen, then feel free to create an [Astro](https://astro.build) page, **"fall-tour-2025.astro."**

Each page must start with this date in the header, so the start of the page must look like this:
```
---
title: "Community Grand Opening"
description: "Community Grand Opening of the Remembrance Gallery"
keywords: "Remembrance Gallery Puyallup Fairgrounds World War WWII"
pubDate: "May 20, 2024"
eventDate: "August 17, 2024"
---
```

| Data Heading    | Description           | Example                |
| --------------: | :-------------------- | ---------------------- |
| `title:`        | Title of Page         | "Community Grand Opening" |
| `description:`  | Description of the page - this text will show up on Google Searches  | "Community Grand Opening of the Remembrance Gallery |
| `keywords: `    | keywords to help search find this page | "Remembrance Gallery Puyallup Fairgrounds World War WWII" |
| `pubDate:`      | Date to publish event on the website | "May 20, 2024" |
| `eventDate:`    | Date of the event     | "August 17, 2024" |


### Preserve the CNAME file

After building the project in the ```docs``` folder (default), before you commit, be sure to not delete the ```CNAME``` file in the ```docs``` folder. If you do, the github pages website won't work properly
* The page won't be able to find the CSS files and it'll look awful
* the URL will say ```https://pvjacl.github.io``` instead of ```https://puyallupvalleyjacl.org```

I haven't figured out how to automatically generate the CNAME file in the docs folder  after every build.

### Wix DNS Records 
These values only perserved in case I have to go back to Wix.

A(Host)
* 185.230.63.171
* 185.230.63.186
* 185.230.63.107

CNAME
* cdn1.wixdns.net