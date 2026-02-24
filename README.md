1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
Answer: 'getElementById' find element by using id, 'getElementsByClassName' find element by using classname, 'querySelector' find element by using css and return only frist element, 'querySelectorAll' also find element by using css but return all matching element.

2. How do you create and insert a new element into the DOM?
Answer: Frist create a element by using 'createElement', then add content or attribute to the element and last add  use 'appendChild' or 'append'.

3. What is Event Bubbling? And how does it work?
Answer: Event Bubbling is, when an event occurs on a child element it continues to rise up from parent to grandparent to document.
A button is inside a div. If the button is clicked: First the button's 'click event' will work, then the div's click event will work, then it can go through the body, html and then the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation means placing a single event listener on the parent element and handling the events of the children.
This is useful because:
Requires fewer listeners
Better performance.
Works with dynamic elements.


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser's default behavior.
stopPropagation() stops the bubbling of events.