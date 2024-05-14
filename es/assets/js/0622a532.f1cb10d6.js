"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[60],{5680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>m});var o=r(6540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function t(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function d(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var a=o.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):t(t({},a),e)),r},u=function(e){var a=l(e.components);return o.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},g=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return r?o.createElement(m,t(t({ref:a},u),{},{components:r})):o.createElement(m,t({ref:a},u))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,t=new Array(i);t[0]=g;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d[p]="string"==typeof e?e:n,t[1]=d;for(var l=2;l<i;l++)t[l]=r[l];return o.createElement.apply(null,t)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5959:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=r(9668),n=(r(6540),r(5680));const i={title:"Filtrado de DNS",sidebar_position:1},t=void 0,d={unversionedId:"general/dns-filtering",id:"general/dns-filtering",title:"Filtrado de DNS",description:"La forma m\xe1s f\xe1cil de explorar los beneficios del filtrado de DNS es instalar el bloqueador de anuncios AdGuard o probar AdGuard DNS. Si quieres filtrar DNS a nivel de red, AdGuard Home es la mejor herramienta para ti",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/es/general/dns-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Filtrado de DNS",sidebar_position:1},sidebar:"sidebar",previous:{title:"Resumen",permalink:"/KnowledgeBaseDNS/es/"},next:{title:"Sintaxis de las reglas de filtrado DNS",permalink:"/KnowledgeBaseDNS/es/general/dns-filtering-syntax"}},s={},l=[{value:"\xbfQu\xe9 es un DNS?",id:"qu\xe9-es-un-dns",level:2},{value:"\xbfC\xf3mo funciona el filtrado de DNS?",id:"c\xf3mo-funciona-el-filtrado-de-dns",level:2},{value:"Servidores DNS",id:"servidores-dns",level:3},{value:"Listas de bloqueo de DNS locales",id:"listas-de-bloqueo-de-dns-locales",level:3},{value:"Filtrado de DNS vs. filtrado de red",id:"filtrado-de-dns-vs-filtrado-de-red",level:2}],u={toc:l},p="wrapper";function c(e){let{components:a,...r}=e;return(0,n.yg)(p,(0,o.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"La forma m\xe1s f\xe1cil de explorar los beneficios del filtrado de DNS es instalar el bloqueador de anuncios AdGuard o probar AdGuard DNS. Si quieres filtrar DNS a nivel de red, AdGuard Home es la mejor herramienta para ti"),(0,n.yg)("p",{parentName:"admonition"},"Quick links: ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome#getting-started"},"Get AdGuard Home"),", ",(0,n.yg)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Try AdGuard DNS"))),(0,n.yg)("p",null,'Para comprender mejor el filtrado de DNS, primero debemos responder a la pregunta "\xbfQu\xe9 es DNS?".'),(0,n.yg)("h2",{id:"qu\xe9-es-un-dns"},"\xbfQu\xe9 es un DNS?"),(0,n.yg)("p",null,"DNS significa \xabSistema de nombres de dominio\xbb, y su prop\xf3sito es traducir los nombres de los sitios web en algo que los navegadores puedan entender, es decir, direcciones IP. Por lo tanto, cada vez que visitas un sitio web, tu navegador env\xeda una solicitud a un tipo especial de servidor (servidor DNS). Ese servidor mira el nombre de dominio solicitado y responde con una direcci\xf3n IP correspondiente. De forma muy esquem\xe1tica se puede representar de la siguiente manera:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"C\xf3mo funciona el DNS"})),(0,n.yg)("p",null,"Lo mismo se aplica, por supuesto, a todas las aplicaciones y programas que env\xedan cualquier solicitud web, no solo a los navegadores."),(0,n.yg)("h2",{id:"c\xf3mo-funciona-el-filtrado-de-dns"},"\xbfC\xf3mo funciona el filtrado de DNS?"),(0,n.yg)("p",null,'Cuando utilizas una de las aplicaciones de AdGuard que admite el filtrado de DNS, esta act\xfaa como un b\xfafer entre tu dispositivo y el servidor DNS. Todas las solicitudes de DNS que tus navegadores o aplicaciones van a enviar, primero son procesadas por AdGuard. Si utilizas el servidor DNS predeterminado proporcionado por tu ISP, es probable que tu tr\xe1fico DNS no est\xe9 encriptado y sea vulnerable al snooping y al hijacking. AdGuard encriptar\xe1 todas tus solicitudes de DNS antes de que salgan de tu dispositivo, para que nadie pueda acceder a tu contenido. Adem\xe1s, AdGuard puede identificar las solicitudes a los dominios de anuncios, de seguimiento y/o de adultos y redirigirlas a un "agujero negro" en lugar de reenviarlas al servidor DNS. ',(0,n.yg)("a",{parentName:"p",href:"#local-dns-blocklists"},"M\xe1s adelante")," se hablar\xe1 de ello."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"C\xf3mo funciona el filtrado DNS"})),(0,n.yg)("p",null,"El filtrado de DNS es una herramienta poderosa y es compatible con todas las principales aplicaciones de AdGuard: ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-windows/overview.html"},"AdGuard para Windows"),", ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-mac/overview.html"},"AdGuard para Mac"),", ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard para Android")," y ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/adguard-ios/overview.html"},"AdGuard para iOS"),"."),(0,n.yg)("p",null,"El filtrado de DNS puede desglosarse en dos funciones distintas: cifrar y redirigir el tr\xe1fico DNS a los servidores DNS, y bloquear algunos dominios localmente, aplicando listas de bloqueo DNS."),(0,n.yg)("h3",{id:"servidores-dns"},"Servidores DNS"),(0,n.yg)("p",null,"Hay miles de servidores DNS para elegir, y todos son \xfanicos en sus propiedades y prop\xf3sitos. La mayor\xeda simplemente devuelve la direcci\xf3n IP del dominio solicitado, pero algunos tienen funciones adicionales: bloquean publicidad, seguimiento, dominios para adultos, etc. Hoy en d\xeda, todos los principales servidores DNS emplean uno o varios protocolos de cifrado fiables: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a ",(0,n.yg)("a",{parentName:"p",href:"https://adguard-dns.io/"},"DNS service"),", and it was the world's first to offer the brand new and very promising ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC")," encryption protocol. AdGuard tiene diferentes servidores para diferentes objetivos. Este diagrama ilustra c\xf3mo funcionan los servidores de bloqueo de AdGuard:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,n.yg)("p",null,"Otros proveedores de DNS pueden funcionar de forma diferente, as\xed que inf\xf3rmate sobre ellos antes de comprometerte con uno u otro servidor DNS. Puedes encontrar la lista de algunos de los proveedores de DNS m\xe1s populares en ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/general/dns-providers"},"este art\xedculo"),". Todas las aplicaciones de AdGuard compatibles con la funcionalidad DNS tambi\xe9n tienen una lista de servidores DNS para elegir, o incluso permiten seleccionar cualquier servidor DNS personalizado que desees."),(0,n.yg)("h3",{id:"listas-de-bloqueo-de-dns-locales"},"Listas de bloqueo de DNS locales"),(0,n.yg)("p",null,"Pero al depender s\xf3lo de los servidores DNS para filtrar tu tr\xe1fico DNS, se pierde toda la flexibilidad. Si \xe9l servidor seleccionado bloquea un dominio, no podr\xe1s acceder a \xe9l. Con AdGuard, ni siquiera es necesario configurar un servidor DNS espec\xedfico para filtrar el tr\xe1fico DNS. Todos los productos de AdGuard te permiten emplear listas de bloqueo DNS, ya sean simples archivos de hosts o listas que utilizan ",(0,n.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/es/general/dns-filtering-syntax"},"sintaxis m\xe1s avanzada"),". Funcionan de manera similar a las listas de bloqueo regulares: cuando una solicitud DNS coincide con una de las reglas de la lista de filtros activa, se bloquea. To be more precise, the DNS server gives a non-routable IP address for such a request."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"In AdGuard for iOS, first you have to enable ",(0,n.yg)("em",{parentName:"p"},"Advanced mode")," in ",(0,n.yg)("em",{parentName:"p"},"Settings")," in order to get access to DNS blocking.")),(0,n.yg)("p",null,"You can add as many custom blocklists as you wish. For instance, you can use ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS filter"),'. It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.'),(0,n.yg)("p",null,"There are hundreds of different DNS blocklists, you can look for them ",(0,n.yg)("a",{parentName:"p",href:"https://filterlists.com/"},"here"),"."),(0,n.yg)("h2",{id:"filtrado-de-dns-vs-filtrado-de-red"},"Filtrado de DNS vs. filtrado de red"),(0,n.yg)("p",null,"Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading ",(0,n.yg)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/"},"this article"),"."),(0,n.yg)("p",null,"First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Pros of DNS filtering:")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"En algunas plataformas, esta es la \xfanica manera de lograr el filtrado en todo el sistema. Por ejemplo, en iOS s\xf3lo el navegador Safari admite el bloqueo de contenido en el sentido familiar, para todo lo dem\xe1s s\xf3lo hay filtrado DNS."),(0,n.yg)("li",{parentName:"ol"},"Algunas formas de seguimiento (como ",(0,n.yg)("a",{parentName:"li",href:"https://adguard.com/blog/cname-tracking.html"},"Seguimiento con capa CNAME"),") s\xf3lo se puede tratar con el filtrado DNS."),(0,n.yg)("li",{parentName:"ol"},"La etapa de procesamiento de una solicitud DNS es la m\xe1s temprana que podr\xeda tratar con un anuncio o un rastreador, esto ayuda a ahorrar un poco de duraci\xf3n de la bater\xeda y el tr\xe1fico.")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Cons of DNS filtering:")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"DNS filtering is \"coarse\", which means it doesn't remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes)."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Example of difference"})," ",(0,n.yg)("em",{parentName:"p"},"An example of the difference between DNS filtering and network filtering"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules."))),(0,n.yg)("p",null,"We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible."))}c.isMDXComponent=!0}}]);