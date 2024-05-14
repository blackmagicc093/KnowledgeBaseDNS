"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[172],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(9668),a=(n(6540),n(5680));const o={title:"\u5982\u4f55\u5237\u65b0DNS\u7f13\u5b58",sidebar_position:1},i=void 0,s={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"\u5982\u4f55\u5237\u65b0DNS\u7f13\u5b58",description:"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u89e3\u91ca\u5237\u65b0 DNS \u7f13\u5b58\u4ee5\u89e3\u51b3\u516c\u5171 DNS \u95ee\u9898\u7684\u65b9\u5f0f\u3002 You can use AdGuard Ad Blocker to set up DNS servers, including encrypted ones",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/zh-CN/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u5237\u65b0DNS\u7f13\u5b58",sidebar_position:1},sidebar:"sidebar",previous:{title:"\u6982\u89c8",permalink:"/KnowledgeBaseDNS/zh-CN/public-dns/overview"},next:{title:"\u6982\u89c8",permalink:"/KnowledgeBaseDNS/zh-CN/private-dns/overview"}},l={},c=[{value:"What is DNS cache?",id:"what-is-dns-cache",level:2},{value:"\u5f53\u60a8\u53ef\u80fd\u9700\u8981\u6e05\u9664\u7f13\u5b58\u65f6",id:"\u5f53\u60a8\u53ef\u80fd\u9700\u8981\u6e05\u9664\u7f13\u5b58\u65f6",level:2},{value:"\u5982\u4f55\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5237\u65b0 DNS \u7f13\u5b58",id:"\u5982\u4f55\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5237\u65b0-dns-\u7f13\u5b58",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Clear DNS cache via Chrome",id:"clear-dns-cache-via-chrome",level:4},{value:"Modify the Wi-Fi network to Static",id:"modify-the-wi-fi-network-to-static",level:4},{value:"Reset network settings",id:"reset-network-settings",level:4},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"NSCD",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"How to flush DNS cache in Chrome",id:"how-to-flush-dns-cache-in-chrome",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u89e3\u91ca\u5237\u65b0 DNS \u7f13\u5b58\u4ee5\u89e3\u51b3\u516c\u5171 DNS \u95ee\u9898\u7684\u65b9\u5f0f\u3002 You can use AdGuard Ad Blocker to set up DNS servers, including encrypted ones"),(0,a.yg)("p",{parentName:"admonition"},"Quick link: ",(0,a.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"))),(0,a.yg)("h2",{id:"what-is-dns-cache"},"What is DNS cache?"),(0,a.yg)("p",null,"DNS cache stores the IP addresses of visited sites on the local computer so that they load faster next time. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache."),(0,a.yg)("p",null,"The DNS cache contains so-called ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"resource records (RRs)"),", which are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u8d44\u6e90\u6570\u636e\uff08\u6216 rdata\uff09"),"\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u8bb0\u5f55\u7c7b\u578b"),"\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u8bb0\u5f55\u540d\u5b57"),"\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"TTL\uff08\u751f\u5b58\u65f6\u95f4\uff09"),"\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u7c7b\u522b"),"\uff1b"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u8d44\u6e90\u6570\u636e\u957f\u5ea6"),"\u3002")),(0,a.yg)("h2",{id:"\u5f53\u60a8\u53ef\u80fd\u9700\u8981\u6e05\u9664\u7f13\u5b58\u65f6"},"\u5f53\u60a8\u53ef\u80fd\u9700\u8981\u6e05\u9664\u7f13\u5b58\u65f6"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"You've changed your DNS provider to AdGuard DNS.")," If the user has changed their DNS, it may take some time to see the result because of the cache."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"You regularly get a 404 error.")," For example, the website has been transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"You want to improve your privacy.")),(0,a.yg)("h2",{id:"\u5982\u4f55\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5237\u65b0-dns-\u7f13\u5b58"},"\u5982\u4f55\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5237\u65b0 DNS \u7f13\u5b58"),(0,a.yg)("h3",{id:"ios"},"iOS"),(0,a.yg)("p",null,"There are different ways to clear the DNS cache on your iPad or iPhone."),(0,a.yg)("p",null,"The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed."),(0,a.yg)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,a.yg)("em",{parentName:"p"},"General"),", scroll down, find ",(0,a.yg)("em",{parentName:"p"},"Reset")," and tap ",(0,a.yg)("em",{parentName:"p"},"Reset Network Settings"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,a.yg)("h3",{id:"android"},"Android"),(0,a.yg)("p",null,"There are different ways to clear the DNS cache on your Android device. The exact steps may vary depending on the version of Android you're using and the device manufacturer."),(0,a.yg)("h4",{id:"clear-dns-cache-via-chrome"},"Clear DNS cache via Chrome"),(0,a.yg)("p",null,"Google Chrome, often the default browser on Android, has its own DNS cache. To flush this cache in the Chrome browser, follow the instructions below:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Launch Chrome on your Android device"),(0,a.yg)("li",{parentName:"ol"},"Type ",(0,a.yg)("inlineCode",{parentName:"li"},"chrome://net-internals/#DNS")," in the address bar"),(0,a.yg)("li",{parentName:"ol"},"On the DNS lookup page, choose DNS from the menu on the left"),(0,a.yg)("li",{parentName:"ol"},"In the panel on the right, tap the ",(0,a.yg)("em",{parentName:"li"},"Clear Host Cache")," button to clear the DNS cache on your device")),(0,a.yg)("h4",{id:"modify-the-wi-fi-network-to-static"},"Modify the Wi-Fi network to Static"),(0,a.yg)("p",null,"To clear your Android device's DNS cache by changing Wi-Fi network settings to Static, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Go to ",(0,a.yg)("em",{parentName:"li"},"Settings \u2192 Wi-Fi")," and choose the network you're connected to"),(0,a.yg)("li",{parentName:"ol"},"Look for IP settings and select ",(0,a.yg)("em",{parentName:"li"},"Static")),(0,a.yg)("li",{parentName:"ol"},"Fill in the required fields. You can get the necessary information from your network administrator or from your router's configuration page"),(0,a.yg)("li",{parentName:"ol"},"After entering the required information, reconnect to your Wi-Fi network. This action will force your device to update its IP and DNS settings and clear the DNS cache")),(0,a.yg)("h4",{id:"reset-network-settings"},"Reset network settings"),(0,a.yg)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,a.yg)("em",{parentName:"p"},"Settings \u2192 System \u2192 Advanced \u2192 Reset options \u2192 Reset network settings")," and tap ",(0,a.yg)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.")),(0,a.yg)("h3",{id:"macos"},"macOS"),(0,a.yg)("p",null,"To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search \u2014 to do that, press Command+Space and type ",(0,a.yg)("em",{parentName:"p"},"Terminal"),") and enter the following command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,a.yg)("p",null,"On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,a.yg)("p",null,"After that, enter your administrator password to complete the process."),(0,a.yg)("h3",{id:"windows"},"Windows"),(0,a.yg)("p",null,"To flush DNS cache on your Windows device, do the following:"),(0,a.yg)("p",null,"Open the Command Prompt as an administrator. You can find it in the Start Menu by typing ",(0,a.yg)("em",{parentName:"p"},"command prompt")," or ",(0,a.yg)("em",{parentName:"p"},"cmd"),". Then type ",(0,a.yg)("inlineCode",{parentName:"p"},"ipconfig /flushdns")," and press Enter."),(0,a.yg)("p",null,"You will see the line ",(0,a.yg)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),". Done!"),(0,a.yg)("h3",{id:"linux"},"Linux"),(0,a.yg)("p",null,"Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used."),(0,a.yg)("p",null,"For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running."),(0,a.yg)("p",null,"To find out which DNS resolver you're using, command ",(0,a.yg)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"."),(0,a.yg)("h4",{id:"systemd-resolved"},"systemd-resolved"),(0,a.yg)("p",null,"To clear the ",(0,a.yg)("strong",{parentName:"p"},"systemd-resolved")," DNS cache, type:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,a.yg)("p",null,"On success, the command doesn\u2019t return any message."),(0,a.yg)("h4",{id:"dnsmasq"},"DNSMasq"),(0,a.yg)("p",null,"To clear the ",(0,a.yg)("strong",{parentName:"p"},"DNSMasq")," cache, you need to restart it:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,a.yg)("h4",{id:"nscd"},"NSCD"),(0,a.yg)("p",null,"To clear the ",(0,a.yg)("strong",{parentName:"p"},"NSCD")," cache, you also need to restart the service:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,a.yg)("h4",{id:"bind"},"BIND"),(0,a.yg)("p",null,"To flush the ",(0,a.yg)("strong",{parentName:"p"},"BIND")," DNS cache, run the command:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rndc flush")),(0,a.yg)("p",null,"Then you will need to reload BIND:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rndc reload")),(0,a.yg)("p",null,"You will get the message that the server has been successfully reloaded."),(0,a.yg)("h2",{id:"how-to-flush-dns-cache-in-chrome"},"How to flush DNS cache in Chrome"),(0,a.yg)("p",null,"This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Disable ",(0,a.yg)("strong",{parentName:"p"},"secure DNS")," in Chrome settings"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://settings/security\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Disable ",(0,a.yg)("strong",{parentName:"p"},"Async DNS resolver")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://flags/#enable-async-dns\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Press both buttons here"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#sockets\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Press ",(0,a.yg)("strong",{parentName:"p"},"Clear host cache")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#dns\n")))))}u.isMDXComponent=!0}}]);