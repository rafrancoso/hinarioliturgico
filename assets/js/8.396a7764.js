(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{334:function(t,r,a){"use strict";var o=a(1),n=a(2),e=a(23),s=a(13),i=a(24),c=a(21),u=a(3),f=a(335),h=a(37),l=a(336),d=a(337),v=a(36),m=a(338),_=[],C=n(_.sort),p=n(_.push),b=u((function(){_.sort(void 0)})),g=u((function(){_.sort(null)})),A=h("sort"),w=!u((function(){if(v)return v<70;if(!(l&&l>3)){if(d)return!0;if(m)return m<603;var t,r,a,o,n="";for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(o=0;o<47;o++)_.push({k:r+o,v:a})}for(_.sort((function(t,r){return r.v-t.v})),o=0;o<_.length;o++)r=_[o].k.charAt(0),n.charAt(n.length-1)!==r&&(n+=r);return"DGBEFHACIJK"!==n}}));o({target:"Array",proto:!0,forced:b||!g||!A||!w},{sort:function(t){void 0!==t&&e(t);var r=s(this);if(w)return void 0===t?C(r):C(r,t);var a,o,n=[],u=i(r);for(o=0;o<u;o++)o in r&&p(n,r[o]);for(f(n,function(t){return function(r,a){return void 0===a?-1:void 0===r?1:void 0!==t?+t(r,a)||0:c(r)>c(a)?1:-1}}(t)),a=n.length,o=0;o<a;)r[o]=n[o++];for(;o<u;)delete r[o++];return r}})},335:function(t,r,a){var o=a(35),n=Math.floor,e=function(t,r){var a=t.length,c=n(a/2);return a<8?s(t,r):i(t,e(o(t,0,c),r),e(o(t,c),r),r)},s=function(t,r){for(var a,o,n=t.length,e=1;e<n;){for(o=e,a=t[e];o&&r(t[o-1],a)>0;)t[o]=t[--o];o!==e++&&(t[o]=a)}return t},i=function(t,r,a,o){for(var n=r.length,e=a.length,s=0,i=0;s<n||i<e;)t[s+i]=s<n&&i<e?o(r[s],a[i])<=0?r[s++]:a[i++]:s<n?r[s++]:a[i++];return t};t.exports=e},336:function(t,r,a){var o=a(55).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},337:function(t,r,a){var o=a(55);t.exports=/MSIE|Trident/.test(o)},338:function(t,r,a){var o=a(55).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},407:function(t,r,a){"use strict";a.r(r);a(34),a(6),a(334);var o={data:function(){return{cantosAbertura:[],cantosPenitenciais:[],cantosGloria:[],cantosOferta:[],cantosSanto:[],cantosCordeiro:[],cantosComunhao:[]}},mounted:function(){var t=this.$root.$var.cantosGlobal.filter((function(t){return"sim"==t.comum&&t.slide}));t=t.sort((function(t,r){return t.nome.toLowerCase()>r.nome.toLowerCase()?1:-1})),this.cantosAbertura=t.filter((function(t){return"abertura"==t.momento})),this.cantosPenitenciais=t.filter((function(t){return"penitencial"==t.momento})),this.cantosGloria=t.filter((function(t){return"gloria"==t.momento})),this.cantosOferta=t.filter((function(t){return"oferta"==t.momento})),this.cantosSanto=t.filter((function(t){return"santo"==t.momento})),this.cantosCordeiro=t.filter((function(t){return"cordeiro"==t.momento})),this.cantosComunhao=t.filter((function(t){return"comunhão"==t.momento}))}},n=a(54),e=Object(n.a)(o,(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tempo-comum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tempo-comum"}},[t._v("#")]),t._v(" Tempo Comum")]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosAbertura}},[a("h2",{attrs:{id:"abertura"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abertura"}},[t._v("#")]),t._v(" Abertura")])]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosPenitenciais}},[a("h2",{attrs:{id:"ato-penitencial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ato-penitencial"}},[t._v("#")]),t._v(" Ato Penitêncial")])]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosGloria}},[a("h2",{attrs:{id:"gloria"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gloria"}},[t._v("#")]),t._v(" Glória")])]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosOferta}},[a("h2",{attrs:{id:"ofertas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ofertas"}},[t._v("#")]),t._v(" Ofertas")])]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosSanto}},[a("h2",{attrs:{id:"santo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#santo"}},[t._v("#")]),t._v(" Santo")])]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosCordeiro}},[a("h2",{attrs:{id:"cordeiro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cordeiro"}},[t._v("#")]),t._v(" Cordeiro")])]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosComunhao}},[a("h2",{attrs:{id:"comunhao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comunhao"}},[t._v("#")]),t._v(" Comunhão")])])],1)}),[],!1,null,null,null);r.default=e.exports}}]);