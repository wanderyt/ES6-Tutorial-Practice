// Template
console.log(`string text line 1
    string text line 2`);

// Template with data binding
function fn() {
  return "Hello World";
}

`foo ${fn()} bar`
"foo Hello World bar"

// Another example
let str = "return " + "`Hello ${name}!`";
let func = new Function("name", str);
func("Jack") // "Hello Jack!"

// Generate template
var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) {%>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

