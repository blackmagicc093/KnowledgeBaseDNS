"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[461],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,f=u["".concat(l,".").concat(c)]||u[c]||g[c]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(9668),n=(r(6540),r(5680));const o={title:"DNS filtering",sidebar_position:1},i=void 0,s={unversionedId:"general/dns-filtering",id:"general/dns-filtering",title:"DNS filtering",description:"The easiest way to explore the benefits of DNS filtering is to install AdGuard Ad Blocker or try AdGuard DNS. If you want to filter DNS at the network level, AdGuard Home is your tool",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/zh-TW/general/dns-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DNS filtering",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/zh-TW/"},next:{title:"DNS filtering rules syntax",permalink:"/KnowledgeBaseDNS/zh-TW/general/dns-filtering-syntax"}},l={},d=[{value:"What is DNS?",id:"what-is-dns",level:2},{value:"How does DNS filtering work?",id:"how-does-dns-filtering-work",level:2},{value:"DNS servers",id:"dns-servers",level:3},{value:"Local DNS blocklists",id:"local-dns-blocklists",level:3},{value:"DNS filtering vs. network filtering",id:"dns-filtering-vs-network-filtering",level:2}],p={toc:d},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The easiest way to explore the benefits of DNS filtering is to install AdGuard Ad Blocker or try AdGuard DNS. If you want to filter DNS at the network level, AdGuard Home is your tool"),(0,n.yg)("p",{parentName:"admonition"},"Quick links: ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome#getting-started"},"Get AdGuard Home"),", ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Try AdGuard DNS"))),(0,n.yg)("p",null,'To better understand DNS filtering, first, we should answer the question "What is DNS?".'),(0,n.yg)("h2",{id:"what-is-dns"},"What is DNS?"),(0,n.yg)("p",null,'DNS stands for "Domain Name System", and its purpose is to translate websites\' names into something browsers can understand, i.e. IP addresses. Thus, each time you go to a website, your browser sends a request to a special type of server (DNS server). That server looks at the requested domain name and replies with a corresponding IP address. Very schematically it can be represented like this:'),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"How DNS works"})),(0,n.yg)("p",null,"The same applies, of course, to all apps and programs that send any web requests, not just browsers."),(0,n.yg)("h2",{id:"how-does-dns-filtering-work"},"How does DNS filtering work?"),(0,n.yg)("p",null,'When you use one of the AdGuard apps that supports DNS filtering, it acts as a buffer between your device and the DNS server. All DNS requests that your browsers or apps are about to send first get processed by AdGuard. If you\'re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that ',(0,n.yg)("a",{parentName:"p",href:"#local-dns-blocklists"},"later"),"."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"How DNS filtering works"})),(0,n.yg)("p",null,"DNS filtering is a powerful tool and it's supported by all major AdGuard apps: ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-windows/overview.html"},"AdGuard for Windows"),", ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-mac/overview.html"},"AdGuard for Mac"),", ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard for Android")," and ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-ios/overview.html"},"AdGuard for iOS"),"."),(0,n.yg)("p",null,"DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists."),(0,n.yg)("h3",{id:"dns-servers"},"DNS servers"),(0,n.yg)("p",null,"There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a ",(0,n.yg)("a",{parentName:"p",href:"https://adguard-dns.io/"},"DNS service"),", and it was the world's first to offer the brand new and very promising ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC")," encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard blocking servers work:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,n.yg)("p",null,"Other DNS providers may work differently, so learn more about them before committing to this or that DNS server. You can find the list of some of the most popular DNS providers in ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/zh-TW/general/dns-providers"},"this article"),". All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you'd like."),(0,n.yg)("h3",{id:"local-dns-blocklists"},"Local DNS blocklists"),(0,n.yg)("p",null,"But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you don't even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple hosts files or lists that use ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/zh-TW/general/dns-filtering-syntax"},"more advanced syntax"),". They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. To be more precise, the DNS server gives a non-routable IP address for such a request."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"In AdGuard for iOS, first you have to enable ",(0,n.yg)("em",{parentName:"p"},"Advanced mode")," in ",(0,n.yg)("em",{parentName:"p"},"Settings")," in order to get access to DNS blocking.")),(0,n.yg)("p",null,"You can add as many custom blocklists as you wish. For instance, you can use ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS filter"),'. It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.'),(0,n.yg)("p",null,"There are hundreds of different DNS blocklists, you can look for them ",(0,n.yg)("a",{parentName:"p",href:"https://filterlists.com/"},"here"),"."),(0,n.yg)("h2",{id:"dns-filtering-vs-network-filtering"},"DNS filtering vs. network filtering"),(0,n.yg)("p",null,"Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/"},"this article"),"."),(0,n.yg)("p",null,"First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Pros of DNS filtering:")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"On some platforms, this is the only way to achieve system-wide filtering. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there's only DNS filtering."),(0,n.yg)("li",{parentName:"ol"},"Some forms of tracking (like ",(0,n.yg)("a",{parentName:"li",href:"https://adguard.com/blog/cname-tracking.html"},"CNAME-cloaked tracking"),") can only be dealt with by DNS filtering."),(0,n.yg)("li",{parentName:"ol"},"The stage of processing a DNS request is the earliest you could possibly deal with an ad or a tracker, this helps save a little bit of battery life and traffic.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Cons of DNS filtering:")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"DNS filtering is \"coarse\", which means it doesn't remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes)."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Example of difference"})," ",(0,n.yg)("em",{parentName:"p"},"An example of the difference between DNS filtering and network filtering"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules."))),(0,n.yg)("p",null,"We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible."))}g.isMDXComponent=!0}}]);