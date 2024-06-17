"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[38],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>y});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,y=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return t?a.createElement(y,l(l({ref:n},d),{},{components:t})):a.createElement(y,l({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(9668),i=(t(6540),t(5680));const r={title:"Overview",sidebar_position:1},l=void 0,o={unversionedId:"dns-client/overview",id:"dns-client/overview",title:"Overview",description:"What is AdGuard DNS Client?",source:"@site/docs/dns-client/overview.md",sourceDirName:"dns-client",slug:"/dns-client/overview",permalink:"/KnowledgeBaseDNS/cs/dns-client/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/dns-client/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"Bezpe\u010dn\xe9 nastaven\xed AdGuard Home",permalink:"/KnowledgeBaseDNS/cs/adguard-home/running-securely"},next:{title:"Configuration file",permalink:"/KnowledgeBaseDNS/cs/dns-client/configuration"}},s={},p=[{value:"What is AdGuard DNS Client?",id:"what-is-adguard-dns-client",level:2},{value:"Quick start",id:"start",level:2},{value:"Getting started",id:"start-basic",level:2},{value:"Unix-like operating systems",id:"start-basic-unix",level:3},{value:"Windows",id:"start-basic-win",level:3},{value:"Command-line options",id:"opts",level:2},{value:"Help",id:"opts-help",level:3},{value:"Service",id:"opts-service",level:3},{value:"Verbose",id:"opts-verbose",level:3},{value:"Version",id:"opts-version",level:3},{value:"Configuration",id:"conf",level:2},{value:"File",id:"conf-file",level:3},{value:"Exit codes",id:"exit-codes",level:2}],d={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"what-is-adguard-dns-client"},"What is AdGuard DNS Client?"),(0,i.yg)("p",null,"A cross-platform lightweight DNS client for ",(0,i.yg)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS"),". It operates as a DNS server that forwards DNS requests to the corresponding upstream resolvers."),(0,i.yg)("h2",{id:"start"},"Quick start"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"AdGuard DNS Client is still in the Beta stage. It may be unstable.")),(0,i.yg)("p",null,"Supported operating systems:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Linux"),(0,i.yg)("li",{parentName:"ul"},"macOS"),(0,i.yg)("li",{parentName:"ul"},"Windows")),(0,i.yg)("p",null,"Supported CPU architectures:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"64-bit ARM"),(0,i.yg)("li",{parentName:"ul"},"AMD64"),(0,i.yg)("li",{parentName:"ul"},"i386")),(0,i.yg)("h2",{id:"start-basic"},"Getting started"),(0,i.yg)("h3",{id:"start-basic-unix"},"Unix-like operating systems"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Download and unpack the ",(0,i.yg)("inlineCode",{parentName:"p"},".tar.gz")," or ",(0,i.yg)("inlineCode",{parentName:"p"},".zip")," archive from the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardDNSClient/releases"},"releases page"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Install it as a service by running:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardDNSClient -s install -v\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Edit the configuration file ",(0,i.yg)("inlineCode",{parentName:"p"},"config.yaml"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Start the service:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardDNSClient -s start -v\n")))),(0,i.yg)("p",null,"To check that it works, use any DNS checking utility. For example, using ",(0,i.yg)("inlineCode",{parentName:"p"},"nslookup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"nslookup -debug 'www.example.com' '127.0.0.1'\n")),(0,i.yg)("h3",{id:"start-basic-win"},"Windows"),(0,i.yg)("p",null,"Just download and install using the MSI installer from the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardDNSClient/releases"},"releases page"),"."),(0,i.yg)("p",null,"To check that it works, use any DNS checking utility. For example, using ",(0,i.yg)("inlineCode",{parentName:"p"},"nslookup.exe"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'nslookup -debug "www.example.com" "127.0.0.1"\n')),(0,i.yg)("h2",{id:"opts"},"Command-line options"),(0,i.yg)("p",null,"Each option overrides the corresponding value provided by the configuration file and the environment."),(0,i.yg)("h3",{id:"opts-help"},"Help"),(0,i.yg)("p",null,"Option ",(0,i.yg)("inlineCode",{parentName:"p"},"-h")," makes AdGuard DNS Client print out a help message to standard output and exit with a success status-code."),(0,i.yg)("h3",{id:"opts-service"},"Service"),(0,i.yg)("p",null,"Option ",(0,i.yg)("inlineCode",{parentName:"p"},"-s <value>")," specifies the OS service action. Possible values are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"install"),": installs AdGuard DNS Client as a service"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"restart"),": restarts the running AdGuard DNS Client service"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"start"),": starts the installed AdGuard DNS Client service"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"status"),": shows the status of the installed AdGuard DNS Client service"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"stop"),": stops the running AdGuard DNS Client"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"uninstall"),": uninstalls AdGuard DNS Client service")),(0,i.yg)("h3",{id:"opts-verbose"},"Verbose"),(0,i.yg)("p",null,"Option ",(0,i.yg)("inlineCode",{parentName:"p"},"-v")," enables the verbose log output."),(0,i.yg)("h3",{id:"opts-version"},"Version"),(0,i.yg)("p",null,"Option ",(0,i.yg)("inlineCode",{parentName:"p"},"--version")," makes AdGuard DNS Client print out the version of the ",(0,i.yg)("inlineCode",{parentName:"p"},"AdGuardDNSClient")," executable to standard output and exit with a success status-code."),(0,i.yg)("h2",{id:"conf"},"Configuration"),(0,i.yg)("h3",{id:"conf-file"},"File"),(0,i.yg)("p",null,"The YAML configuration file is described in ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/cs/dns-client/configuration"},"its own article"),", and there is also a sample configuration file ",(0,i.yg)("inlineCode",{parentName:"p"},"config.dist.yaml"),".  Some configuration parameters can also be overridden using the ",(0,i.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/cs/dns-client/environment"},"environment"),"."),(0,i.yg)("h2",{id:"exit-codes"},"Exit codes"),(0,i.yg)("p",null,"There are a few different exit codes that may appear under different error conditions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"0"),": Successfully finished and exited, no errors.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"1"),": Internal error, most likely a misconfiguration.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"2"),": Bad command-line argument or value."))))}g.isMDXComponent=!0}}]);