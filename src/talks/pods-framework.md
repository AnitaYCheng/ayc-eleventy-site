---
title: 'Set it and forget it: Structured content in WordPress with the Pods framework'
permalink: /talk/pods-framework/
slides_link: 'https://docs.google.com/presentation/d/1Z_P5Iwr23aRyg6LEnBCYjP8n5gL0ZxjThtcR4ykw1pc/edit?usp=sharing'
talklength: 45-min talk
description: A runthrough of using the Pods framework in WordPress.
event: East Bay WordPress meetup
---
Hi everyone, and welcome to "Set it and forget it: Structured content in WordPress with the Pods framework." I'm Anita.

About me. So I’m a User Experience Team of One working on affordable housing in San Francisco, and current content strategist for this year’s IA Summit conference. Hilariously, both gigs were supposed to be about content and I ended up doing front-end dev for both. Fun fact about me - I’m a former cancer scientist. As you can tell, I’m really big on empowering people. Hence this talk.

As a content strategist and UXer, what empowerment means for my job, is mostly having structured content. (Yes, I believe empowerment takes many forms!) 

So what IS structured content? It means that it’s content organized by default, usually with metadata when you set up the system. When you have structured content, there should be no fussy formatting, no touching code, no copy-pasting across multiple pages, not trapped by the WYSIWYG field. Things should “just work” without you having to check multiple places.

Sound famliar? These are all reasons why we started using a CMS like WordPress in the first place!

Now here’s the ugly truth. Those WordPress themes we all love, the very reason why WordPress runs 30% of all websites today….they are all total failures of structured content.

The thing that runs a theme, is the stylesheet and the functions.php file. They’re theme-specific, they create anything the theme needs, and they create custom post types and taxonomy. That means if you’re running a photography blog, you’ll probably have photos, articles, photographers, locations….all contained as custom content types, only in that theme.

But what happens when you change the theme?

Nooooo. Homer’s realized it’s all gone, all that custom content seems to disappear.

So what's happening here? 

Imagine you had a restaurant. So this guy made the headlines last month, for going into a Waffle House and grilling his own burger there since the employees were asleep. There’s a reason it made the headlines, because...that’s weird, right?

And there are certain things that make you go “Hmmm.” Is this an insurance company...Or a former Pizza Hut? The building’s very design is confusing, you aren’t quite sure what you’re going to get by looking at it. You look at the building and you think “Oh it’s a Pizza Hut” but then it’s...not...

This is because you have overlapping roles that are mixed-up with each other! Which is really obvious in a restaurant!

In a well-run restaurant, these roles don’t overlap. The cooks don’t take orders from the diners, because they’re busy cooking! The waiters don’t cook, because they’re making sure the diners are having a good experience. And let’s hope the diners don’t have to create dishes for themselves in a restaurant!

First, you have a kitchen, where all the raw ingredients sit, waiting to be cooked and plated according to the chef’s menu.

The diner’s experience is another “role” of sorts. They could see a menu (drink menu, food menu, dessert menu) or it could be the dishes or drinks or silverware.

Then there is the waiter. They take information from the the diner to the kitchen, and then take food and drinks from the kitchen to the diner. They go in between the diners and the kitchen, and make sure everything gets to where it’s supposed to go.

Now, we already have a development framework that separates the roles similarly - the MVC software architectural pattern.

A restaurant is like software - you want these functions to be completely separate. In software, the model is the database, where all the information sits. The view is whatever you see on the screen. And the controller is a bit of code that modifies and runs information back and forth between the model, view, and the user. 

With this, if the view— the look—is changed, no content is changed. It’s like in a restaurant - if you change the design of the menu, or the color of the walls, it doesn’t change the food. In software, you can change the color, the fonts, even the layout, move stuff around, and it doesn’t change the content. 

With this framework, we can start to think about how to build our WordPress setup in a way that separates these functions.

The problem with WordPress themes is that they’re a mix of model, view, and controller all in one. It’s supposed to be mainly view, but it can also define a lot of structure! You change one side, you’ll change the function of another. 

Which is how you end up with a confusing mess, where you aren’t sure what you’re going to get!

The way to fix this, is by keeping structure out of the functions.php file as much as possible, and by using plugins. Plugins are theme-independent. They’re a mix of model and controller. If you use plugins to build your structured content, you can change the theme and everything stays.

So that’s a high level look about we should use plugins to build our structured content, and not the functions.php file. But then, why Pods and not another plugin?

Here's a comparison chart of various WordPress plugins. Sure there's Advanced Custom Fields and Toolset Types, but they don't have the features that Pods does. Pods is independent of functions.php, you only need HTML and CSS, adding relationships to content is easy, and it's free! Plus there's the developer Jim for support. Seriously, nobody beats Jim. He was even answering my questions as a hurricane was bearing down on his house.

The project I’ll be showing you today is the website I’ve created for the IA Summit conference. At work, we’re on Drupal, and the less I say about Drupal, honestly, the better!

So this is the history of the project. I was dealing with a bunch of mixed-up content that was just migrated from an incomplete Drupal project. People had attempted to build detailed structured content for the site in Drupal, but - get this - they couldn’t find a Drupal theme developer to build it as specified. Surprise, surprise. And keeping in mind that everyone would literally work from scratch to build a completely new site every year.

And in the organizing side, a new team is always brought in every year. Which means, the website team might change, and of course there was no documentation at all. And with a new website team, they might change out the theme without thinking too hard about things. Remember what we said about not using themes to build functionality? Yeah. So that’s why I knew I needed to do this with a plugin.

As content strategist, I then asked myself, what should the conference site revolve around? What is that one thing that makes us special? It's all about the people!

So I connected a "Person" custom post type to talks and posters, using Pods. I was able to pull people's bios from their single post into "Talk" custom post types. 

You can also build Pods Templates in the WordPress admin dashboard. They can replace any built-in page templates using HTML, CSS, and what they call "magic tags." You can also use built-in conditionals and a repeater for multiple instances.

Here's an example of how I used conditional layouts on a "Talk" custom post type.

You can also pull it all together with shortcodes! You can insert Pods content into any WordPress pages or posts, whether it be a single item, a list of items, field from a single item, field from the current item, or even a form for editing Pods. You can also use SQL calls to filter in shortcodes.

Here's an example of what that looks like, using filters to display people involved in IA Summit. There are the co-chairs, the keynote speakers, and session speakers.

Thank you for your time! Any questions?