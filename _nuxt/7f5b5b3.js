(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{364:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("47bca7cc",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n(364)},371:function(t,e,n){var l=n(25)(!1);l.push([t.i,"[data-v-9a41ab6a] .b-skeleton{height:100%;position:absolute;top:0}",""]),t.exports=l},401:function(t,e,n){"use strict";n.r(e);var l=n(35),r=n(8),o=(n(52),n(152)),c={name:"BlogPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("blog").only(["title","description","img","slug","author","updatedAt"]).sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{meta:Object(l.a)(Object(o.a)({title:"Blog",description:"Blog posts by DisplayJerky.",url:this.$route.fullPath}))}},methods:{formatDate:n(153).b}},d=(n(370),n(13)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("ul",{staticClass:"columns is-multiline mt-6"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"column columns is-align-items-end"},[n("div",{staticClass:"column is-one-third"},[n("router-link",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("b-image",{attrs:{src:article.img?article.img:"https://cataas.com/cat?filter=pixel",alt:article.alt,ratio:"1by1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("b-skeleton",{staticClass:"skeleton-placeholder",attrs:{height:"100%"}})]},proxy:!0}],null,!0)})],1)],1),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"title is-4 mb-0"},[n("router-link",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v("\n            "+t._s(article.title)+"\n          ")])],1),t._v(" "),article.updatedAt?n("time",{staticClass:"heading",attrs:{datetime:"2016-1-1"}},[t._v("\n          "+t._s(t.formatDate(article.updatedAt))+"\n        ")]):t._e(),t._v(" "),n("p",{staticClass:"content"},[t._v("\n          "+t._s(article.description)+"\n        ")]),t._v(" "),n("b-navbar-item",{staticClass:"button is-dark is-large is-outlined has-text-weight-bold flip-animate",attrs:{tag:"router-link",to:{name:"blog-slug",params:{slug:article.slug}}}},[n("span",{attrs:{"data-hover":"Read this"}},[t._v("\n            Read this\n          ")])])],1)])})),0)])}),[],!1,null,"9a41ab6a",null);e.default=component.exports}}]);