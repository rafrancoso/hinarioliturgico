(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{334:function(t,n,o){"use strict";var s=o(1),r=o(2),a=o(23),i=o(13),e=o(24),u=o(21),c=o(3),l=o(335),v=o(37),f=o(336),d=o(337),h=o(36),p=o(338),g=[],_=r(g.sort),C=r(g.push),m=c((function(){g.sort(void 0)})),b=c((function(){g.sort(null)})),x=v("sort"),w=!c((function(){if(h)return h<70;if(!(f&&f>3)){if(d)return!0;if(p)return p<603;var t,n,o,s,r="";for(t=65;t<76;t++){switch(n=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(s=0;s<47;s++)g.push({k:n+s,v:o})}for(g.sort((function(t,n){return n.v-t.v})),s=0;s<g.length;s++)n=g[s].k.charAt(0),r.charAt(r.length-1)!==n&&(r+=n);return"DGBEFHACIJK"!==r}}));s({target:"Array",proto:!0,forced:m||!b||!x||!w},{sort:function(t){void 0!==t&&a(t);var n=i(this);if(w)return void 0===t?_(n):_(n,t);var o,s,r=[],c=e(n);for(s=0;s<c;s++)s in n&&C(r,n[s]);for(l(r,function(t){return function(n,o){return void 0===o?-1:void 0===n?1:void 0!==t?+t(n,o)||0:u(n)>u(o)?1:-1}}(t)),o=r.length,s=0;s<o;)n[s]=r[s++];for(;s<c;)delete n[s++];return n}})},335:function(t,n,o){var s=o(35),r=Math.floor,a=function(t,n){var o=t.length,u=r(o/2);return o<8?i(t,n):e(t,a(s(t,0,u),n),a(s(t,u),n),n)},i=function(t,n){for(var o,s,r=t.length,a=1;a<r;){for(s=a,o=t[a];s&&n(t[s-1],o)>0;)t[s]=t[--s];s!==a++&&(t[s]=o)}return t},e=function(t,n,o,s){for(var r=n.length,a=o.length,i=0,e=0;i<r||e<a;)t[i+e]=i<r&&e<a?s(n[i],o[e])<=0?n[i++]:o[e++]:i<r?n[i++]:o[e++];return t};t.exports=a},336:function(t,n,o){var s=o(55).match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1]},337:function(t,n,o){var s=o(55);t.exports=/MSIE|Trident/.test(s)},338:function(t,n,o){var s=o(55).match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1]},342:function(t,n,o){"use strict";var s=o(1),r=o(39).find,a=o(110),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),s({target:"Array",proto:!0,forced:i},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},365:function(t,n,o){},396:function(t,n,o){"use strict";o(365)},413:function(t,n,o){"use strict";o.r(n);var s=o(149),r=(o(81),o(34),o(6),o(183),o(184),o(197),o(342),o(194),o(186),o(334),{data:function(){return{listaCantos:[],exibeCantos:!1,possuiCantos:!1,faltaGrupo:!1}},props:{cantos:{type:Array,required:!1},horario:{type:String,required:!1},grupo:{type:String,required:!1},grupoSubstituto:{type:String,required:!1},escalaFixa:{type:Boolean,required:!1}},mounted:function(){var t=this.$root.$var.cantosGlobal;if(this.cantos){var n=this.cantos.map((function(t){return"object"===Object(s.a)(t)?t.numero:t})),o=this.cantos.map((function(t){return"object"===Object(s.a)(t)?t:{numero:t,momento:null}})),r=t.filter((function(t){return n.includes(t.numero)})).map((function(t){var n=JSON.parse(JSON.stringify(t)),s=o.find((function(t){return t.numero==n.numero}));return null!=s.momento&&(n.momento=s.momento),n}));this.listaCantos=this.ordenaCantos(n,r)}this.possuiCantos=null!=this.cantos,this.faltaGrupo=null==this.grupo},methods:{copyToClipBoard:function(){var t=this.grupo;null!=this.grupoSubstituto&&(t=this.grupoSubstituto);var n="_*".concat(t,"*_\n").concat(this.horario,"\n\n");n+=this.listaCantos.map((function(t){var n="*".concat(t.momento,"*\nNome : ").concat(t.numero," - ").concat(t.nome,"\nAutor: ").concat(t.autor,"\nSlide: ").concat(t.slide||"A Fazer");return t.video&&(n=n+"\nVídeo: "+t.video),n+="\n\n"})).join(""),navigator.clipboard.writeText(n),alert("Cantos copiados, cole no Whatsapp")},toggleCantos:function(){this.possuiCantos&&(this.exibeCantos=!this.exibeCantos)},getClass:function(){return"nome-canto"},ordenaCantos:function(t,n){for(var o=[],s=0;s<t.length;s++){var r=t[s];o[r]=s}return n.sort((function(t,n){return o[t.numero]>o[n.numero]?1:-1}))},filteredList:function(){return this.listaCantos},classPossuiSlide:function(t){return{"tag-danger":t}},classTags:function(t){return{"tag-danger":"letra_atualizada"==t,"tag-green":"letra_atualizada"!=t}}},computed:{}}),a=(o(396),o(54)),i=Object(a.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("div",{staticClass:"header"},[o("div",{staticClass:"horario",class:[{"falta-grupo":t.faltaGrupo}]},[t._v(t._s(t.horario))]),t._v(" "),o("div",{staticStyle:{display:"flex"}},[o("div",{staticClass:"nome-grupo",class:[{"possui-cantos":t.possuiCantos,"escala-fixa":t.escalaFixa}],on:{click:function(n){return t.toggleCantos()}}},[t._t("default"),t._v(" "),o("span",{class:[{"grupo-substituido":null!=t.grupoSubstituto}]},[t._v(t._s(t.grupo))]),t._v(" "),null!=t.grupoSubstituto?o("span",[t._v("\n          - "+t._s(t.grupoSubstituto)+"\n        ")]):t._e()],2),t._v(" "),o("span",{class:[{"copia-cantos":t.possuiCantos}],on:{click:function(n){return t.copyToClipBoard()}}})])]),t._v(" "),t.exibeCantos?o("div",[o("table",{attrs:{width:"100%"}},[t._m(0),t._v(" "),o("tbody",t._l(t.listaCantos,(function(n){return o("tr",{key:n.numero,class:t.classPossuiSlide(!n.slide)},[o("td",{attrs:{align:"center"}},[t._v("\n            "+t._s(("0000"+n.numero).slice(-4))+"\n            "),o("div",{staticClass:"rito"},[o("div",{staticClass:"tag tag-green"},[t._v(t._s(n.momento))])])]),t._v(" "),o("td",[o("div",{staticClass:"name"},[t._v(t._s(n.nome))]),t._v(" "),o("div",{staticClass:"author"},[t._v(t._s(n.autor))]),t._v(" "),n.tags.length>0?o("div",{staticClass:"tags"},t._l(n.tags,(function(n){return o("div",{key:n,staticClass:"tag",class:t.classTags(n)},[t._v("\n                "+t._s(n)+"\n              ")])})),0):t._e()]),t._v(" "),o("td",[n.video?o("a",{staticClass:"link_list",attrs:{href:n.video,target:"_blank"}},[t._v("Vídeo"),o("span",[o("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[o("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),o("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})]),t._v(" "),o("span",{staticClass:"sr-only"})])]):t._e(),t._v(" "),n.slide?o("a",{staticClass:"link_list",attrs:{href:n.slide,target:"_blank"}},[t._v("Slide"),o("span",[o("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[o("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),o("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})]),t._v(" "),o("span",{staticClass:"sr-only"})])]):t._e()])])})),0)])]):t._e()])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{width:"10%"}},[this._v("Número")]),this._v(" "),n("th",{attrs:{width:"75%"}},[this._v("Nome")]),this._v(" "),n("th",{attrs:{width:"15%"}},[this._v("Links")])])])}],!1,null,"2e37553f",null);n.default=i.exports}}]);