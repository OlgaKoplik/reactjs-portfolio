(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACZCAMAAACIRlGzAAAAYFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+bm5vR0dG3t7fp6elCQkL09PTd3d0nJyeHh4dra2uqqqrExMRXV1ejEQ53AAAAEXRSTlMANJZYDUQa+xEgiGSAbEm28NDrxQ4AAAM0SURBVHja7d3tlpowEAbg4KKubj0tJHypwP3fZRWQTAISEIKmfeeXGgjPhiEZPOoyNhS7vSE2bEJsTL3t2OuxCwwxjWrqDVRQQQUVVFBB/RTq/oOp32p4Jqq6ua925qutRupB3X5Y6gez4qj2dpzXmw8qqKCCCiqooILqFvWghDev843a22Zeb57aGwucCbZ3RboHFVRQQQUVVFBBBRVUUG+RhvcQDlDPlTSMHaAmNTV0h5q6kKs1NXOBGjtzWTk0qg7lqkMzgEPz6pqrlTwUvz/Ibw+ieqTOZCseqpF197+0jbkdKjmB0cMs6tdKslmkUdPu/pIq7FDJZdFS66kyvA5Qw+7+vGfIbVBTSs261MJATSnV0qgGMgHy+4NCJkAyJgHkEiAToLBElQtjdSwuXYF6WeX8EYKe43r/jPOm/fZccH6xN6oZHdVCHVWu50NBZ4i0HUz6PH5PrjaDLAcqIzPEWSZFQv708D0zgNCptD1ZjzpiXi10qiDUFUd1xGqV6ytCf66mNDts5GpDFHJ4yooata28kSkzgBy4ntL6tn9828wCNapG4fqgXqoTLNQZoi8SbV7WEyRZnlr1TKkxOXbynHp9Vq/2LMwLUYsq0Qg1I+v4SKpyF5BZo9YJUPYnwPk5tXxWWvdUZoPUYN5llaszRF+cn5XWPfXuULBfShwN1LZ2e5RQUae9HHcXkJnrwKNq0z+7YEiANt+ybiHXWVgH761GLAGvfyhU0Bq0uXpp8okhamcGGEF9/QMhplEtRlDTdaimXM0H556097YwtkNtznpJk4+2lvVaKhdWTkvnupSWjbnWvjCVnuCyd1HMh25YIto+YumfQU0o9dp7tgfvWAVtj95NLQzUYiXqiAQYfMuioO12E8BwWRnfCMppu2XqygEqqP8GlX1psartpB572heufn/SMM77FtuysQMVVFBBBRVUUEGdGP5WjdPCRZ/W/ZzKSg9vWarH7AWooIIKKqigggoqqEuFr363/PAz0fal7u6z1cL7M5G6Ze+KbQAqqKCCCiqooIL60VT9FzA772mevqf8SuWa0Slff9inBqigggoqqKCC+p9S9X+ssij1L5dbbD5SgK30AAAAAElFTkSuQmCC"},function(e,a,t){e.exports=t.p+"static/media/Me.d3dcd455.jpg"},function(e,a,t){e.exports=t.p+"static/media/golf.4a88cd73.jpg"},,,,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(15),r=t.n(o),i=(t(28),t(5)),c=t(6),m=t(10),s=t(7),u=t(9),p=(t(29),t(30),function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("div",{className:"flip first"},l.a.createElement("div",null,l.a.createElement("div",null,"Html"))),l.a.createElement("div",{className:"flip second"},l.a.createElement("div",null,l.a.createElement("div",null,"Css"))),l.a.createElement("div",{className:"flip third"},l.a.createElement("div",null,l.a.createElement("div",null,"JavaScript"))))}),f=t(4),d=(t(31),t(16)),h=t.n(d),g=t(2),E=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).onClickHandler=function(){e.burger.current.checked=!1},e.mouseMove=function(a){var t=e.mouse.current;t.style.left=a.clientX+"px",t.style.top=a.clientY+"px",t.onmouseover=function(){t.style.opacity=".5",t.style.width="50px",t.style.height="50px"},t.onmouseout=function(){t.style.opacity=".1",t.style.width="70px",t.style.height="70px"}},e.burger=l.a.createRef(),e.mouse=l.a.createRef(),e.onClickHandler=e.onClickHandler.bind(Object(f.a)(e)),e.mouseMove=e.mouseMove.bind(Object(f.a)(e)),e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props&&this.props.menu.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},e.name))}),a=this.props&&this.props.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{target:e.target,title:e.title,href:e.href,rel:e.rel},l.a.createElement(g.a,{className:"menu__icon",icon:e.icon})))});return l.a.createElement("nav",{className:"menu",onMouseMove:this.mouseMove},l.a.createElement("a",{target:"_blank",title:"instagram.com/web__addict",href:"https://www.instagram.com/web__addict/",rel:"noopener noreferrer"},l.a.createElement("img",{className:"menu__logo",src:h.a,alt:"Logo"})),l.a.createElement("div",{className:"menu__nav"},l.a.createElement("input",{id:"burger",ref:this.burger,type:"checkbox"}),l.a.createElement("label",{htmlFor:"burger",className:"menu__burger"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{id:"mouse",ref:this.mouse}),l.a.createElement("ul",{className:"menu__list",onClick:this.onClickHandler},e),l.a.createElement("ul",{className:"social__list"},a),l.a.createElement("div",{className:"bg"})))}}]),a}(n.Component),A=(t(37),t(17)),b=t.n(A),k=function(){return l.a.createElement("section",{className:"home container",id:"home"},l.a.createElement("div",{className:"home__content"},l.a.createElement("img",{className:"home__img",src:b.a,alt:"MyPhoto"}),l.a.createElement("div",{className:"home__text"},l.a.createElement("span",{className:"home__hello"},"Hello"),l.a.createElement("h1",{className:"home__p"},"My name is Olga. I'm\xa0Front\u2011end\xa0developer."))))},v=(t(38),t(12)),_=t.n(v),w=t(18),N=t.n(w),y=t(3),C=t(13);y.b.add(C.a);var S=function(){return l.a.createElement("section",{className:"portfolio container",id:"portfolio"},l.a.createElement("div",{className:"portfolio__works"},l.a.createElement("article",null,l.a.createElement("h2",null,"My latest Works"),l.a.createElement("p",null,"I have extensive knowledge of CSS, HTML and JS, experience in developing websites and in creating responsive web pages using mobile-first approach.")),l.a.createElement("ul",{className:"portfolio__list--work"},l.a.createElement("li",{className:"portfolio__item firs--work"},l.a.createElement(_.a,{hash:"QPZxOL",user:"OlgaKoplik"}),l.a.createElement("span",null,"HTML, CSS, ReactJS"),l.a.createElement("h3",null,"Price List")),l.a.createElement("li",{className:"portfolio__item second--work"},l.a.createElement(_.a,{hash:"VJodVQ",user:"OlgaKoplik"}),l.a.createElement("span",null,"HTML, CSS, ReactJS"),l.a.createElement("h3",null,"Comment Block")),l.a.createElement("li",{className:"portfolio__item third--work"},l.a.createElement(_.a,{hash:"wLmXGa",user:"OlgaKoplik"}),l.a.createElement("span",null,"HTML, CSS"),l.a.createElement("h3",null,"Hover Animation")),l.a.createElement("li",{className:"portfolio__item fourth--work"},l.a.createElement(_.a,{hash:"ZdyKGY",user:"OlgaKoplik"}),l.a.createElement("span",null,"HTML, CSS, ReactJS"),l.a.createElement("h3",null,"Profile Card with image upload")),l.a.createElement("li",{className:"portfolio__item fifth--work"},l.a.createElement("iframe",{src:"https://olgakoplik.github.io/",title:"Golf Club"}),l.a.createElement("img",{src:N.a,alt:"GolfClub"}),l.a.createElement("span",null,"HTML5, SASS, AngularJS"),l.a.createElement("a",{target:"_blank",title:"olgakoplik.github.io",href:"https://olgakoplik.github.io/",rel:"noopener noreferrer"},"Go to project"),l.a.createElement("h3",null,"Golf Club with Registration form")))),l.a.createElement("div",{className:"portfolio__descr"},l.a.createElement("h2",{className:"portfolio__header"},"Stack of Technology"),l.a.createElement("ul",{className:"portfolio__list--tools"},l.a.createElement("li",{className:"html"},l.a.createElement(g.a,{icon:["fab","html5"]})),l.a.createElement("li",{className:"css"},l.a.createElement(g.a,{icon:["fab","css3-alt"]})),l.a.createElement("li",{className:"js"},l.a.createElement(g.a,{icon:["fab","js"]})),l.a.createElement("li",{className:"react"},l.a.createElement(g.a,{icon:["fab","react"]})),l.a.createElement("li",{className:"adobe"},l.a.createElement(g.a,{icon:["fab","adobe"]})))))},j=t(8),q=t(19),O=t(22),M=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(O.a)(e,2),t=a[0],o=a[1],r=function(e){e.persist(),o(function(a){return Object(q.a)({},a,Object(j.a)({},e.target.name,e.target.value))})};return l.a.createElement("form",{onSubmit:function(e){return function(e){e&&e.preventDefault();var a=t.message.replace(/\r\n|\r|\n/g,"%0D%0A").replace(" ","%20"),n="mailto:o.n.koplik@gmail.com?subject=Portfolio%20Email%20from%20"+t.name+"/"+t.email+"&body="+a;document.location=n}(e)},className:"contact__form"},l.a.createElement("input",{value:t.name,onChange:function(e){return r(e)},type:"text",name:"name",placeholder:"name",title:"Your name",maxLength:"50",required:!0}),l.a.createElement("input",{value:t.email,onChange:function(e){return r(e)},type:"email",name:"email",placeholder:"email",title:"Your email",maxLength:"50",required:!0}),l.a.createElement("textarea",{value:t.message,onChange:function(e){return r(e)},type:"text",name:"message",placeholder:"message",title:"Your message",maxLength:"550",required:!0}),l.a.createElement("input",{type:"submit",value:"send message"}))},H=(t(39),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).handleChange=function(a){e.setState(Object(j.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t=e.state.name,n=e.state.email,l=e.state.message;document.location="mailto:o.n.koplik@gmail.com?subject=Portfolio%20Email%20from%20"+t+"/"+n+"&body="+l},e.state={name:"",email:"",message:""},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props&&this.props.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{target:e.target,title:e.title,href:e.href,rel:e.rel},l.a.createElement(g.a,{className:"contact__icon",icon:e.icon}),e.name))});return l.a.createElement("section",{className:"contact container",id:"contact"},l.a.createElement("h2",null,"Get in touch!"),l.a.createElement("p",null,"Do you fancy saying hello to me or you want to get start your project?",l.a.createElement("br",null)," ",l.a.createElement("span",null,"Fell free to contact me.")),l.a.createElement("div",{className:"contact__block"},l.a.createElement("ul",{className:"contact__list"},e),l.a.createElement(M,null)))}}]),a}(n.Component)),L=(t(40),t(20));y.b.add(L.a);var K=function(){return l.a.createElement("footer",{className:"footer container",id:"footer"},l.a.createElement("div",null,"Olga Koplik 2019"),l.a.createElement("div",{className:"goBack"},l.a.createElement("a",{href:"#home"},l.a.createElement(g.a,{className:"footer__icon",icon:["fas","chevron-up"]}),"Go Back ")))},x=t(21);y.b.add(C.a,x.a);var V=[{name:"Home",url:"#home"},{name:"Portfolio",url:"#portfolio"},{name:"Contact",url:"#contact"}],B=[{name:"o.n.koplik@gmail.com",target:"_self",title:"send Email",href:"mailto:o.n.koplik@gmail.com?subject=The%20email%20from%20Portfolio",icon:["far","envelope"],rel:"noopener noreferrer"},{name:"linkedin.com/in/olga-koplik",target:"_blank",title:"linkedIn/olga-koplik",href:"https://www.linkedin.com/in/olga-koplik-2b9a38115/",icon:["fab","linkedin-in"],rel:"noopener noreferrer"},{name:"instagram.com/web__addict",target:"_blank",title:"instagram/web__addict",href:"https://www.instagram.com/web__addict/",icon:["fab","instagram"],rel:"noopener noreferrer"},{name:"codepen.io/OlgaKoplik",target:"_blank",title:"codepen.io/OlgaKoplik",href:"https://www.codepen.io/OlgaKoplik/",icon:["fab","codepen"],rel:"noopener noreferrer"},{name:"github.com/OlgaKoplik",target:"_blank",title:"github.com/OlgaKoplik",href:"https://github.com/OlgaKoplik/",icon:["fab","github"],rel:"noopener noreferrer"}],G=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={isLoading:!0},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.isLoading=setTimeout(function(){e.setState({isLoading:!1})},2500)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.isLoading)}},{key:"render",value:function(){return this.state.isLoading?l.a.createElement(p,null):l.a.createElement("div",{className:"app"},l.a.createElement(E,{social:B,menu:V}),l.a.createElement(k,null),l.a.createElement(S,null),l.a.createElement(H,{social:B}),l.a.createElement(K,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,1,2]]]);
//# sourceMappingURL=main.4be13b9d.chunk.js.map