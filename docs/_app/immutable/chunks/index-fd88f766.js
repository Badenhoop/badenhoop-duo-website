function E(){}const at=t=>t;function J(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function q(){return Object.create(null)}function y(t){t.forEach(z)}function K(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function dt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function Q(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(R(n,e))}function mt(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function yt(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function xt(t){return t==null?"":t}const L=typeof window<"u";let wt=L?()=>window.performance.now():()=>Date.now(),O=L?t=>requestAnimationFrame(t):E;const d=new Set;function D(t){d.forEach(n=>{n.c(t)||(d.delete(n),n.f())}),d.size!==0&&O(D)}function $t(t){let n;return d.size===0&&O(D),{promise:new Promise(e=>{d.add(n={c:t,f:e})}),abort(){d.delete(n)}}}let k=!1;function U(){k=!0}function V(){k=!1}function X(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:X(1,c,g=>n[e[g]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[r],a)}}function Z(t,n){if(k){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Et(t,n,e){k&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function tt(t){t.parentNode.removeChild(t)}function kt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function nt(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function vt(){return j(" ")}function Nt(){return j("")}function St(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function jt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,c=!1){rt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,n,e,i){return F(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function At(t,n,e){return H(t,n,e,nt)}function Ct(t,n,e){return H(t,n,e,et)}function ct(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Mt(t){return ct(t," ")}function qt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Pt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let p;function m(t){p=t}function A(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){A().$$.on_mount.push(t)}function zt(t){A().$$.after_update.push(t)}function Bt(t,n){return A().$$.context.set(t,n),n}function Lt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],P=[],w=[],T=[],I=Promise.resolve();let N=!1;function W(){N||(N=!0,I.then(G))}function Ot(){return W(),I}function S(t){w.push(t)}const v=new Set;let x=0;function G(){const t=p;do{for(;x<h.length;){const n=h[x];x++,m(n),ot(n.$$)}for(m(null),h.length=0,x=0;P.length;)P.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];v.has(e)||(v.add(e),e())}w.length=0}while(h.length);for(;T.length;)T.pop()();N=!1,v.clear(),m(t)}function ot(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Ft(){_.r||y(_.c),_=_.p}function lt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function It(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Wt(t){return typeof t=="object"&&t!==null?t:{}}function Gt(t){t&&t.c()}function Jt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||S(()=>{const r=s.map(z).filter(K);o?o.push(...r):y(r),t.$$.on_mount=[]}),l.forEach(S)}function st(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Kt(t,n,e,i,c,s,o,l=[-1]){const r=p;m(t);const u=t.$$={fragment:null,ctx:null,props:s,update:E,not_equal:c,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:q(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...C)=>{const M=C.length?C[0]:g;return u.ctx&&c(u.ctx[f],u.ctx[f]=M)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](M),a&&ft(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){U();const f=it(n.target);u.fragment&&u.fragment.l(f),f.forEach(tt)}else u.fragment&&u.fragment.c();n.intro&&lt(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),G()}m(r)}class Qt{$destroy(){st(this,1),this.$destroy=E}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Wt as A,st as B,J as C,Ot as D,E,mt as F,yt as G,gt as H,pt as I,Z as J,et as K,Ct as L,St as M,bt as N,Lt as O,wt as P,$t as Q,at as R,Qt as S,kt as T,ht as U,dt as V,y as W,P as X,xt as Y,vt as a,Et as b,Mt as c,Ft as d,Nt as e,lt as f,Dt as g,tt as h,Kt as i,Bt as j,zt as k,nt as l,At as m,it as n,Tt as o,jt as p,Pt as q,j as r,_t as s,Ht as t,ct as u,qt as v,Gt as w,Jt as x,ut as y,It as z};
