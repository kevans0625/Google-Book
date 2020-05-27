(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(32),a(25)),i=a(1);a(33);var s=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-6"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("svg",{className:"fill-current h-8 w-8 mr-2",width:"54",height:"54",viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"})),r.a.createElement("span",{className:"font-semibold text-xl tracking-tight"})),r.a.createElement("div",{className:"w-full rounded block flex-grow lg:flex lg:items-center lg:w-auto"},r.a.createElement("div",{className:"text-sm lg:flex-grow"},r.a.createElement("a",{href:"/search",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"},"Search"),r.a.createElement("a",{href:"/saved",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"},"Saved")))),r.a.createElement("br",null),r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"font-semibold text-4xl tracking-tight"},"(React) Google Books Search"),r.a.createElement("br",null),r.a.createElement("h5",null,"Seach For and Save Books of Interest")))},m=a(9);a(34);var u=a(10),f=a.n(u),d=function(){return f.a.get("/api/books")},h=function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)};function g(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function v(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){d().then((function(e){console.log(e),l(e.data)})).catch((function(e){return console.log(e)}))}),[]);var c=a.results;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},"SAVED BOOKS"),r.a.createElement("br",null),c?r.a.createElement(g,null,c.map((function(e){return r.a.createElement(v,{key:e.id},r.a.createElement("strong",null,e.title," by ",e.author))}))):r.a.createElement("h3",null,"No Results to Display"))},b=a(11),p=a(14);function w(e){return r.a.createElement("div",{className:" form-group"},r.a.createElement("input",Object.assign({className:"form-control",id:"search",type:"text",placeholder:"Search"},e)))}function x(e){return r.a.createElement("button",Object.assign({className:"btn btn-success"},e,{style:{float:"right"}}),"Search")}var k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({search:"",results:[],error:""}),o=Object(m.a)(c,2),i=o[0],s=o[1],u=function(e){console.log(e),h().then((function(e){if("error"===e.data.items)throw new Error(e.data.items);console.log(e);var t=e.data.items;t=t.map((function(e){return e={key:e.id,id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})),l({results:t,error:""})})).catch((function(e){return l({error:e.items})}))},f=a.results;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(w,{name:"search",onChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(p.a)(Object(p.a)({},i),{},Object(b.a)({},a,n)))}}),r.a.createElement(x,{onClick:function(e){e.preventDefault(),console.log(i.search),u(i.search)}})),r.a.createElement("br",null),r.a.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},"RESULTS"),r.a.createElement("br",null),console.log(f),f?r.a.createElement(g,null,f.map((function(e){return r.a.createElement(v,{key:e._id},r.a.createElement("div",{class:"card"},r.a.createElement("img",{class:"card-img-top",src:e.image,alt:"Card image cap"}),r.a.createElement("div",{class:"card-header"},r.a.createElement("h5",{class:"card-title"},e.title)),r.a.createElement("div",{class:"card-body"},r.a.createElement("blockquote",{class:"blockquote mb-0"},r.a.createElement("footer",{className:"blockquote-footer"},"By: ",r.a.createElement("cite",{title:"Source Title"},e.author)),r.a.createElement("p",{class:"card-text"},e.description)))))}))):r.a.createElement("h3",null,"No Results to Display"))};var N=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(i.a,{exact:!0,path:"/search",component:k}),r.a.createElement(i.a,{exact:!0,path:"/saved",component:E})))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.a7aef684.chunk.js.map