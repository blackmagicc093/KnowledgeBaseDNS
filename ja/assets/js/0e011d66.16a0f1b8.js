"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[576],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(y,o(o({ref:n},g),{},{components:t})):r.createElement(y,o({ref:n},g))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(9668),a=(t(6540),t(5680));const i={title:"Environment",sidebar_position:3},o=void 0,l={unversionedId:"dns-client/environment",id:"dns-client/environment",title:"Environment",description:"AdGuard DNS Client uses environment variables to store part of the configuration. The rest of the configuration is stored in the configuration file.",source:"@site/docs/dns-client/environment.md",sourceDirName:"dns-client",slug:"/dns-client/environment",permalink:"/KnowledgeBaseDNS/ja/dns-client/environment",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/dns-client/environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Environment",sidebar_position:3},sidebar:"sidebar",previous:{title:"Configuration file",permalink:"/KnowledgeBaseDNS/ja/dns-client/configuration"},next:{title:"Updating the Knowledge Base",permalink:"/KnowledgeBaseDNS/ja/miscellaneous/update-kb"}},p={},s=[{value:"<code>LOG_OUTPUT</code>",id:"LOG_OUTPUT",level:2},{value:"<code>LOG_FORMAT</code>",id:"LOG_FORMAT",level:2},{value:"<code>LOG_TIMESTAMP</code>",id:"LOG_TIMESTAMP",level:2},{value:"<code>VERBOSE</code>",id:"VERBOSE",level:2}],g={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"AdGuard DNS Client uses ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Environment_variable"},"environment variables")," to store part of the configuration. The rest of the configuration is stored in the ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/dns-client/configuration"},"configuration file"),"."),(0,a.yg)("h2",{id:"LOG_OUTPUT"},(0,a.yg)("inlineCode",{parentName:"h2"},"LOG_OUTPUT")),(0,a.yg)("p",null,"The log destination, must be an absolute path to the file or one of the special values."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"syslog")," means that the platform-specific system log is used, which is syslog for Linux and Event Log for Windows."),(0,a.yg)("p",{parentName:"li"},"  :::note"),(0,a.yg)("p",{parentName:"li"},"  Log entries written to the system log are in text format and use the system timestamp."),(0,a.yg)("p",{parentName:"li"},"  :::")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," for standard output stream.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"stderr")," for standard error stream.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Absolute path to the log file."),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("strong",{parentName:"p"},"Example:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"/home/user/logs.txt")),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("strong",{parentName:"p"},"Example:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"C:\\Users\\user\\logs.txt")))),(0,a.yg)("p",null,"This environment variable has priority over the ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/dns-client/configuration#log"},"log.output")," field in the configuration file."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Default:")," ",(0,a.yg)("strong",{parentName:"p"},"Unset.")),(0,a.yg)("h2",{id:"LOG_FORMAT"},(0,a.yg)("inlineCode",{parentName:"h2"},"LOG_FORMAT")),(0,a.yg)("p",null,"The format for log entries.  Valid formats are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"adguard_legacy")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"default")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"json")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"json_hybrid")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"text"))),(0,a.yg)("p",null,"This environment variable has priority over the ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/dns-client/configuration#log"},"log.format")," field in the configuration file."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Default:")," ",(0,a.yg)("strong",{parentName:"p"},"Unset.")),(0,a.yg)("h2",{id:"LOG_TIMESTAMP"},(0,a.yg)("inlineCode",{parentName:"h2"},"LOG_TIMESTAMP")),(0,a.yg)("p",null,"When set to ",(0,a.yg)("inlineCode",{parentName:"p"},"1"),", log entries have a timestamp. When set to ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),", log entries don\u2019t have it."),(0,a.yg)("p",null,"This environment variable has priority over the ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/dns-client/configuration#log"},"log.timestamp")," field in the configuration file."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Default:")," ",(0,a.yg)("strong",{parentName:"p"},"Unset.")),(0,a.yg)("h2",{id:"VERBOSE"},(0,a.yg)("inlineCode",{parentName:"h2"},"VERBOSE")),(0,a.yg)("p",null,"When set to ",(0,a.yg)("inlineCode",{parentName:"p"},"1"),", enable verbose logging. When set to ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),", disable it."),(0,a.yg)("p",null,"This environment variable has priority over the ",(0,a.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/dns-client/configuration#log"},"log.verbose")," field in the configuration file."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Default:")," ",(0,a.yg)("strong",{parentName:"p"},"Unset.")))}u.isMDXComponent=!0}}]);