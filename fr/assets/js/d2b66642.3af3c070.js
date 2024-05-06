"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[640],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(3117),l=n(102),i=(n(7294),n(4137)),r=["components"],o={title:"Changelog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},d=void 0,s={unversionedId:"private-dns/api/changelog",id:"private-dns/api/changelog",title:"Changelog",description:"\x3c!--",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/private-dns/api/changelog.md",sourceDirName:"private-dns/api",slug:"/private-dns/api/changelog",permalink:"/KnowledgeBaseDNS/fr/private-dns/api/changelog",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api/changelog.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Changelog",sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"sidebar",previous:{title:"Reference",permalink:"/KnowledgeBaseDNS/fr/private-dns/api/reference"},next:{title:"Known issues",permalink:"/KnowledgeBaseDNS/fr/private-dns/solving-problems/known-issues"}},u={},p=[{value:"v1.8",id:"v18",level:2},{value:"v1.7",id:"v17",level:2},{value:"v1.6",id:"v16",level:2},{value:"v1.5",id:"v15",level:2},{value:"Model for safebrowsing settings changed",id:"model-for-safebrowsing-settings-changed",level:3},{value:"Model for saving server settings changed",id:"model-for-saving-server-settings-changed",level:3},{value:"v1.4",id:"v14",level:2},{value:"v1.3",id:"v13",level:2},{value:"v1.2",id:"v12",level:2},{value:"v1.1",id:"v11",level:2},{value:"v1.0",id:"v10",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article contains the changelog for ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/fr/private-dns/api/overview"},"AdGuard DNS API"),"."),(0,i.kt)("h2",{id:"v18"},"v1.8"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on April 20, 2024")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added support for DNS-over-HTTPS with authentication:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New operation \u2014 reset DNS-over-HTTPS password for device"),(0,i.kt)("li",{parentName:"ul"},"New device setting \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"detect_doh_auth_only"),". Disables all DNS connection methods except DNS-over-HTTPS with authentication"),(0,i.kt)("li",{parentName:"ul"},"New field in Device DNSAddresses \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"dns_over_https_with_auth_url"),". Indicates the URL to use when connecting using DNS-over-HTTPS with authentication")))),(0,i.kt)("h2",{id:"v17"},"v1.7"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on March 11, 2024")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added dedicated IPv4 addresses functionality:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dedicated IPv4 addresses can now be used on devices for DNS server configuration"),(0,i.kt)("li",{parentName:"ul"},"Dedicated IPv4 address is now associated with the device it is linked to, so that queries made to this address are logged for that device"))),(0,i.kt)("li",{parentName:"ul"},"Added new operations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List all available dedicated IPv4 addresses"),(0,i.kt)("li",{parentName:"ul"},"Allocate new dedicated IPv4 address"),(0,i.kt)("li",{parentName:"ul"},"Link an available IPv4 address to a device"),(0,i.kt)("li",{parentName:"ul"},"Unlink an IPv4 address from a device"),(0,i.kt)("li",{parentName:"ul"},"Request info on dedicated addresses associated with a device"))),(0,i.kt)("li",{parentName:"ul"},"Added new limits to Account limits:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dedicated_ipv4")," \u2014 provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them"))),(0,i.kt)("li",{parentName:"ul"},"Removed deprecated field of DNSServerSettings:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"safebrowsing_enabled"))))),(0,i.kt)("h2",{id:"v16"},"v1.6"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on January 22, 2024")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Added new section "Access settings" for DNS profiles (',(0,i.kt)("inlineCode",{parentName:"p"},"access_settings"),"). By customizing these fields, you\u2019ll be able to protect your AdGuard DNS server from unauthorized access:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowed_clients")," \u2014 here you can specify which clients can use your DNS server. This field will have priority over the ",(0,i.kt)("inlineCode",{parentName:"li"},"blocked_clients")," field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocked_clients")," \u2014 here you can specify which clients are not allowed to use your DNS server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocked_domain_rules")," \u2014 here you can specify which domains are not allowed to access your DNS server, as well as define such domains with wildcard and DNS filtering rules"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new limits to Account limits:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access_rules")," provides the sum of currently used ",(0,i.kt)("inlineCode",{parentName:"li"},"blocked_clients")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"blocked_domain_rules")," values, as well as the limit on access rules"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_rules")," shows the amount of created user rules, as well as the limit on them"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new setting: ",(0,i.kt)("inlineCode",{parentName:"p"},"ip_log_enabled")," for the ability to log client IP addresses and domains.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added new error code ",(0,i.kt)("inlineCode",{parentName:"p"},"FIELD_REACHED_LIMIT")," to indicate when limits have been reached:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For the total number of ",(0,i.kt)("inlineCode",{parentName:"li"},"blocked_clients")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"blocked_domain_rules")," in access settings"),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"rules")," in custom user rules settings")))),(0,i.kt)("h2",{id:"v15"},"v1.5"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on June 16, 2023")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new setting ",(0,i.kt)("inlineCode",{parentName:"li"},"block_nrd")," and group all security-related settings to one place.")),(0,i.kt)("h3",{id:"model-for-safebrowsing-settings-changed"},"Model for safebrowsing settings changed"),(0,i.kt)("p",null,"From"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true\n}\n')),(0,i.kt)("p",null,"To:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "enabled": true,\n   "block_dangerous_domains": true,\n   "block_nrd": false\n}\n')),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," is now control all settings in group, ",(0,i.kt)("inlineCode",{parentName:"p"},"block_dangerous_domains"),' is previous model field "enabled" and ',(0,i.kt)("inlineCode",{parentName:"p"},"block_nrd")," is settings for filtering newly registered domains."),(0,i.kt)("h3",{id:"model-for-saving-server-settings-changed"},"Model for saving server settings changed"),(0,i.kt)("p",null,"From:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_enabled" : true,\n  ..\n}\n')),(0,i.kt)("p",null,"to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protection_enabled" : true,\n  "safebrowsing_settings" : {\n     "enabled": true,\n     "block_dangerous_domains": true,\n     "block_nrd": false\n  }\n  ..\n}\n')),(0,i.kt)("p",null,"here new field ",(0,i.kt)("inlineCode",{parentName:"p"},"safebrowsing_settings")," is used instead of deprecated ",(0,i.kt)("inlineCode",{parentName:"p"},"safebrowsing_enabled"),", whose value stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"block_dangerous_domains"),"."),(0,i.kt)("h2",{id:"v14"},"v1.4"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on March 29, 2023")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP-address.")),(0,i.kt)("h2",{id:"v13"},"v1.3"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on December 13, 2022")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added method to get account limits.")),(0,i.kt)("h2",{id:"v12"},"v1.2"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on October 14, 2022")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later.")),(0,i.kt)("h2",{id:"v11"},"v1.1"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on July 07, 2022")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added methods to retrieve statistics by time, domains, companies and devices."),(0,i.kt)("li",{parentName:"ul"},"Added method for updating device settings."),(0,i.kt)("li",{parentName:"ul"},"Fixed required fields definition.")),(0,i.kt)("h2",{id:"v10"},"v1.0"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Released on February 22, 2022")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added authentication."),(0,i.kt)("li",{parentName:"ul"},"CRUD operations with devices and DNS servers."),(0,i.kt)("li",{parentName:"ul"},"Query log."),(0,i.kt)("li",{parentName:"ul"},"Downloading DOT and DOT .mobileconfig."),(0,i.kt)("li",{parentName:"ul"},"Filter Lists and Web-Services.")))}m.isMDXComponent=!0}}]);