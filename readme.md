---
title: |
  meta's HTML & CSS in Depth
  by meta
author: "bbauska"
date last editted: "5/3/2024 Fri 8+am"
output: 
  markdown:
    with some style
---

<h1 align="center">HTML &amp; CSS in Depth</h1>

<h6 align="center">(by meta - META)</h6>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ readme.md of meta-html-css-in-depth in bbauska.github.io ~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 01. coursera logo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image001b.png?raw=true"
  title="Coursera logo"
  alt="Coursera logo."
  style="width:20%;" />
</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 02. meta logo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image002.png?raw=true"
  title="meta logo"
  alt="meta logo."
  style="width:15%;" />
</p>
<h2>Course syllabus</h2>

<h3>Prerequisites</h3>

<p>To take this course, you don't need any developer experience, but you must be 
eager to get started with coding.</p>

<h2>Week 1</h2>

<p>In the first module, week one (1), you will start with an introduction to the course and 
gain insight into what your career path as an HTML and CSS developer might look like.</p>
<p>Then, you'll move on to <i>semantic tags</i> and the importance of taking a structured 
approach to creating a well-formed web page.</p>
<p>After which you will learn about <i>metadata and tags</i> and how you can use them to 
influence your web page's ranking through <i>Search Engine Optimization (SEO)</i>.</p>
<p>Next, you will learn about <i>user input and forms</i> and you will create and 
test a form by yourself.</p>
<p>In the final part of the module (1), you will learn about <i>media elements</i> 
and you'll learn how to embed video and audio on a web page.</p>

<h5>After completing the 1<sup>st</sup> week (1), you should be able to:</h5>

<ul>
  <li>Use common semantic and meta tags to improve the accessibility, readability 
    and SEO of a web page.</li>
  <li>Create commonly-used web page layouts and components.</li>
  <li>Create and test a form with client-side validation.</li>
  <li>Recognize server-side connections and the languages used to carry out requests 
    and responses.</li>
  <li>Post form data to a server.</li>
  <li>Create a video and audio player that can rate the media played.</li>
</ul>

<h2>Week 2</h2>

<p>In week two (2), you will focus on <i>CSS layouts, grids and flexboxes</i>.
You will learn about fundamental layouts that you can use to design a good
web page.</p>

<p>Next, you will learn about <i>CSS selectors</i> which correspond to specific elements 
or element groups in an HTML document. In this section, you will also learn about 
pseudo-class selectors that you can use to improve the interactivity of your web 
pages without having to add overly advanced styling.</p>
<p>In addition, you will learn about <i>keyframes, animations and effects in CSS</i>.</p>
<p>The final part of this module is about how to use <i>browser developer tools</i> 
to assist with debugging and resolving HTML and CSS issues.</p>

<h5>After completing the 2<sup>nd</sup> week/module (2), you should be able to:</h5>

<ul>
  <li>Use Flexbox and CSS grids to create responsive layouts and charts,</li>
  <li>Use advanced CSS selectors such as pseudo-classes for targeted styling,</li>
  <li>Use CSS effects to introduce text effects, animations and transformations 
    into your stylesheet,</li>
  <li>Create simple keyframe animations,</li>
  <li>Perform basic front-end testing, debugging and error handling, and</li>
  <li>Adapt your CSS to perform as expected in different browsers.</li>
</ul>

<h2>Week 3</h2>

<p>In the 3rd and final module/week (3), you will have an opportunity to recap what you 
learned in the course and put it into practice by creating a home page for a client 
persona.</p>

<h5>After completing the 3<sup>rd</sup> &amp; final week/module (3), you should be able to:</h5>

<ul>
  <li>Apply the skills you learned in this course to introduce more advanced 
    styling into your portfolio.</li>
</ul>

<h1>Course Introduction</h1>

<p>Perhaps you know a little about HTML and CSS from another course you did, or 
perhaps you don't know much at all. Either way, a quick summary will be useful. 
Let's explore some basic HTML and CSS principles and practices.</p>
<p>HTML stands for Hypertext Markup Language.</p>
<p>But what does that mean?</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 03. hypertext and markup (03) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image003.png?raw=true"
  title="Hypertext and Markup"
  alt="Hypertext and Markup."
  style="width:45%" />
</p>

<p>Hypertext is text which contains links to other text.</p>
<p>Markup refers to tags and elements used within a document.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 04. basic html page structure (03) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image004.png?raw=true"
  title="Basic HTML page structure"
  alt="Basic HTML page structure."
  style="width:45%" />
</p>

<p>HTML elements with their opening and closing tags in angle brackets make up 
an HTML document. These elements form the structure of a webpage and describe what 
to display to the web browser. When it comes to HTML, it's important to know about 
the purpose of HTML in the web browser. The use of HTML tags and correct syntax, 
and how HTML elements are used in a web document.</p>
<p>But what can you do with HTML? You can add images to a web page 
with HTML code. You can use it to display data in tables, and you can build forms 
with a wide range of inputs. Also, using the correct HTML structure and appropriate 
elements as a foundation is an essential part of building accessible websites.</p>
<p>HTML can assist in ensuring web accessibility by supporting the technology people 
with disabilities use to interact with and understand websites.  Another important 
concept to know about when you're talking about HTML is the Document Object Model 
or DOM.</p>
<p>Users need to be able to interact with elements on a web page. This means that 
HTML document must be represented in a way that JavaScript code can query and update 
it. That's the function of the DOM. It's a model of the objects in your HTML file.</p>
<p>Web developers interact with the DOM through JavaScript to update content, set 
up events and animate HTML elements.  Now that you've covered the basics of HTML, 
let's move on to CSS or Cascading Style Sheets.</p>
<p>If HTML is the frame and structure of a building, then CSS is the paint, wallpaper, 
fixtures, and overall style. CSS tells the web browser how to display HTML elements 
on screen.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~ 05. css to style elements, box model, document flow (04) ~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image005.png?raw=true"
  title="Use CSS to Style elements, use Box Model, and arrange page elements"
  alt="Use CSS to Style elements, use Box Model, and arrange page elements."
  style="width:45%;" />
</p>

<h5>You use CSS to;</h5>

<ul>
  <li>Style elements within an HTML document,</li>
  <li>Create an appealing layout for your webpage using the box model, and</li>
  <li>Arrange page elements using normal document flow.</li>
</ul>

<p>That was your HTML and CSS refresher. Now get ready to dive deeper into learning 
more about these two topics.</p>

<h4>Semantic tags and why we need them</h4>

<p>By now you know that HTML describes the content of a web page. But how do you 
describe the meaning of a web page?</p>
<p>To understand this in a real-world context, think of buttons in an elevator. The 
vertical arrangement of buttons isn't enough for someone to understand their meaning. 
To convey the meaning or semantics of the button, numbers are added so that people 
know which button will take them to which floor.</p>
<p>When you write HTML it's good practice to semantically describe the content. 
This allows search engines and accessibility software such as screen readers to 
understand the contents of a page, fortunately you can do this by using some basic 
HTML tags. For example, using a heading tags such as H1 describes that the content 
is a heading. Similarly, the UL and OL tags describe lists. However, there are many 
more semantic HTML elements available to you as a developer.</p>
<p>In this module I will share a structured approach you can take to make sure 
that you create a well-formed web page.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 06. basic html page structure (05) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image006.png?raw=true"
  title="Basic HTML page structure"
  alt="Basic HTML page structure."
  style="width:45%" />
</p>

<p>Let's revisit the basic structure of an HTML page which includes the head and 
body.</p>
<p>Inside the body tag you can lay out the website with very semantic tags to describe 
each of the sections.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 07. html tags (05) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image007.png?raw=true"
  title="HTML tags"
  alt="HTML tags."
  style="width:45%" />
</p>

<p>For a typical HTML page, the structure can be semantically described using the 
header, main and footer semantic HTML tags.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 08. header and nav links (05) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image008.png?raw=true"
  title="Header and navigation links example"
  alt="Header and navigation links example."
  style="width:45%" />
</p>

<p>For example, suppose you lay out your page with a <b>header section</b> that contains 
some company logo and navigation links.</p>
<p>Then a <b>main section</b> contains sections and articles.</p>
<p>Finally, a <b>footer section</b> contains contact information and social media links.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 09. nav tag - main navigation section (06) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image009.png?raw=true"
  title="Nav tag - the main navigation section"
  alt="Nav tag - the main navigation section."
  style="width:45%" />
</p>

<p>The <b>main navigation section</b> of your web page can also be described semantically 
using the <b>Nav</b> tag.</p>
<p>Depending on how web pages designed the Nav element is often 
placed after the header element and the header element is used for logos.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 10. unordered list tag inside nav (06) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image010.png?raw=true"
  title="Unordered list tag inside of nav tag"
  alt="Unordered list tag inside of nav tag."
  style="width:45%" />
</p>

<p>The main links of your website are then added inside the Nav element. It is 
common practice for developers to specify their links as an unordered list inside 
the Nav element.</p>
<p>Next is the main content of a web page. The two key semantic elements for 
your main content are the <b>article</b> and <b>section elements</b>.</p>
<p>First let's examine the <i>article</i> element. The HTML specification states that 
according to the World Wide Web Consortium's website, the article element 
indicates content which represents a complete or self-contained composition in a 
document page application or site that is independently distributable. That's quite 
a mouthful.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 11. newspaper image (08) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image011.png?raw=true"
  title="Newspaper image"
  alt="Newspaper image."
  style="width:15%" />
</p>

<p>It may help to think of a page in a newspaper.  There are many articles on 
the page and you can cut out the individual articles with scissors if needed.
The articles you can remove are the article element.</p>
<p>Examples; forum post, magazine or newspaper article, a blog entry, user submitted 
comment, interactive widget or gadget, or any independent item of content.</p>
<p>Let's examine how the article element is used say you are developing a blog 
about your summer holiday.  It's good practice to contain the blog post content 
inside of the article element because it's a complete self-contained composition 
on a web page.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 12. article element (08) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image012.png?raw=true"
  title="Article element"
  alt="Article element."
  style="width:45%" />
</p>

<p>You should place the article element within the main element. Then add your 
regular heading &lt;h2&gt; and paragraph &lt;p&gt; tags within the article element.</p>
<p>The reason for doing it this way is because the main element semantically represents 
the main content of the page. And inside of it there can be multiple article elements 
for something like a blog post list.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 13. footer element (09) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image013.png?raw=true"
  title="Footer element"
  alt="Footer element."
  style="width:45%" />
</p>

<p>At the end of your document is the footer element. This might contain 
additional navigational links or content. It is important to note that 
semantic elements are not limited to this structure. Since their purpose is to 
describe the semantics of the content, the elements can be nested inside of each 
other. If it accurately describes the content, let's update the previous example 
to use a nested semantic structure.</p>

<p>You add a header element to the article element, inside the header element at 
the heading element with the blog title and a paragraph element describing the 
date and author of the blog post. Inside the main element at the content of the 
blog post. That's it, let's examine the section element.</p>
<p>You can add a section element to semantically define individual
sections of the article.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 14. descriptive section elements (09) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image014.png?raw=true"
  title="Descriptive section elements"
  alt="Descriptive section elements."
  style="width:45%;" />
</p>

<p>It is important to note that sections should contain heading elements to semantically 
describe the section.</p>
<p>It is also possible to use section elements to describe different sections of 
your webpage, the section element doesn’t require the article element. It all depends 
on how you want to semantically describe your page.</p>
<p>And now you know how to semantically describe the contents of a web page, your 
web pages more accessible because the content is semantically described to add 
meaning.</p>
<p>Now, search engines and accessibility software can easily understand the contents 
of your well-formed web page.</p>

<h4>Semantic tags in action</h4>

<p>The Little Lemon Restaurant has asked me to add a new blog page to
their website. They've told me that the page will contain several blog
posts, and that it must use semantic html so that search engines and
accessibility software can understand the semantics of the page.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 15. adding basic semantic structure (10) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image015.png?raw=true"
  title="Adding basic semantic structure"
  alt="Adding basic semantic structure."
  style="width:35%;" />
</p>

<p>I've set up my basic html document structure in a file named blog.html. I'll 
start off by adding my basic semantic structure.</p>
<p>First, I add the header element. Followed by the nav element. Next, the main 
element. Finally, the footer element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 16. header, nav, main and footer (11) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image016.png?raw=true"
  title="Header, nav, main and footer"
  alt="Header, nav, main and footer."
  style="width:45%;" />
</p>

<p>Remember this structure describes the semantics of this html document. Specifically, 
the header element will be used to display the Little Lemon logo, and the nav element 
will be used to describe the navigational structure of the website. The main element 
will feature the main content of the web page, and the footer will be used to display 
copyright information.</p>
<p>When a search engine or accessibility software reads this document, the semantic 
tags will help the software understand the purpose and meaning of different sections 
of the document.</p>
<p>Let us now add the details to each element. Inside the header element, I add 
the Little Lemon logo using the image tag.</p>

<p>Inside the nav element, I add the navigation links in an ordered list element 
using the ul tag. I then add three list item elements using the li tag. Inside the 
list items, I add the hyperlinks for index.html, location.html and blog.html using 
the anchor tag. In the main element, add an h1 tag for the blog heading.</p>

<p>The restaurant tells use that there will be two blog posts for their website.</p>
<p>Add two article elements after the h1 element. Inside the first
article element, add an h2 tag for the title of the blog post.  The title is 20% 
off this weekend. Then add a paragraph element below the title which contains 
the blog post text.</p>
<p>Inside the second article element, I add an h2 tag for the title which is our 
new menu.  Again, add a paragraph element below the title which contains the blog 
post text.</p>
<p>Finally, add a paragraph element to the footer element. In this paragraph 
element, add the copyright notice. The blog pages now semantically described 
through the html document.</p>

<p>Now save the file by pressing Control and S or Command and S on Mac.</p>
<p>Then right click the blog.html file and select live preview to preview the file.</p>
<p>The blog page looks good and all thanks to proper semantic design
that ensures accessibility and search engine optimization.</p>

<p>I'm sure that the Little Lemon Restaurant will get lots of business
through their blog, and their customers with disabilities will be able
to access the blog with no problems</p>

<h4>Metadata</h4>

<p>When was the last time you used a search engine? Probably in the last few hours 
or minutes. Perhaps you just wanted to quickly look something up or maybe you needed 
more in-depth information on a topic. Either way, the search engine you used will have 
returned a list of results that were most relevant to what you searched for.</p>

<p>But how does a search engine determine which web pages are most relevant?
You will learn how search engines analyze web pages and how meta tags help
provide information for search engines.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 17. seo: search engine optimization (13) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image017.png?raw=true"
  title="SEO: Search Engine Optimization"
  alt="SEO: Search Engine Optimization."
  style="width:15%;" />
</p>
<p>A major part of launching a website is a process called search engine optimization 
or SEO. This process involves making improvements to a website’s content semantics 
&amp; delivery to improve its ranking in search results.</p>

<p>You might be wondering what exactly does a search engine do when it analyzes 
a web page? Well when a search engine visits your website, it analyzes the html 
document and media content. If it finds a link to another html document, it follows 
the link to that document and continues following links until it is finished analyzing 
the entire website. Based on the results of the analysis and the content on your 
website, the search engine will rank the website for various search terms.</p>

<p>While your website might be the number one result for one search term, it could 
rank very low for another. Every search engine has its own algorithm for ranking 
websites. And while it's not disclosed how the ranks are determined, there are
many best practices you can follow to influence how search engines analyze and 
rank your website. But for now, let's just focus on how meta tags influence website
ranking.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 18. meta tags vs metadata (13) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image018.png?raw=true"
  title="Meta tags define metadata.  Metadata is data about the web page"
  alt="Meta tags define metadata.  Metadata is data about the web page."
  style="width:35%;" />
</p>
<p>Meta tags define metadata about a web page.</p>
<p>What is metadata? You ask? It's data about other data which in this
case is data about the web page.</p>
<p>Meta tags are added inside the head element of your html document and
as you know, nothing inside the head element is displayed in the web
browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 19. meta tags: unseen elements within the browser (14) ~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image019.png?raw=true"
  title="Meta tags: Unseen elements within the browser"
  alt="Meta tags: Unseen elements within the browser."
  style="width:25%;" />
</p>

<p>In other words, meta tags are unseen elements within the browser.</p>
<p>Note that there is no closing tag for the meta tag.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~ 20. meta element: has two attributes; name and content (14) ~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image020.png?raw=true"
  title="Meta Element: 2 attributes; name and content"
  alt="Meta Element: 2 attributes; name and content."
  style="width:35%;" />
</p>

<p>The meta element has two attributes, name and content.</p>
<p>The name attribute specifies the name of the metadata and the content
attribute specifies the value of the metadata.</p>
<p>Let's examine some examples of metadata.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 21. author metadata (14) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image021.png?raw=true"
  title="Author metadata: Specifies the author of the web page"
  alt="Author metadata: Specifies the author of the web page."
  style="width:45%;" />
</p>
<p>The author metadata specifies the author of the web page.</p>
<p>The name attribute is author and the content attribute is the person
and company who are the author of the web page.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 22. description metadata (15) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image022.png?raw=true"
  title="Description metadata: Describes the content of the web page"
  alt="Description metadata: Describes the content of the web page."
  style="width:45%;" />
</p>

<p>The description metadata describes the content of the web page.</p>
<p>This is often used by search engines as descriptive text in search
results.</p>
<p>The name attribute is set to description and the content attribute is
the descriptive text.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 23. keyword metadata (15) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image023.png?raw=true"
  title="Keywords metadata - do not use any longer"
  alt="Keywords metadata - do not use any longer."
  style="width:45%;" />
</p>
<p>The keywords metadata was previously used to provide search keywords
for search engines.</p>
<p>However, this led to a lot of websites using the keywords metadata to
manipulate search rankings.</p>
<p>One of the major search engines now ignores this metadata and another
uses keywords metadata as a spam indicator because of this, it's
recommended not to include this metadata in modern web pages.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 24. robots metadata (16) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image024.png?raw=true"
  title="Robots metadata, contents index, follow"
  alt="Robots metadata, contents index, follow."
  style="width:45%;" />
</p>
<p>Another type of metadata is the robot's metadata and it tells search
engines if and how they should analyze your web page.</p>
<p>The name ‘robots’ comes from the automated software often referred to
as bots, that search engines used to analyze websites.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~ 25. robots metadata: index, follow, noindex, nofollow (16) ~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image025.png?raw=true"
  title="Robots metadata: index, follow, noindex, nofollow"
  alt="Robots metadata: index, follow, noindex, nofollow."
  style="width:15%;" />
</p>
<p>The content attribute for Robots has four possible values.</p>
<p>Index tells the bot to analyze the page.</p>
<p>Follow tells the bot to also visit all links on the web page.</p>
<p>Noindex tells the bot not to analyze the page. Some bots will ignore
this so it's best not to rely on this to stop bots from analyzing your
page and,</p>
<p>Nofollow tells the bot not to visit links on the web page. Again,
some bots will ignore this value so it's best not to rely on it.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 26. viewport metadata (16) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image026.png?raw=true"
  title="Robots metadata: index, follow, noindex, nofollow"
  alt="Robots metadata: index, follow, noindex, nofollow."
  style="width:45%;" />
</p>
<p>Finally, there's the view ports metadata.</p>
<p>The view port metadata is important when designing responsive web pages.</p>
<p>Why you might ask because when a web pages viewed on a phone or tablet, the 
device will by default attempt to render the web page as if it is being viewed 
on a desktop.</p>
<p>This results in a poor browsing experience for the user.</p>
<p>The solution is to define view ports metadata.</p>
<p>There are many values available for view ports metadata.</p>
<p>The most used value for the mobile experiences is to set
the width to device dash with and the initial scale to 1.0, you can
learn more about view ports in the additional reading.</p>
<p>It's important to note that view port metadata does not solve all the issues 
with browsing websites on mobile devices.</p>
<p>The other part of the solution is responsive web design.</p>
<p>But we were talking about search engine optimization, right?</p>
<p>View port metadata is important for the user experience and it's also
important for search engine optimization.</p>
<p>This is because many search engines now include websites mobile
experience as a part of their ranking algorithms, there is more metadata
that you can define on you web page to specifically improve its presence
on social media.</p>
<p>But that's for later modules.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 27. search engine optimization (18) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image027.png?raw=true"
  title="SEO: author, description, keywords, robots and viewports metadata"
  alt="SEO: author, description, keywords, robots and viewports metadata."
  style="width:7%;" />
</p>
<p>For now, it's important to know that author, description, keywords, robots and viewports metadata all
play a role in the search engine optimization of web pages.</p>

<h4>Bare bones layout</h4>

<p>An important part of being a developer is not just the tools you use,
such as your integrated development environment, but also the repository
of knowledge and code templates you build up over time.</p>
<p>In this module, I'm going to introduce you to one of these templates,
which will help you get set up quickly for building webpages. Let's open
Visual Studio Code to go through the templates step-by-step.</p>
<p>In the folder, we have <em><strong>index.html</strong></em> along
with the JS folder and a CSS folder.</p>
<p>Inside the JS folder, there's a file named
<em><strong>script.js</strong></em>. There is no content in this
file.</p>
<p>It is added to this folder so that you can easily add JavaScript code
to the webpage. I recommend that you add any other JavaScript files to
this folder too.</p>
<p>Next, I'll open the CSS folder. In the folder there's a file named
<em><strong>styles.css</strong></em>.</p>
<p>Again, there is no content in this file, but it is here so that you
can easily add CSS rules to the webpage. Again, it's best if you add any
other CSS files also to this folder.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 28. example semantic structure (19) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image028.png?raw=true"
  title="Template HTML with semantic structure set up"
  alt="Template HTML with semantic structure set up."
  style="width:45%;" />
</p>
<p>I go back to my template folder and open it in Visual Studio Code. I
open the index.html file. The file has a semantic HTML document
structure set up.</p>
<p>At the top, there is the DOCTYPE declaration followed by the HTML
root element.</p>
<p>Inside the root element, there are the head and body elements in the
head element.</p>
<p>The title and meta tags are already optimized for search engines.</p>
<p>I recommend that you update the title along with the description and author 
meta tags.</p>
<p>Below, are the Meta tags for the Open Graph Protocol.</p>
<p>Don't worry about the details of these tags just yet as 
you learn about them in a later module.</p>
<p>For now, the main thing to know is that if you plan on sharing the
webpage on social media, you should remember to uncomment this HTML
section and update the content attributes.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 29. more commented out code (20) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image029.png?raw=true"
  title="More commented out code for icons"
  alt="More commented out code for icons."
  style="width:45%;" />
</p>
<p>The next block of commented out code is for icons.</p>
<p>If you want to show an icon in the web browser tab for your website, 
you can update the href attributes here to point to your icon.</p>
<p>Remember, you always link elements for the CSS style sheet to the
last section of the head element.</p>
<p>To speed things up for you, there is a link already set up to
reference the styles.css file in the CSS folder.</p>
<p>By now you can probably see how useful this template is.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 30. body element (21) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image030.png?raw=true"
  title="Body element"
  alt="Body element."
  style="width:45%;" />
</p>
<p>Let's continue to the body element.</p>
<p>The body element already contains a basic semantic structure.</p>
<p>This includes the header element for your website title or logo, the nav 
element for your website navigation, the main element for your main content, 
and the footer element for any copyright notices or links to secondary webpages.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 31. include js here (21) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image031.png?raw=true"
  title="Include JavaScript here"
  alt="Include JavaScript here."
  style="width:45%;" />
</p>
<p>Below the footer element, you add script elements for JavaScript
files.</p>
<p>To make your life easy, a script element is already set up to
reference the script.js file in the JS folder.</p>
<p>With this template, you'll be able to quickly start building out webpages.</p>
<p>It's worth keeping a copy of this template on your local machine to use and
reference in future projects.</p>
<p>In this module, you've been introduced to a semantic HTML template
that you can use for building webpages. Good luck.</p>

<h4>Layout design</h4>

<p>As you build web pages throughout your career, you’ll notice that
many pages follow similar layouts and structures.</p>
<p>This is the outcome of many years of research into user interface 
design and user experience.</p>
<p>Different companies, libraries and frameworks then adopt the resulting
best practices.</p>
<p>Many examples of these layouts can be seen in the popular bootstrap
framework.</p>
<p>However, many other frameworks provide similar designs.</p>

<h4>Top navbar layout</h4>

<p>Websites often have a top navbar layout to provide a set of essential
anchor links to the user. These typically link to the main areas of the
website, such as product pages, careers pages or contact pages. This
provides the visitor to the website with a consistent navigation
experience.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 32. navbar example (22) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image032.png?raw=true"
  title="Example of a top navbar layout on a web page"
  alt="Example of a top navbar layout on a web page."
  style="width:45%;" />
</p>

<h3>Carousel layout</h3>

<p>Product-focused websites often use a large carousel on their homepage
to highlight their featured products, discounts and offers. The carousel
contains content items that will rotate through the carousel area at a
fixed interval.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 33. example of a carousel layout (23) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image033.png?raw=true"
  title="Example of a Carousel Layout on a web page"
  alt="Example of a Carousel Layout on a web page."
  style="width:45%;" />
</p>

<h4>Blog layout</h4>

<p>The blog layout is used to feature multiple content items of differing importance.</p>
<p>It is often seen on news websites where new articles will appear on
the page each day based on current events.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 34. sample longer featured blog post (23) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image034.png?raw=true"
  title="Example of a longer featured Blog Layout on a web page"
  alt="Example of a longer featured Blog Layout on a web page."
  style="width:45%;" />
</p>
<p>The layout typically features different-sized feature areas followed
by a series of article summary areas that link to full articles.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 35. sample blog post (24) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
  <img class="displayed"
  src="/images/image035.png?raw=true"
  title="Sample blog post"
  alt="Sample blog post."
  style="width:45%;" />
</p>
<h4>Dashboard layout</h4>

<p>Dashboard layouts are often used in enterprise software for managing
various web applications. They typically feature a sidebar for
navigation with the main content area containing forms for configuration
or reporting data such as graphs and tables. This trendy layout provides
a good user experience for business users.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 36. example dashboard layout (25) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image036.png?raw=true"
  title="Example of a Dashboard Layout on a web page"
  alt="Example of a Dashboard Layout on a web page."
  style="width:45%;" />
</p>

<h4>More layouts</h4>

<p>You can explore more of these layouts on the bootstrap examples page
in the additional resources.</p>
<p>Consider these layouts when building websites and web applications so
that you provide your audience with the best user experience
possible.</p>

<h4>UX with meta tags</h4>

<p>Social networks are a great tool to share content with friends and
family, and even with coworkers and business partners.</p>
<p>When you share a link, most social networks generate a preview of the
link to let users know what the linked webpage is about.</p>
<p>Now that you're learning more about front end web development, you're
probably wondering how social networks generate these previews.</p>
<p>In this module, you will learn how Meta tags help webpages create
previews of other web pages.</p>
<p>By using Meta tags to control what information is displayed to users,
you can get more clicks when you share your websites.</p>
<p>But the Meta tags web developers use for this purpose are different
from the traditional SEO Meta tags that you learned about earlier in
this lesson.</p>
<p>Traditional SEO Meta tags are oriented towards search results, not
direct links.</p>
<p>Facebook's rapid growth led to millions of people sharing thousands
of links every day.</p>
<p>To improve the user experience, they had to find a way to display
information about a website before a user clicks on the link.</p>
<p>To address this challenge, Facebook established the Open Graph
Protocol in 2010.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~ 37. open graph protocol: metadata rules for describing websites (26) ~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image037.png?raw=true"
  title="Open Graph Protocol: metadata rules for describing websites"
  alt="Open Graph Protocol: metadata rules for describing websites."
  style="width:25%;" />
</p>
<p>The Open Graph Protocol is a set of Metadata rules that allow web pages to describe themselves to social
networks.</p>
<p>There are many Metadata options available within the protocol, but
before you learn about them, let's first discuss how the Open Graph
Protocol Metadata is defined.</p>
<p>Earlier in this lesson, you learned that Meta tags are defined inside
of the head element of an HTML document.</p>
<p>The Open Graph Protocol also uses Meta tags added to the head
element, but they are slightly different. Instead of the name attribute,
the Open Graph Protocol uses the property attribute to define the
Metadata name.</p>
<p>Then, like the regular Meta tags, it uses the content attribute to
define the Metadata value.</p>
<p>Each property in the Open Graph Protocol starts with og : as a
convention to identify it as an Open Graph Protocol related tag.</p>
<p>The Open Graph Protocol requires that you must always include four
properties on a webpage.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 38. open graph protocol: title, type, url & image (26) ~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image038.png?raw=true"
  title="Open Graph Protocol: Title, Type, Url, and Image"
  alt="Open Graph Protocol: Title, Type, Url, and Image."
  style="width:45%;" />
</p>
<p>These are title, type, URL, and image.</p>
<p>The title property defines the title of the page, this is the text
that will appear in the preview.</p>
<p>The type property defines the type of content, such as website,
video, music, or article.</p>
<p>Depending on the value you specify as the type, other properties may
be required.</p>
<p>You will learn about these in a later module.</p>
<p>The URL property defines the permanent web address that the social
network must use for the specific page.</p>
<p>The image property defines a URL to an image that must display when
the website is shared.</p>
<p>Together, these Open Graph Protocol properties enables social media
platforms to create a preview of the shared web link.</p>
<p>Say, you share a blog post.</p>
<p>The title of the post is the og:title, the blog post URL is the
og:url, and the image that displays is the og:image.</p>
<p>There are several other optional properties that you will learn more
about later. But let's briefly explore three of these.</p>
<p>The description property provides a description of the webpage.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 39. og: local property (27) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image039.png?raw=true"
  title="OG: local property"
  alt="OG: local property."
  style="width:45%;" />
</p>
<p>The og:locale property describes the language and territory of the
webpage's content.</p>
<p>For example, en_US specifies that the page is in English and the
locale is the United States.</p>
<p>The og:site_name property describes the name of the overall website
that the webpage belongs to.</p>
<p>You've now learned how to use Metadata to describe web pages so that
social networks can improve user experience by previewing shared
content.</p>
<p>Next time you share a website on a social network, you can use what
you've learned about Open Graph Protocol properties to generate more
clicks.</p>

<h4>Social media cards</h4>

<p>Before Facebook introduced the Open Graph Protocol (OGP), search
engine web crawlers, including social media websites, used the internal
heuristics of a website to make the best possible guess in terms of the
title, description, and preview images to be used for the content.</p>
<p>This often led to social networks not completely successfully interpreting
the post or information shared in the URL provided.</p>
<p>Even today sometimes when you open a link for a website, the preview generated will be an
out-of-scale image or a random image that is possibly embedded somewhere
within the web page.</p>
<p>This is where meta tags come in to help the end-user take better control of 
their content.</p>
<p>Over the years, the successful implementation of OGP has led to other
social media giants, including sister companies owned by Meta, to adopt
the protocol to improve the user experience.</p>
<p>These platforms have their own meta tags that prefix and replace ‘og’ that 
you have encountered earlier in the course.</p>

<h4>Need for social media cards</h4>

<p>With the number of users and the use of internet marketing on the
rise, user attention is the currency.</p>
<p>It is said that a picture is worth a thousand words and the internet is a 
living proof of it: a caption and image can drive users towards or away from 
a website.</p>
<p>The title and description shared with an URL should summarize the contents 
of a web page.</p>
<p>In some cases, it may refer to generic information about the entire website.</p>
<p>While for others you may tailor the social media (SM) card for a specific page on a 
website that you’re sharing.</p>
<p>‘type’ is an important OGP tag in SM cards that help describe the details of a link
such as if it’s a book, article, movie and so on, and provide more detailed metadata 
for specific types.</p>
<p>For example, in case of the music type, you can add details for the song, album, 
duration or any other information about the song.</p>
<p>For a regular user scrolling through social media, the link provided with the image 
preview has only one chance and a moment’s attention to make a good impression.</p>
<p>In such cases, the role of social media cards becomes very important.</p>
<p>The extra time spent by a developer to add social media tags is worth the effort!</p>

<h4>Social media cards and SEO</h4>

<p>The internet today is an interconnected graph that is internally a
web of URL links, web crawlers, and search engine optimization tools.</p>
<p>Together, a web page’s image and title are the store front to invite the
user.</p>
<p>But the social media cards also play an important role in boosting
the rankings for the web crawlers used by search engines.</p>
<p>They provide the crawlers with the necessary information to build metadata that
eventually helps in ranking websites. Additionally, it also helps track
traffic to your website.</p>
<p>While it’s advised to stick to the required tags in social media
cards, a developer can also use auxiliary tags that may be suitable.</p>
<p>For example, the use of the video tag that helps to play in-line when
displayed on social media websites like Meta.</p>
<p>Meta also has a dedicated page to assist developers that you can find
in the additional resources for this section.</p>

<h4>Setting up a social media card</h4>

<p>Little Lemon restaurant has hired a marketing firm to help them
advertise their business.</p>
<p>The firm recommends that the restaurant will run a social media
campaign.</p>
<p>So, the owners of the restaurant asked me to make sure that the
website is ready to be shared on different social media platforms.</p>
<p>Now let's examine how to prepare a web page so it can be linked on
social media platforms.</p>
<p>I've opened index.html in visual studio code.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 40. metadata required by protocol (30) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image040.png?raw=true"
  title="Metadata required by protocol"
  alt="Metadata required by protocol."
  style="width:45%;" />
</p>
<p>At a minimum, I need to add four pieces of metadata required by the
protocol.</p>
<p>To do this, I add the four meta tags inside the head element.</p>
<p>On the first meta tag, I add the property attribute and set its value
to og:title.</p>
<p>I then add the content attribute and set its value to our menu.</p>
<p>This metadata is the title that will be displayed in the preview on
the social media platform.</p>
<p>It's important to note that this value should reflect the content of
the individual web page and not the website as a whole.</p>
<p>On the second meta tag, I add the property attributes and set its
value to og:type.</p>
<p>I then add the content attribute and set its value to website.</p>
<p>This metadata informs the social platforms that this content being
shared is a website.</p>
<p>On the third meta tag, I add the property attribute and set its value
to og:image.</p>
<p>I then add the content attribute and set its value to logo.webp.</p>
<p>This metadata informs the social media platform what the preferred
preview images.</p>
<p>In this case, it will be good to display the Little Lemon restaurant
logo.</p>
<p>On the last meta tag, I add the property attributes and set its value
to og:url.</p>
<p>I then add the content attribute and set its value to the url of the
Little Lemon website.</p>
<p>The web page is now ready to be shared on social media platforms.</p>
<p>However, there is some optional metadata I can add to provide
additional information to the platforms.</p>
<p>Since the platforms vary in what they display to their users, it's
best to provide as much information as possible.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 41. more head element meta tags (31) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image041.png?raw=true"
  title="More Head element meta tags"
  alt="More Head element meta tags."
  style="width:45%;" />
</p>
<p>I'll add three more meta tags to the head element.
On the first tag, I had the property attribute and set its value to
og:description.
I then add the content attribute and set its value to Little Lemon is
a family-owned Mediterranean restaurant, focused on traditional recipes
served with a modern twist.
If the social media platform displays a description of the page when
it is shared, this text will be displayed to inform the users what the
web page is about.</p>

<p>On the second tag, I add the property attribute and set its value to
og:locale.
I then add the content attribute and set its value to en_US.
This will inform the social media platforms that the locale of the
website is US English.</p>

<p>On the last tag, I add the property attribute and set its value to
og:site_name.
I then add the content attribute and set its value to Little
Lemon.
Some social media platforms will also display the website name beside
the page title.
So, this will ensure that the website title is correct.</p>

<p>The Little Lemon website is now ready for its big social media
campaign. Hopefully, this will lead to lots of new customers.</p>

<p>In this module, you've explored a practical example of how to add
open graph protocol metadata.
You should now know how to add the four required meta tags title,
type, image, and URL.
You also learned how to add additional meta tags that provide extra
information like the website description and locale. Well done.</p>

<h3>Additional resources</h3>

<p>The following resources will be helpful as additional references in
dealing with different concepts related to the topics you have covered
in this section. </p>

<ul>
  <li><a href="https://www.dofactory.com/html/metatags" target="_blank" rel="noopener noreferrer"><strong>HTML meta tags</strong></a></li>
  <li><a href="https://www.freecodecamp.org/news/semantic-html5-elements/" target="_blank" rel="noopener noreferrer"><strong>Semantic elements</strong></a></li>
  <li><a href="https://www.instructables.com/Bare-Bones-Web-Page/" target="_blank" rel="noopener noreferrer"><strong>Simple bare bones HTML webpage</strong></a></li>
  <li><a href="https://www.vandelaydesign.com/newsletter-tutorial/" target="_blank" rel="noopener noreferrer"><strong>HTML5/CSS bare-bones newsletter template</strong></a></li>
  <li><a href="https://www.digitalocean.com/community/tutorials/how-to-add-twitter-card-and-open-graph-social-metadata-to-your-webpage-with-html" target="_blank" rel="noopener noreferrer"><strong>Add open graph social metadata- Twitter</strong></a></li>
  <li><a href="https://css-tricks.com/essential-meta-tags-social-media/" target="_blank" rel="noopener noreferrer"><strong>Essential meta tags for social media</strong></a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" target="_blank" rel="noopener noreferrer"><strong>The meta element</strong></a></li>
  <li><a href="https://ogp.me/" target="_blank" rel="noopener noreferrer"><strong>Open graph protocol</strong></a></li>
  <li><a href="https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/" target="_blank" rel="noopener noreferrer"><strong>Using open graph protocol on website</strong></a></li>
  <li><a href="https://developers.facebook.com/docs/sharing/webmasters/" target="_blank" rel="noopener noreferrer"><strong>Meta OGP guide for webmasters</strong></a></li>
  <li><a href="https://www.bootstrapdash.com/blog/use-bootstrap-with-html" target="_blank" rel="noopener noreferrer"><strong>Bootstrap with HTML</strong></a></li>
  <li><a href="https://getbootstrap.com/docs/5.2/examples/" target="_blank" rel="noopener noreferrer"><strong>Bootstrap Layout Examples</strong></a></li>
</ul>

<h4>Forms and validation</h4>

<p>You've most likely encountered forms when registering an account on a
website, or when filling out your address for something you've bought
online.</p>
<p>As a developer, you'll use HTML forms to capture user input.</p>
<p>Capturing input is one thing, but the form also needs to ensure the
data is usable. How can you ensure the user input is valid?</p>
<p>For example, let's say you are building an online food delivery
website.</p>
<p>Say a user accidentally makes an error when entering the delivery
address and the form accepts it, although the location does not
exist.</p>
<p>It will cause a very bad user experience when the food never
arrives.</p>
<p>This is where form validation comes in.</p>
<p>Form validation is a process that ensures that the data entered by
the user in a form is valid and conforms to rules defined by the
developer.</p>
<p>There are two methods of form validation, client-side validation and
server-side validation.</p>
<p>Client-side validation checks for errors as soon as they are typed
into the form.</p>
<p>This is done by the web browser or by JavaScript code, and provide
the user with immediate feedback.</p>
<p>The client-side validation process starts by checking if a form has
been filled out correctly. If there are no errors, the form will be
submitted to the server for processing.</p>
<p>However, if there are errors, an error message will alert the user of
the invalid data and how to change it for successful submission.</p>
<p>For example, you decide to use the input element with its type
attributes set to email.</p>
<p>If the user does not enter a valid email address, the web browser
will display an error message informing them that the data they entered
is not a valid email address.</p>
<p>On the other hand, server-side validation checks for errors after the
data has been submitted to the web server.</p>
<p>Server-side validation is more secure because it prevents malicious
users from tampering with your website's code and submitting invalid
data to your server.</p>
<p>When the form data is received by the web server, the backend will
validate the data before processing it.</p>
<p>This validation can run more complex checks, such as checking the
data against a database, or validating the data against business
requirements.</p>
<p>Most websites use both client-side and server-side validation to
provide immediate feedback to users, but also to protect against
malicious data submission and to ensure data integrity.</p>
<p>Let's examine how HTML allows you to do simple client-side
validation.</p>
<p>HTML has several input types that are validated by the web
browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 42. input types (34) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image042.png?raw=true"
  title="Input Types"
  alt="Input Types."
  style="width:15%;" />
</p>
<p>As demonstrated in the example, email is used for email addresses.</p>
<p>Others include "tel" for telephone numbers, "url" for URLs such as
www.data.com, "date" for date values, "time" for time values, "number"
for numeric values, "range" for numeric values which have a minimum and
maximum value, and "color" for color selection.</p>
<p>Say for instance, a user makes mistakes on a user account form when
entering a telephone number and URL, the browser will validate the
entered data against the requirements of the input type and provide user
feedback.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 43. required attribute (35) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image043.png?raw=true"
  title="Required Attribute: User must supply a value to an input field"
  alt="Required Attribute: User must supply a value to an input field."
  style="width:25%;" />
</p>
<p>Another example is the required attribute, which indicates that the
user must supply a value to an input field.</p>
<p>The web browser will alert a user if a required value is
outstanding.</p>
<p>That's the basics of client and server-side validation of forms.</p>
<p>You'll learn more about HTML validation capabilities in the next
reading.</p>

<h4>Input types</h4>

<p>You already learned about the input HTML tag and how the type
property determines the data your users can type in. This cheat sheet
should be a reference to decide what type best suits your use case. Most
of the inputs go hand in hand with the label tag for best accessibility
practices.</p>

<h4>Button</h4>

<p>This displays a clickable button and it’s mostly used in HTML forms
to activate a script when clicked.

<pre>  &lt;input type="button" value="Click me" onclick="msg()"/&gt;</pre>

<p>Keep in mind you can also define buttons with the
<b>&lt;button&gt;</b> tag, with the added benefit of being
able to place content like text or images inside the tag.</p>

<pre>  &lt;button onclick="alert('Are you sure you want to continue?')"&gt;
    &lt;img src="https://yourserver.com/button_img.jpg"
      alt="Submit the form" height="64" width="64"&gt;
  &lt;/button&gt;</pre>

<h4>Checkbox</h4>

<p>Defines a check box allowing single values to be selected or
deselected. They are used to let a user select one or more options of a
limited number of choices.</p>

<pre>  &lt;input type="checkbox" id="dog" name="dog" value="Dog"&gt;
  &lt;label for="dog"&gt;I like dogs&lt;/label&gt;
  &lt;input type="checkbox" id="cat" name="cat" value="Cat"&gt;
  &lt;label for="cat"&gt;I like cats&lt;/label&gt;</pre>

<h4>Radio</h4>

<p>Displays a radio button, allowing only a single value to be selected
out of multiple choices. They are normally presented in radio groups,
which is a collection of radio buttons describing a set of related
options that share the same "name" attribute.</p>

<pre>  &lt;input type="radio" id="light" name="theme" value="Light"&gt;
  &lt;label for="light"&gt;Light&lt;/label&gt;
  &lt;input type="radio" id="dark" name="theme" value="Dark"&gt;
  &lt;label for="dark"&gt;Dark&lt;/label&gt;</pre>

<h4>Submit</h4>

<p>Displays a submit button for submitting all values from an HTML form
to a form-handler, typically a server. The form-handler is specified in
the form’s "action" attribute:</p>

<pre>  &lt;form action="myserver.com" method="POST"&gt;
    …
    &lt;input type="submit" value="Submit" /&gt;
  &lt;/form&gt;</pre>

<h4>Text</h4>

<p>Defines a basic single-line text field that a user can enter text into. </p>

<pre>  &lt;label for="fname"&gt;First name:&lt;/label&gt; 
  &lt;input type="text" id="fname" name="fname"&gt;</pre>

<h4>Password</h4>

<p>Defines a single-line text field whose value is obscured, suited for
sensitive information like passwords.</p>

<pre>  &lt;label for="pwd"&gt;Password:&lt;/label&gt; 
  &lt;input type="password" id="pwd" name="pwd"&gt;</pre>

<h4>Date</h4>

<p>Displays a control for entering a date with no time (year, month and day).</p>

<pre>  &lt;label for="dob"&gt;Date of birth:&lt;/label&gt;
  &lt;input type="date" id="dob" name="date of birth"&gt;</pre>

<h4>Datetime-local</h4>

<p>Defines a control for entering a date and time, including the year,
month and day, as well as the time in hours and minutes.</p>

<pre>  &lt;label for="birthdaytime"&gt;Birthday (date and time):&lt;/label&gt;
  &lt;input type="datetime-local" id="birthdaytime" name="birthdaytime"&gt;</pre>

<h4>Email</h4>

<p>Defines a field for an email address. It’s similar to a plain text
input, with the addition that it validates automatically when submitted
to the server.</p>

<pre>  &lt;label for="email"&gt;Enter your email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;</pre>

<h4>File</h4>

<p>Displays a control that lets the user select and upload a file from
their computer. To define the types of files permissible you can use the
"accept" attribute. Also, to enable multiple files to be selected, add
the "multiple" attribute.</p>

<pre>  &lt;label for="myfile"&gt;Select a file:&lt;/label&gt;
  &lt;input type="file" id="myfile" name="myfile"&gt;</pre>

<h4>Hidden</h4>

<p>Defines a control that is not displayed but whose value is still
submitted to the server.</p>

<pre>  &lt;input type="hidden" id="custId" name="custId" value="3487"&gt;</pre>

<h4>Image</h4>

<p>Defines an image as a graphical submit button. You should use the
“src” attribute to point to the location of your image file.</p>

<pre>  &lt;input type="image"src="submit_img.png" alt="Submit" width="48" height="48"&gt;</pre>

<h4><b>Number</b></h4>

<p>Defines a control for entering a number. You can use attributes to
specify restrictions, such as min and max values allowed, number
intervals or a default value.</p>

<pre>  &lt;input type="number" id="quantity" name="quantity" min="1" max="5"&gt;</pre>

<h4><b>Range</b></h4>

<p>Displays a range widget for specifying a number between two values.
The precise value, however, is not considered important. This is
typically represented using a slider or dial control. To define the
range of acceptable values, use the “min” and “max” properties.</p>

<pre>  &lt;label for="volume"&gt;Volume:&lt;/label&gt;
  &lt;input type="range" id="volume" name="volume" min="0" max="10"&gt;</pre>

<h4>Reset</h4>

<p>Displays a button that resets the contents of the form to their
default values.</p>

<pre>  &lt;input type="reset"&gt;</pre>

<h4>Search</h4>

<p>Defines a text field for entering a search query. These are
functionally identical to text inputs, but may be styled differently
depending on the browser.</p>

<pre>  &lt;label for="gsearch"&gt;Search in Google:&lt;/label&gt;
  &lt;input type="search" id="gsearch" name="gsearch"&gt;</pre>

<h4>Time</h4>

<p>Displays a control for entering a time value in hours and minutes,
with no time zone.</p>

<pre>  &lt;label for="appt"&gt;Select a time:&lt;/label&gt;
  &lt;input type="time" id="appt" name="appt"&gt;</pre>

<h4 id="tel"><b>Tel</b></h4>

<p>Defines a control for entering a telephone number. Browsers that do
not support “tel” fall back to standard text input. You can optionally
use the "pattern" field to perform validation.</p>

<pre>  &lt;label for="phone"&gt;Enter your phone number:&lt;/label&gt;
  &lt;input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}"&gt;</pre>

<h4><b>Url</b></h4>

<p>Displays a field for entering a text URL. It works similar to a text
input, but performs automatic validation before being submitted to the
server.</p>

<pre>  &lt;label for="homepage"&gt;Add your homepage:&lt;/label&gt;
  &lt;input type="url" id="homepage" name="homepage"&gt;</pre>

<h4><b>Week</b></h4>

<p>Defines a control for entering a date consisting of a week-year
number and a year, with no time zone. Keep in mind that this is a newer
type that is not supported by all the browsers.</p>

<pre>  &lt;label for="week"&gt;Select a week:&lt;/label&gt;
  &lt;input type="week" id="week" name="week"&gt;</pre>

<h4><b>Month</b></h4>

<p>Displays a control for entering a month and year, with no time zone.
Keep in mind that this is a newer type that is not supported by all the
browsers.</p>

<pre>  &lt;label for="bdaymonth"&gt;Birthday (month and year):&lt;/label&gt;
  &lt;input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01"&gt;</pre>

<h4>Creating a form</h4>

<p>The Little Lemon restaurant wants to expand its service by taking
online orders to deliver food to customers at home.</p>
<p>To do this, they need their customers to set up an account on their
website.</p>
<p>In this module, you will learn how to create a simple signup form for
user accounts on the Little Lemon website.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 44. signup form document structure (39) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image044.png?raw=true"
  title="Signup form document structure"
  alt="Signup form document structure."
  style="width:45%;" />
</p>

<p>I've set up my basic HTML document structure in a file named,
signup.html.</p>
<p>I start off by adding the form element.</p>
<p>The restaurant requires that the customer data is sent securely.</p>
<p>I will set the method attribute to post so that is submitted using an
HTTP post request.</p>
<p>You will learn more about different methods of form submission
later.</p>
<p>For now, you just need to know that if you send a form via an HTTP
post request, it improves the data security of the form.</p>
<p>The restaurant wants to collect the customer's first name, last name,
and email address.</p>
<p>Of course, the form also needs a field for the password, and another
to confirm the password.</p>
<p>I need to create a form with five fields in total.</p>
<p>I'll start by adding the input elements, also known as the form
fields.</p>
<p>First, I'll set up six div elements, one for each input element, and
one for the sign up button.</p>
<p>The div elements will cause each field of the form to display in its
own CSS block.</p>
<p>Now, I'll start adding the input elements.</p>
<p>I add an input element for the first name to the first div
element.</p>
<p>Since the user will input plain texts for this form field, I set the
type attribute to text.</p>
<p>I also set the name and id attributes to user_first_name.</p>
<p>Remember that the name attribute sets the key for the value submitted
to the web server.</p>
<p>Later in this module, I'll explain why I set the ID attribute.</p>
<p>Next, I add an input element for the last name.</p>
<p>Like the first name element, I set the type attribute to text, and
the name and ID attributes to user_last_name.</p>
<p>I then add an input element for the email address.</p>
<p>To make sure users enter a valid email address in this field, I set
the type attribute to email.</p>
<p>Earlier you learned that doing so establishes HTML's client-side
validation.</p>
<p>I also set the name and ID attributes to user_email.</p>
<p>Next, I add the input element for the password.</p>
<p>I want the password to be hidden on screen as the user types it, so I
set the type attribute to password.</p>
<p>When an input field is set to password, each character that a user
enters will display as a placeholder character, such as the bullet
point.</p>
<p>The content in the field will contain the password that the user
enters, but it will be hidden.</p>
<p>I then set the name and ID attributes to user_password.</p>
<p>Finally, I add the input element for confirming the password.</p>
<p>Again, I set the type to password to hide the content of the input
field on screen.</p>
<p>I then set the name and ID attributes to user_confirm_password.</p>
<p>Now that our input fields are set up,</p>
<p>I save the file and open the Live Preview to check the webpage.</p>
<p>Everything displays correctly.</p>
<p>However, I'd like to improve the user experience by informing the
user what each field represents.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 45. label and input with id attribute (42) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image045.png?raw=true"
  title="Label and Input with Id attribute"
  alt="Label and Input with Id attribute."
  style="width:45%;" />
</p>

<p>To do this, I'll add a label element before each input element.</p>
<p>Now I want to explain why I set the ID attribute for each input field
earlier in the module.</p>
<p>The reason for this, is that it allows me to associate a label with
each input element.</p>
<p>Labels improve the user experience and assist accessibility software
and understanding the form.</p>
<p>I now add a label element above the first input element.</p>
<p>Inside the label element, I add the descriptive text for the input
field.</p>
<p>In this case, the text description will be first name.</p>
<p>Then, to associate the label with the input field, I add the four
attribute and set its value to match the value of the ID attribute of
the input element.</p>
<p>Finally, I'll add a line break tag after the label element so that
the input field displays below the label. I then repeat the same process
for each input element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 46. signup example form (43) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image046.png?raw=true"
  title="Example signup form"
  alt="Example signup form."
  style="width:25%;" />
</p>

<p>I save the file again and open the Live Preview.</p>
<p>Oh, yes, that's much better.</p>
<p>The form labels now display above the input fields.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 47. add submit button to form (43) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image047.png?raw=true"
  title="Add submit button to form"
  alt="Add submit button to form."
  style="width:45%;" />
</p>

<p>To finalize the form, I need to add one more thing, the submit
button. Inside the last div element, I add a button element.</p>
<p>I set the button type attribute to submit.</p>
<p>Then inside the button element, I add the text, sign up.</p>
<p>I save the file again and open the Live Preview.</p>
<p>The form is now ready to use.</p>
<p>Once the backend is set up by a backend developer to accept the data
submitted via the form, users will be able to create their accounts.</p>
<p>In this module, you learned how to create a basic form with several
different input fields, each in its own CSS block, you covered how to
set the method attribute to submit the form in a secure way, and you
also now know how to associate a label with an input field to improve
the user experience.</p>
<p>Good luck with creating your own signup forms.</p>
<p>Making the most of client-side validation</p>
<p>Have you ever completed a form online and then after you've clicked
on the submit button, one of the fields turned red?</p>
<p>There are many reasons for error messages when you complete online
forms, the format could be wrong, but sometimes an error results when a
field is empty or if a value is too long or too short.</p>
<p>As a developer, you can use HTML and CSS to guide users to enter the
correct data on forms and in this way, save web server resources.</p>
<p>In this section, you will learn more about the capabilities of
client-side validation in HTML and how to use CSS to effectively alert
users when data is incorrect.</p>
<p>By now you've learned about the different HTML input types and how
they validate the format of data, but there are additional attributes
that you can apply to elements for further validation.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 48. log-in form: username and password (44) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image048.png?raw=true"
  title="Log-in form: username and password"
  alt="Log-in form: username and password."
  style="width:45%;" />
</p>
<p>First, let's explore how you can ensure that the user provides a
value to a form field. This example of a log-in form contains two
fields, one for the username and one for the password.</p>
<p>It also contains a submit button to submit the form.</p>
<p>If a user hasn't added a username or password and clicks the "Submit"
button, the browser will allow the form to submit to the web server.</p>
<p>But this is a waste of server resources because although the
server-side validation will pick up the missing information and prevent
the processing of the request, a HTTP request was still submitted.</p>
<p>Let's improve this form by using client-side validation to ensure the
user enters values to both fields.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 49. required attribute (45) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image049.png?raw=true"
  title="Required attribute"
  alt="Required attribute."
  style="width:45%;" />
</p>
<p>Now with the required attribute in the code, if one of the fields is
empty and the user clicks the submit button, the request will not be
submitted to the web server.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 50. check required fields (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image050.png?raw=true"
  title="Check required fields"
  alt="Check required fields."
  style="width:15%;" />
</p>
<p>The web browser will focus on the first empty input element and inform the user that a field is
empty.</p>
<p>Now the form creates a much better user experience and prevents
unnecessary usage of web server resources, but user input that is too
short or too long would also result in unnecessary submissions to the
web server.</p>
<p>Another way to validate user input is to specify the required length
for data.</p>
<p>Let's say you want the usernames to be at least three characters long
and a maximum of 12 characters, or maybe you want to ensure more secure
passwords by requiring a minimum password length of five characters.</p>
<p>Fortunately, there are two more attributes you can use to ensure the
correct length of data.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 51. required length (46) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image051.png?raw=true"
  title="Required length"
  alt="Required length."
  style="width:45%;" />
</p>
<p>You can add the min length and max length attributes to the fields to
specify the required length. In this case, since the minimum value for
the username is set to three, a two-character entry would be
invalid.</p>
<p>If you click the submit button now, the web browser will inform you
of the length requirements.</p>
<p>A built-in function of the browser will generate the message
displayed on screen.</p>
<p>Again, a much better user experience and management of web server
resources.</p>
<p>Now let's focus on the way the browser communicates errors to the
users, like a form field that turns red when the data is invalid.</p>
<p>This can be readily implemented using CSS.</p>
<p>To highlight a field in red when the data is invalid, you use the
input element selector.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 52. error check with input element selector (46) ~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image052.png?raw=true"
  title="Error check with input element selector"
  alt="Error check with input element selector."
  style="width:45%;" />
</p>
<p>You then apply the pseudo-class selector called invalid.</p>
<p>You will learn more about pseudo-class selectors later in this
course.</p>
<p>For now, the key thing to know is that they are used to select
elements based on their state, such as whether the input data is valid
or invalid.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 53. error check with border 2px solid red (47) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image053.png?raw=true"
  title="Error check with border 2px solid red"
  alt="Error check with border 2px solid red."
  style="width:45%;" />
</p>
<p>Then you add a CSS property to set the border of the element to red.</p>
<p>But since all the form fields are empty when the form loads
initially, their state is still practically invalid.</p>
<p>This will cause all form fields to display red from the start like
demonstrated in this Real-world example of a login screen.</p>
<p>Ideally, you only want fields to appear red as the user enters invalid data.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 54. pseudo-class focus (47) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image054.png?raw=true"
  title="Pseudo-class focus"
  alt="Pseudo-class focus."
  style="width:45%;" />
</p>
<p>To do this, you need to apply another pseudo-class called focus,
which checks if the user is currently entering data into this field.</p>
<p>Now the form will appear normal when the page first loads, and when
the user starts inputting data, the field will turn red if the data is
invalid.</p>
<p>This module gave you a brief introduction to how you can use
client-side validation and CSS pseudo-class selectors to improve the
user experience of forms.</p>
<p>As you learn more about JavaScript in other courses, you will be able
to use even more advanced techniques to improve form validation.</p>
<p>Visual Studio Code on Coursera</p>
<p>In addition to having Visual Studio Code installed on your own
computer, in this course and throughout this program, you'll have the
opportunity to work in Visual Studio Code right here on Coursera!</p>
<p>As you progress through the course, you'll be able to write code in
hands-on activities called <b>Labs</b>. In these labs you'll
be able to open Visual Studio Code and start writing code without ever
leaving the course.</p>

<h4>How to get started working on Labs</h4>

<p>The Labs contain instructions explaining the coding task.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 56. creating an html document (48) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image056.png?raw=true"
  style="width:35%"
  title="Creating an HTML Document"
  alt="Creating an HTML Document" />
</p>
<p>When you click the button to open the lab, a new tab will open with
Visual Studio Code already setup and ready for you to start writing code!</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 57. project folder and files (49) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image057.png?raw=true"
  title="Preject Folder and Files"
  alt="Preject Folder and Files."
  style="width:35%;" />
</p>
<p>You'll see all the files for the lab in the Project folder in the
left sidebar.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 58. project folder and files, page 2 (49) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image058.png?raw=true"
  title="Preject Folder and Files, Page 2"
  alt="Preject Folder and Files, Page 2."
  style="width:35%;" />
</p>
<p>And the large editor area where you write your code for the lab.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 59. editor area (49) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image059.png?raw=true"
  title="Editor Area"
  alt="Editor Area."
  style="width:35%;" />
</p>
<p>All <b>Lab</b> exercises will include two important files.
A <b>README.md</b> file which contains instructions for using
Visual Studio Code and most importantly, how to run and view the output
of your code. The README.md file is the same for every Lab. There will
also be an <b>instructions.md</b> file which provides specific
instructions for each Lab.</p>

<p>These files may look a little confusing at first. They're written
using a language called Markdown. Markdown is used to add
formatting to text elements. Don't worry, you don't have to know
anything about Markdown. If you open these files in
<b>Preview</b> you'll see the formatted output and
they'll look totally normal.</p>

<p>You'll also likely see quite a few files and folders when you open in
the Lab. Many of the files and folders you'll be able to ignore. To get
started, look at the <b>instructions.md</b> file and it will
explain which file or files you'll be working in.</p>

<p><b>Working in the Terminal</b></p>
  
<p>For Labs in some courses, you may need to use a tool called the
Terminal from time to time to complete course activities. You can open
this by selecting the <b>Terminal</b> option in the upper
Visual Studio Code toolbar.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 60. coursera terminal work area (50) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image060.png?raw=true"
  title="Coursera terminal work area"
  alt="Coursera terminal work area."
  style="width:35%;" />
</p>
<p><strong>How to download files from your Visual Studio Code Lab to your local device</strong></p>

<ol type="1">
  <li>Select the <strong>Lab Files</strong> button in your Lab Toolbar.</li>
  <li>You'll be able to download your full workspace, specific folders, or individual files through the checkbox selection tool.</li>
  <li>After you've selected these files, use the <strong>Download</strong> link to download your files to your local device.</li>
</ol>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 61. coursera terminal lab files (50) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image061.png"
  style="width:35%;"
  title="Coursera terminal lab files"
  alt="Coursera terminal lab files." />
</p>
<h4>How to upload local files to your Visual Studio Code Lab</h4>

<p>If you'd like to upload your course files from your local device to
your Visual Studio Code lab, <strong>drag and drop</strong> your file
from your local device into the Visual Studio Code file tree.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 62. how to use visual studio (50) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image062.png"
  title="Coursera Terminal lab files"
  alt="Coursera Terminal lab files."
  style="width:35%;" />
</p>
<p>How to get a fresh copy of course-provided starter files. Your work will be saved 
and persist within your Visual Studio Code lab while you are enrolled in the course.
If you'd like to get a fresh copy of the original instructor-provided files at 
any time, you can do this through the <strong>Lab Help</strong> option in your 
Lab Toolbar.</p>
<p>Don't worry - your original work and files will still remain in your lab
until you personally remove or delete them, even when refreshing your
files through the steps below.</p>

<ol type="1">
  <li>First rename your original files to something like <em>[yourfilename] 
    [original].[your file extension]`.</em> You can do this by right-clicking 
  on your file in the Visual Studio Code file tree, selecting 
  <strong>Rename</strong>, and providing a new file name.</li>
</ol>

<p>For example for index.html, this could be renamed to <em>`index 
  [original].html`</em></p>

<ol start="2" type="1">
  <li>Select <strong>Lab Help</strong> from your Lab Toolbar and then select 
    <strong>Get latest version.</strong></li>
</ol>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 63. style.css and index.html in project folder (51) ~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image063.png"
  title="Project folder with .dotfiles-coursera, index.html and style.css"
  alt="Project folder with .dotfiles-coursera, index.html and style.css."
  style="width:35%;" />
</p>

<ol start="3" type="1">
  <li>You should now see a fresh copy of the original instructor-provided 
    files in your lab, in addition to your own (renamed) files.</li>
</ol>

<p>Create and test a form (solution)</p>
<p>The following code is an example solution for the previous exercise.
This code is placed inside the &lt;main&gt; element of index.html.</p>

<pre>  &lt;form&gt;&lt;/p&gt;
    &lt;div&gt;&lt;/p&gt;
      &lt;label for="username"&gt;Username&lt;/label&gt;&lt;/p&gt;
      &lt;input type="text" id="username" required minlength="2"&gt;&lt;/p&gt;
    &lt;/div&gt;&lt;/p&gt;
    &lt;div&gt;&lt;/p&gt;
      &lt;label for="password"&gt;Password&lt;/label&gt;&lt;/p&gt;
      &lt;input type="password" id="password" required minlength="2"&gt;&lt;/p&gt;
    &lt;/div&gt;&lt;/p&gt;
    &lt;button type="submit"&gt;Log In&lt;/button&gt;&lt;/p&gt;
  &lt;/form&gt;&lt;/p&gt;</pre>

<p>While reviewing the code, note the following items:</p>

<ul>
  <li>The label <em>for</em> attribute value matches the value of the <em>id</em> attribute on the corresponding input element</li>
  <li>The <em>type</em> attribute is set to <em>text</em> for the username input</li>
  <li>The <em>type</em> attribute is set to <em>password</em> for the password input</li>
  <li>Each field has a <em>required</em> attribute to enable client-side validation which checks that the form is filled out by the user</li>
  <li>Each field has a <em>minlength</em> attribute with its value set to 2. This enables client-side validation which will prompt the user if the content of the field is less than 2 characters.</li>
</ul>

<h4>Radio buttons</h4>

<p>You've surely booked something online before. Perhaps it was tickets to a 
show or accommodation for a holiday. The ability to book things online is super 
convenient. That's one of the reasons why the Little Lemon restaurant is adding a
table booking system to their website.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~ 64. form book a table w/contact person, number, table size, location (52) ~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image064.png?raw=true"
  title="Book a Table form"
  alt="Book a Table form."
  style="width:25%;" />
</p>
<p>By now, you should know that a HTML form will be an ideal solution for that.
Like most restaurants, Little Lemon has different table sizes and
different sections in the restaurant where customers can be seated.
Therefore, the HTML form must allow customers to decide between the
available table sizes, as well as if they want to sit indoors or
outdoors.</p>

<p>Since both choices have limited options available, it will be best to
use radio buttons for the input.
Radio buttons are ideal for this forum because they allow me to set
up groups of options of which only one option and the group can be
selected.</p>
<p>Now, let's explore how to set up a HTML form with radio buttons.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 65. book a table form updates (53) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image065.png?raw=true"
  title="Book a table form updates in vs code (or many better ones out there)"
  alt="Book a table form updates in vs code (or many better ones out there)."
  style="width:35%;" />
</p>
<p>I've opened Visual Studio Code and added a new file called booking.html.
I've set up the basic HTML structure and added a form element.
First, I'll add to fieldset elements, one for the table size and one
for location.</p>

<p>The fieldset element defines a group for the radio buttons.
Without the fieldset elements, all radio buttons will belong to the
same group, but for this form, we need two groups.
On the first fieldset element, I set the id attribute to size. On the
second fieldset element, I set the id attribute to location.</p>

<p>Below the fieldset elements, I add a button element
On the button element, I set the type attribute to submit. Inside the
element, I add the text book table.
There are three different tables sizes available at Little Lemon;
two-person, four-person, and six-person tables.</p>

<p>Inside the first fieldset element, I add three input elements
representing the three different tables sizes.
On the first input element, I set the type attribute to radio and the
value attribute to two.
I then set the name attribute to size.</p>

<p>It is important to set the name attribute value to match the value of
the id attribute in the fieldset.
This tells the browser, which fieldset the input belongs to. After
the element, I add the text two-person table.</p>

<p>On the second input element, I set the type attribute to radio and
the value attribute to four.
I then set the name attribute to size. After the element, I the text, 
four-person table. Since the four-person table is the most common booking, I want to
have this option selected by default.
To do this, I add the checked attribute to this input element.</p>

<p>On the third input element, I set the type attribute to radio and the
value attribute to six.
I then set the name attribute to size.
After the element, I add the text, six-person table.
In the second fieldset element, I add two input elements representing
the table location at the restaurant.
On the first input element, I set the type attribute to radio and the
value attribute to indoors.
I then set the name attribute to location, matching the id of the
second fieldset element.</p>

<p>Since the indoor booking is the most common, I'll add the checked
attribute to this input element so that it is selected by default.
On the second input element, I set the type attribute to radio and
the value attribute to outdoors.
Again, I set the name attribute to location.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~ 66. main section of index.html using radio buttons (55) ~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image066.png?raw=true"
  title="Main section, fields using radio buttons"
  alt="Main section, fields using radio buttons."
  style="width:45%;" />
</p>
<p>I save the file and open it in Live Preview. Success.</p>
<p>The form is set up correctly. Let's test it.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 67. sample form book a table (55) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image067.png?raw=true"
  title="Sample form, Book a table"
  alt="Sample form, Book a table."
  style="width:45%;" />
</p>
<p>If I choose an option for the table size and then choose a different
option, my previous choice is deselected.
The table location field behaves the same. I can only choose indoors
or outdoors.</p>

<p>However, I'm testing this form on a laptop with a large screen.</p>
<p>On a mobile device with a way smaller screen, it may be difficult for
the user to accurately select the small button elements.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 68. more sample form book a table (56) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image068.png?raw=true"
  title="More changes to form Book a table"
  alt="More changes to form Book a table."
  style="width:45%;" />
</p>
<p>Luckily, there is a way to improve this by setting the text and
button as the input area.</p>
<p>I open booking.html again, for each input element and texts, I wrap
them in a label element, which will group the texts with the input
element.</p>

<p>I save the file again and return to Live Preview.
If I click on the text now, the corresponding input element is
selected.
Selecting the desired choice will be much easier on a mobile device
now.
A user will be able to select the button specifically.
This form has a much better user experience now.</p>

<p>In this module, you've covered how to use radio buttons to create a
simple online booking form.
Hopefully, Little Lemon will get a lot more table bookings now.</p>

<h4>Using interactive form elements</h4>

<p>Little Lemon restaurant is becoming very popular in their local area,
so much so that they've opened a second Little Lemon in another area
nearby. Because of this, they want to update the form of their table booking
system.</p>

<p>In this module, you will learn how to add advanced HTML features to a
form. They've also added some new tables to the restaurant.
They've also asked to replace the table size field with a field for
the number of people and to remove the table location field.
Finally, they want customers to be able to choose which restaurant
they want to book at.
The owners have told me that they're hoping for continued success and
growth of the business, and so I should plan for more restaurant
locations to be added.</p>

<p>Open booking.html in Visual Studio Code or any other text editor of 
your choosing.  VS code is perferred by many.  Not me.
Start by deleting the previous table and location fields.
Then add three div elements for the new fields. Next, add the
field for the booking date.
Luckily, HTML provides a built-in field type called date that'll
present a calendar to the customer when the field is clicked.</p>

<p>To add this, add an input element to the first div element and set
its type attribute to date. Next, set the ID and name attributes to
booking_date.</p>
<p>To provide a good user experience, add a label element before
the input element.</p>
<p>Inside the label element, add the text description, booking date.</p>
<p>Also, add the 'for attribute' and set its value to booking_table so
that accessibility software can describe the purpose of the input field
to its users.</p>
<p>Next, add the field for the number of people.</p>
<p>The restaurant has told us the maximum booking is 10 people, so use the 
range input type.</p>
<p>The range type allows you to specify the minimum and maximum values of
the field.</p>
<p>Add an input element to the second div element. Then, set its type
attribute to range.</p>
<p>Also, set its ID and name attributes to booking_people.</p>
<p>To set the minimum value, add the attribute min, which is short for
minimum, and set its value to one.</p>
<p>Then to set the maximum value, add the attribute max, which is
short for maximum, and set its value to 10.</p>
<p>Again, to provide a good user experience, add a label before the
element and set its content to number of people.</p>
<p>Then, set the 'for attribute' to booking_people.</p>
<p>Now, add the new location field.</p>
<p>The restaurant currently has two locations, but they said they might
add more later.</p>
<p>To allow for expansion later, use a data list, input type.</p>
<p>The data list input type allows you to specify a list of available
options that will appear in a drop-down list.</p>
<p>There can be tens and hundreds of options, so the field allows the
user to begin typing, and it will narrow down the available options
based on their input.</p>
<p>Since there are only two locations so far, the customer will be able
to select their location from the drop-down list.</p>
<p>When more locations are added later, the customer will be able to
begin typing their location and quickly select their location from a
reduced set of options.</p>
<p>Setting up the data list input type requires a few more steps than
the other input types.</p>
<p>First, add an input element.</p>
<p>Then set the name and ID attributes to booking_location.</p>
<p>Then add an attribute called list and set its value to locations.</p>
<p>This value is important for the next step.</p>
<p>Then add a data list element and set the ID attribute to match the
value of the list attribute on the input element.</p>
<p>In this case, set the ID attribute to locations.</p>
<p>Inside the data list element, add two option elements.</p>
<p>On the first option element, add the value attribute and set it to
Downtown.</p>
<p>On the second option element, add the value attribute and set it to
Uptown.</p>
<p>Again, to provide a good user experience, add a label before the
input element and set its content to location.</p>
<p>Then set the 'for attribute' to booking_location.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 69. live preview book a table form (59) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image069.png?raw=true"
  title="Live preview of Book a Table form"
  alt="Live preview of Book a Table form."
  style="width:25%;" />
</p>
<p>Save the file, and open it in live preview.</p>
<p>When you click on the date field, the browser opens a calendar and
allows you to select a date.</p>
<p>The range input type is presented as a slider that can you may slide left
and right to the value you want.</p>
<p>Finally, the data list input allows you to select an option for the
location or begin typing to narrow down the available options.</p>
<p>In this module, you learned how to use advanced features of HTML
forms.</p>
<p>You should now be able to add a calendar, create a slider with
values, and add a datalist that allows users to either select an option
from the drop-down list or by typing their option.</p>
<p>With the continued success of Little Lemon, I'm sure you'll be updating
this form again in the near future.</p>

<h4>Form submission</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 70. example checkout cart (59) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image070.png?raw=true"
  title="Example checkout cart"
  alt="Example checkout cart."
  style="width:25%;" />
</p>
<p>When ordering products online, you fill out your address and your credit card number, 
then you click on an Order button that confirms your order.</p>
<p>Because you are learning more about front-end development, you might
be wondering what exactly happens when you click on that order
button.</p>
<p>In this module, you will learn what happens when forms are submitted
in the web browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 71. http request response cycle (60) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image071.png?raw=true"
  title="HTTP Request Response Cycle"
  alt="HTTP Request Response Cycle."
  style="width:25%;" />
</p>
<p> By now, you know that the web browser communicates with a web server using a HTTP request response
cycle.</p>
<p>This means that the web browser sends requests to the web server, and
the web server sends back a response.</p>
<p>Up to now, the main type of requests you've been introduced to were
for resources such as HTML documents, images, CSS files, and JavaScript
files.</p>
<p>But it is also possible to send data as part of a request.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 72. how forms send data to a web server (60) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image072.png?raw=true"
  title="How forms send data to a web server"
  alt="How forms send data to a web server."
  style="width:25%;" />
</p>
<p>This is how forms send data to the web server.</p>
<p>In fact, there are two ways a form can send data to the web server
using the HTTP GET method or the HTTP POST method.</p>
<p>You can specify which method the form should use with the method
attribute of the form element.</p>
<p>Let's examine an example form and see how the data can be sent using
the two different methods.</p>
<p>This login form, accepts a username and password.</p>
<p>It also has a login button that submits the form to the web
server.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 73. form method get and post (61) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image073.png?raw=true"
  title="Form methods GET and POST"
  alt="Form methods GET and POST."
  style="width:45%;" />
</p>
<p>How would it work if the method attribute is set to GET?</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 74. login-form (61) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image074.png?raw=true"
  title="Login-form"
  alt="Login-form."
  style="width:45%;" />
</p>
<p>When the Login button is clicked, the form data is sent as part of the request URL.</p>
<p>This means that the user data is appended to the end of the URL in
the web browser navigation bar.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 75. login form data (61) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image075.png?raw=true"
  title="Login Form data"
  alt="Login Form data."
  style="width:45%;" />
</p>
<p>The web server receives the HTTP GET request, and extracts the form data from the URL.</p>
<p>While this is an easy way to submit data, it has three key problems.</p>
<p>First, the length of a URL is limited to around 2,000 characters
depending on the web browser you're using.</p>
<p>Some web browsers allow more, but there are inconsistencies between browsers.</p>
<p>So, if you have a large form, some data may be lost when it sent via
the GET Method to the web server.</p>
<p>Second, the length of a requested URL is also limited on some web servers.</p>
<p>Popular web server software such as Apache web server or Engine X,
have a default limit of around 4,096 characters.</p>
<p>Again, if you have a large form, some data may be lost. The final problem is security.</p>
<p>Since the data is included as part of the URL, it means that your
data is stored in your web browser history and possibly in the request
logs on the web server.</p>
<p>If you're transmitting personal information such as addresses or
credit card numbers, this is a major privacy and security risk.</p>
<p>Now, let's focus on how the form would work if we set the method
attribute to post.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 76. post form data (62) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image076.png?raw=true"
  title="Post Form Data"
  alt="Post Form Data."
  style="width:45%;" />
</p>
<p>When the form is submitted using the post method, the form data is
inserted into the content of the HTTP request.</p>
<p>When the submit button is pressed, it will send an HTTP post request
with the data contained in the body of the request.</p>
<p>The HTTP post method is more secure than the HTTP GET method.</p>
<p>However, the data could still be read by a third party listening to
the HTTP request.</p>
<p>To secure this completely, HTTPS is used to encrypt the data so that
only the sender and receiver can understand the data.</p>
<p>Once the web server receives the request, it processes it and sends
back an HTTP response.</p>
<p>If the request was successful, the response will direct the web
browser to a new webpage.</p>
<p>If errors occurred, there are many ways this can be handled by the
webpage as explained in a previous module.</p>
<p>You should now be familiar with how forms are sent to web servers,
and the difference between GET and POST.</p>

<h4>Submit</h4>

<p>You have recently learned about how forms are sent to web servers and
the difference between Get and Post. In this reading, you will build on
this knowledge by learning about Submit.</p>

<h4>Action and method</h4>

<p>Form submissions are an essential part of the world wide web. Nearly
every website uses forms, from buying items online to ordering food for
delivery. When you click the login button on a website, it sends your
username and password to a web server to log you into your account.</p>
<p>As you know by now, you add a form to your web page using the form
tag.</p>

<pre>  &lt;form&gt;
  &lt;/form&gt;</pre>

<p>But how the form is submitted is determined by two essential
attributes: action and method.</p>
<p>The action attribute specifies to which web address the form must be
sent. This is address is location of server-side code that will process
the request.</p>

<pre>  &lt;form action="/login"&gt;
  &lt;/form&gt;</pre>

<p>It is important to note that action can be a full URL address such as
<strong>https://meta.com</strong>, an absolute path such as
<strong>/login</strong>, or a relative path such as
<strong>login</strong>.</p>
<p>The absolute path, which starts with a forward slash, will use the
base address of the current website, such as
<strong>https://meta.com</strong> and combine it with the absolute path.
For example, if <strong>/login</strong> is the absolute path, the form
will be submitted to <strong>https://meta.com/login</strong>. If the
address is <strong>https://meta.com/company-info/</strong> and
<strong>/login</strong> is the absolute path, the submission address
will still be <a
href="https://meta.com/login"><strong>https://meta.com/login</strong></a>.</p>
<p>Similarly, a relative path will combine the current web address with
a relative path. For example, if the web browser is currently on the web
page <strong>https://meta.com/company-info/</strong>, and the relative
path is set to <strong>login</strong>, the form will be submitted to <a
href="https://meta.com/company-info/login"><strong>https://meta.com/company-info/login</strong></a>.</p>
<p>The method attribute specifies which HTTP method is used to submit
the form; GET or POST.</p>

<pre>  &lt;form method="get"&gt;
  &lt;/form&gt;
  &lt;form method="post"
  &lt;/form&gt;</pre>

<p>The form will default to the HTTP GET method when the method
attribute is not provided.</p>
<p>As you may already know, when the form is submitted using the HTTP
GET method, the data in the form's fields are encoded in the URL. And
when the form is submitted using the HTTP POST method, the data is sent
as part of the HTTP request body.</p>
<p>When the web server receives the request, it processes the data and
sends back an HTTP response. The response indicates the result of the
submission, which can be successful or fail due to invalid or incorrect
data.</p>
<p>However, as a front-end developer, it is essential to know that forms
are not the only way to submit data to the web server. As you learn more
about JavaScript and front-end libraries, you’ll discover that
developers often submit HTTP requests directly via code and send data as
part of the HTTP request body in a text format called JavaScript Object
Notation, or JSON. But that is a topic for another course. For now,
practice building HTML forms and submitting data to the web server using
the different attributes available.</p>

<h4>Browser differences</h4>

<p>An important part of being a front-end developer is to provide a good
user experience on the websites and web applications that you
develop.</p>
<p>That includes ensuring that users can complete HTML forms without
issues.</p>
<p>There are many web browsers available today for browsing the World
Wide Web.</p>
<p>However, each one is developed by a different company using different
technologies.</p>
<p>As a result, you will find that your HTML forms will appear
differently when you view them on different web browsers.</p>
<p>But a form may even appear differently on the same browser when you
view the form on a Windows PC or a Mac.</p>
<p>This makes the creation of a consistent user experience
challenging.</p>
<p>In this module, you will explore how form elements displayed
differently on various web browsers and how to solve this problem.</p>
<p>First, let's focus on the most common form element, the input
elements.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 77. input type: text, value: username (65) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image077.png?raw=true"
  title="Example Input Type: text, value: username"
  alt="Example Input Type: text, value: username."
  style="width:35%;" />
</p>
<p>The same input type HTML code displays differently in web browsers
such as Firefox, Microsoft Edge, Chrome, and Safari.</p>
<p>For example, there are subtle differences in the height and corners
of the input box.</p>
<p>There is also a difference in the default input box widths of Firefox
and Safari compared to other browsers like Microsoft Edge and Chrome.
Safari on Mac OS differs a lot from the other browsers using a thinner
border on regular corners.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 78. checkbox input type (66) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image078.png?raw=true"
  title="Checkbox input type"
  alt="Checkbox input type."
  style="width:35%;" />
</p>
<p>Next, let's explore the checkbox input type.</p>
<p>Again, the exact same input type HTML code, will let the checkbox
displayed differently in a checked and unchecked state in different
browsers.</p>
<p>Notice that Microsoft Edge uses a gray color in the check state,
while the other web browsers use blue, even still, each browser is using
a different shade of blue.</p>
<p>Also notice how the border of the checkbox varies between each web
browser.</p>
<p>Safari's checkbox is also smaller than the other.</p>
<p>Now that you've explored how HTML form elements can appear
inconsistently across different web browsers, let's focus on how to
solve this.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 79. css visual styling (67) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image079.png?raw=true"
  title="CSS visual styling"
  alt="CSS visual styling."
  style="width:35%;" />
</p>
<p>As you know, CSS allows you to define the visual styling of HTML elements.</p>
<p>Defining CSS rules for the different HTML form elements will ensure
that your element is styled consistently across web browsers.</p>
<p>For example, you can use elements selectors to select a different
element types and apply CSS properties to them.</p>
<p>It's also possible to study the individual input types using CSS
rules.</p>
<p>You can add a CSS rule using the element selector.</p>
<p>To select the input HTML element, use the input element selector, and
then specify the individual styling by adding a pair of square brackets,
and then type equals in this case text or email.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 80. css font, width, height and border (67) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image080.png?raw=true"
  title="CSS properties: font, width, height and border"
  alt="CSS properties: font, width, height and border."
  style="width:35%;" />
</p>
<p>Then apply CSS properties to set the font, width, height, and border.</p>
<p>If you specify styling with CSS in this way, the individual elements
of your forms will display consistently across browsers.</p>
<p>Luckily, there are a lot of resources that simplify the styling of
forms.</p>
<p>Popular libraries and frameworks such as Bootstrap, Tailwind CSS, and
Foundation provides CSS rules for forms, uninsured visual consistency
across different devices and browsers.</p>
<p>You should now know why it is important to pay attention to the
appearance of different HTML elements across web browsers, and how you
can ensure consistency with CSS rules.</p>

<h3>Glossary: HTML form elements</h3>

<p>The <strong>&lt;form&gt;</strong> element in HTML is an important and
useful element. The following sheet provides an overview of the
<strong>&lt;form&gt;</strong> constituent elements and their common
attributes with simple examples for quick reference.</p>

<h3>&lt;input&gt;</h3>

<p>It is used to create interactive controls, for example, buttons and
various types of text fields and so on, to accept input or data from the
user. The key attribute of this element is <strong>type</strong>. Some
common values for the <strong>type</strong> include: <strong>button,
checkbox, date, email, number, password, submit, text,</strong> and
<strong>url</strong>. These values dictate the appearance of the
element. For example, this code:</p>

<pre>  &lt;form action="my_action_page"&gt;
    &lt;label for="uname"&gt;Username:&lt;/label&gt;
    &lt;br&gt;
    &lt;input type="text" id="uname" name="username"&gt;
    &lt;br&gt;
    &lt;label for="pwd"&gt;Password:&lt;/label&gt;
    &lt;br&gt;
    &lt;input type="password" id="pwd" name="pwd"&gt;
    &lt;br&gt;&lt;br&gt;
    &lt;input type="submit" value="Login"&gt;
  &lt;/form&gt;</pre>

<p>Results in the following output:</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 81. username and password input types (69) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image081.png?raw=true"
  title="Two input types, text and password, as it displays in the browser"
  alt="Two input types, text and password, as it displays in the browser."
  style="width:15%;" />
</p>

<p>Note how the type <strong>password</strong> hides the user input.</p>

<h3>&lt;label&gt;</h3>

<p>Defines a label for an element. It has an attribute "for", the value
of which should be equal to the id attribute of the element it is
associated with. Note how in the example above, the
<strong>&lt;label&gt;</strong> is associated with the
<strong>&lt;input&gt;</strong> using its id value.</p>

<h3>&lt;select&gt;</h3>

<p>Defines a drop-down list of options presented to the user. It has a
couple of attributes:</p>

<ul>
  <li>Form, the id of the form in which the drop-down appears</li>
  <li>Name specifies the name of the control</li>
  <li>Multiple Boolean attribute, when specified, indicates if a user can select multiple options out of the list</li>
  <li>Required indicates if the user is required to select an option before submitting a form</li>
  <li>Size mentions the number of visible options in a drop-down list</li>
  <li>The options in a drop-down list are defined using the <strong>&lt;option&gt;</strong> element inside <strong>&lt;select&gt;</strong>. Note the example in the <strong>&lt;option&gt;</strong> description below.</li>
</ul>

<h3>&lt;textarea&gt;</h3>

<p>Defines a multi-line input field, typically to allow the user to
input longer textual data. The common attributes for this element
include:</p>

<ul>
  <li><strong>cols</strong> defines the width of the text area, the default value is 20</li>
  <li><strong>form</strong> the form element the text area is associated with</li>
  <li><strong>maxlength</strong> when specified, limits the maximum number of characters that can be entered in the text area </li>
  <li><strong>minlength</strong> the minimum number of characters that the user should enter</li>
  <li><strong>readonly</strong> once set, the user cannot modify the contents</li>
  <li><strong>rows</strong> defines the number of visible text lines for the text area</li>
  <li>The following line of code defines a text area of 10 visible lines and nearly 30 characters wide where the user can input a maximum of 200 characters:</li>
</ul>

<pre>  &lt;textarea name="response" rows="10" cols="30" maxlength=”200”&gt;
  &lt;/textarea&gt;</pre>

<h4>&lt;button&gt;</h4>

<p>Defines a clickable button. The <strong>onclick</strong> attribute
defines the behavior when the button is clicked by the user. For
example, in the code below, an alert message is shown to the user.</p>

<pre>  &lt;button type="button" onclick="alert('You just clicked!')"&gt;Click Me!
  &lt;/button&gt;</pre>

<h3>&lt;fieldset&gt; </h3>

<p>Used to group related input elements in a form. For instance,
elements related to the user’s personal information and educational
qualification can be grouped separately in two field sets.</p>

<h3>&lt;legend&gt;</h3>

<p>Defines a caption for the <strong>&lt;fieldset&gt;</strong> element.
For example:</p>

<pre>  &lt;fieldset&gt;
    &lt;legend&gt;Personal Info&lt;/legend&gt;
    &lt;label for="fname"&gt;First name:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="fname" name="fname" value="John"&gt;&lt;br&gt;
    &lt;label for="lname"&gt;Last name:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="lname" name="lname" value="Doe"&gt;&lt;br&gt;
  &lt;/fieldset&gt;

  &lt;fieldset&gt;
    &lt;legend&gt;Qualificaiton&lt;/legend&gt;
    &lt;label for="pdegree"&gt;Primary degree:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="pdegree" name="degree" value="Masters"&gt;&lt;br&gt;
    &lt;label for="fos"&gt;Last name:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="fos" name="field" value="Psychology"&gt;&lt;br&gt;
  &lt;/fieldset&gt;</pre>

<h3>&lt;datalist&gt;</h3>

<p>Specifies a list of pre-defined options for an input element. It
differs from <strong>&lt;select&gt;</strong> since the user can still
provide textual or numeric input other than the listed options.</p>

<pre>  &lt;form action="/my_action_page"&gt;
    &lt;label for="flowers"&gt;Favourite flower:&lt;/label&gt;&lt;br&gt;
    &lt;input list="flowers" name="flowers"&gt;
    &lt;datalist id="flowers"&gt;
      &lt;option value="Rose"&gt;
      &lt;option value="Lily"&gt;
      &lt;option value="Tulip"&gt;
      &lt;option value="Daffodil"&gt;
      &lt;option value="Orchid"&gt;
    &lt;/datalist&gt;
    ...
  &lt;/form&gt;</pre>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 82. datalist input type with drop-down menu (71) ~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image082.png?raw=true"
  title="Datalist input type with its drop-down list containing the options visible"
  alt="Datalist input type with its drop-down list containing the options visible."
  style="width:15%;" />
</p>

<h3>&lt;output&gt; </h3>

<p>Represents the result of a calculation (typically the output of a
script) or the outcome of the user action.</p>

<h3>&lt;option&gt;</h3>

<p>Defines an option for the drop-down list. The following code example
demonstrates how a simple list can be defined, with the rendered view
below the code block.</p>

<pre>  &lt;label for="course"&gt;Choose a course:&lt;/label&gt;&lt;br&gt;
  &lt;select id="course" name="courselist"&gt;
    &lt;option value="html"&gt;HTML Introduction&lt;/option&gt;
    &lt;option value="css"&gt;Styling with CSS&lt;/option&gt;
    &lt;option value="js"&gt;JavaScript&lt;/option&gt;
    &lt;option value="react"&gt;React Basics&lt;/option&gt;
  &lt;/select&gt;</pre>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 83. option input type with drop-down list (71) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image083.png?raw=true"
  title="Option input type as with its drop-down list visible"
  alt="Option input type as with its drop-down list visible."
  style="width:15%;" />
</p>
<p>By default, the first item in the drop-down list is selected. To
define a pre-selected option, add the selected attribute to the
option.</p>

<h3>&lt;optgroup&gt;</h3>

<p>Defines a group of related options in a drop-down list. Its attribute
label names the group.</p>

<h3>Additional resources</h3>

<p>The following resources will be helpful as additional references in
dealing with different concepts related to the topics you have covered
in this section. </p>
<p><a
href="https://www.sitepoint.com/client-side-form-validation-html5/">Client-side
validation of forms with HTML5</a></p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">&lt;input&gt;
tag in HTML</a></p>
<p><a
href="https://www.the-art-of-web.com/html/html5-form-validation/">Form
validation examples</a></p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">Input
type: Radio buttons</a></p>
<p><a
href="https://www.webfx.com/web-design/learn/why-does-your-website-look-different-in-different-browsers/">Why
does your website look different in different browsers?</a></p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data">HTML
Form submission – sending form data</a></p>
<p>Video and audio</p>
<p>These days it's difficult to think of using the Internet without
streaming music or videos, but this wasn't always possible on the World
Wide Web.</p>
<p>How do you, as a developer, add videos and audio to a webpage?</p>
<p>Luckily, it's quite straightforward, thanks to HTML and modern web
browsers.</p>
<p>HTML video and audio tags are used for embedding media on a webpage
and both tags support different file types that can be played in the web
browser.</p>
<p>For videos, the following file types are supported by most web
browsers, MP4, WebM, and OGG.</p>
<p>For audio, the following file types are supported by most web
browsers, MP3, WAV, and OGG.</p>
<p>Let's examine how to use the video tag.</p>
<p>You start with a video tag itself.</p>
<p>Then you add a source element.</p>
<p>Note that the source element has no closing tag.</p>
<p>In the source element, you add two attributes, src, also known as
source, and type.</p>
<p>In the src attribute, you add the address of the video file.</p>
<p>In this case, it's linked to a file named dance.mp4. In the type
attribute, you add the value video forward/mp4 since the file is an MP4
file.</p>
<p>Remember I mentioned that the file types are supported by most web
browsers.</p>
<p>In case the file type is not supported, the video tag allows for
multiple sources to be specified.</p>
<p>The web browser will check through the sources and use the first one
that it supports.</p>
<p>If you prefer the web browser to use one format over another, then
make sure to specify them in the preferred order.</p>
<p>There are also attributes available for the video tag itself, which
allow you to customize the video player.</p>
<p>For example, you can specify the width and height of the player using
the width and height attributes.</p>
<p>If you want to enable player controls such as a pause and volume
button, you can add the controls attribute.</p>
<p>There are other attributes available to customize the video player
too.</p>
<p>You'll learn more about these in a later module.</p>
<p>Now let's examine how the audio tag works.</p>
<p>Similar to the video tag, you start with the opening and closing
audio tags.</p>
<p>Just like the video tag, you specify the source element with its src
and type attributes.</p>
<p>If the web browser doesn't support the file type, it can fall back on
a different type.</p>
<p>It's important to note that if you're using an MP3 file, that the
type is specified as audio forward/mpeg.</p>
<p>This is because MP3 is short for MPEG-1 Audio Layer 3. Like the video
player, you can also customize the audio player.</p>
<p>By using the controls attribute, you can enable player control such
as the pause and volume buttons.</p>
<p>Now you know how to add and customize both the video player and an
audio player.</p>
<p>Well done. You'll learn about other video and audio attributes in the
next video.</p>
<p>Embedded players</p>
<p>The Little Lemon Restaurant wants to add an about page to their
website.</p>
<p>They've asked me to set up the page and include some audio and video
in embedded players.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 84. about.html (74) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image084.png?raw=true"
  title="about.html"
  alt="about.html."
  style="width:45%;" />
</p>
<p>I've set up my basic html document structure in a file named
about.html.</p>
<p>I start off by adding the heading tag containing the text about.</p>
<p>I then add a paragraph element containing the about text provided to
me by the restaurant.</p>
<p>Next, I add the audio element after the paragraph element. inside the
audio element, I add the source element and set the src attribute to
music.ogg.</p>
<p>Then I set the type attribute to audio/ogg.</p>
<p>They also asked that the audio should loop so when the audio player
reaches the end of the audio, it should automatically go back and play
it again from the start.</p>
<p>To do this, I add the loop attribute to the audio element.</p>
<p>I also need to add controls so that the user can play and pause the
audio.</p>
<p>To do this, I add the controls attribute to the audio element. I
saved the file and opened the web page in my browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 85. menu screen: little lemon (75) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image085.png?raw=true"
  title="Menu screen: Little Lemon"
  alt="Menu screen: Little Lemon."
  style="width:45%;" />
</p>
<p>I can see that the audio is loading and is displayed in the browser
using the browsers built in audio player.</p>
<p>Pressing the play button starts the audio, and pressing pause will
pause it.</p>
<p>Everything is working as expected.</p>
<p>Now I'll add the video.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 86. video element added to menu screen (76) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image086.png?raw=true"
  title="Video element added to menu screen: Little Lemon"
  alt="Video element added to menu screen: Little Lemon."
  style="width:45%;" />
</p>
<p>I add a video element before the paragraph element.</p>
<p>Inside the video element, I add the source element and set the src
attribute to video.mp4.</p>
<p>I then set the type attribute to video/mp4.</p>
<p>I want to reserve the appropriate amount of space on the web page for
the video.</p>
<p>So, I go back to the video element and set the width attribute to
320, and the high attribute 240.</p>
<p>To provide a good user experience, I'll also enable the video
controls.</p>
<p>To do this, I add the controls attribute to the video element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 87. demo menu screen: litle lemon (77) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image087.png?raw=true"
  title="Menu screen for Little Lemon"
  alt="Menu screen for Little Lemon."
  style="width:45%;" />
</p>
<p>I saved the file again and open the page in my browser.</p>
<p>The video appears and I can click on the play button to start the
video.</p>
<p>However, the restaurant requested that the audio of the video should
be disabled by default.</p>
<p>To do this, I go back to my html and add the muted attribute to the
video element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 88. muted attribute added (77) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image088.png?raw=true"
  title="Muted attribute added to video element"
  alt="Muted attribute added to video element."
  style="width:45%;" />
</p>
<p>Save the file again and open the page.  And everything is working 
as expected.  That's great.</p>

<p>The about page is a great addition to the little Lemon website for
customers wanting to learn more about the business.</p>

<p>Using embedded players is a good way to make your web page more 
interactive.  And luckily these players can support either audio or 
video.  What's more, you can add controls to allow the user to decide 
what they want to do.  These audio and video players are sure to grab 
customer's attention when they browse the about page.</p>

<h4>Images</h4>

<p>This lesson will help refresh your knowledge of the
<strong>&lt;img&gt;</strong> tag and how you can use it to embed images
in webpages. The <strong>&lt;img&gt;</strong> tag is used to add an
image to a web page. The image’s address is specified using the src
attribute. For example, if you wanted to embed an image file named
photo.png, you can do that with the following HTML. <strong>&lt;img
src="photo.png"&gt;</strong></p>

<p>You can also specify the width and height of the image using the width 
and height attributes. For example, if the width of the photo is 640 pixels 
and the height of the photo is 480 pixels, you can use the following HTML. 
<strong>&lt;img src="photo.png" width="640" height="480"&gt;</strong></p>

<p>It is important to note that you can set the image to a larger or smaller 
size and the web browser will automatically scale the image. For example, 
you can update the previous HTML to half the width and height and the 
image would shrink by 50%.
<strong>&lt;img src="photo.png" width="320" height="240"&gt;</strong></p>

<p>One useful feature of rendering images in the web browser is that the
web browser can automatically keep the correct ratio of width to height.
So for example, if you want to scale the image by 50%, you can simply
set the width attribute and the web browser will automatically calculate
the height. <strong>&lt;img src="photo.png" width="320"&gt;</strong> But
what happens if the photo doesn’t load? Perhaps the file was
accidentally deleted, or you mistyped the file name. Luckily, the web
browser has a way to display some text when the image fails to load.
This is done using the alt attribute. For example, you can display the
text My Profile Photo using the alt attribute in the previous HTML.
<strong>&lt;img src="photo.png" width="320" alt="My Profile
Photo"&gt;</strong></p>

<p>It is important to ensure that screen reader
accessibility software can interpret images displayed in the web
browser. To support this, the &lt;img&gt; tag is combined with the
<strong>&lt;figure&gt;</strong> and <strong>&lt;figcaption&gt;</strong>
tags to provide a description of the image. The <strong>&lt;img&gt;</strong> 
tag is added inside the <strong>&lt;figure&gt;</strong> tag and the
<strong>&lt;figcaption&gt;</strong> is specified after it.</p>

<pre>  &lt;figure&gt;
    &lt;img src="photo.png" width="320" alt="My Profile Photo"&gt;
    &lt;figcaption&gt;A photo of myself on a beach in 2015&lt;/figcaption&gt;
  &lt;/figure&gt;</pre>

<p>One last thing to note is that like videos and audio, the web browser
only supports specific file types. These file types are:</p>

<ul>
  <li>.APNG – Animated Portable Network Graphics</li>
  <li>.AVIF – AV1 Image Format</li>
  <li>.GIF – Graphics Interchange Format</li>
  <li>.JPEG / .JPG – Joint Photographic Expert Group image format</li>
  <li>.PNG – Portable Network Graphics</li>
  <li>.SVG – Scalable Vector Graphics</li>
  <li>.WEBP – Web Picture Format</li>
  <li>Images will be important as you build websites and ensuring they are accessible will provide a better user experience for all visitors.</li>
</ul>

<h4>iFrames</h4>

<p>Have you ever visited a website with a map video or social media
posts contained in the webpage?</p>

<p>Now that you're learning about HTML, you may have wondered how that's
done.  Well, it's done using something called an iframe.</p>

<p>An iframe is HTML element that allows you to place or embed content
from another website into a webpage.
It's defined using the iframe HTML tag.
How it works is that it embeds another browsing instance inside the
page.</p>

<p>What this means is that it runs the embedded webpage, similar to how
a webpage runs in another tab of your web browser.
Therefore, it's running the HTML, CSS, and JavaScript of the embedded
webpage.  An iframe is often used to display adverts, but it can also be used
to embed content from another website, such as a social media post.</p>

<p>The content that's embedded is defined using the src attribute.
The value of the attribute is the URL of the content.
It's also possible to set the width and height of an iframe using the
width and height attributes.</p>

<p>While iframe is very useful, its security has been a concern since
its inception because it's vulnerable to malicious code and
injection.
As previously mentioned, a webpage can run JavaScript code.
It's important to ensure that you trust the website you're embedding
into your own.
Fortunately, there are some attributes that can be applied to limit
the behavior of the iframe.</p>

<p>The first attribute is the allow attribute, which limits which
browser features the iframe can access.
There are many possible values that can be set on the allow
attribute.
For now, let's examine how to disable camera and microphone access in
an iframe.</p>

<p>On your iframe element, you add the allow attribute and set its value
to camera none and microphone none.
Now that was easy.
The second attribute to improve security is the sandbox
attribute.
Similar to the allow attribute, there are many values that can be
set.</p>

<p>The sandbox attribute limits behavior within the iframe, such as
preventing files from being downloaded and preventing pop-up
windows.
For now, the important thing to note is that when the sandbox
attribute is used with an empty value, all sandbox restrictions will
apply to the iframe.</p>

<p>Individual sandbox restrictions can be removed by adding
attributes.  For example, if you want to allow file downloads in the iframe, you
would allow the allow downloads value.
While these restrictions help to keep your users secure, there may
still be security vulnerabilities in your web browser that the embedded
web page can exploit.
Therefore, it's always best to be cautious when using iframes and
ensure that you trust the website that you are embedding.</p>

<h4>iFrame sandbox cheat sheet</h4>

<p>The <strong>&lt;iframe&gt;</strong> is the inline frame element that
embeds an HTML page into another page. Apart from the global attributes,
which can be a part of the <strong>iframe</strong>, major
element-specific attributes are listed below.</p>

<h3>allow</h3>

<p>It specifies what features or permissions are available to the frame,
for instance, access to the microphone, camera, other APIs and so on.
For example:</p>

<ul>
  <li><strong>allow="fullscreen”</strong> the fullscreen mode can be 
    activated</li>
  <li><strong>allow=“geolocation”</strong> lets you access the user’s location</li>
  <li>To specify more than one feature, a semicolon-separator should be used between 
    features. For example, the following would allow using the camera and the 
  microphone:</li>
  <li><strong>&lt;iframe src="https://example.com/…" allow="camera; 
    microphone"&gt; &lt;/iframe&gt;</strong></li>
</ul>

<h3>name</h3>

<p>The name for the <strong>&lt;iframe&gt;</strong>. For example:
<strong>&lt;iframe name = "My Frame" width="400"
height="300"&gt;&lt;/iframe&gt;</strong></p>

<h3>height</h3>

<p>It specifies the height of the frame. The default value is 150, in
terms of CSS pixels. width</p>

<h3>width</h3>

<p>Specifies the width of the frame, in terms of CSS pixels. The default
value is 300 pixels.</p>

<h3>referrerpolicy</h3>

<p>A referrer is the HTTP header that lets the page know who is loading
it. This attribute indicates which referrer information to send when
loading the frame resource. The common values are:</p>

<ul>
  <li><strong>no-referrer</strong> The referrer header will not be sent.</li>
  <li><strong>origin</strong> The referrer will be limited to the origin 
    of the referring page.</li>
  <li><strong>strict-origin</strong> The origin of the document is 
    sent as the referrer only when using the same protocol security level 
  (HTTPS to HTTPS).</li>
</ul>

<h3>sandbox</h3>

<p>To enforce greater security, a sandbox applies extra restrictions to
the content in the <strong>&lt;iframe&gt;</strong>. To lift particular
restrictions, an attribute value (permission token) is used. The common
permission tokens are listed below:</p>

<ul>
  <li><strong>allow-downloads</strong> Allows the user to download an item</li>
  <li><strong>allow-forms</strong> Allows the user to submit forms</li>
  <li><strong>allow-modals</strong> The resource can open modal windows</li>
  <li><strong>allow-orientation-lock</strong> Lets the resource lock the 
    screen orientation</li>
  <li><strong>allow-popups</strong> Allows popups to open</li>
  <li><strong>allow-presentation</strong> Allows a presentation session to start</li>
  <li><strong>allow-scripts</strong> Lets the resource run scripts without 
    creating popup windows</li>
</ul>

<p>Note that when the value of this attribute is empty, all restrictions
are applied. To apply more than one permission, use a space-separated
list. For example, the following would allow form submission and scripts
while keeping other restrictions active:</p>

<pre>  &lt;iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"&gt;
  &lt;/iframe&gt;</pre>

<h4>src</h4>

<p>The URL of the page to embed in the <strong>&lt;iframe&gt;</strong>.
Using the value <strong>about:blank</strong> would embed an empty
page.</p>

<h4>srcdoc</h4>

<p>Let's you specify the inline HTML to embed in the
<strong>&lt;iframe&gt;</strong>. When defined, this attribute would
override the <strong>src</strong> attribute. For instance, the following
code will display "My inline html" in the frame, instead of loading
<strong>my_iframe_src.html</strong>.</p>

<pre>  &lt;iframe src="my_iframe_src.html" srcdoc="&lt;p&gt;My inline html&lt;/p&gt;" &gt;
  &lt;/iframe&gt;</pre>

<h4>loading</h4>

<p>This attribute let's you specify if the iframe should be loaded
immediately when the web page loads (<strong>eager</strong>) or loaded
when iframe is displayed in the browser (<strong>lazy</strong>). This
allows you to defer loading iframe content if it is further down your
web page and outside of the display area when the page is initially
loaded.</p>

<pre>  &lt;iframe src="my_iframe_src.html" loading="lazy" &gt;
  &lt;/iframe&gt;</pre>

<h4>title</h4>

<p>This attribute let's you add a description to the iframe for
accessibility purposes. The value of this attribute should accurately
describe the iframe's content.</p>

<pre>  &lt;iframe src="history.html" title="An embedded document about the history of my family" &gt;
  &lt;/iframe&gt;</pre>

<h4>iFrame as a picture</h4>

<p>The Little Lemon restaurant has partnered with another restaurant for
cross promotional purposes.</p>
<p>The other restaurant wants to be able to change the images in the
campaign throughout the coming year based on their current
promotions.</p>
<p>To support this, I've been asked to setup an iFrame on the main page
of the website.</p>
<p>The other restaurants specifically asked for an iFrame to be used
because it means that they can update their promotional image on the
Little Lemon website without needing to contact me first.</p>
<p>In this section, I'm going to demonstrate how to do that.</p>
<p>I've opened the index.html in Visual Studio Code.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 89. add iframe element (84) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image089.png?raw=true"
  title="Add iFrame element"
  alt="Add iFrame element."
  style="width:45%;" />
</p>
<p>First, I add the iFrame element.</p>
<p>The other restaurant didn't provide the URL for the promotional
image.</p>
<p>For now, I'll embed a placeholder image that they did provide.</p>
<p>To do this, I add an SRC attribute to the iFrame element and set its
value to placeholder.png.</p>
<p>The image will always be 320 pixels by 128 pixels in size.</p>
<p>I'll need to set the iFrame to the same size.</p>
<p>I add the width attribute to the iFrame element and set its value to
320.</p>
<p>I then add the height attribute and set its value to 128.</p>
<p>I saved the file and open it in the web browser.</p>
<p>The image is correctly placed on the webpage.</p>
<p>When the other restaurant provides the final URL of the
advertisement, I can update the SRC attribute of the element.</p>
<p>However, the Little Lemon restaurant has expressed security concerns
about embedding content, especially now that they have online ordering
and customers interacting with your website.</p>
<p>Their concerns are valid as there are many security vulnerabilities
with embedding content from another website.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 90. iframe element attributes for security (85) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image090.png?raw=true"
  title="iFrame element attributes for security"
  alt="iFrame element attributes for security."
  style="width:45%;" />
</p>
<p>To address these concerns, I've decided to sandbox and limit the
capabilities of the iFrame element.</p>
<p>I opened my index.html file again.</p>
<p>I then add the sandbox attribute to the iFrame element.</p>
<p>This will prevent any JavaScript files running within the iFrame and
restrict many browser capabilities within the iFrame context, such as
submitting forms and allowing pop-up windows.</p>
<p>Next, I'll allow attribute.</p>
<p>The allow attribute accepts multiple values and the values are
separated by semi-colons.</p>
<p>I want to disable several browser features for the iFrame.</p>
<p>These include payment, microphone, and camera access. In the allow
attribute, I first add the word payment, followed by a space character
then a single quote, the word none, and another single quote to disabled
payments.</p>
<p>I then add a semicolon.</p>
<p>Next, I add the word camera, and again a space followed by the word
none in single quotes.</p>
<p>This will disable camera axis, then add another semicolon.</p>
<p>Finally, I add the word microphone, and again add a space followed by
the word none in single quotes.</p>
<p>This will disable microphone access. I save the file and open it in
the web browser. Great, the iFrame still works and it's now more
secure.</p>
<p>The iFrame I created is now secure things.</p>
<p>The restrictions I've placed on it.</p>
<p>First, I added the sandbox attribute to restrict certain browser
capabilities and then I use the allow attribute to disable some
potentially unsecured browser features.</p>
<p>Now that they know it's secure, the other restaurant is going to
implement the same code on their website.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 91. blog menu for little lemon restaurant (86) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image091.png?raw=true"
  title="Menu blog for little lemon restaurant"
  alt="Menu blog for little lemon restaurant."
  style="width:45%;" />
</p>
<p>Hopefully this will lead to a lot more business for both
restaurants.</p>
<p>The canvas element</p>
<p>You've most likely played a video game or watched an animation in
your web browser before.</p>
<p>Perhaps you've wondered how it works.</p>
<p>Well in this section you'll be introduced to the basics of graphics
programming in the web browser.</p>
<p>There are many authoring tools available to produce animated and
video game content for the web browser.</p>
<p>But all of these are underpinned by one of four technologies;</p>

<ul>
  <li>GIF,</li>
  <li>WebP,</li>
  <li>2D canvas, and</li>
  <li>WebGL.</li>
</ul>

<p>The graphics interchange format or GIF along with the Web P image
format are used for animated images.</p>
<p>An image using this format has no interactivity, but it's popular for
embedding animated content and for building two D video games and
animations.</p>
<p>The two D canvas allows two D graphics to be drawn in the web
browser.</p>
<p>It's popular for building two D video games and animations.</p>
<p>The logic and behavior of an animation or video game is defined using
javascript.</p>
<p>But what about three D graphics? Web G L is a popular technology for
building two D and three D animations and advanced graphics.</p>
<p>The benefit of WebGL is that a dedicated chip in your device called a
graphics processing unit? Or GPU does the calculations when graphics are
rendered to the screen.</p>
<p>This allows for complex calculations such as lighting simulation and
rendering massive three D worlds.</p>
<p>It is important to note that while WebGL will always use the GPU,
it's not guaranteed that the two D canvas will use the GPU.</p>
<p>This will depend on the web browser implementation.</p>
<p>WebGL is a complex technology and requires a lot of background
information so for now let's focus on the canvas element.</p>
<p>Let's examine how to animate some simple graphics.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 92. index.html - set width and height (87) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image092.png?raw=true"
  title="Index.html - set canvas width and height"
  alt="Index.html - set canvas width and height."
  style="width:45%;" />
</p>
<p>Using the 2D canvas. Let's animate a bouncing ball. I've opened 
visual studio code and set up two files index dot html and animation 
dot Js inside index dot html.  Adding the canvas html element.</p>

<p>Set its width attribute to 640, and its height attribute to 480.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 93. animate.js to animate a bouncing ball (88) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image093.png?raw=true"
  title="animate.js to animate a bouncing ball"
  alt="animate.js to animate a bouncing ball."
  style="width:45%;" />
</p>
<p>I have also set its ID attribute to my underscore canvas so that I
can access the element in my javascript code after the canvas element I
have a script element with its SRC attribute set to animation dot Js I
now open animation dot Js at the beginning of the file I look up the
canvas element using the document dot get element by ID function and
pass in my underscore canvas at the parameter.</p>

<p>The result is stored in a variable named canvas.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 94. variable named canvas (88) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image094.png?raw=true"
  title="Variable named canvas"
  alt="Variable named canvas."
  style="width:45%;" />
</p>
<p>Next, I look up the two D canvas context using canvas dot get context
and pass in the parameter to D.</p>
<p>The result is stored in a variable named context below this I define
some variables to track the speed, position, movement and radius of the
bouncing ball.</p>
<p>Next, I define a function called move ball. It is responsible for
moving the ball across the screen and changing its direction once it
reaches the left or right side of the screen.</p>
<p>After that I define a function called draw ball.</p>
<p>The function clears the canvas area using context dot clear wreck it
then draws the ball in its current position using the context dot begin
path, context dot arc and context dot fill functions.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 95. define animate function (89) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image095.png?raw=true"
  title="Define animate function"
  alt="Define animate function."
  style="width:45%;" />
</p>
<p>Finally, I define an animate function which calls the move ball and
draw ball functions after doing this, it then calls window dot request
animation frame to schedule the animate function to be called again at
the end of the file I call window dot request animation frame to start
the animate function being called.</p>
<p>Using a small amount of javascript code, I've animated a bouncing
ball.</p>
<p>This is a straightforward example of the capabilities of the two D
canvas.</p>
<p>There are many more possibilities to develop animations and video
games and there are also many libraries available to simplify
development.</p>
<p>These are linked in the additional resources Reading.</p>

<h3>Module summary: HTML deep dive</h3>

<p>You've reached the end of this module on HTML.</p>
<p>It's now time to review what you've learned in these lessons.</p>
<p>You began this module by exploring the question, how is HTML and CSS
used in the real-world?</p>
<p>You learned about the role of HTML and CSS developer.</p>
<p>What entry-level jobs and career paths are available to you, and what
a day in the life of a developer looks like and who you'd work with as a
HTML and CSS developer.</p>
<p>You also learned what the relationship is between HTML and CSS.</p>
<p>How HTML and CSS are continually improving, and how HTML and CSS
usage has gone beyond desktop PCs.</p>
<p>Next, you learned about semantic and metatags.</p>
<p>You should now be able to recognize how and why semantic tags are
used.</p>
<p>Use basic semantic tags and have an appreciation of the structured
approach needed to produce a well-formed webpage.</p>
<p>You also explored the topics of metadata and metatags using
templates, layout design, and social media cards.</p>
<p>Following your exploration of these topics, you should now be able to
explain why metadata and metadata tags are used at basic Open Graph
Protocol Meta tags to HTML documents and demonstrate the application of
the OG protocol when setting up a social media card.</p>
<p>You then moved on to study and forms.</p>
<p>This topic included learning about forms and validation, client-side
validation, form submission, radio buttons and browser differences.</p>
<p>You learned how to create and test a basic form, identify the
potential of HTML validation types, and explain how form send data to
the web server.</p>
<p>In addition, you should now be able to demonstrate the use of radio
buttons and explain how to ensure that forms display consistently across
browsers.</p>
<p>Following this introduction to user input and forums, you then
covered media elements.</p>
<p>This topic included video and audio, embedded players, iframes, and
the canvas element.</p>
<p>You should now be able to embed video and audio in a webpage.</p>
<p>Create a video and audio player that can rate the media played.</p>
<p>Recognize the purpose of the iframe tag, and learn to identify and
mitigate security risks when using the iframe tag and identify the uses
of the canvas element.</p>
<p>You should now be familiar with the basics of HTML.</p>
<p>You now know more about the role of HTML and CSS developer and the
things you'll be doing when working as one.</p>
<p>Like using semantic tags to construct a well-formed webpage, or how
to use inputs and forums or embed videos and audio. Well done.</p>
<p>You're making good progress on your learning journey.</p>

<h3>Additional resources</h3>

<p>The following resources will be helpful as additional references in
dealing with different concepts related to the topics you have covered
in this module. </p>

<ul>
  <li><a href="https://html.com/media/" target="_blank" rel="noopener noreferrer">HTML Media</a></li>
  <li><a href="https://studio.support.brightcove.com/publish/choosing-correct-embed-code.html" 
    target="_blank" rel="noopener noreferrer">Choosing the Correct Embed Code</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML" 
    target="_blank" rel="noopener noreferrer">Images in HTML</a></li>
  <li><a href="https://www.educba.com/iframes-in-html/" target="_blank" rel="noopener noreferrer">
    iFrames in HTML</a></li>
  <li><a href="https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php" target="_blank" rel="noopener noreferrer">
    HTML Canvas</a></li>
  <li><a href="https://html.spec.whatwg.org/multipage/media.html" 
    target="_blank" rel="noopener noreferrer">HTML Media Elements</a></li>
</ul>

<h3>CSS web layout</h3>

<p>CSS or cascading style sheets is a set of rules that enhance the
appearance of web pages.</p>
<p>In the early years of the internet browsers adopted CSS because it
presented an opportunity for better visual designs and more
creativity</p>
<p>As browsers continue to develop and grow beyond traditional devices.
C. S. S. S capabilities developed in parallel.</p>
<p>This development includes the introduction of responsive design in
CSS and has further grown from there with layout options such as flex
boxes, grids and boxes.</p>
<p>And you could argue that layout is one of the most important
components of designing a good web page because layouts help divide a
page into different sections, thus making the page more presentable.</p>
<p>So, let's learn more about CSS web layouts.</p>
<p>CSS can be used to enhance a web page by modifying fonts, colors,
layout, size and other style formatting options that make the web page
more presentable.</p>
<p>The browser window that is visible to the user on the screen is
called the view ports.</p>
<p>In essence, the idea behind any CSS web layout is to create an
optimally designed web page that has a good view ports at any given
point.</p>
<p>In other words, CSS layouts are all about how the content of your web
pages organized when it comes to creating layouts.</p>
<p>Using CSS? An important property is the display property.</p>
<p>What does it do you ask?</p>
<p>The display property specifies the type of box that you want to use
for a given html element.</p>
<p>You might remember from an earlier course that the display property
determines if a rendered box in line or block box models, allocate
rectangles or boxes to html elements.</p>
<p>So, CSS rules can be applied, for example, the relative CSS rule for
a html element with an I. D. Named sample would contain display property
with a block value.</p>
<p>The code changes the property of the display box to a block type
layout created using the block type are good but evolving requirements
led to the development of CSS web layouts such as flex box and grid,
which helped create rules for multiple elements.</p>
<p>They added more flexibility and dimensionality with better options
for fine tuning specific sections of a web page.</p>
<p>The main difference between the two is that flex box is one
dimensional while grid as the word implies is two dimensional.</p>
<p>You will examine these in more detail over the course of the
module.</p>
<p>But for now, let's just do a brief overview.</p>
<p>Flex box is short for flexible box model and it was introduced before
the grid layout.</p>
<p>For example, the flex box property with an I. D.</p>
<p>Named sample contains the display property with flex as its value,
flex box adds responsiveness to CSS with float elements and positioning
one dimensional refers to the fact that a given flex box container will
arrange items in either a column or a row along its axis.</p>
<p>The flex box container applied over an element can flex to shrink or
expand.</p>
<p>Thus, resulting in a flexible responsive design.</p>
<p>CSS grid is similar to the flex box except it creates a
two-dimensional grid along both the row and column axes.</p>
<p>For example, the grid rules for the sample I. D. can be added after
adding the display property with the grid as its value while the grid
increases dimensionality and helps to create an advanced layout with
relative ease.</p>
<p>It can also lead to increased complications later.</p>
<p>If the element rules are not systematically defined, there is no
strict rule on choosing which layout to use, but in general flex boxes
are more suitable when you want to create flexible elements in smaller
spaces while grids are more suitable to large scale layouts.</p>
<p>A separate explanation of each type of layout has been given in this
module, but in practice, you'll likely encounter the use of more than
one layout in rendering a single page.</p>
<p>The rules for these layouts and CSS are standardized but that doesn't
mean you are limited when it comes to creativity, aesthetics or
optimization.</p>
<p>When designing a web page, you will learn more about how to use these
layouts during the course.</p>

<h4>Understanding flexbox</h4>

<p>Much like the div and box container that you can create using HTML,
flexbox is a type of container. Flexbox can overcome the limitations
caused by containers such as block and inline because it does a better
job of scaling over larger web pages and also provides more dynamic
control of the containers. This is because it can grow, shrink and align
the items inside it which give better control to the programmer over the
contents and styling of the items inside the container. </p>
<p>Before learning about the common layouts built using the flexbox, it
is important to understand the properties inside it and how flexbox
works. Let’s examine some of the important characteristics of flexboxes
and the properties that can be used to configure them.</p>
<p>Flexbox is single-dimensional, which means you can align it either
along a row or a column and it is set to row alignment by default. There
are two axes, the main and cross-axis, much like the x and y-axis used
in coordinate geometry. When aligned along the row, the horizontal axis
is called the main axis and the vertical axis is called the cross axis.
For the items present inside the flexbox container, the placement starts
from the top-left corner moving along the main or horizontal axis. When
the row is filled, the items continue to the next row. Note that with
the help of a property called flex-direction, you can instead flip the
main axis to run vertically and the cross axis will then be horizontal.
In such a case, the items will start from top left and move down along
the vertical main axis. The properties you choose will help better
control alignment, spacing, direction and eventually styling of the
container and items present inside it.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 96. diagram of a flexbox and its properties (94) ~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image096.png?raw=true"
  title="Diagram of a flexbox and all its properties"
  alt="Diagram of a flexbox and all its properties."
  style="width:35%" />
</p>

<h5>Image source: <a
href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology">https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology</a></h5>

<p>Let’s now examine some of the important properties that will allow you to configure a flexbox.</p>

<h4>Flexbox properties</h4>

<h4>Original HTML code:</h4>

<pre>  &lt;body&gt;
    &lt;div class="flex-container"&gt;
      &lt;div class="box box1"&gt;  One..&lt;/div&gt;
      &lt;div class="box box2"&gt;  Two..&lt;/div&gt;
      &lt;div class="box box3"&gt;  Three..&lt;/div&gt;
      &lt;div class="box box4"&gt;  Four..&lt;/div&gt;
      &lt;div class="box box5"&gt;  Five..&lt;/div&gt;
      &lt;div class="box box6"&gt;  Six..&lt;/div&gt;
      &lt;div class="box box7"&gt;  Seven..&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;</pre>

<h4>Original CSS file: </h4>

<pre>  .box{
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 97. seven div on seven rows (95) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image097.png?raw=true"
  title="Seven div containers on seven rows"
  alt="Seven div containers on seven rows."
  style="width:25%;" />
</p>
<p>There are seven div containers inside the HTML file.</p>
<p>The corresponding CSS file contains rules for all seven div tags that
have the box class. Note how two class names are given for each of the
tags, one that is common among all classes and another independent of
it. The style is applied to all the containers.</p>
<p>Now let’s add properties to the flex container by converting it into
flex.</p>

<h4>display: flex;</h4>

<pre>  .flex-container{
    display: flex;
  }</pre>

<p>The output is now seven flex containers that run from left to right
starting in the top left corner.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 98. output for css with aligned number boxes (96) ~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image098.png"
  title="Output for CSS Code with aligned number boxes"
  alt="Output for CSS Code with aligned number boxes."
  style="width:35%;" />
</p>
<h4>Alignment properties</h4>

<p>Let’s examine a few alignment properties inside the flex. There are
four main properties used to align a flex container and items present
inside it:</p>

<ul>
  <li>justify-content. For item alignment on main axis.</li>
  <li>align-items. For item alignment on cross axis.</li>
  <li>align-self. For unique flex items on cross axis.</li>
  <li>align-content. Used for packing flex lines and control over space.</li>
  <li>Of these, justify-content and align-items are frequently used for the respective two axes.</li>
</ul>

<p>Let’s first examine the use of justify-content which has a value of ‘left’ by default.</p>

<h4>justify-content</h4>

<h4>CSS:</h4>

<pre>  .flex-container{
    display: flex;
    justify-content: center
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~ 99. the output for css code with justification in the center (96) ~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image099.png"
  title="The output for CSS Code with justification in the center"
  alt="The output for CSS Code with justification in the center."
  style="width:35%;" />
</p>

<h4>flex-wrap:</h4>

<p>The default for this property is ‘nowrap’ which means the items will
span the entire width of the axis.</p>

<pre>  .flex-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~ 100. seven number boxes centered on three rows (97) ~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image100.png?raw=true"
  title="Output for CSS code with wrapped number boxes justified in the center"
  alt="Output for CSS code with wrapped number boxes justified in the center."
  style="width:20%;" />
</p>

<p>The items will now be wrapped to the size of the available viewport.</p>

<h4>flex-direction:</h4>

<p>This property is used to set the main axis, which is a ‘row’ by
default. It basically means you are changing your ‘main’ axis from
horizontal rows to vertical columns.</p>

<h5>CSS Code:</h5>

<pre>  .flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~ 101. display seven listed number boxes as a flex (98) ~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image101.png?raw=true"
  title="Display seven listed number boxes as a flex"
  alt="Display seven listed number boxes as a flex."
  style="width:25%" />
</p>

<p>The output looks like the original output; however, it is now
actually a flex.</p>
<p>Now let’s align the items again and examine a couple of the other
properties mentioned earlier.</p>

<h4>align-items:</h4>

<p>The alignment on the cross-axis is done with the help of this
property. Let’s change the value for it to ‘flex-end’.</p>

<h4>CSS Code:</h4>

<pre>  .flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~ 102. right-centered number boxes with flex end aligning method (99) ~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image102.png?raw=true"
  title="Right-centered number boxes with flex end aligning method"
  alt="Right-centered number boxes with flex end aligning method."
  style="width:15%;" />
</p>

<p>The term ‘end’ refers to the right side of the page as the left side is seen as the beginning.</p>

<h4>align-self:</h4>

<p>This property can be used on individual items inside the flex.</p>

<pre>  .flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
  }
  .box3{
    background-color: blanchedalmond;
    align-self: center;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~ 103. output display seven box align and color change (100) ~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image103.png?raw=true"
  title="Display 7 box change in color and alignment"
  alt="Display 7 box change in color and alignment."
  style="width:15%;" />
</p>

<p>Here the color and alignment of the third box have been changed and it overrides the properties 
set using align-items.</p>

<h4>gap:</h4>

<p>gap property can be used to create space between the items along the
main axis. You can also individually configure the gaps in rows and
columns using row-gap and column-gap properties.</p>

<h4>CSS Code:</h4>

<pre>  .flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
    gap:10px;
  }
  .box3{
    background-color: blanchedalmond;
    align-self: center;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~ 104. display of items with different spacing (101) ~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image104.png?raw=true"
  title="Display of items with different spacing"
  alt="Display of items with different spacing."
  style="width:15%;" />
</p>

<p>There is a clear change in spacing between the items.</p>
<p>The final set of properties are flex-grow, flex-shrink and
flex-basis. Together these determine how the flex takes up space, grows
or shrinks according to the space available.</p>
<p>These are the sub-properties of a property called flex. Together all
three properties can also be given values with the help of something
called the shorthand notation in CSS. Shorthand notation helps you make
your code compact and also easy to write and follow. The values left
empty in shorthand notation are given their default values.</p>

<h4>For example:</h4>

<pre>  .flex-container{
    flex: 0 1 auto;
  }</pre>

<p>Here for the flex-container class, there is a set rule for the flex
property. The values correspond to the three properties, namely the
flex-grow set to 0, flex-shrink to 1 and flex-basis to auto. The
flex-basis sets the initial size of the container. and together they
define the rigidity or flexibility and dynamism you want to add to the
flexbox.</p>
<p>To demonstrate the effect of this, the code has to be modified
slightly by removing the flex-direction value set to ‘column’. This will
change it to default ‘row’ and the output will again be centrally
aligned and horizontal best-distributed between two rows.</p>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 105. seven box example (100) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image105.png?raw=true"
  title="List of items as default raw modified by removing the flex direction"
  alt="List of items as default raw modified by removing the flex direction."
  style="width:35%;" />
</p>

<p>The rest of the remaining code is unchanged. However, the output will
change if the code is modified with the addition of the flex property
inside the flex item box3 class.</p>

<h4>CSS Code:</h4>

<pre>  .box3{
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~ 106. different spacing of items in row display (101) ~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image106.png?raw=true"
  title="Different spacing of items in row display"
  alt="Different spacing of items in row display."
  style="width:35%;" />
</p>

<p>The third box now takes up the entire free space available because
flex-growth’s value has been set to 1. So if we
have <strong>flex-grow</strong> set to 1, the children will all set to
equal size. And if one of the children has a value of 1.5, that child
would take up more space as compared to the others.</p>
<p>It’s important to understand how the changes in the main and cross
axis affect the way you imagine and manipulate the flexbox. Once you’ve
had more practice you’ll be more comfortable with the use of these
properties, and it will become easier to use flexboxes and understand
the flow and alignment of items inside the flexbox.</p>
<p>CSS units of measurement</p>
<p>A web page, as you know it, is two-dimensional. In other words, it
has width and height. There are a number of other ways you can express
this such as vertical and horizontal, length and breadth, x and y axis
and so on. Another property of a web page is its size which can either
be static or dynamic. When you’ve encountered enough CSS code, you will
note a number of different ways in which the values for the same
property can be declared using different units of measurement. Most of
these units of measurement are used to account for the dynamism and
dimensionality of a web page. </p>
<p>Let’s examine the most widely used units of measurement. They can
broadly be categorized as Absolute and Relative units.</p>

<h4>Absolute units</h4>

<p>Absolute units are constant across different devices and have a fixed
size. They are useful for activities like printing a page. They are not
so suitable when it comes to the wide variety of devices in use today
that have different viewport sizes. Because of this, absolute units are
used when the size of the web page is known and will remain
constant. </p>
<p>The table for absolute units can be seen below:</p>

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 39%" />
<col style="width: 46%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Unit</strong></th>
<th><strong>Name</strong></th>
<th><strong>Comparison</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Q</td>
<td>Quarter-millimeters</td>
<td>1Q = 1/40th of 1cm</td>
</tr>
<tr class="even">
<td>mm</td>
<td>Millimeters</td>
<td>1mm = 1/10th of 1cm</td>
</tr>
<tr class="odd">
<td>cm</td>
<td>Centimeters</td>
<td>1cm = 37.8px = 25.2/64in</td>
</tr>
<tr class="even">
<td>in</td>
<td>Inches</td>
<td>1in = 2.54cm = 96px</td>
</tr>
<tr class="odd">
<td>pc</td>
<td>Picas</td>
<td>1pc = 1/6th of 1in</td>
</tr>
<tr class="even">
<td>pt</td>
<td>Points</td>
<td>1pt = 1/72nd of 1in</td>
</tr>
<tr class="odd">
<td>px</td>
<td>Pixels</td>
<td>1px = 1/96th of 1in</td>
</tr>
</tbody>
</table>
<p>Of these, the pixels and centimeters are most frequently used for
defining properties. </p>
<h4 id="relative-values">Relative values</h4>
<p>When you create a web page, you will almost never have only a single
element present inside it. Even in case of containers such as flexboxes
and grids, there’s usually more than one element present that rules are
applied to. Relative values are defined ‘in relation’ to the other
elements present inside the parent element. Additionally, they are
defined ‘in relation’ to the viewport or the size of the visible web
page. Given the dynamic nature of web pages today and the variable size
of devices in use, relative units are the go-to option in many cases.
Below is a list of some of the important relative units. </p>
<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 87%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Unit</strong></th>
<th><strong>Description and relativity</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>em</strong></td>
<td>Font size of the parent where present.</td>
</tr>
<tr class="even">
<td><strong>ex</strong></td>
<td>x-co-ordinate or height of the font element.</td>
</tr>
<tr class="odd">
<td><strong>ch</strong></td>
<td>Width of the font character.</td>
</tr>
<tr class="even">
<td><strong>rem</strong></td>
<td>Font size of the root element.</td>
</tr>
<tr class="odd">
<td><strong>lh</strong></td>
<td>Value computed for line height of parent element. </td>
</tr>
<tr class="even">
<td><strong>rlh</strong></td>
<td>Value computed for line height of root element which is
&lt;html&gt;. </td>
</tr>
<tr class="odd">
<td><strong>vw</strong></td>
<td>1% of the viewport width.</td>
</tr>
<tr class="even">
<td><strong>vh</strong></td>
<td>1% of the viewport height.</td>
</tr>
<tr class="odd">
<td><strong>vmin</strong></td>
<td>1% of the smaller dimension of viewport.</td>
</tr>
<tr class="even">
<td><strong>vmax</strong></td>
<td>1% of the larger dimension of viewport.</td>
</tr>
<tr class="odd">
<td><strong>%</strong></td>
<td>Denotes a percentage value in relation to its parent element. </td>
</tr>
</tbody>
</table>
<p>Many of these units are used in terms of the relative size of fonts.
Some units are more suitable depending on the relative context. Like
when the dimensions of the viewport are important, it's more appropriate
to use <strong>vw</strong> and <strong>vh</strong>. In a broader
context, the relative units you will see most frequently used are
percentage, <strong>em</strong>, <strong>vh</strong>,
<strong>vw</strong> and <strong>rem</strong>. </p>
<p>Much like the absolute and relative units discussed above, certain
properties have their own set of acceptable values that need to be taken
into account. For example, color-based properties such as
<strong>backgroundcolor</strong> will have values such as hexadecimal,
<strong>rgb()</strong>, <strong>rgba()</strong>, <strong>hsl()</strong>,
<strong>hsla()</strong> and so on. Each property should be explored on
an individual basis and practicing with the code will help you to decide
which of these units of measurement are the most suitable choice. </p>
<p>Basic flexbox</p>
<p>At this stage, you should be familiar with different layouts and grid
structures, and you should be ready to start using flexbox.</p>
<p>Let's explore a few practical examples of how you can use it. In the
next few minutes, you will explore what the three most common uses of
flexbox are.</p>
<p>As mentioned earlier, flexboxes are more suitable to use for simple
layout or designing simple elements in a page.</p>
<p>In line with that idea, let's explore a few commonly used design
elements that you see on a page.</p>
<p>You will discover simple ways in which you can utilize flexboxes for
binding elements together or creating an easy layout.</p>
<p>Let's explore the three most common uses of flexbox is in CSS.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 107. search bar and flex (105) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image107.png?raw=true"
  title="Search bar and flexbox"
  alt="Search bar and flexbox."
  style="width:25%;" />
</p>

<p>The first application of flexbox that you will cover that is commonly used is a search bar.</p>
<p>You can use flex in search bars because it ties up all the elements, such as the small Search icon, 
the search input area, and the Submit button.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 108. nav bar example (105) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image108.png?raw=true"
  title="Nav bar example"
  alt="Nav bar example."
  style="width:45%;" />
</p>

<p>Next, you can create the navigation bar using flex, which consists of
several different layouts, and it makes your navigation bar highly
responsive on different devices.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 109. four images, realign (105) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image109.png?raw=true"
  title="4 images, noodles for realignment"
  alt="4 images, noodles for realignment."
  style="width:25%;" />
</p>

<p>Finally, another type of flexbox that is commonly used is an image gallery.</p>

<p>Flexes helpful here is it can realign itself as you change the size
of the window. In the next few minutes, you will discover how to create
these flexboxes to ensure a simple layout.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 110. html input searchbox function (106) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image110.png?raw=true"
  title="HTML input searchBox function in div tag"
  alt="HTML input searchBox function in div tag."
  style="width:45%;" />
</p>

<p>In the first example of a flexbox file, I will create a search bar, I
add a reference to the CSS file in the head section of the HTML
page.</p>
<p>After that, I add content inside the body section of our HTML
code.</p>
<p>I first create a container class with a div tag. Inside this
container, I have three different elements, which are the search icon,
the search box where I typed my search, and finally the Submit
button.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 111. css container property and settings (107) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image111.png?raw=true"
  title="CSS Container property and settings"
  alt="CSS Container property and settings."
  style="width:25%;" />
</p>

<p>In the CSS code, I first write rules for the container, then for the search icon, the search box, and
finally for the button.</p>
<p>Most of the properties defined here are settings for the alignment of the selectors.</p>
<p>There are just a few important things to take note of.</p>
<p>The display property I use is inline flex instead of flex, which
makes the flex container behave like an inline element.</p>
<p>Another property to take note of is the overflow.</p>
<p>The overflow property clips the overflowing content, which in this
case will be the text I enter in the search query.</p>
<p>Then I add the properties for the icon and the search box.</p>
<p>Finally, I add the properties for the Search button.</p>
<p>Let's remove this CSS code momentarily to check how the output
displays with aided.</p>
<p>Although all the elements are there the page is standard and
playing,</p>
<p>I add the code back to the CSS file and check the output one more
time.</p>
<p>Now the search box displays the properties that I defined in my CSS
file.</p>
<p>Notice that when I change the size of the page, the search area
doesn't change.</p>
<p>Another place where flexbox is used quite frequently is in navigation
menus.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 112. unordered list w/4 items (108) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image112.png?raw=true"
  title="Unordered 4 item list with class='container'"
  alt="Unordered 4 item list with class='container'."
  style="width:35%;" />
</p>

<p>In this case, I created an unordered list that consists of four
items.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 113. star (*) example in css (108) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image113.png?raw=true"
  title="Star (*) example in css flexbox"
  alt="Star (*) example in css flexbox."
  style="width:35%" />
</p>

<p>Notice that in my CSS code I use something called a star or universal
selector.</p>
<p>The universal selector applies the rules to every element in my CSS
code.</p>
<p>I use this to declare any formatting that is browser specific.</p>
<p>Now I define the rules for the container.</p>
<p>It's important to notice that I use the flex-flow, which is a
shorthand property specifying the direction of the flex container and
its behavior for wrapping.</p>
<p>Another important property is justify content, which aligns the
flexible containers items along the main axis.</p>
<p>In this case, I have set it to stretch.</p>
<p>Since the individual elements are part of the container, I applied
the rules both to the container, onto the elements which are the list
items, anchor, tag, and so on.</p>
<p>It's also important to notice that the page is responsive.</p>
<p>As the size of the browser window gets smaller, the items stacked on
top of each other, and if I expand the window, it changes to a standard
horizontal navigation menu.</p>
<p>One final flexbox example that I will demonstrate is a responsive
image gallery.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 114. body with div class='container' and images (109) ~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image114.png?raw=true"
  title="body with div class='container' and images"
  alt="body with div class='container' and images."
  style="width:45%" />
</p>

<p>All the elements for the gallery are in the body of the HTML
file.</p>
<p>There is a div element with a class container that consists of six
images that are saved inside the project folder.</p>
<p>Now, let's open the CSS file.</p>
<p>First, I remove all browser-specific settings that may be there by
using the star selector just like I did earlier. I set the value of both
the margin and the padding to zero.</p>
<p>I then reset the basic alignment options for the images by setting
the border to zero.</p>
<p>Next, let's focus on the container.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 115. flex-wrap - force 1 line or wrap multiple? (110) ~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image115.png?raw=true"
  title="Flex-wrap: wrap - with justify-content: space-between, with 5px padding"
  alt="Flex-wrap: wrap - with justify-content: space-between, with 5px padding."
  style="width:25%" />
</p>

<p>First, I set the value of display to flex, then I add the flex-wrap property which determines
whether the flex items should be forced in one line or should wrap over
multiple lines.</p>
<p>Next, I justify the content property, which aligns the flexible
container items on the horizontal main axis, I set it to space dash
between.</p>
<p>Finally, I add some padding. Let's inspect the output. The output window is 
narrow at the moment, so the six images are stacked on top of each other.
But when I expand the window, they spread out. One can notice the effect 
better in a browser, so I copy the link and paste it into my browser.</p>
<p>When I change the size of the browser window, it is clear that the
alignment of these images is responsive. These are just some of the ways in which 
you use flexboxes to provide responsiveness to websites and bind different elements 
together on web pages.</p>
<p>You should now be more familiar with some simple ways in which you
can use flexboxes to bind elements together to create an easy responsive
layout on your webpage. Good job.</p>

<h4>Flex charts</h4>

<p>So far, you've covered different ways in which a flex box can be used to add 
functionality to a web page. In this section (flex charts), you're going to explore 
the versatility of flex boxes even further by using them to create bar charts.</p>
<p>Bar charts are a common way of visualizing data used in statistics.
It's easier to compare and understand data when viewing it in the
form of rectangular bars that have heights in proportion to the values
they represent. The different bars stacked alongside represent the classifying
criteria.</p>
<p>There are sophisticated data visualization tools available today that
support web pages but it's fairly straightforward to integrate data
using CSS. CSS provides a straightforward way to do this by using flex
box, with flex boxes, you can generate both vertical and horizontal bar
charts. These bar charts are called flex charts.</p>
<p>The most important property when using flex is the flex property that
in turn has the following three sub properties.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 116. flex-grow, flex-shrink, flex-basis (111) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image116.png?raw=true"
  title="flex-grow, flex-shrink, flex-basis"
  alt="flex-grow, flex-shrink, flex-basis."
  style="width:25%;" />
</p>

<p>Flex grow, which specifies how much the item will grow compared to
other flexible items, flex shrink, which specifies how much the item
will shrink compared to other flexible items.</p>
<p>And flex basis, which specifies the initial length of the flexible
item.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 117. flex-property default flex: 0,1 auto (111) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image117.png?raw=true"
  title="flex-property default flex: 0,1 auto"
  alt="flex-property default flex: 0,1 auto."
  style="width:35%;" />
</p>

<p>Flex property can be declared with something called a shorthand
notation such as flex 01 auto, where 01 and auto are the default values
for the flex grow, flex shrink and flex basis property.</p>
<p>Let me demonstrate each of these types with the help of an example,
clients visiting the little Lemon restaurant were given a survey to pick
their preferred dish.</p>
<p>The management of little Lemon decided to publish the results on
their website to draw attention to their most popular dishes.</p>
<p>I've been asked to write code to make this possible.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 118. flexcharts.css and .html (112) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image118.png?raw=true"
  title="Flexcharts.html and .css"
  alt="Flexcharts.html and .css."
  style="width:35%;" />
</p>

<p>I've set up my basic html document structure in a file named flex
charts dot html.</p>
<p>I begin by creating a class called row by writing dot row and
pressing enter to get the div tag.</p>
<p>This will be a horizontal group across the page that will display the
result.</p>
<p>I create two tags inside the div tag, one for the label and another
for displaying the results of the survey.</p>
<p>To add the label, I type dot label on a new line and press enter, I
then add the name of the label preferred dishes.</p>
<p>Next, I create another class called container by typing dot container
and then I press enter.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 119. new class .dish (113) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image119.png?raw=true"
  title="New class .dish"
  alt="New class .dish."
  style="width:45%;" />
</p>

<p>Inside the container I create a class called dish by typing dot dish
and pressing enter as there are three dishes in the popular list, I copy
and paste this item twice.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 120. dish pasta, pizza and burrito (114) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image120.png?raw=true"
  title="dish pasta, pizza, and burrito"
  alt="dish pasta, pizza, and burrito."
  style="width:45%;" />
</p>

<p>To distinguish between the dishes, I add a class name for each of the
items after the word dish I name item one pasta, item two, pizza and
item three burrito.</p>
<p>I now have to add styling properties as I am using flex basis.</p>
<p>In item one I add flex basis as the property to specify the initial
length of the item.</p>
<p>I add the percentage to indicate the length of this flex item.</p>
<p>I do the same for the other two items as the total here should be
100, I adjust the percentages of item two and three.</p>
<p>Finally, I add the respective labels for each dish.</p>
<p>To do this, I add the percentage between the angle brackets at the
end of each item.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 121. flexcharts.css and .html (115) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image121.png"
  title="flexcharts.css and flexcharts.html"
  alt="flexcharts.css and flexcharts.html."
  style="width:45%;" />
</p>

<p>Now that my code is created, I move to CSS by clicking on the flex
charts dot CSS file at the top of my screen and checking that it's
referencing the correct file.</p>
<p>I have stacked the CSS file next to the html file for better
understanding.</p>
<p>I start with the outer most container which is row by typing dot row
and then pressing enter within row.</p>
<p>I add the display property to which I add flex, I press enter to move
to a new line.</p>
<p>I add another property called align items to which I add stretch.</p>
<p>There are two main axes in flex, the main axis that runs horizontally
across the page and the cross axis that runs vertically align items,
controls the alignment along the cross axis.</p>
<p>Next, I address the label div tag which consists of the flex property
and the font family flex as you previously learned is shorthand for flex
grow flex shrink.</p>
<p>And flex basis since this label is a part of the row, I add dot row
in front of dot label.</p>
<p>Now I add the container that will consist of all the results of the
survey, I defined only the flex code value here, just like align
items.</p>
<p>The justify content property defines how the browser distributes
across the main access of the flex container.</p>
<p>So here I set the alignment to flex start which is the left-hand
corner of my web page.</p>
<p>Next, I define the property for the dish selector.</p>
<p>It is the same as for the container above but here the alignments are
centered.</p>
<p>This will become clear once you see the results, I have one more set
of selectors to define.</p>
<p>But first let me display the output. &gt;&gt; To do this, I switch to
my HTML file and click on the display icon in the top right corner of my
screen.</p>
<p>The output preferred dishes and the percentage is 35, 50 and 15
appear on my screen, to improve the visuals of my chart and make it
easier to interpret.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 122. flexchart.html (116) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image122.png"
  title="Flexchart.html"
  alt="Flexchart.html"
  style="width:45%;" />
</p>

<p>I'm going to add individual colors to the chart items at the bottom
of my CSS file I press enter twice and type dot pasta.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 123. flexchart.css (117) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image123.png"
  title="Flexchart.css"
  alt="Flexchart.css."
  style="width:35%;" />
</p>

<p>I press enter and within this div class I add background color, followed by the hex code of the color I
want to use in the next line.</p>
<p>I specify the background color of pizza.</p>
<p>Lastly, I specify the background color of burrito.</p>
<p>Once again, I display the output. Now the percentages display the
background colors as indicated.</p>
<p>What's important to note here is that as you change the size of the
web page, the flex adjusts itself while the label remains unchanged.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 124. flexchart.html and flexchart.css (117) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image124.png"
  title="Both flexchart.html and flexchart.css"
  alt="Both flexchart.html and flexchart.css."
  style="width:45%;" />
</p>

<p>The next example is very similar to the one I created for the earlier
bar charts.</p>
<p>In this example, when I create horizontal objects, I first add four
containers for male and female and then I set the flex spaces for each
of them.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 125. preferred dishes 35%, 50% and 15% (118) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image125.png"
  title="Preferred dishes 35% 50% and 15%"
  alt="Preferred dishes 35% 50% and 15%"
  style="width:25%;" />
</p>

<p>If you look at my CSS code, I follow the same order.</p>
<p>First, I address the columns which is the outermost container, then
the class container.</p>
<p>After that the div class bar inside it, and finally the individual
properties that I want to define for male and female.</p>
<p>The main differences here are in terms of the line items, justify
content and flex selection that have been adjusted to accommodate the
horizontal bar charts.</p>
<p>When I display the output of this code, the male and female classes
are stacked on top of each other.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 126. barcharts2.html (118) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image126.png"
  title="barcharts2.html"
  alt="barcharts2.html."
  style="width:35%;" />
</p>

<p>What alignment to use may or may not come intuitively, but if you
look at a few more examples, it will start making sense.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 127. container contains male and female classes (118) ~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="./images/image127.png"
  title="Container contains male and female classes"
  alt="Container contains male and female classes."
  style="width:45%;" />
</p>

<p>Like in this case the container contains male and female classes that
need to be stacked on top of each other, which is why I have used flex
direction.</p>
<p>That was a lot of information about the many uses of flex boxes.</p>
<p>So, you should have a good idea of how to use them in your own coding
now.</p>
<p>The graphical representation of information or data makes it
accessible and allows you to see and understand trends and patterns.</p>
<p>In this section you've explored ways to create bar charts using flex
box.</p>
<p>CSS grids</p>
<p>CSS Grid layouts are important when it comes to designing a good
webpage.</p>
<p>This is because layouts are a way to provide visual cues for a user
by organizing relevant content to make it easier to comprehend.</p>
<p>Let's learn more about layouts.</p>
<p>When someone says the word grid, you probably think of lines that
cross each other to form squares or rectangles.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 128. grid container, rows and columns (121) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image128.png?raw=true"
  title="Grid Container, Rows and Columns"
  alt="Grid Container, Rows and Columns."
  style="width:35%;" />
</p>

<p>CSS Grids are two-dimensional design layouts that are responsive and
compatible with browser variations.</p>
<p>They are an alternative to other options such as Flexboxes and
tables, especially when you are working with larger scale layouts.</p>
<p>Columns are the vertical tracks and rows are the horizontal tracks in
your viewport.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 129. grid container, gutter (121) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image129.png?raw=true"
  title="Grid Container, Gutter"
  alt="Grid Container, Gutter."
  style="width:45%;" />
</p>

<p>Grids divide the page into rows and columns, and the space between
these tracks are called gutters or gaps.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 130. grid container, grid cell (122) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image130.png?raw=true"
  title="Grid Container, Grid Cell"
  alt="Grid Container, Grid Cell."
  style="width:45%;" />
</p>

<p>A cell is the space in a grid container where a row and column
intersect.</p>
<p>There are several different configurations you can add to define and
modify grids.</p>
<p>Let's examine an example that uses a HTML document to demonstrate how
to iteratively make changes to a grid.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 131. index.html (122) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image131.png?raw=true"
  title="Sample Index.html"
  alt="Sample Index.html."
  style="width:25%;" />
</p>

<p>First, let's create a HTML document called index.html.</p>
<p>Right now, the contents displayed in the viewport are just a vertical
series of letters from A to E without any styling.</p>
<p>Let's start adding content to the CSS file.</p>
<p>The first thing to do is set the values for the properties of the
different box classes inside the container object to make the layout
look more presentable.</p>
<p>The letters now have a better visual design, but their arrangement on
screen is unchanged.</p>
<p>The result is that each letter occupies more screen space than is
necessary for its size.</p>
<p>What's displayed in the viewport may appear to be a grid, but it's
not actually one.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 132. set values (123) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image132.png?raw=true"
  title="Set Values"
  alt="Set Values."
  style="width:25%;" />
</p>

<p>It's just the default settings of CSS for a layout.</p>
<p>Once you convert this into the grid layout, you'll be able to recognize the flexibility it can add.</p>
<p>Let's convert it into a grid layout.</p>
<p>Set the properties of the container class by first assigning a grid value to the display property.</p>
<p>The display property is also used to set display types for other designs such as flex, block, inline, and so on.</p>
<p>It's usually a part of container elements inside our code.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 133. assign grid value to display property (122) ~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image133.png?raw=true"
  title="Assign Grid Value to Display Property"
  alt="Assign Grid Value to Display Property."
  style="width:35%;" />
</p>

<p>The updated container now has the display property value set to grid
and the property values configured for three columns and two rows.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 134. updated container (124) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image134.png?raw=true"
  title="Updated Container"
  alt="Updated Container."
  style="width:35%;" />
</p>

<p>That's two changes from the previous configuration.</p>
<p>Let's examine them.</p>
<p>The grid template columns property has been added into the CSS code
to set the size of each of the three columns using pixel values.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 135. updated container with fraction (124) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image135.png?raw=true"
  title="Updated Container with Fraction"
  alt="Updated Container with Fraction."
  style="width:35%;" />
</p>

<p>The use of fr, which is an abbreviation for fraction, has been introduced.</p>
<p>Fraction effectively divides the grid.</p>
<p>The page now displays five separate grid cells around the letters
which are arranged in three columns and two rows.</p>
<p>Where applied, the grid tracks are divided proportionately to the
ratio of all the fraction values present.</p>
<p>As there are two rows, the defined values are sized in the ratio of
two to one.</p>
<p>Fraction adds flexibility to the grid without needing to deal with
actual pixel sizes.</p>
<p>It must be noted though, that fraction and pixel sizes can be used
interchangeably with both rows and columns.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 136. grid gap and background color (125) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image136.png?raw=true"
  title="Grid Gap and Background Color"
  alt="Grid Gap and Background Color."
  style="width:35%;" />
</p>

<p>Now to add a couple of properties such as grid gap or gutter and
background color to define the grid, the updated view displays a red box
representing the grid because that's what the background colors RGB
value was set to.</p>
<p>The grid stretches by default the entire width of the page and the
size of the grid track or gutter has been adjusted to 10 pixels, which
leaves more space between the grid cells.</p>
<p>You can also opt to use the auto properties such as grid, auto rows
and grid auto columns collectively called the implicit grid.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 137. auto properties (125) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image137.png?raw=true"
  title="Auto Properties"
  alt="Auto Properties."
  style="width:35%;" />
</p>

<p>Let's replace the grid template rows property in the code with grid
auto rows. All the rows are now auto-resized to 100 pixels.</p>
<p>Now let's examine some of the functions that can make configuring the
layout easier.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 138. repeat function (126) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image138.png?raw=true"
  title="Repeat Function - passes number of repeats required for a given number of rows and columns"
  alt="Repeat Function - passes number of repeats required for a given number of rows and columns."
  style="width:35%;" />
</p>

<p>First, the repeat function passes the number of repeats required for
a given number of rows and columns.</p>
<p>The result of the code adjustment is an unchanged webpage from the
last instance because the repeat function didn't change anything, it
just reduced the amount of code you need to write.</p>
<p>Therefore, the repeat function helps reduce redundancy and provides
ease of code modification.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 139. minmax function (126) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image139.png?raw=true"
  title="Min and Max values expected for the sizes of rows and columns"
  alt="Min and Max values expected for the sizes of rows and columns."
  style="width:35%;" />
</p>

<p>Next, the min-max function sets the minimum and maximum values
expected for the sizes of rows and columns.</p>
<p>Let's set the value for the grid auto rows to 150 pixels.</p>
<p>The output is modified so that the minimum size of each row is 150
pixels.</p>
<p>One more important concept is grid frameworks. There are a number of
commonly used grid frameworks and layouts.</p>
<p>Two such grid design layouts are known as the 12 and 16-column
grids.</p>
<p>They divide the page into 12 and 16 tracks respectively, along the
vertical columns.</p>
<p>The properties can be modified accordingly to target a specific
track.</p>
<p>CSS Grid layouts are so important when it comes to good webpage
design.</p>
<p>This section has demonstrated that layer to provide visual cues for
the user by organizing content in a way that makes it easier to
understand. Who knows?</p>
<p>Soon you'll be building your own web pages and you'll be able to test
out some of the techniques shown in this section.</p>
<p>Don't forget the repeat and min-max functions, they'll save you time
and effort.</p>

<h4>Grids and flexbox cheat sheet</h4>

<p>Note: ‘|’ stands for alternatives or OR.</p>

<h4>Grid </h4>

<p>The syntax for creating a grid:</p>

<pre>  selector{
    display: grid; /* or inline-grid */
  }</pre>

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
&lt;img src="./images/image140.wmf" /&gt;
&lt;img src="./images/image141.wmf" /&gt;
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

<p>Grid shorthand consists of the following properties with default
values:</p>
<p><strong>grid</strong></p>
<p>A grid will allow you organize the various elements on your page.</p>
<p><strong>grid-template-rows: none</strong></p>
<p>This feature allows you configure your elements so that they are
organized similarly to rows on a table.</p>
<p><strong>grid-template-columns: none</strong></p>
<p>This feature allows you configure your elements but with this setting
the elements are organized like columns on a table.</p>
<p><strong>grid-template-areas: none</strong></p>
<p>This feature allows you configure the names of a grid and how they
sit in relation to one another.</p>
<p><strong>grid-auto-rows: auto</strong></p>
<p>Default setting for all row sizes that have not been explicitly
configured.</p>
<p><strong>grid-auto-columns: auto</strong></p>
<p>Default setting for all column sizes that have not been explicitly
configured.</p>
<p><strong>grid-auto-flow: row</strong></p>
<p>Default location for rows that are not explicitly allocated.</p>
<p><strong>column-gap: normal</strong></p>
<p>This sets the gap between the columns</p>
<p><strong>row-gap: normal</strong></p>
<p>This sets the gap between the rows</p>

<h4>Grid properties for container</h4>

<p><strong>grid-template-columns: measurement units | % units
|repeat()</strong></p>
<p>Defines the line names, and maintains a constant size of column
items. Can accept a range of different measurement sizes.</p>
<p><strong>grid-template-rows: measurement units | % units
|repeat()</strong></p>
<p>Defines the line names, and maintains a constant size of rows. Can
accept a range of different measurement sizes.</p>
<p><strong>grid-auto-columns: measurement unit (fixed value for all
columns)</strong></p>
<p>Determines the default size for columns that have not been explicitly
configured.</p>
<p><strong>grid-auto-rows: measurement unit (fixed value for all
rows)</strong></p>
<p>Determines the default size for rows that have not been explicitly
configured.</p>
<p><strong>grid-template: “header header” auto</strong></p>
<p>This allows you define and maintain named cells on a grid</p>
<p><strong>“main right” 75vh</strong></p>
<p>This defines two cells named main and right, that have a sizing of
75% of the viewport height.</p>
<p><strong>“footer footer” 20rem</strong></p>
<p>This defines two cells named footer and footer, that have a sizing of
20 root em (rem). This defines the size in relation to the html font
size.</p>

<h4>Gap</h4>

<p><strong>grid-gap: measurement units</strong></p>
<p>Determines the gap between rows and columns</p>
<p><strong>grid-column-gap: measurement units</strong></p>
<p>Determines the gap between columns</p>
<p><strong>grid-row-gap: m-unit-1 m-unit-2</strong></p>
<p>Determines the gap between columns</p>

<h4>Alignment</h4>

<p><strong>justify-items: start | center | end | stretch</strong></p>
<p>Defines the default space that is allot to each item on the grid</p>
<p><strong>align-items: start | center | end | stretch</strong></p>
<p>Defines the default space related to an item along the grid’s block
axis</p>
<p><strong>place-items: start | stretch /* shorthand for two properties
above */</strong></p>
<p>This feature allows you align items with the block and inline
directions.</p>

<h4>Justification</h4>

<p><strong>justify-content: start | center | end | stretch |
space-between | space-evenly | space-around</strong></p>
<p>Defines browser allocation of space to content items in relation to
the main-axis</p>
<p><strong>align-content: start | center | end | stretch | space-between
| space-evenly | space-around</strong></p>
<p>Defines browser allocation of space to content items in relation to
cross axis and block axis</p>
<p><strong>place-content: center | start</strong></p>
<p>This feature allows you align items with the block and inline
directions.</p>

<h4>Positioning</h4>

<p><strong>grid-auto-flow: row | column | dense</strong></p>
<p>This relates to how the items are placed automatically within the
grid</p>
<p><strong>grid-auto-columns: measurement units</strong></p>
<p>This relates to the size for columns created without specific size
specifications</p>
<p><strong>grid-auto-rows: measurement units</strong></p>
<p>This relates to the size for rows created without specific size
specifications</p>

<h4>Grid properties for items (child)</h4>

<p><strong>grid-column: column position /* E.g. 1/2 */</strong></p>
<p>Allows for specifying where on the grid the column is to start.</p>
<p><strong>grid-column-start: column start position</strong></p>
<p>This property determines the starting column position an item is
placed on a grid.</p>
<p><strong>grid-column-end: column end position</strong></p>
<p>This property determines the end column position an item is placed on
a grid.</p>
<p><strong>grid-row: row position /* E.g. 1/2 */</strong></p>
<p>Allows for specifying where on the grid the row is to start.</p>
<p><strong>grid-row-start: row start position</strong></p>
<p>This property determines the starting row position an item is placed
on a grid.</p>
<p><strong>grid-row-end: row end position</strong></p>
<p>This property determines the end row position an item is placed on a
grid.</p>

<h4>Justification and alignment</h4>

<p><strong>justify-self: start | center | end | stretch</strong></p>
<p>Determines how an item is positioned inside its aligned container in
relation to the appropriate axis.</p>
<p><strong>align-self: start | center | end | stretch</strong></p>
<p>Aligns an item within a grid area.</p>
<p><strong>place-self: start | stretch /* shorthand for two properties
above */</strong></p>
<p>This setting lets one align and justify an item within a block.</p>

<h4>Flexbox</h4>

<p>The syntax for creating a flexbox:</p>

<pre>  selector{
    display: flex | inline-flex
  }</pre>

<p>Here the selector can refer to any of the following flex
attributes</p>

<ul>
  <li>Attribute selector</li>
  <li>Class Selector</li>
  <li>ID Selector</li>
  <li>Type Selectors</li>
  <li>Universal Selectors</li>
</ul>

<p>The display relates to how you want the selector to be shown. Setting
display to flex makes the given selector a flex box. Setting display to
<strong>inline-flex</strong> makes the selector a flex box container
while will be inline.</p>

<h4>Properties for flexbox container</h4>

<p><strong>flex-direction: row | row-reverse | column |
column-reverse</strong></p>
<p>It is possible to specify the direction your elements will follow.</p>
<p>Traditionally text goes from left to right which is flex’s default
setting however it can be set from right to left or even top to bottom.</p>
<p>The four flex-direction are:</p>

<ul>
  <li>row : organized from left to right</li>
  <li>row-reverse: organized from right to left</li>
  <li>column: organized from top to bottom</li>
  <li>column-reverse: organized from bottom to top.</li>
</ul>

<h4><strong>flex-wrap: wrap | nowrap</strong></h4>

<p>The standard layout is to plot the elements from left to right in a
straight line. The wrap feature allows you customize this to match the
size of the window displaying the page.</p>

<ul>
  <li>wrap: Automatically wrap the items with as the window space gets smaller.</li>
  <li>Nowrap: Default setting, items remain rigid and don’t respond to adjustments made to the window size.</li>
</ul>

<p><strong>align-items: flex-start | flex-end | center |Stretch</strong></p>
<p>This determines how the flex items are to be positioned on the page.
Items can be aligned in a variety of ways</p>

<ul>
  <li>Flex-start: Similar to standard writing, items start at the top left-hand corner and are positioned from left to right</li>
  <li>Flex-end: Position begins in the bottom right hand corner.</li>
  <li>Center: Item is positioned from the center.</li>
  <li>Stretch: item expands to fill the container.</li>
</ul>

<p><strong>justify-content: flex-start | flex-end | center |
space-between | space-evenly</strong></p>
<p>Justify-content determines the alignment of the flex items.</p>

<ul>
  <li>Flex-start: goes from right to left along the main axis.</li>
  <li>Flex-end: goes from left to right along the main axis.</li>
  <li>Center: Starting at the middle, alignments expands from there.</li>
  <li>Space-between: first and last item are flush with the left and right wall respectively, every other item is evenly spaced.</li>
  <li>Space-evenly: each item is equidistant from each other and the boundary wall</li>
</ul>

<h4>Properties for flexbox items (child)</h4>

<p><strong>flex-grow: factor of flex’s main size</strong></p>
<p>This attribute enables the flex container to grow proportionally to
the other containers present.</p>
<p><strong>flex-shrink: factor of flex’s main size</strong></p>
<p>This allows elements to shrink in relation to items around it.</p>
<p><strong>flex-basis: auto | factor of main’s size | measurement
unit</strong></p>
<p>The sets the initial main size of an item. It can be overridden if
other stylized elements are configured.</p>
<p><strong>order:position in flex /* Set ascending by default
*/</strong></p>
<p>The standard positioning of items is by source order, however this
feature will enable you to configure where the items appear on the
page.</p>
<p><strong>align-self: start | center | end | stretch</strong></p>
<p>This determines where on the page the child items will be positioned.
Similar to the main flex attributes, start is to the left and end is to
the right.</p>
<p>Grid showcase</p>
<p>In this section (grid showcase), you will learn about how differently
commonly used grid layouts are created and where you can use them.</p>
<p>Let's start by examining the grid layout named the pancake stack.</p>
<p>I've opened extra.HTML in Visual Studio Code.</p>
<p>Now I can start adding the different elements.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 142. extra.html (133) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image142.png?raw=true"
  title="Extra.html"
  alt="Extra.html"
  style="width:35%" />
</p>

<p>First is the restaurant's name, little lemon, which I put into the header.</p>
<p>In the main element, I type menu and for the footer, I type About Us.</p>
<p>After saving, next, I will open up extra.CSS.</p>
<p>First of all, write the rules for the body, followed by the header
name and then the footer.</p>
<p>First for the body, I need to use the display property to code the grid.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 143. extra.css (133) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image143.png?raw=true"
  title="Extra.css"
  alt="Extra.css"
  style="width:35%" />
</p> 

<p>I define as high as 150 VH. One VH is equal to 1 percent of the viewport height.</p>
<p>Now, I add the grid template rows property that will track the sizing
functions for the grid rows.</p>
<p>I set it to one FR or one fraction for the main section.</p>
<p>Now, I define the rules for the header.</p>
<p>I start by setting the background color and follow that up with text
alignment, which is centered and 2EM padding.</p>
<p>2EM is a relative height which is twice the size of the current font
height.</p>
<p>Let's examine the output.</p>
<p>It looks good.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 144. more extra.css (134) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image144.png?raw=true"
  title="More extra.css"
  alt="More extra.css."
  style="width:35%" />
</p>

<p>I'm going to do the same for the main and the footer elements.</p>
<p>I've changed the colors, but everything else is the same.</p>
<p>Let's examine the output again. It looks exactly like I was
expecting.</p>
<p>The header main and footer are all formatted in different colors.</p>
<p>If I modify the size of the page, the layout changes accordingly.</p>
<p>Next, let's examine the 12th section or 12 column grid system layout,
also called a twelve-span grid.</p>
<p>This type of grid, conceptually to divide the page into 12 columns of
equal size.</p>
<p>One can add different elements to the grid by determining their
starting point and the number of columns each element spans.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 145. gridtwelve.html (134) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image145.png?raw=true"
  title="gridtwelve.html"
  alt="gridtwelve.html"
  style="width:35%" />
</p>

<p>Don't worry, this will all become a lot clearer when I go through the following example.</p>
<p>I'm opening gridtwelve.html in Visual Studio code.</p>
<p>First, I create a container with class parent and inside it I'll add
six items that I call segments.</p>
<p>I had a class name for each of the div tags matching the span or
width I'm going to give each of these segments, these widths are
randomly assigned.</p>
<p>Now, I'm going to save and open up my gridtwelve.css file.</p>
<p>I'm going to add CSS selectors for each class.</p>
<p>I will first add CSS properties for the parent class, and then for
the individual segments are defined.</p>
<p>For the parent class, I write display grid and then add the grid
template columns property, which I'm going to repeat 12 times with one
fraction each.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 146. extra.css > footer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image146.png?raw=true"
  title="extra.css > footer"
  alt="extra.css > footer."
  style="width:45%" />
</p>

<p>Next, I define the properties of the segment.</p>
<p>Again, I display grid following up with centering the items at the
text. I set the grid template rows property.</p>
<p>I want the segments to be a little wider, so I'll set it to 100
pixels.</p>
<p>Let's examine the output. It's not much for now, but let's
continue.</p>
<p>Now, let's set the properties for the different segments.</p>
<p>The first one spends 12 columns, I start by adding a light green
background.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 147. define grid column property ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image147.png?raw=true"
  title="Define grid column property"
  alt="Define grid column property."
  style="width:35%" />
</p>

<p>The next part is important.</p>
<p>This is where I use the grid column property.</p>
<p>This value tells the element to start from the first column and span
all 12 columns.</p>
<p>Let's examine the output again.</p>
<p>These two segments are now in better shape, starting from the first
column and spending all the way to the 12th.</p>
<p>Let's add another selector for eight.</p>
<p>Again, I copy the same code, but instead of starting from the first
column this time, I'll start from say, the fifth column, and it will
span across eight columns.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 148. change color to bisque ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image148.png?raw=true"
  title="Change color to bisque"
  alt="Change color to bisque."
  style="width:35%" />
</p>

<p>Let's change the color here to bisque.</p>
<p>The color now makes it obvious that the elements starts from the
fifth column and spans eight columns.</p>
<p>Let's add the other segments and then we'll examine the code
again.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 149. span 12, span 8, span 4/6, span 7 (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image149.png?raw=true"
  alt="."
  style="width:45%" />
</p>

<p>Let's examine the output again.
Now, this is looking a lot more presentable.</p>

<p>There's also another way to view these columns.
Click on "More browser auctions" and then on "Open Devtools"
pane.  You can select the button in the corner to select an element on the
page to inspect then scan over the grid.</p>

<p>The page is systematically divided into 12 different columns.
You can configure your code according to your requirements.
Grids like these are really useful when it comes to designing
something like a magazine, newspaper or page layout, which can replicate
these models.
Now, you know about the basic grid layout in the 12-column grid.</p>

<h4>Grid template area</h4>

<p>Grid areas are a way to group one or more grid cells. The grid
template area is an extension of this concept where you can give names
to these grid areas. Once you have the names defined, you can address
these new grid area items by their names and configure them
accordingly.</p>

<p>The property grid-template-areas is usually placed inside the body
tag or any container where the grid needs to be placed, the same way
that you would define the rules for the grid. The main difference is, in
case of grid-template-areas the values present will be the different
names.</p>

<h4>Process</h4>

<p>The process isn’t prescriptive but these are the steps in
general:</p>

<ul>
  <li>Define the grid using display property,</li>
  <li>Set the height and width of the grid,</li>
  <li>Set the grid-template-areas with the appropriate name
    identifiers,</li>
  <li>Add the appropriate sizes for the rows inside the grid using
    grid-template-rows property,</li>
  <li>Add the appropriate sizes for the columns inside the grid using
    grid-template-columns property.</li>
</ul>

<p>But how exactly do you use these names and where do they come from?
The names that you use inside the grid template areas are the HTML tags
that you have used. Or, where you need to get more specific, you
designate a class name to these tags. Once the names are assigned, you
define the properties for each class the same way that you define them
conventionally. Let's examine an example.</p>

<h4>HTML Code:</h4>

<pre>  &lt;head&gt;
    &lt;link rel="stylesheet" href="gridta.css"&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;header&gt; Header &lt;/header&gt;
    &lt;nav class="nav-bar"&gt; Navigation &lt;/nav&gt;
    &lt;main&gt; Main area &lt;/main&gt;
    &lt;footer&gt; Footer &lt;/footer&gt;
  &lt;/body&gt;</pre>

<h4>CSS Code:</h4>

<pre>  body {
    display: grid;
    height: 200px;
    grid-template-areas: "head head"
                         "nav  main"
                         "footer  footer";
    grid-template-rows: 30px 1fr 30px;
    grid-template-columns: 150px 1fr;
  }
  header {
    grid-area: head;
    background-color: lightsalmon;
  }
  .nav-bar {
    grid-area: nav;
    background-color: lightblue;
  }</pre>
 
<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 150. header, nav, main, footer (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image150.png?raw=true"
  style="width:45%;"
  title="Grid-based output presenting &quot;header, navigation, main area, and footer.&quot;"
  alt="Grid-based output presenting &quot;header, navigation, main area, and footer.&quot;" />
</p>

<p>Though there are five sets of rules, logically the CSS code is
divided into two sections. The first is where you define the rules for
the grid inside the body selector. And second is where you allocate
specific rules for the different grid areas. The way these grid areas
are distributed is according to how you have defined the names inside
the grid-template-areas property. In the example above the relevant code
is:</p>

<pre>  grid-template-areas: "head head"
                       "nav  main"
                       "footer  footer";</pre>

<p>The ‘head’ is written twice to imply two columns and the rest of the
content follows the usual convention.
The number of rows will be the number of ‘pairs of quotes’ you have used 
which in this case is three.
Namely  “head head”, “nav main” and “footer footer”.
Once you know the number of rows and columns, the values for those will be set by
grid-template-rows and grid-template-columns.</p>

<p>Since these are three and two respectively here, you need to add that many values.
The height simply gives the overall value of the height for the grid.
Note that the number of times you wrote “header” did not have to be
two.</p>

<p>You could write more of those and if you align the rest of the
grid-names correctly, the height and width of the grid-areas will be
distributed proportionately.</p>

<p>Let’s return to the example.
If you keep all other properties the same but you change the grid-template-areas as follows:</p>

<pre>  grid-template-areas: "head head head"
                       "nav  main main"
                       "footer footer footer";</pre>

<p>The output will remain the same as you have fixed the value of the
third row to “30px”.</p>
<p>The example is simple for the sake of clarity, but
if you had used relative values, you would’ve seen an observable change
in the comparable sizes of nav and main grid-areas.</p>
<p>Grid-areas are convenient when you have a clear schematic of what you
want in a grid. It’s also easier to configure individual areas if you
can address them by their names.</p>
<p>Let’s say you are designing a resume on
your website, you will be able to name the different areas such as
‘Bio’, ‘Education’, ‘Work experience’ and so on.</p>
<p>And it’s easier to use
these labels when you are defining the rules.</p>
<p>Creating a block diagram
using pen and paper before starting to work on a grid is always a good
idea.</p>
<p>Case study: How Meta creates responsive builds</p>
<p>Websites have to work on a lot of things.</p>
<p>Mobile phones, desktop apps, tablets.</p>
<p>The idea behind responsive web design is building a product that
works across a range of viewports.</p>
<p>There's a lot of techniques to do this but the core problem is you
have a product and it needs to work everywhere.</p>
<p>How do you do that? Hi, my name is Benedict Hobart.</p>
<p>I am a front-end engineer at Meta.</p>
<p>Open a website and then just change the width of the browser window
and see what happens to our website.</p>
<p>Good responsive website, you'll see maybe you've got a top tab bar
that then collapses into a drop-down menu.</p>
<p>That's responsive design.</p>
<p>The problem to solve is to make your app work across a range of
viewports.</p>
<p>There are other considerations as well when you're building an app
for different viewports, if you're building an app to work on a mobile
device, you might put the action buttons towards the bottom of the
screen, so you can hit it with your thumb versus having to use your
index finger to hit the drop-down at the top right.</p>
<p>It's about being very considered about how you place your
functionality and what you think is important.</p>
<p>It's about making things work as a first step.</p>
<p>Then it's like how do you make things good?</p>
<p>How do you take into account the capabilities of the device you're
building for and make it better than it would have been if you just made
it work.</p>
<p>People have changed the way that they make content from being 14 by
nine whatever 10 viewport with people used to watch content on.</p>
<p>They flipped it horizontally because that's personal.</p>
<p>When you take a photo of something like that, it feels like you're
there, it feels like you're talking to them.</p>
<p>That's how you face-time your friends.</p>
<p>It's good to be aware of how your products make people feel.</p>
<p>That's the never-ending game of how people are using your
products.</p>
<p>You make something, and you have no idea how people are going to use
it, but that's the fun part.</p>
<p>Maintaining quality is hard.</p>
<p>People have QA teams that they employ to make sure that apps are
functional for a certain width.</p>
<p>People might write end-to-end tests to make sure that things keep
functioning as they could be.</p>
<p>It's hard to know what's going to change in the technology until it
happens.</p>
<p>Then you're like, okay, I need to redesign my website because iPhone
just came out with a new screen resolution.</p>
<p>Be aware of when your website breaks.</p>
<p>The goal isn't to make it work for a phone and a desktop and a
TV.</p>
<p>The goal is to just make it always work.</p>
<p>If you make it work across a width from here all the way down to
here, you're probably in a good spot.</p>
<p>Instead of focusing on making that device work properly, try to make
your interface forward and walk across a range of dimensions versus just
ticking the boxes.</p>

<h3>Additional resources</h3>

<p>Here is a list of resources about layouts, flexboxes, grids and
viewports in HTML and CSS that may be helpful as you continue your
learning journey.</p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" target="_blank" rel="noopener noreferrer">Broad
overview of layouts in CSS</a></p>
<p><a
href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">Detailed
overview of flexboxes</a></p>
<p><a href="https://learncssgrid.com/" target="_blank" rel="noopener noreferrer">Detailed overview of grids
(1)</a></p>
<p><a href="https://web.dev/learn/css/grid/" target="_blank" rel="noopener noreferrer">Detailed overview of grids
(2)</a></p>
<p><a href="https://www.educba.com/css-viewport/" target="_blank" rel="noopener noreferrer">Viewports in
CSS</a></p>
<p><a
href="https://1stwebdesigner.com/fascinating-css-grid-layout-examples-and-tutorials/" target="_blank" rel="noopener noreferrer">Grid
layout applications</a></p>
<p><a href="https://csslayout.io/" target="_blank" rel="noopener noreferrer">Overview of different layouts</a></p>
<p>Widely used selectors</p>
<p>Earlier you learned about the different types of CSS selectors.</p>
<p>Remember CSS selectors correspond to specific elements or element
groups in an HTML document.</p>
<p>In this section (widely used selectors), you will learn about
additional commonly used CSS selectors.</p>
<p>But before you explore them, let's briefly revise the ones you've
already covered.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 151. element or type selectors (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image151.png?raw=true"
  title="Element or type selectors: p type in index.html and style.css"
  alt="Element or type selectors: p type in index.html and style.css."
  style="width:25%;" />
</p>
 
<p>You learned about element or type selectors.</p>
<p>The element selector allows developers to select html elements based
on their element type.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 152. id selectors for styling (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image152.png?raw=true"
  title="Example ID selector using pound latest in style.css"
  alt="Example ID selector using pound latest in style.css."
  style="width:25%;" />
</p>

<p>You also get ID selectors,
ID Selectors use the ID attribute of html element.
Since the ID is unique within a web page, it allows the developer to
select a specific element for styling.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 153. class selectors with .navigation (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image153.png?raw=true"
  title="Example class selector using dot navigation in style.css"
  alt="Example class selector using dot navigation in style.css."
  style="width:25%;" />
</p>

<p>You were introduced to class selectors.</p>
<p>Class selectors allow you to select 
elements based on the class attribute applied to them.</p>
<p>With class selectors, you can apply rules to all elements with the
specified class name.</p>
<p>Those are the CSS selectors you have learned about previously.</p>
<p>Hopefully, you've experienced how useful and effective they can be,
but that's not all.</p>
<p>As the CSS code based evolved over time, more selectors were added to
improve the design and styling effect of CSS.</p>
<p>Let's explore a few of these widely used selectors.</p>
<p>First, let's focus on attribute selectors.</p>
<p>The attribute selector has a few syntax variations.</p>
<p>Attribute selectors match the attribute of value for a given element.</p>
<p>Can you recall what attributes and value mean?</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 154. image tag with source and alt (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image154.png?raw=true"
  title="Image tag with source and alt"
  alt="Image tag with source and alt."
  style="width:35%;" />
</p>
  
<p>A quick recap, let's say you have a html image tag, img is the name
of the tag, while src and alt are the names of its attributes.</p>
<p>The actual name of the image file, first.jpeg is the value.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 155. attribute selectors with class (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image15.png?raw=true"
  alt="Attribute selectors with class (home and about)."
  style="width:35%;" />
</p>

<p>Now let's explore an example of how attribute selectors can be
used.</p>
<p>Say you have an html file with three a tags, each with a h ref
attribute that points to a different page on the meta website.</p>
<p>The first one has no class, whereas the second one has a class called
home, and the third class called about.</p>
<p>With different variations of the attribute selectors you can target
different attributes of the html.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 156. attribute selectors with class, again (xx) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image15.png?raw=true"
  alt="Again, attribute selectors with class of home and about."
  style="width:25%;" />
</p>

<p>For instance, you can style all elements that have a defined class by
adding class inside the square brackets.</p>
<p>In this case, it will turn the second and third link green.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 157. attribute selectors example (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image157.png?raw=true"
  alt="Example of attribute selectors."
  style="width:35%;" />
</p>

<p>Alternatively, you can target all three elements by inserting the
href attribute, a star and a common value that is part of all the links
that you want to target.</p>
<p>In this case, it can be the text meta.</p>
<p>Now all three links will be green because each link contains the word
meta.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 158. attribute selectors with style (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image158.png?raw=true"
  alt="Attribute selectors with style."
  style="width:35%;" />
</p>

<p>Or you can target only the first element by adding the specific link
as the value of the href attribute, that you want to target inside the
square brackets.</p>
<p>Wherever there is an attribute on a web page, you can use some
variation of an attribute selector to modify it.</p>
<p>This makes attribute selectors a very flexible styling tool, but
let's move on to two other widely used selectors that you need to know
about.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 159. nth-of-type and nth-child selectors (149) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image159.png?raw=true"
  alt="Syntax for nth-of-type and nth-child selectors."
  style="width:50%;" />
</p>

<p>Nth-of-type and nth-child selectors, the syntax of these two
selectors is very similar.</p>
<p>As their name suggests, these selectors target the nth-child or
nth-type of a specified parent element, but what does parent mean
exactly?</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~ 160. nth-of-type example using unordered list (150) ~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image160.png?raw=true"
  alt="Nth-of-type example using unordered list."
  style="width:50%;" />
</p>

<p>Well, say you have a few list elements in an unordered list
element.</p>
<p>The unordered list element is the parent tag in this case, and the
three list elements are the children.</p>
<p>Now let's specify that the second list element must have a certain
styling. In this case, you can use both the nth-of-type and the
nth-child selectors to do that.</p>
<p>Both will produce the same output, where the second list element will
be colored aqua in this case.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 161. star selectors syntax (151) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image161.png?raw=true"
  alt="Star selectors (*) syntax.  Select all."
  style="width:25%;" />
</p>

<p>Another commonly used selector is the star selector, just like in
many other programming languages, star selectors are used for selecting
all the elements of a web page.</p>
<p>It will affect all the elements in the html file.</p>
<p>It is especially helpful when you want to reset the default settings
and styles that browsers use before they apply your styling to the web
page.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 162. star selectors example (151) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image162.png?raw=true"
  alt="Star selectors example."
  style="width:50%;" />
</p>

<p>Finally, did you know that you can group selectors?</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 163. group selectors syntax (151) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image163.png?raw=true"
  alt="Group selectors syntax."
  style="width:35%;" />
</p>

<p>If you want to apply the same styling to more than one type of
element, like the heading one and paragraph elements you can use group
selectors.</p>
<p>Instead of using element selectors where you use a rule for every
element, such as heading 1 and P you can type h1, p and then add the CSS
properties.</p>
<p>The CSS rule will then be applied to all heading one and paragraph
elements.</p>
<p>Group selectors can save you a lot of time, they're also called
selector stacking. In this section, you reviewed the CSS selectors that
you are familiar with.</p>
<p>You also learned about additional widely used CSS selectors, their
syntax and how they can be used to target specific elements on your web
pages.</p>
<p>The selectors covered where, attribute selectors of type and
nth-child selectors, star selectors, and group selectors.</p>
<p>Learning how to use the CSS selectors is important because it allows
you to be more specific when styling your web pages.</p>
<p>In the rest of this lesson, you'll be introduced to several advanced
selectors.</p>
<p>At first, they might seem more complex than the ones covered in this
last section, but with a bit of practice, they will become part of your
everyday web styling toolkit.</p>
<p>All selectors and their specificity</p>
<p>As you build a website, the complexity of the code might increase to
such a point that more than one CSS rule is applied to the same element.</p>
<p>Or, you might accidentally add more than one rule over the same element.</p>
<p>This results in conflicts as only one rule can be applied to a specific
property.</p>
<p>For example, the color of a certain p tag can either be blue
or white, but not both.</p>
<p>CSS engines use something called specificity to
resolve these conflicts.</p>
<p>Specificity is the ranking or score that helps
CSS determine the final rule that will be applied to a given element. </p>
<p>This reading will help you grasp how the element with the ‘highest’
specificity is selected by CSS.</p>
<p>But before you read on, it is important
to note that these rules only apply in cases where conflicts arise for
the properties. </p>

<h4>Specificity hierarchy</h4>

<p>CSS has a set of rules that it uses to ‘score’ or assign a certain
weight to selectors and this creates a specificity hierarchy.</p>
<p>Based on the weights, there are four categories in this hierarchy: </p>

<ul>
  <li>Inline styles </li>
  <li>IDs </li>
  <li>Classes, attributes, and pseudo-classes </li>
  <li>Elements and pseudo-elements </li>
</ul>

<h4 id="inline-styles">Inline styles</h4>

<p>Inline styles are attached to the elements within your HTML code like
with the ‘style’ attribute. inline styles have the highest specificity.
That means that rules that are defined as inline styles will be applied
irrespective of other rules. </p>
<p>For example, take these two rules that create a conflict in color
styling for a p tag:</p>

<pre>  &lt;p style=“color: white;”&gt;
    p{color: blue}</pre>

<p>The p tag will be colored white because it is declared inside the
inline tag. </p>

<h4>IDs</h4>

<p>Next in the hierarchy are IDs and by now you know that they are
represented by ‘#’.</p>
<p>For example:</p>

<pre>  #div</pre>

<h4>Classes, attributes, and pseudo-classes</h4>

<p>Classes, and the attributes inside the selectors, come next with what
is called the pseudo-classes that you will soon learn more about. </p>

<h4>For example:</h4>

<pre>  .my-class
    p[“attribute”]
    div:hover</pre>

<h4>Elements and pseudo-elements</h4>

<p>Finally, elements and something you call pseudo-elements have the
lowest position in the specificity hierarchy.</p>
<p>You will learn more about pseudo-elements later in this lesson.</p>

<h4>Calculating scores</h4>

<p>But by now you might wonder how is specificity calculated? </p>
<p>CSS uses the hierarchical model internally to calculate the
specificity of the selectors used on a web page.</p>
<p>But often as the size of CSS code increases, developers unavoidably face rule 
conflicts.</p>
<p>In these cases, developers use the specificity hierarchy to calculate the
precedence of CSS rules and to control the outcome of their web pages.</p>
<p>Let’s explore a practical example of how to determine the score of a
few selectors. </p>

<pre>  #hello {} will be 0100
    div {} will be 0001 and
    div p.foo {} will be 0012</pre>

<p>In the order stated above, the four categories will be assigned
values 1000, 100, 10 and 1 with the element selectors having the lowest
value of 1.</p>
<p>These scores will be calculated respectively for each element present 
inside the selector.</p>
<p>The total score for these elements is then calculated and the one with 
the highest value has the highest specificity.</p>
<p>Let’s explore a couple of examples for clarity.</p>
<p>Take note that the properties and values are not included in these examples 
to keep the focus on the selectors only.</p>

<h4>Example 1</h4>

<pre>  p {}
    div p {}
    div p.foo {}
  p  =&gt; 1 element =&gt;  0 0 0 1 =&gt; Score: 1
    div p =&gt; 2 elements =&gt; 0 0 0 2 =&gt; Score: 2
    div p.foo {} =&gt; 2 elements and 1 class selector =&gt; 0 0 1 2 =&gt; Score: 12</pre>

<p>The third case has a total of 12 for the p tag and so has the highest
specificity. The rules for the other two cases are then overridden and
the rules inside the third case are applied. </p>

<h4>Example 2</h4>

<pre>  p#bar =&gt; 1 element &amp; 1 ID =&gt;  0 1 0 1 =&gt; Score: 101
  p.foo =&gt; 1 element &amp; 1 class =&gt; 0 0 1 1 =&gt; Score: 11
  p.p.foo =&gt; 1 element &amp; 2 class =&gt;  0 0 2 1 =&gt; Score: 21</pre>

<p>By now it should be clear that the case containing ID has a much
higher score and the rules inside it will be applied. </p>
<p>Once you learn about the different pseudo-classes, pseudo-elements,
and wide range of selectors later in this section, it will be easy to
see why understanding specificity is important. </p>
<p>While the weights assigned from the hierarchical structure help in a
systematic approach, there are a few more guidelines and rules that
become important especially in cases when the score for the different
selectors is the same. Some of these are:</p>

<ul>
  <li>Every selector will have a score and place in the hierarchy</li>
  <li>In the case of selectors with equal specificity, the latest or last written rule is the one that will be applied</li>
  <li>In general, ID selector should be applied in cases where you need to be certain about a rule </li>
  <li>Universal selectors have zero specificity value</li>
</ul>

<p>This reading only gave you an overview of specificity, but you should
know that it is a much broader topic and also the underlying basis on
which CSS engines work.</p>
<p>That's what the 'Cascading' in CSS means: the way in which CSS
engines evaluate and apply the specificity rules is called
‘cascade’.</p>
<p>Cascade is a type of small waterfall that falls in stages down the
rocks and that is exactly how CSS behaves.</p>
<p>Don’t be too worried about applying what you’ve learned now, there
are CSS specificity calculators available that can help you with
determining the styling outcomes of your pages.</p>

<h4>Combination selectors</h4>

<p>Sometimes you want to apply the same styling to different elements or
to different groups of elements.</p>
<p>CSS makes it possible to combine more than one selector so that you
can apply rules to elements based on their relationship with one
another.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~ 164. 4 main types of combination selectors (156) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image164.png?raw=true"
  alt="Four types of combination selectors; descendant, child, general and adjacent sibling."
  style="width:25%;" />
</p>

<p>4 main types of combination selectors. Descendant selectors, child selectors, general sibling
selectors, and adjacent sibling selectors.</p>
<p>In this section you will learn about combination selectors and how
you can use them to target more specific elements.</p>
<p>Let's start with descendant selectors.</p>
<p>Descendant selectors are useful if you need to select HTML elements
that are contained within another selector.</p>
<p>The easiest way to remember descendant selectors is to think of a
family.</p>
<p>You pick a person in the family and then select all descendants, such
as children, grandchildren and great grandchildren, who have, say, brown
hair.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 165. descendant selectors example (157) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image165.png?raw=true"
  alt="Descendant selectors example."
  style="width:25%;" />
</p>

<p>For example, you can have an HTML file with a div tag, and its ID
attributes set to blog, inside the div tag are a few heading tags.</p>
<p>In this example, all h1 elements are descendants of the element with
the ID blog.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 166. descendant selectors example, pg 2 (157) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image166.png?raw=true"
  alt="Descendant selectors example, page 2."
  style="width:60%;" />
</p>

<p>So, to make all the h1 descendants blue, you can add the ID selector
hash #blog followed by the h1 selector with a space in between and then
the properties in curly brackets.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 167. child selectors example (158) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image167.png?raw=true"
  alt="Child selectors example."
  style="width:50%;" />
</p>

<p>Child selectors on the other hand are more specific than descendant
selectors.</p>
<p>To go back to the family example, with child selectors you select a
person and then select only their immediate children who have red
hair.</p>
<p>Let's update the previous selector to a child selector by adding a
close angle bracket in between the two selectors.</p>
<p>The effect is that now only the first h1 element turns blue.</p>
<p>This is because it is the only h1 element that is a child of the
element with the blog id attribute.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 168. general sibling selectors example (158) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image168.png?raw=true"
  alt="General Sibling selectors example."
  style="width:50%;" />
</p>

<p>Next, let's focus on general sibling selectors, which apply rules to
all the selectors of the same type that follow the first type.</p>
<p>To use the family analogy again, general sibling selectors allow you
to select a person and then select all younger brothers with black
hair.</p>
<p>You can update the selector with a tilde in between the two selectors
to make it a general sibling selector.</p>
<p>The selector now targets all paragraph elements that are siblings of
h1 element, the result is the last two paragraph elements turn blue.</p>
<p>Notice that the first paragraph element didn't turn blue, this is
because the general sibling selector only select subsequent elements
that match the selector.</p>
<p>In comparison to sibling selectors, you can use adjacent sibling
selectors to target only the first or adjacent element that follows
another element.</p>
<p>Once again, if you think about a family, this selector selects a
person and then selects the next younger brothers.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 169. adjacent sibling selectors example (159) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image169.png?raw=true"
  alt="Adjacent Sibling selectors example."
  style="width:50%;" />
</p>

<p>Finally, let's replace the tilde with a plus sign to update this
selector to an adjacent sibling selector.</p>
<p>The selector now selects all paragraph elements that are adjacent
siblings of the h1 element.</p>
<p>The result is that only the middle paragraph element turns blue.</p>
<p>This is because the adjacent sibling selector only selects the first
subsequent element if it matches the selector.</p>
<p>Now that you are more familiar with combination selectors, let's
explore a few practical examples.</p>
<p>I will now demonstrate two combination selectors, the general sibling
selector and the adjacent sibling selector.</p>
<p>Let's start with the general sibling selector.</p>
<p>Remember, the general sibling selectors select all the matching
elements of the second type which follow the first type.</p>
<p>The html file has a paragraph tag with the words, Basic Info About
Little Lemon, and that is followed by a div tag with the word,
About.</p>
<p>After the div tag, there is an ordered list with three list
items.</p>
<p>This structure repeats below.</p>
<p>So, there is another paragraph tag, a div tag, and then an ordered
list with two list items.</p>
<p>Now, let's inspect the CSS rules.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~ 170. css code for general sibling selector example (160) ~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image170.png?raw=true"
  alt="CSS code for general sibling selector example."
  style="width:50%;" />
</p>

<p>First, I set basic rules for the html body.</p>
<p>This is so that the special effect that I will apply with the sibling
selector will stand out.</p>
<p>Below the styling for the body is the general sibling selector.</p>
<p>I set the div tag as the parent and the un ordered list as the
sibling.</p>
<p>Remember, for the sibling selector, you always use a tilde.</p>
<p>This time I specify a contrasting background color, white.</p>
<p>Then notice that I added the box shadow effect.</p>
<p>As the name indicates, it adds a box with a shadow around the element
that you target.</p>
<p>The box shadow property consists of the horizontal offset, set to one
pixel, the vertical offset, set to one pixel, and then the blur radius,
which I set to three pixels.</p>
<p>Thereafter, you need to specify the color of the shadow, which in
this case is set to gray.</p>
<p>So what elements will be styled?</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 171. sibling selectors example code (161) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image171.png?raw=true"
  alt="Sibling selectors example code."
  style="width:50%;" />
</p>

<p>Remember, sibling selectors apply rules to all the selectors of the
same type that follow the first type.</p>
<p>Let's go to the html again to identify what will be styled.</p>
<p>The first div tag is the reference.</p>
<p>So, the rules will target the un ordered list that follows it.</p>
<p>And again, the second div tag will also serve as a reference and the
rules will affect the un ordered list that follows it.</p>

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 172. example unordered list with output (162) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image172.png?raw=true"
  alt="Sibling selectors exmaple."
  style="width:50%;" />
</p>

<p>Let's inspect the output.</p>
<p>The background is orange and there are two box shadows, each with un
ordered list inside it.</p>
<p>Notice that the subheadings that are inside div tags, About and
Employee or Owner, just have the body styling.</p>
<p>The sibling selector only targets the items that follow the div
tags.</p>
<p>By now you should realize that you can use the sibling selector to
efficiently apply the same styling to several elements with one
rule.</p>

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~ 173. unordered list follows div tag for style (163) ~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image173.png?raw=true"
  alt="Unordered list follows a div tag, stying is applied."
  style="width:50%;" />
</p>

<p>If there is another instance where an un ordered list follows a div
tag on this page, it will also have a box shadow.</p>
<p>But say the page has other un ordered lists that do not follow a div
tag, the styling will not be applied to those elements.</p>

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 174. adjacent selector example (163) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image174.png?raw=true"
  alt="Example of adjacent selector."
  style="width:50%;" />
</p>

<p>Next, I will demonstrate how to use the adjacent selector.</p>
<p>The html file contains an image tag and then three paragraph
tags.</p>
<p>Thereafter, there is another image tag followed by a div tag and then
a paragraph tag.</p>
<p>Lastly, there is another image tag followed by a paragraph tag.
Notice that the first paragraph after the top and bottom images are
descriptions of the images above it.</p>
<p>So, I want to style these paragraphs so that it looks like
captions.</p>
<p>In other words, I want to style all paragraphs that follow an image
but not affect any other paragraphs or other elements like a div
tag.</p>
<p>And I can do this with the adjacent selector.</p>
<p>Because remember, the difference between an adjacent selector and a
sibling selector, is that the adjacent selector only targets the first
element following the reference element.</p>
<p>Whereas the sibling selector targets all the elements of the same
type after the reference element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 175. sibling selector example (164) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image175.png?raw=true"
  alt="Sibling selector example."
  style="width:50%;" />
</p>

<p>Let's inspect the output and CSS code.</p>
<p>As explained, the first paragraph that follows the image is styled
differently than the next two paragraphs.</p>
<p>Notice that I set up the styling in the adjacent rule so that it will
appear as a caption.</p>
<p>The text is smaller and aligned in the center.</p>
<p>Again, with one rule I applied styling to two captions.</p>
<p>If you have a site with many images and captions, the adjacent
selector will be very helpful and save you a lot of time.</p>
<p>In this section, you learned about combination selectors and how to
use them.</p>
<p>As you become more advanced in styling your Web pages, these CSS
selectors will surely be helpful in targeting specific items and save
you a lot of time.</p>

<h4>Pseudo-classes</h4>

<p>Pseudo-class selectors give developers great control over what they
select and style.</p>
<p>By knowing how to use these selectors, you will not only improve the
interactivity of your web pages, but you will also be able to add
advanced styling without too much effort.</p>
<p>These selectors are also often referred to as just
pseudo-classes.</p>
<p>Previously, you were briefly introduced to the pseudo-class
invalid.</p>
<p>Remember, pseudo-classes are state-based selectors, which means that
they allow you to select elements based on their state.</p>
<p>For example, the hover state.</p>
<p>You use pseudo-class selectors to improve the interactivity of web
pages by styling elements in response to user input.</p>
<p>In this section, you will explore practical examples of how to do
this.</p>
<p>There are many types of pseudo-classes.</p>
<p>Other than the hover state, examples include selecting an element
when it is active or in-focus, or when a link has already been
visited.</p>
<p>Pseudo-classes are also very effective to target specific elements
such as, let's say, the fifth item in a list, bold items, empty
elements, and so on.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 176. pseudo-classes syntax (166) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image176.png?raw=true"
  alt="Pseudo-classes syntax."
  style="width:25%;" />
</p>

<p>Let's review the general syntax that you use for various
pseudo-classes.</p>
<p>You add the selector, a colon, the pseudo-class, and then the
properties.</p>
<p>Well, there isn't a broadly accepted classification for
pseudo-classes, you can group them in terms of general similarities and
their purpose.</p>
<p>Let's explore a few of these general classifications.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 177. user action states; hover, active and focus (166) ~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image177.png?raw=true"
  alt="User action states are; hover, active and focus."
  style="width:15%;" />
</p>

<p>The first group you need to know about is user action states, which
include the hover pseudo-class, which changes the style of an element
when a cursor hovers over it.</p>
<p>The active pseudo-class, which styles an element only while a user
actively presses and holds the mouse button, and the focus pseudo-class,
which focuses styling on the element that you use it for.</p>
<p>These pseudo-classes have an effect while a user is actively engaging
with a HTML element.</p>
<p>Let's explore an example of how the hover and active pseudo-classes
can be used.</p>
<p>Say you have a HTML file with an a tag inside a paragraph and a
button element inside a div element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~ 178. paragraph class 'mypage' and button class 'mybutton' (166) ~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image178.png?raw=true"
  alt="Paragraph class 'mypage' and button class 'mybutton'."
  style="width:35%;" />
</p>

<p>The paragraph element has a class defined as "mypage" and the button
class is defined as "mybutton."</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 179. css styling for mypage and mybutton (167) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image179.png?raw=true"
  alt="CSS styling for classes 'mypage' and 'mybutton'."
  style="width:35%;" />
</p>
  
<p>Now, let's explore the CSS.</p>
<p>First it contains basically styling for the mypage and mybutton class
elements.</p>
<p>Then to make the link change its appearance when a user hovers over
it, you use the hover pseudo-class to target a tag.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 180.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image180.png?raw=true"
  alt="."
  style="width:35%;" />
</p>

<p>To change the mybutton class, you use the active pseudo-class.</p>
<p>The active pseudo-class changes the properties of an element when the
state of that element is active.</p>
<p>In this case, the styling properties will be applied only when a user
presses and holds the mouse button.</p>
<p>In this example, the pseudo-class selectors target HTML elements, but
you can also use them to target HTML class attributes.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 181.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image181.png?raw=true"
  alt="."
  style="width:20%;" />
</p>

<p>Next, let's focus on Form states.</p>
<p>Previously, when discussing form validation, you were introduced to
the invalid pseudo-class selector.</p>
<p>But there are more pseudo-classes that are specifically used for HTML
forms.</p>
<p>They usually come in pairs and target the different states that
elements can have.</p>
<p>Form state pseudo-classes include disabled and enabled, generally
used for buttons, checked and indeterminate, that are used for
checkboxes, and valid and invalid used in case of fields like emails and
phone numbers.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 182.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image182.png?raw=true"
  alt="."
  style="width:20%;" />
</p>

<p>Another pseudo-class type that you should know about is specific
position-based states.</p>
<p>They allow you to target specific items, for instance, a specific
list item among the list elements.</p>
<p>Some examples of this type include, first-of-type, last-of-type,
nth-of-type, and nth-last-of-type.</p>
<p>Let's explore an example of first-of-type.</p>
<p>Say you have two list items in an HTML page, Adrian and Mario.</p>
<p>With the first-of-type pseudo-class, you can style the first item of
its type while the remaining items will not be affected.</p>
<p>In this section, you explored a few examples of how you can use
pseudo-classes to improve the interactivity of your web pages.</p>
<p>There are plenty of other pseudo-classes and some of them are more
popular than others.</p>
<p>You're encouraged to follow your own style and explore the creative
possibilities that pseudo-classes offer.</p>
<p>Pseudo-elements</p>
<p>By now you know that pseudo-elements help you style a specific part
of an element. For example, you can decide to apply styling to only the
first word or line in a given element. First, let’s examine the syntax
of a pseudo-element.</p>

<h4>Syntax</h4>

<pre>  selector::pseudo-element {
    property: value;
  }</pre>

<p>It is important to note that pseudo-elements use two colon characters
instead of one.</p>
<p>Now, let’s explore some examples of popular pseudo-elements.</p>

<h4>::first-letter</h4>

<p>You can use first-letter to change the color of just the first letter
of each of the three points in the example text.</p>

<h4>HTML code:</h4>

<pre>  &lt;!DOCTYPE html&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;link rel="stylesheet" href="pseudo4.css"&gt;
      &lt;/head&gt;
    &lt;body&gt; 
      &lt;ul&gt;
        &lt;li&gt; Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. &lt;/li&gt; 
            &lt;li&gt;The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.&lt;/li&gt; 
        &lt;li&gt;
        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.&lt;/li&gt; 
      &lt;/ul&gt;
    &lt;/body&gt; 
  &lt;/html&gt;</pre>

<h4>CSS code:</h4>

<pre>  li::first-letter { 
 
  color:coral; 
 
  font-size: 1.3em; 
 
  font-weight: bold; 
 
  line-height: 1; 
  }</pre>

<h4>Output</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 183. sample output  (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image183.png?raw=true"
  alt="Sample output."
  style="width:35%;" />
</p>

<p>Although the code only changed the first letter of each bullet point,
it makes a big difference in terms of presentation. Now let’s change the
font in a different way.</p>

<h4>::first-line</h4>

<p>First-line will change the complete first line of each of the bullet
points to light sea green.</p>

<h4>CSS code:</h4>

<pre>  ul{
    list-style-type: none;
  }
 
  li::first-line {
    color: lightseagreen;
    text-decoration: underline;
    line-height: 1;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 184. sample output  (xx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image184.png?raw=true"
  alt="Sample output."
  style="width:35%;" />
</p>

<p>Because it’s only the first line of each bullet point, it almost
functions like dividers between the three different points instead of
having to rely on bullets.</p>
<p>Note that the contents of the line to which this pseudo-element is
applied will change as you increase or decrease the size of your
viewport.</p>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 185. enlarged sample output (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image185.png?raw=true"
  alt="."
  style="width:35%;" />
</p>

<h4>::selection</h4>

<p>Selection is another useful pseudo-element. For example, you may use
it when you are taking notes on your device because it allows you to
highlight specific text. The effect of it becomes obvious only after the
user selects content. On web pages today, you will typically see
inverted colors from white-black to black-white when selecting a portion
of text.</p>

<h4>CSS code:</h4>

<pre>  ul{
    list-style-type: none;
  }
 
  li::selection {
    color:brown;
    background-color: antiquewhite;
    line-height: 1;
  }</pre>

<p>Here is an example of a selection of text.</p>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~ 186. example of same text selected and highlighted (xxx) ~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image186.png?raw=true"
  style="width:50%;"
  alt="Output for selection of text display" />
</p>

<p>And another example of the same text but with a different section
selected and highlighted.</p>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 187. different highlights (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image187.png?raw=true"
  alt="Highlight different segments."
  style="width:35%;" />
</p>

<p>Different segments of the text are highlighted depending on the text
that is selected at any given point.</p>

<h4>::marker </h4>

<p>Markers are typically used to add style elements to a list, for
instance, to color bullet points. For example, you can enhance the user
experience when you use a marker in the following way.</p>

<pre>  CSS code:
  li::marker {
    color: cornflowerblue;
    content: '&lt;&gt; ';
    font-size: 1.1em;
  }</pre>

<h4>Output</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 188. change bullet shapes (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image188.png?raw=true"
  alt="Change bullet shapes."
  style="width:35%;" />
</p>

<p>Now the bullet points are cornflower blue and they have the shape
specified in the code.</p>

<h4>::before and ::after</h4>

<p>One more pair of pseudo-elements are the <strong>::before</strong>
and <strong>::after</strong> pseudo-elements. They allow you to add
content before and after an element on which they are allowed. In other
words, new content can be added to a page without adding HTML code for
it. You can also add styling options for this content. Let’s do an
example where text is added both before and after some cooking
guidelines to identify them as important tips.</p>

<h4>HTML code:</h4>

<pre>  &lt;body&gt;
    &lt;p id="tips"&gt; Don't rinse your pasta after it is drained. &lt;/p&gt;
    &lt;p&gt; Slice the tomatoes. Take the extra efforts to seed them. &lt;/p&gt;
    &lt;p id="tips"&gt; Peel and seed large tomatoes. &lt;/p&gt;
  &lt;/body&gt;</pre>

<h4>CSS code:</h4>

<pre>  #tips::before{
    background: darkkhaki;
    color:darkslategray;
    content: "Tip:";
    padding-left: 3px;
    padding-right: 5px;
    border-radius: 10%;
  }
 
  #tips::after{
    background:darkkhaki;
    color:darkslategray;
    content: "!!";
    padding-right: 5px;
    border-radius: 20%;
  }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 189. tips and exclamations highlighted (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image189.png?raw=true"
  alt="Selection of texts preceding and following a statement"
  style="width:35%;" />
</p>

<p>The “content” property is where the text for the guidelines goes. The
word “tip” has been added before each guideline thanks to the rules
added for <strong>tips::before</strong>. And, each of the three
guidelines now has two exclamation marks after them thanks to the rules
added for <strong>tips::after</strong>. Note how the second &lt;p&gt;
element inside the HTML code remains unaffected. You don’t have to use
after and before together like this, but sometimes it is useful to
combine them.</p>
<p>The examples covered here illustrate that adding simple code for
pseudo-elements can greatly enhance the appearance of websites. There
are plenty of other pseudo-elements and some of them are more popular
than others. You can follow your own style and explore the creative
possibilities that pseudo-classes and pseudo-elements offer.</p>

<h4>Practical use of pseudo</h4>

<p>By now you should know that developers use pseudo-classes to style
and make web pages more interactive.</p>
<p>In this section, you will explore pseudo-classes that you can use to
style links on web pages, namely web-link states.</p>
<p>Although, you can use web-link states for many functionalities,
developers often use them to style the color of links that a user
already opened.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 190. home and who we are (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image190.png?raw=true"
  alt="Home and Who We Are tags."
  style="width:35%;" />
</p>

<p>For instance, a HTML file can have two a tags, each with its own href that links to a different 
page of a website.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 191. css for home and who we are (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image191.png?raw=true"
  alt="CSS for Home and Who We Are tag."
  style="width:35%;" />
</p>
  
<p>To give the links their initial color, you can use the link pseudo-class selector, and 
to let the links change color, once a user has visited these pages, you can use the
visited pseudo-class selector.</p>
<p>But if you're using multiple pseudo-classes for a specific element,
there is an important rule to keep in mind.</p>
<p>The order in which you apply pseudo-classes in a document determines
which style will be displayed.</p>
<p>So be careful not to accidentally overwrite a style you want to
set.</p>
<p>Developers use the acronym LVHA to remind them of the order that they
need to follow when writing pseudo-class rules.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 192. link, visited, hover, active (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image192.png?raw=true"
  alt="Link, Visited, Hover, and Active."
  style="width:15%;" />
</p>

<p>LVHA stands for link, visited, hover, active. Always apply pseudo-class styles 
in the correct order. First link, then visited, next hover, and lastly active. 
Now that you know more about web-link states, let's explore how to use the link, 
visited, hover, and active pseudo-classes. Additionally, you will learn two more 
effects that you can create with the hover pseudo-class.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 193. pseudo_links.html with tags (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image193.png?raw=true"
  alt="pseudo_links.html with tags."
  style="width:50%;" />
</p>

<p>In the pseudo_links.html file, I added three tags: a heading tag,
followed by a paragraph tag, and another paragraph tag.
In the heading tag, I added the name of the restaurant, Little Lemon,
and the first paragraph tag has a link to their Instagram page.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 194. pseudo_links.css (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image194.png?raw=true"
  alt="CSS file pseudo_links.css."
  style="width:25%;" />
</p>

<p>Now I go to my CSS code by clicking on the pseudo_links.css file at the top of 
my screen.</p>
<p>In this file, I already added properties related to the pseudo-classes we discussed 
previously, namely link, visited, hover, and active.</p>
<p>To display the output of this code, I moved back to my HTML file and
click the "View" icon at the top right of my screen.</p>
<p>By default, the link to the Little Lemon Instagram page displays in a blue color 
because I set it to blue with the link pseudo-class in the CSS code.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 195. pseudo-links example (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image195.png?raw=true"
  alt="Pseudo-class links example."
  style="width:25%;" />
</p>

<p>As expected, when I move the mouse over the link, the color changes
to green because I added green as the value of the color attribute in
the hover pseudo-class.</p>
<p>Let's test what happens when I click and hold the link. It changes to
white text on a black background, just like defined with the active
pseudo-class property.</p>
<p>When I click on the link to visit the Little Lemon Instagram page,
the system asked me to connect to an external source, since I am using
Visual Studio Code.</p>
<p>I click the "Cancel" option for now.</p>
<p>But after I visit the link, the color of the link will change to
violet because I defined it to do that with the visited
pseudo-class.</p>
<p>I'm now going to demonstrate how you can use the pseudo-class hover.</p>
<p>To do this, I use the pseudoshadow.html file I created previously.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 196. hover effect with pseudo-shadow (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image196.png?raw=true"
  alt="Hover effect with pseudo-class."
  style="width:50%;" />
</p>

<p>In this file, I added four paragraph tags, each belonging to a class called textual.</p>
<p>I also added random text, commonly used in publishing and graphic design as placeholder text.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 197. pseudo-class hover and shadow effects (xxx) ~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image197.png?raw=true"
  alt="Pseudo-class hover and shadow effects."
  style="width:25%;" />
</p>

<p>The CSS code that I added is fairly simple.</p>
<p>The first property defines the properties of the textual class.</p>
<p>The second property defines the effect that the pseudo-class hover
will have on the textural class.</p>
<p>For the hover pseudo-class, I use the shorthand for a box-shadow property.</p>
<p>As you've seen earlier, box-shadow adds one or more shadows to an element.</p>
<p>The horizontal offset is set to five pixels, the vertical offset is
set to zero pixels, the blur radius is set to 25 pixels, and the color
of the shadow is set to black.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 198. offset and box-shadow example (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image198.png?raw=true"
  alt="Offset and box-shadow example, Little Lemon."
  style="width:50%;" />
</p>

<p>I moved back to my HTML file to output this code and click on the "View" icon.</p>
<p>The Little Lemon page with blocks of texts displays.</p>
<p>The text looks like regular blocks of texts.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 199. hover pseudo-class (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image199.png?raw=true"
  alt="Hover pseudo-class."
  style="width:50%;" />
</p>

<p>But when I hover over a block of code with my mouse, it gets
highlighted with a box-shadow around the edges.</p>
<p>I get the same effect when I hover over any other block of text as
all the blocks of texts belong to the same textual class.</p>
<p>This is an interesting effect that is simple to create with the help
of the hover pseudo-class.</p>
<p>In this section, you learned how to use pseudo-classes like web-link
states to improve the interactivity of web pages.</p>
<p>You also explored additional effects that you can create with the
hover effect.</p>

<h4>CSS Pseudo cheat sheet</h4>

<h4>Simple selectors</h4>

<table>
<colgroup>
<col style="width: 31%" />
<col style="width: 28%" />
<col style="width: 39%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Selector</strong></th>
<th><strong>Syntax</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Element</td>
<td>element</td>
<td><p><strong>div {</strong></p>
<p><strong>}</strong></p></td>
</tr>
<tr class="even">
<td>Class</td>
<td>.class</td>
<td><p><strong>.alpha { }</strong></p></td>
</tr>
<tr class="odd">
<td>ID</td>
<td>#id</td>
<td><p><strong>#alpha { }</strong></p></td>
</tr>
<tr class="even">
<td>Universal</td>
<td>*</td>
<td><p><strong>* { }</strong></p></td>
</tr>
</tbody>
</table>

<h4>Variations of simple selectors:</h4>

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 24%" />
<col style="width: 22%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Elements</strong></th>
<th><strong>Syntax</strong></th>
<th><strong>Example</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Two classes</td>
<td>.first-class.second-class</td>
<td><strong>.alpha.beta { }</strong></td>
<td>All elements with classes alpha and beta</td>
</tr>
<tr class="even">
<td>Element and class</td>
<td>element.class</td>
<td><strong>p.alpha { }</strong></td>
<td>All alpha class elements inside &lt;p&gt;</td>
</tr>
<tr class="odd">
<td>Two elements</td>
<td>element, element</td>
<td><strong>p, div { }</strong></td>
<td>All &lt;p&gt; and &lt;div&gt; elements</td>
</tr>
<tr class="even">
<td>Two elements</td>
<td>element element</td>
<td><strong>p div { }</strong></td>
<td>All &lt;div&gt; elements inside &lt;p&gt;</td>
</tr>
</tbody>
</table>

<h4>Descendant selectors/combinators:</h4>

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 23%" />
<col style="width: 18%" />
<col style="width: 37%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Selector</strong></th>
<th><strong>Syntax</strong></th>
<th><strong>Example</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Descendant</td>
<td>element element</td>
<td><strong>div p { }</strong></td>
<td>All &lt;p&gt; descendants of &lt;div&gt;</td>
</tr>
<tr class="even">
<td>Child</td>
<td>element&gt;element</td>
<td><strong>div &gt; p { }</strong></td>
<td>All &lt;p&gt; direct descendants of &lt;div&gt;</td>
</tr>
<tr class="odd">
<td>Adjacent Sibling</td>
<td>element+element</td>
<td><strong>div + p { }</strong></td>
<td>&lt;p&gt; element directly after &lt;div&gt;</td>
</tr>
<tr class="even">
<td>General Sibling</td>
<td>element~element</td>
<td><strong>div ~ p { }</strong></td>
<td>All &lt;p&gt; element iterations after &lt;div&gt;</td>
</tr>
</tbody>
</table>

<h4 id="attribute-selectors">Attribute selectors:</h4>

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 30%" />
<col style="width: 44%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Selector</strong></th>
<th><strong>Syntax</strong></th>
<th><strong>Example</strong></th>
</tr>
<tr class="odd">
<th><strong>Pseudo-class</strong></th>
<th><strong>Example</strong></th>
<th><strong>Description of selection</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[attribute]</td>
<td><p><strong>[href] {</strong></p>
<p><strong>}</strong></p></td>
<td>Selects all elements with a href attribute</td>
</tr>
<tr class="even">
<td>[attribute=value]</td>
<td><p><strong>[lang="fr"] {</strong></p>
<p><strong>}</strong></p></td>
<td>Selects all elements with lang attribute that has a value of
"fr"</td>
</tr>
<tr class="odd">
<td>[attribute~=value]</td>
<td><p><strong>[input~=hello] {</strong></p>
<p><strong>}</strong></p></td>
<td>Elements with input attribute containing the whitespace separated
substring "hello"</td>
</tr>
<tr class="even">
<td>[attribute|=value]</td>
<td><p><strong>[lang|=en] {</strong></p>
<p><strong>}</strong></p></td>
<td>Elements with lang attribute value equal to "en" or "en-"(en
hyphen)</td>
</tr>
<tr class="odd">
<td>[attribute^=value]</td>
<td><p><strong>a[href^="https"] {</strong></p>
<p><strong>}</strong></p></td>
<td>Every &lt;a&gt; element with href attribute value begins with
"https"</td>
</tr>
<tr class="even">
<td>[attribute$=value]</td>
<td><p><strong>a[href$=".docx"] {</strong></p>
<p><strong>}</strong></p></td>
<td>Every &lt;a&gt; element with href attribute value ends with
".docx"</td>
</tr>
<tr class="odd">
<td>[attribute*=value]</td>
<td><p><strong>a[href*="meta"] {</strong></p>
<p><strong>}</strong></p></td>
<td>Every &lt;a&gt; element with href attribute value has substring
"meta"</td>
</tr>
<tr class="even">
<td>:active</td>
<td><strong>a:active { }</strong></td>
<td>All active links </td>
</tr>
<tr class="odd">
<td>:checked</td>
<td><strong>input:checked { }</strong></td>
<td>All the checked &lt;input&gt; elements</td>
</tr>
<tr class="even">
<td>:default</td>
<td><strong>input:default { }</strong></td>
<td>All default &lt;input&gt; elements</td>
</tr>
<tr class="odd">
<td>:disabled</td>
<td><strong>input:disabled { }</strong></td>
<td>All disabled &lt;input&gt; elements</td>
</tr>
<tr class="even">
<td>:empty</td>
<td><strong>div:empty { }</strong></td>
<td>All the &lt;div&gt; elements with no children</td>
</tr>
<tr class="odd">
<td>:enabled</td>
<td><strong>input:enabled { }</strong></td>
<td>All the enabled &lt;input&gt; elements</td>
</tr>
<tr class="even">
<td>:first-child</td>
<td><strong>p:first-child { }</strong></td>
<td>All the &lt;p&gt; elements who are the first child of a parent
element</td>
</tr>
<tr class="odd">
<td>:first-of-type</td>
<td><strong>p:first-of-type { }</strong></td>
<td>All the &lt;p&gt; element who are the first &lt;p&gt; element of a
parent element</td>
</tr>
<tr class="even">
<td>:focus</td>
<td><strong>input:focus { }</strong></td>
<td>Input element under focus</td>
</tr>
<tr class="odd">
<td>:fullscreen</td>
<td><strong>:fullscreen { }</strong></td>
<td>The element in full-screen mode</td>
</tr>
<tr class="even">
<td>:hover</td>
<td><strong>p:hover { }</strong></td>
<td>Action effect on mouse hover</td>
</tr>
<tr class="odd">
<td>:invalid</td>
<td><strong>input:invalid { }</strong></td>
<td>Input elements with an invalid value</td>
</tr>
<tr class="even">
<td>:last-child</td>
<td><strong>p:last-child { }</strong></td>
<td>All the &lt;p&gt; elements who are the last child of a parent
element</td>
</tr>
<tr class="odd">
<td>:last-of-type</td>
<td><strong>p:last-of-type { }</strong></td>
<td>All the &lt;p&gt; elements who are the last &lt;p&gt; element of a
parent element</td>
</tr>
<tr class="even">
<td>:link</td>
<td><strong>a:link { }</strong></td>
<td>All unvisited links</td>
</tr>
<tr class="odd">
<td>:not(<em>selector</em>)</td>
<td><strong>:not(div) { }</strong></td>
<td>All the elements that are not a &lt;div&gt; element</td>
</tr>
<tr class="even">
<td>:nth-child(<em>n</em>)</td>
<td><strong>div:nth-child(3) { }</strong></td>
<td>All the &lt;p&gt; elements that are the third child of a parent
element</td>
</tr>
<tr class="odd">
<td>:nth-last-child(<em>n</em>)</td>
<td><strong>div:nth-last-child(3) { }</strong></td>
<td>All the &lt;div&gt; elements which are the third child of a parent
element, counting from last child element</td>
</tr>
<tr class="even">
<td>:nth-last-of-type(<em>n</em>)</td>
<td><strong>p:nth-last-of-type(2) { }</strong></td>
<td>The second sibling from the last child of a parent element.</td>
</tr>
<tr class="odd">
<td>:nth-of-type(<em>n</em>)</td>
<td><strong>p:nth-of-type(2) { }</strong></td>
<td>The second sibling of a parent element.</td>
</tr>
<tr class="even">
<td>:only-of-type</td>
<td><strong>p:only-of-type { }</strong></td>
<td>All the &lt;p&gt; elements which are only &lt;p&gt; elements inside
its parent</td>
</tr>
<tr class="odd">
<td>:only-child</td>
<td><strong>p:only-child { }</strong></td>
<td>All the &lt;p&gt; elements which are only child of a parent
element</td>
</tr>
<tr class="even">
<td>:optional</td>
<td><strong>input:optional { }</strong></td>
<td>The input elements with no "required" attribute</td>
</tr>
<tr class="odd">
<td>:required</td>
<td><strong>input:required { }</strong></td>
<td>Selects input elements with the "required" attribute specified</td>
</tr>
<tr class="even">
<td>:root</td>
<td><strong>:root { }</strong></td>
<td>The Root element of document</td>
</tr>
<tr class="odd">
<td>::selection</td>
<td><strong>::selection { }</strong></td>
<td>The portion of an element that is selected by a user</td>
</tr>
<tr class="even">
<td>:valid</td>
<td><strong>input:valid { }</strong></td>
<td>All the input elements with a valid value</td>
</tr>
<tr class="odd">
<td>:visited</td>
<td><strong>a:visited { }</strong></td>
<td>Selects all visited links</td>
</tr>
</tbody>
</table>

<h4 id="pseudo-element-selectors">Pseudo-element selectors:</h4>

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 33%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Syntax</strong></th>
<th><strong>Example</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>::after</td>
<td><strong>p::after { }</strong></td>
<td>Inserts content after content of &lt;p&gt; element</td>
</tr>
<tr class="even">
<td>::before</td>
<td><strong>p::before { }</strong></td>
<td>Inserts content before content of &lt;p&gt; element</td>
</tr>
<tr class="odd">
<td>::first-letter</td>
<td><strong>p::first-letter { }</strong></td>
<td>Selects first letter of every &lt;p&gt; element</td>
</tr>
<tr class="even">
<td>::first-line</td>
<td><strong>p::first-line { }</strong></td>
<td>Selects first line of every &lt;p&gt; element</td>
</tr>
<tr class="odd">
<td>::placeholder</td>
<td><strong>input::placeholder { }</strong></td>
<td>Selects input elements with "placeholder" attribute specified</td>
</tr>
<tr class="even">
<td>::marker</td>
<td><strong>::marker { }</strong></td>
<td>Selects markers in a list</td>
</tr>
</tbody>
</table>

<h3>Additional resources</h3>

<p>Here is a list of resources about selectors, pseudo-classes and
pseudo-elements in HTML and CSS that may be helpful as you continue your
learning journey.</p>
<p><a
href="https://www.geeksforgeeks.org/10-css-selectors-every-developer-should-know/">Commonly
used selectors</a></p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators">Combinator
selectors</a></p>
<p><a
href="https://www.w3schools.com/cssref/css_selectors.asp">Comprehensive
list of selectors</a></p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Comprehensive
list of pseudo-classes</a></p>
<p><a
href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">Comprehensive
list of pseudo-elements</a></p>

<p>What is an effect?</p>

<p>Most popular websites have numerous animation effects.</p>
<p>You might be so used to effects that you fail to notice them while
using the web.</p>
<p>Think of sliding galleries, hover over or cursor effects, applying
effects to web pages is an essential skill for any front end
developer.</p>
<p>In this section, you will learn what effects are and briefly explore
common effects being used currently.</p>
<p>So, what exactly is an effect?</p>
<p>The formal definition of the word effect is a change that is a result
or consequence of an action or other cause animations are a type of
effect that has brought life like quality to web pages and today they
are an all pervasive part of web development.</p>
<p>In other words, animations are graphics in motion, transitioning over time.</p>
<p>The idea of animation had been around for many years before
technology was good enough to integrate it into online experiences.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 200. animation: graphics in motion (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image200.png?raw=true"
  alt="Animation: Graphics in Motion."
  style="width:50%;" />
</p>

<p>The graphics interchange form or ‘gifs’ can arguably be labeled as
the first attempt to bring effects to web pages.</p>
<p>The first gif ever created was of a moving airplane by Steve
Wilhite.</p>
<p>In 1987, gifs were followed by flash animations.</p>
<p>Flash made it possible to add audio and video components as well as
create dynamic websites.</p>
<p>But flash needed a special browser plug into work and that was a
major limitation.</p>
<p>When CSS came into use, it provided a simple, easy to learn solution
that also made it possible to manipulate formats such as scalable vector
graphics or SVG s.</p>
<p>There are plenty of programs and libraries that front end developers
can use to add animation to websites today libraries such as J. Query
and Pop Motion add fantastic visuals to sites.</p>
<p>The downside is that they are hard to learn and can increase the
development time of websites considerably.</p>
<p>C S s, on the other hand, is still popular for adding effects to
websites because it is easy to learn and simplifies web development when
it comes to basic animations and effects in general, CSS still offers
more value in relation to time and resources.</p>
<p>With some practice, CSS can produce surprisingly good effects.</p>
<p>The possibilities for creating effects with CSS are endless.</p>
<p>Yet some effects are more popular than others.</p>
<p>You will now discover a few that you can effectively create with
CSS.</p>
<p>The hover effect which you learned about in the previous lesson is
possibly one of the most frequently used effects on web pages.</p>
<p>Today developers use it to show that an element is matched by
highlighting it in some way when the mouse hovers over it.</p>
<p>Examples include the lightening or darkening of an element or even
other effects that highlight the placement of the cursor.</p>
<p>Another popular effect is changing the appearance of the cursor
instead of the conventional arrows.</p>
<p>You can add animated effects that change the color or gradient and so
on.</p>
<p>You are surely familiar with sliding galleries and slide shows.</p>
<p>They are commonly used to display collections of images or text boxes
and then you get video backgrounds which are commonly added to the top
of the screen to illustrate movement, an effect that gained popularity
since its introduction is the parallax effect.</p>
<p>It gives users the perception of depth and dimension with foreground
elements moving faster than the background elements. It is likely that
you are familiar with the back to the top effect.</p>
<p>It is a simple element like a button that enables quickly scrolling
all the way to the top of the page.</p>
<p>From the current button placement, developers commonly used element
and color transitions to emphasize focus on objects.</p>
<p>As users scroll through web page, full screen snapping is a quick
transition from one page to another that occurs automatically while
users are scrolling.</p>
<p>Now that you are familiar with some popular effects, let's briefly
visit the pros and cons of adding effects on web pages.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 201. effects: pros and cons (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image201.png?raw=true"
  alt="Effects: Pros and Cons."
  style="width:50%;" />
</p>

<p>The primary driving factor of web pages these days is to attract the
attention of user web pages that use animation and effects optimally
keep the attention of users without overwhelming them.</p>
<p>Effects help highlight the special features on a given page.</p>
<p>CSS styling and effects improve the creativity and aesthetics of
websites.</p>
<p>But too much of it can also lead to distraction and drive users away
from the page.</p>
<p>Besides more animations, increase the size of your CSS files which
can cause your web page to load slowly in areas with low bandwidth.</p>
<p>Nonetheless, effects improve online experiences in general and are
especially used to create intuitive navigation.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ 202. effects: key takeaways (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image202.png?raw=true"
  alt="Effects/Animation: key takeaways."
  style="width:25%;" />
</p>

<p>You should now understand what effects and animations are.</p>
<p>You also got a quick overview of the history of effects and the most
popular effects used on the Web.</p>
<p>Today, lastly, you explore the benefits and disadvantages of adding
effects to websites. Websites.</p>
<p>Without effects are not only dull, but users also have a hard time
finding their way around such sites, mastering CSS effects will enable
you to create Web pages that users love to use.</p>

<h4>Text effects</h4>

<p>Have you ever opened a website with a lot of texts and thought,
Wow!</p>
<p>There are two very different reasons you might have that
reaction.</p>
<p>Texts or words can make a website engaging and interesting, but they
can also make you look dull and cause users to lose attention.</p>
<p>With the help of CSS, you can make the most of texts by adding
interesting effects.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 203. text-overflow and ellipsis (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image203.png?raw=true"
  alt="Text-overflow and ellipsis."
  style="width:50%;" />
</p>

<p>First, I will explain how to use the text-overflow property that
determines how overflowing content is displayed on your website.</p>
<p>The first example sets the text-overflow property with the value
ellipsis.</p>
<p>Let's take note of two CSS properties for the texts class,
white-space and text-overflow.</p>
<p>The white-space CSS property controls how white-space inside an
element is handled.</p>
<p>The white-space property in this code has a value of no wrap.</p>
<p>The text-overflow property specifies what to do with the content if
it overflows its container.</p>
<p>It has several possible values such as hidden to hide the content, or
scroll to add a scroll bar.</p>
<p>It is important to note that the text-overflow property here is set
to ellipsis.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 204/205. ellipsis property example (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image204.png?raw=true"
  alt="Ellipsis property example."
  style="width:40%;" />
<img class="displayed"
  src="/images/image205.png?raw=true"
  alt="Ellipsis property example."
  style="width:40%;" />
</p>

<p>An ellipsis is three dots that represent the texts that is clipped.</p>
<p>If I hover over the overflowing text which is present inside, the hidden text is displayed.</p>
<p>As soon as I move the cursor away from the block, the text is again
substituted by the ellipsis.</p>
<p>This is very similar to the second example, which sets the value of
text-overflow to clip.</p>
<p>In this example, the additional content is truncated to fit within
the limits of the box. (no ellipsis).</p>
<p>If I hover over with the cursor, the clipped text is displayed.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 206.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image206.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>In the third example, I demonstrate how to create vertical text.</p>
<p>In the output, the words 12-15 items are placed vertically within the
otherwise horizontal texts.</p>
<p>I do this by putting those words inside a separate p tag with class named vert.</p>
<p>Then in the CSS code, I set the writing mode property to be vertical-rl.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 207.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image207.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>The next example demonstrates the word wrap property.</p>
<p>Word wrap determines how the words in a paragraph break up and wrap
onto the next slide.</p>
<p>This property has different values such as break word, normal,
initial, and a few others.</p>
<p>In this example, I use the value break word.</p>
<p>As a result, the words illustration and property are both broken up
across multiple lines.</p>
<p>In the next two examples, I will add text effects using simple CSS
code.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 208. little lemon logo (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image208.png?raw=true"
  alt="Little Lemon logo."
  style="width:25%;" />
</p>

<p>In this example, I use a property called text shadow, which has a shorthand with four values.</p>
<p>The first value is the x-coordinate, which represents the horizontal shadow.</p>
<p>The second is the y-coordinate, which represents the vertical shadow.</p>
<p>The third is the blur radius, and the fourth is the shadow color.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 209. class='glow' with shadow (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image209.png?raw=true"
  alt="Text Effect Example of glow and shadow using css class."
  style="width:25%;" />
</p>

<p>This next example explores an extension of the same idea.</p>
<p>My HTML code has two heading tags, each with the class name glow.</p>
<p>In the corresponding CSS code, I've added the text shadow effects for
that class.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 210.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<img class="displayed"
  src="/images/image210.png?raw=true"
  alt="."
  style="width:15%;" />

<p>I can use the output to determine whether I need to adjust the color effects until 
I'm happy with it.</p>
<p>That's all my examples. In this section, you learned how to add effects to your text using 
a few simple rules in CSS.</p>

<h4>Text effects cheat sheet</h4>

<p>The effects developers use on text items on a web page are chosen
mainly because of their styling and layout style. Interesting effects
can be created by combining these with other CSS properties. </p>
<p>The visual representation of text content can be changed by four main
properties: text-transform, font-style, font-weight and
text-decoration.</p>

<table>
<colgroup>
<col style="width: 19%" />
<col style="width: 31%" />
<col style="width: 49%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Property </strong></th>
<th><strong>Values</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Text-transform</td>
<td>None, uppercase, lowercase, capitalize, full-width</td>
<td>Modify text properties</td>
</tr>
<tr class="even">
<td>Font-style</td>
<td>Normal, italic, oblique</td>
<td>Font styling options such as italics </td>
</tr>
<tr class="odd">
<td>Font-weight</td>
<td>Normal, weight, lighter, bolder, 100-900</td>
<td>Other font styling options like change of emphasis such as making
text bold</td>
</tr>
<tr class="even">
<td>Text-decoration</td>
<td>None, underline, overline, line-through</td>
<td>Shorthand for auxiliary elements added to text using other
properties such as text-decoration-line</td>
</tr>
</tbody>
</table>
<p>The additional properties that help configure styling effects are
below.</p>
<table>
<colgroup>
<col style="width: 28%" />
<col style="width: 71%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Text-align</strong></th>
<th><strong>For horizontal alignment of text</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Text-align-last</td>
<td>Alignment for the last line when text set to justify</td>
</tr>
<tr class="even">
<td>Text-combine-upright</td>
<td>Multiple characters into the space of a single character placed
upright like in Mandarin</td>
</tr>
<tr class="odd">
<td>Text-decoration-color</td>
<td>Color configuration of the text-decoration</td>
</tr>
<tr class="even">
<td>Text-decoration-line</td>
<td>Line type in text-decoration such as underline, overline and so
on</td>
</tr>
<tr class="odd">
<td>Text-decoration-style</td>
<td>Styles added to lines under text such as wavy, dotted and so on</td>
</tr>
<tr class="even">
<td>Text-decoration-thickness</td>
<td>Thickness of the decoration line</td>
</tr>
<tr class="odd">
<td>Text-emphasis</td>
<td>Shorthand for other properties such as color and style </td>
</tr>
<tr class="even">
<td>Text-indent</td>
<td>The indentation of the first line </td>
</tr>
<tr class="odd">
<td>Text-justify</td>
<td>Specifies the justification method used when text-align is
"justify"</td>
</tr>
<tr class="even">
<td>Text-orientation</td>
<td>Orientation of text in a line such as sideways, upright and so
on</td>
</tr>
<tr class="odd">
<td>Text-shadow</td>
<td>Adds shadow to text </td>
</tr>
<tr class="even">
<td>Text-underline-position</td>
<td>Declare position of underline set using the text-decoration
property</td>
</tr>
</tbody>
</table>
<p>Other than these, there are some more properties that help modify the
alignment and define the scope of text with their containers. </p>

<table>
<colgroup>
<col style="width: 18%" />
<col style="width: 34%" />
<col style="width: 47%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Property </strong></th>
<th><strong>Values</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Text-overflow</td>
<td>Clip, ellipsis</td>
<td>Determines overflow behavior of text with the container</td>
</tr>
<tr class="even">
<td>Word-wrap</td>
<td>Normal, anywhere, break-word</td>
<td>Applies to inline elements, alias for overflow-wrap</td>
</tr>
<tr class="odd">
<td>Word-break</td>
<td>Normal, break-all, keep-all, break-word</td>
<td>Used for long words to decide if words should break or overflow</td>
</tr>
<tr class="even">
<td>Writing-mode</td>
<td>Horizontal-tb, vertical-lr, vertical-rl</td>
<td>Can set the text direction vertical or horizontal</td>
</tr>
</tbody>
</table>

<p>The properties mentioned are ones that can be used for giving effects to text.</p>

<h4>CSS Transforms and transitions</h4>

<p>So far, you have learned how animation can be used to add
interactivity and responsiveness to a web page.</p>
<p>Eventually, you'll be able to create amazing animations with CSS.</p>
<p>But to get started, this video will introduce you to two properties
with which you can create basic animations.</p>
<p>In this module, you will learn how to use the transform and
transition properties.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 211.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image211.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>The Syntax of the transform and transition properties are similar.</p>
<p>You simply add transform or transition and the value.</p>
<p>But what exactly do these properties do?</p>
<p>The transform property modifies the spatial position of an element.</p>
<p>For instance, it can change its scale and angle, but these changes
are not very effective or user friendly because they are instantaneous
to really create the illusion of motion.</p>
<p>You need to control the speed of this effect.</p>
<p>To do this, developers use the transition property in conjunction
with the transformed property.</p>
<p>Let's explore how these two properties work together.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 212.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image212.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>For example, you can set up your H one elements to rotate zero
degrees by default, but by using the hover pseudo class and the
transform property, you can let the element rotate to 20 degrees when
the mouse hovers over it.</p>
<p>Without a transition, the rotation will be instant.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 213.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image213.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>But by adding the transition property with the value transform to s
the rotation will animate over two seconds.</p>
<p>Now that you know the basics about the transform and transition
properties, let's explore a practical example.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 214.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image214.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>I already set up an html file that contains a div tag with the class
container and in it to other div tags.</p>
<p>The first div tag contains the letter A with a class called A.</p>
<p>The second contains the letter B with a class called B.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 215.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image215.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>Let's view the CSS file.</p>
<p>It has two class selectors dot A and dot B and each has a margin property.</p>
<p>This is just to add a space in between the developments.</p>
<p>First, I add the transform property to the A class.</p>
<p>There are a number of key word and function values inside this property.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 216.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image216.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>I choose skew X from the suggestion list that appears this will tilt the letter on its X access.</p>
<p>You can also choose to skew it on its Y axis or even on both axes. I
add a value of 20 degrees.</p>
<p>Next, I add a transformed property to the B.</p>
<p>Class as well.</p>
<p>But this time I use the keyword, rotate and add the value of 20
degrees.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 217.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image217.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>This will cause a different effect.</p>
<p>Let's inspect the output A display skew almost like an italic letter
but towards the other way be on the other hand looks normal but it is
turned sideways by 20 degrees.</p>
<p>Since these transform effects are instantaneous, you do not notice
them as they are applied to change this.</p>
<p>You need to add the transition property.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 218.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image218.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>I add the transition property to both classes with the value of five seconds.</p>
<p>This time you can notice how the letters transform because it happens slower.</p>
<p>Let's move on to a more complex example.</p>
<p>I open another html file with a class called box.</p>
<p>Inside a div tag element.</p>
<p>First, I will write the rules for the box, then I will add rules
using a hover pseudo class and grouping selectors to perform
transformations on the box.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 219.  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image219.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>The initial output will be a green box.</p>
<p>Let's go to the CSS file and write the rules for the box.</p>
<p>The first property I add for the box is display as grid.</p>
<p>Then I set the width and height to 240 pixels and also add a margin
of 100 pixels so that the box will display in the center of the output
screen.</p>
<p>Next, I add a background color with an RgB value.</p>
<p>Then I specified the border properties.</p>
<p>I add the border radius and give it a value of 12 pixels using
shorthand notation, I specify the border to be solid and add an RgB
value in hex format.</p>
<p>Finally, I set the border with 24 pixels.</p>
<p>These properties basically define the with style and color of the
border.</p>
<p>So far, the output is a light green box with a darker green
border.</p>
<p>Now let's move back to the CSS to add some effects.</p>
<p>I add a class selector for the box and then add the hover pseudo
class.</p>
<p>This is so that the transform effect that I will add.</p>
<p>Next will only happen when I hover over the box.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 220. transform2.css box and box hover (196) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image220.png?raw=true"
  alt="Transform box, rotate when hovering."
  style="width:25%;" />
</p>

<p>Let's add the transformed property.</p>
<p>This time I add, rotate around the Z axis, the Z axis is
perpendicular to the screen.</p>
<p>So, when I hover over the box it will rotate from my point of
view.</p>
<p>I add rotates at an angle of 60 degrees.</p>
<p>Let's inspect the output.</p>
<p>When I hover over the box it rotates 60 degrees.</p>
<p>Let's add a few more effects.</p>
<p>I add a light coral background color to the hover pseudo class.</p>
<p>When I hover over the box now it also changes the background
color.</p>
<p>Let's also change the opacity to 50%.</p>
<p>Now when I hover over the box it changes the opacity of the box too.
All these effects are fine but they happen too fast.</p>
<p>Just like in the first example of the letters, I need to add the
transition property.</p>
<p>If I want to slow down the transform effect, I add the value of two
seconds.</p>
<p>When I hover over the box.</p>
<p>This time the change happens gradually over a span of two seconds.
Well done.</p>
<p>You now know how to use the transform and transition properties in
this video, you learned how to create a basic animation using the
transform and transition properties in conjunction.</p>
<p>A number of different effects like these can be performed with the
help of the two properties, transform and transition and combining them
with pseudo classes such as hover active and others.</p>

<h4>CSS animation</h4>

<p>By now you should know the basics of CSS animation.</p>
<p>It's time to explore some more advanced properties and rules.</p>
<p>In this video, you will learn how to use the animation property in
combination with the @keyframes rule to create advanced animations.</p>
<p>When developers want to create complex animations, they use the
animation property.</p>
<p>But to control the execution of the steps of the animation, they use
the @keyframe rule.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 221. keyframe rule (197) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image221.png?raw=true"
  alt="Keyframe rule."
  style="width:20%;" />
</p>

<p>Next, let's explore the syntax of the @keyframe rule, and the animation property.</p>
<p>The @keyframe rule specifies the name of the animation, and the
individual keyframes for the animation.</p>
<p>You define each keyframe with a keyframe selector and CSS styles for
that keyframe.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 222. keyframe rule syntax (197) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image222.png?raw=true"
  alt="Keyframe rule syntax."
  style="width:20%;" />
</p>

<p>The @keyframe rule can also use the optional keywords, from and to, to show transitions.</p>
<p>The animation name links the animation to a specific keyframe rule.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 223. animation property (198) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image223.png?raw=true"
  alt="Animation property."
  style="width:20%;" />
</p>

<p>The animation property has a number of sub properties like animation name, 
animation delay, and so on.</p>
<p>You can use a shorthand CSS syntax to set all the sub properties of
the animation property.</p>
<p>But say you want one or more of them to have the default settings,
you simply leave them out.</p>
<p>However, each of the sub properties can be listed individually as well.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 224. html simple clock hour and minute (198) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image224.png?raw=true"
  alt="HTML Simple Clock with hour and minute."
  style="width:20%;" />
</p>

<p>To understand animation cues, let's explore a simple animation of a
clock with hour and minute hands.</p>
<p>The HTML code for the clock will consist of only three basic
elements, which are the div class called clock, and inside it, a div
class called minutes, and another div class called hours.</p>
<p>Take note how both hours and minutes have an additional common class
called hand. In order to let the clock work, you need this additional
hand class with its own CSS rules.</p>
<p>But since the focus of this lesson is to understand the animation
part of the CSS, the basic styling properties of the clock are not
covered now.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 225. css minutes and hours (198) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image225.png?raw=true"
  alt="CSS minutes and hours."
  style="width:20%;" />
</p>

<p>All that you need to know is that you create two classes, clock and hand, and insert style rules that
specify the basic layout and appearance of the clock and hands.</p>
<p>So far, the output of the CSS is a static blue clock face and red
hands with white borders.</p>
<p>Now, you can configure the animation for both the hour and minutes classes.</p>
<p>The only difference between the two will be the speed at which they change positions.</p>
<p>For the minutes class, you add the animation property with the value
of six seconds, infinite linear.</p>
<p>For the hours class, you add the animation property with the value of
cycle 60 seconds infinite linear.</p>
<p>These two rules set the animation name cycle to complete iterations
for respective timings over an infinite time duration and linear timing
function.</p>
<p>Since the other animation properties are not mentioned, they are set
to the default values.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 226. keyframes cycle from and to (199) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image226.png?raw=true"
  alt="Keyframe cycles from and to."
  style="width:20%;" />
</p>

<p>Finally, you can add the @keyframe rule.</p>
<p>Type @keyframes cycle, and then the two special keywords, namely from and to.</p>
<p>For the from keyword, add the transform property with the value of 
rotate zero degrees.</p>
<p>For the to keyword, add the transform property with the value of rotate 360 degrees.</p>
<p>Since keyframes is a type of rule in CSS, we will be adding these details inside curly braces.</p>
<p>There will be a follow-up reading about keyframes after this video.</p>
<p>What exactly does this CSS animation do?</p>
<p>Well, it uses the transform property to rotate the cycle associated
with both the hours and minute classes from the value of 0-360 degrees.</p>
<p>The combination of properties and rules will give a seamless appearance of a clock in continuous motion.</p>
<p>In this module, you've learned how to use the animation property and the @keyframe rule together to get a specific effect.</p>
<p>CSS offers endless creativity when it comes to animation.</p>
<p>The properties and rules you covered can be configured in many more ways.</p>
<p>For instance, you can combine them with other elements like images to
achieve amazing animations using purely CSS.</p>

<h4>CSS keyframes</h4>

<p>In this reading, you will become acquainted with the @keyframes rule
and you’ll learn how to use it with the animation property in CSS.</p>
<p>The rules covered so far are for alignment and styling of web pages
using CSS. Keyframes are a type of at-rule which are represented by the
'@' suffix.</p>
<p>At-rules are statements inside CSS that describe how to behave or
perform certain actions.</p>
<p>In line with that, keyframes are defined as '@keyframes' in the CSS
code.</p>
<p>@keyframes are part of the animation sequence and help in defining
the steps inside it.</p>
<p>Imagine an object on your web page moving from point A to point
B.</p>
<p>You can use the transition and transform properties to do that, but
animation sequences are used to accomplish more complex behaviors in an
easier way.</p>

<h4>from{} and to{} keywords and using percentages(%) syntax</h4>

<pre>  @keyframes animation-name {
    from {
      property-a: value-a;
    }
    to {
      property-a: value-b;
    }
  }</pre>

<p>The 'from' and 'to' keywords are used inside the @keyframes rule to
mark the transition of one or more properties and can be seen as the
start and end points of that transition. As can be seen from the syntax,
the values of ‘property-a’ changes from ‘value-a’ to ‘value-b’. To
expand on the use of ‘from’ and ‘to’, the @keyframes allows you to add
more steps to your animation by using a percentage that represents the
completion of the animation. </p>

<pre>  @keyframes identifier {
    0% {transform: rotate(100deg);}
    30% {opacity: 1;}
    50% {opacity: 0.50;}
    70% {opacity: 1;}
    100% {transform: rotate(50deg);}</pre>

<p>The different percentages used in the example demonstrate the
progression of the animation. Note that it doesn’t have to be the same
property that you modify in these steps. That's not possible using the
transition property, but you can do it with @keyframes. This flexibility
is what makes @keyframes so powerful. Another advantage is how these
animations can also loop infinitely, run forwards, reverse and
alternate.</p>
<p>@keyframes are tied in with the animation-name to which they are
going to be applied. To give an overview of the animation property, it
consists of other sub-properties. Of these, animation-name and
animation-duration must be defined while others such as timing-function,
delay, direction, fill-more, iteration-count and so on can be
added. </p>

<h4>Animation property shorthand:</h4>

<p>The shorthand for the animation property consists of the following
properties with their default values:</p>

<ul>
  <li>animation-name: none </li>
  <li>animation-duration: 0s </li>
  <li>animation-timing-function: ease </li>
  <li>animation-delay: 0s </li>
  <li>animation-iteration-count: 1 </li>
  <li>animation-direction: normal </li>
  <li>animation-fill-mode: none </li>
  <li>animation-play-state: running </li>
  <li>animation-timeline: auto </li>
</ul>

<p>If the values of any of these are not defined, you should assume that
they are the default. Of these, the first property of the animation-name
is what's used to tie it to the @keyframes rule.</p>
<p>Let’s now examine an example of how you can use @keyframes and the
animation property. </p>

<h4>Animation example</h4>

<h4>HTML code:</h4>

<pre>  &lt;body&gt;
    &lt;div class="box"&gt;&lt;/div&gt;
  &lt;/body&gt;

  &lt;/html&gt;</pre>

<h4>CSS code:</h4>

<pre>  body{
    padding: 30px;} 
    .box{ 
      background-color: lightcoral; 
      width: 50px;
      height: 50px; 
      animation: myanimation 3s infinite ease-in; 
    }
  @keyframes myanimation{
    from{width: 50px; 
    } 
    to{width: 100px; 
    }</pre>

<h4>And this is the output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 227/228. red rectangles (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image227.png?raw=true"
  alt="Red rectangle."
  style="width:100px;" />
<img class="displayed"
  src="/images/image228.png?raw=true"
  alt="Another red rectangle."
  style="width:100px;" />
</p>

<p>In the example, the width of the object changes from 50 pixels to 100
pixels over a span of 3 seconds and loops infinitely afterward.</p>
<p>This is a very simple example of how you can use the animation
property with the help of @keyframes rule to create your desired
animation.</p>
<p>If you modify this code and change the animation rules to
percentages, it will have the same output.</p>

<pre>  @keyframes myanimation{
    0%{width: 50px;
    }
    100%{width: 100px;
    }</pre>

<p>Now, let’s add an intermediary step at 50%.</p>

<pre>  @keyframes myanimation{
    0%{width: 50px;
    }
    50%{background-color: aquamarine;
      height: 20px;
    }
    100%{width: 100px;
    }</pre>

<h4>Output:</h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 229. brown rectangle (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image229.png?raw=true"
  alt="."
  style="width:25%;" />
</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 230. green rectangle (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image230.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>The output is drastically different now after adding just two lines
of code. Just like this, you can keep adding steps inside your
@keyframes rule to make it even more dynamic and add the desired
animation effects. Animation property and @keyframes rule can be used in
very creative ways to enhance a web page.</p>

<h4>Animation examples</h4>

<p>By now you should know that CSS offers many possibilities for
creating interesting animations.</p>
<p>But to make your animations more complex and exciting, you need to
have good control over the timing.</p>
<p>That's why you need to know how to work with keyframes.</p>
<p>In this video, you will learn how to do a basic keyframe animation in
CSS.</p>
<p>Previously, you learned how to animate a bouncing ball using the HTML
canvas element and JavaScript.</p>
<p>This time, you'll learn how to create the same animation using
CSS.</p>
<p>I opened Visual Studio Code and created my basic HTML structure in a
file named index.html.</p>
<p>In the head element, I added a link element to reference a CSS file
named styles.css.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 231. animation example (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image231.png?raw=true"
  alt="Animation example."
  style="width:25%;" />
</p>

<p>First, I'll add the HTML element that will be animated.
In this case, the element will represent the bouncing ball.
I add a div element to the body element and set its ID attribute to
ball.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 232. css keyframes and animation (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image232.png?raw=true"
  alt="CSS keyframes and animation."
  style="width:25%;" />
</p>

<p>Now I open styles.css.
First, I add the keyframes definition.
I'll name this animation bounce.
Next, I add the from keyword with open and closed curly brackets to
define the starting state of the animation.</p>

<p>The starting position should be the default position of the element,
so I add the transform property and set its value to translate 3D with
the coordinates 000.
These two values are the coordinates along the x, y, and z axes in 3D
space.</p>

<p>Next, I add the two keywords with open and closed curly brackets to
define the ending state of the animation.
The ending position should be 640 pixels right of the starting
position.
To do this, I add the transform property and set its value to
transform 3D with the coordinates 640 pixels 00.
This means that the element is translated by 640 pixels on the x-axis
and zero pixels on the y and z-axis.</p>

<p>Finally, I add a CSS rule for the ball. I use the ID selector to
select the ball element.
First, I need to add a set of properties to make the element render
as a ball.
To do this, I set the width and height properties to 80 pixels.
Then I set the border radius to 50 percent.
This will round the corners of the elements so much that it will
appear like a circle.</p>

<p>Finally, I set the background color property to #62687F to fill in
the color of the circle.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 233. ball in the top left corner (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image233.png?raw=true"
  alt="Ball/Circle in CSS."
  style="width:15%;" />
</p>

<p>I save the file and open index.html in live preview.
Great, the ball is rendering correctly.
Now to connect the animation to the element, I open styles.css
again.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 234. styles.css - animating ball (xxx) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image234.png?raw=true"
  alt="."
  style="width:25%;" />
</p>

<p>In the CSS rule for the ball element, I add the animation property and set its value to bounce
2s.</p>
<p>This will play the bounce animation over a two second duration.</p>
<p>I then add the animation direction property and set its value to
alternate.</p>
<p>This will play the animation in reverse when it completes.</p>
<p>Then finally, I add the animation iteration count property and set
its value to infinite.</p>
<p>This will play the animation loop infinitely.</p>
<p>I save the file and open index.html again in live preview.</p>
<p>The animation plays, but the speed of the movement is not
consistent.</p>
<p>The ball moves slowly at the start, then speeds up in the middle and
slows down again at the end of the animation.</p>
<p>This is because the default timing function is the ease function that
animates with this behavior.</p>
<p>There are many timing functions available such as ease, linear, ease
in, and ease out.</p>
<p>You can read more about this in the additional resources.</p>
<p>To match the animation that I built in HTML and JavaScript, I set the
animation timing function to linear.</p>
<p>I open styles.css again. In the CSS rule for the ball element, I
update the animation property and set its value to bounce 2s linear.</p>
<p>This will play the bounce animation over a two second duration using
the linear function.</p>
<p>I save the file and open index.html again in live preview.</p>
<p>Now my animation plays exactly as I intended it to do.</p>
<p>In this module, you learned how to create a simple keyframe animation
with CSS.</p>
<p>But CSS animations and keyframes are quite powerful.</p>
<p>Try challenging yourself and see what animations you can build.</p>

<h4>Animation and effects cheat sheet</h4>

<p>Transform property</p>

<h4>Syntax</h4>

<p>transform: transform function-values</p>

<h4>Example</h4>

<pre>  .sample-class {
    transform: rotate(60deg);
  }</pre>

<h4><strong>Keyword-value type: none</strong></h4>

<pre>  .sample-class {
    transform: none;
  }</pre>

<h4><strong>Function-value type: matrix() </strong></h4>

<h4>Variations: matrix(), matrix3d()</h4>

<pre>  .sample-class {
     transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
  }</pre>

<h4><strong>Function-value type: rotate(deg)</strong></h4>

<h4>Variations: rotate(), rotate3d(), rotateX(), rotate(), rotateZ()</h4>

<pre>  .sample-class {
    transform: rotate3d(3,2,1, 100deg);
  }</pre>

<p>Note: In rotate3d(), the respective values represent x, y, z
co-ordinate and degree of rotations</p>

<h4><strong>Function-value type: translate(x,y)</strong></h4>

<h4>Variations: translate(), translate3d(), translateX(), translateY(), translateZ()</h4>

<pre>  .sample-class {
    transform: translate3d(10px, 20px, 30px);
  }</pre>

<p>Note: In translate3d(), the respective values represent translation
along the x, y, z co-ordinates</p>

<h4><strong>Function-value type: scale(factor)</strong></h4>

<h4>Variations: scale(), scale3d(), scaleX(), scaleY(), scaleZ()</h4>

<pre>  .sample-class {
    transform: scale3d(2, 1, 0.3);
  }</pre>

<p>Note: In scale3d(), the respective values represent scaling times
along the x, y, z co-ordinates</p>

<h4><strong>Function-value type: skew(deg, deg)</strong></h4>

<h4>Variations: skew(), skewX(), skewY()</h4>

<pre>  .sample-class {
    transform: skew(100deg);
  }</pre>

<h4><strong>Global value types:</strong></h4>

<pre>  .sample-class {
    transform: inherit;
  }
  .sample-class {
    transform: initial;
  }
  .sample-class {
    transform: revert;
  }
  .sample-class {
    transform: revert-layer;
  }
  .sample-class {
    transform: unset;
  }</pre>

<h4>Multiple transform over the same element</h4>

<h4>Syntax</h4>

<p>Transform can be applied for rotate(), scale() and translate() that
can be listed together. Each of these properties can have their own
values and the actions will give a combined effect. </p>

<h4>Example</h4>

<pre>  .sample-class {
    transform: rotate(45deg) scale(1.5) translate(45px);
  }</pre>

<p>Additional property under transform:transform-origin</p>
<p>Determines the anchor point for the centering of transform.</p>

<h4>Example</h4>

<pre>  .sample-class {
    transform-origin: 10px 10px;
  }
  .sample-class {
    transform-origin: right bottom;
  }</pre>

<h4>Transition property</h4>

<h4>Transition shorthand</h4>

<p>Transition shorthand has four following sub-properties, each of which
can also be individually defined. </p>

<ul>
  <li>transition-property</li>
  <li>transition-duration</li>
  <li>transition-timing-function</li>
  <li>transition-delay</li>
</ul>

<p>You have to list the values without naming them individually. Values
skipped will be assigned their default values.</p>

<h4>Syntax</h4>

<h4>transition: property duration timing-function delay;</h4>

<h4>Example</h4>

<pre>transition: margin-left 2s ease-in-out 0.5s;</pre>

<h4>Animations and @keyframes</h4>

<h4>animation property:</h4>

<h4>Syntax</h4>

<h4>animation: <em>name duration timing-function delay iteration-count 
  direction fill-mode play-state</em>;</h4>

<h4>Example</h4>

<pre>  .sample-class {
    animation: none 2 ease 0.5 4 normal none running;
  }</pre>

<p>The animation property is shorthand for the sub-properties below:</p>

<pre>  animation-name
  animation-duration
  animation-timing-function
  animation-delay
  animation-iteration-count
  animation-direction
  animation-fill-mode
  animation-play-state</pre>

<p>The values not mentioned are given default values.</p>
<p>Animation-name property is used to tie-in the @keyframes rule.</p>

<h4>@keyframes</h4>

<h4>Syntax</h4>

<pre>  @keyframes mymove {
    from {property: value}
    to { property: value }
  }</pre>

<h4>Example</h4>

<pre>  @keyframes animation-name {
    from {bottom: 0px;}
    to {bottom: 100px;}
  }</pre>

<p>Percentage denotes the timing of the animation. </p>

<h4>Alternative syntax</h4>

<pre>  @keyframes animation-name {
  /* declare actions here */
  }</pre>

<h4>Example</h4>

<pre>  @keyframes animation-name {
    0%,100%{
        background-color: blue;
    }
    50% {
        background-color: green;
    }
  }</pre>

<h4>Multiple animations</h4>

<p>Works the same as regular animation, multiple rules can be set. </p>

<pre>  #some-class{
    animation: animation-a 2s linear infinite alternate,
        animation-b 3s ease infinite alternate;
  }</pre>

<h3>Preprocessors: sass, scss, Stylus</h3>

<h4>Preprocessors: sass, scss</h4>

<p>Now that you have learned about different animation effects, let's
explore the topic of preprocessors which can make the process of
creating them easier. CSS preprocesses are special compilers used to
create a CSS file that can be referenced by an HTML document. They are
generally used to reduce the amount of CSS you need to write and allow
you to re-use values across multiple rules. This will make re-using
animations and effects much easier. And because preprocessors are an
extension of CSS they'll help not just in animation but any CSS code.
Let's learn a little more about them.</p>

<p>Preprocessors provide audit functionality on top of the CSS features
already present. Some of the features of preprocessors include the
option to create variables, loops, and if else statements. Different
preprocessors each have their own syntax and configurations for adding
these features. Some of the most commonly used preprocessors include
Sass, LESS, Stylus and PostCSS. The use of these preprocessors requires
the installation of a compiler on top of your web server.</p>

<p>In the early days of CSS, the main problem developers faced was the
difficulty of managing the code. The way CSS was designed made the code
very long, messy and complex. It also made it difficult to troubleshoot.
Preprocessors have their own scripting language that adds logical
structures, automation properties, reusability and bloating of the code.
You’ll now explore some of the different preprocessors available.</p>

<h3>SASS and SCSS</h3>

<p>Syntactically Awesome Style Sheets (SASS) is a scripting language
that CSS compiles and interprets into CSS. SCSS, which stands for Sassy
CSS is the syntax for SASS and can be seen as an advanced version of
both SASS and CSS. The difference between SASS and SCSS is best
explained by the SASS documentation, which states:</p>
<p>"There are two syntaxes available for Sass. The first, known as SCSS
(Sassy CSS) and used throughout this reference, is an extension of the
syntax of CSS. This means that every valid CSS stylesheet is a valid
SCSS file with the same meaning. This syntax is enhanced with the Sass
features described below. Files using this syntax have the .scss
extension.</p>
<p>The second and older syntax, known as the indented syntax (or
sometimes just “Sass”), provides a more concise way of writing CSS. It
uses indentation rather than brackets to indicate the nesting of
selectors and newlines rather than semicolons to separate properties.
Files using this syntax have the .sass extension."</p>

<p>This example highlights these differences.</p>

<h4>Regular CSS:</h4>

<pre>  body { 
    font: 100% Arial; 
    color: lightblue; 
  }</pre>

<h4>This is the SCSS: </h4>

<pre>  $font-stack: Arial; 
  $primary-color: lightblue; 
 
  body { 
    font: 100% $font-stack; 
    color: $primary-color; 
  }</pre>

<h4>SASS for the same block:</h4>

<pre>  $font-stack: Arial 
  $primary-color: lightblue 
 
  body 
    font: 100% $font-stack 
    color: $primary-color</pre>

<p>The variables have been defined at the top with labels such as
‘$font-stack’ and ‘$primary-color’. This is done with the ‘$’ suffix.
The result for both will be the same, and it is not hard to imagine how
much time this can save for the developer in complex code blocks where
there are a number of occurrences of ‘lightblue’ color. These variables
are placed at the top of the SCSS page.</p>
<p>In the case of SASS, the variation has mainly removed the curly
brackets and semi-colons from the code.</p>
<p>The nesting of selectors and separation of properties here is done by
means of indentation. You should note that all this syntax is valid and
will produce the same output.  For someone familiar with programming concepts, 
these preprocessors also allow the usage of math and other functions that 
can be utilized for adding rules conditionally.</p>

<p>Another important functionality in SASS is the use of directives. Let
us explore a couple of directives called @mixin and @include.</p>

<h4>Syntax</h4>

<pre>  @mixin some-rules {
    color: lightblue;
    font-size: 25px;
    font-weight: bold;
  }

  div {
    @include some-rules;
  }</pre>

<p>There are two directives @mixin and @include, that are used here.
In the first step, you will add properties that you want to reuse inside @mixin.
In the second step, you use the second directive @include and add the
mixin identifier that you have created using the @mixin directive.
Similar to these, there are a couple of other directives that are
also used. @import allows the import of rules from another file, and
@extend allows all the rules from a specific selector to be added inside
another selector.</p>

<h4>Stylus CSS</h4>

<p>Now that you know how preprocessors behave let us explore one more of
their type, called Stylus. If you continue to use the example above, the
code for Stylus will look like this:</p>

<pre>  body
    font 100% Arial
    color lightblue</pre>

<p>It is not hard to miss the simplicity of the code without the colons,
brackets or semicolons. But you should note that it is still allowed to
use all of them in Stylus without any error. Similarly, you can also use
‘$’ or any other symbol before variables, but you are not ‘required’ to
do so.</p>
<p>For someone unfamiliar with programming, functions are a block of
self-contained code that consists of steps designed to accomplish and
obtain the desired output. The preprocessors, as mentioned, allow the
use of functions.</p>

<p>Here is an example of this using Stylus.</p>

<pre>  add(a, b)
    a + b

  div
    margin add(10px, 20px)</pre>

<p>What is evident in the code above is that first, you have defined a
function called ‘add’ and passed the variables ‘a’ and ‘b’ inside it.
You added some functionality inside the function. In this case, you add
the two values a and b with the ‘+’ or addition operator. Once you’ve
done that, instead of assigning a value to the ‘margin’ property, you
pass the function add with numeric pixel values passed to it. The output
of this code will yield to a form ‘margin 30px’ after compilation.</p>

<p>These functions are useful when adding color gradation or creating
advanced geometric shapes on your web page.</p>
<p>There are other features available for preprocessors too. And, just
like any programming language, the space of CSS preprocessors is also
competitive, and by no means are these the only options available.</p>

<p>Once you have gained an understanding of regular CSS, the usage of
preprocessors should be explored. The use of preprocessors today is
almost inescapable given the number of advanced features they provide
which are not available in conventional CSS.</p>

<h3>Additional resources</h3>

<p>Here is a list of resources about animation and keyframes in HTML and
CSS that may be helpful as you continue your learning journey.</p>

<ul>
  <li><a href="https://www.lambdatest.com/blog/css-transforms-and-transitions-property/" 
    target="_blank" rel="noopener noreferrer">Transform and transition property</a></li>
  <li><a href="https://www.w3schools.com/css/css3_animations.asp" target="_blank" 
    rel="noopener noreferrer">Detailed information about animation</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes" 
    target="_blank" rel="noopener noreferrer">Detailed information about @keyframes</a></li>
  <li><a href="https://uicookies.com/css-text-effects/" target="_blank" 
    rel="noopener noreferrer">More advanced examples for adding text effects (1)</a></li>
  <li><a href="https://freefrontend.com/css-typing-text/" target="_blank" rel="noopener 
    noreferrer">More advanced examples for adding text effects (2)</a></li>
  <li><a href="https://dev.to/kiranrajvjd/simple-text-effects-using-css-3dgp" target="_blank" 
    rel="noopener noreferrer">More advanced examples for adding text effects (3)</a></li>
  <li><a href="https://www.opendesignsin.com/blog/10-web-design-effects-to-enhance-your-website/" 
    target="_blank" rel="noopener noreferrer">Types of effects added to websites (1)</a></li>
  <li><a href="https://goingclear.com/website-effects/" target="_blank" rel="noopener noreferrer">
    Types of effects added to websites (2)</a></li>
  <li><a href="https://freefrontend.com/css-animation-examples/" target="_blank" rel="noopener 
    noreferrer">Collection of examples using HTML/CSS</a></li>
</ul>

<h3>Common errors</h3>

<p>Have you ever made a mistake while programming?
Well, you're not alone.
After all, mistakes are a part of programming.
If there are never any errors in your code, that means you're either
extremely skilled or not writing enough code.
While there will always be errors in your code, some can be
avoided.
This ability to avoid errors is especially true for the mistakes that
beginner coders typically make.</p>

<p>In the next couple of minutes, you will learn about the common errors
that are made in programming and about the good practices you can
implement to avoid making these errors.
The common errors that developers make can broadly be classified as
skill-based, rule-based, and knowledge-based.
Many skill-based errors can be classified as typos.
That is to say, they are mistakes made when typing in the code.
These typos can include omitting delimiters at the end of the syntax,
or some quotation marks while defining values and forgetting to close
brackets.</p>

<p>For example, say there's some code where the programmer didn't enter
the closing bracket.
When the closing bracket is typed, the code becomes functional
again.
This can also be extended to syntax errors such as closing the tags
in HTML.
Sometimes, it can be as basic as not having a proper doctype
declaration in your html code.
All of these are simple mistakes and typos that happen while writing
your code, but these are also the ones that take the most time to
correct.
While a lot of these syntax errors are flagged with the help of
modern ideas such as visual code, clean code is still the responsibility
of the developer.</p>

<p>For example, there are also some things such as using inline tags and
writing tags in the upper case, which won't be flagged or stop the code
execution but are still considered bad practice.
Next, let's explore rule-based errors in more detail.
These are code-based mistakes developers make when they do not follow
the rules.
For instance, did you know that you cannot start a class name with a
numeric value? Naming mistakes are typical rule-based errors.
While this may not be obvious for someone new to CSS, there are many
specific rules set for different elements in CSS that you may come
across.
There are also so many properties that can be used for a given CSS
selector that it can be confusing, this confusion can lead to
errors.</p>

<p>For example, here's a short list of just some of the different
properties that can accept color values and be intermixed, color,
background, color, font, color and border color.
Or there is often more than one way in which the same page can be
designed such as flex box, grids, and so, on each with its own set of
properties.
All these properties may add to the confusion if not dealt with
correctly.
There are also knowledge-based errors.
These errors happen when you are a more experienced coder but you
still have gaps in your knowledge.
There is a tendency to have more and more complicated code using
complex queries, such as using attribute selectors or writing rules from
multiple classes.
Expanding your coding knowledge will make coding easier but at the
same time, it may make things confusing if you make your code too complex.</p>

<p>For example, when you have to go back to code after not seeing it for
a while and you have to figure out what you were doing when you initially wrote it.
And that's why you should be aware of best practices in CSS when it
comes to error prevention and correction.
Let's examine the best practices you can follow.
One of the best practices you can apply to avoid common errors is
using shorthand.
A code with four properties can be written using one property instead.
Like in this example, writing it with shorthand makes reading the code easier.
Learning shorthand takes practice but it can save time and effort if
you know how to use it.
Another best practice is applying specificity.
Understanding specificity while writing code can also help you to
avoid errors just like you learned in an earlier reading.</p>

<p>Let's take this example.
Both rules are targeting the same anchor tag of html, and the
specificity will be calculated by the browser to determine which rule to
apply first. In this case, it will be the first rule that will be applied.
Understanding specificity while writing code can help you to avoid
misconfigurations.
Over specificity can lead to increase loading time for browsers
because they need to apply specific rules.
A good practice in programming is to apply the rules as broadly as
possible.</p>

<p>For example, where possible applied over a container instead of to
the content inside it.
While the errors and practices mentioned are by no means exhaustive,
the best way to learn is by designing more web pages and integrating
good practices into your code as you go.
You must take care to avoid over specificity.</p>

<p>For instance, where the inside of the layout has a division tag
containing a class with an anchor tag to which you may apply rules, this
is over specifying the target element of rule.
Instead, this should be replaced with a class or ID selector.
Overspecificity leads to wasting time.
You waste the browser's time in applying overspecifics in the
present.
But it can also lead to you wasting your time troubleshooting
later.</p>

<p>You should also avoid the redundancy of rules, selectors, and
properties to prevent confusion.
When using different selectors, you can end up applying rules more
than once to target the same element.
Another good practice is performing a CSS reset using a universal
selector before you begin writing your code.
Every browser has different settings that may cause problems with the
formatting that you've defined.
By removing browser specific configurations using the universal or
star selector, you can avoid the chances of misconfigured layouts
appearing on web pages and save a lot of effort later.
By continually designing pages, you will develop your skills.
And as a result, you will progressively make fewer errors.
You learned about the common errors made in HTML and CSS, as well as,
good practices to avoid them. Great work.</p>

<h3>Handling errors</h3>

<p>In this section, you're going to learn about how you can handle errors
in CSS.</p>
<p>The first thing that you should know is that CSS does not handle
errors in the same way that most programming languages do.</p>
<p>The code does not break or stop executing.</p>
<p>Instead, it just passes through the code and simply ignores the lines
that it does not understand.</p>
<p>In fact, it can also ignore the next property.</p>
<p>After the mistake that is inside the same selector in V. S code, I
opened the html and CSS files that we used to demonstrate the transform
and transition properties in an earlier video.</p>
<p>Let me open the output to remind you what the CSS styling does.</p>
<p>Now I'm going to tweak the CSS code to create a mistake.</p>
<p>Let's remove a semi colon after the background color properties of
the boxes.</p>
<p>Visual studio code provides some basic information about mistakes to
get that information.</p>
<p>I click on view and then problems.</p>
<p>An error message displays in the problem panel that says missed semi
colon.</p>
<p>But this error does not prevent the execution of the rest of the
code.</p>
<p>When I run the code, the boxes still display, but only their borders
are visible and they have square corners.</p>
<p>In other words, the CSS before the error is executed, giving the
boxes their size and placing them in a grid, still run.</p>
<p>Then the background color properties as well as the border radius
properties in the line below are skipped.</p>
<p>After that, the rest of the styling is still applied, such as the
border properties as well as the hover pseudo class properties.</p>
<p>Let's put back the semi colon and create another error when I removed
the semi colon after the background.</p>
<p>Color properties of the hover class.</p>
<p>The hover effect still works but the color does not change to light
coral.</p>
<p>The opacity properties in the next line are also not executed, but
the transition property still works.</p>
<p>Now. I put back the semi colon to correct the code but sometimes you
need to validate the code for more than just syntax errors.</p>
<p>Such as checking against specific coding conventions and best
practices to resolve these kinds of issues.</p>
<p>Developers use a tool called a letter.</p>
<p>A letter is a tool that applies a set of rules to check the syntax
and find any problematic patterns or inefficiencies in the code.</p>
<p>There are a number of winter tools and websites available.</p>
<p>Alternatively, you can also install a third-party tool using the
command line or extensions in the S code.</p>
<p>You can find more about these online tools and how to install winter
extensions in the additional resources at the end of the lesson.</p>
<p>Next, I will demonstrate how to let your CSS code using a visual
studio code extension called style.</p>
<p>And there are plenty of Starlink rules that you can use for this
demonstration.</p>
<p>I'm using the alpha value notation rule and the color no hex
rule.</p>
<p>The alpha value notation rule requires using a specific notation for
alpha values.</p>
<p>Whereas the color no hex rule disallows the usage of hex color
notation.</p>
<p>These are just examples and are not necessarily best practices.</p>
<p>You can select your own set of lint rules according to your own best
practices.</p>
<p>Now that the style and extension is running.</p>
<p>Other errors are showing in the problems panel.</p>
<p>The alpha value notation lint rule states that 50% should be written
as 0.5. Notice that it also indicates on which line and at which
character I can find the issue.</p>
<p>In line 14 the value of the opacity property is set to 50%.</p>
<p>I change it to 0.5 and now the error notification disappears.</p>
<p>The color No hex lint rule states an unexpected hex color was found
on line eight.</p>
<p>To update the hex code to a valid notation such as H S L.</p>
<p>I can click on the color box in the CSS code,</p>
<p>A color panel pops up. I toggle between the different color notations
by clicking at the top of the color panel until it is set to H S.</p>
<p>L styling is just one example of the many developer tools in visual
studio code that you can use to find lint errors.</p>
<p>Many browsers also have testing tools such as the inspector compute
tools that allow you to modify your CSS code.</p>
<p>And verify the changes directly in the browser.</p>

<h3>Installing a third-party Linter in VS Code</h3>

<p>Bla bla bla</p>
<p>Can’t use it. Computer is not powerful enough. And MS Visual Studio
is a total piece of shit. Much like Windows and Office. A fucking joke.</p>

<h3>Debugging the front-end</h3>

<p>In this reading, you will learn about some of the fundamental tasks
used to debug CSS. The scope of what’s covered will match the topics
already covered in this course.</p>
<p>You may have come across websites that have misaligned or overflowing
text, broken web links or websites that take too much time to load.
While the front-end and back-end both contribute to faulty web pages,
visible styling is primarily concerned with the front-end.</p>
<p>CSS is a styling language, unlike conventional programming languages
such as Python and Java, that has controls and follows a logical
structure. This can make it difficult to find the exact root of the
problem. Additionally, as you know, CSS does not flag errors, and most
of the ‘bugs’ that you see in CSS are aesthetic in nature and need human
intervention to solve. The task of debugging the front-end is more about
experience than knowledge. </p>
<p>The first step in debugging CSS is to find the root of the issue and
isolate the elements involved. The majority of CSS issues will be with
the layout, such as:</p>

<ul>
  <li>Content overflow from parent to child or container class</li>
  <li>Misplaced elements in relation to its container class</li>
  <li>Browser and device-related inconsistencies resulting in variable viewports</li>
</ul>

<h3>Isolation by reduced test case</h3>

<p>One way to deal with a problem is to replicate your code and
systematically remove any code unrelated to the HTML and CSS elements
that could be the source of the problem. The code should be distilled
down to the least amount of code possible, and only then are suitable
changes made to get the results you want. Alternatively, you can enable
rules one at a time to observe their impact on the displayed
elements.</p>

<h3>Items inside containers</h3>

<p>Often, isolation will not work, as the problem is the result of the
relative mapping of elements. For example, with the misconfigured width
of an item inside a flex layout. It’s important to check the use of
suitable CSS properties in such cases. For a given item inside a grid,
depending on the use case, width, grid-template-column, margin and
padding can all be used to give spacing to an element. Additionally, you
can also set different units that will all have their own behavior. In
most cases, it helps to be familiar with the unit of measurement in
relation to the container type to avoid misconfigurations.</p>

<h3>Relocating items </h3>

<p>🛸🙀</p>
<p>Similar to the isolation of elements, you can move a certain element
to observe its behavior. Doing a comparison can often help you to
understand the source of the problem.</p>
<p>The CSS compiler reads the elements from right to left. As an
example, for a selector such as div .alpha &gt; p, the element read
first will be p before moving ‘outside’. When you change the position of
the p from inside the .alpha class to some other position inside your
code, it is easier to debug the source of the problem. This should be
done on a case-specific basis.</p>

<h3>Getting familiar with the box model </h3>

<p>The box model is a very powerful source of information and can solve
many issues with alignment. Using margin, padding and border is useful,
but can be tricky and must be well understood.</p>

<h3>Browser issues</h3>

<p>Many times, the styling you have renders correctly in the IDE but
misbehaves in a browser. That is because browsers have their own default
CSS stylesheets called user-agent styles. While modern-day browsers are
mostly compatible, you may encounter minor inconsistencies. Overriding
the browser's settings can be done with universal selectors, in such
cases written at the top of the code, and will include properties such
as ‘margin: 0px;’ to reset the margin values set by the browser by
default.</p>

<h3>Dev tools</h3>

<p>There are lots of user-friendly tools available today that can help
debug CSS. However, the best tool you can use is the one provided by the
browsers, called the developer tools, or dev tools. You can find these
by right-clicking on a web page and selecting ‘Inspect Element’. option
Note how every browser has its own expression when it comes to the
configuration options, but fundamentally they are similar. Browsers
today are very powerful pieces of software. If you spend time exploring
the options, you may not need any other additional tools or software for
debugging CSS and other front-end languages.</p>

<h4>A couple of the important options you can find inside your browser include:</h4>

<ul>
  <li>Sources: Lists the filenames such as HTML, and CSS files used by the webpage 
    that can be explored</li>
  <li>Elements: Scrolls through the code to select a specific element for exploration</li>
  <li>Inside the Elements tab, on the right-hand side, you will find several options 
    such as Computed layouts that will show the box model, Layouts that contain page 
  and grid overlay options, and Font.</li>
</ul>

<p>You can select a specific element much more easily with the help of
the ‘Element selection’ icon inside the dev tools. It enables the
selection of specific elements on your web page. You can also access
this option by hovering over a specific element on your page that will
display its properties to you.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 235. hovering icon (227) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image235.png?raw=true"
  alt="Hovering icon."
  style="width:10%;" />
</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 236. targetting icon (227) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image236.png?raw=true"
  alt="Targetting icon."
  style="width:4%;" />
</p>

<p>On selecting the desired element, one way to use the Elements tab for
debugging is by right-clicking on that element, scrolling to ‘Copy’ and
then selecting an option from the drop-down list that appears.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 237. display of submenu from copy option (227) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image237.png?raw=true"
  alt="Display of submenu from copy option."
  style="width:35%;" />
</p>

<p>This way, you can explore the isolated code to find the problem.</p>
<p>Additionally, you can add the Breakpoint option that is more useful
for interactive pages by selecting the ‘Break on’ option and selecting
an option from the dropdown list that appears.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 238. breakpoint and cumulative layout shift (228) ~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image238.png?raw=true"
  alt="Break on submenu options."
  style="width:35%" />
</p>

<p>Nowadays, some browsers are providing options such as Cumulative
Layout Shift (CLS) that helps determine the overall efficiency of a web
page.</p>
<p>You can also bring up the element families by clicking on the
horizontal bar:</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 239. horizontal bar and element families (228) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image239.png?raw=true"
  title="Horizontal bar and element families"
  alt="Horizontal bar and element families."
  style="width:55%;" />
</p>

<p>One very useful feature is the ability to make changes in your code
directly inside the browser. First, use the ‘element selector’ mentioned
above to select some elements and then look for the ‘+’ icon inside the
dev tools. You can directly start adding relevant rules for that
particular element which will immediately display changes on your web
page. The changes you make can also be tracked from the ‘Changes’ tab.
The live interactive nature of this feature greatly improves the
experience of debugging.</p>
<p>‘Console’ is another feature that, although it is not that useful in
CSS, will come in handy as you deal with active or dynamic web pages
along your developer journey.</p>
<p>There are also responsive design modes in CSS that allow you to
render your webpage to a specific browser or device. In addition to
these, there are numerous ways in which you can explore and configure
settings inside dev tools.</p>
<p>When it comes to designing and styling CSS, if you don’t understand
how it works, all issues will appear to be bugs. If you look at the
fundamental structure of CSS, it consists of rulesets containing
selectors and declaration blocks that contain properties and values.
Micro-assessment of formatting and its validity can be done to
troubleshoot the source of the problem. Practicing the creation of web
pages and exploring the dev tools is the best way to get better at
debugging and CSS in general.</p>
<p>In this reading, you learned about some of the fundamental tasks used
to debug CSS.</p>

<h3>Debugging tools</h3>

<p>Have you ever had a broken power outlet in your home, or maybe a
light switch stopped working?</p>
<p>When that happens, you usually call an electrician to come fix the
problem.</p>
<p>When they arrive, they have many tools with them to test the wiring
in your home to figure out the cause of the problem.</p>
<p>As a developer, if your webpage isn't displaying correctly, you also
need tools to help inspect and diagnose the cause of the problem.</p>
<p>This is why the developer tools in your web browser are so
useful.</p>
<p>Every web browser comes with a set of tools to assist in the
development of web pages and web applications.</p>
<p>There are different diagnostic functions that the developer tools
provide.</p>
<p>These include viewing error logs, debugging JavaScript code,
inspecting HTTP requests and responses, inspecting performance and
memory usage of JavaScript code, inspecting CSS grid and flexbox
layouts, inspecting HTML and CSS rendering, and live editing.</p>
<p>Inspecting HTML and CSS rendering will probably help you the most
while building your webpage, and for that reason, it'll be the main
focus of this section.</p>
<p>Although, we will return to live editing closer to the end of the
section.</p>
<p>Right-clicking in your browser and clicking Inspect opens the
developer tools.</p>
<p>This means you have your page and its HTML document side-by-side on
screen at the same time.</p>
<p>This allows you to highlight a certain displayed element on the
rendered page, like the logo, and note its corresponding HTML
highlighted in the developer tools.</p>
<p>Think of all the time it will save you when you're trying to locate
the code of a troublesome element.</p>
<p>Also, when you have the element on the web page highlighted, you can
inspect the CSS rules applied to it in the developer tools.</p>
<p>That makes finding problems easier because you can identify which CSS
rules are being applied to an element and what the properties of those
rules are.</p>
<p>Next, let's move on to the box model, a CSS and HTML feature that you
can inspect using developer tools.</p>
<p>Depending on your web browser, it will display beside the CSS rules
or in a dedicated tab called Computed, which is located beside the
Styles tab.</p>
<p>You can use the box model to identify the outcome of the CSS rules
applied to an element.</p>
<p>This will help pinpoint if a CSS rule is incorrectly applied or has
an incorrect property value.</p>
<p>No matter what kind of problem you have in your code, you have to
systematically use the diagnostic developer tools to figure out what's
going on.</p>
<p>But what about combining different developer tools?</p>
<p>While being able to inspect HTML and CSS rendering is undeniably
useful, it can be more powerful when used together with live editing,
your HTML and CSS.</p>
<p>With live editing, you can update HTML and CSS code inside of the
developer tools.</p>
<p>This allows you to test CSS rule changes and adjust HTML elements to
verify fixes before permanently adding them into your code and saves a
lot of time because you spend less time editing and reloading your
webpages.</p>
<p>Isn't that great? In this section, you've explored how using browser
developer tools can assist with debugging HTML and CSS code.</p>
<p>Just like the electrician, you as a developer have many tools at your
disposal to inspect and diagnose problems, and developer tools
definitely make creating and maintaining webpages and web applications
easier.</p>
<p>The next reading, we'll explore developer tools in more detail.</p>

<h3>Browser-specific CSS</h3>

<p>One of the frustrations you're likely to run into will be
compatibility issues that occur when rendering your CSS files on
different browsers.</p>
<p>Well, you can use code and specialized websites to sort out these
compatibility issues.</p>
<p>In the next couple of minutes, you will learn about the interactivity
of CSS with other browsers and how you can add code to your CSS files to
ensure compatibility with these browsers.</p>
<p>You will also learn about the specialized websites available that you
can use to check whether your code is valid on multiple browsers.</p>
<p>CSS has been around for a long time and has evolved quite
significantly since it was first introduced.</p>
<p>As new features are added to the CSS specification, compatibility
issues can occur while the different browsers decide on the
implementation of the new features.</p>
<p>While all the major browsers are mostly in alignment on how CSS is
implemented, there are still browser-specific differences that occur,
which sometimes may disturb the layout, styling, and other responsive
components related to CSS.</p>
<p>Additionally, each browser has its own default CSS properties for
different HTML elements.</p>
<p>Most browsers have their own specific engines that are used for
rendering HTML and CSS.</p>
<p>Examples of these include Safaris Engine Webkit, Google Chrome, and
other chromium-based browsers like Edge and Operas Blink.</p>
<p>As a result, different browsers can have different ways in which the
CSS rules get displayed, even if the styling and alignment are defined
correctly.</p>
<p>The changes that occur are usually subtle.</p>
<p>For example, colors and fonts may appear slightly different from the
original styling, and this may affect the user's experience.</p>
<p>However, sometimes the difference can be more noticeable, like with
layouts, specifically involving alignment.</p>
<p>Let's explore one such example now involving the use of flex and grid
layouts.</p>
<p>The most common layouts that render differently depending on the
browser and use or the flex and grid layouts.</p>
<p>For example, animated grid sometimes doesn’t animate correctly in
certain browsers.</p>
<p>Flexbox can have trouble handling the correct aspect ratios and
alignment.</p>
<p>To help identify and solve these issues, there are many websites
available to you to check browser-specific CSS compatibility.</p>
<p>For example, developers can use one of these sites to check if the
border-radius rule in the CSS rule is compatible with all the different
browsers.</p>
<p>There are also websites that provide a virtual environment where you
can select specific browsers and their versions.</p>
<p>In these virtual environments, you can insert your code in the
browser or run a website that you built that is already live to see how
it works.</p>
<p>It's also important to check the compatibility and rendering of
websites on mobile devices that typically have different configurations
than a website on a desktop.</p>
<p>You now know that browser compatibility issues can occur in CSS.</p>
<p>Let's examine an example of browser-specific settings and how you can
ensure that your CSS code is compatible.</p>
<p>There are browsers specific settings that you can add to ensure that
your CSS code is compatible and works properly with that particular
browser.</p>
<p>Let's take the example of the Chrome browser and query it.</p>
<p>First, I need to ensure that my CSS code is compatible with the
browser.</p>
<p>Queries require the use of media rules. These rules are used to apply
different styles to different media types or devices.</p>
<p>The webkit main device pixel ratio, or webkit device pixel ratio is a
media query rule which is used to specify the density of the
schemes.</p>
<p>These webkit rules are part of the media query rule used as a
non-standard way of setting parameters for aspects such as screen
resolution, viewport, height of the browser, and so on.</p>
<p>I've set the value to be zero for this example, typically the values
are 0.75, 1, or 1.5.</p>
<p>I can also set the properties for specific rules.</p>
<p>In this example, I've used the general query and I've applied it to a
paragraph.</p>
<p>If I want to configure some of the settings only for specific
browsers, I can do that as well. In this example, notice that I've set
the CSS rules to be compatible only with the Safari browser.</p>
<p>Similar to defining rules inside the CSS file, Internet Explorer
makes use of conditional comments inside HTML, which makes the code
compatible with Internet Explorer.</p>
<p>The support for conditional comments in the latest versions of
Internet Explorer has been deprecated, but they served as an important
bridge to ensure compatibility with earlier versions.</p>
<p>There are a number of media queries and variations for these
conditional comments and other browser-specific settings that I can add
to the CSS and HTML code.</p>
<p>Adding such media queries and other CSS code for setting
compatibility with browsers is a vast topic all by itself that can be
explored beyond the scope of conventional CSS rules.</p>
<p>Fortunately, there are many CSS libraries available to help ensure
that your CSS rules are consistent across browsers, such as modernizer,
reset.css, and normalized.css.</p>
<p>Previously, when CSS incompatibilities were quite prevalent among
different browsers, a simple solution was found in the form of CSS
reset.</p>
<p>A CSS reset file consists of rules that will reset the values for
different types of selectors, pseudo-classes, and so on before the
actual rules are implemented.</p>
<p>While browser incompatibilities are greatly reduced, the practice of
CSS reset is still followed by designers to ensure cross-browser
compatibility.</p>
<p>In this section, you learned about CSS compatibility and the issues
that can occur between different browsers when rendering CSS, you
learned how each browser has its own rendering engine and that
developers can use specialized websites to check their CSS code is valid
on multiple browsers.</p>
<p>Finally, you explored browser-specific settings that you can add to
your CSS code to ensure it's compatible and works properly with
particular browsers. Well done.</p>

<h3>What are some CSS bugs you have struggled with?</h3>

<p>Now it's time to discuss some of the challenges that you had with
your fellow learners.</p>

<ul>
  <li>Which CSS bug did you struggle with the most?</li>
  <li>Why do you think it was such a challenge for you?</li>
  <li>What steps did you take to resolve the issue?</li>
  <li>Share your thoughts with your classmates!</li>
</ul>

<h3>UI testing</h3>

<p>As you may have experienced when using different apps in your
everyday life, first impressions matter, whether you are using an app to
make a photo collage or to order food online.</p>
<p>If you are using a new app and it doesn't behave the way you expect
it to, it makes a bad first impression on you.</p>
<p>It may very well leave you feeling frustrated and seeking
alternatives that can deliver what you need.</p>
<p>To combat scenarios like this, developers employ rigorous user
interface or UI testing strategies to ensure optimal customer
satisfaction.</p>
<p>UI testing is a complex area with many techniques and strategies used
by developers.</p>
<p>The strategies you will use will often be determined by business
priority, customer requirements, and project timelines.</p>
<p>In this section, you will learn about some UI testing strategies in
specific cross-device testing.</p>
<p>You will also discover practical examples of how to do cross-device
testing in the browser.</p>
<p>There are many UI testing strategies and an even wider range of tools
available to implement them.</p>
<p>The most common strategies used during development are; automated
user acceptance testing, cross-device testing, and visual regression
testing.</p>
<p>You can learn more about the other types of testing in future
courses.</p>
<p>For now, let's just focus on cross-device testing.</p>
<p>Cross-device testing involves the manual or automated use of
different devices to test the layout and behavior of an application.</p>
<p>The goal of this testing strategy is to ensure user experience
consistency between different devices.</p>
<p>Think of all the different mobile devices and their screen sizes and
internal hardware, there are a lot of possibilities.</p>
<p>Many companies use the most common devices for testing as less common
devices could have a low return on investment versus the cost of
maintaining and running the tests on those devices.</p>
<p>If you have an old phone stashed in a drawer somewhere, chances are
that modern apps won't work on the devices as well as they're supposed
to.</p>
<p>Now that you've learned about the different types of UI testing, you
are ready to learn how to use Web Developer Tools to manually perform
cross-device testing.</p>
<p>In my web browser, I've opened one of my previously developed
webpages for the little lemon restaurant.</p>
<p>I've opened the browser developer tools by right-clicking the page
and selecting Inspect Element.</p>
<p>An alternative way to open the tools is to press F12.</p>
<p>To begin cross-device testing the webpage, I can click the toggle
device toolbar button.</p>
<p>On the top of the browser, I can now change the browser view to
simulate different devices.</p>
<p>If I click on the "Edit button", I can select additional devices to
add to the toolbar.</p>
<p>However, it is important to note that this will only simulate the
screen size of the device, not the actual hardware.</p>
<p>Luckily, the browser also as tools available to closely simulate
certain network and hardware conditions.</p>
<p>In the performance tab of the developer tools, I can use the network
option to simulate different mobile network speeds.</p>
<p>Additionally, I can use the CPU option to slow down the web browser
as if it was running on a slow or older device.</p>
<p>This will allow me to view how my webpage performs in different
environments.</p>
<p>Of course, this is all simulated.</p>
<p>There are many tools available to perform testing on virtual mobile
software and also unreal mobile hardware.</p>
<p>Many businesses have in-house labs with many mobile devices to
perform more real-world environment testing.</p>
<p>If you're interested in learning more, review the links included in
the additional reading material.</p>
<p>You should now be able to identify the main UI testing strategies
used to ensure customer satisfaction and what's more.</p>
<p>You also learned about the web developer tools you can use to perform
cross-device testing.</p>

<h3>Case study: How Meta performs front-end testing</h3>

<p>An untested application is a wildcard. You have no idea whether it
works or it doesn't work.</p>
<p>A tested application gives you confidence that what was originally
built is working as intended.</p>
<p>Hi, I am Benedict Hobart. I am a front-end engineer at Meta.</p>
<p>Testing is really important to make sure your app is of high-quality
and make sure it doesn't break and being able to test every feature in
your app or every part of your product means that you'll be made aware
of problems in your app.</p>
<p>It's much easier to fix a problem when it happens than six months
down the road when someone finds out it's broken and you need to work
out what happened.</p>
<p>You write a lot of code over time and one small problem in one
subsystem can end up leading to a multitude of errors in your app.</p>
<p>Like when you're building a messaging app and messaging goes down for
an hour, people can't contact their friends and family.</p>
<p>They can't contact their loved ones, they're disconnected. It's
really important for your users that you build something reliable and
doesn't break and testing is the easiest way to do that.</p>
<p>When I first learned front-end testing it was actually pretty
satisfying to get the tooling working and then to have your own app that
you just build, executed automatically or exercised in some continuous
integration somewhere.</p>
<p>Front-end testing and testing is a whole matter is very
important.</p>
<p>We have this whole initiative or called better engineering, which is
about building high-quality applications.</p>
<p>We approach testing in a number of ways.</p>
<p>We've got end-to-end testing, which we basically spin up a web
browser in the cloud and we run tests that interact with the browser
automatically and make sure that the app is working.</p>
<p>Then there's unit testing, which is usually a good case for unit
testing, is in something like when you're doing end-to-end encrypted
messaging, you want to make sure your cryptography works as you'd
expect, that the inputs meant match the outputs and that certain things
are guaranteed.</p>
<p>The people involved in front-end testing, I guess there's two main
groups.</p>
<p>There's the product teams building products that our consumers
clients use and they're the ones that should be writing tests to make
sure that their product is stable.</p>
<p>Then there's like the teams that build the test frameworks
themselves.</p>
<p>They're the ones that makes sure that those tests run with high
reliability, that those tests run before we ship code to users or to
people so we aren't shipping broken experiences.</p>
<p>I see it as a responsibility of everyone to be writing tests at the
company for their respective parts.</p>
<p>There's not going to be one super team that comes in and tests your
product for you because they don't know how your product works.</p>
<p>Usually what we do is set a testing bar so for every new feature we
make sure there's at least a few tests for it.</p>
<p>That way our product isn't actually ready to release until we've
already tested it, and so that gives us a lot more confidence than we
otherwise would have.</p>
<p>Testing is valuable, it can feel like a waste of time at first, but
it is not.</p>
<p>Eight months down the line when your app explodes and you're trying
to work out why those testings could have saved you.</p>
<p>The testing is also its own, like challenging activity writing good
test is hard and take pride in writing tests in the same way, you'd take
pride in building any of the products you want to build.</p>
<p>Good luck in your first experience in testing, it's going to be very
fundamental as you move forward in your career.</p>

<h3>Module summary: Interactive CSS</h3>

<p>Congratulations. You've reached the end of this module on interactive
CSS where you delve deeper into CSS by applying increasingly specific
styling to various elements.</p>
<p>It's now time to review what you've learned.</p>
<p>You began this module with a lesson on creating layouts.</p>
<p>You learned about CSS web layouts where you discuss the grid and flex
box module, common flex layouts and examples of common page layouts like
column grid and stack CSS units of measurement.</p>
<p>Basic flex box flex charts and CSS grids.</p>
<p>In this lesson, you also applied what you learned by creating a
custom layout using grids.</p>
<p>In an un graded lab lesson two focuses on CSS selectors.</p>
<p>You learned about widely used advanced selectors.</p>
<p>All selectors and their specificity combination selectors that
demonstrate the granular selection of embedded elements targeted CSS
style given elements using granular selection and the concepts and
practical uses of pseudo classes and elements.</p>
<p>In this lesson you also completed an ungrateful lab testing your
ability to style given elements using granular selection.</p>
<p>The third lesson was about C. S. S. Effects.</p>
<p>And in this portion of the module you learned about what effects are
and how web presentation can be enhanced by the use of effects, how to
use text effects like shadow and glow CSS animation and basic animation
principles.</p>
<p>CSS key frame animation and pre-processes to demonstrate simple key
frame animation.</p>
<p>Additionally, you completed an un graded lab about transforming and
transitioning elements and their role in animation.</p>
<p>The fourth and last lesson was about debugging where you learned how
to inspect diagnose and resolve CSS and html issues.</p>
<p>In your exploration of this topic, you learned about common errors,
handling errors, debugging the front end, how browser developer tools
can assist with debugging html and CSS issues, conditional comments and
UI testing.</p>
<p>You should now be familiar with the basics of interactive CSS and the
debugging tools available to diagnose and resolve CSS and html
issues.</p>
<p>You also know more about creating layouts using CSS selectors and
applying CSS effects.</p>
<p>You've done a great job so far, keep up the good work and continue
progressing in your learning journey.</p>

<h3>Additional resources</h3>

<p>The following resources will be helpful as additional references in
dealing with the different concepts related to the topics you have
covered in this lesson. </p>

<ul>
  <li><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">
    Website to check for browser-compatibility</a></li>
  <li><a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">
    Official website for Stylelint</a></li>
  <li><a href="http://csslint.net/" target="_blank" rel="noopener noreferrer">
    Widely used linter website to check CSS code</a></li>
  <li><a href="https://jigsaw.w3.org/css-validator/" target="_blank" 
    rel="noopener noreferrer">CSS Validator to check accuracy of CSS code</a></li>
  <li><a href="https://www.freecodecamp.org/news/how-to-tackle-css-specificity-issues-and-when-to-use-the-important-keyword-b54123995e1a/" 
    target="_blank" rel="noopener noreferrer">Dealing with specificity issues</a></li>
  <li><a href="https://www.sitepoint.com/study-errors-beginners-make-learning-html-css/" 
    target="_blank" rel="noopener noreferrer">Beginner errors made in CSS</a></li>
  <li><a href="https://www.webfx.com/blog/web-design/12-common-css-mistakes-web-developers-make/" 
  target="_blank" rel="noopener noreferrer">Knowledge-based mistakes to avoid in CSS</a></li>
  <li><a href="https://www.simplilearn.com/tutorials/css-tutorial/webkit-css" target="_blank" 
  rel="noopener noreferrer">How to use Webkit in your CSS code</a></li>
  <li><a href="https://www.lambdatest.com/blog/top-5-browser-compatibility-issues-in-css-for-developers-in-2021/" 
    target="_blank" rel="noopener noreferrer">Commonly-occurring browser issues in CSS</a></li>
</ul>

<h3>Course recap</h3>

<p>Wow, you've made it to the end of the course. Why don't you take a moment to 
congratulate yourself? After all, you've learned a lot in this course.</p>

<p>Let's recap. In the very first module, you learned how HTML and CSS are used 
in the real-world. You also learned about semantic tags and how important a 
structured approach to creating a well-formed web pages.</p>

<p>You learned about metadata and tags and how you can use them to
influence your webpages ranking through search engine optimization or
SEO. Now, that was important.</p>

<p>After metadata and tags, you moved on to user input and forms and you
created and tested a form by yourself.
The last part of this module was about media elements and you ended
on a high note by learning how to embed video and audio in a
webpage.</p>

<p>After media elements, you took a deep dive into CSS layout, grid, and
flexboxes in the next module.
Layouts are fundamental to designing a good webpage because they
divide a page into different sections thereby making the viewport more
presentable.</p>

<p>I'm sure you learned a lot in this section about how to make sure
that your user is always presented with a good viewport.
The next section was about CSS selectors which correspond to specific
elements or element groups in a HTML document.</p>

<p>You learned that you can combine more than one selector, so you can
apply rules to elements based on their relationship with one
another. With pseudo-class selectors, you can improve the
interactivity of your webpages without having to add overly advanced
styling. Ultimately, you should now know how to use CSS selectors like
attribute selectors, to apply rules to different HTML elements with
varying degrees of specificity.</p>

<p>In the second last part of this module, you learned about keyframes,
animations, and effects in CSS, essential knowledge and skills for any
front-end developer.
Let's refresh your memory about what those effects include.
Think of sliding galleries, cursor effects, and the hover effect,
which is very frequently used on web pages.
While it's tempting to add lots of animations and effects, you should
remember that it can be distracting for users and it may cause your web
page to load slowly.</p>

<p>The last part of the second module was all about how to use browser
developer tools to assist with debugging HTML and CSS issues.
Developers make mistakes all the time and they're a normal part of
the process.
Don't feel bad when you make a mistake.
That's what debugging is for, to figure out where something went
wrong and how you can fix it.
Debugging can't happen without testing, and you also learned about UI
Testing strategies such as cross device testing and a range of tools
that can help eliminate problems encode.</p>

<p>Wow, you covered a lot in this course.
This might only be the start of your journey towards becoming a HTML
and CSS developer, but you can be very proud of yourself for how much
you've already learned and accomplished.
It's been a pleasure to embark on this journey of discovery with
you. Best of luck in the future.</p>

<h4>About the portfolio project</h4>

<p>By completing the lessons in this course, you have acquired the
necessary HTML and CSS skills and knowledge to develop a home page with
a header, main content and footer.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~ 240. home page with header, main content and footer (242) ~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed border"
  src="/images/image240.png?raw=true"
  title="Home page with header, main content and footer"
  alt="Home page with header, main content and footer."
  style="width:35%;" />
</p>

<p>You will have to decide whether you are going to use a grid or
flexbox layout for your home page. Your header should contain the client
logo and the main content should be a large promotional banner with
three columns with text and images below it. Your footer will have two
columns: the first column should have a small logo and the second one
should have copywriting information. When it comes to styling, you'll
have to create the appropriate look and feel for your client's target
audience. Remember, you want to create intentional engagement!</p>

<p>To enable you to do all of this, the module covers the most essential
features of your project. This includes: selecting your fictional
client, working out your layout, positioning the elements, planning the
user experience, creating themes and setting up your local development
environment.</p>

<h4>What is the purpose of the portfolio project?</h4>

<p>The graded assessment will help you to establish which topics you
have mastered, and which topics require further focus before you can
complete the course. Ultimately, the graded assessment is designed to
help you make sure that you are ready for the next course in this
program. And even more, you get the opportunity to create another
project for your portfolio.</p>

<h4>How do I prepare for the graded portfolio project?</h4>

<p>You have encountered exercises, knowledge checks, in-video questions
and other assessments as you have progressed through the course. Nothing
in the graded assessment will be outside what you have covered already,
so you should be well placed to succeed.</p>

<h4>What will I be doing?</h4>

<p>The purpose of this graded assessment is to check your knowledge and
understanding of the key learning objectives of this course. And what
better way to do that than by applying your newly-learned skills in a
practical way? You will develop a home page for one of four fictional
clients. And you can read more about them in the <a
href="https://www.coursera.org/teach/html-and-css-in-depth/KYd9Lr9AEeyUxgoSRgtsGw/content/edit/supplement/bpM1T">
  Subject selection</a> reading. The client you choose will determine what links,
pictures and colors you will use. You are free to use your creativity
but the home page needs to meet certain criteria regarding the
following:</p>

<ul>
  <li>Visual layout</li>
  <li>Semantic structure</li>
  <li>CSS layout</li>
  <li>CSS styling</li>
  <li>CSS effects</li>
</ul>

<h4>Subject selection</h4>

<p>For the graded assessment, you need to develop a home page for one of
four fictional clients.</p>
<p>As you read through the client personas included in this reading,
think about what the ideal home page for each of these clients would
look like.</p>
<p>How can you use what you’ve learned over the course? For instance,
how will you structure the provided information with semantic HTML tags?
You can even start to think about what media elements you could
include.</p>
<p>And how can you create a unique user experience with CSS? Will a grid
or basic flexbox serve the client best? What CSS selectors will you use
to not only style your page but also create interactivity?</p>
<p>And don’t forget about effects! It’s time to have fun and think about
how you can apply what you learned about CSS animations.</p>
<p>The four client personas offer a great variety for you to choose
from. They are:</p>

<ul>
  <li>Retail: Lucky Shrub</li>
  <li>Professional services: Hair Day</li>
  <li>Restaurant: Little Lemon</li>
  <li>Luxury jewelry: Mangata and Gallo</li>
  <li>Read on to find out more about them.</li>
</ul>

<h4><strong>Retail: Lucky Shrub</strong></h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~ 241. logo of the fictional client lucky shrub (244) ~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image241.png?raw=true"
  title="Logo of the fictional client Lucky Shrub"
  alt="Logo of the fictional client Lucky Shrub."
  style="width:5%;" />
</p>

<p>Based in Tuscon, Arizona, Lucky Shrub is a medium-sized garden design
firm that specializes in garden design and creation, maintenance and
landscaping. The company also runs a small plant nursery that sells
indoor and outdoor plants, making them a one-stop shop for clients to
"transform any space into an oasis you can be proud of".</p>
<p>Lucky Shrub was started by a husband and wife team, Jason and Maria,
who share a long-time love for plants. Jason is the garden architect. He
creates and oversees all designs while managing his team of landscapers.
Maria manages all the marketing for the company and oversees the
nursery.</p>

<h4>Download their logos here:</h4>

<h4>Lucky-Shrub-Logos</h4>

<h4><strong>Professional services: Hair Day</strong></h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 242. logo of the fictional client hair day (244) ~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image242.png?raw=true"
  title="Logo of the fictional client Hair day"
  alt="Logo of the fictional client Hair day."
  style="width:20%;" />
</p>

<p>Based in Madison, Wisconsin, Hair Day is a boutique hair salon that
specializes in cut, color and styling. Hair Day also offers makeup and
nail services, prides itself on its warm and relaxing atmosphere and is
best known for edgy hair colors and on-trend cuts. The salon can only
accommodate a small number of coloring appointments each week, so
clients need to book far in advance. To keep clients inspired between
appointments, the employees share makeup and nail tutorials on the Hair
Day website.</p>
<p>Pria, the owner of Hair Day, earned her certificate as a colorist and
immediately started specializing in edgy, custom coloring techniques.
She wanted to create a "treat yourself" environment for her clients.
Pria opened the salon with her good friend and talented hairdresser,
Garry. They have a staff of seven: two stylists, three colorists, one
manicurist and one make-up artist.</p>

<h4>Download their logos here:</h4>

<p><strong>Hair Day logos</strong></p>

<h4><strong>Restaurant: Little Lemon</strong></h4>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~ 243. logo of the fictional client little lemon (245) ~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image243.png?raw=true"
  title="Logo of the fictional client Little Lemon"
  alt="Logo of the fictional client Little Lemon."
  style="width:25%;" />
</p>

<p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, 
focused on traditional recipes served with a modern twist. The chefs draw inspiration 
from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they 
rotate seasonally. The restaurant has a rustic and relaxed atmosphere with 
moderate prices, making it a popular place for a meal any time of the day.</p>
<p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to 
the United States to pursue their shared dream of owning a restaurant. To craft the 
menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian 
does all the marketing for the restaurant and led the effort to expand the menu 
beyond classic Italian to incorporate additional cuisines from the Mediterranean 
region.</p>

<h4>Download their logos here:</h4>

<p><strong>Little-Lemon-logos</strong></p>

<h4><strong>Luxury Jewelry: Mangata and Gallo</strong></h4>

<p>Mangata and Gallo is a jewelry store that specializes in special
occasions like engagements, weddings and anniversaries. The jewelry
company primarily operates online and has a small storefront in Austin,
Texas with an atelier attached for browsing. Mangata &amp; Gallo's
selection of jewelry is known for its high-quality and classic look. The
owner, an Austin local, is well known for her jewelry designs.</p>
<p>Mariana is the owner and the lead designer of Mangata and Gallo.
After graduating from design school with a specialization in diamond
cutting and metal smithing, Mariana opened a store in her hometown,
Austin and started to grow her business online. Mariana has always
managed every aspect of the business, from jewelry design to marketing
to e-commerce. However, she recently hired several artisans to help
craft her designs and a young employee to help manage the company
website and social media accounts.</p>
<p>Download their logos here:</p>

<h4>Mangata and Gallo logos</h4>

<h4>Selecting the subject and working out the layout</h4>

<p>You might recall learning about client personas earlier in the course.</p>
<p>For the project, you have to choose one client persona to develop a home page for.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 244. web page layout example (247) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image244.png?raw=true"
  title="Web page layout example"
  alt="Web page layout example."
  style="width:35%;" />
</p>

<p>But if you want to practice, you can build multiple web pages using
the different HTML and CSS skills that you've learned in this section.
You will learn how to approach and plan a web page layout so you can
practice for your own project first.  Let's start with the visual layout.
<p>The web page should have the company logo at the top of the page with
a navigation menu underneath.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 245. web page template (248) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image245.png?raw=true"
  title="Web page layout template"
  alt="Web page layout template."
  style="width:35%;" />
</p>

<p>The main content of the page should be below the navigation menu.
At the bottom of the page is the footer.  The navigation menu requires four links to 
be laid out horizontally.  One link must be to the homepage you are developing depending 
on the client persona you've chosen.  The other links can be to product pages, contact forms 
or company information pages.  The main content should feature a large banner that links 
to the client's current promotional offer below the promotional banner.</p>

<p>There are three columns. Each column should contain an image followed
by a heading and some text.  Again, depending on the client you choose.
These can contain offerings or information about the client.</p>

<p>The footer is split into two columns.
The left column will contain a small version of the client logo and
the right column will contain copyright text. Now that you know what the
visual requirements are.</p>

<p>Let's examine how you can structure the HTML and CSS for this layout.
Remember that it's important to semantically structure your HTML document.
This way search engines and accessibility software can understand the
semantics of the web page.  It's best to start by planning out the semantic 
structure.</p>

<p>You should use the header element for the logo, the nav element for
the navigation, the main element for the main content and the footer
element for the footer of the page.</p>

<p>Once you've set up your semantic HTML structure, the next step is to
plan your grid layout for the main content and footer for these parts of
the web page, you can use either a CSS grid or a flex box layout.
It's important to plan your CSS rules for the different sized columns
that are required.
Remember, you'll need a full width column and 3 1/3rd columns for the
main content.</p>
<p>To simplify the main content, consider splitting the content into rows with
two columns for the footer.
One last note, it's important to plan your units of measurement when
defining your CSS rules and properties.
It will be easier to maintain and debug your CSS if your units are
consistent throughout the code as you learned earlier in the course,
choosing a unit such as em, px or rem for your C. S. S.</p>
<p>First you consider the visual layout, then the HTML and CSS structure
for the layout followed by the semantic structure and then the grid
layout.</p>
<p>In the next section, you'll learn how to start writing the HTML and CSS
for the project.</p>

<h4>Positioning the elements, creating placeholders (TEMPLATE)</h4>

<p>When building a webpage, it's considered good practice to do the
layout and positioning of your HTML elements before working on their
visual styling.</p>

<p>Think of building a house. After all, you don't paint it first. 
Instead, you start with a foundation and structure.
Let's go through the process of building an HTML structure and positioning 
the elements so that you can follow along and note the placement of key 
elements for display.</p>
<p>For this project, we've chosen the little lemon restaurant as the client
persona.  Open Visual Studio Code and create an index.html file
with the semantic HTML document structure based on the bare-bones layout
from Week 1.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 246. web page layout (250) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image246.png?raw=true"
  title="Web page example"
  alt="Web page example."
  style="width:35%;" />
</p>

<p>In the semantic structure, use the header element for the logo, the nav element for the 
navigation bar, the main element for the main page content and the footer element for the 
footer.</p>
<p>The navigation bar uses an unordered list for the navigation links.</p>
<p>In the main element, set up two section elements, one for each row of the content.  Each row 
is its own element.  You can use the flexbox layout to split the content into the required 
number of columns.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 247. sample code using article (251) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image247.png?raw=true"
  title="Sample code using article and div"
  alt="Sample code using article and div."
  style="width:35%;" />
</p>

<p>Use the article element to represent each column.  This is because the content of each 
column will be self-contained and not related to the other columns.  Use a similar approach 
for splitting the footer into two columns.  Except instead of using the article element 
for columns, use a div element.  This is because semantically the footer content should be 
considered as a whole.  Additionally, it isn't important content for search engines and
accessibility software.</p>
<p>Since we are splitting the footer visually into two columns, use the
div element to allow for the flexbox layout.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 248. sample little lemon web page (252) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image248.png?raw=true"
  title="Sample little lemon web page"
  alt="Sample little lemon web page."
  style="width:35%;" />
</p>

<p>Next, save the file and open the webpage in the web browser.</p>
<p>The content is displaying on the webpage, but you need to layout and position the elements 
using CSS.  Go back to Visual Studio Code and open styles.css in the CSS folder.
Rules have been set up for the body and heading elements.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 249. style.css with rem (253) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image249.png?raw=true"
  title="Styles.css using rem as unit of measure"
  alt="Styles.css using rem as unit of measure."
  style="width:25%;" />
</p>

<p>Use REM as a unit of measurement for this project.  The font sizes, margins, 
and padding properties of the CSS rules will all be REM values. The only exception 
to this rule is the body element where the left and right margins are set to five 
percent of the window size. Let's start by adding a rule to center the logo.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 250. css: header > image (253) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image250.png?raw=true"
  title="CSS: header &gt; image."
  alt="CSS: header &gt; image."
  style="width:35%;" />
</p>

<p>I use an element selector to select the image element that is a descendant 
of the header element. I then apply three CSS properties to the CSS rule. First, 
I set the display property to block so that the element changes from an inline 
element to a block level element. Then I set the margin-left and margin-right 
properties to auto. These three properties together will center the logo inside 
of the header element.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 251. css: nav ul (254) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image251.png?raw=true"
  title="CSS: nav ul"
  alt="CSS: nav ul."
  style="width:35%;" />
</p>

<p>Next, lay out the navigation menu horizontally.  To do this, add an element selector to 
select the unordered list element that is a descendant of the nav element.  Then apply two CSS 
properties to the CSS rule.  First, set the list-style property to non.  Next, remove the bullet 
point as the beginning of each element.  Then set the text align property to center the 
inline elements.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 252. css: nav li (254) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image252.png?raw=true"
  title="CSS: Select list item that is descendent of nav element"
  alt="CSS: Select list item that is descendent of nav element."
  style="width:35%;" />
</p>

<p>Next, add another CSS rule.  This time the selector will select the list 
item element that is a descendant of the nav element.  Then apply the display 
property and set its value to inline-block. Save the file and open the webpage 
in the web browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 253. logo and navigation bar centered (255) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image253.png?raw=true"
  title="Logo and navigation bar, centered"
  alt="Logo and navigation bar, centered."
  style="width:35%" />
</p>

<p>So far so good. Both the logo and the navigation bar are
centered. Next, I need to set up the flexbox layout.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~ 254. css: section display: flex (255) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image254.png?raw=true"
  title="CSS: select section element, add display property and set to flex"
  alt="CSS: select section element, add display property and set to flex."
  style="width:35%;" />
</p>

<p>I add another CSS rule using the element selector to select the
section element. I then add the display property and set its value to flex.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~ 255. css: article flex property to 1 (255) ~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image255.png?raw=true"
  title="CSS: select article and set flex property to 1 (one)"
  alt="CSS: select article and set flex property to 1 (one)."
  style="width:25%;" />
</p>

<p>Next, I add the CSS rule using the element selector to select the
article element. I then set the flex property to 1.
I saved the file and open the webpage in the web browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~ 256. main content w/one column in 1st row, 3 in 2nd row (256) ~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image256.png?raw=true"
  title="Main content with one column in the 1st row and 3 columns in the 2nd row"
  alt="Main content with one column in the 1st row and 3 columns in the 2nd row."
  style="width:35%;" />
</p>

<p>Now, the main content is laid out correctly with one column in the first row 
and three columns in the second row. Finally, also the layout for the footer.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 257. css: footer (256) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image257.png?raw=true"
  title="CSS: footer elements"
  alt="CSS: footer elements."
  style="width:25%;" />
</p>

<p>First, add a CSS rule using the element selector to select the footer element. 
I then add the display property and set its value to flex. Then I add another CSS 
rule. This time the selector will select the development that is a descendant of 
the footer element. I then set the flex property to 1. I save the file again and 
open the webpage in the web browser.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~ 258. webpage elements laid out and positioned correctly (257) ~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image258.png?raw=true"
  title="Webpage elements laid out and positioned correctly"
  alt="Webpage elements laid out and positioned correctly."
  style="width:35%;" />
</p>

<p>Success, the webpage elements are now laid out and positioned correctly.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~ 259. now you know how to position web page elements correctly (257) ~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image259.png?raw=true"
  title="Now you know how to position webpage elements corerctly (well, at least one way)"
  alt="Now you know how to position webpage elements corerctly (well, at least one way)."
  style="width:25%;" />
</p>

<p>Laying out and positioning your HTML elements first will always save you time 
later on when you begin applying visual improvements in animations. Doing it this 
way, it means that your webpage has a good strong foundational layout to work from 
and to which you can add the paint and decor, the visual styling of your webpage.
It takes some time to practice building your HTML structure and setting up the 
positioning of your elements.</p>

<h4>Setting up your local development environment</h4>

<p>You have to use Visual Studio Code to complete your graded
assessment. You have two options to do this.</p>

<h4>Option 1: Use Visual Studio Code in-browser with Coursera Labs</h4>

<p>You can access the Visual Studio Code environment through the “
Ungraded Lab Project sandbox” included in this lesson. Take note that
the Project Sandbox only allows you to work for one hour at a time. Make
sure you download your files before exiting the UGL. To work on your
project again later, you can simply open the HTML and CSS files on your
local machine and copy and paste the code again into the template files
in the Project Sandbox. Remember to download the edited versions again
at the end of the session.</p>

<p>To submit your project, you need to download the HTML and CSS files
to your local machine and save them inside a project folder. Zip the
project folder and upload it in the "My submission" area in the Peer
review assessment later in this lesson.</p>

<h4>Option 2: Work on your local device</h4>

<p>You can also choose to complete your graded assessment on your local
machine if you prefer. This will require a few steps of set up in
advance. First, you need to download the free IDE from Microsoft's website -
<a
href="https://code.visualstudio.com/download">https://code.visualstudio.com/download</a>.</p>

<p>Select the download based on your operating system.</p>

<h3><strong>Windows</strong></h3>

<p><strong>Step 1:</strong> Download the Windows installer.</p>
<p><strong>Step 2:</strong> Open the file to install it once the
download is complete.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~ 260. review and accept license agreement (259) ~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image260.png?raw=true"
  title="Step 3: Review and accept license agreement for MS Visual Studio Code"
  alt="Step 3: Review and accept license agreement for MS Visual Studio Code."
  style="width:35%;" />
</p>

<p><strong>Step 3:</strong> Review and accept the license agreement,
then click Next.</p>

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~ 261. destination location (enter or accept default) (260) ~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image261.png?raw=true"
  title="Step 4: Destination location. Keep default or enter a new location"
  alt="Step 4: Destination location. Keep default or enter a new location."
  style="width:35%;" />
</p>

<p><strong>Step 4:</strong> Keep the default value when prompted for the
destination location and click next.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~ 262. make sure add to path is selected (261) ~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image262.png?raw=true"
  title="Step 5: Make sure Add to Path is selected, click next"
  alt="Step 5: Make sure Add to Path is selected, click next."
  style="width:35%;" />
</p>

<p><strong>Step 5:</strong> On the additional tasks view, make sure that
<strong>Add to PATH</strong> is selected. </p>
<p><strong>Step 6:</strong> Click next.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~ 263. click install when ready (261) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image263.png?raw=true"
  title="Step 7: Click install when ready"
  alt="Step 7: Click install when ready."
  style="width:35%;" />
</p>

<p><strong>Step 7:</strong> Click install when the ready to install page
appears.</p>
<p><strong>Step 8:</strong> Click finish once completed, and the
application will launch.</p>

<h3>Mac</h3>

<p><b>Step 1:</b> Download the application based on the chipset you have. M1
macs use Apple Silicon, and older Macs use Intel. If you are not sure,
choose the Universal option.</p>
<p><b>Step 2:</b> Go to your Downloads folder once the
download is complete.</p>
<p><b>Step 3:</b> Double-click the zip file to extract the
contents.</p>
<p><b>Step 4:</b> Drag and drop the .app file to the
application link in Finder below.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~ 264. mac and linux menu screen color wheel (261) ~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image264.png?raw=true"
  style="width:35%;"
  title="Set up Visual Studio Code on Mac Step 4"
  alt="Set up Visual Studio Code on Mac Step 4." />
</p>

<h4>Step 5: Open the app.</h4>

<h3>Linux</h3>

<p>Please refer to the <a href="https://code.visualstudio.com/docs/setup/linux" 
  target="_blank" rel="noopener noreferrer">official Linux installation guide</a> 
  for Visual Studio Code.</p>

<h4>Selecting a working directory</h4>

<p>Now that you have Visual Studio Code set up, create a folder on your
device that you'll use to do course exercises.</p>
<p>Open Visual Studio Code, go to File and select Open Folder. Using the file browser, 
select the folder you just created.</p>
<p>Congratulations, you're set up now to begin writing some code.</p>

<h4>Planning the user experience</h4>

<p>A key part of building a website, is to ensure both a good user interface and a 
good user experience.  But what's the difference between those two and what makes 
them good or bad?</p>

<p>This section will explain the difference between user interface UI, and
user experience UX, as well as the concept of intentional engagement,
which will help you design a good user experience for your web page
visitors.</p>

<p>User experience or UX, is how a user interacts with the web page or
app as a whole.  That includes, presentation of information, the flow between
different sections and the ease of use.</p>

<p>One way of thinking about it is to consider ketchup bottle design.  Most ketchup 
bottles have a lid at the top.  This lets you get ketchup out with relative ease when 
the bottle is full.  But it becomes increasingly difficult to get to the ketchup 
at the bottom of the bottle as it empties out.
A better user experience is a ketchup bottle with the lid at the bottom instead.
This design lets gravity do the work of getting the ketchup out of the bottle.</p>

<p>Now, that's a good user experience design.
User experience is driven by the needs and viewpoint of the user.
There are many different UX design processes that are used by
businesses such as stakeholder interviews, user research, UX audit and
scenario mapping, and client persona.  In fact, you're already using the last 
one, client persona for your homepage project.</p>

<p>Creating a client persona is a good process for planning a website
through the point of view of a potential client and their customers.</p>
<p>But for this project, let's focus on another process you can use to
improve the user experience, intentional engagement.</p>

<p>The goal of engagement is to keep the user interacting with your
website and depending on the business, drive revenue through purchases,
or interaction with advertisements.
Because the web page your building is targeted towards customers that
fit the client persona, the user experience should be driven by how the
customers will engage with the website.</p>

<p>It is a good exercise to list what customers will be looking for when
they visit the website, and try to make it as easy as possible for your
users to get that information.
With this in mind, think about what should be displayed in the main
section of the homepage and what links should be listed in the
navigation bar.
But such concerns shouldn't come at the cost of business goals.
The business may have revenue goals that it aims to achieve through
promotions and discounts. So balancing business and user goals is a key
part of designing the user experience.</p>

<p>Now that you have thought about user experience some more, review
your homepage design, and consider the user experience it
facilitates.
How does client persona and intentional engagement, fit into your own
UX design strategy?</p>

<p>Answers to those questions will help you plan your process.</p>

<h4>Creating themes</h4>

<p>The combination of colors used in the design of a website is called the color 
scheme.  Colors are one of the most important components of any website today 
because it sets the tone for the viewer.</p>
<p>For the optimal use of colors, web developers make use of color
theory and color schemes.</p>

<h4>Color schemes</h4>

<p>Fundamentally all colors are a combination of the three colors: red, yellow, and 
blue.  These are called the primary colors. Secondary colors like orange, purple 
and green are a combination of two primary colors.</p>

<p>Finally, there are six tertiary colors formed from a combination of the three 
primaries with secondary colors.  By adding more black or more white, you can 
create lighter or darker tints of each color.  All of these colors and tints 
make up a color wheel of 12 colors.</p>

<p>This color wheel is the foundation for any color scheme.  Depending upon the 
relative positions of colors on the wheel, there are seven commonly identified 
color schemes according to color theory that can be used for maximum appeal.<br>
These are:</p>

<ul>
  <li>Monochromatic</li>
  <li>Analogous</li>
  <li>Complementary</li>
  <li>Split complimentary</li>
  <li>Triadic</li>
  <li>Square and</li>
  <li>Rectangle</li>
</ul>

<p>The different combinations are represented in the image below;</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 265. color wheel (263) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image265.gif?raw=true"
  style="width:55%"
  title="Different color combinations on the color wheel that are based on the relative position 
    of colors to others"
  alt="Different color combinations on the color wheel that are based on the relative position 
    of colors to others." />
</p>

<p>Image source: <a
href="https://www.moving.com/tips/how-to-choose-a-color-scheme-for-your-home/">
  How to choose a color scheme for your home</a></p>

<h4>Using the color schemes</h4>

<p>Each of the different color schemes are used with the purpose of
enhancing a website.  While you can pick any of the different schemes, a practiced UX
designer will consider whether a specific type of color scheme is more
suitable for certain websites than others.  For example, complementary colors 
are well-suited for websites that will have bars and charts.</p>
<p>It also depends on several other factors such as the number of colors
that you are going to need for your webpage, the topic and domain of the
webpage, user demographics of the readers and so on.  For example, an 
informational website for medical services will typically have a white 
background.</p>
<p>Other than the color schemes mentioned, even achromatic themes with
only black and white color can be appealing if styling and design is
well presented.</p>

<h4>Factors to consider for themes and colors</h4>

<p>While color schemes serve as a guide for picking website colors,
there are some factors that must be considered in the process. The user
experience must be of the utmost priority as a good webpage must be able
to sustain the attention of the reader without overwhelming them. A good
webpage will have a good balance of information and design elements. An
unbalanced web design can lead to what we call as cognitive overload.
Cognitive overload is when too much information or activity is presented
to the user which may be detrimental to the user experience.</p>
<p>There is a field of research in psychology that focuses on the
effects color has on the mood of a user. Nature-inspired color tones are
almost universally seen to be more pleasant and add aesthetic value. As
people are increasingly spending time on the internet, a good theme may
make or break the appeal of a webpage. Often, it is a good idea to keep
a palette of more than one color combination on hand so you can
experiment with your webpage.</p>
<p>A color theme on a website also plays a role in other aspects beyond
the aesthetics and help in shaping the user experience of the website. A
simple theme with appropriate color combinations can help a user
navigate the website by creating a visual hierarchy. If for example, a
user observes a specific color scheme for the subheadings, they will be
able to understand where to look for certain information on the web
page. This means you can avoid excessive design elements such as
line-breaks and grids where they are not adding to the appeal of the web
page.</p>
<p>While the experience of choosing the right colors for your website is
a process of trial and error, inspiration can be drawn from a webpage
that has held a personal appeal. Color theory is an important aspect of
the user experience domain and plays an important role in website design
so don’t be afraid to experiment with different color schemes.</p>

<h4>Congratulations, you have completed HTMLS and CSS in depth!</h4>

<p>Congratulations on reaching the end of this HTML and CSS in-depth
course in the front-end developer program.</p>
<p>You've worked hard to get here, learned a lot, and developed a lot of
new skills during the course, you are able to demonstrate some of this
learning and your practical HTML and CSS development skill set by
creating a video and audio player that can rate media on a homepage for
a client persona.</p>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~ 266. outline of course objectives (265) ~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p align="center">
<img class="displayed"
  src="/images/image266.png?raw=true"
  title="Summary: Use tags, create forms, create layouts and perform tests"
  alt="Summary: Use tags, create forms, create layouts and perform tests."
  style="width:25%" />
</p>

<p>In addition to these, following your completion of this course in HTML and CSS 
development, you should now be able to use;</p>

<ul>
  <li>Use common semantic and Meta tags, as well as web page layouts and components 
    using HTML,</li>
  <li>Create forums with client-side validation using HTML,</li>
  <li>Create layouts, charts, effects, and animations using CSS, and</li>
  <li>Perform basic front-end testing, debugging, and error handling.</li>
</ul>

<p>What are the next steps?</p>

<p>This is the fourth course in the front-end developer program, and you've gained a 
valuable understanding of important concepts and practical skills. You probably 
realize that there's still more for you to learn.</p>
<p>If you find this course helpful and want to discover more, then why not register 
for the next course on react basics.</p>
<p>Throughout each of the courses in the program, you'll continue to
expand your skill set, and in the final assessment, you'll bring
together all the skills you've learned to manage your own project.
Whether you're just starting out as a technical professional or a
student, this project will enable you to prove your knowledge and
ability.</p>
<p>Once you've completed all the courses in this front-end developer
program, you'll receive Coursera certification.
Certifications provide globally recognized an industry-endorsed
evidence of mastering technical skills.</p>
<p>Well done on taking steps towards a future career.
Your project experience so far shows employers that you are
self-driven and innovative.
It also speaks volumes about you as an individual and your drive to
continue your educational progress.</p>
<p>Congratulations once again on reaching the end of this course. It's
been a voyage of discovery.
Best of luck, and do continue to pursue your own learning objectives
to their final goal.</p>

<h6>The end…</h6>

<h5>SUMMARY Coursera - HTML and CSS in Depth</h5>

<h4>Week 1 – HTML Deep Dive</h4>

<h5>HTML in depth</h5>

<p>In this module, you will use structured semantic data to control how
web sites appear to the user. You will create semantic HTML to structure
webpages to look good and work well.</p>

<h5>23 videos, 20 readings</h5>

<ol type="1">
  <li><a href="https://www.coursera.org/lecture/html-and-css-in-depth/introduction-to-the-program-6j2oH" 
    target="_blank" rel="noopener noreferrer">Video: Introduction to the Program</a></li>
  <li>Video: Introduction to HTML and CSS in depth</li>
  <li>Reading: Course syllabus</li>
  <li>Video: How are HTML and CSS used in the real world?</li>
  <li>Reading: How to be successful in this course</li>
  <li>Video: Recap: What you know about HTML and CSS</li>
  <li>Reading: Working with labs in this course</li>
  <li>Video: Semantic tags and why we need them</li>
  <li>Reading: Semantic HTML cheat sheet</li>
  <li>Video: Semantic tags in action</li>
  <li>Video: Metadata</li>
  <li>Reading: Metadata cheat sheet</li>
  <li>Video: Bare bones layout</li>
  <li>Reading: Layout design</li>
  <li>Video: UX with meta tags</li> 
  <li>Reading: Social media cards</li>
  <li>Video: Setting up a social media card</li>
  <li>Reading: Additional resources</li>
  <li>Video: Forms and validation</li>
  <li>Reading: Input types</li>
  <li>Video: Creating a form</li>
  <li>Video: Making the most of client-side validation</li>
  <li>Reading: Visual Studio Code on Coursera</li>
  <li>Reading: Create and test a form (solution)</li>
  <li>Video: Radio buttons</li>
  <li>Reading: Cheat sheet: Interactive form elements</li>
  <li>Video: Using interactive form elements</li>
  <li>Video: Form submission</li>
  <li>Reading: Submit</li>
  <li>Video: Browser differences</li>
  <li>Reading: Glossary: HTML form elements</li>
  <li>Reading: Create a complex form (solution)</li>
  <li>Reading: Additional resources</li>
  <li>Video: Video and audio</li>
  <li>Video: Embedded players</li>
  <li>Reading: Rate the media (solution)</li>
  <li>Reading: Images</li>
  <li>Video: iFrames</li>
  <li>Reading: iFrame sandbox cheat sheet</li>
  <li>Video: iFrame as a picture</li>
  <li>Video: The canvas element</li>
  <li>Video: Module summary: HTML deep dive</li>
  <li>Reading: Additional resources</li>
</ol>

<h3>Week 2 - Interactive CSS</h3>

<h4>Interactive CSS</h4>

<p>In week 2, we will dive deeper into CSS by applying
increasingly specific styling to various elements.</p>

<h5>22 videos, 20 readings</h5>

<ol type="1">
  <li><a href="https://www.coursera.org/lecture/html-and-css-in-depth/css-web-layout-qsWww" 
    target="_blank" rel="noopener noreferrer">Video: CSS web layout</a></li>
  <li>Reading: Understanding flexbox</li>
  <li>Reading: CSS units of measurement</li>
  <li>Video: Basic flexbox</li>
  <li>Video: Flex charts</li>
  <li>Video: CSS grids</li>
  <li>Reading: Grids and flexbox cheat sheet</li>
  <li>Video: Grid showcase</li>
  <li>Reading: Grid template area</li>
  <li>Reading: Create a grid layout (solution)</li>
  <li>Video: Case study: How Meta creates responsive builds</li>
  <li>Reading: Additional resources</li>
  <li>Video: Widely used selectors</li>
  <li>Reading: All selectors and their specificity</li>
  <li>Video: Combination selectors</li>
  <li>Reading: Targeted CSS (solution)</li>
  <li>Video: Pseudo-classes</li>
  <li>Reading: Pseudo-elements</li>
  <li>Video: Practical use of pseudo</li>
  <li>Reading: CSS Pseudo cheat sheet</li>
  <li>Reading: Additional resources</li>
  <li>Video: What is an effect</li>
  <li>Video: Text effects</li>
  <li>Reading: Text effects cheat sheet</li>
  <li>Video: CSS Transforms and transitions</li>
  <li>Reading: Transforming and transitioning elements (solution)</li>
  <li>Video: CSS animation</li>
  <li>Reading: CSS keyframes</li>
  <li>Video: Animation examples</li>
  <li>Reading: Animation and effects cheat sheet</li>
  <li>Reading: Preprocessors: sass, scss, Stylus</li>
  <li>Reading: Additional resources</li>
  <li>Video: Common errors</li>
  <li>Video: Handling errors</li>
  <li>Reading: Installing a third-party Linter in VS Code</li>
  <li>Reading: Debugging the front-end</li>
  <li>Video: Debugging tools</li>
  <li>Video: Browser-specific CSS</li>
  <li>Video: UI testing</li>
  <li>Video: Case study: How Meta performs front-end testing</li>
  <li>Video: Module summary: Interactive CSS</li>
  <li>Reading: Additional resources</li>
</ol>

<h3>Week 3 – Course Recap</h3>

<h4>Graded Assessment</h4>

<p>In Week 3, we will be assessed on the key skills covered in the Course.</p>

<h4>6 videos, 5 readings</h4>

<ol type="1">
  <li><a href="https://www.coursera.org/lecture/html-and-css-in-depth/course-recap-qJl7p" 
    target="_blank" rel="noopener noreferrer">Video: Courserecap</a></li>
  <li>Reading: About the portfolio project</li>
  <li>Reading: Subject selection</li>
  <li>Video: Selecting the subject and working out the layout</li>
  <li>Video: Positioning the elements, creating placeholders</li>
  <li>Reading: Setting up your local development environment</li>
  <li>Video: Planning the user experience</li>
  <li>Reading: Creating themes</li>
  <li>Video: Exemplar: So far so good</li>
  <li>Video: Congratulations, you have completed HTMLS and CSS in depth!</li>
  <li>Reading: Next steps</li>
</ol>

<h4>Basic meta tags (meta tags For SEO)</h4>

<ul>
  <li>&lt;meta name=”description”/&gt; - provides a brief description of the web 
    page,</li>
  <li>&lt;meta name=”title”/&gt; - specifies the title of the web page,</li>
  <li>&lt;meta name=”author” content="name"&gt; - specifies the author of the web 
    page,</li>
  <li>&lt;meta name=”language” content="english"&gt; - specifies the language of 
    the web page,</li>
  <li>&lt;meta name="robots" content="index,follow" /&gt; - tells search engines 
    how to crawl or index a certain page,</li>
  <li>&lt;meta name="google"/&gt; - tells Google not to show the sitelinks 
    search box for your page when showing search results,</li>
  <li>&lt;meta name="googlebot" content=”notranslate” /&gt; - tells Google 
    you don’t want to provide an automatic translation for your page if the 
  user uses a different language,</li>
  <li>&lt;meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" /&gt; 
    - specifies the last modified date and time on which you have made certain 
  changes,</li>
  <li>&lt;meta name="rating" content="safe for kids"&gt; - specifies the expected 
    audience for your page, and</li>
  <li>&lt;meta name="copyright" content="Copyright 2022"&gt; - specifies a 
    Copyright.</li>
</ul>

<h4>&lt;meta http-equiv="..."/&gt; tags</h4>

<ul>
  <li>&lt;meta http-equiv="content-type" content="text/html"&gt; - specifies the format of 
    the document returned by the server,</li>
  <li>&lt;meta http-equiv="default-style"/&gt; - specifies the format of the styling 
    document,</li>
  <li>&lt;meta http-equiv="refresh"/&gt; - specifies the duration of the page before it’s 
    considered stale,</li>
  <li>&lt;meta http-equiv=”Content-language”/&gt; - specifies the language of the page, and</li>
  <li>&lt;meta http-equiv="Cache-Control" content="no-cache"&gt; - instructs the 
    browser how to cache your page.</li>
</ul>

<h4>Responsive design/mobile meta tags</h4>

<ul>
  <li>&lt;meta name="format-detection" content="telephone=yes"/&gt; - indicates that 
    telephone numbers should appear as hypertext links that can be clicked to make 
    a phone call,</li>
  <li>&lt;meta name="HandheldFriendly" content="true"/&gt; - specifies that the page 
    can be properly visualized on mobile devices, and</li>
  <li>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"/&gt; 
    - specifies the area of the window in which web content can be seen.</li>
</ul>

<p>the end...</p>

<footer>
  <h6>Last updated 12/21/23 6:54pm</h6>
  <h6>Last updated 3/12/24 5:08pm - Tuesday</h6>
  <h6>Last updated 3/27/24 11:19am - Wednesday</h6>
  <h6>Last updated 6/14/24 8:48am - Friday</h6>
</footer>

</body>
</html>
