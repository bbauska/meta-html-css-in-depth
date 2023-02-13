(Coursera/meta)

# Course syllabus

## Prerequisites

To take this course, you don\'t need any developer experience, but you
must be eager to get started with coding.

## Module 1

In the first module, you will start with an introduction to the course
and gain insight into what your career path as an HTML and CSS developer
might look like. You will also receive tips on how to take this course
successfully. Then, you\'ll move on to semantic tags and the importance
of taking a structured approach to creating a well-formed web page.
After which you will learn about metadata and tags and how you can use
them to influence your web page\'s ranking through Search Engine
Optimization (SEO). Following this section, you will learn about user
input and forms and you will create and test a form by yourself. In the
final part of the module, you will learn about media elements and
you\'ll learn how to embed video and audio on a web page. 

After completing this module, you should be able to:

-   Use common semantic and meta tags to improve the accessibility,
    readability and SEO of a web page.

-   Create commonly-used web page layouts and components. 

-   Create and test a form with client-side validation. 

-   Recognize server-side connections and the languages used to carry
    out requests and responses. 

-   Post form data to a server.

-   Create a video and audio player that can rate the media played.

## Module 2

In module 2, you will focus on CSS layouts, grids and flexboxes. You
will learn about fundamental layouts that you can use to design a good
web page. Next, you will learn about CSS selectors which correspond to
specific elements or element groups in an HTML document. In this
section, you also learn about pseudo-class selectors that you can use to
improve the interactivity of your web pages without having to add overly
advanced styling. In this module, you will also learn about keyframes,
animations and effects in CSS. The final part of this module is about
how to use browser developer tools to assist with debugging and
resolving HTML and CSS issues.

After completing this module you should be able to:

-   Use Flexbox and CSS grids to create responsive layouts and charts.

-   Use advanced CSS selectors such as pseudo-classes for targeted
    styling.

-   Use CSS effects to introduce text effects, animations and
    transformations into your stylesheet.

-   Create simple keyframe animations.

-   Perform basic front-end testing, debugging and error handling.

-   Adapt your CSS to perform as expected in different browsers.

## Module 3

In the last module, you will have an opportunity to recap what you
learned in the course and put it into practice by creating a home page
for a client persona.

After completing this module, you should be able to:

-   Apply the skills you learned in this course to introduce more
    advanced styling into your portfolio.

Course Introduction

Perhaps you know a little about HTML and CSS from another course you
did, or perhaps you don\'t know much at all.

Either way, a quick summary will be useful.

So let\'s explore some basic HTML and CSS principles and practices.

HTML stands for Hypertext Markup Language.

But what does that mean?
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

![Hypertext & Markup](./images/image001.png){width="5.0in"
height="1.6068372703412073in"}

Hypertext is text which contains links to other text.

Markup refers to tags and elements used within a document.

![Basic HTML page structure](./images/image002.png){width="5.0in"
height="1.6068350831146108in"}

HTML elements with their opening and closing tags in angle brackets make
up an HTML document.

These elements form the structure of a webpage and describe what to
display to the web browser.

When it comes to HTML, it\'s important to know about the purpose of HTML
in the web browser.

The use of HTML tags and correct syntax, and how HTML elements are used
in a web document.

But what can you do with HTML?

You can add images to a web page with HTML code.

You can use it to display data in tables, and you can build forms with a
wide range of inputs.

Also, using the correct HTML structure and appropriate elements as a
foundation is an essential part of building accessible websites.

HTML can assist in ensuring web accessibility by supporting the
technology people with disabilities use to interact with and understand
websites.

Another important concept to know about when you\'re talking about HTML
is the Document Object Model or DOM.

Users need to be able to interact with elements on a web page.

This means that HTML document must be represented in a way that
JavaScript code can query and update it.

That\'s the function of the DOM.

It\'s a model of the objects in your HTML file.

Web developers interact with the DOM through JavaScript to update
content, set up events and animate HTML elements.

Now that you\'ve covered the basics of HTML, let\'s move on to CSS or
Cascading Style Sheets.

If HTML is the frame and structure of a building, then CSS is the paint,
wallpaper, fixtures, and overall style.

CSS tells the web browser how to display HTML elements on screen.
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Style elements, create layout, and arrange page](./images/image003.png){width="5.0in"
height="1.6068372703412073in"}

You use CSS to style elements within an HTML document, create an
appealing layout for your webpage using the box model, and arrange page
elements using normal document flow.

That was your HTML and CSS refresher.

Now get ready to dive deeper into learning more about these two topics.

Semantic tags and why we need them

By now you know that HTML describes the content of a web page.

But how do you describe the meaning of a web page?

To understand this in a real-world context, think of buttons in an
elevator.

The vertical arrangement of buttons isn\'t enough for someone to
understand their meaning.

To convey the meaning or semantics of the button, numbers are added so
that people know which button will take them to which floor.

When you write HTML it\'s good practice to semantically describe the
content.

This allows search engines and accessibility software such as screen
readers to understand the contents of a page, fortunately you can do
this by using some basic HTML tags.

For example, using a heading tags such as H1 describes that the content
is a heading.

Similarly, the UL and OL tags describe lists.

However, there are many more semantic HTML elements available to you as
a developer.

In this report I will share a structured approach you can take to make
sure that you create a well-formed web page.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Basic HTML page structure](./images/image004.png){width="6.5in"
height="2.088888888888889in"}

Let\'s revisit the basic structure of an HTML page which includes the
head and body.

Inside the body tag you can lay out the website with very semantic tags
to describe each of the sections.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![HTML tags](./images/image005.png){width="6.5in"
height="2.828472222222222in"}

For a typical HTML page, the structure can be semantically described
using the header, main and footer semantic HTML tags.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Header, main & footer](./images/image006.png){width="6.5in"
height="3.0819444444444444in"}

For example, suppose you lay out your page with a header section that
contains some company logo and navigation links.

Then a main section contains sections and articles.

Finally, a footer section contains contact information and social media
links.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![nav tag](./images/image007.png){width="6.5in"
height="3.0819444444444444in"}

The main navigation section of your web page can also be described
semantically using the Nav tag.

Depending on how web pages designed the Nav element is often placed
after the header element and the header element is used for logos.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Unordered list tag](./images/image008.png){width="5.0in"
height="2.3707272528433947in"}

The main links of your website are then added inside the Nav element.

It is common practice for developers to specify their links as an
unordered list inside the Nav element.

Next is the main content of a web page.

The two key semantic elements for your main content are the article and
section elements.

First let\'s examine the article element.

The HTML specification states that according to the World Wide Web
Consortium\'s website, the article element indicates content which
represents a complete.

Or self-contained composition in a document page application or site
that is independently distributable.

That\'s quite a mouthful.

It may help to think of a page in a newspaper.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example layout with many articles](./images/image009.png){width="1.5in"
height="1.9452449693788276in"}It may help to think of a page in a
newspaper.

There are many articles on the page and you can cut out the individual
articles with scissors if needed.

The articles you can remove are the article element.

Examples; forum post, magazine or newspaper article, a blog entry, user
submitted comment, interactive widget or gadget, or any independent item
of content.

Let\'s examine how the article element is used say you are developing a
blog about your summer holiday.

It\'s good practice to contain the blog post content inside of the
article element because it\'s a complete self-contained composition on a
web page.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example article element](./images/image010.png){width="4.0in"
height="2.4813560804899386in"}You should place the article element
within the main element.

Then add your regular heading \<h2\> and paragraph \<p\> tags within the
article element.\
The reason for doing it this way is because the main element
semantically represents the main content of the page.

And inside of it there can be multiple article elements for something
like a blog post list.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example footer element](./images/image011.png){width="4.0in"
height="2.424242125984252in"}At the end of your document is the footer
element.

This might contain additional navigational links or content.

It is important to note that semantic elements are not limited to this
structure.

Since their purpose is to describe the semantics of the content, the
elements can be nested inside of each other.

If it accurately describes the content, let\'s update the previous
example to use a nested semantic structure.

You add a header element to the article element, inside the header
element at the heading element with the blog title and a paragraph
element describing the date and author of the blog post.

Inside the main element at the content of the blog post.

That\'s it, let\'s examine the section element.

You can add a section element to semantically define individual sections
of the article.

It is important to note that sections should contain heading elements to
semantically describe the section.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Descriptive section elements](./images/image012.png){width="4.0in"
height="1.9722222222222223in"}It is also possible to use section
elements to describe different sections of your webpage, the section
element doesn't require the article element.\
It all depends on how you want to semantically describe your page.

And now you know how to semantically describe the contents of a web
page, your web pages more accessible because the content is semantically
described to add meaning.

Now, search engines and accessibility software can easily understand the
contents of your well-formed web page.

Semantic tags in action

The Little Lemon Restaurant has asked me to add a new blog page to their
website. They\'ve told me that the page will contain several blog posts,
and that it must use semantic html so that search engines and
accessibility software can understand the semantics of the page.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Adding basic semantic structure to blog.html](./images/image013.png){width="4.0in"
height="2.4551279527559053in"}

I\'ve set up my basic html document structure in a file named blog.html.
I\'ll start off by adding my basic semantic structure.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Basic html document structure blog.html](./images/image014.png){width="6.0in"
height="3.598718285214348in"}

First, I add the header element. Followed by the nav element, Followed
by the main element. Followed by the footer element.

Remember this structure describes the semantics of this html document.
Specifically, the header element will be used to display the Little
Lemon logo, and the nav element will be used to describe the
navigational structure of the website.

The main element will feature the main content of the web page, and the
footer will be used to display copyright information.

When a search engine or accessibility software reads this document, the
semantic tags will help the software understand the purpose and meaning
of different sections of the document.

I will now add the details to each element. Inside the header element, I
add the Little Lemon logo using the image tag.

Inside the nav element, I add the navigation links in an ordered list
element using the ul tag.

I then add three list item elements using the li tag. Inside the list
items, I add the hyperlinks for index.html, location.html and blog.html
using the anchor tag.

In the main element, I add an h1 tag for the blog heading.

The restaurant told me that there will be two blog posts for their
website.

I add two article elements after the h1 element. Inside the first
article element, I add an h2 tag for the title of the blog post.

The title is 20% off this weekend. I then add a paragraph element below
the title which contains the blog post text.

Inside the second article element, I add an h2 tag for the title which
is our new menu.

Again, I add a paragraph element below the title which contains the blog
post text.

Finally, I add a paragraph element to the footer element.

In this paragraph element, I add the copyright notice.

The blog pages now semantically described through the html document.

I now save the file by pressing Control and S or Command and S on Mac.

I then right click the blog.html file and select live preview to preview
the file.

The blog page looks good and all thanks to proper semantic design that
ensures accessibility and search engine optimization.

I\'m sure that the Little Lemon Restaurant will get lots of business
through their blog, and their customers with disabilities will be able
to access the blog with no problems

Metadata

When was the last time you used a search engine? Probably in the last
few hours or minutes. Perhaps you just wanted to quickly look something
up or maybe you needed more in depth information on a topic. Either way,
the search engine you used will have returned a list of results that
were most relevant to what you searched for. But how does a search
engine determine which web pages are most relevant in this video? You
will learn how search engines analyze web pages and how meta tags help
provide information for search engines.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![SEO - Search Engine Optimization](./images/image015.png){width="3.1041666666666665in"
height="1.8125in"}

A major part of launching a website is a process called search engine
optimization or SEO. This process involves making improvements to a
website's content semantics & delivery to improve its ranking in search
results.\
You might be wondering what exactly does a search engine do when it
analyzes a web page?

Well when a search engine visits your website, it analyzes the html
document and media content.

If it finds a link to another html document, it follows the link to that
document and continues following links until it is finished analyzing
the entire website.

Based on the results of the analysis and the content on your website,
the search engine will rank the website for various search terms.

So, while your website might be the number one result for one search
term, it could rank very low for another.

Every search engine has its own algorithm for ranking websites.

And while it\'s not disclosed how the ranks are determined, there are
many best practices you can follow to influence how search engines
analyze and rank your website.

But for now, let\'s just focus on how meta tags influence website
ranking.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Meta tags and Metadata](./images/image016.png){width="6.0in"
height="1.5410258092738407in"}

Meta tags define metadata about a web page.

What is metadata? You ask? It\'s data about other data which in this
case is data about the web page.

Meta tags are added inside the head element of your html document and as
you know, nothing inside the head element is displayed in the web
browser.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Meta tag defined](./images/image017.png){width="3.2in"
height="2.4929385389326333in"}In other words, meta tags are unseen
elements within the browser. Note that there is no closing tag for the
meta tag.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Description metadata](./images/image018.png){width="6.0in" height="1.275in"}

The meta element has two attributes, name and content.

The name attribute specifies the name of the metadata and the content
attribute specifies the value of the metadata.

Let\'s examine some examples of metadata.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Author metadata](./images/image019.png){width="6.0in"
height="2.388461286089239in"}

The author metadata specifies the author of the web page.

The name attribute is author and the content attribute is the person and
company who are the author of the web page.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![](./images/media/image020.png){width="6.0in"
height="2.388461286089239in"}

The description metadata describes the content of the web page.

This is often used by search engines as descriptive text in search
results.

The name attribute is set to description and the content attribute is
the descriptive text.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Keyword metadata](./images/image021.png){width="6.0in"
height="2.388461286089239in"}

The keywords metadata was previously used to provide search keywords for
search engines.

However, this led to a lot of websites using the keywords metadata to
manipulate search rankings.

One of the major search engines now ignores this metadata and another
uses keywords metadata as a spam indicator because of this, it\'s
recommended not to include this metadata in modern web pages.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Robots metadata - SEO interaction](./images/image022.png){width="6.0in" height="2.388461286089239in"}

Another type of metadata is the robot\'s metadata and it tells search
engines if and how they should analyze your web page.

The name 'robots' comes from the automated software often referred to as
bots, that search engines used to analyze websites.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Robots metadata - possible values](./images/image023.png){width="2.6041666666666665in"
height="4.90625in"}

The content attribute for Robots has four possible values. Index tells
the bot to analyze the page. Follow tells the bot to also visit all
links on the web page. No index tells the bot not to analyze the page.
Some bots will ignore this so it\'s best not to rely on this to stop
bots from analyzing your page and no follow tells the bot not to visit
links on the web page. Again, some bots will ignore this value so it\'s
best not to rely on it.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Viewport metadata](./images/image024.png){width="6.0in"
height="2.1801279527559054in"}

Finally, there\'s the view ports metadata. The view port metadata is
important when designing responsive web pages. Why you might ask because
when a web pages viewed on a phone or tablet, the device will by default
attempt to render the web page as if it is being viewed on a desktop.
This results in a poor browsing experience for the user. The solution is
to define view ports metadata. There are many values available for view
ports metadata. The most used value for the mobile experiences is to set
the width to device dash with and the initial scale to 1.0, you can
learn more about view ports in the additional reading. It\'s important
to note that view port metadata does not solve all the issues with
browsing websites on mobile devices.

The other part of the solution is responsive web design.

But we were talking about search engine optimization, right? View port
metadata is important for the user experience and it\'s also important
for search engine optimization.

This is because many search engines now include websites mobile
experience as a part of their ranking algorithms, there is more metadata
that you can define on you web page to specifically improve its presence
on social media.

But that\'s for later video.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![SEO](./images/image025.png){width="1.162412510936133in"
height="3.0in"}

For now, it\'s important to know that author, description, keywords,
robots and viewports metadata all play a role in the search engine
optimization of web pages.

Bare bones layout

An important part of being a developer is not just the tools you use,
such as your integrated development environment, but also the repository
of knowledge and code templates you build up over time. In this video,
I\'m going to introduce you to one of these templates, which will help
you get set up quickly for building webpages. Let\'s open Visual Studio
Code to go through the templates step-by-step. In the folder, we have
***index.html*** along with the JS folder and a CSS folder. Inside the
JS folder, there\'s a file named ***script.js***. There is no content in
this file. It is added to this folder so that you can easily add
JavaScript code to the webpage. I recommend that you add any other
JavaScript files to this folder too. Next, I\'ll open the CSS folder. In
the folder there\'s a file named ***styles.css***. Again, there is no
content in this file, but it is here so that you can easily add CSS
rules to the webpage. Again, it\'s best if you add any other CSS files
also to this folder.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![template for index.html](./images/image026.png){width="6.0in"
height="3.4929483814523183in"}

I go back to my template folder and open it in Visual Studio Code. I
open the index.html file. The file has a semantic HTML document
structure set up.

At the top, there is the DOCTYPE declaration followed by the HTML root
element. Inside the root element, there are the head and body elements
in the head element. The title and meta tags are already optimized for
search engines. I recommend that you update the title along with the
description and author meta tags. Below, are the Meta tags for the Open
Graph Protocol. Don\'t worry about the details of these tags just yet as
you learn about them in a later video.

For now, the main thing to know is that if you plan on sharing the
webpage on social media, you should remember to uncomment this HTML
section and update the content attributes.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html - favicon](./images/image027.png){width="6.0in"
height="3.4929483814523183in"}

The next block of commented out code is for icons. If you want to show
an icon in the web browser tab for your website, you can update the href
attributes here to point to your icon.

Remember it you always link elements for the CSS style sheet to the last
section of the head element.

To speed things up for you, there is a link already set up to reference
the styles.css file in the CSS folder.

By now you can probably see how useful this template is.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html - body](./images/image028.png){width="6.0in"
height="3.4929483814523183in"}

Let\'s continue to the body element. The body element already contains a
basic semantic structure. This includes the header element for your
website title or logo, the nav element for your website navigation, the
main element for your main content, and the footer element for any
copyright notices or links to secondary webpages.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Include your JavaScript files here.](./images/image029.png){width="6.0in"
height="0.7339741907261592in"}

Below the footer element, you add script elements for JavaScript files.
To make your life easy, a script element is already set up to reference
the script.js file in the JS folder. With this template, you\'ll be able
to quickly start building out webpages. It\'s worth keeping a copy of
this template on your local machine to use and reference in future
projects. In this video, you\'ve been introduced to a semantic HTML
template that you can use for building webpages. Good luck.

Layout design

As you build web pages throughout your career, you'll notice that many
pages follow similar layouts and structures. This is the outcome of many
years of research into user interface design and user experience.
Different companies, libraries and frameworks then adopt the resulting
best practices.

Many examples of these layouts can be seen in the popular bootstrap
framework. However, many other frameworks provide similar designs.

Top navbar layout

Websites often have a top navbar layout to provide a set of essential
anchor links to the user. These typically link to the main areas of the
website, such as product pages, careers pages or contact pages. This
provides the visitor to the website with a consistent navigation
experience.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example of a top navbar layout on a web page.](./images/image030.png){width="6.0in" height="2.6327504374453192in"}

Carousel layout

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example of a Carousel Layout on a web page](./images/image031.png){width="6.0in" height="3.431632764654418in"}

Product-focused websites often use a large carousel on their homepage to
highlight their featured products, discounts and offers. The carousel
contains content items that will rotate through the carousel area at a
fixed interval.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example of a large style Blog Layout on a web page](./images/image032.png){width="6.0in" height="3.919861111111111in"}
Blog layout

The blog layout is used to feature multiple content items of differing
importance.

It is often seen on news websites where new articles will appear on the
page each day based on current events.

The layout typically features different-sized feature areas followed by
a series of article summary areas that link to full articles.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example of a regular style Blog Layout on a web page](./images/image033.png){width="6.0in"
height="3.579003718285214in"}

Dashboard layout

Dashboard layouts are often used in enterprise software for managing
various web applications. They typically feature a sidebar for
navigation with the main content area containing forms for configuration
or reporting data such as graphs and tables. This trendy layout provides
a good user experience for business users.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example of a Dashboard Layout on a web page](./images/image034.png){width="6.0in" height="3.0491305774278215in"}

More layouts

You can explore more of these layouts on the bootstrap examples page in
the additional resources.

Consider these layouts when building websites and web applications so
that you provide your audience with the best user experience possible.

UX with meta tags

Social networks are a great tool to share content with friends and
family, and even with coworkers and business partners.

When you share a link, most social networks generate a preview of the
link to let users know what the linked webpage is about.

Now that you\'re learning more about front end web development, you\'re
probably wondering how social networks generate these previews.

In this video, you will learn how Meta tags help webpages create
previews of other web pages.

By using Meta tags to control what information is displayed to users,
you can get more clicks when you share your websites.

But the Meta tags web developers use for this purpose are different from
the traditional SEO Meta tags that you learned about earlier in this
lesson.

Traditional SEO Meta tags are oriented towards search results, not
direct links.

Facebook\'s rapid growth led to millions of people sharing thousands of
links every day.

To improve the user experience, they had to find a way to display
information about a website before a user clicks on the link.

To address this challenge, Facebook established the Open Graph Protocol
in 2010.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Open Graph protocol](./images/image035.png){width="3.3in"
height="1.4413790463692038in"}The Open Graph Protocol is a set of
Metadata rules that allow web pages to describe themselves to social
networks.\
There are many Metadata options available within the protocol, but
before you learn about them, let\'s first discuss how the Open Graph
Protocol Metadata is defined.

Earlier in this lesson, you learned that Meta tags are defined inside of
the head element of an HTML document.

The Open Graph Protocol also uses Meta tags added to the head element,
but they are slightly different. Instead of the name attribute, the Open
Graph Protocol uses the property attribute to define the Metadata name.

Then, like the regular Meta tags, it uses the content attribute to
define the Metadata value.

Each property in the Open Graph Protocol starts with og : as a
convention to identify it as an Open Graph Protocol related tag.

The Open Graph Protocol requires that you must always include four
properties on a webpage.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Open Graph Protocol example.](./images/image036.png){width="6.0in"
height="1.8320516185476816in"}

These are title, type, URL, and image.

The title property defines the title of the page, this is the text that
will appear in the preview.

The type property defines the type of content, such as website, video,
music, or article.

Depending on the value you specify as the type, other properties may be
required.

You will learn about these in a later video.

The URL property defines the permanent web address that the social
network must use for the specific page.

The image property defines a URL to an image that must display when the
website is shared.

Together, these Open Graph Protocol properties enables social media
platforms to create a preview of the shared web link.

Say, you share a blog post.

The title of the post is the og:title, the blog post URL is the og:url,
and the image that displays is the og:image.

There are several other optional properties that you will learn more
about later. But let\'s briefly explore three of these.

The description property provides a description of the webpage.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Example og:local property](./images/image037.png){width="4.0in"
height="1.2213681102362204in"}

The og:locale property describes the language and territory of the
webpage\'s content.

For example, en_US specifies that the page is in English and the locale
is the United States.

The og:site_name property describes the name of the overall website that
the webpage belongs to.

You\'ve now learned how to use Metadata to describe web pages so that
social networks can improve user experience by previewing shared
content.

Next time you share a website on a social network, you can use what
you\'ve learned about Open Graph Protocol properties to generate more
clicks.

Social media cards

Before Facebook introduced the Open Graph Protocol (OGP), search engine
web crawlers, including social media websites, used the internal
heuristics of a website to make the best possible guess in terms of the
title, description, and preview images to be used for the content. This
often led to social networks not completely successfully interpreting
the post or information shared in the URL provided. Even today sometimes
when you open a link for a website, the preview generated will be an
out-of-scale image or a random image that is possibly embedded somewhere
within the web page. This is where meta tags come in to help the
end-user take better control of their content.

Over the years, the successful implementation of OGP has led to other
social media giants, including sister companies owned by Meta, to adopt
the protocol to improve the user experience. These platforms have their
own meta tags that prefix and replace 'og' that you have encountered
earlier in the course.

Need for social media cards

With the number of users and the use of internet marketing on the rise,
user attention is the currency. It is said that a picture is worth a
thousand words and the internet is a living proof of it: a caption and
image can drive users towards or away from a website. The title and
description shared with an URL should summarize the contents of a web
page. In some cases, it may refer to generic information about the
entire website. While for others you may tailor the social media (SM)
card for a specific page on a website that you're sharing. 'type' is an
important OGP tag in SM cards that help describe the details of a link
such as if it's a book, article, movie and so on, and provide more
detailed metadata for specific types. For example, in case of the music
type, you can add details for the song, album, duration or any other
information about the song. For a regular user scrolling through social
media, the link provided with the image preview has only one chance and
a moment's attention to make a good impression. In such cases, the role
of social media cards becomes very important.

The extra time spent by a developer to add social media tags is worth
the effort!

Social media cards and SEO

The internet today is an interconnected graph that is internally a web
of URL links, web crawlers, and search engine optimization tools.
Together, a web page's image and title are the store front to invite the
user. But the social media cards also play an important role in boosting
the rankings for the web crawlers used by search engines. They provide
the crawlers with the necessary information to build metadata that
eventually helps in ranking websites. Additionally, it also helps track
traffic to your website.

While it's advised to stick to the required tags in social media cards,
a developer can also use auxiliary tags that may be suitable. For
example, the use of the video tag that helps to play in-line when
displayed on social media websites like Meta.

Meta also has a dedicated page to assist developers that you can find in
the additional resources for this section.

Setting up a social media card

Little Lemon restaurant has hired

a marketing firm to help them advertise their business.

The firm recommends that the restaurant will run a social media
campaign.

So, the owners of the restaurant asked me to make sure that the website
is ready to be shared on different social media platforms.

Now let\'s examine how to prepare a web page so it can be linked on
social media platforms.

I\'ve opened index.html in visual studio code.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html - starting in vs code which sucks so badly](./images/image038.png){width="6.5in"
height="3.607638888888889in"}

At a minimum, I need to add four pieces of metadata required by the
protocol.

To do this, I add the four meta tags inside the head element.

On the first meta tag, I add the property attribute and set its value to
og:title.

I then add the content attribute and set its value to our menu.

This metadata is the title that will be displayed in the preview on the
social media platform. It\'s important to note that this value should
reflect the content of the individual web page and not the website as a
whole.

On the second meta tag, I add the property attributes and set its value
to og:type.

I then add the content attribute and set its value to website.

This metadata informs the social platforms that this content being
shared is a website.

On the third meta tag, I add the property attribute and set its value to
og:image.

I then add the content attribute and set its value to logo.png.

This metadata informs the social media platform what the preferred
preview images. In this case, it will be good to display the Little
Lemon restaurant logo.

On the last meta tag, I add the property attributes and set its value to
og:url.

I then add the content attribute and set its value to the url of the
Little Lemon website.

The web page is now ready to be shared on social media platforms.

However, there is some optional metadata I can add to provide additional
information to the platforms.

Since the platforms vary in what they display to their users, it\'s best
to provide as much information as possible.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html - all code so far](./images/image039.png){width="6.5in"
height="3.607638888888889in"}

I\'ll add three more or meta tags to the head element.

On the first tag, I had the property attribute and set its value to
og:description.

I then add the content attribute and set its value to Little Lemon is a
family-owned Mediterranean restaurant, focused on traditional recipes
served with a modern twist.

If the social media platform displays a description of the page when it
is shared, this text will be displayed to inform the users what the web
page is about.

On the second tag, I add the property attribute and set its value to
og:locale.

I then add the content attribute and set its value to en_US.

This will inform the social media platforms that the locale of the
website is US English.

On the last tag, I add the property attribute and set its value to
og:site_name.

I then add the content attribute and set its value to Little Lemon.

Some social media platforms will also display the website name beside
the page title.

So, this will ensure that the website title is correct.

The Little Lemon website is now ready for its big social media campaign.

Hopefully, this will lead to lots of new customers.

In this video, you\'ve explored a practical example of how to add open
graph protocol metadata.

You should now know how to add the four required meta tags title, type,
image, and URL.

You also learned how to add additional meta tags that provide extra
information like the website description and locale. Well done.

Additional resources

The following resources will be helpful as additional references in
dealing with different concepts related to the topics you have covered
in this section. 

-   [HTML meta tags](https://www.dofactory.com/html/metatags)

-   [Semantic
    elements](https://www.freecodecamp.org/news/semantic-html5-elements/)

-   [Simple bare bones HTML
    webpage](https://www.instructables.com/Bare-Bones-Web-Page/)

-   [HTML5/CSS bare-bones newsletter
    template](https://www.vandelaydesign.com/newsletter-tutorial/)

-   [Add open graph social metadata-
    Twitter](https://www.digitalocean.com/community/tutorials/how-to-add-twitter-card-and-open-graph-social-metadata-to-your-webpage-with-html)

-   [Essential meta tags for social
    media](https://css-tricks.com/essential-meta-tags-social-media/)

-   [The meta
    element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

-   [Open graph protocol](https://ogp.me/)

-   [Using open graph protocol on
    website](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/)

-   [Meta OGP guide for
    webmasters](https://developers.facebook.com/docs/sharing/webmasters/)

-   [Bootstrap with
    HTML](https://www.bootstrapdash.com/blog/use-bootstrap-with-html)

-   [Bootstrap Layout
    Examples](https://getbootstrap.com/docs/5.2/examples/)

Forms and validation

You\'ve most likely encountered forms when registering an account on a
website, or when filling out your address for something you\'ve bought
online.

As a developer, you\'ll use HTML forms to capture user input.

Capturing input is one thing, but the form also needs to ensure the data
is usable. How can you ensure the user input is valid?

For example, let\'s say you are building an online food delivery
website.

Say a user accidentally makes an error when entering the delivery
address and the form accepts it, although the location does not exist.

It will cause a very bad user experience when the food never arrives.

This is where form validation comes in.

Form validation is a process that ensures that the data entered by the
user in a form is valid and conforms to rules defined by the developer.

There are two methods of form validation, client-side validation and
server-side validation.

Client-side validation checks for errors as soon as they are typed into
the form.

This is done by the web browser or by JavaScript code, and provide the
user with immediate feedback.

The client-side validation process starts by checking if a form has been
filled out correctly. If there are no errors, the form will be submitted
to the server for processing.

However, if there are errors, an error message will alert the user of
the invalid data and how to change it for successful submission.

For example, you decide to use the input element with its type
attributes set to email.

If the user does not enter a valid email address, the web browser will
display an error message informing them that the data they entered is
not a valid email address.

On the other hand, server-side validation checks for errors after the
data has been submitted to the web server.

Server-side validation is more secure because it prevents malicious
users from tampering with your website\'s code and submitting invalid
data to your server.

When the form data is received by the web server, the backend will
validate the data before processing it.

This validation can run more complex checks, such as checking the data
against a database, or validating the data against business
requirements.

Most websites use both client-side and server-side validation to provide
immediate feedback to users, but also to protect against malicious data
submission and to ensure data integrity.

Let\'s examine how HTML allows you to do simple client-side validation.

HTML has several input types that are validated by the web browser.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![input types](./images/image040.png){width="2.0in"
height="2.766961942257218in"}

As demonstrated in the example, email is used for email addresses.

Others include \"tel\" for telephone numbers, \"url\" for URLs such as
www.data.com, \"date\" for date values, \"time\" for time values,
\"number\" for numeric values, \"range\" for numeric values which have a
minimum and maximum value, and \"color\" for color selection.

Say for instance, a user makes mistakes on a user account form when
entering a telephone number and URL, the browser will validate the
entered data against the requirements of the input type and provide user
feedback.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![required attribute](./images/image041.png){width="3.0in"
height="1.2400995188101487in"}

Another example is the required attribute, which indicates that the user
must supply a value to an input field.

The web browser will alert a user if a required value is outstanding.

That\'s the basics of client and server-side validation of forms.

You\'ll learn more about HTML validation capabilities in the next
reading.

Input types

You already learned about the input HTML tag and how the type property
determines the data your users can type in. This cheat sheet should be a
reference to decide what type best suits your use case. Most of the
inputs go hand in hand with the label tag for best accessibility
practices.

### Button

This displays a clickable button and it's mostly used in HTML forms to
activate a script when clicked. **\<input type=\"button\" value=\"Click
me\" onclick=\"msg()\" /\>**

Keep in mind you can also define buttons with the **\<button\>** tag,
with the added benefit of being able to place content like text or
images inside the tag.

\<button onclick=\"alert(\'Are you sure you want to continue?\')\"\> 

    \<img src=\"[https://yourserver.com/button_img.jpg]{.underline}\" 

        alt=\"Submit the form\" height=\"64\" width=\"64\"\>

 \</button\> 

### Checkbox

Defines a check box allowing single values to be selected or deselected.
They are used to let a user select one or more options of a limited
number of choices.

\<input type=\"checkbox\" id=\"dog\" name=\"dog\" value=\"Dog\"\>

\<label for=\"dog\"\>I like dogs\</label\>

\<input type=\"checkbox\" id=\"cat\" name=\"cat\" value=\"Cat\"\>

\<label for=\"cat\"\>I like cats\</label\>

### Radio

Displays a radio button, allowing only a single value to be selected out
of multiple choices. They are normally presented in radio groups, which
is a collection of radio buttons describing a set of related options
that share the same \"name\" attribute.

\<input type=\"radio\" id=\"light\" name=\"theme\" value=\"Light\"\> 

\<label for=\"light\"\>Light\</label\> 

\<input type=\"radio\" id=\"dark\" name=\"theme\" value=\"Dark\"\> 

\<label for=\"dark\"\>Dark\</label\> 

### Submit

Displays a submit button for submitting all values from an HTML form to
a form-handler, typically a server. The form-handler is specified in the
form's \"action\" attribute:

\<form action=\"myserver.com\" method=\"POST\"\>

  ...

\<input type=\"submit\" value=\"Submit\" /\>

\</form\>

### Text

Defines a basic single-line text field that a user can enter text into. 

\<label for=\"fname\"\>First name:\</label\> 

\<input type=\"text\" id=\"fname\" name=\"fname\"\> 

### Password

Defines a single-line text field whose value is obscured, suited for
sensitive information like passwords.

\<label for=\"pwd\"\>Password:\</label\> 

\<input type=\"password\" id=\"pwd\" name=\"pwd\"\> 

### Date

Displays a control for entering a date with no time (year, month and
day).

\<label for=\"dob\"\>Date of birth:\</label\>

\<input type=\"date\" id=\"dob\" name=\"date of birth\"\>

### Datetime-local

Defines a control for entering a date and time, including the year,
month and day, as well as the time in hours and minutes.

\<label for=\"birthdaytime\"\>Birthday (date and time):\</label\>

\<input type=\"datetime-local\" id=\"birthdaytime\" name=\"birthdaytime\"\>

### Email

Defines a field for an email address. It's similar to a plain text
input, with the addition that it validates automatically when submitted
to the server.

\<label for=\"email\"\>Enter your email:\</label\>

\<input type=\"email\" id=\"email\" name=\"email\"\>

### File

Displays a control that lets the user select and upload a file from
their computer. To define the types of files permissible you can use the
\"accept\" attribute. Also, to enable multiple files to be selected, add
the \"multiple\" attribute.

\<label for=\"myfile\"\>Select a file:\</label\>

\<input type=\"file\" id=\"myfile\" name=\"myfile\"\>

### Hidden

Defines a control that is not displayed but whose value is still
submitted to the server.

\<input type=\"hidden\" id=\"custId\" name=\"custId\" value=\"3487\"\>

### Image

Defines an image as a graphical submit button. You should use the "src"
attribute to point to the location of your image file.

\<input type=\"image\"src=\"submit_img.png\" alt=\"Submit\" width=\"48\" height=\"48\"\>

### Number

Defines a control for entering a number. You can use attributes to
specify restrictions, such as min and max values allowed, number
intervals or a default value.

\<input type=\"number\" id=\"quantity\" name=\"quantity\" min=\"1\" max=\"5\"\>

### Range

Displays a range widget for specifying a number between two values. The
precise value, however, is not considered important. This is typically
represented using a slider or dial control. To define the range of
acceptable values, use the "min" and "max" properties.

\<label for=\"volume\"\>Volume:\</label\>

\<input type=\"range\" id=\"volume\" name=\"volume\" min=\"0\" max=\"10\"\>

### Reset

Displays a button that resets the contents of the form to their default
values.

\<input type=\"reset\"\>

### Search

Defines a text field for entering a search query. These are functionally
identical to text inputs, but may be styled differently depending on the
browser.

\<label for=\"gsearch\"\>Search in Google:\</label\>

\<input type=\"search\" id=\"gsearch\" name=\"gsearch\"\>

### Time

Displays a control for entering a time value in hours and minutes, with
no time zone.

\<label for=\"appt\"\>Select a time:\</label\>

\<input type=\"time\" id=\"appt\" name=\"appt\"\>

### Tel

Defines a control for entering a telephone number. Browsers that do not
support "tel" fall back to standard text input. You can optionally use
the \"pattern\" field to perform validation.

\<label for=\"phone\"\>Enter your phone number:\</label\>

\<input type=\"tel\" id=\"phone\" name=\"phone\" pattern=\"\[+\]{1}\[0-9\]{11,14}\"\>

### Url

Displays a field for entering a text URL. It works similar to a text
input, but performs automatic validation before being submitted to the
server.

\<label for=\"homepage\"\>Add your homepage:\</label\>

\<input type=\"url\" id=\"homepage\" name=\"homepage\"\>

### Week

Defines a control for entering a date consisting of a week-year number
and a year, with no time zone. Keep in mind that this is a newer type
that is not supported by all the browsers.

\<label for=\"week\"\>Select a week:\</label\>

\<input type=\"week\" id=\"week\" name=\"week\"\>

### Month

Displays a control for entering a month and year, with no time zone.
Keep in mind that this is a newer type that is not supported by all the
browsers.

\<label for=\"bdaymonth\"\>Birthday (month and year):\</label\>

\<input type=\"month\" id=\"bdaymonth\" name=\"bdaymonth\" min=\"1930-01\" value=\"2000-01\"\>

Creating a form

The Little Lemon restaurant wants to expand its service by taking online
orders to deliver food to customers at home.

To do this, they need their customers to set up an account on their
website.

In this video, you will learn how to create a simple signup form for
user accounts on the Little Lemon website.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html with user confirm password](./images/image042.png){width="5.0in" height="3.0in"}

I\'ve set up my basic HTML document structure in a file named,
signup.html.

I start off by adding the form element.

The restaurant requires that the customer data is sent securely. I will
set the method attribute to post so that is submitted using an HTTP post
request.

You will learn more about different methods of form submission later.

For now, you just need to know that if you send a form via an HTTP post
request, it improves the data security of the form.

The restaurant wants to collect the customer\'s first name, last name,
and email address.

Of course, the form also needs a field for the password, and another to
confirm the password.

I need to create a form with five fields in total.

I\'ll start by adding the input elements, also known as the form fields.

First, I\'ll set up six div elements, one for each input element, and
one for the sign up button.

The div elements will cause each field of the form to display in its own
CSS block.

Now, I\'ll start adding the input elements.

I add an input element for the first name to the first div element.

Since the user will input plain texts for this form field, I set the
type attribute to text.

I also set the name and id attributes to user_first_name.

Remember that the name attribute sets the key for the value submitted to
the web server.

Later in this video, I\'ll explain why I set the ID attribute.

Next, I add an input element for the last name.

Like the first name element, I set the type attribute to text, and the
name and ID attributes to user_last_name.

I then add an input element for the email address.

To make sure users enter a valid email address in this field, I set the
type attribute to email.

Earlier you learned that doing so establishes HTML\'s client-side
validation.

I also set the name and ID attributes to user_email.

Next, I add the input element for the password.

I want the password to be hidden on screen as the user types it, so I
set the type attribute to password.

When an input field is set to password, each character that a user
enters will display as a placeholder character, such as the bullet
point.

The content in the field will contain the password that the user enters,
but it will be hidden.

I then set the name and ID attributes to user_password.

Finally, I add the input element for confirming the password.

Again, I set the type to password to hide the content of the input field
on screen.

I then set the name and ID attributes to user_confirm_password.

Now that our input fields are set up,

I save the file and open the Live Preview to check the webpage.

Everything displays correctly.

However, I\'d like to improve the user experience by informing the user
what each field represents.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html form with user confirm password button](./images/image043.png){width="5.0in"
height="3.115918635170604in"}

To do this, I\'ll add a label element before each input element.

Now I want to explain why I set the ID attribute for each input field
earlier in the video.

The reason for this, is that it allows me to associate a label with each
input element.

Labels improve the user experience and assist accessibility software and
understanding the form.

I now add a label element above the first input element.

Inside the label element, I add the descriptive text for the input
field.

In this case, the text description will be first name.

Then, to associate the label with the input field, I add the four
attribute and set its value to match the value of the ID attribute of
the input element.

Finally, I\'ll add a line break tag after the label element so that the
input field displays below the label. I then repeat the same process for
each input element.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![Sign Up form](./images/image044.png){width="2.0in"
height="2.996363735783027in"}

I save the file again and open the Live Preview.

Oh, yes, that\'s much better.

The form labels now display above the input fields.

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
![index.html with added submit button](./images/image045.png){width="4.0in"
height="1.3523129921259842in"}

To finalize the form, I need to add one more thing, the submit button.
Inside the last div element, I add a button element.

I set the button type attribute to submit.

Then inside the button element, I add the text, sign up.

I save the file again and open the Live Preview.

The form is now ready to use.

Once the backend is set up by a backend developer to accept the data
submitted via the form, users will be able to create their accounts.

In this video, you learned how to create a basic form with several
different input fields, each in its own CSS block, you covered how to
set the method attribute to submit the form in a secure way, and you
also now know how to associate a label with an input field to improve
the user experience.

Good luck with creating your own signup forms.
