const { DateTime } = require('luxon');
const readingTime = require('eleventy-plugin-reading-time');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
// const sharp = require('sharp');
const Image = require("@11ty/eleventy-img");
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const externalLinks = require('eleventy-plugin-external-links')

const isDev = process.env.ELEVENTY_ENV === 'development';
const isProd = process.env.ELEVENTY_ENV === 'production'

const manifestPath = path.resolve(
  __dirname,
  'public',
  'assets',
  'manifest.json'
);

const manifest = isDev
  ? {
      'main.js': '/assets/main.js',
      'main.css': '/assets/main.css',
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: 'utf8' }));



// --- START, eleventy-img
const imageShortcode = async (
  src,
  alt,
  caption,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ['webp', 'jpeg'],
  sizes = '100vw'
) => {
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: './public/images',
    urlPath: '/images/',
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  function wrapFigure(output, imageMetadata) {
    return `<figure>${output}<figcaption>${caption}</figcaption></figure>`;
  }

  const pictureOutput = Image.generateHTML(imageMetadata, imageAttributes);
  return wrapFigure(pictureOutput);
}
	// --- END, eleventy-img


// Photoswipe gallery
const GALLERY_IMAGE_WIDTH = 900;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 1000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

function galleryShortcode(content, name) {
  return `
      <div>
          <div class="gallery" id="gallery-${name}">
              ${content}
          </div>
          <script type="module">
              import PhotoSwipe from '/assets/photoswipe.esm.min.js';
              import PhotoSwipeLightbox from '/assets/photoswipe-lightbox.esm.min.js';
              import PhotoSwipeDynamicCaption from '/assets/photoswipe-dynamic-caption-plugin.esm.min.js';
              const lightbox = new PhotoSwipeLightbox({
                  gallery: '#gallery-${name}',
                  children: 'a',
                  pswpModule: PhotoSwipe,
                  preload: [1, 1]
              });
              const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
                type: 'auto',
              });
              lightbox.init();
          </script>
      </div>
  `.replace(/(\r\n|\n|\r)/gm, "");
};

async function galleryImageShortcode(src, alt) {
    let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;

    // const metadata = await sharp(src).metadata();
    // if (metadata.orientation > 1) {
    //   console.log('Rotated image detected:', src, metadata.orientation);
    //   await sharp(src).rotate().toFile(`correct/${src.split("/").pop()}`);
    // }

    // if(metadata.height > metadata.width) {
    //     lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
    // }

    const options = {
        formats: ['jpeg'],
        widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
        urlPath: "/images/",
        outputDir: './public/images/'
    }

    const genMetadata = await Image(src, options);

    return `
        <a href="${genMetadata.jpeg[0].url}" 
        data-pswp-width="${genMetadata.jpeg[0].width}" 
        data-pswp-height="${genMetadata.jpeg[0].height}" 
        target="_blank">
            <img src="${genMetadata.jpeg[0].url}" alt="${alt}" />
        </a>
    `.replace(/(\r\n|\n|\r)/gm, "");
};


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addShortcode('image', imageShortcode);
  eleventyConfig.addPairedShortcode('gallery', galleryShortcode);
  eleventyConfig.addShortcode('galleryImage', galleryImageShortcode);
  eleventyConfig.addPlugin(externalLinks, {
    // Plugin defaults:
    name: 'external-links',         // Plugin name
    regex: /^(([a-z]+:)|(\/\/))/i,  // Regex that test if href is external
    target: "_self",                // 'target' attribute for external links
    rel: "noopener noreferrer",     // 'rel' attribute for external links
    extensions: [".html"],          // Extensions to apply transform to
    includeDoctype: true,           // Default to include '<!DOCTYPE html>' at the beginning of the file
})

  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: false,
  };
  let markdownItAnchorOptions = {
    level: 2 // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
  }
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions));


// Set up "work" collection
eleventyConfig.addCollection("work", function (collection) {
  return collection.getAll().filter(function (item) {
    return item.data.content_type == "work";
  })
    .sort(function (a, b) {
      return b.date - a.date;
    });
});

// Set up "projects" collection
eleventyConfig.addCollection("projects", function (collection) {
  return collection.getAll().filter(function (item) {
    return item.data.content_type == "projects";
  })
    .sort(function (a, b) {
      return b.date - a.date;
    });
});

// Set up "talks" collection (with transcripts)
eleventyConfig.addCollection("talks", function (collection) {
  return collection.getAll().filter(function (item) {
    return item.data.content_type == "talks";
  })
    .sort(function (a, b) {
      return b.date - a.date;
    });
});

// Set up "conferences" collection to contain talks
eleventyConfig.addCollection("conferences", function (collection) {
  return collection.getAll().filter(function (item) {
    return item.data.content_type == "conferences";
  })
    .sort(function (a, b) {
      return b.date - a.date;
    });
});

// set up note-only post filter
eleventyConfig.addCollection("notes", function(collectionApi) {
  return collectionApi.getFilteredByTag("notes");
});

// set up long-form-only post filter
eleventyConfig.addCollection("longforms", function(collectionApi) {
  return collectionApi.getFilteredByTag("longform");
});

// set up mermaid markdown highlighter
const highlighter = eleventyConfig.markdownHighlighter;
eleventyConfig.addMarkdownHighlighter((str, language) => {
  if (language === 'mermaid') {
    return `<pre class="mermaid">${str}</pre>`;
  }
  return highlighter(str, language);
});

eleventyConfig.setDataDeepMerge(true);
eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });
eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

eleventyConfig.addShortcode('bundledcss', function () {
  return manifest['main.css']
    ? `<link href="${manifest['main.css']}" rel="stylesheet" />`
    : '';
});

eleventyConfig.addShortcode('bundledjs', function () {
  return manifest['main.js']
    ? `<script src="${manifest['main.js']}"></script>`
    : '';
});

eleventyConfig.addFilter('excerpt', (post) => {
  const content = post.replace(/(<([^>]+)>)/gi, '');
  return content.substr(0, content.lastIndexOf(' ', 200)) + '...';
});

eleventyConfig.addFilter('readableDate', (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
    'LLL d, yyyy'
  );
});

eleventyConfig.addFilter('htmlDateString', (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
});

eleventyConfig.addFilter('dateToIso', (dateString) => {
  return new Date(dateString).toISOString()
});

eleventyConfig.addFilter('head', (array, n) => {
  if (n < 0) {
    return array.slice(n);
  }
    return array.slice(0, n);
});

eleventyConfig.addCollection('tagList', function (collection) {
  let tagSet = new Set();
  collection.getAll().forEach(function (item) {
    if ('tags' in item.data) {
      let tags = item.data.tags;
      tags = tags.filter(function (item) {
        switch (item) {
          case 'all':
          case 'nav':
          case 'post':
          case 'posts':
          return false;
        }
          return true;
        });
        for (const tag of tags) {
          tagSet.add(tag);
        }
     }
  });
   return [...tagSet];
});

eleventyConfig.addFilter('pageTags', (tags) => {
  const generalTags = ['all', 'nav', 'post', 'posts'];
    return tags
      .toString()
      .split(',')
      .filter((tag) => {
        return !generalTags.includes(tag);
      });
});

eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
  if ( outputPath && outputPath.endsWith(".html") && isProd) {
    return htmlmin.minify(content, {
      removeComments: true,
      collapseWhitespace: true,
      useShortDoctype: true,
    });
  }
    return content;
});

return {
  dir: {
    input: 'src',
    output: 'public',
    includes: 'includes',
    data: 'data',
    layouts: 'layouts'
  },
  passthroughFileCopy: true,
  templateFormats: ['html', 'njk', 'md'],
  htmlTemplateEngine: 'njk',
  markdownTemplateEngine: 'njk',
  };
};