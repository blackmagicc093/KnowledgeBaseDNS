"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[63],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(9668),o=(n(6540),n(5680));const r={title:"How to flush DNS cache",sidebar_position:1},i=void 0,s={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"How to flush DNS cache",description:"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u30d1\u30d6\u30ea\u30c3\u30afDNS\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u3001DNS\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002 DNS\u30b5\u30fc\u30d0\u30fc\u306f\u3001AdGuard \u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u4f7f\u7528\u3057\u3066\u8a2d\u5b9a\u3067\u304d\u307e\u3059\uff08\u6697\u53f7\u5316\u3055\u308c\u305fDNS\u30b5\u30fc\u30d0\u30fc\u3082\u8a2d\u5b9a\u53ef\u80fd\uff09\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/ja/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to flush DNS cache",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/ja/public-dns/overview"},next:{title:"Overview",permalink:"/KnowledgeBaseDNS/ja/private-dns/overview"}},l={},c=[{value:"What is DNS cache?",id:"what-is-dns-cache",level:2},{value:"When you might need to clear the cache",id:"when-you-might-need-to-clear-the-cache",level:2},{value:"How to flush DNS cache on different OSs",id:"how-to-flush-dns-cache-on-different-oss",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Clear DNS cache via Chrome",id:"clear-dns-cache-via-chrome",level:4},{value:"Modify the Wi-Fi network to Static",id:"modify-the-wi-fi-network-to-static",level:4},{value:"Reset network settings",id:"reset-network-settings",level:4},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"NSCD",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"How to flush DNS cache in Chrome",id:"how-to-flush-dns-cache-in-chrome",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001\u30d1\u30d6\u30ea\u30c3\u30afDNS\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u305f\u3081\u306b\u3001DNS\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u30d5\u30e9\u30c3\u30b7\u30e5\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002 DNS\u30b5\u30fc\u30d0\u30fc\u306f\u3001AdGuard \u5e83\u544a\u30d6\u30ed\u30c3\u30ab\u30fc\u3092\u4f7f\u7528\u3057\u3066\u8a2d\u5b9a\u3067\u304d\u307e\u3059\uff08\u6697\u53f7\u5316\u3055\u308c\u305fDNS\u30b5\u30fc\u30d0\u30fc\u3082\u8a2d\u5b9a\u53ef\u80fd\uff09\u3002"),(0,o.yg)("p",{parentName:"admonition"},"Quick link: ",(0,o.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"))),(0,o.yg)("h2",{id:"what-is-dns-cache"},"What is DNS cache?"),(0,o.yg)("p",null,"DNS cache stores the IP addresses of visited sites on the local computer so that they load faster next time. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache."),(0,o.yg)("p",null,"The DNS cache contains so-called ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"resource records (RRs)"),", which are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Resource data (or rdata)"),";"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Record type"),";"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Record name"),";"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"TTL (time to live)"),";"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Class"),";"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Resource data length"),".")),(0,o.yg)("h2",{id:"when-you-might-need-to-clear-the-cache"},"When you might need to clear the cache"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"You've changed your DNS provider to AdGuard DNS.")," If the user has changed their DNS, it may take some time to see the result because of the cache."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"You regularly get a 404 error.")," For example, the website has been transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"You want to improve your privacy.")),(0,o.yg)("h2",{id:"how-to-flush-dns-cache-on-different-oss"},"How to flush DNS cache on different OSs"),(0,o.yg)("h3",{id:"ios"},"iOS"),(0,o.yg)("p",null,"There are different ways to clear the DNS cache on your iPad or iPhone."),(0,o.yg)("p",null,"The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed."),(0,o.yg)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,o.yg)("em",{parentName:"p"},"General"),", scroll down, find ",(0,o.yg)("em",{parentName:"p"},"Reset")," and tap ",(0,o.yg)("em",{parentName:"p"},"Reset Network Settings"),"."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,o.yg)("h3",{id:"android"},"Android"),(0,o.yg)("p",null,"There are different ways to clear the DNS cache on your Android device. The exact steps may vary depending on the version of Android you're using and the device manufacturer."),(0,o.yg)("h4",{id:"clear-dns-cache-via-chrome"},"Clear DNS cache via Chrome"),(0,o.yg)("p",null,"Google Chrome, often the default browser on Android, has its own DNS cache. To flush this cache in the Chrome browser, follow the instructions below:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Launch Chrome on your Android device"),(0,o.yg)("li",{parentName:"ol"},"Type ",(0,o.yg)("inlineCode",{parentName:"li"},"chrome://net-internals/#DNS")," in the address bar"),(0,o.yg)("li",{parentName:"ol"},"On the DNS lookup page, choose DNS from the menu on the left"),(0,o.yg)("li",{parentName:"ol"},"In the panel on the right, tap the ",(0,o.yg)("em",{parentName:"li"},"Clear Host Cache")," button to clear the DNS cache on your device")),(0,o.yg)("h4",{id:"modify-the-wi-fi-network-to-static"},"Modify the Wi-Fi network to Static"),(0,o.yg)("p",null,"To clear your Android device's DNS cache by changing Wi-Fi network settings to Static, follow these steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go to ",(0,o.yg)("em",{parentName:"li"},"Settings \u2192 Wi-Fi")," and choose the network you're connected to"),(0,o.yg)("li",{parentName:"ol"},"Look for IP settings and select ",(0,o.yg)("em",{parentName:"li"},"Static")),(0,o.yg)("li",{parentName:"ol"},"Fill in the required fields. You can get the necessary information from your network administrator or from your router's configuration page"),(0,o.yg)("li",{parentName:"ol"},"After entering the required information, reconnect to your Wi-Fi network. This action will force your device to update its IP and DNS settings and clear the DNS cache")),(0,o.yg)("h4",{id:"reset-network-settings"},"Reset network settings"),(0,o.yg)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,o.yg)("em",{parentName:"p"},"Settings \u2192 System \u2192 Advanced \u2192 Reset options \u2192 Reset network settings")," and tap ",(0,o.yg)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,o.yg)("h3",{id:"macos"},"macOS"),(0,o.yg)("p",null,"To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search \u2014 to do that, press Command+Space and type ",(0,o.yg)("em",{parentName:"p"},"Terminal"),") and enter the following command:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,o.yg)("p",null,"On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,o.yg)("p",null,"After that, enter your administrator password to complete the process."),(0,o.yg)("h3",{id:"windows"},"Windows"),(0,o.yg)("p",null,"To flush DNS cache on your Windows device, do the following:"),(0,o.yg)("p",null,"Open the Command Prompt as an administrator. You can find it in the Start Menu by typing ",(0,o.yg)("em",{parentName:"p"},"command prompt")," or ",(0,o.yg)("em",{parentName:"p"},"cmd"),". Then type ",(0,o.yg)("inlineCode",{parentName:"p"},"ipconfig /flushdns")," and press Enter."),(0,o.yg)("p",null,"You will see the line ",(0,o.yg)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),". Done!"),(0,o.yg)("h3",{id:"linux"},"Linux"),(0,o.yg)("p",null,"Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used."),(0,o.yg)("p",null,"For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running."),(0,o.yg)("p",null,"To find out which DNS resolver you're using, command ",(0,o.yg)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"."),(0,o.yg)("h4",{id:"systemd-resolved"},"systemd-resolved"),(0,o.yg)("p",null,"To clear the ",(0,o.yg)("strong",{parentName:"p"},"systemd-resolved")," DNS cache, type:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,o.yg)("p",null,"On success, the command doesn\u2019t return any message."),(0,o.yg)("h4",{id:"dnsmasq"},"DNSMasq"),(0,o.yg)("p",null,"To clear the ",(0,o.yg)("strong",{parentName:"p"},"DNSMasq")," cache, you need to restart it:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,o.yg)("h4",{id:"nscd"},"NSCD"),(0,o.yg)("p",null,"To clear the ",(0,o.yg)("strong",{parentName:"p"},"NSCD")," cache, you also need to restart the service:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,o.yg)("h4",{id:"bind"},"BIND"),(0,o.yg)("p",null,"To flush the ",(0,o.yg)("strong",{parentName:"p"},"BIND")," DNS cache, run the command:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"rndc flush")),(0,o.yg)("p",null,"Then you will need to reload BIND:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"rndc reload")),(0,o.yg)("p",null,"You will get the message that the server has been successfully reloaded."),(0,o.yg)("h2",{id:"how-to-flush-dns-cache-in-chrome"},"How to flush DNS cache in Chrome"),(0,o.yg)("p",null,"This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Disable ",(0,o.yg)("strong",{parentName:"p"},"secure DNS")," in Chrome settings"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://settings/security\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Disable ",(0,o.yg)("strong",{parentName:"p"},"Async DNS resolver")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://flags/#enable-async-dns\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Press both buttons here"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#sockets\n"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Press ",(0,o.yg)("strong",{parentName:"p"},"Clear host cache")),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#dns\n")))))}h.isMDXComponent=!0}}]);