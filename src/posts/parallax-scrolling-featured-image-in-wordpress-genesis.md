---
title: 'How to implement parallax scrolling with the featured image in WordPress Genesis'
date: '2014-09-08'
permalink: /writing/parallax-scrolling-featured-image-in-wordpress-genesis/
description: Tutorial about implementing parallax scrolling using the featured image on any WordPress Genesis post or page.
dsq_thread_id:
    - '3152343376'
image: 'src/images/FEHero.png'
imagealt: Closeup of the Flying Eyes homepage, showing a large hero image of a Black man wearing thin sunglasses.
imagecaption: ''
tags: ['coding', 'notes']
redirect_from: /parallax-scrolling-featured-image-in-wordpress-genesis/
---

> If you’re just here for the code, go to the [project on GitHub](https://github.com/AnitaYCheng/ParallaxFeaturedImage)!

This is a solution I made while working on the [Flying Eyes site ](https://web.archive.org/web/20150301192556/http://www.flyingeyes.biz/)– check that out as a demo of this solution.

Since I like making things easier to use for everybody, including clients, I figured it would be a great idea to be able to change the background image for parallax scrolling in the WordPress dashboard. Normally, you’d have have fiddle with the CSS file every time, which is obviously no good for clients, or your general workflow! Unfortunately, there seemed to be no plugins or other solutions that could make this happen in a simple and clean way, so I combined a few ideas to make this solution.

Inspired by [WevoStudio’s tutorial for parallax scrolling implementation for WordPress](http://wevostudio.com/wordpress-parallax-implementation/), I improved it by making it super-easy to use. Literally, just set a featured image for any page or post, and let ‘er rip!

This solution is specifically for [WordPress Genesis](http://www.studiopress.com/ "StudioPress Genesis framework"), but you could easily modify it for any template use by inserting the PHP structural directions right after the body tag.

Remember, you should be working on a chid theme with these modifications, otherwise they will be erased when your theme is updated! -sadface-

## The JavaScript files

First of all, you’ll need the JavaScript that makes the whole thing possible. I used [Ian Lunn’s jQuery Parallax script, which you can find at his GitHub](https://github.com/IanLunn/jQuery-Parallax). (I’ve also included it in [my project on GitHub](https://github.com/AnitaYCheng/ParallaxFeaturedImage).)

You’ll also need a script to tell the page what to do in terms of animation:

```
<pre class="font:droid-sans-mono lang:js mark:3 decode:true" title="parallaxcall.js">(function($) {
        $(document).ready(function() {
            $('.parallax').parallax('50%', 0.1);
        });
})(jQuery);
```

The 50% value is the x-position of the image (which you should leave alone), and the 0.1 in this case is the speed at which it will scroll. You can change the speed to your liking.

Put the jQuery Parallax script as well as the *parallaxcall.js* script into a *js* folder in your child theme folder. The structure should be *child-theme &gt; js*.

## The PHP (enter all of this in your child theme’s *functions.php* file)

Now we have to tell WordPress to call the scripts, using the enqueue function like usual:

```
<pre class="font:droid-sans-mono lang:php decode:true" title="Enqueuing parallax scripts">// Add Parallax script
 function add_parallax_scripts() {
            wp_enqueue_script( 'parallax', get_stylesheet_directory_uri() . '/js/jquery.parallax-1.1.3.js', array(), '1.1.3', true );
 	    wp_enqueue_script( 'parallaxcall', get_stylesheet_directory_uri() . '/js/parallaxcall.js', array(), '1', true );
}
 add_action( 'wp_enqueue_scripts', 'add_parallax_scripts' );
```

Now here comes the structural directions. The following tells WordPress that if there’s a featured image (i.e. “post\_thumbnail”) attached to the post, to assign it the variable $parallaxImage that carries the URL of the image’s large version. (Make sure you get a nice big image for this use!)

It makes a new &lt;div&gt; immediately after the &lt;body&gt; tag, with the class “parallax.” It also places a background image with the right styling, using the value of $parallaxImage, which is the featured image’s URL.

I inserted all of the CSS inline, so it it takes precedence over anything else. You can change the “min-width” to anything you like. “Background-size:cover” (and all the related flavors to cover all browsers) will make sure the image covers the entire browser width, at any size.

If there is no featured image attached to the post, it will insert a &lt;div&gt; with class “top\_margin” to give it some space that we can style later, IF you’re using a fixed navigation bar like I was doing. (Otherwise the page content will go underneath the nav bar if I didn’t have that there.) If you don’t have a fixed navigation bar, you can take that off.

```
<pre class="lang:default mark:7 decode:true " title="Parallax scrolling structural directions">// Adds parallax to all featured images, adds top margin if there is no featured image
	add_action ('genesis_before','use_parallax');
	function use_parallax() { 
		if ( has_post_thumbnail() ) {
			$parallaxImage = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large'); 
		?>
			<div class="parallax" id="section_<?php echo the_ID(); ?>" style="background: url('<?php echo $parallaxImage[0]; ?>') no-repeat fixed; min-height:700px; background-size:cover; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-color: #000;"></div>
              	  <?
              	 }
              	else {
	          		echo '<div class="top_margin">&nbsp;</div>';
	          		}
		
		}
```

Also, I was also using WooCommerce, which uses the featured image as its main product image. No parallax scrolling wanted there! You can use this conditional immediately after the *function use\_parallax() {* line if that’s the case. Make it line 4 in the previous example. And don’t forget the additional right brace at the end of the entire thing if you use this conditional!

```
<pre class="lang:php decode:true " title="Conditional rejecting WooCommerce products">if ( !is_post_type ('product')) {
```

Next, we can’t ignore the post titles! Usually for a featured image, the entry title is also styled differently, and this is what the next PHP snippet will do for you. For the Flying Eyes site, I had the headline scrolling normally, in the middle of the image off to the left. This has to be styled different for posts without a featured image, otherwise the design becomes a mess.

Basically, it adds a class of “parallax-page” to the &lt;body&gt; tag if there is a featured image attached to the post, and a blank class if not. By using CSS, I can select the entry title of only pages with a body class of “parallax-page” later.

```
<pre class="lang:php decode:true " title="Title styling if parallax">// * Add custom body class to the head if page has post thumbnail to customize entry title styling
add_filter( 'body_class', 'parallax_body_class' );
function parallax_body_class( $classes ) {
	if ( has_post_thumbnail() ) {
		$classes[] = 'parallax-page';
	}
	else {
		$classes[] = '';
	}
		return $classes;
}
```

## The CSS (enter all of this in your child theme’s *style.css* file)

Now, for the styling of the parts surrounding your parallax div.

If you have a fixed navigation bar for the primary menu, add some margin to the top of the content so it doesn’t slide under when there’s no featured image:

```
<pre class="lang:css mark:2 decode:true " title="Adds top margin for posts without featured image">.top_margin {
	margin-top: 7rem;
}
```

Again, you can change the value of the margin to your liking.

Next is the styling of the titles of these special pages. You can change any of these values as you see fit.

```
<pre class="lang:css decode:true " title="Styling the titles of the parallax scrolling posts">.parallax-page .entry-title {
	position:absolute;
	top:15rem;
	left:5rem;
	background-color: #fff;
	background-color:rgba(255, 255, 255, 0.7);
	padding:10px 0;
	padding:1rem 0;
	width:40%;
	text-align: center;
}
```

With WooCommerce, we turned off parallax scrolling, so we sure want to turn off any parallax-related title styling too! The most important part is the positioning.

```
<pre class="lang:css mark:3-5 decode:true" title="Turn off parallax headline style for WooCommerce">/* Disables parallax headline style for WooCommerce product pages */
.parallax-page .woocommerce div.product .product_title, .woocommerce #content div.product .product_title, .woocommerce-page div.product .product_title, .woocommerce-page #content div.product .product_title {
	position:relative!important;
	top:0!important;
	left:0!important;
	clear:none;
	margin-bottom:1rem;
	padding:0;
	width:auto;
	text-align: left;
}
```

I know, all those *!important*s are really annoying, but you gotta override the WooCommerce styling!

Don’t forget the media queries to make your parallax section nice and responsive.

```
<pre class="lang:css decode:true" title="Media Queries to make your parallax section responsive">@media only screen and (max-width:767px) {  
	 .parallax {
	 	height: 500px;
	}

	.parallax-page .entry-title {
		width:100%;
		top:10rem;
		left:0;
	}
}
```

Change any of the values as you like, but I found this worked great for me.

## Ta da!

And that’s it! Now you can set any featured image to be the background for your awesome parallax scrolling page!