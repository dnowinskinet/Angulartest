import{a as f}from"./chunk-K2AJZ44O.js";import{a as h}from"./chunk-W46CCVZ7.js";import{M as p,O as c,U as b,Ub as d,Za as g,a as u,b as m,r as o}from"./chunk-RB65KZJN.js";var C=(()=>{let s=class s{constructor(){this.jsonUrl=`${f.url}/assets/json/blogs.json`,this.state=g({blogs:[]}),this.blogs=d(()=>this.state().blogs),this.http=b(h),this.getAll()}get(r){return this.http.get(this.jsonUrl).pipe(o(e=>{let t=e.data.find(I=>I.attributes.slug===r);if(!t)throw new Error("Blog Detail not found");let{id:i,attributes:{content:j,title:y,summary:w,seo:l,picture:n}}=t;return{id:i,content:j,title:y,summary:w,image:n.data.attributes.url,smallImage:n.data.attributes.formats.small.url,keywords:l&&l.keywords}}))}getAll(){this.http.get(this.jsonUrl).pipe(o(r=>r.data?.map(t=>{let{small:i}=t.attributes.picture.data.attributes.formats;return{id:t.id,title:t.attributes.title,smallImage:i.url,summary:t.attributes.summary,slug:t.attributes.slug}})),p(r=>{this.state.update(e=>m(u({},e),{blogs:r}))})).subscribe()}};s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=c({token:s,factory:s.\u0275fac,providedIn:"root"});let a=s;return a})();export{C as a};