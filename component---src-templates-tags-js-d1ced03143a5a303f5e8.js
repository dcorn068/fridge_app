(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{258:function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",function(){return u});a(76);var n=a(10),r=a.n(n),s=a(0),l=a.n(s),o=a(284),i=a.n(o),c=a(277),m=a(278),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map(function(e){return l.a.createElement("li",{key:e.node.frontmatter.path},l.a.createElement(c.Link,{to:e.node.frontmatter.path},l.a.createElement("h2",{className:"is-size-2"},e.node.frontmatter.title)))}),t=this.props.pageContext.tag,a=this.props.data.site.siteMetadata.title,n=this.props.data.allMarkdownRemark.totalCount,r=n+" post"+(1===n?"":"s")+" tagged with “"+t+"”";return l.a.createElement(m.a,null,l.a.createElement("section",{className:"section"},l.a.createElement(i.a,{title:t+" | "+a}),l.a.createElement("div",{className:"container content"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:"6rem"}},l.a.createElement("h3",{className:"title is-size-4 is-bold-light"},r),l.a.createElement("ul",{className:"taglist"},e),l.a.createElement("p",null,l.a.createElement(c.Link,{to:"/tags/"},"Browse all tags")))))))},t}(l.a.Component);t.default=p;var u="1129958612"}}]);
//# sourceMappingURL=component---src-templates-tags-js-d1ced03143a5a303f5e8.js.map