---
title: 'LiveWell San Diego hackathon website'
date: '2014-06-09'
work_description: As part of a 3-person team, we produced a website over 36 hours for local San Diego policymakers and civilians with an interest in population health. We received 3rd place in the "Harnessing Local Data to Help Prevent Four Major Diseases in San Diego County" Code-A-Thon sponsored by Health 2.0.
description: Case study for a healthcare hackathon project.
permalink: /projects/livewellsd/
work_type: Website
work_direction: Hackathon project
work_contribution: <ul><li>User flow</li><li>Content inventory</li><li>Wireframes</li><li>Copywriting</li><li>HTML/CSS (Twitter Bootstrap)</li><li>Git version control</li><li>Graphic design</li><li>Discussions about data communication</li></ul>
image: 'src/images/SDhome.png'
imagealt: Homepage of the hackathon site, displaying the title 'Using data for better health in San Diego - 3 behaviors, 4 chronic diseases, 50% of deaths.'
imagecaption: ""
redirect_from: /work/livewellsd/
---

## Introduction

Over 50% of all deaths in the US can be attributed to 3 behaviors that result in 4 chronic diseases. This is known as the “3-4-50” concept.

The aim of the hackathon was to build a website communicating the connection between these behaviors and the diseases they cause, on a local level. The more knowledgeable the population, the more engaged they can be in improving their own health.

## What I did

### User research

At the hackathon, I had conversations with a few spectators about what they would want to see from a website like this. For a health data website, they would want to know what they, as individual citizens, could do to improve their own health.

I hammered out a user flow with the spectators, focusing on the main questions they would have while going through the website.

{% image "src/images/SDContentSketch.jpg", "A desk full of stickies organized into 3 lanes.", "Organizing and categorizing proper user flow, using phased questions" %}

### Content strategy

At the hackathon, we were given a large data set, which included demographic census data and health data, sorted by subregional areas in San Diego County.

In aiming to make the issue as local as possible for both policymakers and civilians, we also looked up health-related locations such as grocery stores, liquor stores, parks, farmers markets, etc.

We concentrated on leading regular people on a story of what the data meant, making it easy to look up how their neighborhood was doing on a number of health outcomes. In addition, we would show them how those outcomes were potentially connected to local factors, such as number of grocery stores and liquor stores.

### User experience

In order to make sure we were all on the same page before jumping into [Esri story maps](http://storymaps.arcgis.com/en/) and coding, I produced a few key wireframes.

{% gallery "wireframes" %}
	{% galleryImage "src/images/SDHomeWireframe.png", "Home page wireframe, explaining concept and laying out overview map" %}
	{% galleryImage "src/images/SDRegionPageWireframe.png", "Region page wireframe, connecting graphs with relevant issue" %}
{% endgallery %}  

### Visual design

Instead of hoisting a bunch of text onto the user explaining the concept of the website, I made a series of icons in Illustrator to make the introduction engaging and easy to understand.

The developer (Andrew Akagawa) and I used Git and Twitter Bootstrap to build the website together, with me focusing on CSS and him focusing on data visualization using Google Charts. Healthcare data specialist Diana Gesshel (as usual) was our data queen, collecting and organizing the local data to display on our map.

## Final result

We debuted [our prototype](http://anitacheng.com/livewellSD/index.html), and received 3rd place in the *Harnessing Local Data to Help Prevent Four Major Diseases in San Diego County” Code-A-Thon* sponsored by Health 2.0.