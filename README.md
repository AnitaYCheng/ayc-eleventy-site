# The Eleventy build of [Anita Cheng's website](https://anitacheng.com/)
I started from the [Eleventy Duo starter theme](https://github.com/yinkakun/eleventy-duo) and heavily modified it.

I decided to save a version of this website separately, since I prefer to build and test locally. (Also, because the GitHub Actions I've seen involved `npm` and the Duo theme uses `yarn` and I just couldn't be arsed to figure it out for yarn...)

This will be the initial build from March 2024. I probably won't bother updating this repo with new blog posts or the like.

## Notes (TBH mostly for myself!)
- Make sure you're using `node 16` to use Eleventy Duo. Use `nvm install 16` to install it.
- Install dependencies with `yarn install` 
- Add any plugins with `yarn add` if the directions are usually `npm install`
- Serve the site locally with `yarn dev`
    - `yarn build` will clear out anything in the `publish`folder to build a production version of the site. However, I needed separate `.js` files to use the Photoswipe gallery. Compiling all the JS files rendered it useless. So I actually use the files generated from `yarn dev` to push to GitHub. It apparently doesn't make much of a difference, [according to Eleventy documentation](https://www.11ty.dev/docs/deployment/). 

## Customize
Open `data/site.json` and adjust the values to your details, it contains vital information to make the site your own. You'll need to change the description, title and URL to match with the project, edit navigation items and social media links.

You'll also need to replace the favicon and default social image in the `src/images/` directory with your own graphics.

## Manually edit contents
### Homepage
Edit the homepage content at `src/index.md`. The layout is in `layout/home.njk`.

### About page
Edit the about page content at `src/about.md`.

### Blog posts
Blog posts are at `src/posts`. Do not delete the `posts.json` file. Create blog posts in markdown format.

### Work and projects
Work and projects are stored in the `src/work/` and `src/projects/` folders respectively. They essentially use the same template, but need to run through different collections for pagination. I use front matter data (which can include HTML) to populate the "excerpt" section that sticks to the browser window as you scroll.

### Conferences
Each speaking engagement listed on the `speaking` page is saved separately in the `src/conferences/` folder. They only use front matter to populate the date, event type, transcript, etc.

## Fun coding tricks I took from other places
- [SVG favicon in dark mode](https://codyhouse.co/nuggets/svg-favicon-dark-mode), because mine looked janky
- [Image galleries with PhotoSwipe](https://www.markllobrera.com/posts/eleventy-building-image-gallery-photoswipe) and I also somehow implemented [dynamic captions](https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin) with it. This is referenced in `.eleventy.js`
- [Reading progress bar](https://w3collective.com/reading-progress-indicator/) added to `src/js/main.js`
- [Detecting when a user has set their browser font size to be large](https://www.plousia.com/blog/detecting-browser-font-size-fix-accessibility-and-layout-issues-large-fonts), so I could tweak some layout and typography
- [Eleventy redirect from](https://brianm.me/posts/eleventy-redirect-from/) since some of my URLs no longer match the old ones. It really adds a ton of folders, but worth it!

### Hanging punctuation
A lot of things I had to hack in JavaScript on my old site, I can now do in CSS! Like the aforementioned sticky div. Super cool! But the `hanging-punctuation` CSS property is still not standard, sadface. Luckily [this tutorial from envatotuts+](https://webdesign.tutsplus.com/getting-the-hang-of-hanging-punctuation--cms-19890a) still works, even if it's 10 years old! I stuck the code into `src/js/main.js`.

### Smart quotes
Hahaha, I didn't end up finding a code solution to automatically add smart quotes. It turns out `markdown-it` (mentioned in `.eleventy.js`) has a `typographer` option that includes smart quotes. But when I set it to `true` it broke my galleries. (It's important to test when you add stuff!) It was trying to replace JavaScript quotes rendered by Photoswipe. I am not that good of a dev, so I elected to set text replacement to add smart quotes when I write in Obsidian, and then it copies over to Visual Studio Code where it's rendered properly.

### Lottie Files animations
I downloaded the `.json` version of the icons on [Unicorn Icons](https://unicornicons.com/), then had to add the [Lottie Files script](https://lottiefiles.com/web-player) in `src/layouts/base.njk` to activate them. Fun fact, you can add `aria` elements to these to add alt text!


## Built (via the Eleventy Duo theme) with
- Eleventy for site generation (obviously)
- Webpack for asset bundling
- PostCSS for CSS processing
- Autoprefixer for vendor prefixing CSS
- PostCSS Preset Env for transpiling css
- PurgeCSS for unused CSS removal
- CSSNano for CSS minification

