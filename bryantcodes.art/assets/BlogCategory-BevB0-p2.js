import{d as v,u as b,a as h,a4 as y,z as L,g as k,K as w,r as x,O as C,a5 as B,s as $,o as r,c as m,l as _,v as R,e as a,k as T,x as V,t as i,f as o,a6 as p,F as D,i as E,j as I,y as N,a7 as P}from"./app-DtxLX7Lp.js";import{b as j,_ as F}from"./Blog.vue_vue_type_style_index_0_lang-B7YX7WV_.js";const O=a("div",{class:"act_oval"},null,-1),S={class:"page-wrap"},z={class:"act_center act_w1170 act_pb-4"},A={class:"breadcrumbs act_txt14 act_flex act_gap-1 justify-content-center act_mb-1"},K=a("div",{class:"breadcrumbs-line"},null,-1),q={class:"decoration-none",to:"/blog"},G={class:"playfair act_txt60 act_no-marg act_pb-1"},H={class:"act_w1170"},J={class:"blogs-list grid-wrap act_gap-2"},W=v({__name:"BlogCategory",setup(M){const{$tdb:n}=b(h()),{locale:f}=y(),d=L(),l=k(()=>j.find(e=>w(n(e,"name"))===d.params.category));let u=x([]);async function g(){const{blog:e}=await P(async()=>{const{blog:t}=await import("./blog-Bcj5WjiD.js");return{blog:t}},[]);u.value=e.filter(t=>{var c,s;return t.language.value===f.value&&((c=t.category[0])==null?void 0:c.itemRefID)===((s=l.value)==null?void 0:s._id)})}return C(d,g,{immediate:!0}),B(g),(e,t)=>{const c=$("LocalLink");return r(),m("div",null,[O,_(R),a("div",S,[a("div",z,[a("div",A,[_(c,{class:"decoration-none hover",to:"/blog"},{default:T(()=>[V(i(e.$t("general.blog")),1)]),_:1}),K,a("p",q,i(o(p)(o(n)(l.value,"name"))),1)]),a("h1",G,i(o(p)(o(n)(l.value,"name"))),1)]),a("div",H,[a("div",J,[(r(!0),m(D,null,E(o(u),s=>(r(),I(F,{key:s._id,blog:s},null,8,["blog"]))),128))])])]),_(N)])}}});export{W as default};
