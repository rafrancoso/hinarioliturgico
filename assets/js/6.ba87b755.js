(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{334:function(t,s,a){"use strict";var r=a(1),n=a(2),o=a(23),e=a(13),i=a(24),c=a(21),u=a(3),f=a(335),h=a(37),l=a(336),d=a(337),v=a(36),_=a(338),m=[],p=n(m.sort),b=n(m.push),C=u((function(){m.sort(void 0)})),g=u((function(){m.sort(null)})),x=h("sort"),w=!u((function(){if(v)return v<70;if(!(l&&l>3)){if(d)return!0;if(_)return _<603;var t,s,a,r,n="";for(t=65;t<76;t++){switch(s=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(r=0;r<47;r++)m.push({k:s+r,v:a})}for(m.sort((function(t,s){return s.v-t.v})),r=0;r<m.length;r++)s=m[r].k.charAt(0),n.charAt(n.length-1)!==s&&(n+=s);return"DGBEFHACIJK"!==n}}));r({target:"Array",proto:!0,forced:C||!g||!x||!w},{sort:function(t){void 0!==t&&o(t);var s=e(this);if(w)return void 0===t?p(s):p(s,t);var a,r,n=[],u=i(s);for(r=0;r<u;r++)r in s&&b(n,s[r]);for(f(n,function(t){return function(s,a){return void 0===a?-1:void 0===s?1:void 0!==t?+t(s,a)||0:c(s)>c(a)?1:-1}}(t)),a=n.length,r=0;r<a;)s[r]=n[r++];for(;r<u;)delete s[r++];return s}})},335:function(t,s,a){var r=a(35),n=Math.floor,o=function(t,s){var a=t.length,c=n(a/2);return a<8?e(t,s):i(t,o(r(t,0,c),s),o(r(t,c),s),s)},e=function(t,s){for(var a,r,n=t.length,o=1;o<n;){for(r=o,a=t[o];r&&s(t[r-1],a)>0;)t[r]=t[--r];r!==o++&&(t[r]=a)}return t},i=function(t,s,a,r){for(var n=s.length,o=a.length,e=0,i=0;e<n||i<o;)t[e+i]=e<n&&i<o?r(s[e],a[i])<=0?s[e++]:a[i++]:e<n?s[e++]:a[i++];return t};t.exports=o},336:function(t,s,a){var r=a(55).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},337:function(t,s,a){var r=a(55);t.exports=/MSIE|Trident/.test(r)},338:function(t,s,a){var r=a(55).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},407:function(t,s,a){"use strict";a.r(s);a(34),a(6),a(334),a(183),a(184);var r={data:function(){return{cantosCrisma:[],cantosBatismo:[],cantosAspersao:[],ladainhas:[],cantosHinos:[]}},mounted:function(){var t=this.$root.$var.cantosGlobal.filter((function(t){return"sim"==t.diversos&&t.slide})).sort((function(t,s){return t.nome.toLowerCase()>s.nome.toLowerCase()?1:-1}));this.cantosCrisma=t.filter((function(t){return t.tags.includes("crisma")})),this.cantosBatismo=t.filter((function(t){return t.tags.includes("batismo")})),this.cantosAspersao=t.filter((function(t){return t.tags.includes("aspersão")})),this.ladainhas=t.filter((function(t){return t.tags.includes("Ladainha")})),this.cantosHinos=t.filter((function(t){return t.nome.includes("Hino")}))}},n=a(54),o=Object(n.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"diversos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diversos"}},[t._v("#")]),t._v(" Diversos")]),t._v(" "),a("h2",{attrs:{id:"crisma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crisma"}},[t._v("#")]),t._v(" Crisma")]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosCrisma,exibeRito:!0}}),t._v(" "),a("h2",{attrs:{id:"batismo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batismo"}},[t._v("#")]),t._v(" Batismo")]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosBatismo,exibeRito:!0}}),t._v(" "),a("h2",{attrs:{id:"aspersao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aspersao"}},[t._v("#")]),t._v(" Aspersão")]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosAspersao,exibeRito:!0}}),t._v(" "),a("h2",{attrs:{id:"ladainhas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ladainhas"}},[t._v("#")]),t._v(" Ladainhas")]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.ladainhas,exibeRito:!0}}),t._v(" "),a("h2",{attrs:{id:"hinos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hinos"}},[t._v("#")]),t._v(" Hinos")]),t._v(" "),a("lista-de-cantos",{attrs:{cantos:t.cantosHinos,exibeRito:!1}})],1)}),[],!1,null,null,null);s.default=o.exports}}]);