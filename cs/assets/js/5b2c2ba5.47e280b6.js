"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[782],{5680:(e,a,o)=>{o.d(a,{xA:()=>u,yg:()=>y});var n=o(6540);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=n.createContext({}),i=function(e){var a=n.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):d(d({},a),e)),o},u=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(o),m=t,y=s["".concat(p,".").concat(m)]||s[m]||v[m]||r;return o?n.createElement(y,d(d({ref:a},u),{},{components:o})):n.createElement(y,d({ref:a},u))}));function y(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,d=new Array(r);d[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[s]="string"==typeof e?e:t,d[1]=l;for(var i=2;i<r;i++)d[i]=o[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6349:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=o(9668),t=(o(6540),o(5680));const r={title:"P\u0159ehled",sidebar_position:1},d=void 0,l={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"P\u0159ehled",description:"Pomoc\xed AdGuard DNS m\u016f\u017eete nastavit sv\xe9 soukrom\xe9 DNS servery, kter\xe9 budou \u0159e\u0161it po\u017eadavky DNS a blokovat reklamy, sl\xeddi\u010de a \u0161kodliv\xe9 dom\xe9ny d\u0159\xedve, ne\u017e se dostanou do va\u0161eho za\u0159\xedzen\xed",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/cs/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"P\u0159ehled",sidebar_position:1},sidebar:"sidebar",previous:{title:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS",permalink:"/KnowledgeBaseDNS/cs/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"P\u0159ehled",permalink:"/KnowledgeBaseDNS/cs/private-dns/api/overview"}},p={},i=[{value:"Obecn\xe9",id:"obecn\xe9",level:2},{value:"Pro\u010d pot\u0159ebujete soukrom\xfd AdGuard DNS",id:"pro\u010d-pot\u0159ebujete-soukrom\xfd-adguard-dns",level:3},{value:"Rozd\xedl mezi soukrom\xfdm a ve\u0159ejn\xfdm AdGuard DNS",id:"rozd\xedl-mezi-soukrom\xfdm-a-ve\u0159ejn\xfdm-adguard-dns",level:3},{value:"Jak nastavit soukrom\xfd AdGuard DNS",id:"jak-nastavit-soukrom\xfd-adguard-dns",level:2},{value:"Pro za\u0159\xedzen\xed podporuj\xedc\xed DoH, DoT a DoQ",id:"pro-za\u0159\xedzen\xed-podporuj\xedc\xed-doh-dot-a-doq",level:3},{value:"Pro za\u0159\xedzen\xed nepodporuj\xedc\xed DoH, DoT a DoQ",id:"pro-za\u0159\xedzen\xed-nepodporuj\xedc\xed-doh-dot-a-doq",level:3},{value:"Vyhrazen\xe9 IP adresy",id:"vyhrazen\xe9-ip-adresy",level:4},{value:"P\u0159ipojen\xe1 IP",id:"p\u0159ipojen\xe1-ip",level:4},{value:"Funkce soukrom\xe9ho AdGuard DNS",id:"funkce-soukrom\xe9ho-adguard-dns",level:2},{value:"Statistiky",id:"statistiky",level:3},{value:"C\xedl datov\xe9ho provozu",id:"c\xedl-datov\xe9ho-provozu",level:3},{value:"Spole\u010dnosti",id:"spole\u010dnosti",level:3},{value:"Protokol dotaz\u016f",id:"protokol-dotaz\u016f",level:3},{value:"Nastaven\xed serveru",id:"nastaven\xed-serveru",level:2},{value:"Spr\xe1va seznam\u016f zak\xe1zan\xfdch",id:"spr\xe1va-seznam\u016f-zak\xe1zan\xfdch",level:3},{value:"Nastaven\xed zabezpe\u010den\xed",id:"nastaven\xed-zabezpe\u010den\xed",level:3},{value:"Rodi\u010dovsk\xe1 ochrana",id:"rodi\u010dovsk\xe1-ochrana",level:3},{value:"U\u017eivatelsk\xe1 pravidla",id:"u\u017eivatelsk\xe1-pravidla",level:3},{value:"DNS-over-HTTPS s ov\u011b\u0159ov\xe1n\xedm",id:"dns-over-https-s-ov\u011b\u0159ov\xe1n\xedm",level:3},{value:"Pokro\u010dil\xe9",id:"pokro\u010dil\xe9",level:2},{value:"Nastaven\xed p\u0159\xedstupu",id:"nastaven\xed-p\u0159\xedstupu",level:3}],u={toc:i},s="wrapper";function v(e){let{components:a,...o}=e;return(0,t.yg)(s,(0,n.A)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Pomoc\xed AdGuard DNS m\u016f\u017eete nastavit sv\xe9 soukrom\xe9 DNS servery, kter\xe9 budou \u0159e\u0161it po\u017eadavky DNS a blokovat reklamy, sl\xeddi\u010de a \u0161kodliv\xe9 dom\xe9ny d\u0159\xedve, ne\u017e se dostanou do va\u0161eho za\u0159\xedzen\xed"),(0,t.yg)("p",{parentName:"admonition"},"Rychl\xfd odkaz: ",(0,t.yg)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Vyzkou\u0161et AdGuard DNS"))),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"Private AdGuard DNS dashboard main"})),(0,t.yg)("h2",{id:"obecn\xe9"},"Obecn\xe9"),(0,t.yg)("iframe",{width:"560",height:"315",class:"youtube-video",src:"https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,t.yg)("p",null,"Soukrom\xfd AdGuard DNS nab\xedz\xed v\u0161echny v\xfdhody ve\u0159ejn\xe9ho serveru AdGuard DNS, v\u010detn\u011b \u0161ifrov\xe1n\xed provozu a seznam\u016f zak\xe1zan\xfdch dom\xe9n. Nab\xedz\xed tak\xe9 dal\u0161\xed funkce, jako je flexibiln\xed p\u0159izp\u016fsoben\xed, statistiky DNS a Rodi\u010dovsk\xe1 kontrola. V\u0161echny tyto mo\u017enosti jsou snadno dostupn\xe9 a spravovan\xe9 prost\u0159ednictv\xedm u\u017eivatelsky p\u0159\xedv\u011btiv\xe9ho p\u0159ehledu."),(0,t.yg)("h3",{id:"pro\u010d-pot\u0159ebujete-soukrom\xfd-adguard-dns"},"Pro\u010d pot\u0159ebujete soukrom\xfd AdGuard DNS"),(0,t.yg)("p",null,"Dnes m\u016f\u017eete k internetu p\u0159ipojit cokoli: televizory, ledni\u010dky, chytr\xe9 \u017e\xe1rovky nebo reproduktory. Spolu s nepopirateln\xfdmi vymo\u017eenostmi v\u0161ak z\xedsk\xe1te i sl\xeddi\u010de za\u0159\xedzen\xed a reklamy. Jednoduch\xfd blok\xe1tor reklam v prohl\xed\u017ee\u010di v\xe1s v tomto p\u0159\xedpad\u011b neochr\xe1n\xed, ale AdGuard DNS, kter\xfd m\u016f\u017eete nastavit tak, aby filtroval datov\xfd provoz, blokoval obsah a sl\xeddi\u010de, m\xe1 \xfa\u010dinek na cel\xfd syst\xe9m."),(0,t.yg)("p",null,"Kdysi \u0159ada produkt\u016f AdGuard zahrnovala pouze ",(0,t.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/cs/public-dns/overview"},"ve\u0159ejn\xfd AdGuard DNS")," a ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home"),". N\u011bkter\xfdm u\u017eivatel\u016fm tato \u0159e\u0161en\xed vyhovuj\xed, ale pro jin\xe9 je ve\u0159ejn\xfd AdGuard DNS m\xe1lo flexibiln\xed v konfiguraci a AdGuard Home postr\xe1d\xe1 jednoduchost. Zde p\u0159ich\xe1z\xed ke slovu soukrom\xfd AdGuard DNS. M\xe1 to nejlep\u0161\xed z obou sv\u011bt\u016f: nab\xedz\xed mo\u017enost p\u0159izp\u016fsoben\xed, ovl\xe1d\xe1n\xed a informace - to v\u0161e prost\u0159ednictv\xedm jednoduch\xe9ho a snadno pou\u017eiteln\xe9ho ovl\xe1dac\xedho panelu."),(0,t.yg)("h3",{id:"rozd\xedl-mezi-soukrom\xfdm-a-ve\u0159ejn\xfdm-adguard-dns"},"Rozd\xedl mezi soukrom\xfdm a ve\u0159ejn\xfdm AdGuard DNS"),(0,t.yg)("p",null,"Zde je jednoduch\xe9 srovn\xe1n\xed funkc\xed dostupn\xfdch ve ve\u0159ejn\xe9m a soukrom\xe9m AdGuard DNS."),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Ve\u0159ejn\xfd AdGuard DNS"),(0,t.yg)("th",{parentName:"tr",align:null},"Soukrom\xfd DNS AdGuard"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"\u0160ifrov\xe1n\xed provozu DNS"),(0,t.yg)("td",{parentName:"tr",align:null},"\u0160ifrov\xe1n\xed provozu DNS")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"P\u0159edem ur\u010den\xe9 seznamy zak\xe1zan\xfdch dom\xe9n"),(0,t.yg)("td",{parentName:"tr",align:null},"P\u0159izp\u016fsobiteln\xe9 seznamy zak\xe1zan\xfdch dom\xe9n")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"-"),(0,t.yg)("td",{parentName:"tr",align:null},"Vlastn\xed pravidla DNS filtrov\xe1n\xed s funkc\xed importu/exportu")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"-"),(0,t.yg)("td",{parentName:"tr",align:null},"Statistiky po\u017eadavk\u016f (zjist\u011bte, kam sm\u011b\u0159uj\xed va\u0161e DNS po\u017eadavky: do kter\xfdch zem\xed, ke kter\xfdm spole\u010dnostem atd.)")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"-"),(0,t.yg)("td",{parentName:"tr",align:null},"Podrobn\xfd z\xe1znam dotaz\u016f")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"-"),(0,t.yg)("td",{parentName:"tr",align:null},"Rodi\u010dovsk\xe1 ochrana")))),(0,t.yg)("h2",{id:"jak-nastavit-soukrom\xfd-adguard-dns"},"Jak nastavit soukrom\xfd AdGuard DNS"),(0,t.yg)("h3",{id:"pro-za\u0159\xedzen\xed-podporuj\xedc\xed-doh-dot-a-doq"},"Pro za\u0159\xedzen\xed podporuj\xedc\xed DoH, DoT a DoQ"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"P\u0159ejd\u011bte na sv\u016fj ",(0,t.yg)("a",{parentName:"li",href:"https://agrd.io/download-dns"},"ovl\xe1dac\xed panel AdGuard DNS")," (pokud nejste p\u0159ihl\xe1\u0161eni, p\u0159ihlaste se pomoc\xed sv\xe9ho AdGuard \xfa\u010dtu)"),(0,t.yg)("li",{parentName:"ol"},"Klikn\u011bte na ",(0,t.yg)("em",{parentName:"li"},"P\u0159ipojit za\u0159\xedzen\xed")," a postupujte podle pokyn\u016f na obrazovce")),(0,t.yg)("admonition",{title:"Podporovan\xe9 platformy:",type:"note"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"Android"),(0,t.yg)("li",{parentName:"ul"},"iOS"),(0,t.yg)("li",{parentName:"ul"},"Windows"),(0,t.yg)("li",{parentName:"ul"},"Mac"),(0,t.yg)("li",{parentName:"ul"},"Linux"),(0,t.yg)("li",{parentName:"ul"},"Routery"),(0,t.yg)("li",{parentName:"ul"},"Hern\xed konzole"),(0,t.yg)("li",{parentName:"ul"},"Chytr\xe9 TV"))),(0,t.yg)("p",null,"Ka\u017ed\xe9 za\u0159\xedzen\xed, kter\xe9 p\u0159id\xe1te do panelu AdGuard DNS, m\xe1 svou vlastn\xed jedine\u010dnou adresu, kterou lze pou\u017e\xedt, pokud za\u0159\xedzen\xed podporuje modern\xed \u0161ifrovan\xe9 protokoly DNS (DoH, DoT a DoQ)."),(0,t.yg)("h3",{id:"pro-za\u0159\xedzen\xed-nepodporuj\xedc\xed-doh-dot-a-doq"},"Pro za\u0159\xedzen\xed nepodporuj\xedc\xed DoH, DoT a DoQ"),(0,t.yg)("p",null,"Pokud za\u0159\xedzen\xed nepodporuje \u0161ifrovan\xfd DNS a mus\xedte pou\u017e\xedt b\u011b\u017en\xfd DNS, existuj\xed dal\u0161\xed dva zp\u016fsoby, jak umo\u017enit AdGuard DNS rozpoznat za\u0159\xedzen\xed \u2014 pou\u017eijte vyhrazen\xe9 IP adresy nebo IP adresu p\u0159ipojen\xe9ho za\u0159\xedzen\xed."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"B\u011b\u017en\xe9 adresy DNS pou\u017e\xedvejte pouze v p\u0159\xedpad\u011b, \u017ee nem\xe1te jinou mo\u017enost: sni\u017euje to bezpe\u010dnost po\u017eadavk\u016f DNS. Pokud se rozhodnete pou\u017e\xedvat b\u011b\u017en\xfd DNS, doporu\u010dujeme zvolit vyhrazen\xe9 IP adresy.")),(0,t.yg)("h4",{id:"vyhrazen\xe9-ip-adresy"},"Vyhrazen\xe9 IP adresy"),(0,t.yg)("p",null,"Pro ka\u017ed\xe9 za\u0159\xedzen\xed, kter\xe9 p\u0159ipoj\xedte k AdGuard DNS, v\xe1m budou nab\xeddnuty dv\u011b vyhrazen\xe9 adresy IPv6, kter\xe9 m\u016f\u017eete zadat v nastaven\xed za\u0159\xedzen\xed. Pou\u017eit\xed obou adres IPv6 nen\xed povinn\xe9, ale za\u0159\xedzen\xed mohou \u010dasto po\u017eadovat zad\xe1n\xed dvou adres IPv6."),(0,t.yg)("p",null,"Po p\u0159ipojen\xed k nim bude AdGuard DNS schopen ur\u010dit, kter\xe9 konkr\xe9tn\xed za\u0159\xedzen\xed odes\xedl\xe1 po\u017eadavky DNS a zobrazit pro n\u011b statistiky. A budete moci nakonfigurovat pravidla DNS speci\xe1ln\u011b pro toto za\u0159\xedzen\xed."),(0,t.yg)("p",null,"Bohu\u017eel ne v\u0161ichni poskytovatel\xe9 slu\u017eeb nab\xedzej\xed podporu protokolu IPv6 a ne v\u0161echna za\u0159\xedzen\xed umo\u017e\u0148uj\xed konfigurovat adresy IPv6. V takov\xe9m p\u0159\xedpad\u011b se mo\u017en\xe1 budete muset spolehnout na metodu p\u0159ipojen\xe9 IP."),(0,t.yg)("h4",{id:"p\u0159ipojen\xe1-ip"},"P\u0159ipojen\xe1 IP"),(0,t.yg)("p",null,'Pokud p\u0159ipoj\xedte za\u0159\xedzen\xed k AdGuard DNS prost\u0159ednictv\xedm p\u0159ipojen\xe9 IP adresy, slu\u017eba zapo\u010d\xedt\xe1 v\u0161echny b\u011b\u017en\xe9 po\u017eadavky DNS p\u0159ich\xe1zej\xedc\xed z t\xe9to IP adresy do tohoto "za\u0159\xedzen\xed". P\u0159i tomto zp\u016fsobu p\u0159ipojen\xed byste se museli znovu p\u0159ipojit ru\u010dn\u011b nebo pomoc\xed speci\xe1ln\xedho programu poka\u017ed\xe9, kdy\u017e se zm\u011bn\xed IP adresa za\u0159\xedzen\xed, co\u017e se d\u011bje po ka\u017ed\xe9m restartu.'),(0,t.yg)("p",null,"Jedin\xfdm po\u017eadavkem pro p\u0159ipojen\xed IP je, \u017ee ",(0,t.yg)("strong",{parentName:"p"},"mus\xed b\xfdt rezidentn\xed IP adresa"),"."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"Reziden\u010dn\xed IP adresa je IP adresa p\u0159i\u0159azen\xe1 za\u0159\xedzen\xed p\u0159ipojen\xe9mu k rezidentn\xedmu ISP. Obvykle je spojena s fyzickou lokalitou a je p\u0159id\u011blena jednotliv\xfdm dom\u016fm nebo byt\u016fm. Reziden\u010dn\xed IP adresy pou\u017e\xedvaj\xed b\u011b\u017en\xed u\u017eivatel\xe9 internetu pro sv\xe9 ka\u017edodenn\xed online aktivity, jako je proch\xe1zen\xed webu, p\u0159\xedstup k platform\xe1m soci\xe1ln\xedch m\xe9di\xed, odes\xedl\xe1n\xed e-mail\u016f nebo streamov\xe1n\xed obsahu.")),(0,t.yg)("p",null,"Pokud se sna\u017e\xedte p\u0159ipojit reziden\u010dn\xed IP adresu a AdGuard DNS v\xe1m to neumo\u017e\u0148uje, kontaktujte n\xe1\u0161 t\xfdm podpory na adrese ",(0,t.yg)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,t.yg)("h2",{id:"funkce-soukrom\xe9ho-adguard-dns"},"Funkce soukrom\xe9ho AdGuard DNS"),(0,t.yg)("h3",{id:"statistiky"},"Statistiky"),(0,t.yg)("p",null,"Na kart\u011b ",(0,t.yg)("em",{parentName:"p"},"Statistiky")," m\u016f\u017eete zobrazit v\u0161echny souhrnn\xe9 statistiky DNS dotaz\u016f proveden\xfdch za\u0159\xedzen\xedmi p\u0159ipojen\xfdmi k va\u0161emu soukrom\xe9mu AdGuard DNS. Zobrazuje celkov\xfd po\u010det a zem\u011bpisnou polohu po\u017eadavk\u016f, po\u010det zablokovan\xfdch po\u017eadavk\u016f, seznam spole\u010dnost\xed, kter\xfdm byly po\u017eadavky adresov\xe1ny, typy po\u017eadavk\u016f a nej\u017e\xe1dan\u011bj\u0161\xed dom\xe9ny."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"Private AdGuard DNS dashboard statistics"})),(0,t.yg)("h3",{id:"c\xedl-datov\xe9ho-provozu"},"C\xedl datov\xe9ho provozu"),(0,t.yg)("p",null,"Tato funkce v\xe1m uk\xe1\u017ee, kam sm\u011b\u0159uj\xed DNS po\u017eadavky odeslan\xe9 va\u0161imi za\u0159\xedzen\xedmi. Krom\u011b zobrazen\xed mapy c\xedl\u016f po\u017eadavk\u016f m\u016f\u017eete informace filtrovat podle data, za\u0159\xedzen\xed a zem\u011b."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"Private AdGuard DNS dashboard traffic"})),(0,t.yg)("h3",{id:"spole\u010dnosti"},"Spole\u010dnosti"),(0,t.yg)("p",null,"Na t\xe9to kart\u011b m\u016f\u017eete rychle zjistit, kter\xe9 spole\u010dnosti odes\xedlaj\xed nejv\xedce po\u017eadavk\u016f a kter\xe9 spole\u010dnosti jich maj\xed nejv\xedce zablokovan\xfdch."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"Private AdGuard DNS dashboard companies"})),(0,t.yg)("h3",{id:"protokol-dotaz\u016f"},"Protokol dotaz\u016f"),(0,t.yg)("p",null,"Jedn\xe1 se o podrobn\xfd protokol, kde m\u016f\u017eete zkontrolovat informace o ka\u017ed\xe9m jednotliv\xe9m po\u017eadavku a tak\xe9 t\u0159\xeddit po\u017eadavky podle stavu, typu, spole\u010dnosti, za\u0159\xedzen\xed, \u010dasu a zem\u011b."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"Private AdGuard DNS dashboard query log"})),(0,t.yg)("h2",{id:"nastaven\xed-serveru"},"Nastaven\xed serveru"),(0,t.yg)("p",null,"Tato \u010d\xe1st obsahuje \u0159adu nastaven\xed, kter\xe1 v\xe1m umo\u017en\xed p\u0159izp\u016fsobit provoz soukrom\xe9ho AdGuard DNS a zajistit, aby internet fungoval p\u0159esn\u011b podle va\u0161ich p\u0159edstav."),(0,t.yg)("h3",{id:"spr\xe1va-seznam\u016f-zak\xe1zan\xfdch"},"Spr\xe1va seznam\u016f zak\xe1zan\xfdch"),(0,t.yg)("p",null,"Funkce ",(0,t.yg)("em",{parentName:"p"},"Seznamy zak\xe1zan\xfdch")," umo\u017e\u0148uje ur\u010dit, kter\xe9 dom\xe9ny chcete blokovat a kter\xe9 ne. Vyberte si z \u0161irok\xe9 \u0161k\xe1ly seznam\u016f zak\xe1zan\xfdch pro r\u016fzn\xe9 \xfa\u010dely."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"Private AdGuard DNS dashboard blocklists"})),(0,t.yg)("h3",{id:"nastaven\xed-zabezpe\u010den\xed"},"Nastaven\xed zabezpe\u010den\xed"),(0,t.yg)("p",null,"I kdy\u017e jste si v\u011bdomi v\u0161ech trik\u016f, kter\xe9 online podvodn\xedci pou\u017e\xedvaj\xed, v\u017edy existuje nebezpe\u010d\xed, \u017ee omylem kliknete na \u0161kodliv\xfd odkaz. Chcete-li se p\u0159ed podobn\xfdmi nehodami chr\xe1nit, p\u0159ejd\u011bte do \u010d\xe1sti ",(0,t.yg)("em",{parentName:"p"},"Nastaven\xed zabezpe\u010den\xed")," a za\u0161krtn\u011bte pol\xed\u010dka vedle mo\u017enost\xed, kter\xe9 jsou zde uvedeny."),(0,t.yg)("p",null,"Funkce ",(0,t.yg)("em",{parentName:"p"},"Blokovat \u0161kodliv\xe9, phishingov\xe9 a podvodn\xe9 dom\xe9ny")," zablokuje dom\xe9ny nalezen\xe9 ve vyhrazen\xe9 datab\xe1zi. A mo\u017enost ",(0,t.yg)("em",{parentName:"p"},"Blokovat nov\u011b registrovan\xe9 dom\xe9ny")," zablokuje v\u0161echny dom\xe9ny registrovan\xe9 p\u0159ed m\xe9n\u011b ne\u017e 30 dny, kter\xe9 jsou \u010dasto pova\u017eov\xe1ny za rizikov\xe9 pro va\u0161e online soukrom\xed."),(0,t.yg)("h3",{id:"rodi\u010dovsk\xe1-ochrana"},"Rodi\u010dovsk\xe1 ochrana"),(0,t.yg)("p",null,"Chcete-li sv\xe9 d\xedt\u011b chr\xe1nit p\u0159ed online obsahem, kter\xfd pova\u017eujete za nevhodn\xfd, nastavte a aktivujte mo\u017enost ",(0,t.yg)("em",{parentName:"p"},"Rodi\u010dovsk\xe1 ochrana"),". Krom\u011b mo\u017enost\xed, jako je blokov\xe1n\xed obsahu pro dosp\u011bl\xe9 a bezpe\u010dn\xe9 vyhled\xe1v\xe1n\xed, jsme p\u0159idali mo\u017enost ru\u010dn\u011b zadat dom\xe9ny pro blokov\xe1n\xed a nastavit pl\xe1n, podle kter\xe9ho bude ",(0,t.yg)("em",{parentName:"p"},"Rodi\u010dovsk\xe1 ochrana")," fungovat."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Rodi\u010dovsk\xe1 ochrana"})),(0,t.yg)("h3",{id:"u\u017eivatelsk\xe1-pravidla"},"U\u017eivatelsk\xe1 pravidla"),(0,t.yg)("p",null,"Pro p\u0159\xedpady, kdy p\u0159edinstalovan\xe9 seznamy zak\xe1zan\xfdch s tis\xedci pravidly nesta\u010d\xed, m\xe1me \u0161ikovnou funkci s n\xe1zvem ",(0,t.yg)("em",{parentName:"p"},"U\u017eivatelsk\xe1 pravidla"),". Zde m\u016f\u017eete ru\u010dn\u011b p\u0159idat vlastn\xed pravidla pro blokov\xe1n\xed/odblokov\xe1n\xed ur\u010dit\xe9 dom\xe9ny nebo importovat seznamy vlastn\xedch pravidel. (pod\xedvejte se na ",(0,t.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/cs/general/dns-filtering-syntax"},"syntaxi pravidel DNS filtrov\xe1n\xed"),"). Seznamy m\u016f\u017eete vyexportovat."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"Private AdGuard DNS dashboard user rules"})),(0,t.yg)("h3",{id:"dns-over-https-s-ov\u011b\u0159ov\xe1n\xedm"},"DNS-over-HTTPS s ov\u011b\u0159ov\xe1n\xedm"),(0,t.yg)("p",null,"DNS-over-HTTPS s ov\u011b\u0159ov\xe1n\xedm poskytuje p\u0159ihla\u0161ovac\xed jm\xe9no a heslo pro p\u0159ipojen\xed k serveru. To m\u016f\u017ee omezit p\u0159\xedstup neopr\xe1vn\u011bn\xfdch u\u017eivatel\u016f a zv\xfd\u0161it bezpe\u010dnost."),(0,t.yg)("p",null,"Chcete-li tuto funkci povolit, p\u0159ejd\u011bte do ",(0,t.yg)("em",{parentName:"p"},"Nastaven\xed serveru")," \u2192 ",(0,t.yg)("em",{parentName:"p"},"Za\u0159\xedzen\xed")," \u2192 ",(0,t.yg)("em",{parentName:"p"},"Nastaven\xed")," a zm\u011b\u0148te DNS server na jeden s ov\u011b\u0159ov\xe1n\xedm. V\xfdb\u011brem mo\u017enosti ",(0,t.yg)("em",{parentName:"p"},"Zam\xedtnout jin\xe9 protokoly")," zak\xe1\u017eete pou\u017e\xedv\xe1n\xed alternativn\xedch protokol\u016f, \u010d\xedm\u017e zajist\xedte v\xfdhradn\xed ov\u011b\u0159ov\xe1n\xed DNS-over-HTTPS a zablokujete p\u0159\xedstup t\u0159et\xedch stran."),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png",alt:"DNS-over-HTTPS with authentication"})),(0,t.yg)("h2",{id:"pokro\u010dil\xe9"},"Pokro\u010dil\xe9"),(0,t.yg)("p",null,"Zde m\u016f\u017eete nastavit zp\u016fsob, jak\xfdm m\xe1 AdGuard DNS reagovat na blokovan\xe9 dom\xe9ny:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"V\xfdchoz\xed \u2014 nulov\xe1 IP adresa"),(0,t.yg)("li",{parentName:"ul"},"NXDOMAIN \u2014 dom\xe9na neexistuje"),(0,t.yg)("li",{parentName:"ul"},"REFUSED \u2014 server odm\xedtl po\u017eadavek zpracovat"),(0,t.yg)("li",{parentName:"ul"},"Vlastn\xed IP \u2014 m\u016f\u017eete ru\u010dn\u011b zadat IP adresu")),(0,t.yg)("p",null,"Krom\u011b toho m\u016f\u017eete upravit nastaven\xed ",(0,t.yg)("em",{parentName:"p"},"time-to-live")," (TTL). Tento parametr definuje dobu (v sekund\xe1ch), po kterou za\u0159\xedzen\xed klienta ukl\xe1d\xe1 odezvu na DNS po\u017eadavek do mezipam\u011bti. Vy\u0161\u0161\xed TTL znamen\xe1, \u017ee i kdy\u017e je d\u0159\xedve zablokovan\xe1 dom\xe9na odblokov\xe1na, m\u016f\u017ee se je\u0161t\u011b n\u011bjakou dobu jevit jako zablokovan\xe1. Hodnota TTL 0 znamen\xe1, \u017ee za\u0159\xedzen\xed neukl\xe1d\xe1 odezvy do mezipam\u011bti."),(0,t.yg)("p",null,"V sekci Pokro\u010dil\xe9 jsou t\u0159i mo\u017enosti, kter\xe9 lze p\u0159izp\u016fsobit:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Blokovat p\u0159\xedstup k iCloud Private Relay. Za\u0159\xedzen\xed, kter\xe1 pou\u017e\xedvaj\xed iCloud Private Relay, mohou nastaven\xed DNS ignorovat. Povolen\xedm t\xe9to mo\u017enosti zajist\xedte, \u017ee AdGuard DNS bude va\u0161e za\u0159\xedzen\xed \xfa\u010dinn\u011b chr\xe1nit."),(0,t.yg)("li",{parentName:"ul"},"Blokovat dom\xe9nu Firefox canary. Toto nastaven\xed zabra\u0148uje automatick\xe9mu p\u0159epnut\xed prohl\xed\u017ee\u010de Firefox na \u0159e\u0161itele DoH, pokud je AdGuard DNS nastaven jako DNS slu\u017eba pro cel\xfd syst\xe9m."),(0,t.yg)("li",{parentName:"ul"},"Zaznamenat IP adresy. Pokud je tato mo\u017enost povolena, budou IP adresy spojen\xe9 s p\u0159\xedchoz\xedmi po\u017eadavky DNS zaznamen\xe1ny a zobrazeny v protokolu dotaz\u016f.")),(0,t.yg)("h3",{id:"nastaven\xed-p\u0159\xedstupu"},"Nastaven\xed p\u0159\xedstupu"),(0,t.yg)("p",null,"Zde m\u016f\u017eete spravovat p\u0159\xedstup k DNS serveru pomoc\xed n\xe1sleduj\xedc\xedch nastaven\xed:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Povolen\xed klienti. Specify which clients are permitted to use your DNS server. Please note that allowed clients are not counted in added access rules, only disallowed clients and domains")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/private/rules_added.png",alt:"Added rules"})),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Blokovan\xed klienti. Seznam klient\u016f, kter\xfdm je zak\xe1z\xe1no pou\u017e\xedvat v\xe1\u0161 DNS server"),(0,t.yg)("li",{parentName:"ul"},"Blokovan\xe9 dom\xe9ny. Zadejte n\xe1zvy dom\xe9n, kter\xfdm bude odep\u0159en p\u0159\xedstup k DNS serveru. Zde lze tak\xe9 uv\xe9st z\xe1stupn\xe9 znaky a pravidla DNS filtrov\xe1n\xed")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"If you only want to use DNS on certain AS numbers or IP addresses, you should block everything else in the Disallowed clients field. Simply allowing only the necessary numbers and addresses in the ",(0,t.yg)("em",{parentName:"p"},"Allowed clients")," field won\u2019t be enough.")),(0,t.yg)("p",null,"Nastaven\xedm t\u011bchto mo\u017enost\xed m\u016f\u017eete kontrolovat, kdo pou\u017e\xedv\xe1 v\xe1\u0161 DNS server, a zabr\xe1nit p\u0159\xedpadn\xfdm \xfatok\u016fm DDoS. Po\u017eadavky, kter\xe9 nejsou povoleny, se nezobraz\xed v protokolu dotaz\u016f a nejsou \xfa\u010dtov\xe1ny."))}v.isMDXComponent=!0}}]);