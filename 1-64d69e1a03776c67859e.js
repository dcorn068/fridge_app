(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{262:function(e,t,a){"use strict";var n=a(0),i=a.n(n),u=a(267),r=a.n(u),c=(a(285),a(10)),M=a.n(c),j=a(52),N=a.n(j),L=a(264),s=a(288),o=a.n(s),l=a(289),m=a.n(l),y=a(306),I=a.n(y),z=a(314),d=a.n(z),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isMobile:!1,mobileMenuOpen:!1},t.componentDidMount=function(){window.addEventListener("resize",t.handleResize.bind(N()(N()(t))))},t.componentWillUnmount=function(){window.removeEventListener("resize",t.handleResize.bind(N()(N()(t))))},t.handleResize=function(){console.log("hey! resizing over here"),t.setState({isMobile:window.innerWidth<=500})},t}M()(t,e);var a=t.prototype;return a.openMenu=function(){this.setState({mobileMenuOpen:!0})},a.render=function(){return i.a.createElement("nav",{className:"navbar is-transparent"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(L.Link,{to:"/",className:"navbar-item"},i.a.createElement("figure",{className:"image"},i.a.createElement("img",{src:o.a,alt:"Kaldi",style:{width:"88px"}})))),this.state.isMobile?i.a.createElement(m.a,{onClick:this.openMenu},i.a.createElement(I.a,null)):i.a.createElement("div",{className:"navbar-start"},i.a.createElement(L.Link,{className:"navbar-item",to:"/about"},"About"),i.a.createElement(L.Link,{className:"navbar-item",to:"/products"},"Products"),i.a.createElement(L.Link,{className:"navbar-item",to:"/recipes"},"Recipes")),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("a",{className:"navbar-item",href:"https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m.a,{onClick:this.props.onAccountClick},i.a.createElement(d.a,null))))))},t}(n.Component);a(315),t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(r.a,{title:"Home | Fridge App"},i.a.createElement("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"}),i.a.createElement("script",{src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js",id:"snipcart","data-api-key":"MDQ0MTE2MWMtYzgzMi00NTdkLTgzMGUtYTBlMjM0MzgwNDUzNjM2NzM0MTA1OTUwMTkxMDQ4"}),i.a.createElement("link",{href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",type:"text/css",rel:"stylesheet"})),i.a.createElement(p,null),i.a.createElement("div",null,t))}},264:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return l}),a.d(t,"StaticQueryContext",function(){return s}),a.d(t,"StaticQuery",function(){return o});var n=a(0),i=a.n(n),u=a(1),r=a.n(u),c=a(263),M=a.n(c);a.d(t,"Link",function(){return M.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var j=a(269),N=a.n(j);a.d(t,"PageRenderer",function(){return N.a});var L=a(74);a.d(t,"parsePath",function(){return L.a});var s=i.a.createContext({}),o=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function l(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}o.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},269:function(e,t,a){var n;e.exports=(n=a(287))&&n.default||n},287:function(e,t,a){"use strict";a.r(t);var n=a(18),i=a.n(n),u=a(0),r=a.n(u),c=a(1),M=a.n(c),j=a(117),N=a(5),L=function(e){var t=e.location,a=N.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(j.a,i()({location:t,pageResources:a},a.json))};L.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},t.default=L},288:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTA5IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpmaWdtYT0iaHR0cDovL3d3dy5maWdtYS5jb20vZmlnbWEvbnMiPjx0aXRsZT5Mb2dvPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3MCkiIGZpZ21hOnR5cGU9ImNhbnZhcyI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIgZmlnbWE6dHlwZT0idmVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcwKSIgZmlsbD0iI2Y0MCI+PHVzZSB4bGluazpocmVmPSIjYiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsIi8+PHVzZSB4bGluazpocmVmPSIjZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2YiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjIuNzM1IDIzLjE3MWMuMjgzLjMyMy4wNTMuODI5LS4zNzYuODI5aC01LjkwN2MtLjI4NSAwLS41NTYtLjEyMS0uNzQ1LS4zMzNsLTkuNDE0LTEwLjUyNnYxMC4zNmMwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjNjMC0uMjc2LjIyNC0uNS41LS41aDUuMjkzYy4yNzYgMCAuNS4yMjQuNS41djkuODE1bDkuMTQxLTkuOTljLjE5LS4yMDcuNDU3LS4zMjUuNzM4LS4zMjVoNS43NjJjLjQzNyAwIC42NjQuNTIxLjM2Ni44NDFsLTkuODUxIDEwLjU2MyAxMC4yODcgMTEuNzY3eiIvPjxwYXRoIGlkPSJjIiBkPSJNNDUuOTkxIDI0Yy0uMTk5IDAtLjM4LS4xMTgtLjQ1OS0uMzAxbC0yLjAyNC00LjY2OWgtMTAuNjdsLTIuMDI0IDQuNjY5Yy0uMDc5LjE4My0uMjU5LjMwMS0uNDU5LjMwMWgtNS4yMTJjLS4zNjYgMC0uNjA4LS4zODEtLjQ1My0uNzEybDEwLjc4Mi0yM2MuMDgyLS4xNzYuMjU5LS4yODguNDUzLS4yODhoNC4zNThjLjE5NCAwIC4zNy4xMTIuNDUzLjI4N2wxMC44MTUgMjNjLjE1Ni4zMzItLjA4Ni43MTMtLjQ1Mi43MTNoLTUuMTA4em0tMTEuMTM1LTkuNjY4aDYuNjM1bC0zLjMxNy03LjY5NC0zLjMxNyA3LjY5NHoiLz48cGF0aCBpZD0iZCIgZD0iTTU1LjUyNSAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYxOC40MjhoOS43NTljLjI3NiAwIC41LjIyNC41LjV2NC4wNzJjMCAuMjc2LS4yMjQuNS0uNS41aC0xNS41NTJ6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik03NS4yNzkuNWMwLS4yNzYuMjI0LS41LjUtLjVoOS4zMTVjMi42NjcgMCA0Ljk1OS40NzcgNi44NzQgMS40MyAxLjkzOC45NTMgMy40MiAyLjMzOCA0LjQ0NiA0LjE1MyAxLjAyNiAxLjc5MyAxLjUzOSAzLjkyNiAxLjUzOSA2LjQgMCAyLjQ5Ni0uNTEzIDQuNjUyLTEuNTM5IDYuNDY4LTEuMDAzIDEuNzkzLTIuNDc0IDMuMTY2LTQuNDEyIDQuMTE5LTEuOTE1Ljk1My00LjIxOCAxLjQzLTYuOTA4IDEuNDNoLTkuMzE1Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjN6bTkuMzcgMTguNDYyYzIuMzcxIDAgNC4xMzgtLjU3OSA1LjMwMS0xLjczNiAxLjE2My0xLjE1NyAxLjc0NC0yLjkwNSAxLjc0NC01LjI0MiAwLTIuMzM4LS41ODEtNC4wNzQtMS43NDQtNS4yMDktMS4xNjMtMS4xNTctMi45My0xLjczNi01LjMwMS0xLjczNmgtMy4wNzh2MTMuOTIzaDMuMDc4eiIvPjxwYXRoIGlkPSJmIiBkPSJNMTAyLjkxMyAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYyM2MwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzeiIvPjwvZGVmcz48L3N2Zz4NCg=="},315:function(e,t,a){}}]);
//# sourceMappingURL=1-64d69e1a03776c67859e.js.map