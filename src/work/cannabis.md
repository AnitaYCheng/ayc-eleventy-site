---
title: 'San Francisco cannabis business permit application'
date: '2020-01-01'
start_date: 'August 2018'
end_date: 'December 2019'
permalink: /work/sfcannabis/
work_type: Application form and website
work_direction: <strong>Client:</strong> San Francisco Office of Cannabis
work_contribution: <ul><li>Legal requirement inventory</li><li>Form pair writing with executives</li><li>Form content design with product team</li><li>Website content design with executives</li><li>Usability testing and synthesis</li></ul>
work_description: Wrote San Francisco’s first online-only permit application. Worked closely with department staff to ensure the content fulfilled legal requirements while being comprehensible and in plain language at middle school readability. 
description: Case study about writing the cannabis business permit, the first online-only permit application in San Francisco.
image: 'src/images/CannabisMockup.png'
imagealt: A process page titled "Apply for a cannabis business permit" with a description and distinct steps starting with "Check if you can apply."
imagecaption: The cannabis business permit step-by-step page, shown on a laptop.
---

## The brief
Cannabis was legalized for recreational use in California in 2016. Policymakers in Sacramento and San Francisco then worked on passing regulations to permit business to legally sell cannabis. 

The next task was to write an application that aspiring cannabis business owners, often first-time business owners, could complete to prove they were responsible enough to sell cannabis to the public.

## My role
I was brought onto the SF Digital Services team as the second content hire, specifically to finish writing San Francisco’s cannabis business permit application form. 

The team had already released “part 1” of the form, which asked for location and business owner information. I had to design what “part 2“ would look like, which would include all other cannabis regulations.

## What I did
### Legal requirement inventory
I can’t write what I don’t know, so I read everything I could about relevant cannabis permitting requirements. 

This included:
- Article 16 of the San Francisco Police Code: Regulation of Cannabis
- California State requirements and application
- Cannabis-related requirements from SF Planning and SF Department of Public Health

I then inventoried all 166 requirements in Airtable, logging them as:
- **Eligibility requirements** where they’d get in trouble if they were found not doing it (everyone would say “yes” if asked!)
- **Business reporting and renewal requirements** where the Office of Cannabis would check back in a year
- **Application requirements** where they’d prove they can handle cannabis responsibly

{% image "src/images/CannabisReqsAT.png", "Airtable base with a table of requirements, logged by form status, requirement type, Article 16 location, topic, application topic, and topic form.","A snapshot of the requirements, noting Article 16 location and logged by requirement type and topic." %}

### Application structure
With all of the requirements logged, I worked with the product team on structuring the application. We had to make it easy for the staff to maintain the questions, while also making it easy for the applicant to fill out.

Because a cannabis business could apply for multiple activities (such as storefront retail and delivery, among others) in 11 different combinations, I determined it would be best to release “part 2“ as modular forms. That way, Office of Cannabis staff wouldn’t need to maintain the same questions on 11 different forms.

{% image "src/images/CannabisFormMatrix.png", "Table of forms by cannabis activity in practice, displaying how all applicants would need the general operations, security, and staffing forms, but a cultivator applicant would only need an additional cultivator form, not delivery form.","How the form modules worked, sharing universal requirements while splitting off the specializations." %}

Some activities also had long lists of requirements. Splitting them up by activity, then sending them as modular forms would make them less intimidating to fill out.

[Read more about how I used information architecture on structuring the application](/talk/more-than-meaning/)

### Pair writing application form
Office of Cannabis executives were keen to write the application in plain language. Many of the aspiring cannabis business owners had never owned a business before, and equity was a priority.

Going through each of the application requirements, I essentially grilled them with questions about the kinds of answers they would be looking for. For example, one requirement was an odor mitigation plan. When I asked what they would be looking for in an odor mitigation plan, they replied “charcoal filters.” The odor mitigation plan requirement was then fulfilled by asking if the business planned on using charcoal filters to minimize escaping odors.

{% image "src/images/CannabisOdorQuestion.png", "Question from the cannabis form, titled, 'Reduce odors outside.' The question asks if the business will use charcoal filters for outside ventilation. And if not, to describe other methods to keep outside air clean.", "A snapshot of the question in the form, offering an explanation while specifying exactly what the Office of Cannabis would be evaluating." %}

Working backwards from their evaluation criteria was the most effective way to write the application in plain language. The applicants could understand what was expected of them and the Office of Cannabis could make accurate assessments. 

[Read more about how I wrote effective plain language questions, working with Office of Cannabis executives.](/talk/write-government-forms/)

### Usability testing form content
To ensure applicants could use the form with the right context, we had to test it with real applicants. We asked people who had already submitted “part 1” of the form to talk through their reactions while going through the new “part 2.”

The entire product team (including designers and engineers) watched the moderated usability tests. I led synthesis after the sessions, because most of the notable observations involved content. I then logged all of the findings into an Airtable base modified from  [Tomer Sharon’s Polaris UX Nuggets template](https://www.airtable.com/universe/expShuhNMi0Oc0xpb/polaris-ux-nuggets), using them to construct insights and fixes. 

We were able to retest much of the content.

{% image "src/images/CannabisUTAT.png", "Airtable base featuring a table of fixes, along with tables of insights, observations, interviews, contact, applications, and quotes.","A snapshot of the observations, findings, and synthesis, distilled to fixes for the form content." %}

#### Changing policy with usability testing
Along with testing plain language in the form, I also used the sessions as an opportunity to test (and change) policies around application requirements.

I sometimes designed questions I *knew* the participant couldn’t answer, because I had to prove a rule wasn’t going to work as written. We would then present the findings to Office of Cannabis executives. Several requirements were updated this way. 

For example, a rule required business owners to submit all employees’ full names, job titles, and responsibilities. This is impossible to answer if you haven’t opened your business yet, or if an existing business had many employees. And one participant had quite the memorable reaction, a double facepalm!

{% image "src/images/CannabisDoubleFacepalm.png", "Screenshot of a picture-in-picture moderated usability test, featuring the participant covering both of his eyes in response to a question. A speech bubble says, 'Ohhhh my gosh...'","You definitely want to see this before launch, not after!" %}

The Office of Cannabis changed their expectations, so that uploading an org chart would suffice. I also reassured applicants that they would be able to update the staff list later.

{% image "src/images/CannabisRewrittenStaffQ.png", "A before and after of the staffing question, where multiple free text fields per person was replaced with an upload field.","Fulfilling the requirements while making it less burdensome for the applicant." %}

I even managed to use findings from usability tests as a form of public comment. 

For example, the Office of Cannabis had published draft rules around [premises diagram requirements](https://www.sf.gov/reports/february-2019/1609b16-premises-diagram-rulemaking). We happened to be testing the form during the 2-week public comment period before it would be finalized. During testing, we found that one of their assumptions was wrong, that applicants would not be helped with a requirement that the diagram be on letter-size paper. Most applicants had an architect who would be working at a much larger scale. The Office of Cannabis director herself removed the letter-size requirement in the final rule.

### Informational website content
To support the form, I also worked with Office of Cannabis executives on webpages that would explain the overall process. 

This was particularly challenging because we had to balance realistic expectations of time, effort, and cost while still encouraging people to apply. I also had to account for information overwhelm, so I structured each step to focus on one specific goal at a time. 

To ensure accuracy, we worked with staff from other departments involved in the process, like SF Planning and SF Department of Public Health.

## Results
We successfully launched “part 2” of the cannabis business permit application. It is the first online-only permit application in San Francisco. 

The close collaboration with the Office of Cannabis also made it possible for Outside Lands to become the first major festival in the country to have legal cannabis sales and consumption.

{% gallery "ooc-final" %}
	{% galleryImage "src/images/CannabisStepbyStep.png", "Full process page, with steps like 'Find a location, Meet with your neighbors, and Set up staffing.'" %}
	{% galleryImage "src/images/CannabisCityDepts.png", "Informational page under the 'Meet with other departments' step, laying out expectations when the applicant meets with SF Planning and other departments." %}
{% endgallery %}

## Related
- [Be a heroic advocate rebel toddler to write government forms](/talk/write-government-forms/) (talk)
- [More than meaning: Using information architecture to grow a budding service](/talk/more-than-meaning/) (talk)
- [Integrating user research with existing legislative processes](/talk/cannabis-user-testing/) (talk)