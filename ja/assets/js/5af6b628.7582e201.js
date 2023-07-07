"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[719],{4137:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9568:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),i=["components"],s={title:"Overview",sidebar_position:1,slug:"/"},d=void 0,u={unversionedId:"intro",id:"intro",title:"Overview",description:"\u300cDNS\u300d\u3068\u306f\uff1f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/KnowledgeBaseDNS/ja/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"DNS\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",permalink:"/KnowledgeBaseDNS/ja/general/dns-filtering"}},l={},c=[{value:"\u300cDNS\u300d\u3068\u306f\uff1f",id:"dns\u3068\u306f",level:2},{value:"Why use DNS for content blocking",id:"why-use-dns-for-content-blocking",level:2},{value:"What is AdGuard DNS?",id:"what-is-adguard-dns",level:2},{value:"DNS filtering module in AdGuard products",id:"dns-filtering-module-in-adguard-products",level:2}],p={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dns\u3068\u306f"},"\u300cDNS\u300d\u3068\u306f\uff1f"),(0,o.kt)("p",null,'DNS stands for "Domain Name System", and its purpose is to convert websites\' names into IP addresses. Each time you go to a website, your browser sends a DNS query to a DNS server to figure out the IP address of the website. And a regular DNS resolver simply returns the IP address of the requested domain.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The default DNS server is usually provided by your ISP. This means that your ISP can track your online activity and sell logs to third parties.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png",alt:"Your device always uses some DNS server to obtain IP addresses of the domain name apps want to navigate to"})),(0,o.kt)("p",null,'\u7279\u5b9a\u306eWeb\u30b5\u30a4\u30c8\u3092DNS\u30ec\u30d9\u30eb\u3067\u30d6\u30ed\u30c3\u30af\u3067\u304d\u308bDNS\u30b5\u30fc\u30d0\u30fc\u3082\u3042\u308a\u307e\u3059\u3002 How do they work? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.'),(0,o.kt)("h2",{id:"why-use-dns-for-content-blocking"},"Why use DNS for content blocking"),(0,o.kt)("p",null,"Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart auto. And where the Internet is, there are ads and trackers. In this case, a browser-based ad blocker has proven insufficient. To get a better protection, use DNS in combination with VPN and ad blocker."),(0,o.kt)("p",null,"Using DNS for content blocking has some advantages as well as obvious flaws. On the one hand, DNS has no blind spots since it observes all devices and not just the browsers. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering."),(0,o.kt)("h2",{id:"what-is-adguard-dns"},"What is AdGuard DNS?"),(0,o.kt)("p",null,"AdGuard DNS is one of the most privacy-oriented DNS services on the market. It supports such reliable encryption protocols as DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard has its own base of domain names that serve ads, trackers, and fraud, and it is regularly updated."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/scr2.png",alt:"An approximate scheme of how AdGuard DNS works"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you\u2019ll see that encrypted DNS is just a small share of all queries.")),(0,o.kt)("p",null,"AdGuard DNS exists in two main forms: ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/public-dns/overview"},"public AdGuard DNS")," and ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/private-dns/overview"},"private AdGuard DNS"),". Both of these services do not require installing any apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with."),(0,o.kt)("p",null,"Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different services. Their main difference is that you can customize private AdGuard DNS, while public AdGuard DNS cannot."),(0,o.kt)("h2",{id:"dns-filtering-module-in-adguard-products"},"DNS filtering module in AdGuard products"),(0,o.kt)("p",null,"All major AdGuard products, including AdGuard VPN, have a ",(0,o.kt)("strong",{parentName:"p"},"DNS filtering module")," where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"},"easily configure and use AdGuard DNS")," \u2014 public or private."))}f.isMDXComponent=!0}}]);