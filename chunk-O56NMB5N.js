import"./chunk-I2R4RBIC.js";import{a as je}from"./chunk-3QFSOXHY.js";import{a as Ze}from"./chunk-FM2IVSQG.js";import{j as Me}from"./chunk-AQ7ZLUCE.js";import{a as Be}from"./chunk-AODU2LIJ.js";import{a as H}from"./chunk-5C422KRY.js";import{a as qe}from"./chunk-D7P2576Q.js";import"./chunk-K2AJZ44O.js";import"./chunk-FTEM7HHD.js";import{H as Le}from"./chunk-S36ZTVLI.js";import{h as Pe}from"./chunk-W46CCVZ7.js";import{Bb as _e,Cb as N,Hb as ie,Ib as Ce,Jb as Ae,Ka as ze,N as ke,P as me,Pa as Q,U as m,Ub as Ee,Vb as P,Z,Za as C,_ as xe,a as k,aa as O,b as R,bb as Se,fa as be,gb as A,ha as we,ia as ye,ic as De,jb as Re,nb as E,oa as ee,ob as F,pa as $e,pb as D,qa as Te,qb as ve,rb as Ie,sb as te,zb as ne}from"./chunk-RB65KZJN.js";function se(a,e){let n=!e?.manualCleanup;n&&!e?.injector&&be(se);let t=n?e?.injector?.get(ee)??m(ee):null,i;e?.requireSync?i=C({kind:0}):i=C({kind:1,value:e?.initialValue});let r=a.subscribe({next:s=>i.set({kind:1,value:s}),error:s=>{if(e?.rejectErrors)throw s;i.set({kind:2,error:s})}});return t?.onDestroy(r.unsubscribe.bind(r)),Ee(()=>{let s=i();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new ke(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var Oe=(()=>{let e=class e{constructor(){this.sanitizer=m(Pe)}transform(t,i){switch(i){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error(`Invalid safe type specified: ${i}`)}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=O({name:"safe",type:e,pure:!0});let a=e;return a})();function le(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var S=le();function Ve(a){S=a}var Xe=/[&<>"']/,lt=new RegExp(Xe.source,"g"),Ge=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,at=new RegExp(Ge.source,"g"),ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qe=a=>ct[a];function x(a,e){if(e){if(Xe.test(a))return a.replace(lt,Qe)}else if(Ge.test(a))return a.replace(at,Qe);return a}var pt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ut(a){return a.replace(pt,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}var ht=/(^|[^\[])\^/g;function d(a,e){let n=typeof a=="string"?a:a.source;e=e||"";let t={replace:(i,r)=>{let s=typeof r=="string"?r:r.source;return s=s.replace(ht,"$1"),n=n.replace(i,s),t},getRegex:()=>new RegExp(n,e)};return t}function Fe(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}var B={exec:()=>null};function Ne(a,e){let n=a.replace(/\|/g,(r,s,o)=>{let l=!1,u=s;for(;--u>=0&&o[u]==="\\";)l=!l;return l?"|":" |"}),t=n.split(/ \|/),i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function V(a,e,n){let t=a.length;if(t===0)return"";let i=0;for(;i<t;){let r=a.charAt(t-i-1);if(r===e&&!n)i++;else if(r!==e&&n)i++;else break}return a.slice(0,t-i)}function ft(a,e){if(a.indexOf(e[1])===-1)return-1;let n=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===e[0])n++;else if(a[t]===e[1]&&(n--,n<0))return t;return-1}function He(a,e,n,t){let i=e.href,r=e.title?x(e.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){t.state.inLink=!0;let o={type:"link",raw:n,href:i,title:r,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,o}return{type:"image",raw:n,href:i,title:r,text:x(s)}}function gt(a,e){let n=a.match(/^(\s+)(?:```)/);if(n===null)return e;let t=n[1];return e.split(`
`).map(i=>{let r=i.match(/^\s+/);if(r===null)return i;let[s]=r;return s.length>=t.length?i.slice(t.length):i}).join(`
`)}var I=class{options;rules;lexer;constructor(e){this.options=e||S}space(e){let n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){let n=this.rules.block.code.exec(e);if(n){let t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:V(t,`
`)}}}fences(e){let n=this.rules.block.fences.exec(e);if(n){let t=n[0],i=gt(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){let n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){let i=V(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){let n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){let n=this.rules.block.blockquote.exec(e);if(n){let t=V(n[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;let r=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:r,text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim(),i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");let s=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),o="",l="",u=!1;for(;e;){let c=!1;if(!(n=s.exec(e))||this.rules.block.hr.test(e))break;o=n[0],e=e.substring(o.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,K=>" ".repeat(3*K.length)),p=e.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,l=h.trimStart()):(g=n[2].search(/[^ ]/),g=g>4?1:g,l=h.slice(g),g+=n[1].length);let $=!1;if(!h&&/^ *$/.test(p)&&(o+=p+`
`,e=e.substring(p.length+1),c=!0),!c){let K=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),fe=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ge=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),de=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;e;){let Y=e.split(`
`,1)[0];if(p=Y,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),ge.test(p)||de.test(p)||K.test(p)||fe.test(e))break;if(p.search(/[^ ]/)>=g||!p.trim())l+=`
`+p.slice(g);else{if($||h.search(/[^ ]/)>=4||ge.test(h)||de.test(h)||fe.test(h))break;l+=`
`+p}!$&&!p.trim()&&($=!0),o+=Y+`
`,e=e.substring(Y.length+1),h=p.slice(g)}}r.loose||(u?r.loose=!0:/\n *\n *$/.test(o)&&(u=!0));let b=null,T;this.options.gfm&&(b=/^\[[ xX]\] /.exec(l),b&&(T=b[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:o,task:!!b,checked:T,loose:!1,text:l,tokens:[]}),r.raw+=o}r.items[r.items.length-1].raw=o.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){let h=r.items[c].tokens.filter(g=>g.type==="space"),p=h.length>0&&h.some(g=>/\n.*\n/.test(g.raw));r.loose=p}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(e){let n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){let n=this.rules.block.def.exec(e);if(n){let t=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:i,title:r}}}table(e){let n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;let t=Ne(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),r=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:n[0],header:[],align:[],rows:[]};if(t.length===i.length){for(let o of i)/^ *-+: *$/.test(o)?s.align.push("right"):/^ *:-+: *$/.test(o)?s.align.push("center"):/^ *:-+ *$/.test(o)?s.align.push("left"):s.align.push(null);for(let o of t)s.header.push({text:o,tokens:this.lexer.inline(o)});for(let o of r)s.rows.push(Ne(o,s.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return s}}lheading(e){let n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){let n=this.rules.block.paragraph.exec(e);if(n){let t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){let n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){let n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:x(n[1])}}tag(e){let n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){let n=this.rules.inline.link.exec(e);if(n){let t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;let s=V(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=ft(n[2],"()");if(s>-1){let l=(n[0].indexOf("!")===0?5:4)+n[1].length+s;n[2]=n[2].substring(0,s),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let i=n[2],r="";if(this.options.pedantic){let s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),He(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," "),r=n[i.toLowerCase()];if(!r){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return He(t,r,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){let s=[...i[0]].length-1,o,l,u=s,c=0,h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+s);(i=h.exec(n))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){u+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){c+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+c);let p=[...i[0]][0].length,g=e.slice(0,s+i.index+p+l);if(Math.min(s,l)%2){let b=g.slice(1,-1);return{type:"em",raw:g,text:b,tokens:this.lexer.inlineTokens(b)}}let $=g.slice(2,-2);return{type:"strong",raw:g,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){let n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," "),i=/[^ ]/.test(t),r=/^ /.test(t)&&/ $/.test(t);return i&&r&&(t=t.substring(1,t.length-1)),t=x(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){let n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){let n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){let n=this.rules.inline.autolink.exec(e);if(n){let t,i;return n[2]==="@"?(t=x(n[1]),i="mailto:"+t):(t=x(n[1]),i=t),{type:"link",raw:n[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(e){let n;if(n=this.rules.inline.url.exec(e)){let t,i;if(n[2]==="@")t=x(n[0]),i="mailto:"+t;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])?.[0]??"";while(r!==n[0]);t=x(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(e){let n=this.rules.inline.text.exec(e);if(n){let t;return this.lexer.state.inRawBlock?t=n[0]:t=x(n[0]),{type:"text",raw:n[0],text:t}}}},dt=/^(?: *(?:\n|$))+/,kt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,mt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,q=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,xt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,We=/(?:[*+-]|\d{1,9}[.)])/,Je=d(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,We).getRegex(),ae=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,bt=/^[^\n]+/,ce=/(?!\s*\])(?:\\.|[^\[\]\\])+/,wt=d(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ce).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),yt=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,We).getRegex(),W="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pe=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,$t=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",pe).replace("tag",W).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ke=d(ae).replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W).getRegex(),Tt=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ke).getRegex(),ue={blockquote:Tt,code:kt,def:wt,fences:mt,heading:xt,hr:q,html:$t,lheading:Je,list:yt,newline:dt,paragraph:Ke,table:B,text:bt},Ue=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W).getRegex(),zt=R(k({},ue),{table:Ue,paragraph:d(ae).replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ue).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W).getRegex()}),St=R(k({},ue),{html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",pe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:B,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(ae).replace("hr",q).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Je).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()}),Ye=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Rt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,et=/^( {2,}|\\)\n(?!\s*$)/,vt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,j="\\p{P}$+<=>`^|~",It=d(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,j).getRegex(),_t=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Ct=d(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,j).getRegex(),At=d("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,j).getRegex(),Et=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,j).getRegex(),Dt=d(/\\([punct])/,"gu").replace(/punct/g,j).getRegex(),Pt=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Lt=d(pe).replace("(?:-->|$)","-->").getRegex(),Bt=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Lt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),G=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Mt=d(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",G).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),tt=d(/^!?\[(label)\]\[(ref)\]/).replace("label",G).replace("ref",ce).getRegex(),nt=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",ce).getRegex(),qt=d("reflink|nolink(?!\\()","g").replace("reflink",tt).replace("nolink",nt).getRegex(),he={_backpedal:B,anyPunctuation:Dt,autolink:Pt,blockSkip:_t,br:et,code:Rt,del:B,emStrongLDelim:Ct,emStrongRDelimAst:At,emStrongRDelimUnd:Et,escape:Ye,link:Mt,nolink:nt,punctuation:It,reflink:tt,reflinkSearch:qt,tag:Bt,text:vt,url:B},jt=R(k({},he),{link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",G).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",G).getRegex()}),re=R(k({},he),{escape:d(Ye).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Zt=R(k({},re),{br:d(et).replace("{2,}","*").getRegex(),text:d(re.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),X={normal:ue,gfm:zt,pedantic:St},L={normal:he,gfm:re,breaks:Zt,pedantic:jt},w=class a{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||S,this.options.tokenizer=this.options.tokenizer||new I,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={block:X.normal,inline:L.normal};this.options.pedantic?(n.block=X.pedantic,n.inline=L.pedantic):this.options.gfm&&(n.block=X.gfm,this.options.breaks?n.inline=L.breaks:n.inline=L.gfm),this.tokenizer.rules=n}static get rules(){return{block:X,inline:L}}static lex(e,n){return new a(n).lex(e)}static lexInline(e,n){return new a(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let t=this.inlineQueue[n];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,u)=>l+"    ".repeat(u.length));let t,i,r,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0,l=e.slice(1),u;this.options.extensions.startBlock.forEach(c=>{u=c.call({lexer:this},l),typeof u=="number"&&u>=0&&(o=Math.min(o,u))}),o<1/0&&o>=0&&(r=e.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(r))){i=n[n.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),s=r.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,i,r,s=e,o,l,u;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(t=c.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,s,u)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e))){e=e.substring(t.raw.length),n.push(t);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0,h=e.slice(1),p;this.options.extensions.startInline.forEach(g=>{p=g.call({lexer:this},h),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(r=e.substring(0,c+1))}if(t=this.tokenizer.inlineText(r)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(u=t.raw.slice(-1)),l=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}},_=class{options;constructor(e){this.options=e||S}code(e,n,t){let i=(n||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+x(i)+'">'+(t?e:x(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:x(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,t){return`<h${n}>${e}</h${n}>
`}hr(){return`<hr>
`}list(e,n,t){let i=n?"ol":"ul",r=n&&t!==1?' start="'+t+'"':"";return"<"+i+r+`>
`+e+"</"+i+`>
`}listitem(e,n,t){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){let t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){let i=Fe(e);if(i===null)return t;e=i;let r='<a href="'+e+'"';return n&&(r+=' title="'+n+'"'),r+=">"+t+"</a>",r}image(e,n,t){let i=Fe(e);if(i===null)return t;e=i;let r=`<img src="${e}" alt="${t}"`;return n&&(r+=` title="${n}"`),r+=">",r}text(e){return e}},M=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}},y=class a{options;renderer;textRenderer;constructor(e){this.options=e||S,this.options.renderer=this.options.renderer||new _,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new M}static parse(e,n){return new a(n).parse(e)}static parseInline(e,n){return new a(n).parseInline(e)}parse(e,n=!0){let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){let s=r,o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){t+=o||"";continue}}switch(r.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{let s=r;t+=this.renderer.heading(this.parseInline(s.tokens),s.depth,ut(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{let s=r;t+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{let s=r,o="",l="";for(let c=0;c<s.header.length;c++)l+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});o+=this.renderer.tablerow(l);let u="";for(let c=0;c<s.rows.length;c++){let h=s.rows[c];l="";for(let p=0;p<h.length;p++)l+=this.renderer.tablecell(this.parseInline(h[p].tokens),{header:!1,align:s.align[p]});u+=this.renderer.tablerow(l)}t+=this.renderer.table(o,u);continue}case"blockquote":{let s=r,o=this.parse(s.tokens);t+=this.renderer.blockquote(o);continue}case"list":{let s=r,o=s.ordered,l=s.start,u=s.loose,c="";for(let h=0;h<s.items.length;h++){let p=s.items[h],g=p.checked,$=p.task,b="";if(p.task){let T=this.renderer.checkbox(!!g);u?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=T+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=T+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:T+" "}):b+=T+" "}b+=this.parse(p.tokens,u),c+=this.renderer.listitem(b,$,!!g)}t+=this.renderer.list(c,o,l);continue}case"html":{let s=r;t+=this.renderer.html(s.text,s.block);continue}case"paragraph":{let s=r;t+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,o=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<e.length&&e[i+1].type==="text";)s=e[++i],o+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);t+=n?this.renderer.paragraph(o):o;continue}default:{let s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}parseInline(e,n){n=n||this.renderer;let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){let s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){t+=s||"";continue}}switch(r.type){case"escape":{let s=r;t+=n.text(s.text);break}case"html":{let s=r;t+=n.html(s.text);break}case"link":{let s=r;t+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{let s=r;t+=n.image(s.href,s.title,s.text);break}case"strong":{let s=r;t+=n.strong(this.parseInline(s.tokens,n));break}case"em":{let s=r;t+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{let s=r;t+=n.codespan(s.text);break}case"br":{t+=n.br();break}case"del":{let s=r;t+=n.del(this.parseInline(s.tokens,n));break}case"text":{let s=r;t+=n.text(s.text);break}default:{let s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}},v=class{options;constructor(e){this.options=e||S}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}},oe=class{defaults=le();options=this.setOptions;parse=this.#e(w.lex,y.parse);parseInline=this.#e(w.lexInline,y.parseInline);Parser=y;Renderer=_;TextRenderer=M;Lexer=w;Tokenizer=I;Hooks=v;constructor(...e){this.use(...e)}walkTokens(e,n){let t=[];for(let i of e)switch(t=t.concat(n.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)t=t.concat(this.walkTokens(s.tokens,n));for(let s of r.rows)for(let o of s)t=t.concat(this.walkTokens(o.tokens,n));break}case"list":{let r=i;t=t.concat(this.walkTokens(r.items,n));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{t=t.concat(this.walkTokens(r[s],n))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,n)))}}return t}use(...e){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{let i=k({},t);if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=n.renderers[r.name];s?n.renderers[r.name]=function(...o){let l=r.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:n.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=n[r.level];s?s.unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(n.childTokens[r.name]=r.childTokens)}),i.extensions=n),t.renderer){let r=this.defaults.renderer||new _(this.defaults);for(let s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;let o=s,l=t.renderer[o],u=r[o];r[o]=(...c)=>{let h=l.apply(r,c);return h===!1&&(h=u.apply(r,c)),h||""}}i.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new I(this.defaults);for(let s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let o=s,l=t.tokenizer[o],u=r[o];r[o]=(...c)=>{let h=l.apply(r,c);return h===!1&&(h=u.apply(r,c)),h}}i.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new v;for(let s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;let o=s,l=t.hooks[o],u=r[o];v.passThroughHooks.has(s)?r[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(r,c)).then(p=>u.call(r,p));let h=l.call(r,c);return u.call(r,h)}:r[o]=(...c)=>{let h=l.apply(r,c);return h===!1&&(h=u.apply(r,c)),h}}i.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),r&&(l=l.concat(r.call(this,o))),l}}this.defaults=k(k({},this.defaults),i)}),this}setOptions(e){return this.defaults=k(k({},this.defaults),e),this}lexer(e,n){return w.lex(e,n??this.defaults)}parser(e,n){return y.parse(e,n??this.defaults)}#e(e,n){return(t,i)=>{let r=k({},i),s=k(k({},this.defaults),r);this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);let o=this.#t(!!s.silent,!!s.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(l=>e(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>n(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(t=s.hooks.preprocess(t));let l=e(t,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=n(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return o(l)}}}#t(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let i="<p>An error occurred:</p><pre>"+x(t.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(t);throw t}}},z=new oe;function f(a,e){return z.parse(a,e)}f.options=f.setOptions=function(a){return z.setOptions(a),f.defaults=z.defaults,Ve(f.defaults),f};f.getDefaults=le;f.defaults=S;f.use=function(...a){return z.use(...a),f.defaults=z.defaults,Ve(f.defaults),f};f.walkTokens=function(a,e){return z.walkTokens(a,e)};f.parseInline=z.parseInline;f.Parser=y;f.parser=y.parse;f.Renderer=_;f.TextRenderer=M;f.Lexer=w;f.lexer=w.lex;f.Tokenizer=I;f.Hooks=v;f.parse=f;var Kt=f.options,Yt=f.setOptions,en=f.use,tn=f.walkTokens,nn=f.parseInline;var sn=y.parse,rn=w.lex;var it=(()=>{let e=class e{transform(t,i){return t&&t.length>0?f(t):t}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=O({name:"markdown",type:e,pure:!0});let a=e;return a})();var J=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=xe({type:e}),e.\u0275inj=me({});let a=e;return a})();var st=(()=>{let e=class e{constructor(){this.data=$e(),this.el=m(Te),this.platformCheck=m(H),P(()=>{this.platformCheck.onBrowser&&je(this.el.nativeElement.querySelectorAll("img"),{margin:40,scrollOffset:40})})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=Z({type:e,selectors:[["prose"]],inputs:{data:[1,"data"]},standalone:!0,features:[N],decls:3,vars:6,consts:[[1,"prose","lg:prose-xl","max-w-full","dark:prose-invert","dark:prose-pre:bg-gray-700",3,"innerHTML"]],template:function(i,r){i&1&&(D(0,"article",0),ie(1,"markdown"),ie(2,"safe")),i&2&&A("innerHTML",Ae(2,3,Ce(1,1,r.data()),"html"),ze)},dependencies:[J,Oe,it],encapsulation:2});let a=e;return a})();function Qt(a,e){if(a&1){let n=ve();E(0,"div",0)(1,"header",1)(2,"a",2),Ie("click",function(){we(n);let i=te();return ye(i.location.back())}),E(3,"div",3),D(4,"icon",4),ne(5," Back to blog list "),F()(),E(6,"div")(7,"h1",5),ne(8),F()()(),E(9,"div",6),D(10,"prose",7),F()()}if(a&2){let n=e,t=te();Q(4),A("path",t.backIcon)("size",15),Q(4),_e(" ",n.title," "),Q(2),A("data",n.content)}}var rt=(()=>{let e=class e{constructor(){this.backIcon=Me,this.data=C(null),this.location=m(De),this.blogService=m(Ze),this.platformCheck=m(H),this.metaService=m(qe),this.paramMap=se(m(Le).paramMap),P(t=>{this.sub=this.blogService.get(this.paramMap()?.get("slug")).subscribe(i=>{this.data.set(i),this.metaService.setMetaTags(i.title,i.summary,i.keywords,i.smallImage)}),t(()=>{this.sub.unsubscribe()})})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=Z({type:e,selectors:[["blog-detail-page"]],standalone:!0,features:[N],decls:1,vars:1,consts:[[1,"mx-auto","dark:text-white","text-gray-800"],[1,"flex","flex-col","gap-7"],[1,"text-primary-800","hover:text-black","dark:text-primary-200","dark:hover:text-white","font-medium",3,"click"],[1,"flex","items-center","gap-1"],[3,"path","size"],[1,"font-semibold","text-3xl","md:text-4xl","md:!leading-[120%]","lg:text-5xl","max-w-4xl"],[1,"flex","flex-col","gap-3","text-lg","py-6"],[3,"data"]],template:function(i,r){if(i&1&&Se(0,Qt,11,4,"div",0),i&2){let s;Re((s=r.data())?0:-1,s)}},dependencies:[Be,J,st],encapsulation:2,changeDetection:0});let a=e;return a})();var Zn=[{path:"",component:rt}];export{Zn as BlogDetailRoutes};
