---
title: '"Piece of Cake" PCR prototype'
date: '2012-07-10'
work_description: '&#8220;Get results. Save the world.&#8221; Through user research and testing, I redesigned the interface of a machine standard in molecular biology labs. The aim was to make it more intuitive and reassuring to use for scientists.'
description: Case study about a project redesigning the UI for a complex scientific instrument.
permalink: /projects/pcr/
work_type: Prototype
work_direction: For BioRad
work_contribution: <ul><li>User interviews</li><li>Personas</li><li>User flows</li><li>Wireframes</li><li>Usability testing</li></ul>
image: 'src/images/PCRLayoutScreen.jpg'
imagealt: Grayscale wireframe of a 96-well PCR plate, with selections and gradient settings visible.
imagecaption: Plate layout screen, with additional options clearly accessible.
redirect_from: /work/pcr/
---

## Introduction

Having worked in a cancer research lab for 7 years, I was well-acquainted with poorly designed interfaces!

Scientists often experience frustration instead of focusing on what’s truly important – data collection and analysis. One of the most common machines in any molecular biology lab is the polymerase chain reaction (PCR) machine, and one in our lab was particularly frustrating to use. I aimed to redesign it to be more intuitive and user-friendly.

My motto for this project: “Get results. Save the world.”

## User research and personas

In this case, the designer was also the user, but to get other perspectives, I interviewed several scientist friends and colleagues.

Across the board, they said they weren’t comfortable using the PCR machines in their labs. One said:

> “Usually it seems like something that should just magically work. Sometimes it doesn’t, though, so I get nervous about just putting my tube in there and waiting three hours.”

After the interviews, I developed two scientist personas with different goals, and developed flows for each of them. In each case, I focused on clarity and reassurance.

{% gallery "personas" %}
	{% galleryImage "src/images/PCRUserPersonas.jpg", "Grad student persona, focused on quick experimentation" %}
	{% galleryImage "src/images/PCRPeterUserFlow.png", "User flow for student persona, focusing on speed." %}
	{% galleryImage "src/images/PCRUserPersonas2.jpg", "Scientist persona, focused on accuracy and privacy." %}
	{% galleryImage "src/images/PCRSarahUserFlow.png", "User flow for scientist persona, with additional privacy options." %}
{% endgallery %}

## Wireframes

I designed wireframes in Adobe Fireworks to combine the needs of both personas.

Keeping in mind that each PCR run was worth time and money, I particularly emphasized the use of confirmation screens and final checks to ease the mind of a frazzled scientist. The UI also features large buttons, to keep the touchscreen easy to use with gloves on.

{% gallery "template" %}
	{% galleryImage "src/images/PCRProtocolTemplate.jpg", "Protocol setup, with all options customizable by touch." %}
	{% galleryImage "src/images/PCRGradient.jpg", "Gradient temperature setup, with custom temperature controls immediately available." %}
{% endgallery %}

## User testing

I asked three additional colleagues to go through an [Invision prototype](http://invis.io/FPOVEDS8) of the project. I asked how they would use the program to go about their PCR business, and observed their reactions and difficulties.

I realized I missed a few confirmation screens along the way, and several had trouble understanding the scope of several screens.

{% image "src/images/PCRusertesting.png", "Spreadsheet with participant responses colored in green and yellow, with a color key.", "User testing task analysis showed confusion about the scope of some screens." %}

## Final version

Using the findings from the usability tests, I am currently making additional changes to the wireframes. Nonetheless, all the test participants found the overall layout and confirmations to be a great improvement from the current interface.