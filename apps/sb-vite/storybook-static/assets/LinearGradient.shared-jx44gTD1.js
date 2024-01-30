import{o as Me,m as et,K as tt,T as je,I as nt,a as rt,w as ot,L as st,S as lt,M as at,F as Ie,N as ct,u as it}from"./index-_wg5PwQV.js";import{l as ut,p as dt,j as a,i as ft,n as pt,m as L,q as mt,e as Q,s as O,Y as re,o as _e,r as St,X as ke,g as ht,u as gt}from"./Stacks-cf55noxu.js";import{u as Le,a as xt,b as bt,c as vt}from"./index-TmN4oE2O.js";import{r as s}from"./index-4g5l5LRQ.js";import{F as It,a as yt,u as Oe,s as Ct,i as wt,o as Ve,b as Rt,c as Tt,d as Et,e as Pt,f as Nt,g as At,h as Mt,j as jt,k as _t,l as kt,m as Lt}from"./Popover-jfxuliJS.js";import{r as ie}from"./extends-nGe_wfaW.js";import{b as ye,u as Ot,L as Fe}from"./ListItem-IOiP-Ieg.js";import{S as me,P as Vt}from"./Headings-zc2v6h-R.js";import{S as Ft}from"./Separator-xEpcC6ux.js";import{p as ze,V as zt,P as Dt}from"./EventEmitter-3h9cKSNS.js";const De=()=>ut()?dt:!1;function Wt(e,n,r){let t,o=!1;function c(){o=!1;const l=arguments;r&&!t&&e.apply(this,l),clearTimeout(t),t=setTimeout(()=>{t=null,r||o||e.apply(this,l),o=!1},n)}return c.cancel=()=>{o=!0},c}const Gt={leading:!1};function $t(e,n,r=Gt,t=[e]){const o=s.useRef(null);return s.useEffect(()=>()=>{var c;(c=o.current)==null||c.cancel()},[]),s.useMemo(()=>(o.current=Wt(e,n,r.leading),o.current),[r.leading,...t])}const Z="Select",Ce=8,we=8,ue="SelectViewport",[oe,jn]=Me(Z),[Se,G]=oe(Z);Me(Z);const[he,V]=oe(Z),Ut=({__scopeSelect:e,context:n,itemContext:r,children:t})=>a.jsx(Se,{isInSheet:!0,scope:e,...n,children:a.jsx(he,{scope:e,...r,children:t})}),se=e=>{const n=ft();return e?e===!0?!0:e?n[e]:!1:!1},We=e=>{const n=se(e.sheetBreakpoint);return e.open===!1?!1:n},Re="SelectContent",Bt=({children:e,__scopeSelect:n,zIndex:r=1e3,...t})=>{const o=G(Re,n),c=V(Re,n),l=et(),i=We(o),f=a.jsx(pt,{forceClassName:!0,name:l,children:e}),u=De(),d=s.useMemo(()=>({zIndex:r,pointerEvents:o.open?"auto":"none"}),[o.open]);return c.shouldRenderWebNative?a.jsx(a.Fragment,{children:e}):i?o.open?a.jsx(a.Fragment,{children:f}):null:a.jsx(It,{children:a.jsx(yt,{style:d,lockScroll:!o.disablePreventBodyScroll&&!!o.open&&!u,children:a.jsx(tt,{loop:!0,enabled:!!o.open,trapped:!0,...t,children:f})})})},Ht=e=>{const{__scopeSelect:n,children:r,open:t=!1,selectedIndexRef:o,listContentRef:c}=e,l=G("SelectSheetImpl",n),i=V("SelectSheetImpl",n),{setActiveIndex:f,selectedIndex:u,activeIndex:d,forceUpdate:h}=l,{setOpen:p,setSelectedIndex:E}=i,[A,v]=s.useState(0),P=De(),b=s.useRef([]),j=s.useRef(null),F=s.useRef(null),_=s.useRef(null),k=s.useRef(!1),z=s.useRef(!0),T=s.useRef(),g=s.useRef({isMouseOutside:!1}),[x,m]=s.useState(!1),[y,D]=s.useState(!1),[N,C]=s.useState(0),[B,w]=s.useState(!1),$=s.useRef({});L(()=>{queueMicrotask(()=>{t||(v(0),D(!1),f(null),m(!1))})},[t,f]),mt&&L(()=>{if(!t)return;const S=W=>{g.current.isMouseOutside&&p(!1)};return document.addEventListener("mouseup",S),()=>{document.removeEventListener("mouseup",S)}},[t]);const ee=[P?jt({crossAxis:!0,padding:Ce}):_t({padding:Ce})],{x:q,y:X,strategy:le,context:M,refs:I,update:U}=Oe({open:t,onOpenChange:p,placement:"bottom-start",middleware:[Ct({apply({rects:{reference:{width:S}}}){$.current={minWidth:S+8}}}),...ee,wt({listRef:b,overflowRef:j,index:u,offset:N,padding:10,minItemsVisible:P?10:4,referenceOverflowThreshold:20}),Ve({crossAxis:-5})]});L(()=>(window.addEventListener("resize",U),t&&U(),()=>window.removeEventListener("resize",U)),[U,t]);const Y=I.floating,R=t&&A>we,H=t&&Y.current&&A<Y.current.scrollHeight-Y.current.clientHeight-we,Qe=Le(S=>(t?f:E)(S)),ge=[Rt(M,{event:"mousedown",keyboardHandlers:!1}),Tt(M,{outsidePress:!1}),Et(M,{role:"listbox"}),Pt(M,{enabled:!y&&(!!R||!!H),onChange:C,overflowRef:j,scrollRef:I.floating}),Nt(M,{listRef:b,activeIndex:d||0,selectedIndex:u,onNavigate:f}),At(M,{listRef:c,onMatch:Qe,selectedIndex:u,activeIndex:d})],te=Mt(s.useMemo(()=>ge,ge)),Ze=s.useMemo(()=>({...te,getReferenceProps(){return te.getReferenceProps({ref:I.reference,className:"SelectTrigger",onKeyDown(S){(S.key==="Enter"||S.code==="Space"||S.key===" "&&!M.dataRef.current.typing)&&(S.preventDefault(),p(!0))}})},getFloatingProps(S){return te.getFloatingProps({ref:I.floating,className:"Select",...S,style:{position:le,top:X??"",left:q??"",outline:0,scrollbarWidth:"none",...$.current,...S==null?void 0:S.style},onPointerEnter(){m(!1),g.current.isMouseOutside=!1},onPointerLeave(){g.current.isMouseOutside=!0},onPointerMove(){g.current.isMouseOutside=!1,m(!1)},onKeyDown(){m(!0)},onContextMenu(W){W.preventDefault()},onScroll(W){ie.flushSync(()=>v(W.currentTarget.scrollTop))}})}}),[I.reference.current,q,X,I.floating.current,te]);return L(()=>{if(t)return T.current=setTimeout(()=>{k.current=!0},300),()=>{clearTimeout(T.current)};k.current=!1,z.current=!0,C(0),D(!1),w(!1)},[t]),L(()=>{!t&&g.current.isMouseOutside&&(g.current.isMouseOutside=!1)},[t]),L(()=>{function S(W){var xe,be,ve;const ae=W.target;(xe=I.floating.current)!=null&&xe.contains(ae)||(be=F.current)!=null&&be.contains(ae)||(ve=_.current)!=null&&ve.contains(ae)||(p(!1),m(!1))}if(t)return document.addEventListener("pointerdown",S),()=>{document.removeEventListener("pointerdown",S)}},[t,I,p]),s.useEffect(()=>{var S,W;t&&x&&d!=null&&((S=b.current[d])==null||S.scrollIntoView({block:"nearest"})),v(((W=I.floating.current)==null?void 0:W.scrollTop)??0)},[t,I,x,d]),s.useEffect(()=>{var S;t&&y&&u!=null&&((S=b.current[u])==null||S.scrollIntoView({block:"nearest"}))},[t,y,u]),L(()=>{I.floating.current&&y&&(I.floating.current.style.maxHeight="")},[I,y]),a.jsx(Se,{scope:n,...l,setScrollTop:v,setInnerOffset:C,fallback:y,floatingContext:M,activeIndex:d,canScrollDown:!!H,canScrollUp:!!R,controlledScrolling:x,blockSelection:B,upArrowRef:F,downArrowRef:_,update:U,children:a.jsx(he,{scope:n,...i,allowMouseUpRef:z,allowSelectRef:k,dataRef:M.dataRef,interactions:Ze,listRef:b,selectTimeoutRef:T,children:r})})},de="SelectItem",[Kt,Ge]=oe(de),qt=ye.styleable(function(e,n){const{__scopeSelect:r,value:t,disabled:o=!1,textValue:c,index:l,...i}=e,{props:f}=Ot({...!e.unstyled&&{ellipse:!0},...i}),u=V(de,r),{setSelectedIndex:d,listRef:h,setOpen:p,onChange:E,activeIndexSubscribe:A,valueSubscribe:v,allowMouseUpRef:P,allowSelectRef:b,setValueAtIndex:j,selectTimeoutRef:F,dataRef:_,interactions:k,shouldRenderWebNative:z,size:T,onActiveChange:g,initialValue:x}=u,[m,y]=s.useState(x===t);s.useEffect(()=>A(w=>{var $;l===w&&(g(t,l),($=h==null?void 0:h.current[l])==null||$.focus())}),[l]),s.useEffect(()=>v(w=>{y(w===t)}),[t]);const D=s.useId(),N=Q(n,w=>{w instanceof HTMLElement&&h&&(h.current[l]=w)});L(()=>{j(l,t)},[l,j,t]);function C(){d(l),E(t),p(!1)}const B=s.useMemo(()=>k?k.getItemProps({onTouchMove(){b.current=!0,P.current=!1},onTouchEnd(){b.current=!1,P.current=!0},onKeyDown(w){w.key==="Enter"||w.key===" "&&!(_!=null&&_.current.typing)?(w.preventDefault(),C()):b.current=!0},onClick(){b.current&&C()},onMouseUp(){P.current&&(b.current&&C(),clearTimeout(F.current),F.current=setTimeout(()=>{b.current=!0}))}}):{onPress:C},[C]);return a.jsx(Kt,{scope:r,value:t,textId:D||"",isSelected:m,children:z?a.jsx("option",{value:t,children:e.children}):a.jsx(ye,{tag:"div",componentName:de,ref:N,"aria-labelledby":D,"aria-selected":m,"data-state":m?"active":"inactive","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...!e.unstyled&&{backgrounded:!0,pressTheme:!0,hoverTheme:!0,cursor:"default",size:T,outlineOffset:-1,focusStyle:{outlineColor:"$outlineColor",outlineWidth:2,outlineStyle:"solid",outlineOffset:-2}},...f,...B})})},{disableTheme:!0});var Xt={};const K="SelectItemText",Te=O(me,{name:K,variants:{unstyled:{false:{userSelect:"none",color:"$color",ellipse:!0}}},defaultVariants:{unstyled:Xt.TAMAGUI_HEADLESS==="1"}}),Yt=Te.styleable(function(e,n){const{__scopeSelect:r,className:t,...o}=e,c=G(K,r),l=V(K,r),i=s.useRef(null),f=Q(n,i),u=Ge(K,r),d=s.useRef();return d.current=a.jsx(Te,{className:t,size:l.size,id:u.textId,...o,ref:f}),s.useEffect(()=>{l.initialValue===u.value&&!c.selectedIndex&&c.setSelectedItem(d.current)},[]),s.useEffect(()=>l.valueSubscribe(h=>{h===u.value&&c.setSelectedItem(d.current)}),[u.value]),l.shouldRenderWebNative?a.jsx(a.Fragment,{children:e.children}):a.jsx(a.Fragment,{children:d.current})}),$e="SelectScrollUpButton",Ue=s.forwardRef((e,n)=>a.jsx(Ke,{componentName:$e,...e,dir:"up",ref:n}));Ue.displayName=$e;const Be="SelectScrollDownButton",He=s.forwardRef((e,n)=>a.jsx(Ke,{componentName:Be,...e,dir:"down",ref:n}));He.displayName=Be;const Ke=s.memo(s.forwardRef((e,n)=>{var z,T;const{__scopeSelect:r,dir:t,componentName:o,...c}=e,{forceUpdate:l,open:i,fallback:f,setScrollTop:u,setInnerOffset:d,...h}=G(o,r),p=(z=h.floatingContext)==null?void 0:z.refs.floating,E=s.useRef("idle"),A=h[t==="down"?"canScrollDown":"canScrollUp"],v=s.useRef(),{x:P,y:b,refs:j,strategy:F}=Oe({open:i&&A,strategy:"fixed",elements:{reference:p==null?void 0:p.current},placement:t==="up"?"top":"bottom",middleware:[Ve(({rects:g})=>-g.floating.height)],whileElementsMounted:(...g)=>kt(...g,{animationFrame:!0})}),_=Q(n,j.setFloating);if(!A)return null;const k=g=>{const x=p;x&&(f?x.current&&(x.current.scrollTop-=g,ie.flushSync(()=>{var m;return u(((m=x.current)==null?void 0:m.scrollTop)??0)})):ie.flushSync(()=>d(m=>m-g)))};return a.jsx(re,{ref:_,componentName:o,"aria-hidden":!0,...c,zIndex:1e3,position:F,left:P||0,top:b||0,width:`calc(${(((T=p==null?void 0:p.current)==null?void 0:T.offsetWidth)??0)-2}px)`,onPointerEnter:()=>{E.current="active";let g=Date.now();function x(){const m=p==null?void 0:p.current;if(m){const y=Date.now(),D=y-g;g=y;const N=D/2,C=t==="up"?m.scrollTop:m.scrollHeight-m.clientHeight-m.scrollTop,B=t==="up"?m.scrollTop-N>0:m.scrollTop+N<m.scrollHeight-m.clientHeight;k(t==="up"?Math.min(N,C):Math.max(-N,-C)),B&&(v.current=requestAnimationFrame(x))}}cancelAnimationFrame(v.current),v.current=requestAnimationFrame(x)},onPointerLeave:()=>{E.current="idle",cancelAnimationFrame(v.current)}})})),ce="SelectTrigger",Jt=s.forwardRef(function(e,n){var u;const{__scopeSelect:r,disabled:t=!1,unstyled:o=!1,...c}=e,l=G(ce,r),i=V(ce,r),f=Q(n,(u=l.floatingContext)==null?void 0:u.refs.setReference);return i.shouldRenderWebNative?null:a.jsx(Fe,{componentName:ce,unstyled:o,...!o&&{backgrounded:!0,radiused:!0,hoverTheme:!0,pressTheme:!0,focusable:!0,focusStyle:{outlineStyle:"solid",outlineWidth:2,outlineColor:"$outlineColor"},borderWidth:1},size:i.size,"aria-expanded":l.open,"aria-autocomplete":"none",dir:l.dir,disabled:t,"data-disabled":t?"":void 0,...c,ref:f,...i.interactions?{...i.interactions.getReferenceProps(),onMouseDown(){var d;(d=l.floatingContext)==null||d.update(),i.setOpen(!l.open)}}:{onPress(){i.setOpen(!l.open)}}})});var Qt={};const Ee=O(je,{name:ue,variants:{unstyled:{false:{size:"$2",backgroundColor:"$background",elevate:!0,bordered:!0,userSelect:"none",outlineWidth:0}},size:{"...size":(e,{tokens:n})=>({borderRadius:n.radius[e]??e})}},defaultVariants:{unstyled:Qt.TAMAGUI_HEADLESS==="1"}}),Zt=Ee.styleable(function(e,n){var b;const{__scopeSelect:r,children:t,disableScroll:o,...c}=e,l=G(ue,r),i=V(ue,r),f=se(l.sheetBreakpoint);if(L(()=>{l.update&&l.update()},[f]),i.shouldRenderWebNative)return a.jsx(a.Fragment,{children:t});if(f||!_e)return a.jsx(xt,{hostName:`${l.scopeKey}SheetContents`,children:a.jsx(Ut,{__scopeSelect:r,itemContext:i,context:l,children:t})});if(!i.interactions)return null;const{style:u,className:d,...h}=i.interactions.getFloatingProps(),p=St(n,(b=l.floatingContext)==null?void 0:b.refs.setFloating),{scrollbarWidth:E,listStyleType:A,overflow:v,...P}=u;return a.jsxs(a.Fragment,{children:[!o&&!e.unstyled&&a.jsx("style",{dangerouslySetInnerHTML:{__html:en}}),a.jsx(nt,{children:l.open?a.jsx(Lt,{context:l.floatingContext,modal:!1,children:a.jsx(Ee,{disableClassName:!0,size:i.size,role:"presentation",...c,...h,...P,...!e.unstyled&&{overflow:o?void 0:v??"scroll"},ref:p,children:t},"select-viewport")}):null}),!l.open&&a.jsx("div",{style:{display:"none"},children:e.children})]})}),en=`
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`,fe="SelectValue",Pe=O(me,{name:fe,userSelect:"none"}),tn=Pe.styleable(function({__scopeSelect:e,children:n,placeholder:r,...t},o){const c=G(fe,e),l=V(fe,e),i=Q(o,c.onValueNodeChange),f=n??c.selectedItem,u=c.value==null||c.value===""?r??f:f;return a.jsx(Pe,{...!t.unstyled&&{size:l.size,ellipse:!0,pointerEvents:"none"},ref:i,...t,children:qe(u)})});function qe(e){return s.Children.map(e,n=>{var r,t,o;if(n){if(((t=(r=n.type)==null?void 0:r.staticConfig)==null?void 0:t.componentName)===K)return n.props.children;if((o=n.props)!=null&&o.children)return qe(n.props.children)}return n})}const nn=O(ke,{name:"SelectIcon","aria-hidden":!0,children:a.jsx(Vt,{children:"▼"})}),pe="SelectItemIndicator",rn=O(ke,{name:K}),Xe=s.forwardRef((e,n)=>{const{__scopeSelect:r,...t}=e,o=V(pe,r),c=Ge(pe,r);return o.shouldRenderWebNative?null:c.isSelected?a.jsx(rn,{"aria-hidden":!0,...t,ref:n}):null});Xe.displayName=pe;const J="SelectGroup",[on,sn]=oe(J),ln=O(re,{name:J,width:"100%"}),an=O(me,{tag:"select",backgroundColor:"$background",borderColor:"$borderColor",hoverStyle:{backgroundColor:"$backgroundHover"}}),cn=O(je,{name:"NativeSelect",bordered:!0,userSelect:"none",outlineWidth:0,paddingRight:10,variants:{size:{"...size":(e,n)=>{const{tokens:r}=n,t=ht(r.space[e]);return{borderRadius:r.radius[e]??e,minHeight:r.size[e],paddingRight:t+20,paddingLeft:t,paddingVertical:rt(e,{shift:-3})}}}},defaultVariants:{size:"$2"}}),Ye=s.forwardRef((e,n)=>{const{__scopeSelect:r,...t}=e,o=s.useId(),c=G(J,r),l=V(J,r),i=l.size??"$true",f=s.useRef(null),u=l.shouldRenderWebNative?a.jsx(cn,{asChild:!0,size:i,value:c.value,children:a.jsx(an,{onChange:d=>{l.onChange(d.currentTarget.value)},size:i,ref:f,style:{color:"var(--color)",appearance:"none"},children:e.children})}):a.jsx(ln,{role:"group","aria-labelledby":o,...t,ref:n});return a.jsx(on,{scope:r,id:o||"",children:u})});Ye.displayName=J;const ne="SelectLabel",Je=s.forwardRef((e,n)=>{const{__scopeSelect:r,...t}=e,o=V(ne,r),c=sn(ne,r);return o.shouldRenderWebNative?null:a.jsx(Fe,{tag:"div",componentName:ne,fontWeight:"800",id:c.id,size:o.size,...t,ref:n})});Je.displayName=ne;O(Ft,{name:"SelectSeparator"});const un=e=>{const n=G("SelectSheetController",e.__scopeSelect),r=We(n),t=se(n.sheetBreakpoint),o=vt(r);return a.jsx(ct,{onOpenChange:c=>{o()&&e.onOpenChange(c)},open:n.open,hidden:t===!1,children:e.children})},dn=e=>a.jsx(a.Fragment,{children:e.children}),fn=ot(e=>{const{__scopeSelect:n,native:r,children:t,open:o,defaultOpen:c,onOpenChange:l,value:i,defaultValue:f,onValueChange:u,disablePreventBodyScroll:d,size:h="$true",onActiveChange:p,dir:E}=e,A=s.useId(),v=n?Object.keys(n)[0]??A:A,{when:P,AdaptProvider:b}=at({Contents:s.useCallback(()=>a.jsx(bt,{name:`${v}SheetContents`}),[v])}),j=P,F=se(j)||!_e?dn:Ht,_=s.useReducer(()=>({}),{})[1],[k,z]=s.useState(null),[T,g]=Ie({prop:o,defaultProp:c||!1,onChange:l}),[x,m]=Ie({prop:i,defaultProp:f||"",onChange:u,transition:!0});s.useEffect(()=>{T&&N(x)},[T]),s.useEffect(()=>{N(x)},[x]);const[y,D]=s.useState(0),[N,C]=Ne(),[B,w]=Ne(),$=s.useRef(null),ee=s.useRef(null),q=s.useRef([]),[X,le]=s.useState(0),[M,I]=s.useState(null);L(()=>{$.current=X,ee.current=y});const U=r===!0||r==="web"||Array.isArray(r)&&r.includes("web"),Y=$t(R=>{D(H=>H!==R?(typeof R=="number"&&B(R),R):H)},1,{},[]);return a.jsx(b,{children:a.jsx(he,{scope:n,initialValue:s.useMemo(()=>x,[]),size:h,activeIndexSubscribe:w,valueSubscribe:C,setOpen:g,onChange:s.useCallback(R=>{m(R),N(R)},[]),onActiveChange:Le((...R)=>{p==null||p(...R)}),setSelectedIndex:le,setValueAtIndex:s.useCallback((R,H)=>{q.current[R]=H},[]),shouldRenderWebNative:U,children:a.jsx(Se,{scope:n,disablePreventBodyScroll:d,dir:E,blockSelection:!1,fallback:!1,selectedItem:k,setSelectedItem:z,forceUpdate:_,valueNode:M,onValueNodeChange:I,scopeKey:v,sheetBreakpoint:j,activeIndex:y,selectedIndex:X,setActiveIndex:Y,value:x,open:T,native:r,children:a.jsx(un,{onOpenChange:g,__scopeSelect:n,children:U?t:a.jsx(F,{activeIndexRef:ee,listContentRef:q,selectedIndexRef:$,...e,open:T,value:x,children:t})})})})})},{Adapt:st,Content:Bt,Group:Ye,Icon:nn,Item:qt,ItemIndicator:Xe,ItemText:Yt,Label:Je,ScrollDownButton:He,ScrollUpButton:Ue,Trigger:Jt,Value:tn,Viewport:Zt,Sheet:lt.Controlled});function Ne(){const e=s.useRef();e.current||(e.current=new Set);const n=t=>{e.current.forEach(o=>o(t))},r=s.useCallback(t=>(e.current.add(t),()=>{e.current.delete(t)}),[]);return[n,r]}fn.displayName=Z;const pn=e=>e==="currentcolor"||e==="currentColor"||e==="inherit"||e.indexOf("var(")===0;function mn(e,n=1){if(e==null)return;if(typeof e=="string"&&pn(e))return e;const r=ze(e);if(r!=null){const t=r>>16&255,o=r>>8&255,c=r&255,i=((r>>24&255)/255*n).toFixed(2);return`rgba(${t},${o},${c},${i})`}}function Sn({colors:e,locations:n,startPoint:r,endPoint:t,...o}){const[{height:c,width:l},i]=s.useState({height:1,width:1}),f=s.useMemo(()=>hn(e,n,r,t,l,c),[e,n,r,t,l,c]);return s.createElement(zt,{...o,style:[o.style,{backgroundImage:f}],onLayout:u=>{const{width:d,height:h}=u.nativeEvent.layout;i(p=>d!==p.width||h!==p.height?{height:h,width:d}:p),o.onLayout&&o.onLayout(u)}})}function hn(e,n,r,t,o=1,c=1){const l=xn(e,n);return`linear-gradient(${gn(o,c,r,t)}deg, ${l.join(", ")})`}function gn(e,n,r,t){const o=()=>{let u=[0,0];Array.isArray(r)&&(u=[r[0]!=null?r[0]:0,r[1]!=null?r[1]:0]);let d=[0,1];return Array.isArray(t)&&(d=[t[0]!=null?t[0]:0,t[1]!=null?t[1]:1]),[u,d]},[c,l]=o();c[0]*=e,l[0]*=e,c[1]*=n,l[1]*=n;const i=l[1]-c[1],f=l[0]-c[0];return 90+Math.atan2(i,f)*180/Math.PI}function xn(e,n){return e.map((r,t)=>{const o=mn(r);if(n&&n[t]){const l=Math.max(0,Math.min(1,n[t]))*100;return`${o} ${l}%`}return o})}let bn=class extends s.Component{render(){const{colors:n,locations:r,start:t,end:o,...c}=this.props;let l=r;return r&&n.length!==r.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),l=r.slice(0,n.length)),s.createElement(Sn,{...c,colors:Dt.select({web:n,default:n.map(ze)}),locations:l,startPoint:Ae(t),endPoint:Ae(o)})}};function Ae(e){if(e){if(Array.isArray(e)&&e.length!==2){console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}");return}return Array.isArray(e)?e:[e.x,e.y]}}const kn=re.styleable((e,n)=>{var h;const r=it(e),{start:t,end:o,colors:c,locations:l,children:i,...f}=r,u=gt();let d=((h=r.colors)==null?void 0:h.map(p=>{var E;return((E=u[p])==null?void 0:E.get("web"))??p}))||[];return a.jsxs(In,{ref:n,...f,children:[a.jsx(bn,{start:t,end:o,colors:d,locations:l,style:vn}),i]})}),vn={position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},In=O(re,{name:"LinearGradient",overflow:"hidden",position:"relative"});export{kn as L,fn as S};
