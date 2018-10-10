(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"recipesQuery",function(){return g});a(76);var r=a(10),i=a.n(r),o=a(0),n=a.n(o),d=a(278),l=a(285),s=a(277),c=a(415),u=a.n(c),p=a(416),m=a.n(p),f=a(297),b=a.n(f),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=l.a.div.withConfig({displayName:"recipes__Header",componentId:"sc-1tikkg1-0"})(["display:grid;grid-template-columns:1fr auto;align-items:end;padding:8px 40px 0 40px;h1{width:100%;font-size:36px;}button{height:40px;border:none;box-shadow:0px 1px 2px rgba(0,0,0,0.5);background:lightpink;font-size:16px;font-weight:500;padding:4px 14px;border-radius:4px;cursor:pointer;text-transform:uppercase;&:hover{background:#ffd7dd;}}"]),a=l.a.div.withConfig({displayName:"recipes__Grid",componentId:"sc-1tikkg1-1"})(["padding:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(225px,1fr));width:100%;"]),r=l.a.div.withConfig({displayName:"recipes__RecipeCard",componentId:"sc-1tikkg1-2"})(["width:100%;.card_contents{padding:15px;width:100%;height:100%;display:grid;grid-gap:5px;grid-template-rows:1fr auto auto;grid-row:1/-1;grid-column:1/-1;.image_div{overflow:hidden;display:grid;min-height:200px;img{grid-row:1/-1;grid-column:1/-1;height:100%;width:100%;object-fit:cover;transition:all 0.5s cubic-bezier(0.02,0.85,0.21,0.98);}transition:all 0.5s cubic-bezier(0.02,0.85,0.21,0.98);}transition:all 0.5s cubic-bezier(0.02,0.85,0.21,0.98);&:hover{.image_div{box-shadow:0px 3px 11px 1px #00000087;img{transform:scale(1.05);}.img_overlay{transform:translateX(0);}}h3::after{transform:translateX(0);}}overflow:hidden;h3{font-size:20px;font-style:italic;display:inline;position:relative;&::after{content:'';position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid rgba(0,0,0,0.5);transform:translateX(400%);transition:all 0.5s cubic-bezier(0.74,0.31,0.13,1.01);}}.details{display:grid;grid-template-columns:repeat(2,auto);width:100%;justify-items:center;justify-content:space-between;align-items:center;span{display:grid;grid-template-columns:auto auto;height:100%;align-items:center;svg{height:18px;}}}p{font-size:14px;}}.img_overlay{grid-column:1/-1;grid-row:1/-1;width:100%;height:100%;display:grid;justify-items:center;align-content:center;background:rgba(63,72,125,0.6);button,a{cursor:pointer;background:none;border:2px solid rgba(255,255,255,0.9);color:white;text-transform:uppercase;background:(0,0,0,0.7);padding:5px 10px;margin:5px 0;font-size:14px;transition:all 0.2s ease-out;&:hover{box-shadow:0px 3px 7px 1px #00000087;}}transform:translateX(-101%);transition:all 0.3s ease-in-out;}"]);return console.log(e),n.a.createElement(d.a,null,n.a.createElement(t,null,n.a.createElement("h1",null,"Recipes!"),n.a.createElement(s.Link,{to:"new-recipe"},n.a.createElement(b.a,null,"Submit a Recipe"))),n.a.createElement(a,null,e.map(function(e){var t=e.node.id,a=e.node.frontmatter,i=a.title,o=a.image,d=a.description;return n.a.createElement(r,{key:t,style:{background:"hsl("+255*Math.random()+",25%,90%)"}},n.a.createElement("div",{className:"card_contents"},n.a.createElement("div",{className:"image_div"},n.a.createElement("img",{src:o,alt:i}),n.a.createElement("div",{className:"img_overlay"},n.a.createElement(s.Link,{to:t},"View Recipe"),n.a.createElement("button",{onClick:function(){return console.log("add")}},"Add to Grocery List"),n.a.createElement("button",{onClick:function(){return console.log("save")}},"Save for Later"))),n.a.createElement("div",null,n.a.createElement("h3",null,i.length<20?i:i.substr(0,20)+"...")),n.a.createElement("div",{className:"details"},n.a.createElement("span",null,n.a.createElement(u.a,null)," 10 min"),n.a.createElement("span",null,n.a.createElement(m.a,null),"10 servings")),n.a.createElement("p",null,d.length<59?d:d.substr(0,59)+"...")))})))},t}(n.a.Component);t.default=h;var g="2803358146"},297:function(e,t,a){"use strict";var r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=r(a(298))},298:function(e,t,a){"use strict";var r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=r(a(12)),o=r(a(14)),n=r(a(8)),d=r(a(0)),l=(r(a(1)),r(a(272))),s=(r(a(3)),r(a(124))),c=a(126),u=r(a(286)),p=a(276),m=function(e){return{root:(0,n.default)({},e.typography.button,{boxSizing:"border-box",minWidth:64,minHeight:36,padding:"8px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,c.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},outlinedPrimary:{border:"1px solid ".concat((0,c.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main)},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedSecondary:{border:"1px solid ".concat((0,c.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main)},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},mini:{width:40,height:40},sizeSmall:{padding:"7px 8px",minWidth:64,minHeight:32,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",minWidth:112,minHeight:40,fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function f(e){var t,a=e.children,r=e.classes,s=e.className,c=e.color,m=e.disabled,f=e.disableFocusRipple,b=e.fullWidth,h=e.focusVisibleClassName,g=e.mini,y=e.size,x=e.variant,v=(0,o.default)(e,["children","classes","className","color","disabled","disableFocusRipple","fullWidth","focusVisibleClassName","mini","size","variant"]),w="fab"===x||"extendedFab"===x,k="contained"===x||"raised"===x,C="text"===x||"flat"===x||"outlined"===x,E=(0,l.default)(r.root,(t={},(0,i.default)(t,r.fab,w),(0,i.default)(t,r.mini,w&&g),(0,i.default)(t,r.extendedFab,"extendedFab"===x),(0,i.default)(t,r.text,C),(0,i.default)(t,r.textPrimary,C&&"primary"===c),(0,i.default)(t,r.textSecondary,C&&"secondary"===c),(0,i.default)(t,r.flat,"text"===x||"flat"===x),(0,i.default)(t,r.flatPrimary,("text"===x||"flat"===x)&&"primary"===c),(0,i.default)(t,r.flatSecondary,("text"===x||"flat"===x)&&"secondary"===c),(0,i.default)(t,r.contained,k||w),(0,i.default)(t,r.containedPrimary,(k||w)&&"primary"===c),(0,i.default)(t,r.containedSecondary,(k||w)&&"secondary"===c),(0,i.default)(t,r.raised,k||w),(0,i.default)(t,r.raisedPrimary,(k||w)&&"primary"===c),(0,i.default)(t,r.raisedSecondary,(k||w)&&"secondary"===c),(0,i.default)(t,r.outlined,"outlined"===x),(0,i.default)(t,r.outlinedPrimary,"outlined"===x&&"primary"===c),(0,i.default)(t,r.outlinedSecondary,"outlined"===x&&"secondary"===c),(0,i.default)(t,r["size".concat((0,p.capitalize)(y))],"medium"!==y),(0,i.default)(t,r.disabled,m),(0,i.default)(t,r.fullWidth,b),(0,i.default)(t,r.colorInherit,"inherit"===c),t),s);return d.default.createElement(u.default,(0,n.default)({className:E,disabled:m,focusRipple:!f,focusVisibleClassName:(0,l.default)(r.focusVisible,h)},v),d.default.createElement("span",{className:r.label},a))}t.styles=m,f.propTypes={},f.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var b=(0,s.default)(m,{name:"MuiButton"})(f);t.default=b},415:function(e,t,a){"use strict";var r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),o=(0,r(a(290)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),i.default.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"AccessTime");t.default=o},416:function(e,t,a){"use strict";var r=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(0)),o=(0,r(a(290)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"SupervisedUserCircle");t.default=o}}]);
//# sourceMappingURL=component---src-pages-recipes-js-4fbf28cf74d257824ab1.js.map