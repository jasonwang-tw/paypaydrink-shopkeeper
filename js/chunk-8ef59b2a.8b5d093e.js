(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ef59b2a"],{"13d5":function(t,s,n){"use strict";var a=n("23e7"),i=n("d58f").left,r=n("a640"),e=n("ae40"),c=n("2d00"),l=n("605d"),o=r("reduce"),u=e("reduce",{1:0}),p=!l&&c>79&&c<83;a({target:"Array",proto:!0,forced:!o||!u||p},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1dde":function(t,s,n){var a=n("d039"),i=n("b622"),r=n("2d00"),e=i("species");t.exports=function(t){return r>=51||!a((function(){var s=[],n=s.constructor={};return n[e]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},3582:function(t,s,n){},"65f0":function(t,s,n){var a=n("861d"),i=n("e8b5"),r=n("b622"),e=r("species");t.exports=function(t,s){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[e],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===s?0:s)}},a640:function(t,s,n){"use strict";var a=n("d039");t.exports=function(t,s){var n=[][t];return!!n&&a((function(){n.call(null,s||function(){throw 1},1)}))}},ae40:function(t,s,n){var a=n("83ab"),i=n("d039"),r=n("5135"),e=Object.defineProperty,c={},l=function(t){throw t};t.exports=function(t,s){if(r(c,t))return c[t];s||(s={});var n=[][t],o=!!r(s,"ACCESSORS")&&s.ACCESSORS,u=r(s,0)?s[0]:l,p=r(s,1)?s[1]:void 0;return c[t]=!!n&&!i((function(){if(o&&!a)return!0;var t={length:-1};o?e(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,u,p)}))}},b727:function(t,s,n){var a=n("0366"),i=n("44ad"),r=n("7b0b"),e=n("50c4"),c=n("65f0"),l=[].push,o=function(t){var s=1==t,n=2==t,o=3==t,u=4==t,p=6==t,f=7==t,d=5==t||p;return function(v,_,h,m){for(var C,b,g=r(v),w=i(g),y=a(_,h,3),x=e(w.length),$=0,A=m||c,E=s?A(v,x):n||f?A(v,0):void 0;x>$;$++)if((d||$ in w)&&(C=w[$],b=y(C,$,g),t))if(s)E[$]=b;else if(b)switch(t){case 3:return!0;case 5:return C;case 6:return $;case 2:l.call(E,C)}else switch(t){case 4:return!1;case 7:l.call(E,C)}return p?-1:o||u?u:E}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6),filterOut:o(7)}},d58f:function(t,s,n){var a=n("1c0b"),i=n("7b0b"),r=n("44ad"),e=n("50c4"),c=function(t){return function(s,n,c,l){a(n);var o=i(s),u=r(o),p=e(o.length),f=t?p-1:0,d=t?-1:1;if(c<2)while(1){if(f in u){l=u[f],f+=d;break}if(f+=d,t?f<0:p<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:p>f;f+=d)f in u&&(l=n(l,u[f],f,o));return l}};t.exports={left:c(!1),right:c(!0)}},d81d:function(t,s,n){"use strict";var a=n("23e7"),i=n("b727").map,r=n("1dde"),e=n("ae40"),c=r("map"),l=e("map");a({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e2ff:function(t,s,n){"use strict";n("3582")},e5a6:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"shopDetail"}},[n("h3",{staticClass:"mt-10"},[t._v("#87554862 詳細資料")]),t._m(0),n("div",{staticClass:"bg-white p-5 border-lightblue-high border rounded-lg mb-10"},[n("h5",[t._v("商品詳細")]),n("hr"),n("div",{staticClass:"overflow-x-auto"},[t._m(1),n("hr",{staticClass:"w-768"}),t._l(t.products,(function(s,a){return n("ul",{staticClass:"produst_list list-none grid grid-cols-12 pl-0 py-3 w-768"},[n("li",{staticClass:"col-span-7"},[t._v(t._s(s.name))]),n("li",{staticClass:"col-span-2"},[t._v("$ "+t._s(s.price))]),n("li",{staticClass:"col-span-1"},[t._v(t._s(s.quantity))]),n("li",{staticClass:"col-span-2"},[t._v("$ "+t._s(s.price*s.quantity))])])}))],2),n("hr"),n("ul",{staticClass:"sumup pl-0 list-none grid grid-cols-12 mt-5 text-right"},[n("li",{staticClass:"col-span-12"},[t._v(" 小計： "),n("span",[t._v("$ "+t._s(t.products_total))])]),n("li",{staticClass:"col-span-12"},[t._v(" 折扣： "),n("span",[t._v("$ "+t._s(t.discount))])]),n("li",{staticClass:"col-span-12"},[t._v(" 總計： "),n("span",[t._v("$ "+t._s(t.products_total-t.discount))])]),t._m(2),t._m(3),t._m(4)])])])},i=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"bg-white p-5 border-lightblue-high border rounded-lg mb-5 overflow-x-auto"},[n("ul",{staticClass:"list-none pl-0 grid grid-cols-12 text-blue-500 w-1280"},[n("li",{staticClass:"col-span-2"},[t._v("建立日期")]),n("li",{staticClass:"col-span-1"},[t._v("狀態")]),n("li",{staticClass:"col-span-2"},[t._v("顧客")]),n("li",{staticClass:"col-span-2"},[t._v("電子郵件")]),n("li",{staticClass:"col-span-2"},[t._v("聯絡電話")]),n("li",{staticClass:"col-span-3"},[t._v("顧客提供的附註")])]),n("hr",{staticClass:"w-1280"}),n("ul",{staticClass:"list-none pl-0 grid grid-cols-12 w-1280"},[n("li",{staticClass:"col-span-2"},[t._v("2021/07/05 06:20")]),n("li",{staticClass:"col-span-1"},[n("span",{staticClass:"btn-remove-sm text-sm"},[t._v(" 取消 ")])]),n("li",{staticClass:"col-span-2"},[t._v("Bjj")]),n("li",{staticClass:"col-span-2"},[t._v("gymizut@mailinator.com")]),n("li",{staticClass:"col-span-2"},[t._v("+1 (366) 115-4746")]),n("li",{staticClass:"col-span-3"},[t._v("Omnis explicabo Ass")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",{staticClass:"list-none grid grid-cols-12 text-blue-500 pl-0 w-768"},[n("li",{staticClass:"col-span-7"},[t._v("品項")]),n("li",{staticClass:"col-span-2"},[t._v("單價")]),n("li",{staticClass:"col-span-1"},[t._v("數量")]),n("li",{staticClass:"col-span-2"},[t._v("小計")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",{staticClass:"col-span-12"},[n("div",{staticClass:"btn-remove-sm text-sm inline-block my-1"},[t._v("未付款")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",{staticClass:"col-span-12"},[t._v("付款日期 "),n("span")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("li",{staticClass:"col-span-12"},[t._v("付款方式： "),n("span",{staticClass:"font-bold"})])}],r=(n("d81d"),n("13d5"),{name:"shopDetail",components:{},data:function(){return{products:[{name:"烏龍茶",price:100,quantity:3},{name:"紅茶",price:300,quantity:2}],discount:50}},methods:{},watch:{},computed:{products_total:function(){var t=this.products.map((function(t){return t.price*t.quantity}));return t.reduce((function(t,s){return t+s}),0)}},mounted:function(){}}),e=r,c=(n("e2ff"),n("2877")),l=Object(c["a"])(e,a,i,!1,null,"65bf1bc8",null);s["default"]=l.exports},e8b5:function(t,s,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-8ef59b2a.8b5d093e.js.map