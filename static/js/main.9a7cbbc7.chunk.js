(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{19:function(e,n,a){e.exports=a(37)},24:function(e,n,a){},25:function(e,n,a){},26:function(e,n,a){},27:function(e,n,a){},28:function(e,n,a){},29:function(e,n,a){},30:function(e,n,a){},31:function(e,n,a){},32:function(e,n,a){},37:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(17),c=a.n(r),i=(a(24),a(8)),m=a(1),o=(a(25),a(10)),s=a.n(o),u=a(11),d=a.n(u);a(26),a(27);function E(e){return e.reduce((function(e,n){return e.hasOwnProperty(n.type.name)||(e[n.type.name]=[]),e[n.type.name].push(n),e}),{})}function p(e){if("string"===typeof e.children)return l.a.createElement("span",{className:"address"},e.children);var n=E(e.children);return l.a.createElement("span",{className:"address"},n.Line1," ",n.Line2," ",l.a.createElement("br",null),n.City,", ",n.State," ",n.ZipCode)}function h(e){return l.a.createElement("span",{className:"line1"},e.children)}function f(e){return l.a.createElement("span",{className:"line2"},e.children)}function v(e){return l.a.createElement("span",{className:"city"},e.children)}function g(e){return l.a.createElement("span",{className:"state"},e.children)}function S(e){return l.a.createElement("span",{className:"zipCode"},e.children)}function N(e){return e.children}function b(e){return l.a.createElement(N,null,e.children)}function y(e){return l.a.createElement(N,null,e.children)}function D(e){var n=e.children;return n&&"string"===typeof n&&/^\d{10}$/.test(n)&&(n=n.substring(0,3)+"."+n.substring(3,6)+"."+n.substring(6,10)),l.a.createElement("div",{className:"phone"},"Phone: ",n)}function k(e){var n=e.enableLink,a=e.link;return n?(a||"string"!==typeof e.children||(a=e.children),l.a.createElement("div",{className:"email"},"Email: ",l.a.createElement("a",{href:"mailto:"+e.children},e.children))):l.a.createElement("div",{className:"email"},"Email: ",e.children)}function A(e){return l.a.createElement("li",{className:"item"},e.children)}a(28);function w(e){return l.a.createElement("div",{className:"experiences"},e.children)}function P(e){var n=E(e.children);return l.a.createElement("div",{className:"experience"},l.a.createElement("p",{className:"timePeriod"},n.StartDate," \u2013 ",n.EndDate),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"b"},n.Title),l.a.createElement("p",null,l.a.createElement("span",{className:"b"},n.Company)," \u2013 ",n.Address),l.a.createElement("ul",{className:"description"},n.Description)))}function C(e){return e.children}function I(e){return e.children}function x(e){return e.children}a(29);function J(e){return l.a.createElement("div",{className:"educations"},l.a.createElement("ul",null,e.children))}function M(e){var n=E(e.children);return l.a.createElement("div",{className:"education"},l.a.createElement("li",null,l.a.createElement("span",{className:"b"},n.Institite)),l.a.createElement("p",null,n.Degree,", ",n.Major,", ",n.StartDate," \u2013 ",n.EndDate))}function L(e){return e.children}function R(e){return e.children}function T(e){return e.children}a(30);function B(e){return E(e.children).Item?l.a.createElement("div",{className:"appendix"},l.a.createElement("div",{className:"header"},e.title),l.a.createElement("hr",null),l.a.createElement("ul",null,e.children)):l.a.createElement("div",{className:"appendix"},l.a.createElement("div",{className:"header"},e.title),l.a.createElement("hr",null),e.children)}function W(e){var n=E(e.children);return l.a.createElement("div",{className:"basicResume"},l.a.createElement("div",{id:"resumePrintDiv"},l.a.createElement("div",{className:"section nameSection"},n.Name),l.a.createElement("div",{className:"section contactSection"},l.a.createElement("div",{className:"floatLeft"},n.Address),l.a.createElement("div",{className:"floatRight"},n.Phone,n.Email)),n.Summary&&l.a.createElement("div",{className:"section summarySection"},l.a.createElement("div",{className:"header"},"Summary"),l.a.createElement("hr",null),n.Summary),l.a.createElement("div",{className:"section experiencesSection"},l.a.createElement("div",{className:"header"},"Professional Experience"),l.a.createElement("hr",null),n.Experiences),l.a.createElement("div",{className:"section educationSection"},l.a.createElement("div",{className:"header"},"Education"),l.a.createElement("hr",null),n.Educations),n.Appendix&&n.Appendix.map((function(e,n){return l.a.createElement("div",{key:n,className:"section experiencesSection"},e)}))))}function H(e){return l.a.createElement("span",{className:"name"},e.children)}a(31);function U(e){var n=e.selector||"#resumePrintDiv";return l.a.createElement("div",{className:"printer"},l.a.createElement("button",{onClick:function(){return function(e){d()(document.querySelector(e),{scale:.95}).then((function(e){var n=new s.a("p","px","letter"),a=e.toDataURL("image/jpeg",1);n.addImage(a,"JPEG",0,0),n.save("Yi Zhao - Resume.pdf")}))}(n)}},"print"))}function z(){return l.a.createElement("div",{className:"home"},l.a.createElement(U,null),l.a.createElement(W,null,l.a.createElement(H,null,"Yi Zhao"),l.a.createElement(p,null,l.a.createElement(h,null,"100 7th st"),l.a.createElement(f,null,"FL 2"),l.a.createElement(v,null,"Harrison"),l.a.createElement(g,null,"NJ"),l.a.createElement(S,null,"07029")),l.a.createElement(D,null,"2019121907"),l.a.createElement(k,{enableLink:!1},"genius.zhaoyi@gmail.com"),l.a.createElement(w,null,l.a.createElement(P,null,l.a.createElement(C,null,"Samsung SDS America"),l.a.createElement(I,null,"Full Stack Developer"),l.a.createElement(p,null,"Ridgefield Park, New Jersey, United States"),l.a.createElement(b,null,"04/2020"),l.a.createElement(y,null,"Present"),l.a.createElement(x,null,l.a.createElement(A,null,"Working on Samsung's Contact Center Application"),l.a.createElement(A,null,"Developing and maintaining web application using Angular 7, SASS, TypeScript in JavaScript, HTML and CSS."),l.a.createElement(A,null,"Working on it's back-end server in Java using Spring Boot, Spring Data, and MySQL."))),l.a.createElement(P,null,l.a.createElement(C,null,"ADP Inc"),l.a.createElement(I,null,"Application Developer"),l.a.createElement(p,null,"Parsippany, New Jersey, United States"),l.a.createElement(b,null,"01/2019"),l.a.createElement(y,null,"03/2020"),l.a.createElement(x,null,l.a.createElement(A,null,"Contributed to development of ADP Workforce Now as a Full Stack Developer."),l.a.createElement(A,null,"Developed web application using wide range of technologies, legacy to latest, including React, SASS, jQuery, JSP, and Dojo, in JavaScript, HTML and CSS."),l.a.createElement(A,null,"Designed and developed back-end server in Java using Spring Boot, Jersey, Hibernate, Kafka, and Oracle."),l.a.createElement(A,null,"Worked in marketplace API team - One of the most used features in ADP Workforce Now, providing data bridges internally to other ADP services and externally to clients and partners."),l.a.createElement(A,null,"Designed uniform data transfer contract, coordinating multiple services' requirements and restraints."),l.a.createElement(A,null,"Defined data transmission protocol to non-standard services."),l.a.createElement(A,null,"Provided reliable APIs with data validation and on failure roll-back."),l.a.createElement(A,null,"Analysed performance of existing API and provided optimized solution by merging DB transactions, removing redundant queries and fine-tone SQL queries."),l.a.createElement(A,null,"Developed React Webpack plugin to enforce company's coding conventions."))),l.a.createElement(P,null,l.a.createElement(C,null,"Menusifu Inc"),l.a.createElement(I,null,"Software Engineer Intern"),l.a.createElement(p,null,"Manhattan, New York, United States"),l.a.createElement(b,null,"05/2017"),l.a.createElement(y,null,"08/2017"),l.a.createElement(x,null,l.a.createElement(A,null,"Designed and implemented a web-based application using JavaScript, Angular 2, HTML, CSS, and Ionic Cordova for iOS/Android."),l.a.createElement(A,null,"Used Angular 2.0 to implement Single Page Application using Modules, Components, Services, and Routes."),l.a.createElement(A,null,"Interacted with back-end services by utilizing Representational State Transfer (RESTful)."),l.a.createElement(A,null,"Implemented and optimized the algorithm connecting the backend to MongoDB and Redis using Spring Data."),l.a.createElement(A,null,"Implemented the backend using Java Sprint Boot.")))),l.a.createElement(J,null,l.a.createElement(M,null,l.a.createElement(L,null,"Stevens Institite of Technology"),l.a.createElement(R,null,"Master of Science"),l.a.createElement(T,null,"Computer Science"),l.a.createElement(b,null,"2016"),l.a.createElement(y,null,"2018")),l.a.createElement(M,null,l.a.createElement(L,null,"University of Electronic Science and Technology of China"),l.a.createElement(R,null,"Bachelor's degree"),l.a.createElement(T,null,"Computer Software Engineering"),l.a.createElement(b,null,"2012"),l.a.createElement(y,null,"2016"))),l.a.createElement(B,{title:"Honors & Awards"},l.a.createElement(A,null,"Silver Medal at The 12th UESTC Programming Contest Final \u2013 2012"),l.a.createElement(A,null,"The ACM-ICPC Asia Region Programming Contest Bronze Medal \u2013 2013"))))}a(32);function j(){return l.a.createElement("div",{id:"NavBar",className:"navBar"},l.a.createElement(i.b,{to:"/"},"Home"),l.a.createElement(i.b,{to:"/about"},"About"))}var q=function(){return l.a.createElement(i.a,null,l.a.createElement(j,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/about"},l.a.createElement("div",null,"about")),l.a.createElement(m.a,{path:"/users"},l.a.createElement("div",null,"users")),l.a.createElement(m.a,{path:"/"},l.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9a7cbbc7.chunk.js.map