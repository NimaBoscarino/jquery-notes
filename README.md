# W3D2 Breakout - j'Query

Goal: A friendly but fast intro to jQuery

Repo: https://github.com/NimaBoscarino/jquery-notes

Topics:

1. Why does it exist (now)?
   1. Syntactical sugar
      1. helper functions (getting elements, assigning listeners)
   2. Cross browser compatibility
   3. Super popular
2. How much does it add to a browser?
   1. Nothing
   2. Works within the constraints of the browser APIs
   3. Nice selectors.... but really that's JS underneath
      1. it's still got a bunch of stuff that isn't in *RAW* JS
3. Library vs. Framework
   1. library: bunch of code written by someone else (or you) brought in to your project
   
   2. framework: library that takes over your life

  jQuery is a bit of both.
    You can really buy into the jQuery ecosystem.

4. $ vs. jQuery in code -> ABSOLUTELY NO DIFFERENCE

$('.container')

$ === jQuery


// MORE TO COME

5. jQuery vs. jQueryUI
   1. jquery UI => widgets built that NEED jquery to work
6. Why is it important to learn/use jQuery
   1. baby's first big library/framework

NOTE: 

- Read the JQUERY docs. THEY ARE AWESOME.
- there are many ways to do things with jquery
  - .on('click', function() {}) vs. .click(function (){})

- .on is the accepted the way to do things (the best way)


1. Event handling 
2. Element creation
3.  Alternatives

### [Selection](https://learn.jquery.com/using-jquery-core/selecting-elements/)

I want all the 'div' tags.

`$('div')`


### [Traversal](https://api.jquery.com/category/traversing/tree-traversal/)

Tell me about your siblings.

`$('button').siblings('input')`


### [Manipulation](https://api.jquery.com/category/manipulation/)

Your new value is `content`.

`$('input').val('content')`


### [Creation](http://api.jquery.com/jQuery/#jQuery2)

I'd like a new `<li>` tag that I can use for a new todo.

`$('<li>')`

This only creates the element, but it is not yet a part of the DOM.

```
var item = $('<li>').text(content)
$('ul').append(item)
```

In this example the `<ul>` tag is already a part of the document.

If you want to create the element in the append tag, jQuery will let you do that.

```
$('ul').append('<li>' + content + '</li>')
```

If you are already working on the `<li>` tag then you can append it to the `<ul>`.

```
$('<li>').text(content).appendTo('ul')
```


## Event Delegation

> Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

```
$('ul').on('click', 'li', function(event) {
  var li = $(event.target)
  li.toggleClass('done')
})
```