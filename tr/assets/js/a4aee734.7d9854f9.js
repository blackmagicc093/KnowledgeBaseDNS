"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[975],{4137:function(e,a,i){i.d(a,{Zo:function(){return o},kt:function(){return m}});var n=i(7294);function t(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){t(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function d(e,a){if(null==e)return{};var i,n,t=function(e,a){if(null==e)return{};var i,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=n.createContext({}),u=function(e){var a=n.useContext(s),i=a;return e&&(i="function"==typeof e?e(a):l(l({},a),e)),i},o=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var i=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),p=u(i),m=t,c=p["".concat(s,".").concat(m)]||p[m]||k[m]||r;return i?n.createElement(c,l(l({ref:a},o),{},{components:i})):n.createElement(c,l({ref:a},o))}));function m(e,a){var i=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=i.length,l=new Array(r);l[0]=p;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:t,l[1]=d;for(var u=2;u<r;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4113:function(e,a,i){i.r(a),i.d(a,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return k}});var n=i(3117),t=i(102),r=(i(7294),i(4137)),l=["components"],d={title:"Genel Bak\u0131\u015f",sidebar_position:1},s=void 0,u={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"Genel Bak\u0131\u015f",description:"AdGuard DNS ile, DNS isteklerini \xe7\xf6z\xfcmlemek ve reklamlar\u0131, izleyicileri ve k\xf6t\xfc ama\xe7l\u0131 alan adlar\u0131n\u0131 cihaz\u0131n\u0131za ula\u015fmadan \xf6nce engellemek i\xe7in \xf6zel DNS sunucular\u0131n\u0131z\u0131 ayarlayabilirsiniz",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/tr/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Genel Bak\u0131\u015f",sidebar_position:1},sidebar:"sidebar",previous:{title:"DNS \xf6nbelle\u011fi nas\u0131l temizlenir",permalink:"/KnowledgeBaseDNS/tr/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"Genel Bak\u0131\u015f",permalink:"/KnowledgeBaseDNS/tr/private-dns/api/overview"}},o={},k=[{value:"\xd6zel AdGuard DNS nedir?",id:"\xf6zel-adguard-dns-nedir",level:2},{value:"\xd6zel AdGuard DNS&#39;e neden ihtiyac\u0131n\u0131z var",id:"\xf6zel-adguard-dnse-neden-ihtiyac\u0131n\u0131z-var",level:2},{value:"\xd6zel ve Genel AdGuard DNS aras\u0131ndaki fark",id:"\xf6zel-ve-genel-adguard-dns-aras\u0131ndaki-fark",level:2},{value:"\xd6zel AdGuard DNS nas\u0131l kurulur",id:"\xf6zel-adguard-dns-nas\u0131l-kurulur",level:2},{value:"Linked IP",id:"linked-ip",level:3},{value:"\xd6zel AdGuard DNS \xf6zellikleri",id:"\xf6zel-adguard-dns-\xf6zellikleri",level:2},{value:"Engel listeleri y\xf6netimi",id:"engel-listeleri-y\xf6netimi",level:3},{value:"Kullan\u0131c\u0131 kurallar\u0131",id:"kullan\u0131c\u0131-kurallar\u0131",level:3},{value:"\u0130statistikler",id:"i\u0307statistikler",level:3},{value:"Trafik istikameti",id:"trafik-istikameti",level:3},{value:"\u015eirketler",id:"\u015firketler",level:3},{value:"Sorgu g\xfcnl\xfc\u011f\xfc",id:"sorgu-g\xfcnl\xfc\u011f\xfc",level:3},{value:"Ebeveyn denetimi",id:"ebeveyn-denetimi",level:3}],p={toc:k};function m(e){var a=e.components,i=(0,t.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"AdGuard DNS ile, DNS isteklerini \xe7\xf6z\xfcmlemek ve reklamlar\u0131, izleyicileri ve k\xf6t\xfc ama\xe7l\u0131 alan adlar\u0131n\u0131 cihaz\u0131n\u0131za ula\u015fmadan \xf6nce engellemek i\xe7in \xf6zel DNS sunucular\u0131n\u0131z\u0131 ayarlayabilirsiniz"),(0,r.kt)("p",{parentName:"div"},"Quick link: ",(0,r.kt)("a",{parentName:"p",href:"https://adguard-dns.io/dashboard/"},"Try AdGuard DNS")))),(0,r.kt)("h1",{id:"\xf6zel-adguard-dns"},"\xd6zel AdGuard DNS"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"\xd6zel AdGuard DNS ana sayfa esas"})),(0,r.kt)("h2",{id:"\xf6zel-adguard-dns-nedir"},"\xd6zel AdGuard DNS nedir?"),(0,r.kt)("p",null,"Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard."),(0,r.kt)("h2",{id:"\xf6zel-adguard-dnse-neden-ihtiyac\u0131n\u0131z-var"},"\xd6zel AdGuard DNS'e neden ihtiyac\u0131n\u0131z var"),(0,r.kt)("p",null,"Bug\xfcn internete her \u015feyi ba\u011flayabilirsiniz: TV'ler, buzdolaplar\u0131, ak\u0131ll\u0131 ampuller veya hoparl\xf6rler. Ancak inkar edilemez kolayl\u0131klar\u0131n yan\u0131 s\u0131ra izleyiciler ve reklamlar elde edersiniz. Basit bir taray\u0131c\u0131 tabanl\u0131 reklam engelleyici bu durumda sizi korumayacakt\u0131r, ancak trafi\u011fi filtrelemek, i\xe7eri\u011fi ve izleyicileri engellemek i\xe7in ayarlayabilece\u011finiz AdGuard DNS, sistem genelinde bir etkiye sahiptir."),(0,r.kt)("p",null,"Halihaz\u0131rda ",(0,r.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/public-dns/overview"},"genel AdGuard DNS")," ve ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home'a")," sahibiz. Bu \xe7\xf6z\xfcmler baz\u0131 kullan\u0131c\u0131lar i\xe7in iyi \xe7al\u0131\u015f\u0131yor, ancak di\u011ferleri i\xe7in genel AdGuard DNS yap\u0131land\u0131rma esnekli\u011finden yoksunken AdGuard Home basitlikten yoksun. \u0130\u015fte bu noktada \xf6zel AdGuard DNS devreye giriyor. Her iki d\xfcnyan\u0131n da en iyisine sahiptir: \xf6zelle\u015ftirilebilirlik, kontrol ve bilgi sunar - t\xfcm\xfc basit, kullan\u0131m\u0131 kolay bir ana sayfa arac\u0131l\u0131\u011f\u0131yla."),(0,r.kt)("h2",{id:"\xf6zel-ve-genel-adguard-dns-aras\u0131ndaki-fark"},"\xd6zel ve Genel AdGuard DNS aras\u0131ndaki fark"),(0,r.kt)("p",null,"Genel AdGuard DNS ve \xd6zel AdGuard DNS sunucular\u0131nda bulunan \xf6zelliklerin basit bir kar\u015f\u0131la\u015ft\u0131rmas\u0131n\u0131 burada bulabilirsiniz."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Genel AdGuard DNS"),(0,r.kt)("th",{parentName:"tr",align:null},"\xd6zel AdGuard DNS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DNS trafik \u015fifreleme"),(0,r.kt)("td",{parentName:"tr",align:null},"DNS trafik \u015fifreleme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xd6nceden belirlenmi\u015f alan ad\u0131 engel listeleri"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd6zelle\u015ftirilebilir alan ad\u0131 engel listeleri")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0130\xe7e ve d\u0131\u015fa aktarma \xf6zelli\u011fine sahip \xf6zel DNS filtreleme kurallar\u0131")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0130stek istatistikleri (DNS isteklerinizin nereye gitti\u011fini g\xf6r\xfcn: hangi \xfclkeler, hangi \u015firketler, vb.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Ayr\u0131nt\u0131l\u0131 sorgu g\xfcnl\xfc\u011f\xfc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Ebeveyn denetimi")))),(0,r.kt)("h2",{id:"\xf6zel-adguard-dns-nas\u0131l-kurulur"},"\xd6zel AdGuard DNS nas\u0131l kurulur"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to your ",(0,r.kt)("a",{parentName:"li",href:"https://adguard-dns.io/dashboard/"},"AdGuard DNS dashboard")," (if not logged in, log in using your AdGuard account)"),(0,r.kt)("li",{parentName:"ol"},'"Cihaz\u0131 ba\u011fla" \xf6\u011fesine t\u0131klay\u0131n ve ekrandaki talimatlar\u0131 takip edin')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Desteklenen platformlar:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android"),(0,r.kt)("li",{parentName:"ul"},"iOS"),(0,r.kt)("li",{parentName:"ul"},"Windows"),(0,r.kt)("li",{parentName:"ul"},"Mac"),(0,r.kt)("li",{parentName:"ul"},"Linux"),(0,r.kt)("li",{parentName:"ul"},"Y\xf6nlendiriciler"),(0,r.kt)("li",{parentName:"ul"},"Oyun konsollar\u0131")),(0,r.kt)("p",null,"Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ)."),(0,r.kt)("h3",{id:"linked-ip"},"Linked IP"),(0,r.kt)("p",null,'If the device does not support encrypted DNS and you have to use plain DNS, there\'s another way to allow AdGuard DNS to recognize the device \u2014 link its IP address. In this case AdGuard DNS counts all plain DNS requests that come from that IP address towards that "device".'),(0,r.kt)("p",null,"The only requirement for linking IP is that ",(0,r.kt)("strong",{parentName:"p"},"it must be a residential IP address"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content."))),(0,r.kt)("p",null,"If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,r.kt)("h2",{id:"\xf6zel-adguard-dns-\xf6zellikleri"},"\xd6zel AdGuard DNS \xf6zellikleri"),(0,r.kt)("h3",{id:"engel-listeleri-y\xf6netimi"},"Engel listeleri y\xf6netimi"),(0,r.kt)("p",null,'"Engel listeleri" \xf6zelli\u011fi ile hangi alan adlar\u0131n\u0131 engellemek istedi\u011finizi ve hangilerini istemedi\u011finizi belirleyebilirsiniz. Farkl\u0131 ama\xe7lar i\xe7in \xe7ok \xe7e\u015fitli engel listeleri aras\u0131ndan se\xe7im yap\u0131n.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"\xd6zel AdGuard DNS ana sayfa engel listeleri"})),(0,r.kt)("h3",{id:"kullan\u0131c\u0131-kurallar\u0131"},"Kullan\u0131c\u0131 kurallar\u0131"),(0,r.kt)("p",null,"Binlerce kurala sahip \xf6nceden y\xfcklenmi\u015f ",(0,r.kt)("em",{parentName:"p"},"Engel listelerinin"),' yeterli olmad\u0131\u011f\u0131 zamanlar i\xe7in, "Kullan\u0131c\u0131 kurallar\u0131" adl\u0131 kullan\u0131\u015fl\u0131 bir fonksiyonumuz var. Burada, belirli bir etki alan\u0131n\u0131 engellemek/engelini kald\u0131rmak i\xe7in manuel olarak \xf6zel kurallar ekleyebilir veya \xf6zel kural listelerini i\xe7e aktarabilirsiniz (',(0,r.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/general/dns-filtering-syntax"},"DNS filtreleme kurallar\u0131 s\xf6z dizimine")," bak\u0131n). Listeleri d\u0131\u015fa aktarabilirsiniz."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"\xd6zel AdGuard DNS ana sayfa kullan\u0131c\u0131 kurallar\u0131"})),(0,r.kt)("h3",{id:"i\u0307statistikler"},"\u0130statistikler"),(0,r.kt)("p",null,'"\u0130statistikler" sekmesinde, \xd6zel AdGuard DNS\'inize ba\u011fl\u0131 cihazlar taraf\u0131ndan yap\u0131lan DNS sorgular\u0131yla ilgili t\xfcm \xf6zet istatistikleri g\xf6rebilirsiniz. \u0130steklerin toplam say\u0131s\u0131n\u0131 ve co\u011frafyas\u0131n\u0131, engellenen isteklerin say\u0131s\u0131n\u0131, isteklerin y\xf6nlendirildi\u011fi \u015firketlerin listesini, istek t\xfcrlerini ve ba\u015fl\u0131ca istenen alan adlar\u0131n\u0131 g\xf6sterir.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"\xd6zel AdGuard DNS ana sayfa istatistikler"})),(0,r.kt)("h3",{id:"trafik-istikameti"},"Trafik istikameti"),(0,r.kt)("p",null,"Bu \xf6zellik, cihazlar\u0131n\u0131z taraf\u0131ndan g\xf6nderilen DNS isteklerinin nereye gitti\u011fini g\xf6sterir. \u0130stek istikametlerinin haritas\u0131n\u0131 g\xf6rmenin yan\u0131 s\u0131ra bilgileri tarihe, cihaza ve \xfclkeye g\xf6re filtreleyebilirsiniz."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"\xd6zel AdGuard DNS ana sayfa trafik"})),(0,r.kt)("h3",{id:"\u015firketler"},"\u015eirketler"),(0,r.kt)("p",null,"Bu sekme, hangi \u015firketlerin en \xe7ok istek g\xf6nderdi\u011fini ve hangi \u015firketlerin en \xe7ok engellenen istekleri oldu\u011funu h\u0131zl\u0131 bir \u015fekilde kontrol etmenizi sa\u011flar."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"\xd6zel AdGuard DNS ana sayfa \u015firketler"})),(0,r.kt)("h3",{id:"sorgu-g\xfcnl\xfc\u011f\xfc"},"Sorgu g\xfcnl\xfc\u011f\xfc"),(0,r.kt)("p",null,"Bu, her bir istekle ilgili bilgileri kontrol edebilece\u011finiz ve ayr\u0131ca istekleri duruma, t\xfcre, \u015firkete, cihaza, zamana, \xfclkeye g\xf6re s\u0131ralayabilece\u011finiz ayr\u0131nt\u0131l\u0131 bir g\xfcnl\xfckt\xfcr."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"\xd6zel AdGuard DNS ana sayfa sorgu g\xfcnl\xfc\u011f\xfc"})),(0,r.kt)("h3",{id:"ebeveyn-denetimi"},"Ebeveyn denetimi"),(0,r.kt)("p",null,"\xc7ocu\u011funuzu uygunsuz buldu\u011funuz \xe7evrimi\xe7i i\xe7erikten korumak i\xe7in ",(0,r.kt)("em",{parentName:"p"},"Ebeveyn denetimi"),' se\xe7ene\u011fini ayarlay\u0131n ve etkinle\u015ftirin. "Yeti\u015fkinlere y\xf6nelik i\xe7erik" engelleme ve g\xfcvenli arama gibi se\xe7eneklere ek olarak, engelleme i\xe7in etki alanlar\u0131n\u0131 manuel olarak belirleme ve ',(0,r.kt)("em",{parentName:"p"},"Ebeveyn kontrol\xfc"),"'n\xfcn buna g\xf6re \xe7al\u0131\u015fmas\u0131 i\xe7in bir zamanlama ayarlama olana\u011f\u0131 ekledik."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"\xd6zel AdGuard DNS ana sayfa Ebeveyn Denetimi"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Hen\xfcz \xd6zel AdGuard DNS'iniz yoksa ",(0,r.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"resmi siteden edinebilirsiniz"),"."))))}m.isMDXComponent=!0}}]);