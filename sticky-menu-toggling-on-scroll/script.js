$('body') // => select <body> element
    .margin(0) // => adding css margin
    .padding(0) // => adding css padding
    .height('300vh') // => adding css height 
    .fontFamily('system-ui') // => adding css font-family

$('#header') // => select element has the id named header
    // style header
    .position('sticky') // => adding css position
    .top(0) // => adding css top
    .maxWidth('100%') // => adding css max-width
    .height(60) // => adding css height
    .color('#000') // => adding css color
    .transition(0.5) // => adding css transition
    .display('flex') // => adding css display
    .alignItems('center') // => adding css align-items
    .padding('0 70px') // => adding css padding
    // add logo container div & style it
    .insert('div') // => insert child into "#header" has a "div" tag name
    .setId('logoContainer') // => set ID to the new child
    .width(100) // => adding css width to the new child
    .height('100%') // => adding css height to the new child
    .position('relative') // => adding css position to the new child
    // add logo img & style it
    .insert('img') // => insert into the new element has "div" tag name and id "logoContainer" a new element has "img" tag name
    .setId('logoImageColored') // => set ID to the new child "img"
    .addAttr('src', 'https://d1yei2z3i6k35z.cloudfront.net/4555433/64dc0776841e4_sticky-menu-colored-logo.png') // => adding attribute name to the new child "img", attribute name "src" and the value "https://d1yei2z3i6k35z.cloudfront.net/4555433/64dc0776841e4_sticky-menu-colored-logo.png"
    .width('100%') // => adding css width to the new child "img"
    .position('absolute') // => adding css position to the new child "img"
    .transition(0.5)  // => adding css transition to the new child "img"
    .left(0)  // => adding css left to the new child "img"
    .top(0) // => adding css top to the new child "img"
    .parent()  // => back to the new child's "img" direct parent, which should be "div#logoContainer"
    .insert('img')  // => insert into the "div#logoContainer" element a new child has tag name "img"
    .setId('logoImageWhite')  // => set ID to the new child "img"
    .addAttr('src','https://d1yei2z3i6k35z.cloudfront.net/4555433/64dc0781ef611_sticky-menu-white-logo.png') // => adding attribute name to the new child "img", attribute name "src" and the value "https://d1yei2z3i6k35z.cloudfront.net/4555433/64dc0781ef611_sticky-menu-white-logo.png"
    .opacity(0) // => adding css opacity to the new element "img"
    .transition(0.5)  // => adding css transition to the new element "img"
    .width('100%')  // => adding css width to the new element "img"
    .position('absolute')  // => adding css position to the new element "img"
    .left(0)  // => adding css left to the new element "img"
    .top(0)  // => adding css top to the new element "img"
    .parent(2)  // => back to the parent which has order "2" that should be "#header"
    // add menu container div & style it
    .insert('div')  // => add a new child to "#header" element has a "div" tag name
    .setId('Menu-container')  // => set id to the new element "div"
    .width('100%')  // => adding css width to the new element "div"
    .transition(0.3)  // => adding css transition to the new element "div"
    // add ul element and style it
    .insert('ul')  // => insert into "div#Menu-container" a new element has tag name "ul"
    .justifyContent('center')  // => adding css justify-content to the new element "ul"
    .listStyle('none')  // => adding css list-style to the new element  "ul"
    .display('flex')  // => adding css display to the new element "ul"
    // add li element and style it
    .insert('li')  // => insert into "ul" a new element has a "li" tag name
    .margin('0 10px')  // => adding css margin to the new element "li"
    .text('tab 1')  // => insert text into the new child "li" has a value "tab 1"
    .parent() // => back to the direct parent which should be "ul"
    // add li element and style it
    .insert('li') // => insert into "ul" a new element has a "li" tag name
    .margin('0 10px') // => adding css margin to the new element "li"
    .text('tab 2') // => insert text into the new child "li" has a value "tab 2 
    .parent() // => back to the direct parent which should be "ul"
    // add li element and style it
    .insert('li') // => insert into "ul" a new element has a "li" tag name
    .margin('0 10px') // => adding css margin to the new element "li"
    .text('tab 3') // => insert text into the new child "li" has a value "tab 3"
    .parent() // => back to the direct parent which should be "ul"
    // add li element and style it
    .insert('li') // => insert into "ul" a new element has a "li" tag name
    .margin('0 10px') // => adding css margin to the new element "li"
    .text('tab 4') // => insert text into the new child "li" has a value "tab 4"
    .parent() // => back to the direct parent which should be "ul"

document.addEventListener('scroll', _ => { // when the user start scroll the next function will be execute
    if (window.scrollY > 90) {
        $('#header') // select the element wich has ID named "header"
        .background('#001c64') // => adding css background the "#header" element
        .color('#fff')  // => adding css color the "#header" element
        $('#logoImageWhite')// select the element wich has ID named "logoImageWhite"
        .opacity(1) // => adding css opacity the "#logoImageWhite" element
        $('logoImageColored')// select the element wich has ID named "logoImageColored"
        .opacity(0) // => adding css opacity the "#logoImageColored" element
    } else {
        $('#header')
        .background('transparent') // => adding css background the "#header" element
        .color('#000') // => adding css color the "#header" element
        $('#logoImageWhite')// select the element wich has ID named "logoImageWhite"
        .opacity(0) // => adding css opacity the "#logoImageWhite" element
        $('logoImageColored')// select the element wich has ID named "logoImageColored"
        .opacity(1) // => adding css opacity the "#logoImageColored" element
    }
})