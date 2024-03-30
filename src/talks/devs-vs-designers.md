---
title: 'Developers vs designers (getting on the same page)'
permalink: /talk/devs-vs-designers/
slides_link: 'https://www.slideshare.net/anitaycheng/devs-vs-designers-getting-onto-the-same-page'
description: This talk is for developers who find themselves at odds with designers or executives over the visual design of their software. Learn how to better communicate your needs!
talklength: 45-min talk
event: SoCal Code Camp 2016
---
Hi everyone, I'm Anita, and welcome to my talk Developers vs Designers: Getting on the same page.

That’s my actual lab coat. I did not start out in tech, I was a biology major in college and did cancer research for a while, before I figured out I didn’t want to go to grad school or med school, so I should figure out what to do instead. I started out designing my own websites, then building them after I thought that was the only way they were gonna get done. Then I started doing it for other people, and here I am!

We all know this process - the Software Development Life Cycle. Requirement Analysis, Design, Implementation, Testing, and Evolution. Everyone involved in this is working together to make a single product, which is important to note.

People think devs and designers only need to get together at the handoff between design output and implementation. That’s presumably when the designers sends you mockups, and tells you to run along and build it. Before that, everyone’s just doing their own thing, using their own tools. Why bother talking to each other before then? I’ll get into why that’s not enough later.

It is true that the handoff point is the most obvious part where devs and designers have to communicate. So let’s talk about that first.

A project involves multiple people who all have a different idea of what’s going on. And unfortunately, we haven’t invented mind reading yet.

If you are confused, ask for clarification. Instead of looking dumb, it shows you care enough to bother asking. Most people don’t! Pro-tip, it helps a lot to summarize the context and confirm you’ve got it all right before going for the ask. This is what I use to great effect.

Making sure you know what’s going on is so important. Miscommunication is a huge reason why things get messy. And I don’t know about you, but I hate doing things over again. It’s my biggest pet peeve. Would rather get it right the first time, and the biggest factor is just speaking up and putting it on the table.

I don’t like talking either. I’m an extreme introvert *and* I have a stutter. Turns out, government employees really like using email (woo big surprise), to cover your ass when or if the ball gets dropped. So there’s that, and there’s Slack, which I consider a more user-friendly version of IRC.

You can do fun things in Slack too, I highly recommend it! Gifs all over on Friday!

Back to handoffs and design output! 

The truth is, the process isn’t just one way. You are not a dumpster with a sign going “drop mock ups here, will take anything.” 

Developers are more like the post office. They will accept a lot of stuff, including live birds, believe it or not, but they won’t take just anything. That ensures that the mailing process runs as smoothly as possible. Anything too out of the ordinary will take longer or cost more money. Same with development!

The very first thing you need to determine is what kind of format you prefer the mockup to be in. That’s up to you. Designers often spend a lot of time formatting their files for you, so you should get on the same page so everyone’s happy. 
You can get it as a static image like a PNG or JPG, a Photoshop file with layers, or nowadays a Sketch file. Pro-tip, Sketch with Zeplin.io is pretty awesome! It pulls colors, fonts, and sizes out of a Sketch file and lays it out for you clearly. 

What’s needed with the mockups themselves, is a document laying out at least the hex colors the design contains. Fonts and sizes are helpful too, but hex colors are a must. It takes 5 clicks to find and copy a hex color out of a Photoshop file, so that will save you a lot of time in itself.

For me, sizes in pixels aren’t particularly important, because I usually start from one desktop mock up and I eyeball-adjust it myself for responsiveness to tablet and mobile. You may not be in that situation. That depends entirely on the expectations of what the design should look like when implemented, and what kind of resources your company has. Ask for clarification if you aren’t sure. People love it when you exceed their expectations and save them time and money.

So that’s what happens at the handoff with regards to design output. But let’s go further and make the process even clearer. The factors that affect the developer can affect the designer’s workflow higher up in the development life cycle, even before the design. 

In the words of Jerry MacGuire, “Help me help you.”

First question, is there a framework or style guide you prefer or need to be using? For example, Bootstrap is an extremely common framework, that already has a bunch of design widgets available.

There are Photoshop templates and the like which already build off of Bootstrap. Why should the designer start from scratch if they don’t have to? If you prefer a framework or the project has a framework limitation, the designer should know.

Another consideration, depending on the expectations of the company or client, is what window size do you need to support, and how many mock up of different sizes does the designer need to hand off to you? As I mentioned before, I personally work off of one desktop-sized mockup, and adjust it for tablet and mobile as necessary. Your project may be different - it may live as only a mobile or a TV app, which means you may not need all these different sizes.

Or the designer may need to mockup many different screen sizes because they need to demo it to the client before implementation, or user test it. But if you don’t need all those sizes to do your work, why should the designer put all that extra time making them? Get everyone to the table and start talking about what everyone needs and why.

Since we’ve got everyone at the table now, let’s rewind the life cycle even further, and start at analysis. Let’s talk about other people’s expectations of what you do.

This is when things start getting really fuzzy, so I have to remind you, that “it all depends” on the specific project you’re doing. But no matter what, remember, it’s all about “help me help you.” We all have one goal - to make this product the best it can be.

According to the developer social network devRant, which does exactly what you expect it to do, the number 1 complaint among devs is product or project managers, at 23% of rants on the site.

We don’t like being told how to do our jobs, which is totally fair. 

This isn’t always an easy thing to deal with. Many times, we aren’t in a position to directly affect the timeline or the requirements that are set.

Know what it is you’re working with, and when asked how long it will take, be direct and honest. When asked for clarification, explain your reasoning using your knowledge. Even if ultimately you don’t win the battle, you will win your team’s trust, and that’s really the most important thing of all. Your team wants assurance that you know what you’re doing, and that you’ll get it done well. Your ultimate goal is the best product possible.

The truth is that, many people, including product and project managers, believe development to be magical. And it kind of is, with how much it can do with so little. But working with it isn’t magic. You aren’t magicians who create something from nothing in no time.

Your job is more like this - trying to assemble IKEA furniture. We’re working with all these pieces, and we know what it’s supposed to look like at the end, but it involves a lot of fiddling! And frustration, and crying maybe, in the middle.

Pull back the curtain a bit, and at least hint how much work this actually takes.

Now all this about expectations is one major factor of working with other people as a developer. If you are on a team of any size, this is something you will have to face. Another little survey - how many people here went into coding so they wouldn’t have to deal with office politics? I was a bio major for the same reason!

Well I’m sorry to totally burst your bubble, but office politics affects you. It is everywhere. 

My former boss at the cancer research lab used to say, “Science is done by people, and people are assholes.” That’s the cynical way of looking at it, but we must never forget that people have biases, and they have egos.

According to devRant, the #2 complaint from devs is bosses - development or engineering managers, at 21%. This is what makes it extra dicey. How do we unpack that?

As a UX designer, one of our buzzwords that we love to use is “empathy.” People laugh at the thought of people saying we need empathy, since it’s touchy feely and who can afford that in the tech world? Well, you do need it, because it’s the secret of how you’re going to get stuff done.

Empathy by definition is the ability to understand and share the feelings of another. What that means for dealing with bosses and coworkers and designers is: you have to figure out what drives them. And you have to figure out what keeps them up at night. And then you have to approach explaining your work to them in those terms.

If your designer was recently hired out of a fancy design school, and is the only designer in the department, what do you think drives them? What do you think keeps them up at night?

They’re probably scared, and they want to look like they know what they’re doing, they want to make something that looks and works beautifully. That’s how you’re going to get your work done. 

You need allies. Build yourself up by building other people up. 

Building yourself up means having your own ego as well. Ego’s not a bad thing, it’s merely “a person’s sense of self-esteem or self-importance.” Everyone should have a sense of ego, including you. 

That means choosing your boundary line to hold, and when you’re willing to walk away. Hint: when the expectations are this ridiculous, you really should walk away!

Be willing to help out to make the best product possible, but know when to back off too. Choose your battles. Not everything is worth fighting. If one of your coworkers absolutely insists on using a certain tab measurement in the code, and nobody else cares, is that really worth fighting about? Maybe it is to some people, but it certainly isn’t really going to help the project move forward.

Here’s one theory I have, when it comes to dealing with egos that has served me pretty well so far. “80% of how a person treats you is a reflection of themselves.” It’s not just about you. If someone’s an utter jerk to you or criticizes you unfairly, it’s probably not actually what you did, but their own ego showing. 

There is a balance to it, of course. Maybe there’s something simple in your behavior you could change to make it easier to interact with them. There’s never any an absolute right or wrong when it comes to dealing with other people, just what works between them. But again, boundaries. If people want to spur drama for the sake of drama, that’s on them. Not you.

Because at the end of the day, it ultimately is about the work. When there’s politics flying all around you, that will be your strongest ally - your ability to get stuff done, and get it done well.

In my case, it doesn’t really matter if I schmooze with the right people. I’m the only person in the entire organization who knows how to fully handle our website’s CMS framework, so they can’t really get rid of me. 

Be valuable. Know your worth. Know what makes people tick to move the project forward.

So remember, it's really all the 3 levels when working on software: Output, expectations, and people.

Thank you!