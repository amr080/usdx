"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{55127:function(e,a,t){t.d(a,{offchainLookup:function(){return offchainLookup},offchainLookupSignature:function(){return p}});var r=t(48569),s=t(91336),n=t(49326),o=t(91642);let OffchainLookupError=class OffchainLookupError extends n.G{constructor({callbackSelector:e,cause:a,data:t,extraData:r,sender:s,urls:n}){super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],a.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(e=>`    ${(0,o.Gr)(e)}`)],`  Sender: ${s}`,`  Data: ${t}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}};let OffchainLookupResponseMalformedError=class OffchainLookupResponseMalformedError extends n.G{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.Gr)(a)}`,`Response: ${(0,s.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}};let OffchainLookupSenderMismatchError=class OffchainLookupSenderMismatchError extends n.G{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}};var c=t(6605),i=t(407),f=t(57411),u=t(86993),d=t(86256);function isAddressEqual(e,a){if(!(0,d.U)(e))throw new u.b({address:e});if(!(0,d.U)(a))throw new u.b({address:a});return e.toLowerCase()===a.toLowerCase()}var l=t(74825),h=t(80374);let p="0x556f1830",w={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function offchainLookup(e,{blockNumber:a,blockTag:t,data:s,to:n}){let{args:o}=(0,i.p)({data:s,abi:[w]}),[c,u,d,h,p]=o;try{if(!isAddressEqual(n,c))throw new OffchainLookupSenderMismatchError({sender:c,to:n});let s=await ccipFetch({data:d,sender:c,urls:u}),{data:o}=await (0,r.R)(e,{blockNumber:a,blockTag:t,data:(0,l.zo)([h,(0,f.E)([{type:"bytes"},{type:"bytes"}],[s,p])]),to:n});return o}catch(e){throw new OffchainLookupError({callbackSelector:h,cause:e,data:s,extraData:p,sender:c,urls:u})}}async function ccipFetch({data:e,sender:a,urls:t}){let r=Error("An unknown error occurred.");for(let n=0;n<t.length;n++){let o=t[n],i=o.includes("{data}")?"GET":"POST",f="POST"===i?{data:e,sender:a}:void 0;try{let t;let n=await fetch(o.replace("{sender}",a).replace("{data}",e),{body:JSON.stringify(f),method:i});if(t=n.headers.get("Content-Type")?.startsWith("application/json")?(await n.json()).data:await n.text(),!n.ok){r=new c.Gg({body:f,details:t?.error?(0,s.P)(t.error):n.statusText,headers:n.headers,status:n.status,url:o});continue}if(!(0,h.v)(t)){r=new OffchainLookupResponseMalformedError({result:t,url:o});continue}return t}catch(e){r=new c.Gg({body:f,details:e.message,url:o})}}throw r}}}]);