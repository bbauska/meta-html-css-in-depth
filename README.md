# meta-css-in-depth
Advanced (in depth) CSS brought to you by meta.
HTML & CSS in Depth

Perhaps you know a little about HTML and CSS from another course you did, or perhaps you don't know much at all. 
Either way, a quick summary will be useful. 
So let's explore some basic HTML and CSS principles and practices. 
HTML stands for Hypertext Markup Language. 
But what does that mean? 
 
Hypertext is text which contains links to other text. 
Markup refers to tags and elements used within a document. 
 
HTML elements with their opening and closing tags in angle brackets make up an HTML document. 
These elements form the structure of a webpage and describe what to display to the web browser. 
When it comes to HTML, it's important to know about the purpose of HTML in the web browser. 
The use of HTML tags and correct syntax, and how HTML elements are used in a web document. 
But what can you do with HTML? 
You can add images to a web page with HTML code. 
You can use it to display data in tables, and you can build forms with a wide range of inputs. 
Also, using the correct HTML structure and appropriate elements as a foundation is an essential part of building accessible websites. 
HTML can assist in ensuring web accessibility by supporting the technology people with disabilities use to interact with and understand websites. 
Another important concept to know about when you're talking about HTML is the Document Object Model or DOM. 
Users need to be able to interact with elements on a web page. 
This means that HTML document must be represented in a way that JavaScript code can query and update it. 
That's the function of the DOM. 
It's a model of the objects in your HTML file. 
Web developers interact with the DOM through JavaScript to update content, set up events and animate HTML elements. 
Now that you've covered the basics of HTML, let's move on to CSS or Cascading Style Sheets. 
If HTML is the frame and structure of a building, then CSS is the paint, wallpaper, fixtures, and overall style. 
CSS tells the web browser how to display HTML elements on screen. 
 
You use CSS to style elements within an HTML document, create an appealing layout for your webpage using the box model, and arrange page elements using normal document flow. 
That was your HTML and CSS refresher. 
Now get ready to dive deeper into learning more about these two topics.

Semantic tags and why we need them
By now you know that HTML describes the content of a web page. 
But how do you describe the meaning of a web page?
To understand this in a real-world context, think of buttons in an elevator.
The vertical arrangement of buttons isn't enough for someone to understand their meaning.
To convey the meaning or semantics of the button, numbers are added so that people know which button will take them to which floor. 
When you write HTML it's good practice to semantically describe the content. 
This allows search engines and accessibility software such as screen readers to understand the contents of a page, fortunately you can do this by using some basic HTML tags. 
For example, using a heading tags such as H1 describes that the content is a heading. 
Similarly, the UL and OL tags describe lists. 
However, there are many more semantic HTML elements available to you as a developer.
In this report I will share a structured approach you can take to make sure that you create a well-formed web page. 
 
Let's revisit the basic structure of an HTML page which includes the head and body. 
Inside the body tag you can lay out the website with very semantic tags to describe each of the sections. 
 
For a typical HTML page, the structure can be semantically described using the header, main and footer semantic HTML tags. 
 
For example, suppose you lay out your page with a header section that contains some company logo and navigation links. 
Then a main section contains sections and articles. 
Finally, a footer section contains contact information and social media links. 
 
The main navigation section of your web page can also be described semantically using the Nav tag. 
Depending on how web pages designed the Nav element is often placed after the header element and the header element is used for logos. 
 
The main links of your website are then added inside the Nav element. 
It is common practice for developers to specify their links as an unordered list inside the Nav element. 
Next is the main content of a web page. 
The two key semantic elements for your main content are the article and section elements. 
First let's examine the article element. 
The HTML specification states that according to the World Wide Web Consortium's website, the article element indicates content which represents a complete. 
Or self-contained composition in a document page application or site that is independently distributable. 
That's quite a mouthful. 
It may help to think of a page in a newspaper. 
It may help to think of a page in a newspaper.
There are many articles on the page and you can cut out the individual articles with scissors if needed.
The articles you can remove are the article element.
Examples; forum post, magazine or newspaper article, a blog entry, user submitted comment, interactive widget or gadget, or any independent item of content.
Let's examine how the article element is used say you are developing a blog about your summer holiday.
It's good practice to contain the blog post content inside of the article element because it's a complete self-contained composition on a web page. 
You should place the article element within the main element.
Then add your regular heading <h2> and paragraph <p> tags within the article element.
The reason for doing it this way is because the main element semantically represents the main content of the page. 
And inside of it there can be multiple article elements for something like a blog post list. 
At the end of your document is the footer element.  
This might contain additional navigational links or content.

It is important to note that semantic elements are not limited to this structure. 
Since their purpose is to describe the semantics of the content, the elements can be nested inside of each other. 
If it accurately describes the content, let's update the previous example to use a nested semantic structure.
You add a header element to the article element, inside the header element at the heading element with the blog title and a paragraph element describing the date and author of the blog post. 
Inside the main element at the content of the blog post. 
That's it, let's examine the section element. 
You can add a section element to semantically define individual sections of the article. 
It is important to note that sections should contain heading elements to semantically describe the section. 
It is also possible to use section elements to describe different sections of your webpage, the section element doesn’t require the article element.
It all depends on how you want to semantically describe your page. 
And now you know how to semantically describe the contents of a web page, your web pages more accessible because the content is semantically described to add meaning.
Now, search engines and accessibility software can easily understand the contents of your well-formed web page.





