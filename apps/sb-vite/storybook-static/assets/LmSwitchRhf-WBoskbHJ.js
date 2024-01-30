import{c as de,s as ae,g as he,Y as oe,j as o,d as Z,e as fe,X as be}from"./Stacks-cf55noxu.js";import{C as me}from"./index.esm-qGf7LkUX.js";import{r as a}from"./index-4g5l5LRQ.js";import{u as ve,L as J}from"./usePopoverState-znF3ooTh.js";import{T as Ce,b as ye,u as pe,F as Se,E as K,w as ge}from"./index-_wg5PwQV.js";import{u as xe}from"./index-RduBmlIh.js";import{a as ke,s as B,c as we,V as G,_ as W,P as Q}from"./EventEmitter-3h9cKSNS.js";import{_ as Te}from"./extends-nGe_wfaW.js";var je=/^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/,Ee=e=>e.match(je)[1],Ae=e=>!isNaN(parseFloat(e))&&isFinite(e),X=(e,r)=>{if(typeof e=="string"){var i=parseFloat(e)*r,l=Ee(e);return""+i+l}else if(Ae(e))return e*r},_e=["aria-label","accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value"],Pe={},q="0px 1px 3px rgba(0,0,0,0.5)",Fe=q+", 0 0 0 10px rgba(0,0,0,0.1)",Le="#A3D3CF",De="#939393",ee="#D5D5D5",Re="#009688",$e="#FAFAFA",te="#BDBDBD",ne=a.forwardRef((e,r)=>{var i=e["aria-label"],l=e.accessibilityLabel,v=e.activeThumbColor,h=e.activeTrackColor,f=e.disabled,g=f===void 0?!1:f,c=e.onValueChange,x=e.style,s=x===void 0?Pe:x,d=e.thumbColor,t=e.trackColor,y=e.value,n=y===void 0?!1:y,u=ke(e,_e),C=a.useRef(null);function b(R){c!=null&&c(R.nativeEvent.target.checked)}function p(R){var S=R.nativeEvent.type==="focus",U=S?Fe:q;C.current!=null&&(C.current.style.boxShadow=U)}var k=B.flatten(s),F=k.height,w=k.width,m=F||"20px",A=X(m,2),T=w>A?w:A,V=X(m,.5),_=function(){return n===!0?t!=null&&typeof t=="object"?t.true:h??Le:t!=null&&typeof t=="object"?t.false:t??De}(),L=n?v??Re:d??$e,j=m,$=j,H=[E.root,s,g&&E.cursorDefault,{height:m,width:T}],N=function(){return n===!0?typeof h=="string"&&h!=null||typeof t=="object"&&t!=null&&t.true?_:ee:typeof t=="string"&&t!=null||typeof t=="object"&&t!=null&&t.false?_:ee}(),M=function(){return n===!0?v==null?te:L:d==null?te:L}(),D=[E.track,{backgroundColor:g?N:_,borderRadius:V}],I=[E.thumb,n&&E.thumbActive,{backgroundColor:g?M:L,height:j,marginStart:n?X($,-1):0,width:$}],O=we("input",{"aria-label":i||l,checked:n,disabled:g,onBlur:p,onChange:b,onFocus:p,ref:r,style:[E.nativeControl,E.cursorInherit],type:"checkbox",role:"switch"});return a.createElement(G,Te({},u,{style:H}),a.createElement(G,{style:D}),a.createElement(G,{ref:C,style:I}),O)});ne.displayName="Switch";var E=B.create({root:{cursor:"pointer",userSelect:"none"},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},track:W(W({forcedColorAdjust:"none"},B.absoluteFillObject),{},{height:"70%",margin:"auto",transitionDuration:"0.1s",width:"100%"}),thumb:{forcedColorAdjust:"none",alignSelf:"flex-start",borderRadius:"100%",boxShadow:q,start:"0%",transform:"translateZ(0)",transitionDuration:"0.1s"},thumbActive:{insetInlineStart:"100%"},nativeControl:W(W({},B.absoluteFillObject),{},{height:"100%",margin:0,appearance:"none",padding:0,width:"100%"})});const Ie=ne;var ze={};const P=de({checked:!1,disabled:!1,size:void 0,frameWidth:0,unstyled:ze.TAMAGUI_HEADLESS==="1"});var ie={};const le=ae(Ce,{name:"SwitchThumb",context:P,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",borderRadius:1e3}},checked:{true:{}},size:{"...size":e=>{const r=Y(e);return{height:r,width:r}}}},defaultVariants:{unstyled:ie.TAMAGUI_HEADLESS==="1"}}),Y=e=>Math.round(he(ye(e))*.65),We=e=>Y(e)*2,se=ae(oe,{name:"Switch",context:P,variants:{unstyled:{false:{size:"$true",borderRadius:1e3,backgroundColor:"$background",borderWidth:2,borderColor:"$background",focusStyle:{outlineColor:"$outlineColor",outlineStyle:"solid",outlineWidth:2}}},checked:{true:{}},frameWidth:{":number":()=>null},size:{"...size":e=>{const r=Y(e)+4,i=We(e)+4;return{height:r,minHeight:r,width:i}}}},defaultVariants:{unstyled:ie.TAMAGUI_HEADLESS==="1"}});var Be={};function Ve(e){const{disableActiveTheme:r,Frame:i=se,Thumb:l=le}=e;i.staticConfig.context=P,l.staticConfig.context=P;const v=l.styleable(function(c,x){const{size:s,unstyled:d,...t}=c,y=a.useContext(P),{disabled:n,checked:u,unstyled:C,frameWidth:b,size:p}=y,[k,F]=a.useState(0),w=a.useRef(u).current,m=b-k,A=w?u?0:-m:u?m:0;return o.jsx(l,{...(d??C??!1)===!1&&{unstyled:Be.TAMAGUI_HEADLESS==="1",size:s??p??"$true",...!r&&{theme:u?"active":null}},"data-state":g(u),"data-disabled":n?"":void 0,alignSelf:w?"flex-end":"flex-start",checked:u,x:A,...t,onLayout:Z(c.onLayout,T=>F(T.nativeEvent.layout.width)),ref:x})}),h=i.styleable(function(c,x){const s=a.useContext(P),d=pe(c,{noNormalize:!0,noExpand:!0,resolveValues:"none",forComponent:i}),{labeledBy:t,name:y,checked:n,defaultChecked:u,required:C,disabled:b,value:p="on",onCheckedChange:k,size:F=s.size??"$true",unstyled:w=s.unstyled??!1,native:m,nativeProps:A,children:T,...V}=d,_=Array.isArray(m)?m:[m],L=_.includes("android")&&Q.OS==="android"||_.includes("ios")&&Q.OS==="ios",[j,$]=a.useState(null),H=fe(x,$),N=ve(j),M=t||N,D=a.useRef(!1),I=j?!!j.closest("form"):!0,[O,R]=a.useState(0),[S=!1,U]=Se({prop:n,defaultProp:u||!1,onChange:k,transition:!0});if(L)return o.jsx(Ie,{value:n,onValueChange:k,...A});const ue=a.useContext(K);return o.jsxs(o.Fragment,{children:[o.jsx(K.Provider,{value:!0,children:o.jsx(i,{tag:ue?"span":"button",unstyled:w,size:F,checked:S,disabled:b,frameWidth:O,themeShallow:!0,...!r&&{theme:S?"active":null,themeShallow:!0},role:"switch","aria-checked":S,"aria-labelledby":M,"aria-required":C,"data-state":g(S),"data-disabled":b?"":void 0,tabIndex:b?void 0:0,value:p,...V,ref:H,onPress:Z(d.onPress,z=>{U(ce=>!ce),I&&(D.current=z.isPropagationStopped(),D.current||z.stopPropagation())}),children:o.jsx(oe,{alignSelf:"stretch",flex:1,onLayout:z=>{R(z.nativeEvent.layout.width)},children:typeof T=="function"?T(S):T})})}),I&&o.jsx(f,{control:j,bubbles:!D.current,name:y,value:p,checked:S,required:C,disabled:b,style:{transform:"translateX(-100%)"}})]})},{disableTheme:!0}),f=c=>{const{control:x,checked:s,bubbles:d=!0,...t}=c,y=a.useRef(null),n=xe(s);return a.useEffect(()=>{const u=y.current,C=window.HTMLInputElement.prototype,b=Object.getOwnPropertyDescriptor(C,"checked").set;if(n!==s&&b){const p=new Event("click",{bubbles:d});b.call(u,s),u.dispatchEvent(p)}},[n,s,d]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...t,tabIndex:-1,ref:y,style:{...c.style,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function g(c){return c?"checked":"unchecked"}return ge(h,{Thumb:v})}const re=Ve({Frame:se,Thumb:le});function He({labelLeft:e,labelRight:r,space:i,size:l="$2",thumbProps:v,...h}){const f=a.useId();return o.jsxs(be,{alignItems:"center",space:"$4",children:[e&&o.jsx(J,{htmlFor:f,size:l,children:e}),o.jsx(re,{id:f,...h,size:l,children:o.jsx(re.Thumb,{animation:"bouncy",...v})}),r&&o.jsx(J,{htmlFor:f,size:l,children:r})]})}function Ze({name:e,control:r,rules:i={},defaultValue:l,...v}){return o.jsx(me,{name:e,rules:i,control:r,defaultValue:l,render:({field:{onChange:h,value:f}})=>o.jsx(He,{...v,onCheckedChange:h,value:f,checked:!!f})})}export{He as L,Ze as a};
