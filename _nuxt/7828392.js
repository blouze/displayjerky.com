(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,8],{365:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("9207a3d8",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n.r(e);var o={name:"ShareButton",props:{network:{type:String,default:"Twitter"},url:{type:String,default:null},title:{type:String,default:null},description:{type:String,default:null}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ShareNetwork",t._b({staticClass:"is-link is-outlined is-small is-fullwidth",attrs:{tag:"b-button"}},"ShareNetwork",t.$props,!1),[n("span",[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),n("span",{staticClass:"has-text-weight-bold flip-animate"},[n("span",{attrs:{"data-hover":"share"}},[t._v("\n      share\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){"use strict";n.r(e);var o=n(153),r={name:"BlogCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},img:{type:String,default:null},alt:{type:String,default:null},updatedAt:{type:String,required:!0}},methods:{formatDate:o.b}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("b-image",{staticClass:"card",attrs:{src:t.img||"https://cataas.com/cat?filter=pixel",alt:t.alt||"",ratio:"4by3"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("b-skeleton",{staticClass:"skeleton-placeholder",attrs:{height:"100%"}})]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"card-content"},[n("h1",{staticClass:"title is-size-4-mobile is-size-3-tablet"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t.description?n("p",{staticClass:"subtitle"},[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"level is-mobile is-align-items-end"},[n("div",{staticClass:"level-left"},[t.updatedAt?n("time",{staticClass:"heading",attrs:{datetime:"2016-1-1"}},[t._v("\n          "+t._s(t.formatDate(t.updatedAt))+"\n        ")]):t._e()]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[t._t("default")],2)])])])])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n(365)},375:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.subscribe-container[data-v-5d531870]{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-moz-columns:auto;-moz-column-count:auto;-moz-column-fill:balance;column-fill:balance;grid-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-moz-column-rule:medium none currentColor;column-rule:medium none currentColor;-moz-column-span:1;column-span:1;-moz-column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align:left;-moz-text-align-last:auto;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial}.subscribe-container__title[data-v-5d531870]{display:block;text-align:center}.subscribe-container__subtitle[data-v-5d531870]{text-align:center}.subscribe-container__submit[data-v-5d531870]{background-color:#696969}.subscribe-container__submit[data-v-5d531870]:hover{background-color:#000}.flip-animate[data-v-5d531870],.subscribe-container__submit[data-v-5d531870]{perspective:1000px}.flip-animate span[data-v-5d531870],.subscribe-container__submit span[data-v-5d531870]{position:relative;display:inline-block;padding:0;transition:transform .3s;transform-origin:50% 0;transform-style:preserve-3d}.flip-animate span[data-v-5d531870]:before,.subscribe-container__submit span[data-v-5d531870]:before{position:absolute;top:100%;left:0;width:100%;height:100%;content:attr(data-hover);transition:color .3s;transform:rotateX(90deg);transform-origin:50% 0;text-align:center}.flip-animate:focus span[data-v-5d531870],.flip-animate:hover span[data-v-5d531870],.subscribe-container__submit:focus span[data-v-5d531870],.subscribe-container__submit:hover span[data-v-5d531870]{transform:rotateX(-90deg) translateY(-22px)}.flip-animate:focus span[data-v-5d531870]:before,.flip-animate:hover span[data-v-5d531870]:before,.subscribe-container__submit:focus span[data-v-5d531870]:before,.subscribe-container__submit:hover span[data-v-5d531870]:before{text-decoration:underline}.navbar-item[data-v-5d531870],.subscribe-container__title[data-v-5d531870],.title[data-v-5d531870],h1[data-v-5d531870],h2[data-v-5d531870],h3[data-v-5d531870],h4[data-v-5d531870],h5[data-v-5d531870],h6[data-v-5d531870]{font-family:"Patua One";font-weight:400}.nuxt-content.blog-article>p[data-v-5d531870]{margin-bottom:1.6rem}.nuxt-content.blog-article>p[data-v-5d531870]:first-of-type:first-letter{font-family:"Frikativ";font-weight:400;font-size:12rem;float:left;margin:.04em -.1em -.05em 0;line-height:.65;padding:.1em .1em 0 0}.nuxt-content.blog-article h2[data-v-5d531870],.nuxt-content.blog-article h3[data-v-5d531870],.nuxt-content.blog-article h4[data-v-5d531870],.nuxt-content.blog-article h5[data-v-5d531870]{margin:3rem 0 2rem}.nuxt-content.blog-article .icon.icon-link[data-v-5d531870]{@apply absolute  opacity-0 h-4 -ml-6 w-10 bg-no-repeat;background-image:url(/img/blog/hashtag.svg);display:none}.nuxt-content.blog-article h2:hover .icon.icon-link[data-v-5d531870],.nuxt-content.blog-article h3:hover .icon.icon-link[data-v-5d531870],.nuxt-content.blog-article h4:hover .icon.icon-link[data-v-5d531870],.nuxt-content.blog-article h5:hover .icon.icon-link[data-v-5d531870]{@apply opacity-100}.nuxt-content.blog-article li[data-v-5d531870]{margin:1rem}.nuxt-content.blog-article blockquote[data-v-5d531870]{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}[data-v-5d531870] .b-skeleton{height:100%;position:absolute;top:0}',""]),t.exports=o},406:function(t,e,n){"use strict";n.r(e);n(38),n(37),n(10),n(61),n(32),n(62);var o=n(35),r=n(30),l=n(8),c=(n(52),n(24),n(54),n(41),n(36),n(45),n(152));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={scrollToTop:!0,asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blog",o.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:m(m({},article),{},{title:article.title.replace(/ ([^ ]*)$/," $1")})});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var t=this;return{titleTemplate:function(title){return"".concat(t.article.title," - ").concat(title)},meta:Object(o.a)(Object(c.a)({title:this.article.title,description:this.article.description,url:this.$route.path,image:this.article.img}))}},computed:{share:function(){return{network:"twitter",url:"".concat("https://displayjerky.com").concat(this.$route.path),title:this.article.title,description:this.article.description}}}},v=(n(374),n(13)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-three-quarters is-align-self-center"},[n("blog-card",t._b({staticClass:"mb-6"},"blog-card",t.article,!1),[n("share-button",t._b({},"share-button",t.share,!1))],1),t._v(" "),n("section",{staticClass:"section container"},[n("nuxt-content",{staticClass:"blog-article",attrs:{document:t.article,tag:"article"}}),t._v(" "),n("div",{staticClass:"level mt-6"},[n("div",{staticClass:"level-left"}),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("share-button",t._b({},"share-button",t.share,!1))],1)])])],1)],1)}),[],!1,null,"5d531870",null);e.default=component.exports;installComponents(component,{ShareButton:n(369).default,BlogCard:n(370).default})}}]);