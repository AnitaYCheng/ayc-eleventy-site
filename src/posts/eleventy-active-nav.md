---
title: 'Assigning an active page in Eleventy navigation'
date: '2024-02-03'
description: "A small tip for computed navigation, when the URL structures don’t all match."
permalink: /notes/eleventy-active-nav/
tags: 
    - coding
    - notes
---
## The background
I’ve always believed it was good wayfinding practice to mark where a particular page was in the global navigation, visually as well as in the code. That way the site visitor has an idea of where they are, especially if they landed on a secondary page from a link or a search result.

This is easy enough to do when hand-coding. But it can get tricky when you’re rolling your own system that computes some things for you too! That was the situation with my Eleventy site.

Since I started from the [Eleventy Duo theme](https://eleventyduo.netlify.app/), my global navigation links are contained in the global `site.json` as follows:

```
"headerLinks": [
    {
      "text": "Work",
      "url": "/work/",
      "external":false
    },
    {
      "text": "Writing",
      "url": "/writing/page-1/",
      "external": false
    },
    {
      "text": "Speaking",
      "url": "/speaking/",
      "external": false
    },
    {
      "text": "About",
      "url": "/about/",
      "external": false
    }
  ],
```

The **Writing** navigation item goes to the first page of my [paginated](https://www.11ty.dev/docs/pagination/#paging-a-collection) post collection. 

The theme then assigns an `aria-current="page"` in `base.njk` to any child pages as follows:

{% raw %}
```
{% if item.url in page.url %}
    {% set currentAttribute = 'aria-current="page"' %}
{% endif %}
```
{% endraw %}

That means if the navigation item’s URL is found within a page’s URL, that page will show the `aria-current="page"` attribute on the navigation item. Example: `/work/ladbs/` contains `/work/`, so the **Work** navigation item on the [LADBS page](/work/ladbs/) will be marked `aria-current="page"`.

I can then style that in CSS accordingly:
```
[aria-current="page"] {
  border-bottom:5px solid #66B1BC;
}
```

## The issue
My content doesn’t always follow the navigation item URLs cleanly.

I have 2 kinds of writing that I do: fairly long-form writing and live-tweet notes/summaries, which are much shorter. It didn’t feel right to treat them both the same. I also have talk transcript pages that are *related* to speaking, but it felt weird to literally have “speaking” in their URLs.

(Overthinking these things is probably a job hazard of doing information architecture! &#128517;)

Not to mention, the **Writing** navigation item doesn’t even have `/writing/` as its URL, so nothing beyond the first collection page would ever match! And no, I haven’t found a way to easily direct `/writing/` to `/writing/page-1/` in the front matter without Eleventy complaining about it.

### Things I tried
First I tackled it on an individual page level for the talks and notes. I added new data to the front matter, with the intention of assigning it a navigation item. Couldn’t get that to work, probably because of scope and syntax reasons. (If you only know enough code to be dangerous, scope or syntax *always* trip you up!)

Then I tried fiddling with the comparison operators in the navigation in `base.njk`. But there isn’t an easy way to write code for “If a slug matches text between slashes, pass it through.” I foresaw a *huge* mess of code.

## The solution
Thinking about the comparison operator, I realized that I could add more oppotunities to match things in the navigation itself.

I decided to add more things to match in `site.json` even if most of the items would have duplicates. Introducing `slug` and `slugalt`!
```
"headerLinks": [
    {
      "text": "Work",
      "url": "/work/",
      "slug": "/work/",
      "slugalt": "/projects/",
      "external":false
    },
    {
      "text": "Writing",
      "url": "/writing/page-1/",
      "slug": "/writing/",
      "slugalt": "/notes/",
      "external": false
    },
    {
      "text": "Speaking",
      "url": "/speaking/",
      "slug": "/speaking/",
      "slugalt": "/talk/",
      "external": false
    },
    {
      "text": "About",
      "url": "/about/",
      "slug": "/about/",
      "slugalt": "/about/",
      "external": false
    }
  ],
  ```

And then I was able to add `or` logic to `base.njk`:
{% raw %}
```
{% if item.url in page.url or item.slug in page.url or item.slugalt in page.url %}
    {% set currentAttribute = 'aria-current="page"' %}
{% endif %}
```
{% endraw %}

Now, if the page’s URL contains `/writing/` or `/notes/` in addition to `/writing/page-1/` (which was limiting to start with), then it would assign the **Writing** navigation item as the page it sits under. Bonus is that I don't need to fiddle with any individual pages this way either! Mission accomplished! &#127881;