"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[690],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var a=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),l=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(d.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),y=n,m=c["".concat(d,".").concat(y)]||c[y]||p[y]||o;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6877:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(9668),n=(t(6540),t(5680));const o={title:"\u041e\u0431\u0437\u043e\u0440",sidebar_position:1,slug:"/"},i=void 0,s={unversionedId:"intro",id:"intro",title:"\u041e\u0431\u0437\u043e\u0440",description:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS?",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/KnowledgeBaseDNS/ru/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u041e\u0431\u0437\u043e\u0440",sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f",permalink:"/KnowledgeBaseDNS/ru/general/dns-filtering"}},d={},l=[{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS?",id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-dns",level:2},{value:"\u0417\u0430\u0447\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c DNS \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",id:"\u0437\u0430\u0447\u0435\u043c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-dns-\u0434\u043b\u044f-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",level:2},{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 AdGuard DNS?",id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-adguard-dns",level:2},{value:"\u041c\u043e\u0434\u0443\u043b\u044c DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445 AdGuard",id:"\u043c\u043e\u0434\u0443\u043b\u044c-dns-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438-\u0432-\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445-adguard",level:2}],u={toc:l},c="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-dns"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS?"),(0,n.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/MSp7Ki03-LI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("p",null,'DNS stands for "Domain Name System", and its purpose is to convert website names into IP addresses. \u041a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0437\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 DNS-\u0441\u0435\u0440\u0432\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c IP-\u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430. \u0412 \u043e\u0442\u0432\u0435\u0442 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 DNS-\u0440\u0435\u0437\u043e\u043b\u0432\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 IP-\u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u0430.'),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The default DNS server is usually provided by your ISP. This means that your ISP can track your online activity and sell logs to third parties.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png",alt:"Your device always uses a DNS server to obtain the IP addresses of the domains that are accessed by various apps, services, etc."})),(0,n.yg)("p",null,'There are also DNS servers that can block certain websites at DNS-level. How do they work? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.'),(0,n.yg)("h2",{id:"\u0437\u0430\u0447\u0435\u043c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-dns-\u0434\u043b\u044f-\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438-\u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430"},"\u0417\u0430\u0447\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c DNS \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430"),(0,n.yg)("p",null,"Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart car. And where the Internet is, there are ads and trackers. In this case, a browser-based ad blocker has proven insufficient. To get a better protection, use DNS in combination with VPN and ad blocker."),(0,n.yg)("p",null,"Using DNS for content blocking has some advantages as well as obvious flaws. On the one hand, DNS is in the loop for queries from all devices and their apps. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering."),(0,n.yg)("h2",{id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-adguard-dns"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 AdGuard DNS?"),(0,n.yg)("p",null,"AdGuard DNS is one of the most privacy-oriented DNS services on the market. It supports such reliable encryption protocols as DNS-over-HTTPS, DNS-over-TLS, and DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard has its own frequently updated database with names of domains that serve ads, trackers, and scam."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/scr2.png",alt:"An approximate scheme of how AdGuard DNS works"})),(0,n.yg)("p",null,"About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you\u2019ll see that encrypted DNS is just a small share of all queries."),(0,n.yg)("p",null,"AdGuard DNS exists in two main forms: ",(0,n.yg)("a",{parentName:"p",href:"public-dns/overview"},"Public AdGuard DNS")," and ",(0,n.yg)("a",{parentName:"p",href:"private-dns/overview"},"Private AdGuard DNS"),". None of these services require the installation of apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with."),(0,n.yg)("p",null,"Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different products. Their main difference is that you can customize Private AdGuard DNS, while Public AdGuard DNS cannot."),(0,n.yg)("h2",{id:"\u043c\u043e\u0434\u0443\u043b\u044c-dns-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438-\u0432-\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445-adguard"},"\u041c\u043e\u0434\u0443\u043b\u044c DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445 AdGuard"),(0,n.yg)("p",null,"All major AdGuard products, including AdGuard VPN, have a ",(0,n.yg)("strong",{parentName:"p"},"DNS filtering module")," where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to ",(0,n.yg)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"},"easily configure and use AdGuard DNS")," \u2014 Public or Private."))}p.isMDXComponent=!0}}]);