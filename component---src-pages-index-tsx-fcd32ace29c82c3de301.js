"use strict";(self.webpackChunkmodino_website=self.webpackChunkmodino_website||[]).push([[245],{2079:function(e,t,a){a.d(t,{A:function(){return f}});var n={};a.r(n),a.d(n,{ctaAccentButton:function(){return r},highlight:function(){return i},mArticleChip:function(){return l},mArticleChipBlue:function(){return s},mArticleChipGreen:function(){return m},mArticleChipRed:function(){return d},mdcButton:function(){return u},mdcButton__ripple:function(){return p},mdcRippleUpgradedBackgroundFocused:function(){return b}});var o=a(4810),c=a(6540),r="article-chip-component-module--cta-accent-button--7b186",i="article-chip-component-module--highlight--2f6c4",l="article-chip-component-module--mArticleChip--9fc60",s="article-chip-component-module--mArticleChipBlue--b4fb3",m="article-chip-component-module--mArticleChipGreen--50425",d="article-chip-component-module--mArticleChipRed--6c41a",u="article-chip-component-module--mdc-button--3a692",p="article-chip-component-module--mdc-button__ripple--7e2a1",b="article-chip-component-module--mdc-ripple-upgraded--background-focused--85c65";var h=e=>{var t;let{type:a,children:o}=e;const r=e=>""+e[0].toUpperCase()+e.slice(1,e.length);return c.createElement("div",{className:l+" "+n["mArticleChip"+r(a)]},r(null!==(t=null==o?void 0:o.toString())&&void 0!==t?t:""))},g=a(2532);var f=e=>{let{title:t,date:a,summary:n,thumbnailPhotoUrl:r,slug:i,categories:l}=e;const s=(0,g.c)(r);return c.createElement(o.N_,{to:"/articles/"+i,className:"article-tile-component-module--mArticleTile--c8868"},c.createElement(g.G,{image:s,className:"article-tile-component-module--mArticleTileImage--60c72",alt:"article thumbnail photo"}),c.createElement("div",{className:"article-tile-component-module--mArticleTileContent--ec490"},c.createElement("div",{className:"article-tile-component-module--mArticleTileChips--9e673"},l.map(((e,t)=>c.createElement(h,{type:"red",key:e+"-index"},e)))),c.createElement("h3",{className:"article-tile-component-module--mArticleTileTitle--f165d"},t),c.createElement("i",{className:"article-tile-component-module--mArticleTileDate--34184"}," ",a," "),c.createElement("p",{className:"article-tile-component-module--mArticleTileDescription--f3504"},n)))}},9918:function(e,t,a){a.r(t),a.d(t,{Head:function(){return B},default:function(){return k}});var n={};a.r(n),a.d(n,{carousel:function(){return m},carouselButtonNext:function(){return d},carouselButtonPrev:function(){return u},carouselContent:function(){return p},carouselContentScrolledTo0:function(){return b},carouselContentScrolledTo1:function(){return h},carouselContentScrolledTo2:function(){return g},carouselControls:function(){return f},carouselPageButton:function(){return w},carouselPageButtonActive:function(){return y},ctaAccentButton:function(){return v},highlight:function(){return E},mArticlesTeaser__carouselPageButtonActive:function(){return N},mdcButton:function(){return _},mdcButton__label:function(){return x},mdcButton__ripple:function(){return C},mdcRippleUpgradedBackgroundFocused:function(){return A}});var o=a(6540),c=a(4810),r=a(7397),i=a(8564),l=a(2079),s=a(3540),m="carousel-component-module--carousel--ffbbc",d="carousel-component-module--carouselButtonNext--268fb",u="carousel-component-module--carouselButtonPrev--20595",p="carousel-component-module--carouselContent--9197d",b="carousel-component-module--carouselContentScrolledTo0--f96c1",h="carousel-component-module--carouselContentScrolledTo1--f3424",g="carousel-component-module--carouselContentScrolledTo2--a4cc7",f="carousel-component-module--carouselControls--5fe05",w="carousel-component-module--carouselPageButton--d1497",y="carousel-component-module--carouselPageButtonActive--055ed",v="carousel-component-module--cta-accent-button--80b01",E="carousel-component-module--highlight--06d34",N="carousel-component-module--m-articles-teaser__carousel-page-button--active--6250a",_="carousel-component-module--mdc-button--8078e",x="carousel-component-module--mdc-button__label--3b1a7",C="carousel-component-module--mdc-button__ripple--72f38",A="carousel-component-module--mdc-ripple-upgraded--background-focused--af85a";var T=e=>{let{articles:t}=e;const{0:a,1:c}=(0,o.useState)(0);return o.createElement("div",{className:m},o.createElement("div",{className:p+" "+n["carouselContentScrolledTo"+a]},t.map((e=>o.createElement(l.A,Object.assign({},e,{key:e.slug}))))),o.createElement("div",{className:f},o.createElement(s.$,{dense:!0,className:u,onClick:()=>(()=>{const e=a-1<0?(a-1+t.length)%t.length:(a-1)%t.length;c(e)})()},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"}))),t.map(((e,t)=>o.createElement("button",{className:w+" "+(t===a?y:""),onClick:()=>{return void 0===(e=t)&&(e=0),void c(e);var e},key:e.slug}))),o.createElement(s.$,{dense:!0,className:d,onClick:()=>{c((a+1)%t.length)}},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"})))))},q=a(2532);var k=e=>{let t,{data:n}=e;const{0:r,1:l}=(0,o.useState)(!0),m=()=>{var e,a;l((null===(e=t)||void 0===e?void 0:e.getBoundingClientRect().y)>(null===(a=t)||void 0===a?void 0:a.clientHeight))};return(0,o.useEffect)((()=>{t=document.getElementById("main-cta-button"),document.addEventListener("scroll",m)}),[]),o.createElement(i.A,{isMenuButtonAMainCtaButton:!r},o.createElement("main",{className:"m-main"},o.createElement("section",{className:"m-section m-top-hero index-module--mHomeHero--23a8e"},o.createElement("div",{className:"m-section__content"},o.createElement("div",{className:"m-top-hero__wrapper"},o.createElement("h1",{className:"m-header m-top-hero__title"},"Keep your",o.createElement("br",null),"IoT devices",o.createElement("br",null),o.createElement("span",{className:"m-top-hero__title-highlight"},"out of harm’s way")),o.createElement("p",{className:"m-top-hero__description"},"Deliver new software and configuration settings securely, remotely, and risk-free"),o.createElement(s.$,{id:"main-cta-button",unelevated:!0,className:"m-top-hero__action-button cta-accent-button",onClick:()=>window.location.href="./get-in-touch"},"Get in touch")))),o.createElement("section",{className:"m-section index-module--mMission--f680e"},o.createElement("h2",{className:"m-section__header"},"Our mission"),o.createElement("div",{className:"m-section__content"},o.createElement("div",{className:"index-module--mQuote--f7b4d"},o.createElement("blockquote",{className:"index-module--mQuoteText--da2ae"},o.createElement("span",{className:"highlight"},"Modino.io",o.createElement("div",{className:"index-module--mQuoteImage--18d57"},o.createElement("svg",{width:"12.7mm",height:"12.7mm",viewBox:"0 0 12.7 12.7",version:"1.1",id:"svg5480",xmlns:"http://www.w3.org/2000/svg"},o.createElement("defs",{id:"defs5477"}),o.createElement("g",{id:"layer1",transform:"translate(-262.61319,-107.698)"},o.createElement("path",{d:"m 271.83393,116.95842 q -0.33073,0 -0.49609,-0.2712 -0.16537,-0.2712 -0.0199,-0.56224 l 0.635,-1.28323 h -1.66687 q -0.33073,0 -0.56224,-0.23151 -0.23151,-0.23151 -0.23151,-0.56224 v -2.11667 q 0,-0.33073 0.23151,-0.56224 0.23151,-0.23151 0.56224,-0.23151 h 2.11666 q 0.33073,0 0.56224,0.23151 0.23151,0.23151 0.23151,0.56224 v 2.83105 q 0,0.0926 -0.0198,0.1852 -0.0198,0.0926 -0.0595,0.17198 l -0.76729,1.52136 q -0.0661,0.14552 -0.20506,0.23151 -0.1389,0.086 -0.31088,0.086 z m -4.7625,0 q -0.33073,0 -0.49609,-0.2712 -0.16537,-0.2712 -0.0198,-0.56224 l 0.635,-1.28323 h -1.66687 q -0.33073,0 -0.56224,-0.23151 -0.23151,-0.23151 -0.23151,-0.56224 v -2.11667 q 0,-0.33073 0.23151,-0.56224 0.23151,-0.23151 0.56224,-0.23151 h 2.11666 q 0.33073,0 0.56224,0.23151 0.23151,0.23151 0.23151,0.56224 v 2.83105 q 0,0.0926 -0.0198,0.1852 -0.0198,0.0926 -0.0595,0.17198 l -0.76729,1.52136 q -0.0661,0.14552 -0.20506,0.23151 -0.1389,0.086 -0.31088,0.086 z",id:"path4683",style:{strokeWidth:.264583}})))))," ","is a platform for IoT vulnerability management and over-the-air update orchestration at scale. A platform that is both safe and secure.",o.createElement("br",null),o.createElement("br",null),"Our mission is to keep our clients' IoT devices secure and online by providing stressless over-the-air update experience.",o.createElement("cite",{className:"index-module--mQuoteAuthor--d6fac"},o.createElement(q.S,{className:"index-module--mQuoteAuthorImage--3ed2e",src:"./../images/people/Blazej.webp",alt:"Błażej Pawlak - Modino CEO profile image",__imageData:a(4684)})," ","Błażej Pawlak, CEO & Co-Founder"))))),o.createElement("section",{className:"m-section index-module--mExplanation--d0e9b"},o.createElement("div",{className:"m-section__content index-module--mExplanationContent--2749a"},o.createElement("div",{className:"index-module--mExplanationImage--15712"},o.createElement("img",{src:"img/modino-man.svg",alt:"modino man"})),o.createElement("div",{className:"index-module--mExplanationText--2cfd3"},o.createElement("p",{className:"index-module--mExplanationTitle--38d85"},"/moˈdiːno/"),o.createElement("p",{className:"index-module--mExplanationDescription--581d9"},"“Modino” is an Italian word used for misbehaving children, which roughly translates to “behave yourself”.",o.createElement("br",null),o.createElement("br",null),"We imagine our system as a guardian for various small IoT devices that keeps them in check and makes sure that they all behave as they should.")))),o.createElement("section",{className:"m-section"},o.createElement("h2",{className:"m-section__header"},"About Modino"),o.createElement("div",{className:"m-section__content"},o.createElement("div",{className:"index-module--mSolutionContainer--705ea"},o.createElement("div",{className:"index-module--mSolutionText--50b87"},o.createElement("p",null,o.createElement("span",{className:"index-module--highlight--b740a"},"Modino.io")," creates holistic deployable packages with your software and provides its safe and secure delivery to your IoT devices – in both private cloud and On-premise models."),o.createElement("p",null,"Stay in control by monitoring update deployment status and automatic vulnerability detection."),o.createElement("p",null,"Trust Modino.io to keep your devices up-to-date and protected."),o.createElement(c.N_,{className:"index-module--mSolutionSolutionLink--d7170",to:"/solution"},"Check our solution",o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z"})))),o.createElement("div",{className:"index-module--mSolutionVideo--dad76"},o.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},o.createElement("iframe",{title:"Modino.io demo video",src:"https://player.vimeo.com/video/510677701?dnt=1",allow:"autoplay; fullscreen; picture-in-picture"})))))),o.createElement("section",{className:"m-section"},o.createElement("h2",{className:"m-section__header"},"Awards & Recognitions"),o.createElement("div",{className:"m-section__content index-module--mAwardsContent--37c62"},o.createElement("div",{className:"index-module--mAwardsCybersecurityBanner--def81"},o.createElement("a",{href:"https://ecs-org.eu/return-of-ecsos-polish-edition-of-cyber-investor-days-in-katowice/",target:"_blank",rel:"noopener"},o.createElement(q.S,{layout:"fullWidth",src:"./../images/cybersecurity-award-banner.jpeg",alt:"European Cybersecurity STARTup Award for Modino.io",__imageData:a(6919)}))),o.createElement("div",{className:"index-module--mAwardsCybersecurityMade--55e50"},o.createElement("a",{href:"https://www.cybersecurity-label.eu/labelled-companies/",target:"_blank",rel:"noopener"},o.createElement(q.S,{src:"./../images/cybersecurity-made-in-europe.png",alt:"cybersecurity made in Europe badge",__imageData:a(3342)}))))),o.createElement("section",{className:"m-section index-module--mArticlesTeaser--e88c1"},o.createElement("h2",{className:"m-section__header"},"Latest insights"),o.createElement("div",{className:"m-section__content"},o.createElement(c.N_,{to:"/articles",className:"index-module--mArticlesTeaserSeeAll--4d4bf"},"See all articles",o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},o.createElement("path",{d:"M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z"}))),o.createElement(T,{articles:(d=n.allMdx.nodes,d.map((e=>({title:e.frontmatter.tile_title,date:e.frontmatter.date,slug:e.frontmatter.slug,thumbnailPhotoUrl:e.frontmatter.thumbnail,summary:e.frontmatter.summary,categories:Array.isArray(e.frontmatter.category)?e.frontmatter.category:[e.frontmatter.category]}))))}))),o.createElement("section",{className:"m-section index-module--mSummary--d7ae5"},o.createElement("div",{className:"m-section__content index-module--mSummaryContent--9ec3c"},o.createElement("div",{className:"index-module--mWrapper--c2ce7"},o.createElement("h2",{className:"m-section__header"},"Put your ",o.createElement("br",null),"IoT devices ",o.createElement("br",null),o.createElement("span",{className:"highlight"},"in good hands")),o.createElement(s.$,{unelevated:!0,className:"cta-accent-button index-module--mSummaryActionButton--24321",onClick:()=>window.location.href="./get-in-touch",id:"summary-cta-btn"},"Get in touch")),o.createElement("img",{alt:"Modino update guard illustration",src:withPrefix("/img/Illustration.svg"),className:"index-module--mSecurityImg--58b62"})))));var d};const B=()=>o.createElement(r.A,{pageTitle:"Modino.io - Safe and secure updates for IoT devices",description:"Modino.io will help you keep your IoT devices up and running with safe and secure over-the-air updates.",link:"https://modino.io/"})},3342:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/284ae/cybersecurity-made-in-europe.png","srcSet":"/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/6c070/cybersecurity-made-in-europe.png 300w,\\n/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/67db8/cybersecurity-made-in-europe.png 600w,\\n/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/284ae/cybersecurity-made-in-europe.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/98b0f/cybersecurity-made-in-europe.webp 300w,\\n/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/c0461/cybersecurity-made-in-europe.webp 600w,\\n/modino-gatsby-website/static/f532e4049a7480ef71ecf25cfc1b3aa5/d6262/cybersecurity-made-in-europe.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":281}')},6919:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#283888","images":{"fallback":{"src":"/modino-gatsby-website/static/3904d490681741977b828df5934a345a/e24b9/cybersecurity-award-banner.jpg","srcSet":"/modino-gatsby-website/static/3904d490681741977b828df5934a345a/56262/cybersecurity-award-banner.jpg 750w,\\n/modino-gatsby-website/static/3904d490681741977b828df5934a345a/8edcf/cybersecurity-award-banner.jpg 1080w,\\n/modino-gatsby-website/static/3904d490681741977b828df5934a345a/e24b9/cybersecurity-award-banner.jpg 1200w","sizes":"100vw"},"sources":[{"srcSet":"/modino-gatsby-website/static/3904d490681741977b828df5934a345a/2bcfc/cybersecurity-award-banner.webp 750w,\\n/modino-gatsby-website/static/3904d490681741977b828df5934a345a/51b2f/cybersecurity-award-banner.webp 1080w,\\n/modino-gatsby-website/static/3904d490681741977b828df5934a345a/ce914/cybersecurity-award-banner.webp 1200w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7150000000000001}')},4684:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#888868","images":{"fallback":{"src":"/modino-gatsby-website/static/e46bd9985ef0e7fa9e6cd85656685494/b61c8/Blazej.webp","srcSet":"/modino-gatsby-website/static/e46bd9985ef0e7fa9e6cd85656685494/9bbe1/Blazej.webp 545w,\\n/modino-gatsby-website/static/e46bd9985ef0e7fa9e6cd85656685494/3b0fb/Blazej.webp 1090w,\\n/modino-gatsby-website/static/e46bd9985ef0e7fa9e6cd85656685494/b61c8/Blazej.webp 2179w","sizes":"(min-width: 2179px) 2179px, 100vw"},"sources":[]},"width":2179,"height":2178}')}}]);