(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{357:function(t,e,r){var content=r(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("e5978752",content,!0,{sourceMap:!1})},361:function(t,e,r){"use strict";r(357)},362:function(t,e,r){var n=r(29)(!1);n.push([t.i,"[data-v-fdc5eaf0] .b-skeleton{height:100%;position:absolute;top:0}",""]),t.exports=n},383:function(t,e,r){"use strict";r.r(e);var n=r(34),c=r(9),l=(r(35),r(45),r(40),r(51),r(152)),o={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("blog",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var t=this,e=this.article,title=e.title,r=e.description,image=e.img;return{titleTemplate:function(title){return"".concat(title," - ").concat(t.article.title)},meta:Object(n.a)(Object(l.a)({title:title,description:r,url:this.$route.fullPath,image:image}))}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},d=(r(361),r(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("section",{staticClass:"section container is-max-desktop"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("b-image",{staticClass:"card",attrs:{src:t.article.img?t.article.img:"https://cataas.com/cat?filter=pixel",alt:t.article.alt,ratio:"4by3"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("b-skeleton",{staticClass:"skeleton-placeholder",attrs:{height:"100%"}})]},proxy:!0}])})],1)])]),t._v(" "),r("section",{staticClass:"section container is-max-desktop"},[r("h1",{staticClass:"title is-2"},[t._v("\n      "+t._s(t.article.title)+"\n      "),t.article.description?r("p",{staticClass:"subtitle is-3"},[t._v("\n        "+t._s(t.article.description)+"\n      ")]):t._e(),t._v(" "),t.article.updatedAt?r("p",{staticClass:"subtitle"},[t._v("\n        "+t._s(t.formatDate(t.article.updatedAt))+"\n      ")]):t._e()]),t._v(" "),r("ShareNetwork",{attrs:{network:"twitter",url:t.$route.fullPath,title:t.article.title}},[t._v("\n      Share\n    ")]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}})],1)])}),[],!1,null,"fdc5eaf0",null);e.default=component.exports}}]);