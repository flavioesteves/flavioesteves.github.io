let Q=0,L=null,N=`undefined`,T=`boolean`,U=`string`,M=1,W=`Object`,O=`utf-8`,S=`number`,X=4,Z=25,R=`function`,J=Array,V=Array.isArray,P=Error,Y=Reflect,K=undefined;var D=(async(a,b)=>{if(typeof Response===R&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===R){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==S||b==T||a==L){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==R){const b=a.name;if(typeof b==U&&b.length>Q){return `Function(${b})`}else{return `Function`}};if(V(a)){const b=a.length;let c=`[`;if(b>Q){c+=u(a[Q])};for(let d=M;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>M){d=c[M]}else{return toString.call(a)};if(d==W){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return W}};if(a instanceof P){return `${a.name}: ${a.message}\n${a.stack}`};return d});var y=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__hcaa511e605331ac5(b,c,e(d))});var F=((a,b)=>{});var g=(a=>{const b=c(a);f(a);return b});var e=(a=>{if(d===b.length)b.push(b.length+ M);const c=d;d=b[c];b[c]=a;return c});var I=(async(b)=>{if(a!==K)return a;if(typeof b===N){b=new URL(`flavio_esteves_web-d3e01ef6bb1e0970ea19f9d40b0df89fcdbf4af5253f040b8186512adfa68bf3a1f8bd3c9c94525a4ab2f4d634bc80b0_bg.wasm`,import.meta.url)};const c=E();if(typeof b===U||typeof Request===R&&b instanceof Request||typeof URL===R&&b instanceof URL){b=fetch(b)};F(c);const {instance:d,module:e}=await D(await b,c);return G(d,e)});var C=((a,b)=>{if(a===Q){return c(b)}else{return k(a,b)}});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(e(b))}}var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h8ffd59ff8835c576(b,c)});var H=(b=>{if(a!==K)return a;const c=E();F(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return G(d,b)});var r=(()=>{if(q===L||q.byteLength===Q){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===K||a===L);var c=(a=>b[a]);var G=((b,c)=>{a=b.exports;I.__wbindgen_wasm_module=c;s=L;q=L;i=L;a.__wbindgen_start();return a});var E=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return e(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==M){b.a=Q;return !0};const c=!1;return c});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:K;var g=p(f)?Q:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ M]=h;r()[b/X+ Q]=g});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===S?d:K;t()[a/8+ M]=p(e)?Q:e;r()[a/X+ Q]=!p(e)});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===T?(b?M:Q):2;return d});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===L;return b});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_d609202d16c38224=(a=>{const b=c(a).document;return p(b)?Q:e(b)});b.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=c(a).location;return e(b)});b.wbg.__wbg_history_80998b7456bf367e=function(){return B((a=>{const b=c(a).history;return e(b)}),arguments)};b.wbg.__wbg_scrollTo_eb21c4452d7b3cd6=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_requestAnimationFrame_74309aadebde12fa=function(){return B(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_documentElement_1cdfe4c8cdb2f569=(a=>{const b=c(a).documentElement;return p(b)?Q:e(b)});b.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=c(a).body;return p(b)?Q:e(b)});b.wbg.__wbg_createComment_529b047c02bbe600=((a,b,d)=>{var f=C(b,d);const g=c(a).createComment(f);return e(g)});b.wbg.__wbg_createDocumentFragment_1c6d6aeeb8a8eb2e=(a=>{const b=c(a).createDocumentFragment();return e(b)});b.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return B(((a,b,d)=>{var f=C(b,d);const g=c(a).createElement(f);return e(g)}),arguments)};b.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,d)=>{var f=C(b,d);const g=c(a).createTextNode(f);return e(g)});b.wbg.__wbg_getElementById_65b9547a428b5eb4=((a,b,d)=>{var f=C(b,d);const g=c(a).getElementById(f);return p(g)?Q:e(g)});b.wbg.__wbg_querySelectorAll_3c5fa13bff8fc108=function(){return B(((a,b,d)=>{var f=C(b,d);const g=c(a).querySelectorAll(f);return e(g)}),arguments)};b.wbg.__wbg_classList_82893a9100db6428=(a=>{const b=c(a).classList;return e(b)});b.wbg.__wbg_clientWidth_eca2065ae6dd9dcd=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_530993c2aa871aaf=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,d)=>{var e=C(b,d);c(a).innerHTML=e});b.wbg.__wbg_getAttribute_bff489553dd803cc=((b,d,e,f)=>{var g=C(e,f);const h=c(d).getAttribute(g);var i=p(h)?Q:o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/X+ M]=j;r()[b/X+ Q]=i});b.wbg.__wbg_hasAttribute_bfb8f7140cf587f1=((a,b,d)=>{var e=C(b,d);const f=c(a).hasAttribute(e);return f});b.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return B(((a,b,d)=>{var e=C(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_scrollIntoView_3de22d537ed95550=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return B(((a,b,d,e,f)=>{var g=C(b,d);var h=C(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_74a825a7b3d13d06=function(){return B(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_0d26d36fd4f25c4e=(a=>{c(a).remove()});b.wbg.__wbg_instanceof_HtmlAnchorElement_76fafcefedd51299=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_target_b68f65aba6338cfb=((b,d)=>{const e=c(d).target;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_href_829df0adc5a7228a=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_pageX_58e43d6529844f55=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_f3752d96ecd2a291=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_add_e0f3c5b6e421c311=function(){return B(((a,b,d)=>{var e=C(b,d);c(a).add(e)}),arguments)};b.wbg.__wbg_remove_c6ba26a0a6906129=function(){return B(((a,b,d)=>{var e=C(b,d);c(a).remove(e)}),arguments)};b.wbg.__wbg_target_52ddf6955f636bf5=(a=>{const b=c(a).target;return p(b)?Q:e(b)});b.wbg.__wbg_defaultPrevented_ae7d433108dd159d=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_cancelBubble_976cfdf7ac449a6c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_12a068e57a98cf90=(a=>{const b=c(a).composedPath();return e(b)});b.wbg.__wbg_preventDefault_7f821f72e7c6b5d4=(a=>{c(a).preventDefault()});b.wbg.__wbg_ctrlKey_643b17aaac67db50=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_8fb7301f56e7e01c=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_altKey_c6c2a7e797d9a669=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_metaKey_2a8dbd51a3f59e9c=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_cd87b6dabbde9631=(a=>{const b=c(a).button;return b});b.wbg.__wbg_setdata_86ad1e8da020aa68=((a,b,d)=>{var e=C(b,d);c(a).data=e});b.wbg.__wbg_addEventListener_9bf60ea8a362e5e4=function(){return B(((a,b,d,e)=>{var f=C(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return B(((a,b,d,e,f)=>{var g=C(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_origin_aab6d2be79bcec84=((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_pathname_aeafa820be91c325=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_search_f6e95882a48d3f69=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_searchParams_00f98167a3c8c4da=(a=>{const b=c(a).searchParams;return e(b)});b.wbg.__wbg_hash_0087751acddc8f2a=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_newwithbase_f4989aa5bbd5cc29=function(){return B(((a,b,c,d)=>{var f=C(a,b);var g=C(c,d);const h=new URL(f,g);return e(h)}),arguments)};b.wbg.__wbg_instanceof_HtmlTextAreaElement_ce81e455dc21bc93=(a=>{let b;try{b=c(a) instanceof HTMLTextAreaElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_value_57e57170f6952449=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_instanceof_HtmlInputElement_e7869aaef9cbb0e6=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_value_e024243a9dae20bc=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbg_origin_595edc88be6e66b8=function(){return B(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f}),arguments)};b.wbg.__wbg_pathname_1ab7e82aaa4511ff=function(){return B(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f}),arguments)};b.wbg.__wbg_search_9f7ca8896c2d0804=function(){return B(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f}),arguments)};b.wbg.__wbg_hash_be2940ca236b5efc=function(){return B(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f}),arguments)};b.wbg.__wbg_error_e60eff06f24ab7a4=(a=>{console.error(c(a))});b.wbg.__wbg_warn_f260f49434e45e62=(a=>{console.warn(c(a))});b.wbg.__wbg_append_962e199b73af5069=function(){return B(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_0bd39e89ab117f86=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_09eee5e3d9cf59a1=(a=>{const b=c(a).host;return e(b)});b.wbg.__wbg_pushState_e159043fce8f87bc=function(){return B(((a,b,d,e,f,g)=>{var h=C(d,e);var i=C(f,g);c(a).pushState(c(b),h,i)}),arguments)};b.wbg.__wbg_replaceState_b51dd62c7235b1ac=function(){return B(((a,b,d,e,f,g)=>{var h=C(d,e);var i=C(f,g);c(a).replaceState(c(b),h,i)}),arguments)};b.wbg.__wbg_parentNode_92a7017b3a4fad43=(a=>{const b=c(a).parentNode;return p(b)?Q:e(b)});b.wbg.__wbg_childNodes_a5762b4b3e073cf6=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_previousSibling_ef843c512fac0d77=(a=>{const b=c(a).previousSibling;return p(b)?Q:e(b)});b.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=c(a).nextSibling;return p(b)?Q:e(b)});b.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_cloneNode_405d5ea3f7e0098a=function(){return B((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_length_f845c1c304d9837a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_2daf9593d1a96476=((a,b)=>{const d=c(a).item(b>>>Q);return p(d)?Q:e(d)});b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===R;return b});b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>Q];return e(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{var c=C(a,b);const d=new Function(c);return e(d)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==L;return d});b.wbg.__wbg_next_9b877f231f476d01=(a=>{const b=c(a).next;return e(b)});b.wbg.__wbg_next_6529ee0cca8d57ed=function(){return B((a=>{const b=c(a).next();return e(b)}),arguments)};b.wbg.__wbg_done_5fe336b092d60cf2=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_0c248a78fdc8e19f=(a=>{const b=c(a).value;return e(b)});b.wbg.__wbg_iterator_db7ca081358d4fb2=(()=>{const a=Symbol.iterator;return e(a)});b.wbg.__wbg_get_7b48513de5dc5ea4=function(){return B(((a,b)=>{const d=Y.get(c(a),c(b));return e(d)}),arguments)};b.wbg.__wbg_call_90c26b09837aba1c=function(){return B(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return B((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return B((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return B((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return B((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbg_decodeURI_1e508fc8ed99cae7=function(){return B(((a,b)=>{var c=C(a,b);const d=decodeURI(c);return e(d)}),arguments)};b.wbg.__wbg_isArray_74fb723e24f76012=(a=>{const b=V(c(a));return b});b.wbg.__wbg_call_5da1969d7cd31ccd=function(){return B(((a,b,d)=>{const f=c(a).call(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_exec_42513e2d2ddabd95=((a,b,d)=>{var f=C(b,d);const g=c(a).exec(f);return p(g)?Q:e(g)});b.wbg.__wbg_new_e145ee1b0ed9b4aa=((a,b,c,d)=>{var f=C(a,b);var g=C(c,d);const h=new RegExp(f,g);return e(h)});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(c(a));return e(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_set_759f75cd92b612d2=function(){return B(((a,b,d)=>{const e=Y.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ M]=g;r()[b/X+ Q]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new P(k(a,b))});b.wbg.__wbindgen_closure_wrapper159=((a,b,c)=>{const d=v(a,b,Z,w);return e(d)});b.wbg.__wbindgen_closure_wrapper160=((a,b,c)=>{const d=v(a,b,Z,w);return e(d)});b.wbg.__wbindgen_closure_wrapper480=((a,b,c)=>{const d=v(a,b,163,x);return e(d)});b.wbg.__wbindgen_closure_wrapper699=((a,b,c)=>{const d=v(a,b,223,y);return e(d)});b.wbg.__wbindgen_closure_wrapper820=((a,b,c)=>{const d=v(a,b,282,z);return e(d)});b.wbg.__wbindgen_closure_wrapper2112=((a,b,c)=>{const d=v(a,b,312,A);return e(d)});return b});var A=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h24ffdbf58317a703(b,c,e(d))});var t=(()=>{if(s===L||s.byteLength===Q){s=new Float64Array(a.memory.buffer)};return s});var z=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h02ea76aaaafacc59(b,c)});var f=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:M,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=Q;try{return e(c,f.b,...b)}finally{if(--f.cnt===Q){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===K){const c=m.encode(a);const d=b(c.length,M)>>>Q;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,M)>>>Q;const f=j();let g=Q;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==Q){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,M)>>>Q;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var j=(()=>{if(i===L||i.byteLength===Q){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>Q;return h.decode(j().subarray(a,a+ b))});var w=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h27047e058719fda2(b,c,e(d))});let a;const b=new J(128).fill(K);b.push(K,L,!0,!1);let d=b.length;const h=typeof TextDecoder!==N?new TextDecoder(O,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw P(`TextDecoder not available`)}};if(typeof TextDecoder!==N){h.decode()};let i=L;let l=Q;const m=typeof TextEncoder!==N?new TextEncoder(O):{encode:()=>{throw P(`TextEncoder not available`)}};const n=typeof m.encodeInto===R?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=L;let s=L;export default I;export{H as initSync}