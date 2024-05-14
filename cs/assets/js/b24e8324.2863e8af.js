"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[947],{5680:(e,o,t)=>{t.d(o,{xA:()=>s,yg:()=>m});var r=t(6540);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function u(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):d(d({},o),e)),t},s=function(e){var o=i(e.components);return r.createElement(l.Provider,{value:o},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},c=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(t),c=a,m=p["".concat(l,".").concat(c)]||p[c]||v[c]||n;return t?r.createElement(m,d(d({ref:o},s),{},{components:t})):r.createElement(m,d({ref:o},s))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,d=new Array(n);d[0]=c;var u={};for(var l in o)hasOwnProperty.call(o,l)&&(u[l]=o[l]);u.originalType=e,u[p]="string"==typeof e?e:a,d[1]=u;for(var i=2;i<n;i++)d[i]=t[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1708:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>v,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var r=t(9668),a=(t(6540),t(5680));const n={title:"P\u0159ehled",sidebar_position:1,slug:"/"},d=void 0,u={unversionedId:"intro",id:"intro",title:"P\u0159ehled",description:"Co je DNS?",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/KnowledgeBaseDNS/cs/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"P\u0159ehled",sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"DNS filtrov\xe1n\xed",permalink:"/KnowledgeBaseDNS/cs/general/dns-filtering"}},l={},i=[{value:"Co je DNS?",id:"co-je-dns",level:2},{value:"Pro\u010d pou\u017e\xedvat DNS pro blokov\xe1n\xed obsahu",id:"pro\u010d-pou\u017e\xedvat-dns-pro-blokov\xe1n\xed-obsahu",level:2},{value:"Co je AdGuard DNS?",id:"co-je-adguard-dns",level:2},{value:"Modul filtrov\xe1n\xed DNS v produktech AdGuardu",id:"modul-filtrov\xe1n\xed-dns-v-produktech-adguardu",level:2}],s={toc:i},p="wrapper";function v(e){let{components:o,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"co-je-dns"},"Co je DNS?"),(0,a.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/MSp7Ki03-LI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.yg)("p",null,'DNS je zkratka pro "Domain name system" a jeho \xfa\u010delem je p\u0159ev\xe1d\u011bt n\xe1zvy webov\xfdch str\xe1nek na IP adresy. Poka\u017ed\xe9, kdy\u017e p\u0159ejdete na webovou str\xe1nku, ode\u0161le prohl\xed\u017ee\u010d DNS dotaz na server DNS, aby zjistil IP adresu webov\xe9 str\xe1nky. A b\u011b\u017en\xfd DNS \u0159e\u0161itel jednodu\u0161e vr\xe1t\xed IP adresu po\u017eadovan\xe9 dom\xe9ny.'),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"V\xfdchoz\xed DNS server obvykle poskytuje v\xe1\u0161 ISP. To znamen\xe1, \u017ee poskytovatel internetu m\u016f\u017ee sledovat va\u0161i online aktivitu a prod\xe1vat z\xe1znamy t\u0159et\xedm stran\xe1m.")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png",alt:"Your device always uses a DNS server to obtain the IP addresses of the domains that are accessed by various apps, services, etc."})),(0,a.yg)("p",null,'Existuj\xed tak\xe9 DNS servery, kter\xe9 mohou blokovat ur\u010dit\xe9 webov\xe9 str\xe1nky na \xfarovni DNS. Jak funguj\xed? Kdy\u017e va\u0161e za\u0159\xedzen\xed ode\u0161le "\u0161patn\xfd" po\u017eadavek, a\u0165 u\u017e se jedn\xe1 o reklamu nebo sl\xeddi\u010d, server DNS zabr\xe1n\xed p\u0159ipojen\xed t\xedm, \u017ee odpov\xed nesm\u011brovatelnou IP adresou blokovan\xe9 dom\xe9ny.'),(0,a.yg)("h2",{id:"pro\u010d-pou\u017e\xedvat-dns-pro-blokov\xe1n\xed-obsahu"},"Pro\u010d pou\u017e\xedvat DNS pro blokov\xe1n\xed obsahu"),(0,a.yg)("p",null,"K internetu je dnes p\u0159ipojeno \xfapln\u011b v\u0161echno, od televize po chytr\xe9 \u017e\xe1rovky, od mobiln\xedch za\u0159\xedzen\xed po chytr\xe1 auta. A kde je internet, tam jsou i reklamy a sl\xeddi\u010de. V tomto p\u0159\xedpad\u011b se uk\xe1zalo, \u017ee blokov\xe1n\xed reklam v prohl\xed\u017ee\u010di nesta\u010d\xed. Chcete-li z\xedskat lep\u0161\xed ochranu, pou\u017eijte DNS v kombinaci s VPN a blok\xe1torem reklam."),(0,a.yg)("p",null,"Pou\u017eit\xed DNS pro blokov\xe1n\xed obsahu m\xe1 n\u011bkter\xe9 v\xfdhody i zjevn\xe9 nedostatky. Na jednu stranu je DNS ve smy\u010dce pro dotazy ze v\u0161ech za\u0159\xedzen\xed a jejich aplikac\xed. Na druhou stranu v\u0161ak samotn\xe9 DNS blokov\xe1n\xed nem\u016f\u017ee zajistit kosmetick\xe9 filtrov\xe1n\xed."),(0,a.yg)("h2",{id:"co-je-adguard-dns"},"Co je AdGuard DNS?"),(0,a.yg)("p",null,"AdGuard DNS je jednou z nejv\xedce, na soukrom\xed orientovan\xfdch slu\u017eeb DNS na trhu. Podporuje spolehliv\xe9 \u0161ifrovac\xed protokoly jako DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC. M\u016f\u017ee pracovat jako obvykl\xfd DNS \u0159e\u0161itel v re\u017eimu bez filtrov\xe1n\xed, ale tak\xe9 m\u016f\u017ee zajistit blokov\xe1n\xed obsahu na \xfarovni DNS: identifikovat po\u017eadavky na reklamn\xed, sledovac\xed a/nebo dom\xe9ny pro dosp\u011bl\xe9 (voliteln\u011b) a odpov\u011bd\u011bt pr\xe1zdnou odpov\u011bd\xed. AdGuard m\xe1 vlastn\xed \u010dasto aktualizovanou datab\xe1zi s n\xe1zvy dom\xe9n, kter\xe9 zobrazuj\xed reklamy, sl\xeddi\u010de a podvody."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/scr2.png",alt:"P\u0159ibli\u017en\xe9 sch\xe9ma fungov\xe1n\xed AdGuard DNS"})),(0,a.yg)("p",null,"P\u0159ibli\u017en\u011b 75 % datov\xe9ho provozu AdGuard DNS je \u0161ifrov\xe1no. T\xedm se vlastn\u011b DNS servery blokuj\xedc\xed obsah li\u0161\xed od ostatn\xedch. Pokud se pod\xedv\xe1te na statistiky CloudFlare nebo Quad9, zjist\xedte, \u017ee \u0161ifrovan\xe9 DNS tvo\u0159\xed jen mal\xfd pod\xedl v\u0161ech dotaz\u016f."),(0,a.yg)("p",null,"AdGuard DNS existuje ve dvou hlavn\xedch form\xe1ch: ",(0,a.yg)("a",{parentName:"p",href:"public-dns/overview"},"Ve\u0159ejn\xfd AdGuard DNS")," a ",(0,a.yg)("a",{parentName:"p",href:"private-dns/overview"},"Soukrom\xfd AdGuard DNS"),". \u017d\xe1dn\xe1 z t\u011bchto slu\u017eeb nevy\u017eaduje instalaci aplikac\xed. Snadno se nastavuj\xed a pou\u017e\xedvaj\xed a poskytuj\xed u\u017eivatel\u016fm minimum funkc\xed pot\u0159ebn\xfdch k blokov\xe1n\xed reklam, sl\xeddi\u010d\u016f, \u0161kodliv\xfdch webov\xfdch str\xe1nek a obsahu pro dosp\u011bl\xe9 (pokud je vy\u017eadov\xe1no). Neexistuj\xed \u017e\xe1dn\xe1 omezen\xed, s jak\xfdmi za\u0159\xedzen\xedmi je lze pou\u017e\xedvat."),(0,a.yg)("p",null,"Navzdory mnoha podobnostem jsou Soukrom\xfd AdGuard DNS a Ve\u0159ejn\xfd AdGuard DNS dva r\u016fzn\xe9 produkty. Hlavn\xed rozd\xedl spo\u010d\xedv\xe1 v tom, \u017ee Soukrom\xfd AdGuard DNS si m\u016f\u017eete p\u0159izp\u016fsobit, zat\xedmco Ve\u0159ejn\xfd AdGuard DNS nikoli."),(0,a.yg)("h2",{id:"modul-filtrov\xe1n\xed-dns-v-produktech-adguardu"},"Modul filtrov\xe1n\xed DNS v produktech AdGuardu"),(0,a.yg)("p",null,"V\u0161echny hlavn\xed produkty AdGuardu, v\u010detn\u011b AdGuard VPN, maj\xed ",(0,a.yg)("strong",{parentName:"p"},"modul filtrov\xe1n\xed DNS"),', kde m\u016f\u017eete vybrat DNS server poskytovatele, kter\xe9mu d\u016fv\u011b\u0159ujete. Na seznamu jsou samoz\u0159ejm\u011b "V\xfdchoz\xed" AdGuard DNS, AdGuard DNS "Bez filtrov\xe1n\xed" a AdGuard DNS "Ochrana rodiny". Aplikace AdGuardu tak\xe9 umo\u017e\u0148uj\xed u\u017eivatel\u016fm ',(0,a.yg)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"},"snadno konfigurovat a pou\u017e\xedvat AdGuard DNS")," \u2014 Ve\u0159ejn\xfd nebo Soukrom\xfd."))}v.isMDXComponent=!0}}]);