(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-e9e4553a":"2c4cb941","chunk-fda5d328":"7c2ca32c"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vuejs-todolist-2.0/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var h=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";r("8926")},8926:function(t,e,r){},c898:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"p-10",attrs:{id:"nav"}},[r("Header",{on:{toggleMode:function(e){return t.switchMode()}}})],1),r("router-view",{attrs:{id:"view"}}),r("Footer",{staticClass:"footer w-full bg-primary-lightmoonlight"})],1)},o=[],s=r("d4ec"),i=r("262e"),l=r("2caf"),c=r("9ab4"),u=r("1b40"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full flex flex-row justify-end items-center"},[r("div",{staticClass:"mr-6"},[r("router-link",{staticClass:"font-bold",attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{staticClass:"font-bold",attrs:{to:"/todoPage"}},[t._v("To Dos")]),t._v(" | "),r("router-link",{staticClass:"font-bold",attrs:{to:"/reportPage"}},[t._v("Daily Report")])],1),r("svg",{staticClass:"cursor-pointer",attrs:{id:"darkMode",width:"55",height:"55",viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.toggleMode()}}},[r("path",{staticClass:"sun",attrs:{d:"M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",fill:"#F9CB54"}})])])},d=[],f=u["b"].extend({data:function(){var t={moonPath:"M20 27C20 42.1878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 20 11.8122 20 27Z",sunPath:"M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",isDark:!1};return t},methods:{toggleMode:function(){var t=this.$anime.timeline({duration:750,easing:"easeOutExpo"});t.add({targets:".sun",d:[{value:this.isDark?this.sunPath:this.moonPath}]}).add({targets:"#darkMode",rotate:330},"-= 350").add({targets:["body","#view ul","main","section h3"],backgroundColor:this.isDark?"rgb(255, 255, 255)":"rgb(22, 22, 22)",color:this.isDark?"rgb(22, 22, 22)":"rgb(255, 255, 255)"},"-= 700").add({targets:[".calendar-wrapper h1",".calendar-wrapper span",".calendar-wrapper .header-arrow","select",".footer","label","#nav"],color:this.isDark?"rgb(22, 22, 22)":"rgb(9, 132, 227)"},"-= 1000").add({targets:[".calendar-wrapper .markOnly"],backgroundColor:"transparent"},"-= 1000"),this.isDark=!this.isDark}}}),p=f,g=r("2877"),m=Object(g["a"])(p,h,d,!1,null,null,null),v=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"flex flex-col justify-center items-center md:flex-row lg:flex-row md:justify-between lg:justify-between"},[r("div",{staticClass:"flex flex-col items-center p-0 md:pl-4 lg:pl-4 md:flex-row lg:flex-row"},[r("h6",[t._v("© "+t._s(t.currentYear))]),r("h6",{staticClass:"md:ml-1 lg:ml-1"},[t._v("hannah26hannah")])]),r("ul",{staticClass:"flex flex-row w-2/5 md:w-1/5 lg:w-1/5 justify-around items-center pr-4 md:mr-4 lg:mr-4"},[r("a",{attrs:{href:"https://github.com/hannah26hannah"}},[r("li",{staticClass:"hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md"},[r("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:["fab","github-alt"]}})],1)]),r("a",{attrs:{href:"mailto: guaranteed.by.prismo@gmail.com"}},[r("li",{staticClass:"hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md"},[r("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"envelope-open"}})],1)]),r("a",{attrs:{href:"https://hannah26hannah.github.io/"}},[r("li",{staticClass:"hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md"},[r("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"book-reader"}})],1)]),r("a",{attrs:{href:"https://www.linkedin.com/in/jeongwon-yoo/"}},[r("li",{staticClass:"hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md"},[r("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:["fab","linkedin-in"]}})],1)]),r("a",{attrs:{href:"https://uiyoji-journal.tistory.com/"}},[r("li",{staticClass:"hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md"},[r("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:["fab","blogger-b"]}})],1)]),r("a",{attrs:{href:""}},[r("li",{staticClass:"hover:bg-primary-lightblue pl-2 pr-2 text-xl rounded-md"},[r("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"book-reader"}})],1)])])])},y=[],w=u["b"].extend({data:function(){var t={currentYear:(new Date).getFullYear()};return t}}),C=w,x=Object(g["a"])(C,b,y,!1,null,null,null),D=x.exports,k=function(t){Object(i["a"])(r,t);var e=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),e.apply(this,arguments)}return r}(u["b"]);k=Object(c["a"])([Object(u["a"])({components:{Header:v,Footer:D}})],k);var O=k,_=O,j=(r("034f"),Object(g["a"])(_,a,o,!1,null,null,null)),M=j.exports,S=(r("4de4"),r("4160"),r("a434"),r("159b"),r("2f62"));n["a"].use(S["a"]);var T,P,Y={fetchUserTodo:function(){var t=localStorage.getItem("userTodos");return null!=t?JSON.parse(t):[]},fetchUserCate:function(){var t=localStorage.getItem("categories");return null!=t?JSON.parse(t):[{title:"기타 ✔",value:0,backgroundColor:"#ff9f43"}]}},J=new S["a"].Store({state:{todos:Y.fetchUserTodo(),categories:Y.fetchUserCate()},getters:{pendingTodo:function(t){return t.todos.filter((function(t){return 0==t.isDone}))},doneTodo:function(t){return t.todos.filter((function(t){return 1==t.isDone}))},chartValues:function(t){var e=t.categories;return e.forEach((function(e){for(var r=0,n=0;n<t.todos.length;n++)r+=e.title==t.todos[n].cate?1:0,e.value=r})),e},getRatio:function(t){var e=t.categories,r=e.filter((function(t){return t.value>0})).length,n=[];return e.forEach((function(t){var e=t.value>0?Math.floor(t.value/r*100):0;n.push({t:t.title,p:e})})),n}},mutations:{addNewCate:function(t,e){t.categories.push({title:e.title,value:0,backgroundColor:e.color}),localStorage.setItem("categories",JSON.stringify(t.categories))},modifyCate:function(t,e){var r=t.categories,n=e.index,a=e.backgroundColor,o=e.title;a&&n&&(r[n].backgroundColor=a),o&&n&&(r[n].title=o),localStorage.setItem("categories",JSON.stringify(t.categories))},deleteCate:function(t,e){var r=t.categories;e&&r.splice(e,1),localStorage.setItem("categories",JSON.stringify(t.categories))},addNewTodo:function(t,e){t.todos.push(e),localStorage.setItem("userTodos",JSON.stringify(t.todos))},removeOneItem:function(t,e){var r=JSON.parse(localStorage.getItem("userTodos"));r.splice(e,1),localStorage.setItem("userTodos",JSON.stringify(r)),t.todos.splice(e,1)}}}),E=(r("c898"),r("1209")),N={install:function(t){t.prototype.$anime=E["a"]}},F=N,$=r("ecee"),A=r("c074"),I=r("f2d1"),B=r("ad3d"),U=(r("d3b7"),r("8c4f")),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full h-auto flex flex-col justify-center items-center"},[r("Calendar")],1)},L=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"container flex flex-row flex-wrap w-full h-auto justify-around items-center"},[r("Control",{on:{"skip-by":t.skipBy}}),r("section",{staticClass:"calendar-wrapper flex flex-col justify-center items-center rounded border border-solid bg-gray-200 h-full cal-wrapper m-1"},[r("div",{staticClass:"flex flex-row justify-around items-center w-full h-12 text-lg bg-primary-lightmoonlight"},[r("font-awesome-icon",{staticClass:"header-arrow cursor-pointer",attrs:{icon:"angle-double-left"},on:{click:function(e){return t.controlYear("prev")}}}),r("font-awesome-icon",{staticClass:"header-arrow cursor-pointer",attrs:{icon:"angle-left"},on:{click:function(e){return t.controlMonth("prev")}}}),r("h1",{staticClass:"font-bold"},[t._v(t._s(t.monthToString))]),r("span",[t._v(t._s(t.year))]),r("font-awesome-icon",{staticClass:"header-arrow cursor-pointer",attrs:{icon:"angle-right"},on:{click:function(e){return t.controlMonth("next")}}}),r("font-awesome-icon",{staticClass:"header-arrow cursor-pointer",attrs:{icon:"angle-double-right"},on:{click:function(e){return t.controlYear("next")}}})],1),r("table",{staticClass:"w-full h-auto"},[r("thead",{staticClass:"flex w-full h-12 justify-around items-center"},t._l(t.days,(function(e){return r("th",{key:e},[t._v(t._s(e))])})),0),r("tbody",t._l(t.dates,(function(e,n){return r("tr",{key:n,staticClass:"flex w-full h-12 justify-around items-center mb-3"},t._l(e,(function(e,a){return r("td",{key:a,staticClass:"w-12 h-12 flex flex-col justify-center items-center hover-date rounded-full",class:{"selected-date":e===t.currentDate&&t.isCurrentDate,"prev-dates":t.isPrevDates(e,n)}},[r("div",{staticClass:"dateOnly w-full flex items-center justify-center"},[t._v(" "+t._s(e)+" ")]),t.getMatchedTodos(e).length>0&&!t.isPrevDates(e,n)?r("div",{staticClass:"markOnly w-full flex flex-row items-center justify-center"},t._l(t.getMatchedTodos(e).slice(0,3),(function(e,n){return r("div",{key:n,staticClass:"todo-dot text-primary-blue"},[e.createdAt&&!e.completedAt?r("font-awesome-icon",{staticClass:"text-xs",attrs:{icon:"circle-notch"}}):t._e(),e.createdAt&&e.completedAt?r("font-awesome-icon",{staticClass:"text-xs",attrs:{icon:"circle"}}):t._e()],1)})),0):t._e()])})),0)})),0),r("tfoot",{staticClass:"text-primary-lightgray text-xs"},[r("tr",[r("td",[r("font-awesome-icon",{staticClass:"text-xs text-primary-blue",attrs:{icon:"circle-notch"}}),t._v(" : Created Todos "),r("font-awesome-icon",{staticClass:"text-xs text-primary-blue",attrs:{icon:"circle"}}),t._v(" : Completed Todos ")],1)]),r("tr",[t._v(" Only three todos are displayed per day ")])])])])],1)},Z=[],K=(r("c975"),r("3835")),q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"mb-4 border border-solid rounded"},[r("table",{staticClass:"border-collapse",staticStyle:{width:"297px"}},[r("th",[r("td",{staticClass:"w-1/2 hover:bg-primary-lightmoonlight p-2 cursor-pointer",class:{isOpenClass:t.isOpen},on:{click:t.callSKipToToday}},[t._v("📆 Skip to Today")]),r("td",{staticClass:"w-1/2 hover:bg-primary-lightmoonlight border border-b-0 border-t-0 border-r-0 p-0 cursor-pointer",on:{click:t.handleOpen}},[t._v("📆 Skip By Month")])]),t.isOpen?r("tbody",[r("tr",{attrs:{rowspan:"2"}},[r("td",{staticClass:"p-4"},[r("ul",{staticClass:"flex flex-row flex-wrap lg:flex-col"},t._l(t.months,(function(e,n){return r("li",{key:n,staticClass:"hover:bg-primary-lightmoonlight cursor-pointer ml-2 p-1 hover:font-semibold",staticStyle:{"border-radius":"12px"},on:{click:function(e){return t.callSkipByMonth(n)}}},[t._v(" "+t._s(e))])})),0)])])]):t._e()])])},V=[],W={props:["today"],data:function(){return{months:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug","Sep.","Oct.","Nov.","Dec."],isOpen:!1}},methods:{handleOpen:function(){this.isOpen=!this.isOpen},callSKipToToday:function(){this.$emit("skip-by","today")},callSkipByMonth:function(t){this.$emit("skip-by",t)}}},z=W,G=Object(g["a"])(z,q,V,!1,null,null,null),Q=G.exports,X={components:{Control:Q},data:function(){return{days:["SUN","MON","TUE","WED","THU","FRI","SAT"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],dates:[],currentYear:0,currentMonth:0,year:0,month:0,currentDate:(new Date).getDate(),prevDate:[],previewDate:[]}},computed:{monthToString:function(){return this.months[this.month-1]},isCurrentDate:function(){var t=!1;return t=0===this.currentYear&&0===this.currentMonth||this.currentYear===(new Date).getFullYear()&&this.currentMonth===(new Date).getMonth()+1,t}},created:function(){this.init()},methods:{init:function(t){if(t)this.year=t[0],this.month=t[1],this.calendarDate();else{var e=new Date;this.year=e.getFullYear(),this.month=e.getMonth()+1,this.calendarDate()}},calendarDate:function(){var t=this.getFirstDayLastDate(this.year,this.month),e=Object(K["a"])(t,3),r=e[0],n=e[1],a=e[2];this.dates=this.getDaysOfMonth(r,n,a)},getFirstDayLastDate:function(t,e){var r=new Date(t,e-1,1).getDay(),n=new Date(t,e,0).getDate(),a=e-1;1===e&&(a=12,t-=1);var o=new Date(t,a,0).getDate();return[r,n,o]},getDaysOfMonth:function(t,e,r){var n=1,a=r-t+1,o=[],s=[];while(n<=e){if(1===n&&(this.getPrevDates(t,s,a),this.padDates(s)),7===s.length)o.push(s),n=s[s.length-1],s=[];else if(s.length<7&&s.indexOf(e)>-1){this.padDates(s),o.push(s);break}n++,s.length<=7&&s.push(n)}return o},getPrevDates:function(t,e,r){for(var n=0;n<t;n++)e.push(r),this.prevDate.push(r),r+=1},padDates:function(t){var e=t.length,r=7-e;if(e>=0&&e<7)for(var n=1;n<=r;n++)t.push(n),this.previewDate.length<r&&this.previewDate.push(n)},controlMonth:function(t){"prev"===t?(this.currentMonth=this.month-1,this.currentYear=this.year,1===this.month&&(this.currentMonth=12,this.currentYear=this.year-=1)):(this.currentMonth=this.month+1,this.currentYear=this.year,12===this.month&&(this.currentMonth=1,this.currentYear=this.year+=1));var e=[this.currentYear,this.currentMonth];this.init(e)},controlYear:function(t){this.currentYear="prev"===t?this.year-1:this.year+1;var e=[this.currentYear,this.month];this.init(e)},skipBy:function(t){this.currentYear=(new Date).getFullYear(),this.currentMonth="today"===t?(new Date).getMonth()+1:t+1;var e=[this.currentYear,this.currentMonth];this.init(e)},getMatchedTodos:function(t){var e=this;return this.$store.state.todos.filter((function(r){var n=new Date(r.createdAt),a=n.getDate()===t,o=n.getMonth()===e.month-1,s=n.getFullYear()===e.year;return a&&o&&s}))},isPrevDates:function(t,e){return this.prevDate.indexOf(t)>-1&&e<1||this.previewDate.indexOf(t)>-1&&e>1}}},tt=X,et=Object(g["a"])(tt,R,Z,!1,null,null,null),rt=et.exports,nt=(T=Object(u["a"])({components:{Calendar:rt}}),T(P=function(t){Object(i["a"])(r,t);var e=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),e.apply(this,arguments)}return r}(u["b"]))||P),at=nt,ot=Object(g["a"])(at,H,L,!1,null,null,null),st=ot.exports;n["a"].use(U["a"]);var it=[{path:"/",name:"Home",component:st},{path:"/todoPage",name:"TodoPage",component:function(){return r.e("chunk-fda5d328").then(r.bind(null,"ea9e"))}},{path:"/reportPage",name:"ReportPage",component:function(){return r.e("chunk-e9e4553a").then(r.bind(null,"7dca"))}}],lt=new U["a"]({mode:"history",base:"/vuejs-todolist-2.0/",routes:it}),ct=lt;n["a"].use(F),$["c"].add(A["i"],A["k"],A["f"],A["c"],A["d"],A["a"],A["b"],A["g"],A["h"],A["e"],A["j"]),$["c"].add(I["b"],I["c"],I["a"]),n["a"].component("font-awesome-icon",B["a"]),n["a"].config.productionTip=!1,new n["a"]({store:J,router:ct,render:function(t){return t(M)}}).$mount("#app")}});
//# sourceMappingURL=app.dbd87757.js.map