---
title: 'Los Angeles Dept of Building & Safety'
date: '2016-02'
start_date: 'April 2015'
end_date: 'February 2016'
work_description: I reorganized content for a 15-year-old city department site to clarify department services. I also redesigned and developed the content management system to optimize maintenance. The new website improved findability by 30%, and increased usage by 20%. The project was launched in less than one year.
description: Case study about redesigning a 15-year-old city department website.
permalink: /work/ladbs/
work_type: Website
work_direction: <strong>Client:</strong> Los Angeles Dept of Building & Safety
work_contribution: <ul><li>Stakeholder &amp; user interviews</li><li>Content inventory &amp; sitemaps</li><li>Information architecture</li><li>Taxonomy</li><li>CMS design &amp; development</li><li>Front-end development</li><li>Google Analytics</li><li>Web &amp; PDF accessibility</li><li>Workflows for applications</li></ul>
image: 'src/images/LADBSResponsiveSet.jpg'
imagealt: Colorful responsive designs of a website, with the City of Los Angeles navbar at the top and the tagline `We advice, guide, and assist so you can build safe, well, and fast` over a hero image of the Los Angeles downtown skyline.
imagecaption: The LADBS.org homepage shown on a laptop, tablet, and phone.
---

## The brief
The Los Angeles Dept of Building and Safety’s 15-year-old website at LADBS.org was no longer serving the needs of on-the-go site visitors looking to be informed. The site did not indicate details of department services, and was not responsive on mobile phones. Increased expectations from executives about attracting developers to the city also prompted a redesign.

They sought improved findability with a more modern, business-oriented brand.

## My role
I was hired to organize content as an information architect, then took on the roles of product manager, UX designer, and front-end developer.

## What I did

### Interviews
To see where the current website was serving user needs, I met with customer-facing employees at the permitting counter and the concierge desk. I also had conversations with contractors and architects. I learned that:

- The site did not have information for customers unfamiliar with the permitting process. That would result in unnecessary visits to the department, wasting time and money.
- People familiar with the construction process did not use the site extensively. They would only refer to a specific set of documents, or bypass the content to go right to our online services.

It was clear that with the re-organization of existing content, we also needed to add information so customers could answer the question, **“Do I need to come to an LADBS office, and if I do, what do I need to know or bring?”** At the same time, we also needed to have shortcuts for customers already working in construction.

- - - - - -

### Information architecture
I did a top-to-bottom inventory of existing content, and added pages where there were gaps in information. It resulted in a sitemap of 200 pages.

{% image "src/images/LADBS-SitemapWEB.png", "LADBS.org content inventory in a Google Sheet, containing multiple columns and displaying 20 out of the 200 rows", "Documenting structure, page template, content notes, and redirect link, while mapping to old content." %}

Reorganizing content also required a redesign of page layout. I sketched out rough wireframes for the homepage, then first and second level department pages.

{% gallery "sketches" %}
	{% galleryImage "src/images/LADBShomepagesketch.jpg", "Rough pen sketch of the homepage, laying out the major areas and explanations, including tasks." %}
	{% galleryImage "src/images/LADBSDept1sketch.jpg", "Rough pen sketch of a first-level department page template, laying out the major areas including main description and tasks." %}
	{% galleryImage "src/images/LADBSDept2sketch.jpg", "Rough pen sketch of a second-level department page template, laying out how forms would be presented." %}
{% endgallery %}

I presented the following mockups to executives to finalize layout, and then brought on a visual designer to help with branding.

{% gallery "prototypes" %}
	{% galleryImage "src/images/LADBSHomePlanSubs.jpg", "Early mockup for home page, featuring quick links and quick info area." %}
	{% galleryImage "src/images/LADBSPlanCheckPgSub.jpg", "Early mockup for services page, featuring quick link area." %}
{% endgallery %}


To help customers immediately, I also redesigned the permitting process flowchart, indicating where responsibility passed between the customer and LADBS. The helpdesk staff began spontaneously referring to it right away.

{% gallery "buildingflowchart" %}
	{% galleryImage "src/images/LADBSbuildingpermitprocessingflowchartOLD.jpg", "Original building permit flowchart, featuring arrows pointing to steps without a sense of the bigger picture." %}
	{% galleryImage "src/images/LADBSBuilding-Process-Flowchart.png", "Redesigned Building Permit Process flowchart, visually separating responsibilities and stages." %}
{% endgallery %}

### Taxonomy
To help with customer needs, we needed to present our 1000 documents in various categories in multiple areas in the website. To leverage reusable content with our CMS, I devised a taxonomy for all of our forms and publications.

{% image "src/images/LADBSTaxonomy-for-Forms.png", "Google Sheet showing 8 columns and 47 rows, with conditionally colored cells based on status", "Documenting one library of forms, including document ID, accessibility logging, categories, and tags." %}

### Development
At this point, we needed to maintain increased expectations with empowered website editors. I took on a complete overhaul of the CMS, becoming the in-house expert after taking over from outside vendors. I minimized the number of custom-coded page templates and widgets, leveraging existing CMS features for ease of maintenance for both developers and non-developers.

In addition to the CMS development, I was responsible for front-end development, adding:

- Fully responsive design for desktop, tablet, and phone
- Special information for printed views
- Google Analytics event tracking, for documents and online services
- Automated daily Google Analytics reports emailed to management

I also worked with back-end developers on:

- Live wait times widgets for each office
- Automatic holiday announcements

### Accessibility
Given that LADBS is a government entity, we also needed to comply with Section 508 accessibility standards. I worked with the Department on Disability to standardize and document PDF accessibility processes.

We also worked with the Mayor’s Office to adopt web accessibility using SiteImprove.

## Results
We launched the new website 10 months after I came on, and 6 months after I took over development. Findability improved by 30%, and usage increased by 20%.

{% gallery "finalLADBS" %}
	{% galleryImage "src/images/LADBSHome.jpg", "LADBS.org homepage, featuring open times on the navbar, search box in above the fold, grids of links containing similar tasks ordered by popularity." %} 
	{% galleryImage "src/images/LADBS-PCP.png", "Main services page, featuring content areas separated by task, and reusable widgets." %}
	{% galleryImage "src/images/LADBS-FormsPubs.png", "Category documents page on LADBS.org, featuring modular tab content and dynamic document widgets." %}
{% endgallery %}


## Other department work

After launching the site, I then worked on workflows for other applications, developing the front-end as needed.
 
 {% gallery "LADBSother" %}
 	{% galleryImage "src/images/LADBSIntranetStickies.jpg", "Affinity diagramming content on Post-Its for LADBS intranet." %}
	{% galleryImage "src/images/LADBSIntranetWireframes.jpg", "Sketches detailing search interactions for a document search application." %}
	{% galleryImage "src/images/LADBSIDIS-screensWEB.jpg", "Wireframes documenting flow for document search application, transitioning between templates depending on search result type." %}
	{% galleryImage "src/images/LADBSEBEWE.png", "Informational webpage combined with online registration application workflow." %}
	{% galleryImage "src/images/LADBSCold-WetWeatherShelterapp.png", "Workflow and front-end development on a temporary shelter application, delivered in accordance to City ordinance." %}
	{% galleryImage "src/images/LADBSEPlanDesignWorkshop.jpg", "Facilitating a design workshop with project managers for internal application." %}
{% endgallery %}

## Related blog posts
- [GovTech, the job you never thought you’d love](/govtech-jobs)