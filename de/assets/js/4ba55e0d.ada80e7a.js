"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[245],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(t),u=a,y=g["".concat(l,".").concat(u)]||g[u]||c[u]||i;return t?r.createElement(y,o(o({ref:n},d),{},{components:t})):r.createElement(y,o({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3489:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(9668),a=(t(6540),t(5680));const i={title:"Known issues",sidebar_position:1},o=void 0,s={unversionedId:"private-dns/solving-problems/known-issues",id:"private-dns/solving-problems/known-issues",title:"Known issues",description:"After setting up AdGuard DNS, some users may find that it doesn\u2019t work properly: they see a message that their device is not connected to AdGuard DNS and the requests from that device are not displayed in the Query log. This can happen because of certain hidden settings in your browser or operating system. Let\u2019s look at several common issues and their solutions.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/private-dns/solving-problems/known-issues.md",sourceDirName:"private-dns/solving-problems",slug:"/private-dns/solving-problems/known-issues",permalink:"/KnowledgeBaseDNS/de/private-dns/solving-problems/known-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/solving-problems/known-issues.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Known issues",sidebar_position:1},sidebar:"sidebar",previous:{title:"Changelog",permalink:"/KnowledgeBaseDNS/de/private-dns/api/changelog"},next:{title:"Using alongside iCloud Private Relay",permalink:"/KnowledgeBaseDNS/de/private-dns/solving-problems/icloud-private-relay"}},l={},p=[{value:"Chrome\u2019s secure DNS settings",id:"chromes-secure-dns-settings",level:2},{value:"iCloud Private Relay (Safari, macOS, and iOS)",id:"icloud-private-relay-safari-macos-and-ios",level:2},{value:"Advanced Tracking and Fingerprinting Protection (Safari, starting from iOS 17)",id:"advanced-tracking-and-fingerprinting-protection-safari-starting-from-ios-17",level:2}],d={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"After setting up AdGuard DNS, some users may find that it doesn\u2019t work properly: they see a message that their device is not connected to AdGuard DNS and the requests from that device are not displayed in the Query log. This can happen because of certain hidden settings in your browser or operating system. Let\u2019s look at several common issues and their solutions."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can check the status of AdGuard DNS on the ",(0,a.yg)("a",{parentName:"p",href:"https://adguard.com/test.html"},"test page"),".")),(0,a.yg)("h2",{id:"chromes-secure-dns-settings"},"Chrome\u2019s secure DNS settings"),(0,a.yg)("p",null,"If you\u2019re using Chrome and you don\u2019t see any requests in your AdGuard DNS dashboard, this may be because Chrome uses its own DNS server. Here\u2019s how you can disable it:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Open Chrome\u2019s settings."),(0,a.yg)("li",{parentName:"ol"},"Navigate to ",(0,a.yg)("em",{parentName:"li"},"Privacy and security"),"."),(0,a.yg)("li",{parentName:"ol"},"Select ",(0,a.yg)("em",{parentName:"li"},"Security"),"."),(0,a.yg)("li",{parentName:"ol"},"Scroll down to ",(0,a.yg)("em",{parentName:"li"},"Use secure DNS"),"."),(0,a.yg)("li",{parentName:"ol"},"Disable the feature.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png",alt:"Chrome\u2019s Use secure DNS feature"})),(0,a.yg)("p",null,"If you disable Chrome\u2019s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you've set it up correctly."),(0,a.yg)("h2",{id:"icloud-private-relay-safari-macos-and-ios"},"iCloud Private Relay (Safari, macOS, and iOS)"),(0,a.yg)("p",null,"If you enable iCloud Private Relay in your device settings, Safari will use Apple\u2019s DNS addresses, which will override the AdGuard DNS settings."),(0,a.yg)("p",null,"Here\u2019s how you can disable iCloud Private Relay on your iPhone:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Open ",(0,a.yg)("em",{parentName:"li"},"Settings")," and tap your name."),(0,a.yg)("li",{parentName:"ol"},"Select ",(0,a.yg)("em",{parentName:"li"},"iCloud")," \u2192 ",(0,a.yg)("em",{parentName:"li"},"Private Relay"),"."),(0,a.yg)("li",{parentName:"ol"},"Turn off Private Relay.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png",alt:"iOS Private Relay"})),(0,a.yg)("p",null,"On your Mac:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Open ",(0,a.yg)("em",{parentName:"li"},"System Settings")," and click your name or ",(0,a.yg)("em",{parentName:"li"},"Apple ID"),"."),(0,a.yg)("li",{parentName:"ol"},"Select ",(0,a.yg)("em",{parentName:"li"},"iCloud")," \u2192 ",(0,a.yg)("em",{parentName:"li"},"Private Relay"),"."),(0,a.yg)("li",{parentName:"ol"},"Turn off Private Relay."),(0,a.yg)("li",{parentName:"ol"},"Click ",(0,a.yg)("em",{parentName:"li"},"Done"),".")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png",alt:"macOS Private Relay"})),(0,a.yg)("h2",{id:"advanced-tracking-and-fingerprinting-protection-safari-starting-from-ios-17"},"Advanced Tracking and Fingerprinting Protection (Safari, starting from iOS 17)"),(0,a.yg)("p",null,"After the iOS 17 update, Advanced Tracking and Fingerprinting Protection may be enabled in Safari settings, which could potentially have a similar effect to iCloud Private Relay bypassing AdGuard DNS settings."),(0,a.yg)("p",null,"Here\u2019s how you can disable Advanced Tracking and Fingerprinting Protection:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Open ",(0,a.yg)("em",{parentName:"li"},"Settings")," and scroll down to ",(0,a.yg)("em",{parentName:"li"},"Safari"),"."),(0,a.yg)("li",{parentName:"ol"},"Tap ",(0,a.yg)("em",{parentName:"li"},"Advanced"),"."),(0,a.yg)("li",{parentName:"ol"},"Disable ",(0,a.yg)("em",{parentName:"li"},"Advanced Tracking and Fingerprinting Protection"),".")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png",alt:"iOS Tracking and Fingerprinting Protection *mobile"})))}c.isMDXComponent=!0}}]);