(()=>{var dc=0,Do=1,fc=2;var Is=1,pc=2,Gi=3,$n=0,He=1,_n=2,ci=0,Vi=1,No=2,Uo=3,Fo=4,mc=5;var hi=100,gc=101,_c=102,xc=103,vc=104,yc=200,Mc=201,Sc=202,bc=203,Oo=204,Bo=205,Tc=206,Ec=207,Ac=208,wc=209,Rc=210,Cc=211,Ic=212,Pc=213,Lc=214,gr=0,_r=1,xr=2,Ri=3,vr=4,yr=5,Mr=6,Sr=7,zo=0,Dc=1,Nc=2,xn=0,ko=1,Go=2,Vo=3,Ps=4,Ho=5,Wo=6,Xo=7;var qo=300,ui=301,Hi=302,na=303,ia=304,br=1e3,dn=1001,Tr=1002,Re=1003,Uc=1004;var Ls=1005;var Ve=1006,sa=1007;var Pn=1008;var Xe=1009,Yo=1010,Zo=1011,Wi=1012,ra=1013,on=1014,ln=1015,cn=1016,aa=1017,oa=1018,di=1020,Jo=35902,$o=35899,Ko=1021,Qo=1022,hn=1023,Rn=1026,Ln=1027,jo=1028,la=1029,Kn=1030,ca=1031;var ha=1033,Ds=33776,Ns=33777,Us=33778,Fs=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37488,va=37489,Os=37490,ya=37491,Ma=37808,Sa=37809,ba=37810,Ta=37811,Ea=37812,Aa=37813,wa=37814,Ra=37815,Ca=37816,Ia=37817,Pa=37818,La=37819,Da=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,Ba=36283,za=36284,Bs=36285,ka=36286;var is=2300,Er=2301,pr=2302,So=2303,bo=2400,To=2401,Eo=2402;var Fc=3200;var Ga=0,Oc=1,Dn="",ke="srgb",ss="srgb-linear",rs="linear",ae="srgb";var mr=7680;var Bc=519,zc=512,kc=513,Gc=514,tl=515,Vc=516,Hc=517,el=518,nl=519,Wc=35044;var il="300 es",je=2e3,Ci=2001;function Hh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function as(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){let i=as("canvas");return i.style.display="block",i}var Ol={},Ii=null;function sl(...i){let t="THREE."+i.shift();Ii?Ii("log",t,...i):console.log(t,...i)}function qc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=qc(i);let t="THREE."+i.shift();if(Ii)Ii("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=qc(i);let t="THREE."+i.shift();if(Ii)Ii("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ts(...i){let t=i.join(" ");t in Ol||(Ol[t]=!0,Ot(...i))}function Yc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zc={[gr]:gr,[xr]:Mr,[vr]:vr,[Ri]:yr,[_r]:_r,[Mr]:xr,[Sr]:Sr,[yr]:Ri},pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $a=Math.PI/180,Ar=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Xh(i,t){return(i%t+t)%t}function Ka(i,t,e){return(1-e)*i+e*t}function Jc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qh(i,t){if(t.constructor===Float32Array)return i;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Yh(i,t){if(t.constructor===Float32Array)return i;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;var _t=ul,Ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*M;p<0&&(u=-u,d=-d,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,o=Math.sin(o*S)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+M*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+M*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dl=class dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;var D=dl,Qa=new D,Bl=new Ze,fl=class fl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],M=s[0],p=s[3],m=s[6],S=s[1],E=s[4],y=s[7],C=s[2],A=s[5],_=s[8];return r[0]=a*M+o*S+l*C,r[3]=a*p+o*E+l*A,r[6]=a*m+o*y+l*_,r[1]=c*M+h*S+f*C,r[4]=c*p+h*E+f*A,r[7]=c*m+h*y+f*_,r[2]=u*M+d*S+g*C,r[5]=u*p+d*E+g*A,r[8]=u*m+d*y+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=f*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ja.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;var kt=fl,ja=new kt,zl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){let i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?rs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:rs,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var ee=Zh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,wr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pi===void 0&&(pi=as("canvas")),pi.width=t.width,pi.height=t.height;let s=pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=as("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jh=0,Pi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(to(s[a].image)):r.push(to(s[a]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function to(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var $h=0,eo=new D,We=class i extends pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=Ve,a=Pn,o=hn,l=Xe,c=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Xi(),this.name="",this.source=new Pi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=qo;We.DEFAULT_ANISOTROPY=1;var pl=class pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(d+1)/2,C=(m+1)/2,A=(h+u)/4,_=(f+M)/4,b=(g+p)/4;return E>y&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=_/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-M)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;var pe=pl,Rr=class extends pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new We({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends Rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},os=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ea=class ea{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,M,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,M,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,M=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,M=c*f;e[0]=u+M*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,M=c*f;e[0]=u-M*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,M=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+M,e[1]=l*f,e[5]=M*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-M*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Qh)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),On.crossVectors(n,qe),On.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),On.crossVectors(n,qe)),On.normalize(),qs.crossVectors(qe,On),s[0]=On.x,s[4]=qs.x,s[8]=qe.x,s[1]=On.y,s[5]=qs.y,s[9]=qe.y,s[2]=On.z,s[6]=qs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],M=n[6],p=n[10],m=n[14],S=n[3],E=n[7],y=n[11],C=n[15],A=s[0],_=s[4],b=s[8],I=s[12],w=s[1],L=s[5],N=s[9],F=s[13],R=s[2],B=s[6],H=s[10],V=s[14],et=s[3],X=s[7],Q=s[11],tt=s[15];return r[0]=a*A+o*w+l*R+c*et,r[4]=a*_+o*L+l*B+c*X,r[8]=a*b+o*N+l*H+c*Q,r[12]=a*I+o*F+l*V+c*tt,r[1]=h*A+f*w+u*R+d*et,r[5]=h*_+f*L+u*B+d*X,r[9]=h*b+f*N+u*H+d*Q,r[13]=h*I+f*F+u*V+d*tt,r[2]=g*A+M*w+p*R+m*et,r[6]=g*_+M*L+p*B+m*X,r[10]=g*b+M*N+p*H+m*Q,r[14]=g*I+M*F+p*V+m*tt,r[3]=S*A+E*w+y*R+C*et,r[7]=S*_+E*L+y*B+C*X,r[11]=S*b+E*N+y*H+C*Q,r[15]=S*I+E*F+y*V+C*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],M=t[7],p=t[11],m=t[15],S=l*d-c*u,E=o*d-c*f,y=o*u-l*f,C=a*d-c*h,A=a*u-l*h,_=a*f-o*h;return e*(M*S-p*E+m*y)-n*(g*S-p*C+m*A)+s*(g*E-M*C+m*_)-r*(g*y-M*A+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],M=t[13],p=t[14],m=t[15],S=e*o-n*a,E=e*l-s*a,y=e*c-r*a,C=n*l-s*o,A=n*c-r*o,_=s*c-r*l,b=h*M-f*g,I=h*p-u*g,w=h*m-d*g,L=f*p-u*M,N=f*m-d*M,F=u*m-d*p,R=S*F-E*N+y*L+C*w-A*I+_*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return t[0]=(o*F-l*N+c*L)*B,t[1]=(s*N-n*F-r*L)*B,t[2]=(M*_-p*A+m*C)*B,t[3]=(u*A-f*_-d*C)*B,t[4]=(l*w-a*F-c*I)*B,t[5]=(e*F-s*w+r*I)*B,t[6]=(p*y-g*_-m*E)*B,t[7]=(h*_-u*y+d*E)*B,t[8]=(a*N-o*w+c*b)*B,t[9]=(n*w-e*N-r*b)*B,t[10]=(g*A-M*y+m*S)*B,t[11]=(f*y-h*A-d*S)*B,t[12]=(o*I-a*L-l*b)*B,t[13]=(e*L-n*I+s*b)*B,t[14]=(M*E-g*C-p*S)*B,t[15]=(h*C-f*E+u*S)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,M=a*h,p=a*f,m=o*f,S=l*c,E=l*h,y=l*f,C=n.x,A=n.y,_=n.z;return s[0]=(1-(M+m))*C,s[1]=(d+y)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(u+m))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+E)*_,s[9]=(p-S)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=mi.set(s[0],s[1],s[2]).length(),o=mi.set(s[4],s[5],s[6]).length(),l=mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);let c=1/a,h=1/o,f=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,e.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=je,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===je)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ci)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=je,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===je)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ci)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ea.prototype.isMatrix4=!0;var fe=ea,mi=new D,nn=new fe,Kh=new D(0,0,0),Qh=new D(1,1,1),On=new D,qs=new D,qe=new D,Gl=new fe,Vl=new Ze,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jh=0,Hl=new D,gi=new Ze,Sn=new fe,Ys=new D,Ji=new D,tu=new D,eu=new Ze,Wl=new D(1,0,0),Xl=new D(0,1,0),ql=new D(0,0,1),Yl={type:"added"},nu={type:"removed"},_i={type:"childadded",child:null},no={type:"childremoved",child:null},Oe=class i extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Cn,n=new Ze,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Ji,Ys,this.up):Sn.lookAt(Ys,Ji,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(Sn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),_i.child=t,this.dispatchEvent(_i),_i.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,tu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},iu={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Xh(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=io(a,r,t+1/3),this.g=io(a,r,t),this.b=io(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ee.workingToColorSpace(Fe.copy(this),t),Math.round($t(Fe.r*255,0,255))*65536+Math.round($t(Fe.g*255,0,255))*256+Math.round($t(Fe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=ke){ee.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Zs);let n=Ka(Bn.h,Zs.h,e),s=Ka(Bn.s,Zs.s,e),r=Ka(Bn.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Kt;Kt.NAMES=$c;var cs=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},sn=new D,bn=new D,so=new D,Tn=new D,xi=new D,vi=new D,Zl=new D,ro=new D,ao=new D,oo=new D,lo=new pe,co=new pe,ho=new pe,Vn=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),bn.subVectors(n,e),so.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(bn),l=sn.dot(so),c=bn.dot(bn),h=bn.dot(so),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return lo.setScalar(0),co.setScalar(0),ho.setScalar(0),lo.fromBufferAttribute(t,e),co.fromBufferAttribute(t,n),ho.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lo,r.x),a.addScaledVector(co,r.y),a.addScaledVector(ho,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),bn.subVectors(t,e),sn.cross(bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xi.subVectors(s,n),vi.subVectors(r,n),ro.subVectors(t,n);let l=xi.dot(ro),c=vi.dot(ro);if(l<=0&&c<=0)return e.copy(n);ao.subVectors(t,s);let h=xi.dot(ao),f=vi.dot(ao);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(xi,a);oo.subVectors(t,r);let d=xi.dot(oo),g=vi.dot(oo);if(g>=0&&d<=g)return e.copy(r);let M=d*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(vi,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return Zl.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Zl,o);let m=1/(p+M+u);return a=M*m,o=u*m,e.copy(n).addScaledVector(xi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),$s.subVectors(this.max,$i),yi.subVectors(t.a,$i),Mi.subVectors(t.b,$i),Si.subVectors(t.c,$i),zn.subVectors(Mi,yi),kn.subVectors(Si,Mi),ei.subVectors(yi,Si);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ei.z,ei.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ei.z,0,-ei.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ei.y,ei.x,0];return!uo(e,yi,Mi,Si,$s)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,yi,Mi,Si,$s))?!1:(Ks.crossVectors(zn,kn),e=[Ks.x,Ks.y,Ks.z],uo(e,yi,Mi,Si,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},En=[new D,new D,new D,new D,new D,new D,new D,new D],rn=new D,Js=new Hn,yi=new D,Mi=new D,Si=new D,zn=new D,kn=new D,ei=new D,$i=new D,$s=new D,Ks=new D,ni=new D;function uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);let o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Se=new D,Qs=new _t,su=0,fn=class extends pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:su++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):qh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yh(t,this.array)}};var hs=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var us=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ru=new Hn,Ki=new D,fo=new D,Di=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);let e=Ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(fo)),this.expandByPoint(Ki.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},au=0,Qe=new fe,po=new Oe,bi=new D,Ye=new Hn,Qi=new Hn,we=new D,tn=class i extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?us:hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ye.min,Qi.min),Ye.expandByPoint(we),we.addVectors(Ye.max,Qi.max),Ye.expandByPoint(we)):(Ye.expandByPoint(Qi.min),Ye.expandByPoint(Qi.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(bi.fromBufferAttribute(t,c),we.add(bi)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new D,l[I]=new D;let h=new D,f=new D,u=new D,d=new _t,g=new _t,M=new _t,p=new D,m=new D;function S(I,w,L){c[I]=c[w]=c[L]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,L),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,w),M.fromBufferAttribute(r,L),f.sub(h),u.sub(h),g.sub(d),M.sub(d);let N=1/(g.x*M.y-M.x*g.y);isFinite(N)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(N),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(N),o[I].add(p),o[w].add(p),o[L].add(p),l[I].add(m),l[w].add(m),l[L].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,w=E.length;I<w;++I){let L=E[I],N=L.start,F=L.count;for(let R=N,B=N+F;R<B;R+=3)S(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let y=new D,C=new D,A=new D,_=new D;function b(I){A.fromBufferAttribute(s,I),_.copy(A);let w=o[I];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),C.crossVectors(_,w);let N=C.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,N)}for(let I=0,w=n.count;I<w;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),M=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new fn(u,h,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mo=new D,ou=new D,lu=new kt,an=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=mo.subVectors(n,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(mo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lu.getNormalMatrix(t),s=this.coplanarPoint(mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cu=0,Wn=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Vi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new an().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var An=new D,go=new D,js=new D,tr=new D,Ir=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){go.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),tr.copy(this.origin).sub(go);let r=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=tr.dot(this.direction),l=-tr.dot(js),c=tr.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(go).addScaledVector(js,u),d}intersectSphere(t,e){if(t.radius<0)return null;An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,M=e.y-a.y,p=e.z-a.z,m=n.x-a.x,S=n.y-a.y,E=n.z-a.z,y=Math.abs(l),C=Math.abs(c),A=Math.abs(h),_,b,I,w,L,N,F,R,B,H,V,et;if(y>=C&&y>=A?(I=l,N=f,B=g,et=m,l>=0?(_=c,b=h,w=u,L=d,F=M,R=p,H=S,V=E):(_=h,b=c,w=d,L=u,F=p,R=M,H=E,V=S)):C>=A?(I=c,N=u,B=M,et=S,c>=0?(_=h,b=l,w=d,L=f,F=p,R=g,H=E,V=m):(_=l,b=h,w=f,L=d,F=g,R=p,H=m,V=E)):(I=h,N=d,B=p,et=E,h>=0?(_=l,b=c,w=f,L=u,F=g,R=M,H=m,V=S):(_=c,b=l,w=u,L=f,F=M,R=g,H=S,V=m)),I===0)return null;let X=_/I,Q=b/I,tt=1/I,bt=w-X*N,Ut=L-Q*N,Y=F-X*B,gt=R-Q*B,Tt=H-X*et,Lt=V-Q*et,xt=Tt*gt-Lt*Y,Dt=bt*Lt-Ut*Tt,ue=Y*Ut-gt*bt;if(s){if(xt<0||Dt<0||ue<0)return null}else if((xt<0||Dt<0||ue<0)&&(xt>0||Dt>0||ue>0))return null;let Ft=xt+Dt+ue;if(Ft===0)return null;let qt=tt*(xt*N+Dt*B+ue*et);return(Ft>0?qt<0:qt>0)?null:this.at(qt/Ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pr=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jl=new fe,ii=new Ir,er=new Di,$l=new D,nr=new D,ir=new D,sr=new D,_o=new D,rr=new D,Kl=new D,ar=new D,xe=class extends Oe{constructor(t=new tn,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(_o.fromBufferAttribute(f,t),a?rr.addScaledVector(_o,h):rr.addScaledVector(_o.sub(e),h))}e.add(rr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(er.containsPoint(ii.origin)===!1&&(ii.intersectSphere(er,$l)===null||ii.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let p=u[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,C=E;y<C;y+=3){let A=o.getX(y),_=o.getX(y+1),b=o.getX(y+2);s=or(this,m,t,n,c,h,f,A,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){let S=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=or(this,a,t,n,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let p=u[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,C=E;y<C;y+=3){let A=y,_=y+1,b=y+2;s=or(this,m,t,n,c,h,f,A,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){let S=p,E=p+1,y=p+2;s=or(this,a,t,n,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function hu(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,nr),i.getVertexPosition(l,ir),i.getVertexPosition(c,sr);let h=hu(i,t,e,n,nr,ir,sr,Kl);if(h){let f=new D;Vn.getBarycoord(Kl,nr,ir,sr,f),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,f,new _t)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,f,new _t)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Vn.getNormal(nr,ir,sr,u.normal),h.face=u,h.barycoord=f}return h}var Lr=class extends We{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=new Di,uu=new _t(.5,.5),lr=new D,Xn=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=je,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],M=r[9],p=r[10],m=r[11],S=r[12],E=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,d-h,m-g,C-S).normalize(),s[1].setComponents(c+a,d+h,m+g,C+S).normalize(),s[2].setComponents(c+o,d+f,m+M,C+E).normalize(),s[3].setComponents(c-o,d-f,m-M,C-E).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,d-u,m-p,C-y).normalize();else if(s[4].setComponents(c-l,d-u,m-p,C-y).normalize(),e===je)s[5].setComponents(c+l,d+u,m+p,C+y).normalize();else if(e===Ci)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);let e=uu.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ql=new fe,Dr=class i{constructor(){this.coordinateSystem=je,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Xn),n[s].setFromProjectionMatrix(Ql,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Xn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ds=class extends We{constructor(t=[],e=ui,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var In=class extends We{constructor(t,e,n=on,s,r,a,o=Re,l=Re,c,h=Rn,f=1){if(h!==Rn&&h!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},fs=class extends In{constructor(t,e=on,n=ui,s,r,a=Re,o=Re,l,c=Rn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ps=class extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class i extends tn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function g(M,p,m,S,E,y,C,A,_,b,I){let w=y/_,L=C/b,N=y/2,F=C/2,R=A/2,B=_+1,H=b+1,V=0,et=0,X=new D;for(let Q=0;Q<H;Q++){let tt=Q*L-F;for(let bt=0;bt<B;bt++){let Ut=bt*w-N;X[M]=Ut*S,X[p]=tt*E,X[m]=R,c.push(X.x,X.y,X.z),X[M]=0,X[p]=0,X[m]=A>0?1:-1,h.push(X.x,X.y,X.z),f.push(bt/_),f.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let tt=0;tt<_;tt++){let bt=u+tt+B*Q,Ut=u+tt+B*(Q+1),Y=u+(tt+1)+B*(Q+1),gt=u+(tt+1)+B*Q;l.push(bt,Ut,gt),l.push(Ut,Y,gt),et+=6}o.addGroup(d,et,I),d+=et,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ai=class i extends tn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,M=[],p=n/2,m=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function S(){let y=new D,C=new D,A=0,_=(e-t)/n;for(let b=0;b<=r;b++){let I=[],w=b/r,L=w*(e-t)+t;for(let N=0;N<=s;N++){let F=N/s,R=F*l+o,B=Math.sin(R),H=Math.cos(R);C.x=L*B,C.y=-w*n+p,C.z=L*H,f.push(C.x,C.y,C.z),y.set(B,_,H).normalize(),u.push(y.x,y.y,y.z),d.push(F,1-w),I.push(g++)}M.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let w=M[I][b],L=M[I+1][b],N=M[I+1][b+1],F=M[I][b+1];(t>0||I!==0)&&(h.push(w,L,F),A+=3),(e>0||I!==r-1)&&(h.push(L,N,F),A+=3)}c.addGroup(m,A,0),m+=A}function E(y){let C=g,A=new _t,_=new D,b=0,I=y===!0?t:e,w=y===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*w,0),u.push(0,w,0),d.push(.5,.5),g++;let L=g;for(let N=0;N<=s;N++){let R=N/s*l+o,B=Math.cos(R),H=Math.sin(R);_.x=I*H,_.y=p*w,_.z=I*B,f.push(_.x,_.y,_.z),u.push(0,w,0),A.x=B*.5+.5,A.y=H*.5*w+.5,d.push(A.x,A.y),g++}for(let N=0;N<s;N++){let F=C+N,R=L+N;y===!0?h.push(R,R+1,F):h.push(R+1,R,F),b+=3}c.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ni=class i extends ai{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var $e=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new fe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($t(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ui=class extends $e{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Nr=class extends Ui{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jl=new D,tc=new D,xo=new al,vo=new al,yo=new al,Ur=class extends $e{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(tc.subVectors(s[0],s[1]).add(s[0]),c=tc);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),xo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,M,p),vo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,M,p),yo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),vo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),yo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(xo.calc(l),vo.calc(l),yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ec(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function du(i,t){let e=1-i;return e*e*t}function fu(i,t){return 2*(1-i)*i*t}function pu(i,t){return i*i*t}function es(i,t,e,n){return du(i,t)+fu(i,e)+pu(i,n)}function mu(i,t){let e=1-i;return e*e*e*t}function gu(i,t){let e=1-i;return 3*e*e*i*t}function _u(i,t){return 3*(1-i)*i*i*t}function xu(i,t){return i*i*i*t}function ns(i,t,e,n,s){return mu(i,t)+gu(i,e)+_u(i,n)+xu(i,s)}var ms=class extends $e{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,s.x,r.x,a.x,o.x),ns(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends $e{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,s.x,r.x,a.x,o.x),ns(t,s.y,r.y,a.y,o.y),ns(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gs=class extends $e{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends $e{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_s=class extends $e{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(es(t,s.x,r.x,a.x),es(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends $e{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(es(t,s.x,r.x,a.x),es(t,s.y,r.y,a.y),es(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xs=class extends $e{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(ec(o,l.x,c.x,h.x,f.x),ec(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:Nr,CatmullRomCurve3:Ur,CubicBezierCurve:ms,CubicBezierCurve3:Fr,EllipseCurve:Ui,LineCurve:gs,LineCurve3:Or,QuadraticBezierCurve:_s,QuadraticBezierCurve3:Br,SplineCurve:xs}),zr=class extends $e{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ao[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},qn=class extends zr{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new gs(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _s(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ms(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ui(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fi=class extends qn{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qn().fromJSON(s))}return this}};function vu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Kc(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Tu(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return vs(r,a,e,o,l,c,0),a}function Kc(i,t,e,n,s){let r;if(s===Uu(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=nc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=nc(a/n|0,i[a],i[a+1],r);return r&&Oi(r,r.next)&&(Ms(r),r=r.next),r}function oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oi(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Cu(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mu(i,n,s,r):yu(i)){t.push(l.i,i.i,c.i),Ms(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Su(oi(i),t),vs(i,t,e,n,s,r,2)):a===2&&bu(i,t,e,n,s,r):vs(oi(i),t,e,n,s,r,1);break}}}function yu(i){let t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ji(s,o,r,l,a,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mu(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),M=Math.max(o,l,c),p=Math.max(h,f,u),m=wo(d,g,t,e,n),S=wo(M,p,t,e,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=m&&y&&y.z<=S;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&ji(o,h,l,f,c,u,E.x,E.y)&&ge(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&ji(o,h,l,f,c,u,y.x,y.y)&&ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=M&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&ji(o,h,l,f,c,u,E.x,E.y)&&ge(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=M&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&ji(o,h,l,f,c,u,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Su(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Oi(n,s)&&jc(n,e,e.next,s)&&ys(n,s)&&ys(s,n)&&(t.push(n.i,e.i,s.i),Ms(e),Ms(e.next),e=i=s),e=e.next}while(e!==i);return oi(e)}function bu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lu(a,o)){let l=th(a,o);a=oi(a,a.next),l=oi(l,l.next),vs(a,t,e,n,s,r,0),vs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tu(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Kc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pu(c))}s.sort(Eu);for(let r=0;r<s.length;r++)e=Au(s[r],e);return e}function Eu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Au(i,t){let e=wu(i,t);if(!e)return t;let n=th(e,i);return oi(n,n.next),oi(e,e.next)}function wu(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Oi(i,e))return e;do{if(Oi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Qc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);ys(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Ru(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Ru(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Cu(i,t,e,n){let s=i;do s.z===0&&(s.z=wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Iu(s)}function Iu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ji(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Qc(i,t,e,n,s,r,a,o)}function Lu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Du(i,t)&&(ys(i,t)&&ys(t,i)&&Nu(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Oi(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oi(i,t){return i.x===t.x&&i.y===t.y}function jc(i,t,e,n){let s=hr(ge(i,t,e)),r=hr(ge(i,t,n)),a=hr(ge(e,n,i)),o=hr(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&cr(i,e,t)||r===0&&cr(i,n,t)||a===0&&cr(e,i,n)||o===0&&cr(e,t,n))}function cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hr(i){return i>0?1:i<0?-1:0}function Du(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ys(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Nu(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function th(i,t){let e=Ro(i.i,i.x,i.y),n=Ro(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){let s=Ro(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ro(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Uu(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Co=class{static triangulate(t,e,n=2){return vu(t,e,n)}},ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ic(t),sc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sc(n,e[l]);let o=Co.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ic(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bi=class i extends tn{constructor(t=new Fi([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Fu,E,y=!1,C,A,_,b;if(m){E=m.getSpacedPoints(h),y=!0,u=!1;let j=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,j),A=new D,_=new D,b=new D}u||(p=0,d=0,g=0,M=0);let I=o.extractPoints(c),w=I.shape,L=I.holes;if(!ri.isClockWise(w)){w=w.reverse();for(let j=0,lt=L.length;j<lt;j++){let rt=L[j];ri.isClockWise(rt)&&(L[j]=rt.reverse())}}function F(j){let rt=10000000000000001e-36,St=j[0];for(let mt=1;mt<=j.length;mt++){let Vt=mt%j.length,Ct=j[Vt],Jt=Ct.x-St.x,Qt=Ct.y-St.y,ie=Jt*Jt+Qt*Qt,O=Math.max(Math.abs(Ct.x),Math.abs(Ct.y),Math.abs(St.x),Math.abs(St.y)),ye=rt*O*O;if(ie<=ye){j.splice(Vt,1),mt--;continue}St=Ct}}F(w),L.forEach(F);let R=L.length,B=w;for(let j=0;j<R;j++){let lt=L[j];w=w.concat(lt)}function H(j,lt,rt){return lt||Bt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(lt,rt)}let V=w.length;function et(j,lt,rt){let St,mt,Vt,Ct=j.x-lt.x,Jt=j.y-lt.y,Qt=rt.x-j.x,ie=rt.y-j.y,O=Ct*Ct+Jt*Jt,ye=Ct*ie-Jt*Qt;if(Math.abs(ye)>Number.EPSILON){let Yt=Math.sqrt(O),le=Math.sqrt(Qt*Qt+ie*ie),dt=lt.x-Jt/Yt,ve=lt.y+Ct/Yt,Nt=rt.x-ie/le,zt=rt.y+Qt/le,T=((Nt-dt)*ie-(zt-ve)*Qt)/(Ct*ie-Jt*Qt);St=dt+Ct*T-j.x,mt=ve+Jt*T-j.y;let x=St*St+mt*mt;if(x<=2)return new _t(St,mt);Vt=Math.sqrt(x/2)}else{let Yt=!1;Ct>Number.EPSILON?Qt>Number.EPSILON&&(Yt=!0):Ct<-Number.EPSILON?Qt<-Number.EPSILON&&(Yt=!0):Math.sign(Jt)===Math.sign(ie)&&(Yt=!0),Yt?(St=-Jt,mt=Ct,Vt=Math.sqrt(O)):(St=Ct,mt=Jt,Vt=Math.sqrt(O/2))}return new _t(St/Vt,mt/Vt)}let X=[];for(let j=0,lt=B.length,rt=lt-1,St=j+1;j<lt;j++,rt++,St++)rt===lt&&(rt=0),St===lt&&(St=0),X[j]=et(B[j],B[rt],B[St]);let Q=[],tt,bt=X.concat();for(let j=0,lt=R;j<lt;j++){let rt=L[j];tt=[];for(let St=0,mt=rt.length,Vt=mt-1,Ct=St+1;St<mt;St++,Vt++,Ct++)Vt===mt&&(Vt=0),Ct===mt&&(Ct=0),tt[St]=et(rt[St],rt[Vt],rt[Ct]);Q.push(tt),bt=bt.concat(tt)}let Ut;if(p===0)Ut=ri.triangulateShape(B,L);else{let j=[],lt=[];for(let rt=0;rt<p;rt++){let St=rt/p,mt=d*Math.cos(St*Math.PI/2),Vt=g*Math.sin(St*Math.PI/2)+M;for(let Ct=0,Jt=B.length;Ct<Jt;Ct++){let Qt=H(B[Ct],X[Ct],Vt);Dt(Qt.x,Qt.y,-mt),St===0&&j.push(Qt)}for(let Ct=0,Jt=R;Ct<Jt;Ct++){let Qt=L[Ct];tt=Q[Ct];let ie=[];for(let O=0,ye=Qt.length;O<ye;O++){let Yt=H(Qt[O],tt[O],Vt);Dt(Yt.x,Yt.y,-mt),St===0&&ie.push(Yt)}St===0&&lt.push(ie)}}Ut=ri.triangulateShape(j,lt)}let Y=Ut.length,gt=g+M;for(let j=0;j<V;j++){let lt=u?H(w[j],bt[j],gt):w[j];y?(_.copy(C.normals[0]).multiplyScalar(lt.x),A.copy(C.binormals[0]).multiplyScalar(lt.y),b.copy(E[0]).add(_).add(A),Dt(b.x,b.y,b.z)):Dt(lt.x,lt.y,0)}for(let j=1;j<=h;j++)for(let lt=0;lt<V;lt++){let rt=u?H(w[lt],bt[lt],gt):w[lt];y?(_.copy(C.normals[j]).multiplyScalar(rt.x),A.copy(C.binormals[j]).multiplyScalar(rt.y),b.copy(E[j]).add(_).add(A),Dt(b.x,b.y,b.z)):Dt(rt.x,rt.y,f/h*j)}for(let j=p-1;j>=0;j--){let lt=j/p,rt=d*Math.cos(lt*Math.PI/2),St=g*Math.sin(lt*Math.PI/2)+M;for(let mt=0,Vt=B.length;mt<Vt;mt++){let Ct=H(B[mt],X[mt],St);Dt(Ct.x,Ct.y,f+rt)}for(let mt=0,Vt=L.length;mt<Vt;mt++){let Ct=L[mt];tt=Q[mt];for(let Jt=0,Qt=Ct.length;Jt<Qt;Jt++){let ie=H(Ct[Jt],tt[Jt],St);y?Dt(ie.x,ie.y+E[h-1].y,E[h-1].x+rt):Dt(ie.x,ie.y,f+rt)}}}Tt(),Lt();function Tt(){let j=s.length/3;if(u){let lt=0,rt=V*lt;for(let St=0;St<Y;St++){let mt=Ut[St];ue(mt[2]+rt,mt[1]+rt,mt[0]+rt)}lt=h+p*2,rt=V*lt;for(let St=0;St<Y;St++){let mt=Ut[St];ue(mt[0]+rt,mt[1]+rt,mt[2]+rt)}}else{for(let lt=0;lt<Y;lt++){let rt=Ut[lt];ue(rt[2],rt[1],rt[0])}for(let lt=0;lt<Y;lt++){let rt=Ut[lt];ue(rt[0]+V*h,rt[1]+V*h,rt[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function Lt(){let j=s.length/3,lt=0;xt(B,lt),lt+=B.length;for(let rt=0,St=L.length;rt<St;rt++){let mt=L[rt];xt(mt,lt),lt+=mt.length}n.addGroup(j,s.length/3-j,1)}function xt(j,lt){let rt=j.length;for(;--rt>=0;){let St=rt,mt=rt-1;mt<0&&(mt=j.length-1);for(let Vt=0,Ct=h+p*2;Vt<Ct;Vt++){let Jt=V*Vt,Qt=V*(Vt+1),ie=lt+St+Jt,O=lt+mt+Jt,ye=lt+mt+Qt,Yt=lt+St+Qt;Ft(ie,O,ye,Yt)}}}function Dt(j,lt,rt){l.push(j),l.push(lt),l.push(rt)}function ue(j,lt,rt){qt(j),qt(lt),qt(rt);let St=s.length/3,mt=S.generateTopUV(n,s,St-3,St-2,St-1);Zt(mt[0]),Zt(mt[1]),Zt(mt[2])}function Ft(j,lt,rt,St){qt(j),qt(lt),qt(St),qt(lt),qt(rt),qt(St);let mt=s.length/3,Vt=S.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);Zt(Vt[0]),Zt(Vt[1]),Zt(Vt[3]),Zt(Vt[1]),Zt(Vt[2]),Zt(Vt[3])}function qt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Zt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ou(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ao[s.type]().fromJSON(s)),new i(n,t.options)}},Fu={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,l),new _t(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _t(a,1-l),new _t(c,1-f),new _t(u,1-g),new _t(M,1-m)]:[new _t(o,1-l),new _t(h,1-f),new _t(d,1-g),new _t(p,1-m)]}};function Ou(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ss=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],M=[],p=[];for(let m=0;m<h;m++){let S=m*u-a;for(let E=0;E<c;E++){let y=E*f-r;g.push(y,-S,0),M.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let E=S+c*m,y=S+c*(m+1),C=S+1+c*(m+1),A=S+1+c*m;d.push(E,y,A),d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var bs=class i extends tn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,d=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){let S=[],E=m/n,y=a+E*o,C=t*Math.cos(y),A=Math.sqrt(t*t-C*C),_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let I=b/e,w=s+I*r;f.x=-A*Math.cos(w),f.y=C,f.z=A*Math.sin(w),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),p.push(I+_,1-E),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let E=h[m][S+1],y=h[m][S],C=h[m+1][S],A=h[m+1][S+1];(m!==0||a>0)&&d.push(E,y,A),(m!==n-1||l<Math.PI)&&d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(M,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var li=class i extends tn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,d=new D,g=new D;for(let M=0;M<=n;M++){let p=a+M/n*o;for(let m=0;m<=s;m++){let S=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(S),d.y=(t+e*Math.cos(p))*Math.sin(S),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){let m=(s+1)*M+p-1,S=(s+1)*(M-1)+p-1,E=(s+1)*(M-1)+p,y=(s+1)*M+p;l.push(m,S,y),l.push(S,E,y)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rc(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=fi(i[e]);for(let s in n)t[s]=n[s]}return t}function rc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var eh={clone:fi,merge:Be},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=Bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kr=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ts=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gr=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vr=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ti(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ur(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bo,endingEnd:bo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case To:r=t,o=2*e-n;break;case Eo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case To:a=t,l=2*n-e;break;case Eo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),M=g*g,p=M*g,m=-u*p+2*u*M-u*g,S=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*g+1,E=(-1-d)*p+(1.5+d)*M+.5*g,y=d*p-d*M;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+S*a[c+C]+E*a[l+C]+y*a[f+C];return r}},Wr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Xr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qr=class extends Yn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),M=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let M=a[c+g],p=a[l+g],m=d*u+g*2,S=f[m],E=f[m+1],y=t*u+g*2,C=h[y],A=h[y+1],_=Vu(n,e,S,C,s);r[g]=nh(_,M,E,A,p)}return r}};function nh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Vu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=nh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Gu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ke=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ti(e,this.TimeBufferType),this.values=Ti(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ti(t.times,Array),values:Ti(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ur(t.settings)&&(n.settings={inTangents:Ti(t.settings.inTangents,Array),outTangents:Ti(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case is:e=this.InterpolantFactoryMethodDiscrete;break;case Er:e=this.InterpolantFactoryMethodLinear;break;case pr:e=this.InterpolantFactoryMethodSmooth;break;case So:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return pr;case this.InterpolantFactoryMethodBezier:return So}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ur(this.settings)&&(ac(this.settings.inTangents,t),ac(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ur(this.settings)&&(oc(this.settings.inTangents,t),oc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Wh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let M=e[f+g];if(M!==e[u+g]||M!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ur(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ac(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function oc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ke.prototype.ValueTypeName="";Ke.prototype.TimeBufferType=Float32Array;Ke.prototype.ValueBufferType=Float32Array;Ke.prototype.DefaultInterpolation=Er;var Zn=class extends Ke{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=is;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}};Yr.prototype.ValueTypeName="color";var Zr=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="number";var Jr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ze.slerpFlat(r,0,a,c-o,a,c,l);return r}},Es=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jr(this.times,this.values,this.getValueSize(),t)}};Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Ke{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=is;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Ke{constructor(t,e,n,s){super(t,e,n,s)}};$r.prototype.ValueTypeName="vector";var Kr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ih=new Kr,Qr=class{constructor(t){this.manager=t!==void 0?t:ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ws=class extends As{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mo=new fe,lc=new D,cc=new D,jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xn,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ci||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dr=new D,fr=new Ze,un=new D,Rs=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(dr,fr,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,fr,un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(dr,fr,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,fr,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gn=new D,hc=new _t,uc=new _t,Ge=class extends Rs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($a*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Cs=class extends Rs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Io=class extends jr{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Io}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ei=-90,Ai=1,ki=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(Ei,Ai,t,e);s.layers=this.layers,this.add(s);let r=new Ge(Ei,Ai,t,e);r.layers=this.layers,this.add(r);let a=new Ge(Ei,Ai,t,e);a.layers=this.layers,this.add(a);let o=new Ge(Ei,Ai,t,e);o.layers=this.layers,this.add(o);let l=new Ge(Ei,Ai,t,e);l.layers=this.layers,this.add(l);let c=new Ge(Ei,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===je)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ci)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ta=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",Hu=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",Wu="[^"+ll.replace("\\.","")+"]",Xu=/((?:WC+[\/:])*)/.source.replace("WC",cl),qu=/(WCOD+)?/.source.replace("WCOD",Wu),Yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Ju=new RegExp("^"+Xu+qu+Yu+Zu+"$"),$u=["material","materials","bones","map"],Po=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hu,"")}static parseTrackName(t){let e=Ju.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$u.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Po;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vg=new Float32Array(1);var ml=class ml{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ml.prototype.isMatrix2=!0;var Lo=ml;function hl(i,t,e,n){let s=Ku(n);switch(e){case Ko:return i*t;case jo:return i*t/s.components*s.byteLength;case la:return i*t/s.components*s.byteLength;case Kn:return i*t*2/s.components*s.byteLength;case ca:return i*t*2/s.components*s.byteLength;case Qo:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case ha:return i*t*4/s.components*s.byteLength;case Ds:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Us:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case Os:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Bs:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ku(i){switch(i){case Xe:case Yo:return{byteLength:1,components:1};case Wi:case Zo:case cn:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case on:case ra:case ln:return{byteLength:4,components:1};case Jo:case $o:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Eh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let M=f[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:td,alphahash_pars_fragment:ed,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:yd,color_pars_vertex:Md,color_vertex:Sd,common:bd,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ed,displacementmap_vertex:Ad,emissivemap_fragment:wd,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:zd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:$d,lights_physical_pars_fragment:Kd,lights_fragment_begin:Qd,lights_fragment_maps:jd,lights_fragment_end:tf,lightprobes_pars_fragment:ef,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:xf,normal_fragment_maps:vf,normal_pars_fragment:yf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Af,iridescence_pars_fragment:wf,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:If,project_vertex:Pf,dithering_fragment:Lf,dithering_pars_fragment:Df,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Gf,skinning_vertex:Vf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:Yf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:$f,uv_pars_vertex:Kf,uv_vertex:Qf,worldpos_vertex:jf,background_vert:tp,background_frag:ep,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:ap,depth_frag:op,distance_vert:lp,distance_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:xp,meshmatcap_frag:vp,meshnormal_vert:yp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:bp,meshphysical_vert:Tp,meshphysical_frag:Ep,meshtoon_vert:Ap,meshtoon_frag:wp,points_vert:Rp,points_frag:Cp,shadow_vert:Ip,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Dp},yt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},yn={basic:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Be([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Be([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Be([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Be([yt.points,yt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Be([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Be([yt.common,yt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Be([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Be([yt.sprite,yt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Be([yt.common,yt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Be([yt.lights,yt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};yn.physical={uniforms:Be([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Va={r:0,b:0,g:0},Np=new fe,Ah=new kt;Ah.set(-1,0,0,0,1,0,0,0,1);function Up(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let y=S.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(S){let E=!1,y=d(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,E){let y=d(E);y&&y.isCubeTexture?(c===void 0&&(c=new xe(new mn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:fi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ah),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ae,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xe(new Ss(2,2),new gn({name:"BackgroundMaterial",uniforms:fi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(Va,ol(i)),e.buffers.color.setClear(Va.r,Va.g,Va.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:M,dispose:m}}function Fp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,N,F,R,B){let H=!1,V=f(L,R,F,N);r!==V&&(r=V,c(r.object)),H=d(L,R,F,B),H&&g(L,R,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,y(L,N,F,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,N,F,R){let B=R.wireframe===!0,H=n[N.id];H===void 0&&(H={},n[N.id]=H);let V=L.isInstancedMesh===!0?L.id:0,et=H[V];et===void 0&&(et={},H[V]=et);let X=et[F.id];X===void 0&&(X={},et[F.id]=X);let Q=X[B];return Q===void 0&&(Q=u(l()),X[B]=Q),Q}function u(L){let N=[],F=[],R=[];for(let B=0;B<e;B++)N[B]=0,F[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:R,object:L,attributes:{},index:null}}function d(L,N,F,R){let B=r.attributes,H=N.attributes,V=0,et=F.getAttributes();for(let X in et)if(et[X].location>=0){let tt=B[X],bt=H[X];if(bt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(bt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(bt=L.instanceColor)),tt===void 0||tt.attribute!==bt||bt&&tt.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function g(L,N,F,R){let B={},H=N.attributes,V=0,et=F.getAttributes();for(let X in et)if(et[X].location>=0){let tt=H[X];tt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let bt={};bt.attribute=tt,tt&&tt.data&&(bt.data=tt.data),B[X]=bt,V++}r.attributes=B,r.attributesNum=V,r.index=R}function M(){let L=r.newAttributes;for(let N=0,F=L.length;N<F;N++)L[N]=0}function p(L){m(L,0)}function m(L,N){let F=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;F[L]=1,R[L]===0&&(i.enableVertexAttribArray(L),R[L]=1),B[L]!==N&&(i.vertexAttribDivisor(L,N),B[L]=N)}function S(){let L=r.newAttributes,N=r.enabledAttributes;for(let F=0,R=N.length;F<R;F++)N[F]!==L[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function E(L,N,F,R,B,H,V){V===!0?i.vertexAttribIPointer(L,N,F,B,H):i.vertexAttribPointer(L,N,F,R,B,H)}function y(L,N,F,R){M();let B=R.attributes,H=F.getAttributes(),V=N.defaultAttributeValues;for(let et in H){let X=H[et];if(X.location>=0){let Q=B[et];if(Q===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let tt=Q.normalized,bt=Q.itemSize,Ut=t.get(Q);if(Ut===void 0)continue;let Y=Ut.buffer,gt=Ut.type,Tt=Ut.bytesPerElement,Lt=gt===i.INT||gt===i.UNSIGNED_INT||Q.gpuType===ra;if(Q.isInterleavedBufferAttribute){let xt=Q.data,Dt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,ue=Q.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Ft=0;Ft<X.locationSize;Ft++)m(X.location+Ft,xt.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ft=0;Ft<X.locationSize;Ft++)p(X.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Ft=0;Ft<X.locationSize;Ft++)E(X.location+Ft,bt/X.locationSize,gt,tt,Dt*Tt,(ue+bt/X.locationSize*Ft)*Tt,Lt)}else{if(Q.isInstancedBufferAttribute){for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let xt=0;xt<X.locationSize;xt++)E(X.location+xt,bt/X.locationSize,gt,tt,bt*Tt,bt/X.locationSize*xt*Tt,Lt)}}else if(V!==void 0){let tt=V[et];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(X.location,tt);break;case 3:i.vertexAttrib3fv(X.location,tt);break;case 4:i.vertexAttrib4fv(X.location,tt);break;default:i.vertexAttrib1fv(X.location,tt)}}}}S()}function C(){I();for(let L in n){let N=n[L];for(let F in N){let R=N[F];for(let B in R){let H=R[B];for(let V in H)h(H[V].object),delete H[V];delete R[B]}}delete n[L]}}function A(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let F in N){let R=N[F];for(let B in R){let H=R[B];for(let V in H)h(H[V].object),delete H[V];delete R[B]}}delete n[L.id]}function _(L){for(let N in n){let F=n[N];for(let R in F){let B=F[R];if(B[L.id]===void 0)continue;let H=B[L.id];for(let V in H)h(H[V].object),delete H[V];delete B[L.id]}}}function b(L){for(let N in n){let F=n[N],R=L.isInstancedMesh===!0?L.id:0,B=F[R];if(B!==void 0){for(let H in B){let V=B[H];for(let et in V)h(V[et].object),delete V[et];delete B[H]}delete F[R],Object.keys(F).length===0&&delete n[N]}}}function I(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function Op(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==hn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Xe&&_!==ln&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:C,samples:A}}function zp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,E=S*4,y=m.clippingState||null;l.value=y,y=h(g,u,E,d);for(let C=0;C!==E;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let m=d+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=d;E!==M;++E,y+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var Gs=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ds(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ci});r.uniforms.tEquirect.value=e;let a=new xe(s,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Ve),new ki(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},sh=256,kp=3,Gp=20,wh=256,Rh=16,Vp=3,Hp=new D,Wp=new Kt,Wa=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ki(1,10,null),this._boxMesh=new xe(new mn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hp}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Wp));let p=new ki(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(sh,Jc(t))}_fromTexture(t,e){t.mapping===ui||t.mapping===Hi?this._setSize(t.image.length===0?sh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=rh(t,!1,!1),n=Math.log2(t)-kp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=rh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ui||t.mapping===Hi?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ah()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xp(),this._integrationMaterial=qp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Rh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Vp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(wh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Yp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function rh(i,t,e){return new Gs(i,{minFilter:Pn,generateMipmaps:t,type:cn,colorSpace:ss,depthBuffer:e})}function Vs(i,t,e){return new gn({name:i,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:He,blending:ci,depthTest:!1,depthWrite:!1})}function Xp(){return Vs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qp(){return Vs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yp(){return Vs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ah(){return Vs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function oh(){return Vs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===na||d===ia)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new Gs(g.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===na||d===ia,M=d===ui||d===Hi;if(g||M){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Wa(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Wa(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===na?u.mapping=ui:d===ia&&(u.mapping=Hi),u}function l(u){let d=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Jp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(g){let M=g.attributes;for(let p in M)t.update(M[p],i.ARRAY_BUFFER)}function f(g){let M=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let S=M!==null?M.array.length:p.array.length/3-1,E=p.count>=65535?us:hs,y=new E(Math.ceil(S/3)*6,1),C=y.array;if(M!==null){let _=M.array;m=M.version;for(let b=0,I=0;b<S;b+=3){let w=_[b+0],L=_[b+1],N=_[b+2];C[I++]=w,C[I++]=L,C[I++]=L,C[I++]=N,C[I++]=N,C[I++]=w}}else{m=p.version;for(let _=0,b=0;_<S;_+=3){let I=_+0,w=_+1,L=_+2;C[b++]=I,C[b++]=w,C[b++]=w,C[b++]=L,C[b++]=L,C[b++]=I}}y.version=m;let A=r.get(g);A&&t.remove(A),r.set(g,y)}function u(g){let M=r.get(g);if(M){let p=g.index;p!==null&&M.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Kp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let p=0;p<d;p++)M+=u[p];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jp(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let y=o.attributes.position.count*E,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*C*4*f),_=new os(A,y,C,f);_.type=ln,_.needsUpdate=!0;let b=E*4;for(let w=0;w<f;w++){let L=p[w],N=m[w],F=S[w],R=y*C*4*w;for(let B=0;B<L.count;B++){let H=B*b;d===!0&&(s.fromBufferAttribute(L,B),A[R+H+0]=s.x,A[R+H+1]=s.y,A[R+H+2]=s.z,A[R+H+3]=0),g===!0&&(s.fromBufferAttribute(N,B),A[R+H+4]=s.x,A[R+H+5]=s.y,A[R+H+6]=s.z,A[R+H+7]=0),M===!0&&(s.fromBufferAttribute(F,B),A[R+H+8]=s.x,A[R+H+9]=s.y,A[R+H+10]=s.z,A[R+H+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new _t(y,C)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function tm(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var em={[ko]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[Vo]:"CINEON_TONE_MAPPING",[Ps]:"ACES_FILMIC_TONE_MAPPING",[Wo]:"AGX_TONE_MAPPING",[Xo]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function nm(i,t,e,n,s,r){let a=new Je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new tn;h.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _e([0,2,0,0,2,0],2));let f=new kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new xe(h,f),d=new Cs(-1,1,1,-1,0,1),g=null,M=null,p=!1,m,S=null,E=[],y=!1;this.setSize=function(C,A){a.setSize(C,A),o!==null&&o.setSize(C,A),l!==null&&l.setSize(C,A);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(C,A)}},this.setEffects=function(C){E=C,y=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new Je(A,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Je(A,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(I=>I.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new In(A,_),r===!0&&(c.format=Ln,c.type=di)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let I=0;I<E.length;I++){let w=E[I];w.setSize&&w.setSize(A,_),b&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(C,A){if(p||C.toneMapping===xn&&E.length===0)return!1;if(S=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return y===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=xn,!0},this.hasRenderPass=function(){return y},this.end=function(C,A){C.toneMapping=m,p=!0;let _=a,b=o;for(let I=0;I<E.length;I++){let w=E[I];w.enabled!==!1&&(w.render(C,b,_,A),w.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==C.outputColorSpace||M!==C.toneMapping){g=C.outputColorSpace,M=C.toneMapping,f.defines={},ee.getTransfer(g)===ae&&(f.defines.SRGB_TRANSFER="");let I=em[M];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(S),C.render(u,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Ch=new We,Ih=new In(1,1),Ph=new fs(1),Lh=new os,Dh=new Cr,Nh=new ds,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Yi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lh[s];if(r===void 0&&(r=new Float32Array(s),lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qa(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),Te(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),Te(e,n)}}function cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Te(e,n)}}function hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Ya(i){return i.version===0&&(i.compareFunction=nl,i.needsUpdate=!0),i}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ya(Ih):r=Ch,e.setTexture2D(t||r,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dh,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ya(Ph):r=Nh,e.setTextureCube(t||r,s)}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lh,s)}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Mm}}function bm(i,t){i.uniform1fv(this.addr,t)}function Tm(i,t){let e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){let e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function Am(i,t){let e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function wm(i,t){let e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){let e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Im(i,t){i.uniform1iv(this.addr,t)}function Pm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Dm(i,t){i.uniform4iv(this.addr,t)}function Nm(i,t){i.uniform1uiv(this.addr,t)}function Um(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ya(Ih):a=Ch;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function zm(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Dh,r[a])}function km(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ya(Ph):a=Nh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Gm(i,t,e){let n=this.cache,s=t.length,r=qa(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lh,r[a])}function Vm(i){switch(i){case 5126:return bm;case 35664:return Tm;case 35665:return Em;case 35666:return Am;case 35674:return wm;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Im;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Nm;case 36294:return Um;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}},vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}},yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function Hm(i,t,e){let n=i.name,s=n.length;for(gl.lastIndex=0;;){let r=gl.exec(n),a=gl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fh(e,c===void 0?new xl(o,i,t):new vl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new yl(o),fh(e,f)),e=f}}}var qi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Hm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Wm=37297,Xm=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var mh=new kt;function Ym(i){ee._getMatrix(mh,ee.workingColorSpace,i);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case rs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(t),o)}else return r}function Zm(i,t){let e=Ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Jm={[ko]:"Linear",[Go]:"Reinhard",[Vo]:"Cineon",[Ps]:"ACESFilmic",[Wo]:"AgX",[Xo]:"Neutral",[Ho]:"Custom"};function $m(i,t){let e=Jm[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ha=new D;function Km(){ee.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),t=Ha.y.toFixed(4),e=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function jm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ks(i){return i!==""}function _h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(eg,ng)}function ng(i,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ml(e)}var ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(ig,sg)}function sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var rg={[Is]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function ag(i){return rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var og={[Hi]:"ENVMAP_MODE_REFRACTION"};function lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":og[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cg={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Dc]:"ENVMAP_BLENDING_MIX",[Nc]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cg[i.combine]||"ENVMAP_BLENDING_NONE"}function ug(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ag(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lg(e),f=hg(e),u=Qm(e),d=jm(r),g=s.createProgram(),M,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ks).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(M=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==xn?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),a=Ml(a),a=_h(a,e),a=xh(a,e),o=Ml(o),o=_h(o,e),o=xh(o,e),a=vh(a),o=vh(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+M+a,E=m+p+o,y=ph(s,s.VERTEX_SHADER,S),C=ph(s,s.FRAGMENT_SHADER,E);s.attachShader(g,y),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(w){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(C)||"",R=L.trim(),B=N.trim(),H=F.trim(),V=!0,et=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,C);else{let X=gh(s,y,"vertex"),Q=gh(s,C,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+X+`
`+Q)}else R!==""?Ot("WebGLProgram: Program Info Log:",R):(B===""||H==="")&&(et=!1);et&&(w.diagnostics={runnable:V,programLog:R,vertexShader:{log:B,prefix:M},fragmentShader:{log:H,prefix:p}})}s.deleteShader(y),s.deleteShader(C),_=new qi(s,g),b=tg(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,Wm)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=C,this}var dg=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}};function fg(i){return i===Kn||i===Os||i===Bs}function pg(i,t,e,n,s,r){let a=new ls,o=new Sl,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,I,w,L,N){let F=w.fog,R=L.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||B,H),et=u[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,tt=Q!==void 0?Q.length:0,bt=0;R.morphAttributes.position!==void 0&&(bt=1),R.morphAttributes.normal!==void 0&&(bt=2),R.morphAttributes.color!==void 0&&(bt=3);let Ut,Y,gt,Tt;if(et){let vt=yn[et];Ut=vt.vertexShader,Y=vt.fragmentShader}else{Ut=_.vertexShader,Y=_.fragmentShader;let vt=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,vt,oe),gt=vt.id,Tt=oe.id}let Lt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,ue=L.isBatchedMesh===!0,Ft=!!_.map,qt=!!_.matcap,Zt=!!V,j=Zt&&V.isPMREMTexture===!0,lt=!!_.aoMap,rt=!!_.lightMap,St=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,Vt=!!_.displacementMap,Ct=!!_.emissiveMap,Jt=!!_.metalnessMap,Qt=!!_.roughnessMap,ie=_.anisotropy>0,O=_.clearcoat>0,ye=_.diffuseRoughness>0,Yt=_.dispersion>0,le=_.retroreflectivity>0,dt=_.iridescence>0,ve=_.sheen>0,Nt=_.transmission>0,zt=ie&&!!_.anisotropyMap,T=O&&!!_.clearcoatMap,x=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,nt=ye&&!!_.diffuseRoughnessMap,K=dt&&!!_.iridescenceMap,at=dt&&!!_.iridescenceThicknessMap,ft=ve&&!!_.sheenColorMap,Z=ve&&!!_.sheenRoughnessMap,J=!!_.specularMap,ct=!!_.specularColorMap,P=!!_.specularIntensityMap,$=Nt&&!!_.transmissionMap,q=Nt&&!!_.thicknessMap,ht=!!_.gradientMap,st=!!_.alphaMap,ot=_.alphaTest>0,It=!!_.alphaHash,Wt=!!_.extensions,it=xn;_.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(it=i.toneMapping);let Pt=j?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ht={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Ut,fragmentShader:Y,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ue,batchingColor:ue&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:qt,envMap:Zt,envMapMode:Zt&&V.mapping,envMapPMREM:j,envMapMaxLod:j?Pt.length-1:null,envMapSize:j?Pt[0].width:null,aoMap:lt,lightMap:rt,bumpMap:St,normalMap:mt,displacementMap:Vt,emissiveMap:Ct,normalMapObjectSpace:mt&&_.normalMapType===Oc,normalMapTangentSpace:mt&&_.normalMapType===Ga,packedNormalMap:mt&&_.normalMapType===Ga&&fg(_.normalMap.format),metalnessMap:Jt,roughnessMap:Qt,anisotropy:ie,anisotropyMap:zt,clearcoat:O,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:k,diffuseRoughness:ye,diffuseRoughnessMap:nt,dispersion:Yt,retroreflection:le,iridescence:dt,iridescenceMap:K,iridescenceThicknessMap:at,sheen:ve,sheenColorMap:ft,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ct,specularIntensityMap:P,transmission:Nt,transmissionMap:$,thicknessMap:q,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Vi&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:It,combine:_.combine,mapUv:Ft&&d(_.map.channel),aoMapUv:lt&&d(_.aoMap.channel),lightMapUv:rt&&d(_.lightMap.channel),bumpMapUv:St&&d(_.bumpMap.channel),normalMapUv:mt&&d(_.normalMap.channel),displacementMapUv:Vt&&d(_.displacementMap.channel),emissiveMapUv:Ct&&d(_.emissiveMap.channel),metalnessMapUv:Jt&&d(_.metalnessMap.channel),roughnessMapUv:Qt&&d(_.roughnessMap.channel),anisotropyMapUv:zt&&d(_.anisotropyMap.channel),clearcoatMapUv:T&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:J&&d(_.specularMap.channel),specularColorMapUv:ct&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:$&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:st&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(mt||ie),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(Ft||st),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:bt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function M(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)b.push(I),b.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let b=u[_.type],I;if(b){let w=yn[b];I=eh.clone(w.uniforms)}else I=_.uniforms;return I}function E(_,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new ug(i,b,_,s),c.push(I),h.set(b,I)),I}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:S,acquireProgram:E,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:A}}function mg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,M,p,m){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:m},i[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=p,S.group=m),t++,S}function l(u,d,g,M,p,m,S){S.reversedDepth===!0&&(p=-p);let E=o(u,d,g,M,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,M,p,m){let S=o(u,d,g,M,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||gg),n.length>1&&n.sort(d||Mh),s.length>1&&s.sort(d||Mh)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function _g(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sh,i.set(n,[a])):s>=r.length?(a=new Sh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var yg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sg(i){let t=new xg,e=vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new fe,a=new fe;function o(c){let h=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,S=0,E=0,y=0,C=0,A=0,_=0,b=0,I=0,w=0;c.sort(Mg);for(let N=0,F=c.length;N<F;N++){let R=c[N],B=R.color,H=R.intensity,V=R.distance,et=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Kn?et=R.shadow.map.texture:et=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=B.r*H,f+=B.g*H,u+=B.b*H;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],H);w++}else if(R.isSunLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,tt=e.get(R);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=et;let bt=Q.getViewportCount();for(let Ut=0;Ut<bt;Ut++)n.sunShadowMatrix[M+Ut]=Q.getMatrix(Ut),n.sunShadowCascade[M+Ut]=Q._cascadeData[Ut];M+=bt,g++}n.sun[d]=X,d++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,tt=e.get(R);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=R.shadow.matrix,C++}n.directional[p]=X,p++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=V,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[S]=X;let Q=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,Q.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[S]=Q.matrix,R.castShadow){let tt=e.get(R);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[S]=tt,n.spotShadowMap[S]=et,_++}S++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[E]=X,E++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let Q=R.shadow,tt=e.get(R);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=R.shadow.matrix,A++}n.point[m]=X,m++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(H),X.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[y]=X,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.sunLength!==d||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==E||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==C||L.numPointShadows!==A||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=w,L.sunLength=d,L.directionalLength=p,L.pointLength=m,L.spotLength=S,L.rectAreaLength=E,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=C,L.numPointShadows=A,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=w,n.version=yg++)}function l(c,h){let f=0,u=0,d=0,g=0,M=0,p=0,m=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let y=c[S];if(y.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),u++}else if(y.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function bh(i){let t=new Sg(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new bh(i),t.set(s,[o])):r>=a.length?(o=new bh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ag=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],wg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Th=new fe,zs=new D,_l=new D;function Rg(i,t,e){let n=new Xn,s=new _t,r=new _t,a=new pe,o=new Gr,l=new Vr,c={},h=e.maxTextureSize,f={[$n]:He,[He]:$n,[_n]:_n},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let m=this.type;this.render=function(A,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===pc&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let I=i.getRenderTarget(),w=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ci),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=m!==this.type;F&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=A.length;R<B;R++){let H=A[R],V=H.shadow;if(V===void 0){Ot("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let et=V.getFrameExtents();s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Gi){if(H.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Je(s.x,s.y,{format:Kn,type:cn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new In(s.x,s.y,ln),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=Rn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Re,V.map.depthTexture.magFilter=Re}else H.isPointLight?(V.map=new Gs(s.x),V.map.depthTexture=new fs(s.x,on)):(V.map=new Je(s.x,s.y),V.map.depthTexture=new In(s.x,s.y,on)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=Rn,this.type===Is?(V.map.depthTexture.compareFunction=X?el:tl,V.map.depthTexture.minFilter=Ve,V.map.depthTexture.magFilter=Ve):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Re,V.map.depthTexture.magFilter=Re);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,b);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let bt=0;bt<Q;bt++){let Ut=V.getCamera(bt);if(H.isPointLight){let Y=V.camera,gt=V.matrix,Tt=H.distance||Y.far;Tt!==Y.far&&(Y.far=Tt,Y.updateProjectionMatrix()),zs.setFromMatrixPosition(H.matrixWorld),Y.position.copy(zs),_l.copy(Y.position),_l.add(Ag[bt]),Y.up.copy(wg[bt]),Y.lookAt(_l),Y.updateMatrixWorld(),gt.makeTranslation(-zs.x,-zs.y,-zs.z),Th.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Th,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(V.map),i.clear());let Y=V.getViewport(bt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),N.viewport(a)}n=V.getFrustum(bt),y(_,b,Ut,H,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&S(V,b),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,w,L)};function S(A,_){let b=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Je(s.x,s.y,{format:Kn,type:cn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,b,d,M,null)}function E(A,_,b,I){let w=null,L=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)w=L;else if(w=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=w.uuid,F=_.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let B=R[F];B===void 0&&(B=w.clone(),R[F]=B,_.addEventListener("dispose",C)),w=B}if(w.visible=_.visible,w.wireframe=_.wireframe,I===Gi?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:f[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let N=i.properties.get(w);N.light=b}return w}function y(A,_,b,I,w,L){if(A.visible===!1)return;if(A.layers.test(w)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Gi)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let R=t.update(A),B=A.material;if(Array.isArray(B)){let H=R.groups;for(let V=0,et=H.length;V<et;V++){let X=H[V],Q=B[X.materialIndex];if(Q&&Q.visible){let tt=E(A,Q,I,L);A.onBeforeShadow(i,A,_,b,R,tt,X),i.renderBufferDirect(b,null,R,tt,A,X),A.onAfterShadow(i,A,_,b,R,tt,X)}}}else if(B.visible){let H=E(A,B,I,L);A.onBeforeShadow(i,A,_,b,R,H,null),i.renderBufferDirect(b,null,R,H,A,null),A.onAfterShadow(i,A,_,b,R,H,null)}}let F=A.children;for(let R=0,B=F.length;R<B;R++)y(F[R],_,b,I,w,L)}function C(A){A.target.removeEventListener("dispose",C);for(let b in c){let I=c[b],w=A.target.uuid;w in I&&(I[w].dispose(),delete I[w])}}}function Cg(i,t){function e(){let P=!1,$=new pe,q=null,ht=new pe(0,0,0,0);return{setMask:function(st){q!==st&&!P&&(i.colorMask(st,st,st,st),q=st)},setLocked:function(st){P=st},setClear:function(st,ot,It,Wt,it){it===!0&&(st*=Wt,ot*=Wt,It*=Wt),$.set(st,ot,It,Wt),ht.equals($)===!1&&(i.clearColor(st,ot,It,Wt),ht.copy($))},reset:function(){P=!1,q=null,ht.set(-1,0,0,0)}}}function n(){let P=!1,$=!1,q=null,ht=null,st=null;return{setReversed:function(ot){if($!==ot){let It=t.get("EXT_clip_control");ot?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),$=ot;let Wt=st;st=null,this.setClear(Wt)}},getReversed:function(){return $},setTest:function(ot){ot?xt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(ot){q!==ot&&!P&&(i.depthMask(ot),q=ot)},setFunc:function(ot){if($&&(ot=Zc[ot]),ht!==ot){switch(ot){case gr:i.depthFunc(i.NEVER);break;case _r:i.depthFunc(i.ALWAYS);break;case xr:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case vr:i.depthFunc(i.EQUAL);break;case yr:i.depthFunc(i.GEQUAL);break;case Mr:i.depthFunc(i.GREATER);break;case Sr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=ot}},setLocked:function(ot){P=ot},setClear:function(ot){st!==ot&&(st=ot,$&&(ot=1-ot),i.clearDepth(ot))},reset:function(){P=!1,q=null,ht=null,st=null,$=!1}}}function s(){let P=!1,$=null,q=null,ht=null,st=null,ot=null,It=null,Wt=null,it=null;return{setTest:function(Pt){P||(Pt?xt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Pt){$!==Pt&&!P&&(i.stencilMask(Pt),$=Pt)},setFunc:function(Pt,Ht,vt){(q!==Pt||ht!==Ht||st!==vt)&&(i.stencilFunc(Pt,Ht,vt),q=Pt,ht=Ht,st=vt)},setOp:function(Pt,Ht,vt){(ot!==Pt||It!==Ht||Wt!==vt)&&(i.stencilOp(Pt,Ht,vt),ot=Pt,It=Ht,Wt=vt)},setLocked:function(Pt){P=Pt},setClear:function(Pt){it!==Pt&&(i.clearStencil(Pt),it=Pt)},reset:function(){P=!1,$=null,q=null,ht=null,st=null,ot=null,It=null,Wt=null,it=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],M=null,p=!1,m=null,S=null,E=null,y=null,C=null,A=null,_=null,b=new Kt(0,0,0),I=0,w=!1,L=null,N=null,F=null,R=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,et=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=et>=2);let Q=null,tt={},bt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Y=new pe().fromArray(bt),gt=new pe().fromArray(Ut);function Tt(P,$,q,ht){let st=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<q;It++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D($+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return ot}let Lt={};Lt[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(Ri),St(!1),mt(Do),xt(i.CULL_FACE),lt(ci);function xt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Dt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function ue(P,$){return u[P]!==$?(i.bindFramebuffer(P,$),u[P]=$,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ft(P,$){let q=g,ht=!1;if(P){q=d.get($),q===void 0&&(q=[],d.set($,q));let st=P.textures;if(q.length!==st.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=st.length;ot<It;ot++)q[ot]=i.COLOR_ATTACHMENT0+ot;q.length=st.length,ht=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(q)}function qt(P){return M!==P?(i.useProgram(P),M=P,!0):!1}let Zt={[hi]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};Zt[xc]=i.MIN,Zt[vc]=i.MAX;let j={[yc]:i.ZERO,[Mc]:i.ONE,[Sc]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[Rc]:i.SRC_ALPHA_SATURATE,[Ac]:i.DST_COLOR,[Tc]:i.DST_ALPHA,[bc]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[wc]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[Cc]:i.CONSTANT_COLOR,[Ic]:i.ONE_MINUS_CONSTANT_COLOR,[Pc]:i.CONSTANT_ALPHA,[Lc]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(P,$,q,ht,st,ot,It,Wt,it,Pt){if(P===ci){p===!0&&(Dt(i.BLEND),p=!1);return}if(p===!1&&(xt(i.BLEND),p=!0),P!==mc){if(P!==m||Pt!==w){if((S!==hi||C!==hi)&&(i.blendEquation(i.FUNC_ADD),S=hi,C=hi),Pt)switch(P){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",P);break}else switch(P){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",P);break}E=null,y=null,A=null,_=null,b.set(0,0,0),I=0,m=P,w=Pt}return}st=st||$,ot=ot||q,It=It||ht,($!==S||st!==C)&&(i.blendEquationSeparate(Zt[$],Zt[st]),S=$,C=st),(q!==E||ht!==y||ot!==A||It!==_)&&(i.blendFuncSeparate(j[q],j[ht],j[ot],j[It]),E=q,y=ht,A=ot,_=It),(Wt.equals(b)===!1||it!==I)&&(i.blendColor(Wt.r,Wt.g,Wt.b,it),b.copy(Wt),I=it),m=P,w=!1}function rt(P,$){P.side===_n?Dt(i.CULL_FACE):xt(i.CULL_FACE);let q=P.side===He;$&&(q=!q),St(q),P.blending===Vi&&P.transparent===!1?lt(ci):lt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ht=P.stencilWrite;o.setTest(ht),ht&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(P){L!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),L=P)}function mt(P){P!==dc?(xt(i.CULL_FACE),P!==N&&(P===Do?i.cullFace(i.BACK):P===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),N=P}function Vt(P){P!==F&&(V&&i.lineWidth(P),F=P)}function Ct(P,$,q){P?(xt(i.POLYGON_OFFSET_FILL),(R!==$||B!==q)&&(R=$,B=q,a.getReversed()&&($=-$,q=-q),i.polygonOffset($,q))):Dt(i.POLYGON_OFFSET_FILL)}function Jt(P){P?xt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function Qt(P){P===void 0&&(P=i.TEXTURE0+H-1),Q!==P&&(i.activeTexture(P),Q=P)}function ie(P,$,q){q===void 0&&(Q===null?q=i.TEXTURE0+H-1:q=Q);let ht=tt[q];ht===void 0&&(ht={type:void 0,texture:void 0},tt[q]=ht),(ht.type!==P||ht.texture!==$)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(P,$||Lt[P]),ht.type=P,ht.texture=$)}function O(){let P=tt[Q];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ye(){try{i.compressedTexImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Yt(){try{i.compressedTexImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function le(){try{i.texSubImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function dt(){try{i.texSubImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function zt(){try{i.texStorage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function T(){try{i.texStorage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function x(){try{i.texImage2D(...arguments)}catch(P){Bt("WebGLState:",P)}}function k(){try{i.texImage3D(...arguments)}catch(P){Bt("WebGLState:",P)}}function nt(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function K(P,$){f[P]!==$&&(i.pixelStorei(P,$),f[P]=$)}function at(P){Y.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function ft(P){gt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),gt.copy(P))}function Z(P,$){let q=c.get($);q===void 0&&(q=new WeakMap,c.set($,q));let ht=q.get(P);ht===void 0&&(ht=i.getUniformBlockIndex($,P.name),i.uniformBlockBinding($,ht,ht),q.set(P,ht))}function J(P,$,q){let st=c.get($).get(P);l[st]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,q),l[st]=q)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,tt={},u={},l={},d=new WeakMap,g=[],M=null,p=!1,m=null,S=null,E=null,y=null,C=null,A=null,_=null,b=new Kt(0,0,0),I=0,w=!1,L=null,N=null,F=null,R=null,B=null,Y.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Dt,bindFramebuffer:ue,drawBuffers:Ft,useProgram:qt,setBlending:lt,setMaterial:rt,setFlipSided:St,setCullFace:mt,setLineWidth:Vt,setPolygonOffset:Ct,setScissorTest:Jt,activeTexture:Qt,bindTexture:ie,unbindTexture:O,compressedTexImage2D:ye,compressedTexImage3D:Yt,texImage2D:x,texImage3D:k,pixelStorei:K,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:zt,texStorage3D:T,texSubImage2D:le,texSubImage3D:dt,compressedTexSubImage2D:ve,compressedTexSubImage3D:Nt,scissor:at,viewport:ft,reset:ct}}function Ig(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,M=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function m(T,x){return p?new OffscreenCanvas(T,x):as("canvas")}function S(T,x,k){let nt=1,K=zt(T);if((K.width>k||K.height>k)&&(nt=k/Math.max(K.width,K.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let at=Math.floor(nt*K.width),ft=Math.floor(nt*K.height);u===void 0&&(u=m(at,ft));let Z=x?m(at,ft):u;return Z.width=at,Z.height=ft,Z.getContext("2d").drawImage(T,0,0,at,ft),Ot("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+ft+")."),Z}else return"data"in T&&Ot("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function E(T){return T.generateMipmaps}function y(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,x,k,nt,K,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft;nt&&(ft=t.get("EXT_texture_norm16"),ft||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8),k===i.UNSIGNED_SHORT&&ft&&(Z=ft.R16_EXT),k===i.SHORT&&ft&&(Z=ft.R16_SNORM_EXT)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),x===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8),k===i.UNSIGNED_SHORT&&ft&&(Z=ft.RG16_EXT),k===i.SHORT&&ft&&(Z=ft.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGB16_EXT),k===i.SHORT&&ft&&(Z=ft.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let J=at?rs:ee.getTransfer(K);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=J===ae?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGBA16_EXT),k===i.SHORT&&ft&&(Z=ft.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(T,x){let k;return T?x===null||x===on||x===di?k=i.DEPTH24_STENCIL8:x===ln?k=i.DEPTH32F_STENCIL8:x===Wi&&(k=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===on||x===di?k=i.DEPTH_COMPONENT24:x===ln?k=i.DEPTH_COMPONENT32F:x===Wi&&(k=i.DEPTH_COMPONENT16),k}function b(T,x){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Re&&T.minFilter!==Ve?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){let x=new WeakRef(T);n.get(T).__ref=x,g.add(x),M.register(T,x,x)}function w(T){let x=n.get(T).__ref;x!==void 0&&(g.delete(x),M.unregister(x))}function L(T){F(T.target)}function N(T){R(T.target)}function F(T){T.removeEventListener("dispose",L),w(T),H(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function R(T){T.removeEventListener("dispose",N),w(T),et(T)}function B(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):F(x))}g.clear(),f.clear()}function H(T){let x=n.get(T);if(x.__webglInit===void 0)return;let k=T.source,nt=d.get(k);if(nt){let K=nt[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(T),Object.keys(nt).length===0&&d.delete(k)}n.remove(T)}function V(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let k=T.source,nt=d.get(k);delete nt[x.__cacheKey],a.memory.textures--}function et(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let k=T.depthTexture;if(k&&k.renderTarget===T&&F(k),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let at=0;at<x.__webglFramebuffer[K].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[K][at]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let nt=T.textures;for(let K=0,at=nt.length;K<at;K++){let ft=n.get(nt[K]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(nt[K])}n.remove(T)}let X=0;function Q(){X=0}function tt(){return X}function bt(T){X=T}function Ut(){let T=X;return T>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function Y(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function gt(T,x){let k=n.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){let nt=T.image;if(nt===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(k,T,x);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function Tt(T,x){let k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){rt(k,T,x);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function Lt(T,x){let k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){rt(k,T,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function xt(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){St(k,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let Dt={[br]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},ue={[Re]:i.NEAREST,[Uc]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Ft={[zc]:i.NEVER,[nl]:i.ALWAYS,[kc]:i.LESS,[tl]:i.LEQUAL,[Gc]:i.EQUAL,[el]:i.GEQUAL,[Vc]:i.GREATER,[Hc]:i.NOTEQUAL};function qt(T,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ve||x.magFilter===sa||x.magFilter===Ls||x.magFilter===Pn||x.minFilter===Ve||x.minFilter===sa||x.minFilter===Ls||x.minFilter===Pn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Dt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Dt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Dt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Re||x.minFilter!==Ls&&x.minFilter!==Pn||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L),I(x));let nt=x.source,K=d.get(nt);K===void 0&&(K={},d.set(nt,K));let at=Y(x);if(at!==T.__cacheKey){K[at]===void 0&&(K[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[at].usedTimes++;let ft=K[T.__cacheKey];ft!==void 0&&(K[T.__cacheKey].usedTimes--,ft.usedTimes===0&&V(x)),T.__cacheKey=at,T.__webglTexture=K[at].texture}return k}function j(T,x,k){return Math.floor(Math.floor(T/k)/x)}function lt(T,x,k,nt){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,nt,x.data);else{at.sort((P,$)=>P.start-$.start);let ft=0;for(let P=1;P<at.length;P++){let $=at[ft],q=at[P],ht=$.start+$.count,st=j(q.start,x.width,4),ot=j($.start,x.width,4);q.start<=ht+1&&st===ot&&j(q.start+q.count-1,x.width,4)===st?$.count=Math.max($.count,q.start+q.count-$.start):(++ft,at[ft]=q)}at.length=ft+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let P=0,$=at.length;P<$;P++){let q=at[P],ht=Math.floor(q.start/4),st=Math.ceil(q.count/4),ot=ht%x.width,It=Math.floor(ht/x.width),Wt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,ot,It,Wt,it,k,nt,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function rt(T,x,k){let nt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=i.TEXTURE_3D);let K=Zt(T,x),at=x.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+k);let ft=n.get(at);if(at.version!==ft.__version||K===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let it=ee.getPrimaries(ee.workingColorSpace),Pt=x.colorSpace===Dn?null:ee.getPrimaries(x.colorSpace),Ht=x.colorSpace===Dn||it===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=S(x.image,!1,s.maxTextureSize);J=Nt(x,J);let ct=r.convert(x.format,x.colorSpace),P=r.convert(x.type),$=A(x.internalFormat,ct,P,x.normalized,x.colorSpace,x.isVideoTexture);qt(nt,x);let q,ht=x.mipmaps,st=x.isVideoTexture!==!0,ot=ft.__version===void 0||K===!0,It=at.dataReady,Wt=b(x,J);if(x.isDepthTexture)$=_(x.format===Ln,x.type),ot&&(st?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ct,P,null));else if(x.isDataTexture)if(ht.length>0){st&&ot&&e.texStorage2D(i.TEXTURE_2D,Wt,$,ht[0].width,ht[0].height);for(let it=0,Pt=ht.length;it<Pt;it++)q=ht[it],st?It&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ct,P,q.data):e.texImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,ct,P,q.data);x.generateMipmaps=!1}else st?(ot&&e.texStorage2D(i.TEXTURE_2D,Wt,$,J.width,J.height),It&&lt(x,J,ct,P)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ct,P,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,$,ht[0].width,ht[0].height,J.depth);for(let it=0,Pt=ht.length;it<Pt;it++)if(q=ht[it],x.format!==hn)if(ct!==null)if(st){if(It)if(x.layerUpdates.size>0){let Ht=hl(q.width,q.height,x.format,x.type);for(let vt of x.layerUpdates){let oe=q.data.subarray(vt*Ht/q.data.BYTES_PER_ELEMENT,(vt+1)*Ht/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,vt,q.width,q.height,1,ct,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ct,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,$,q.width,q.height,J.depth,0,q.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ct,P,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,$,q.width,q.height,J.depth,0,ct,P,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{st&&ot&&e.texStorage2D(i.TEXTURE_2D,Wt,$,ht[0].width,ht[0].height);for(let it=0,Pt=ht.length;it<Pt;it++)q=ht[it],x.format!==hn?ct!==null?st?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ct,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,q.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?It&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ct,P,q.data):e.texImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,ct,P,q.data)}else if(x.isDataArrayTexture)if(st){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,$,J.width,J.height,J.depth),It)if(x.layerUpdates.size>0){let it=hl(J.width,J.height,x.format,x.type);for(let Pt of x.layerUpdates){let Ht=J.data.subarray(Pt*it/J.data.BYTES_PER_ELEMENT,(Pt+1)*it/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,J.width,J.height,1,ct,P,Ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,P,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,ct,P,J.data);else if(x.isData3DTexture)st?(ot&&e.texStorage3D(i.TEXTURE_3D,Wt,$,J.width,J.height,J.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,P,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,ct,P,J.data);else if(x.isFramebufferTexture){if(ot)if(st)e.texStorage2D(i.TEXTURE_2D,Wt,$,J.width,J.height);else{let it=J.width,Pt=J.height;for(let Ht=0;Ht<Wt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,$,it,Pt,0,ct,P,null),it>>=1,Pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),f.add(x),it.onpaint=Pt=>{let Ht=Pt.changedElements;for(let vt of f)Ht.includes(vt.image)&&(vt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Ht=i.RGBA,vt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,vt,oe,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(st&&ot){let it=zt(ht[0]);e.texStorage2D(i.TEXTURE_2D,Wt,$,it.width,it.height)}for(let it=0,Pt=ht.length;it<Pt;it++)q=ht[it],st?It&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ct,P,q):e.texImage2D(i.TEXTURE_2D,it,$,ct,P,q);x.generateMipmaps=!1}else if(st){if(ot){let it=zt(J);e.texStorage2D(i.TEXTURE_2D,Wt,$,it.width,it.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,P,J)}else e.texImage2D(i.TEXTURE_2D,0,$,ct,P,J);E(x)&&x.mipmapsAutoUpdate===!0&&y(nt),ft.__version=at.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function St(T,x,k){if(x.image.length!==6)return;let nt=Zt(T,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);let at=n.get(K);if(K.version!==at.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);let ft=ee.getPrimaries(ee.workingColorSpace),Z=x.colorSpace===Dn?null:ee.getPrimaries(x.colorSpace),J=x.colorSpace===Dn||ft===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,$=[];for(let vt=0;vt<6;vt++)!ct&&!P?$[vt]=S(x.image[vt],!0,s.maxCubemapSize):$[vt]=P?x.image[vt].image:x.image[vt],$[vt]=Nt(x,$[vt]);let q=$[0],ht=r.convert(x.format,x.colorSpace),st=r.convert(x.type),ot=A(x.internalFormat,ht,st,x.normalized,x.colorSpace),It=x.isVideoTexture!==!0,Wt=at.__version===void 0||nt===!0,it=K.dataReady,Pt=b(x,q);qt(i.TEXTURE_CUBE_MAP,x);let Ht;if(x.isDepthTexture){if(ot=_(x.format===Ln,x.type),Wt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,q.width,q.height,0,ht,st,null)}else if(ct){It&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ot,q.width,q.height);for(let vt=0;vt<6;vt++){Ht=$[vt].mipmaps;for(let oe=0;oe<Ht.length;oe++){let Ee=Ht[oe];x.format!==hn?ht!==null?It?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe,0,0,Ee.width,Ee.height,ht,Ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe,ot,Ee.width,Ee.height,0,Ee.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe,0,0,Ee.width,Ee.height,ht,st,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe,ot,Ee.width,Ee.height,0,ht,st,Ee.data)}}}else{if(Ht=x.mipmaps,It&&Wt){Ht.length>0&&Pt++;let vt=zt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ot,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(P){It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,$[vt].width,$[vt].height,ht,st,$[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,$[vt].width,$[vt].height,0,ht,st,$[vt].data);for(let oe=0;oe<Ht.length;oe++){let Un=Ht[oe].image[vt].image;It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe+1,0,0,Un.width,Un.height,ht,st,Un.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe+1,ot,Un.width,Un.height,0,ht,st,Un.data)}}else{It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ht,st,$[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ot,ht,st,$[vt]);for(let oe=0;oe<Ht.length;oe++){let Ee=Ht[oe];It?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe+1,0,0,ht,st,Ee.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,oe+1,ot,ht,st,Ee.image[vt])}}}E(x)&&x.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),at.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function mt(T,x,k,nt,K,at){let ft=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),J=A(k.internalFormat,ft,Z,k.normalized,k.colorSpace),ct=n.get(x),P=n.get(k);if(P.__renderTarget=x,!ct.__hasExternalTextures){let $=Math.max(1,x.width>>at),q=Math.max(1,x.height>>at);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,at,J,$,q,x.depth,0,ft,Z,null):e.texImage2D(K,at,J,$,q,0,ft,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,K,P.__webglTexture,0,le(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,K,P.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(T,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let nt=x.depthTexture,K=nt&&nt.isDepthTexture?nt.type:null,at=_(x.stencilBuffer,K),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),at,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,T)}else{let nt=x.textures;for(let K=0;K<nt.length;K++){let at=nt[K],ft=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),J=A(at.internalFormat,ft,Z,at.normalized,at.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),J,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,x,k){let nt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let at=nt?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),nt?xt(x.depthTexture,0):gt(x.depthTexture,0);let ft=K.__webglTexture,Z=le(x),J=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ct=x.depthTexture.format===Ln?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Rn)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,J,ft,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ct,J,ft,0);else if(x.depthTexture.format===Ln)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,J,ft,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ct,J,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(T){let x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let nt=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),nt){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,nt.removeEventListener("dispose",K)};nt.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=nt}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Ct(x.__webglFramebuffer[nt],T,nt);else T.texture.mipmaps.length>0?Ct(x.__webglFramebuffer[0],T,0):Ct(x.__webglFramebuffer,T,0);else if(k){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]===void 0)x.__webglDepthbuffer[nt]=i.createRenderbuffer(),Vt(x.__webglDepthbuffer[nt],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Vt(x.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(T,x,k){let nt=n.get(T);x!==void 0&&mt(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Jt(T)}function ie(T){let x=T.texture,k=n.get(T),nt=n.get(x);T.addEventListener("dispose",N),I(T);let K=T.textures,at=T.isWebGLCubeRenderTarget===!0,ft=K.length>1;if(ft||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=x.version,a.memory.textures++),at){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)k.__webglFramebuffer[Z][J]=i.createFramebuffer()}else k.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)k.__webglFramebuffer[Z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Z=0,J=K.length;Z<J;Z++){let ct=n.get(K[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&dt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let J=K[Z];k.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let ct=r.convert(J.format,J.colorSpace),P=r.convert(J.type),$=A(J.internalFormat,ct,P,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),q=le(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)mt(k.__webglFramebuffer[Z][J],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else mt(k.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(x)?y(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let Z=0,J=K.length;Z<J;Z++){let ct=K[Z],P=n.get(ct),$=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,P.__webglTexture),qt($,ct),mt(k.__webglFramebuffer,T,ct,i.COLOR_ATTACHMENT0+Z,$,0),E(ct)&&y($)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,nt.__webglTexture),qt(Z,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)mt(k.__webglFramebuffer[J],T,x,i.COLOR_ATTACHMENT0,Z,J);else mt(k.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Z,0);E(x)?y(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Jt(T)}function O(T){let x=T.textures;for(let k=0,nt=x.length;k<nt;k++){let K=x[k];if(E(K)&&K.mipmapsAutoUpdate===!0){let at=C(T),ft=n.get(K).__webglTexture;e.bindTexture(at,ft),y(at),e.unbindTexture()}}}let ye=[];function Yt(T){if(T.samples>0){if(dt(T)===!1){let x=T.textures,k=T.width,nt=T.height,K=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(T),Z=x.length>1;if(Z)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let P=n.get(x[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,k,nt,0,0,k,nt,K,i.NEAREST),l===!0&&(ye.length=0,ye.push(i.COLOR_ATTACHMENT0+ct),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ye.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let P=n.get(x[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function le(T){return Math.min(s.maxSamples,T.samples)}function dt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Nt(T,x){let k=T.colorSpace,nt=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==ss&&k!==Dn&&(ee.getTransfer(k)===ae?(nt!==hn||K!==Xe)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",k)),x}function zt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Ut,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=bt,this.setTexture2D=gt,this.setTexture2DArray=Tt,this.setTexture3D=Lt,this.setTextureCube=xt,this.rebindTextures=Qt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=dt,this.dispose=B}function Pg(i,t){function e(n,s=Dn){let r,a=ee.getTransfer(s);if(n===Xe)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yo)return i.BYTE;if(n===Zo)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===Qo)return i.RGB;if(n===hn)return i.RGBA;if(n===Rn)return i.DEPTH_COMPONENT;if(n===Ln)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===la)return i.RED_INTEGER;if(n===Kn)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Ds||n===Ns||n===Us||n===Fs)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===xa||n===va||n===Os||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xa)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Os)return r.COMPRESSED_RG11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ma||n===Sa||n===ba||n===Ta||n===Ea||n===Aa||n===wa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===za||n===Bs||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ps(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},El=class extends pn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,M=typeof XRWebGLBinding!="undefined",p=new Tl,m={},S=e.getContextAttributes(),E=null,y=null,C=[],A=[],_=new _t,b=null,I=null,w=new Ge;w.viewport=new pe;let L=new Ge;L.viewport=new pe;let N=[w,L],F=new ta,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let gt=C[Y];return gt===void 0&&(gt=new Li,C[Y]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Y){let gt=C[Y];return gt===void 0&&(gt=new Li,C[Y]=gt),gt.getGripSpace()},this.getHand=function(Y){let gt=C[Y];return gt===void 0&&(gt=new Li,C[Y]=gt),gt.getHandSpace()};function H(Y){let gt=A.indexOf(Y.inputSource);if(gt===-1)return;let Tt=C[gt];Tt!==void 0&&(Tt.update(Y.inputSource,Y.frame,c||a),Tt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<C.length;Y++){let gt=A[Y];gt!==null&&(A[Y]=null,C[Y].disconnect(gt))}R=null,B=null,p.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),I!==null){let Y=I.camera;Y.fov=I.fov,Y.zoom=I.zoom,Y.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Lt=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=S.stencil?Ln:Rn,Lt=S.stencil?di:on);let Dt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Je(u.textureWidth,u.textureHeight,{format:hn,type:Xe,depthTexture:new In(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Je(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(Y){for(let gt=0;gt<Y.removed.length;gt++){let Tt=Y.removed[gt],Lt=A.indexOf(Tt);Lt>=0&&(A[Lt]=null,C[Lt].disconnect(Tt))}for(let gt=0;gt<Y.added.length;gt++){let Tt=Y.added[gt],Lt=A.indexOf(Tt);if(Lt===-1){for(let Dt=0;Dt<C.length;Dt++)if(Dt>=A.length){A.push(Tt),Lt=Dt;break}else if(A[Dt]===null){A[Dt]=Tt,Lt=Dt;break}if(Lt===-1)break}let xt=C[Lt];xt&&xt.connect(Tt)}}function X(Y,gt){gt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(gt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let gt=Y.near,Tt=Y.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),F.near=L.near=w.near=gt,F.far=L.far=w.far=Tt,(R!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),R=F.near,B=F.far),F.layers.mask=Y.layers.mask|6,w.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;let Lt=Y.parent,xt=F.cameras;X(F,Lt);for(let Dt=0;Dt<xt.length;Dt++)X(xt[Dt],Lt);F.projectionMatrix.copy(w.projectionMatrix),F.projectionMatrixInverse.copy(w.projectionMatrixInverse),I===null&&Y.isPerspectiveCamera&&(I={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,F,Lt)};function Q(Y,gt,Tt){Tt===null?Y.matrix.copy(gt.matrixWorld):(Y.matrix.copy(Tt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(gt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(gt.projectionMatrix),Y.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ar*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return m[Y]};let tt=null;function bt(Y,gt){if(h=gt.getViewerPose(c||a),g=gt,h!==null){let Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Lt=!1;Tt.length!==F.cameras.length&&(F.cameras.length=0,Lt=!0);for(let Ft=0;Ft<Tt.length;Ft++){let qt=Tt[Ft],Zt=null;if(d!==null)Zt=d.getViewport(qt);else{let lt=f.getViewSubImage(u,qt);Zt=lt.viewport,Ft===0&&(t.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(y))}let j=N[Ft];j===void 0&&(j=new Ge,j.layers.enable(Ft),j.viewport=new pe,N[Ft]=j),j.matrix.fromArray(qt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(qt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Ft===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Lt===!0&&F.cameras.push(j)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Ft=f.getDepthInformation(Tt[0]);Ft&&Ft.isValid&&Ft.texture&&p.init(Ft,s.renderState)}if(xt&&xt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let Ft=0;Ft<Tt.length;Ft++){let qt=Tt[Ft].camera;if(qt){let Zt=m[qt];Zt||(Zt=new ps,m[qt]=Zt);let j=f.getCameraImage(qt);Zt.sourceTexture=j}}}}for(let Tt=0;Tt<C.length;Tt++){let Lt=A[Tt],xt=C[Tt];Lt!==null&&xt!==void 0&&xt.update(Lt,gt,c||a)}tt&&tt(Y,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let Ut=new Eh;Ut.setAnimationLoop(bt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},Ng=new fe,Uh=new kt;Uh.set(-1,0,0,0,1,0,0,0,1);function Ug(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ol(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===He&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===He&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),E=S.envMap,y=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Uh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===He&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fg(i,t,e,n){let s={},r={};function a(S,E){let y=E.program;n.uniformBlockBinding(S,y,s[S.id])}function o(S,E){let y=s[S.id];y===void 0&&(g(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",p));let C=E.program;n.updateUBOMapping(S,C);let A=t.render.frame;r[S.id]!==A&&(c(S),r[S.id]=A)}function l(S){let E=i.createBuffer(),y=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){let E=s[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,_=y.length;A<_;A++){let b=y[A];if(Array.isArray(b))for(let I=0,w=b.length;I<w;I++)h(b[I],A,I,C);else h(b,A,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,y,C){if(u(S,E,y,C)===!0){let A=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let I=0;I<_.length;I++){let w=_[I],L=M(w,!0);f(w,S.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,S.__data)}}function f(S,E,y){typeof S=="number"||typeof S=="boolean"?E[y]=S:S.isMatrix3?(E[y]=S.elements[0],E[y+1]=S.elements[1],E[y+2]=S.elements[2],E[y+3]=0,E[y+4]=S.elements[3],E[y+5]=S.elements[4],E[y+6]=S.elements[5],E[y+7]=0,E[y+8]=S.elements[6],E[y+9]=S.elements[7],E[y+10]=S.elements[8],E[y+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-y),y):S.toArray(E,y)}function u(S,E,y,C){let A=S.value,_=E+"_"+y;if(Array.isArray(A)){C[_]===void 0&&(C[_]=[]);let b=C[_],I=!1;for(let w=0;w<A.length;w++)d(A[w],b,w)===!0&&(I=!0);return I}return d(A,C,_)}function d(S,E,y){if(E[y]===void 0)return typeof S=="number"||typeof S=="boolean"?E[y]=S:ArrayBuffer.isView(S)?E[y]=S.slice():E[y]=S.clone(),!0;{let C=E[y];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return E[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function g(S){let E=S.uniforms,y=0,C=16;for(let _=0,b=E.length;_<b;_++){let I=Array.isArray(E[_])?E[_]:[E[_]];for(let w=0,L=I.length;w<L;w++){let N=I[w],F=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(E[_])||Array.isArray(N.value),B=y;for(let V=0,et=F.length;V<et;V++){let X=F[V],Q=M(X,R),tt=y%C,bt=tt%Q.boundary,Ut=tt+bt;y+=bt,Ut!==0&&C-Ut<Q.storage&&(y+=C-Ut),V===0&&(B=y),y+=Q.storage}let H=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new H((y-B)/Float32Array.BYTES_PER_ELEMENT),N.__offset=B}}let A=y%C;return A>0&&(y+=C-A),S.__size=y,S.__cache={},this}function M(S,E){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){let E=S.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var Og=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function Bg(){return vn===null&&(vn=new Lr(Og,16,16,Kn,cn),vn.name="DFG_LUT",vn.minFilter=Ve,vn.magFilter=Ve,vn.wrapS=dn,vn.wrapT=dn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var Xa=class{constructor(t={}){let{canvas:e=Xc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Xe}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=d,p=new Set([ha,ca,la]),m=new Set([Xe,on,Wi,di,aa,oa]),S=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},C=null,A=null,_=[],b=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,L=!1,N=null,F=null,R=null,B=null;this._outputColorSpace=ke;let H=0,V=0,et=null,X=-1,Q=null,tt=new pe,bt=new pe,Ut=null,Y=new Kt(0),gt=0,Tt=e.width,Lt=e.height,xt=1,Dt=null,ue=null,Ft=new pe(0,0,Tt,Lt),qt=new pe(0,0,Tt,Lt),Zt=!1,j=new Xn,lt=new Dr,rt=!1,St=!1,mt=new fe,Vt=new D,Ct=new pe,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ie(){return et===null?xt:1}let O=n;function ye(v,U){return e.getContext(v,U)}let Yt,le,dt,ve,Nt,zt,T,x,k,nt,K,at,ft,Z,J,ct,P,$,q,ht,st,ot,It;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){let U="webgl2";if(O=ye(U,v),O===null)throw ye(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(v){throw e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Bt("WebGLRenderer: "+v.message),v}function Wt(){Yt=new Jp(O),Yt.init(),st=new Pg(O,Yt),le=new Bp(O,Yt,t,st),dt=new Cg(O,Yt),le.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),F=O.createFramebuffer(),R=O.createFramebuffer(),B=O.createFramebuffer(),ve=new Qp(O),Nt=new mg,zt=new Ig(O,Yt,dt,Nt,le,st,ve),T=new Zp(w),x=new ju(O),ot=new Fp(O,x),k=new $p(O,x,ve,ot),nt=new tm(O,k,x,ot,ve),$=new jp(O,le,zt),J=new zp(Nt),K=new pg(w,T,Yt,le,ot,J),at=new Ug(w,Nt),ft=new _g,Z=new bg(Yt),P=new Up(w,T,dt,nt,g,l),ct=new Rg(w,nt,le),It=new Fg(O,ve,le,dt),q=new Op(O,Yt,ve),ht=new Kp(O,Yt,ve),ve.programs=K.programs,w.capabilities=le,w.extensions=Yt,w.properties=Nt,w.renderLists=ft,w.shadowMap=ct,w.state=dt,w.info=ve}M!==Xe&&(I=new nm(M,e.width,e.height,o,s,r));let it=new El(w,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=Yt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Yt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(v){v!==void 0&&(xt=v,this.setSize(Tt,Lt,!1))},this.getSize=function(v){return v.set(Tt,Lt)},this.setSize=function(v,U,W=!0){if(it.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=v,Lt=U,e.width=Math.floor(v*xt),e.height=Math.floor(U*xt),W===!0&&(e.style.width=v+"px",e.style.height=U+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(Tt*xt,Lt*xt).floor()},this.setDrawingBufferSize=function(v,U,W){Tt=v,Lt=U,xt=W,e.width=Math.floor(v*W),e.height=Math.floor(U*W),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(M===Xe){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(Ft)},this.setViewport=function(v,U,W,z){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,U,W,z),dt.viewport(tt.copy(Ft).multiplyScalar(ie()).round())},this.getScissor=function(v){return v.copy(qt)},this.setScissor=function(v,U,W,z){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,U,W,z),dt.scissor(bt.copy(qt).multiplyScalar(ie()).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(v){dt.setScissorTest(Zt=v)},this.setOpaqueSort=function(v){Dt=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,W=!0){let z=0;if(v){let G=!1;if(et!==null){let pt=et.texture.format;G=p.has(pt)}if(G){let pt=et.texture.type,Et=m.has(pt),ut=P.getClearColor(),Mt=P.getClearAlpha(),Rt=ut.r,Gt=ut.g,jt=ut.b;Et?(S[0]=Rt,S[1]=Gt,S[2]=jt,S[3]=Mt,O.clearBufferuiv(O.COLOR,0,S)):(E[0]=Rt,E[1]=Gt,E[2]=jt,E[3]=Mt,O.clearBufferiv(O.COLOR,0,E))}else z|=O.COLOR_BUFFER_BIT}U&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),P.dispose(),ft.dispose(),Z.dispose(),zt.dispose(),Nt.dispose(),T.dispose(),nt.dispose(),k.dispose(),ot.dispose(),It.dispose(),K.dispose(),it.dispose(),it.removeEventListener("sessionstart",wl),it.removeEventListener("sessionend",Rl),Qn.stop()};function Pt(v){v.preventDefault(),sl("WebGLRenderer: Context Lost."),L=!0}function Ht(){sl("WebGLRenderer: Context Restored."),L=!1;let v=ve.autoReset,U=ct.enabled,W=ct.autoUpdate,z=ct.needsUpdate,G=ct.type;Wt(),ve.autoReset=v,ct.enabled=U,ct.autoUpdate=W,ct.needsUpdate=z,ct.type=G}function vt(v){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function oe(v){let U=v.target;U.removeEventListener("dispose",oe),Ee(U)}function Ee(v){Un(v),Nt.remove(v)}function Un(v){let U=Nt.get(v).programs;U!==void 0&&(U.forEach(function(W){K.releaseProgram(W)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,W,z,G,pt){U===null&&(U=Jt);let Et=G.isMesh&&G.matrixWorld.determinantAffine()<0,ut=kh(v,U,W,z,G);dt.setMaterial(z,Et);let Mt=W.index,Rt=1;if(z.wireframe===!0){if(Mt=k.getWireframeAttribute(W),Mt===void 0)return;Rt=2}let Gt=W.drawRange,jt=W.attributes.position,At=Gt.start*Rt,te=(Gt.start+Gt.count)*Rt;pt!==null&&(At=Math.max(At,pt.start*Rt),te=Math.min(te,(pt.start+pt.count)*Rt)),Mt!==null?(At=Math.max(At,0),te=Math.min(te,Mt.count)):jt!=null&&(At=Math.max(At,0),te=Math.min(te,jt.count));let Me=te-At;if(Me<0||Me===1/0)return;ot.setup(G,z,ut,W,Mt);let he,ce=q;if(Mt!==null&&(he=x.get(Mt),ce=ht,ce.setIndex(he)),G.isMesh)z.wireframe===!0?(dt.setLineWidth(z.wireframeLinewidth*ie()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(G.isLine){let De=z.linewidth;De===void 0&&(De=1),dt.setLineWidth(De*ie()),G.isLineSegments?ce.setMode(O.LINES):G.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else G.isPoints?ce.setMode(O.POINTS):G.isSprite&&ce.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let De=G._multiDrawStarts,wt=G._multiDrawCounts,ze=G._multiDrawCount,re=Mt?x.get(Mt).bytesPerElement:1,jn=Nt.get(z).currentProgram.getUniforms();for(let Ne=0;Ne<ze;Ne++)jn.setValue(O,"_gl_DrawID",Ne),ce.render(De[Ne]/re,wt[Ne])}else if(G.isInstancedMesh)ce.renderInstances(At,Me,G.count);else if(W.isInstancedBufferGeometry){let De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wt=Math.min(W.instanceCount,De);ce.renderInstances(At,Me,wt)}else ce.render(At,Me)};function Al(v,U,W,z){N!==null&&v.isNodeMaterial&&N.setObject(z,v),rt===!0&&J.setState(v,W,!1),v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=He,v.needsUpdate=!0,Zi(v,U,z),v.side=$n,v.needsUpdate=!0,Zi(v,U,z),v.side=_n):Zi(v,U,z)}this.compile=function(v,U,W=null){W===null&&(W=v),N!==null&&N.renderStart(v,U,W),A=Z.get(W),A.init(U),b.push(A),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),v!==W&&v.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),N!==null&&N.updateLights(A.state.lightsArray),St=this.localClippingEnabled,rt=J.init(this.clippingPlanes,St),rt===!0&&J.setGlobalState(this.clippingPlanes,U),N!==null&&ct.render(A.state.shadowsArray,W,U);let z=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){let ut=pt[Et];Al(ut,W,U,G),z.add(ut)}else Al(pt,W,U,G),z.add(pt)}),A=b.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(v,U,W=null){let z=this.compile(v,U,W);return new Promise(G=>{function pt(){if(z.forEach(function(Et){let Mt=Nt.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&z.delete(Et)}),z.size===0){G(v);return}setTimeout(pt,10)}Yt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Za=null;function Bh(v){Za&&Za(v)}function wl(){Qn.stop()}function Rl(){Qn.start()}let Qn=new Eh;Qn.setAnimationLoop(Bh),typeof self!="undefined"&&Qn.setContext(self),this.setAnimationLoop=function(v){Za=v,it.setAnimationLoop(v),v===null?Qn.stop():Qn.start()},it.addEventListener("sessionstart",wl),it.addEventListener("sessionend",Rl),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(v,U);let W=it.enabled===!0&&it.isPresenting===!0,z=I!==null&&(et===null||W)&&I.begin(w,et);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),v.isScene===!0&&v.onBeforeRender(w,v,U,et),A=Z.get(v,b.length),A.init(U),A.state.textureUnits=zt.getTextureUnits(),b.push(A),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?lt.setFromArrayCamera(U):j.setFromProjectionMatrix(mt,je,U.reversedDepth),St=this.localClippingEnabled,rt=J.init(this.clippingPlanes,St),C=ft.get(v,_.length),C.init(),_.push(C),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Et=w.xr.getDepthSensingMesh();Et!==null&&Ja(Et,U,-1/0,w.sortObjects)}Ja(v,U,0,w.sortObjects),C.finish(),N!==null&&N.updateLights(A.state.lightsArray),w.sortObjects===!0&&C.sort(Dt,ue),Qt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Qt&&P.addToRenderList(C,v),this.info.autoReset===!0&&this.info.reset(),rt===!0&&J.beginShadows();let G=A.state.shadowsArray;if(ct.render(G,v,U),rt===!0&&J.endShadows(),(z&&I.hasRenderPass())===!1){let Et=C.opaque,ut=C.transmissive;if(A.setupLights(),U.isArrayCamera){let Mt=U.cameras;if(ut.length>0)for(let Rt=0,Gt=Mt.length;Rt<Gt;Rt++){let jt=Mt[Rt];Il(Et,ut,v,jt)}Qt&&P.render(v);for(let Rt=0,Gt=Mt.length;Rt<Gt;Rt++){let jt=Mt[Rt];Cl(C,v,jt,jt.viewport)}}else ut.length>0&&Il(Et,ut,v,U),Qt&&P.render(v),Cl(C,v,U)}et!==null&&V===0&&(zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et)),z&&I.end(w),v.isScene===!0&&v.onAfterRender(w,v,U),ot.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(A=b[b.length-1],zt.setTextureUnits(A.state.textureUnits),rt===!0&&J.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,N!==null&&N.renderEnd()};function Ja(v,U,W,z){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let Et=U.isArrayCamera?lt:j;if(!v.frustumCulled||v.intersectsFrustum(Et)){z&&Ct.setFromMatrixPosition(v.matrixWorld).applyMatrix4(mt);let ut=nt.update(v),Mt=v.material;Mt.visible&&C.push(v,ut,Mt,W,Ct.z,null,U)}}else if(v.isMesh||v.isLine||v.isPoints){let Et=U.isArrayCamera?lt:j;if(!v.frustumCulled||v.intersectsFrustum(Et)){let ut=nt.update(v),Mt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ct.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ct.copy(ut.boundingSphere.center)),Ct.applyMatrix4(v.matrixWorld).applyMatrix4(mt)),Array.isArray(Mt)){let Rt=ut.groups;for(let Gt=0,jt=Rt.length;Gt<jt;Gt++){let At=Rt[Gt],te=Mt[At.materialIndex];te&&te.visible&&C.push(v,ut,te,W,Ct.z,At,U)}}else Mt.visible&&C.push(v,ut,Mt,W,Ct.z,null,U)}}}let pt=v.children;for(let Et=0,ut=pt.length;Et<ut;Et++)Ja(pt[Et],U,W,z)}function Cl(v,U,W,z){let{opaque:G,transmissive:pt,transparent:Et}=v;A.setupLightsView(W),rt===!0&&J.setGlobalState(w.clippingPlanes,W),z&&dt.viewport(tt.copy(z)),G.length>0&&Ws(G,U,W),pt.length>0&&Ws(pt,U,W),Et.length>0&&Ws(Et,U,W),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Il(v,U,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let At=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Je(1,1,{generateMipmaps:!0,type:At?cn:Xe,minFilter:Pn,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let pt=A.state.transmissionRenderTarget[z.id],Et=z.viewport||tt;pt.setSize(Et.z*w.transmissionResolutionScale,Et.w*w.transmissionResolutionScale);let ut=w.getRenderTarget(),Mt=w.getActiveCubeFace(),Rt=w.getActiveMipmapLevel();w.setRenderTarget(pt),w.getClearColor(Y),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),Qt&&P.render(W);let Gt=w.toneMapping;w.toneMapping=xn;let jt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),rt===!0&&J.setGlobalState(w.clippingPlanes,z),Ws(v,W,z),zt.updateMultisampleRenderTarget(pt),zt.updateRenderTargetMipmap(pt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let te=0,Me=U.length;te<Me;te++){let he=U[te],{object:ce,geometry:De,material:wt,group:ze}=he;if(wt.side===_n&&ce.layers.test(z.layers)){let re=wt.side;wt.side=He,wt.needsUpdate=!0,Pl(ce,W,z,De,wt,ze),wt.side=re,wt.needsUpdate=!0,At=!0}}At===!0&&(zt.updateMultisampleRenderTarget(pt),zt.updateRenderTargetMipmap(pt))}w.setRenderTarget(ut,Mt,Rt),w.setClearColor(Y,gt),jt!==void 0&&(z.viewport=jt),w.toneMapping=Gt}function Ws(v,U,W){let z=U.isScene===!0?U.overrideMaterial:null;for(let G=0,pt=v.length;G<pt;G++){let Et=v[G],{object:ut,geometry:Mt,group:Rt}=Et,Gt=Et.material;Gt.allowOverride===!0&&z!==null&&(Gt=z),ut.layers.test(W.layers)&&Pl(ut,U,W,Mt,Gt,Rt)}}function Pl(v,U,W,z,G,pt){N!==null&&G.isNodeMaterial&&N.setObject(v,G),v.onBeforeRender(w,U,W,z,G,pt),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(w,U,W,z,v,pt),G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=He,G.needsUpdate=!0,w.renderBufferDirect(W,U,z,G,v,pt),G.side=$n,G.needsUpdate=!0,w.renderBufferDirect(W,U,z,G,v,pt),G.side=_n):w.renderBufferDirect(W,U,z,G,v,pt),v.onAfterRender(w,U,W,z,G,pt)}function Ll(v){let U=0;for(let W of v)W.texture!==null&&U++;return U}function Zi(v,U,W){U.isScene!==!0&&(U=Jt);let z=Nt.get(v),G=A.state.lights,pt=A.state.shadowsArray,Et=G.state.version,ut=K.getParameters(v,G.state,pt,U,W,A.state.lightProbeGridArray),Mt=K.getProgramCacheKey(ut),Rt=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let Gt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=T.get(v.envMap||z.environment,Gt),z.envMapRotation=z.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Rt===void 0&&(v.addEventListener("dispose",oe),Rt=new Map,z.programs=Rt,z.programVariants=new Map);let jt=Rt.get(Mt);if(jt!==void 0){if(z.currentProgram===jt&&z.lightsStateVersion===Et)return Nl(v,ut),jt}else ut.uniforms=K.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,W,ut),v.onBeforeCompile(ut,w),jt=K.acquireProgram(ut,Mt),Rt.set(Mt,jt),z.uniforms=ut.uniforms;let At=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=J.uniform),Nl(v,ut),z.needsLights=Vh(v),z.lightsStateVersion=Et,z.needsLights&&(At.ambientLightColor.value=G.state.ambient,At.lightProbe.value=G.state.probe,At.sunLights.value=G.state.sun,At.sunLightShadows.value=G.state.sunShadow,At.directionalLights.value=G.state.directional,At.directionalLightShadows.value=G.state.directionalShadow,At.spotLights.value=G.state.spot,At.spotLightShadows.value=G.state.spotShadow,At.rectAreaLights.value=G.state.rectArea,At.ltc_1.value=G.state.rectAreaLTC1,At.ltc_2.value=G.state.rectAreaLTC2,At.pointLights.value=G.state.point,At.pointLightShadows.value=G.state.pointShadow,At.hemisphereLights.value=G.state.hemi,At.sunShadowMatrix.value=G.state.sunShadowMatrix,At.sunShadowCascade.value=G.state.sunShadowCascade,At.directionalShadowMatrix.value=G.state.directionalShadowMatrix,At.spotLightMatrix.value=G.state.spotLightMatrix,At.spotLightMap.value=G.state.spotLightMap,At.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Ll(A.state.lightProbeGridArray),z.currentProgram=jt,z.uniformsList=null,jt}function zh(v,U,W,z,G){let pt=Nt.get(v),Et=pt.currentProgram.id+","+z+","+G,ut=pt.programVariants.get(Et);return ut===void 0?(ut=Zi(v,U,W),pt.programVariants.set(Et,ut)):(pt.currentProgram=ut,pt.uniformsList=null,pt.outputColorSpace=z,pt.toneMapping=G),ut}function Dl(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=qi.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Nl(v,U){let W=Nt.get(v);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function kh(v,U,W,z,G){U.isScene!==!0&&(U=Jt),zt.resetTextureUnits();let pt=U.fog,Et=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,ut=et===null?w.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ee.workingColorSpace,Mt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Rt=T.get(z.envMap||Et,Mt),Gt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,jt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!W.morphAttributes.position,te=!!W.morphAttributes.normal,Me=!!W.morphAttributes.color,he=xn;z.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(he=w.toneMapping);let ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,De=ce!==void 0?ce.length:0,wt=Nt.get(z),ze=A.state.lights;if(rt===!0&&(St===!0||v!==Q)){let me=v===Q&&z.id===X;J.setState(z,v,me)}let re=!1,jn=!1;z.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==ze.state.version||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==Rt||z.fog===!0&&wt.fog!==pt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==J.numPlanes||wt.numIntersection!==J.numIntersection)||wt.vertexAlphas!==Gt||wt.vertexTangents!==jt||wt.morphTargets!==At||wt.morphNormals!==te||wt.morphColors!==Me||wt.morphTargetsCount!==De||wt.numLightProbeGrids!==Ll(A.state.lightProbeGridArray)?re=!0:(wt.outputColorSpace!==ut||wt.toneMapping!==he)&&(jn=!0):(re=!0,wt.__version=z.version);let Ne=wt.currentProgram;(re===!0||jn===!0)&&(Ne=jn===!0?zh(z,U,G,ut,he):Zi(z,U,G),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Ne,wt));let Xs=!1,Fn=!1,ti=!1,ne=Ne.getUniforms(),Ie=wt.uniforms;if(dt.useProgram(Ne.program)&&(Xs=!0,Fn=!0,ti=!0),z.id!==X&&(X=z.id,Fn=!0),Xs||Q!==v){dt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ne.setValue(O,"projectionMatrix",v.projectionMatrix),ne.setValue(O,"viewMatrix",v.matrixWorldInverse);let Ae=ne.map.cameraPosition;Ae!==void 0&&Ae.setValue(O,Vt.setFromMatrixPosition(v.matrixWorld)),le.logarithmicDepthBuffer&&ne.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ne.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Fn=!0,ti=!0)}if(wt.needsLights&&(ze.state.sunShadowMap.length>0&&ne.setValue(O,"sunShadowMap",ze.state.sunShadowMap,zt),ze.state.directionalShadowMap.length>0&&ne.setValue(O,"directionalShadowMap",ze.state.directionalShadowMap,zt),ze.state.spotShadowMap.length>0&&ne.setValue(O,"spotShadowMap",ze.state.spotShadowMap,zt),ze.state.pointShadowMap.length>0&&ne.setValue(O,"pointShadowMap",ze.state.pointShadowMap,zt)),G.isSkinnedMesh){ne.setOptional(O,G,"bindMatrix"),ne.setOptional(O,G,"bindMatrixInverse");let me=G.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ne.setValue(O,"boneTexture",me.boneTexture,zt))}G.isBatchedMesh&&(ne.setOptional(O,G,"batchingTexture"),ne.setValue(O,"batchingTexture",G._matricesTexture,zt),ne.setOptional(O,G,"batchingIdTexture"),ne.setValue(O,"batchingIdTexture",G._indirectTexture,zt),ne.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ne.setValue(O,"batchingColorTexture",G._colorsTexture,zt));let en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&$.update(G,W,Ne),(Fn||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,ne.setValue(O,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ie.envMapIntensity.value=U.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=Bg()),Fn){if(ne.setValue(O,"toneMappingExposure",w.toneMappingExposure),wt.needsLights&&Gh(Ie,ti),pt&&z.fog===!0&&at.refreshFogUniforms(Ie,pt),at.refreshMaterialUniforms(Ie,z,xt,Lt,A.state.transmissionRenderTarget[v.id]),wt.needsLights&&wt.numLightProbeGrids>0){let me=y,Ae=0;for(let Mn of A.state.lightProbeGridArray)Mn.texture!==null&&(me.textures[Ae]=Mn.texture,me.min[Ae]=Mn.boundingBox.min,me.max[Ae]=Mn.boundingBox.max,me.resolution[Ae]=Mn.resolution,Ae++);for(let Mn in me)me[Mn].length=Ae;Ie.probesSH.value=me.textures,Ie.probesMin.value=me.min,Ie.probesMax.value=me.max,Ie.probesResolution.value=me.resolution}qi.upload(O,Dl(wt),Ie,zt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qi.upload(O,Dl(wt),Ie,zt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ne.setValue(O,"center",G.center),ne.setValue(O,"modelViewMatrix",G.modelViewMatrix),ne.setValue(O,"normalMatrix",G.normalMatrix),ne.setValue(O,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let me=z.uniformsGroups;for(let Ae=0,Mn=me.length;Ae<Mn;Ae++){let Fl=me[Ae];It.update(Fl,Ne),It.bind(Fl,Ne)}}return Ne}function Gh(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Vh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(v,U,W){let z=Nt.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Nt.get(v.texture).__webglTexture=U,Nt.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let W=Nt.get(v);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,W=0){et=v,H=U,V=W;let z=null,G=!1,pt=!1;if(v){let ut=Nt.get(v);if(ut.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(v.viewport),bt.copy(v.scissor),Ut=v.scissorTest,dt.viewport(tt),dt.scissor(bt),dt.setScissorTest(Ut),X=-1;return}else if(ut.__webglFramebuffer===void 0)zt.setupRenderTarget(v);else if(ut.__hasExternalTextures)zt.rebindTextures(v,Nt.get(v.texture).__webglTexture,Nt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Gt=v.depthTexture;if(ut.__boundDepthTexture!==Gt){if(Gt!==null&&Nt.has(Gt)&&(v.width!==Gt.image.width||v.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(v)}}let Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);let Rt=Nt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?z=Rt[U][W]:z=Rt[U],G=!0):v.samples>0&&zt.useMultisampledRTT(v)===!1?z=Nt.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?z=Rt[W]:z=Rt,tt.copy(v.viewport),bt.copy(v.scissor),Ut=v.scissorTest}else tt.copy(Ft).multiplyScalar(xt).floor(),bt.copy(qt).multiplyScalar(xt).floor(),Ut=Zt;if(W!==0&&(z=F),dt.bindFramebuffer(O.FRAMEBUFFER,z)&&dt.drawBuffers(v,z),dt.viewport(tt),dt.scissor(bt),dt.setScissorTest(Ut),G){let ut=Nt.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,W)}else if(pt){let ut=U;for(let Mt=0;Mt<v.textures.length;Mt++){let Rt=Nt.get(v.textures[Mt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Mt,Rt.__webglTexture,W,ut)}}else if(v!==null&&W!==0){let ut=Nt.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,W)}X=-1};function Ul(v){let U=Nt.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=le.textureFormatReadable(v.format),U.__typeReadable=le.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,W,z,G,pt,Et,ut=0){if(!(v&&v.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){dt.bindFramebuffer(O.FRAMEBUFFER,Mt);try{let Rt=v.textures[ut],Gt=Rt.format,jt=Rt.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let At=Ul(Rt);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-z&&W>=0&&W<=v.height-G&&O.readPixels(U,W,z,G,st.convert(Gt),st.convert(jt),pt)}finally{let Rt=et!==null?Nt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(v,U,W,z,G,pt,Et,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Nt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(U>=0&&U<=v.width-z&&W>=0&&W<=v.height-G){dt.bindFramebuffer(O.FRAMEBUFFER,Mt);let Rt=v.textures[ut],Gt=Rt.format,jt=Rt.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let At=Ul(Rt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),O.readPixels(U,W,z,G,st.convert(Gt),st.convert(jt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Me=et!==null?Nt.get(et).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Me);let he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yc(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(te),O.deleteSync(he),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,W=0){let z=Math.pow(2,-W),G=Math.floor(v.image.width*z),pt=Math.floor(v.image.height*z),Et=U!==null?U.x:0,ut=U!==null?U.y:0;zt.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,Et,ut,G,pt),dt.unbindTexture()},this.copyTextureToTexture=function(v,U,W=null,z=null,G=0,pt=0){let Et,ut,Mt,Rt,Gt,jt,At,te,Me,he=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(W!==null)Et=W.max.x-W.min.x,ut=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Gt=W.min.y,jt=W.isBox3?W.min.z:0;else{let ne=Math.pow(2,-G);Et=Math.floor(he.width*ne),ut=Math.floor(he.height*ne),v.isDataArrayTexture?Mt=he.depth:v.isData3DTexture?Mt=Math.floor(he.depth*ne):Mt=1,Rt=0,Gt=0,jt=0}z!==null?(At=z.x,te=z.y,Me=z.z):(At=0,te=0,Me=0);let ce=st.convert(U.format),De=st.convert(U.type),wt;U.isData3DTexture?(zt.setTexture3D(U,0),wt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),wt=O.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),wt=O.TEXTURE_2D),dt.activeTexture(O.TEXTURE0),dt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),dt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),dt.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let ze=dt.getParameter(O.UNPACK_ROW_LENGTH),re=dt.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=dt.getParameter(O.UNPACK_SKIP_PIXELS),Ne=dt.getParameter(O.UNPACK_SKIP_ROWS),Xs=dt.getParameter(O.UNPACK_SKIP_IMAGES);dt.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,jt);let Fn=v.isDataArrayTexture||v.isData3DTexture,ti=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let ne=Nt.get(v),Ie=Nt.get(U),en=Nt.get(ne.__renderTarget),me=Nt.get(Ie.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ae=0;Ae<Mt;Ae++)Fn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(v).__webglTexture,G,jt+Ae),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,pt,Me+Ae)),O.blitFramebuffer(Rt,Gt,Rt+Et,Gt+ut,At,te,At+Et,te+ut,O.DEPTH_BUFFER_BIT,O.NEAREST);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||Nt.has(v)){let ne=Nt.get(v),Ie=Nt.get(U);dt.bindFramebuffer(O.READ_FRAMEBUFFER,R),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let en=0;en<Mt;en++)Fn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.__webglTexture,G,jt+en):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ne.__webglTexture,G),ti?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,pt,Me+en):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,pt),G!==0?O.blitFramebuffer(Rt,Gt,Rt+Et,Gt+ut,At,te,At+Et,te+ut,O.COLOR_BUFFER_BIT,O.NEAREST):ti?O.copyTexSubImage3D(wt,pt,At,te,Me+en,Rt,Gt,Et,ut):O.copyTexSubImage2D(wt,pt,At,te,Rt,Gt,Et,ut);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ti?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(wt,pt,At,te,Me,Et,ut,Mt,ce,De,he.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,pt,At,te,Me,Et,ut,Mt,ce,he.data):O.texSubImage3D(wt,pt,At,te,Me,Et,ut,Mt,ce,De,he):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,At,te,Et,ut,ce,De,he.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,At,te,he.width,he.height,ce,he.data):O.texSubImage2D(O.TEXTURE_2D,pt,At,te,Et,ut,ce,De,he);dt.pixelStorei(O.UNPACK_ROW_LENGTH,ze),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Ne),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Xs),pt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(wt),dt.unbindTexture()},this.initRenderTarget=function(v){Nt.get(v).__webglFramebuffer===void 0&&zt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?zt.setTextureCube(v,0):v.isData3DTexture?zt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?zt.setTexture2DArray(v,0):zt.setTexture2D(v,0),dt.unbindTexture()},this.resetState=function(){H=0,V=0,et=null,dt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Oh=new D(0,1,0),Ce=(i,t={})=>new Ts(Object.assign({color:i,roughness:.8,metalness:0},t));function se(i,t,e,n,s=0,r=0,a=0){let o=new xe(new mn(i,t,e),n);return o.position.set(s,r,a),o}function Nn(i,t,e,n,s=0,r=0,a=0,o=24){let l=new xe(new ai(i,t,e,o),n);return l.position.set(s,r,a),l}function Le(i,t,e,n){let s=new D().subVectors(t,i),r=s.length(),a=new xe(new mn(e,r,e),n);return a.position.copy(i).addScaledVector(s,.5),a.quaternion.copy(new Ze().setFromUnitVectors(Oh,s.normalize())),a}function Hs(i,t,e,n){let s=new D().subVectors(t,i),r=s.length(),a=new xe(new ai(e,e,r,10),n);return a.position.copy(i).addScaledVector(s,.5),a.quaternion.copy(new Ze().setFromUnitVectors(Oh,s.normalize())),a}function Fh(i,t){let e=[[0,0],[.0125,.035],[.05,.062],[.1,.082],[.2,.098],[.3,.103],[.4,.099],[.5,.09],[.6,.078],[.7,.063],[.8,.046],[.9,.026],[1,.006]],n=[[1,0],[.9,-.003],[.7,-.009],[.5,-.015],[.3,-.021],[.15,-.024],[.05,-.019],[.012,-.01]],s=new Fi;if(s.moveTo(0,0),e.slice(1).forEach(([r,a])=>s.lineTo(r*i,a*i)),n.forEach(([r,a])=>s.lineTo(r*i,a*i)),s.lineTo(0,0),t){let r=new qn;r.absarc(.42*i,.04*i,.028*i,0,Math.PI*2,!0),s.holes.push(r);let a=new qn;a.absarc(.62*i,.033*i,.02*i,0,Math.PI*2,!0),s.holes.push(a)}return s}function zg(){let i=new Pe,t=Ce(14466963,{roughness:.9}),e=Ce(11831893,{roughness:.85}),n=Ce(15258541,{roughness:.9}),s=Ce(1776411,{roughness:.45,metalness:.2}),r=Ce(10265515,{roughness:.35,metalness:.7}),a=Ce(10176783,{roughness:.35,metalness:.6}),o=.52,l=1.32,c=.36,h=.13,f=Math.tan(3*Math.PI/180),u=new Bi(Fh(o,!0),{depth:.01,bevelEnabled:!1});u.rotateY(Math.PI/2),u.translate(-.005,0,0);let d=new Bi(Fh(o,!1),{depth:.022,bevelEnabled:!1});d.rotateY(Math.PI/2),d.translate(-.011,0,0);let g=11;for(let F=-1;F<=1;F+=2){for(let H=0;H<=g;H++){let V=F*(.02+(l-.02)*H/g),et=H===g||H===0,X=new xe(et?d:u,et?n:t);X.position.set(V,h+Math.abs(V)*f,c),i.add(X)}let R=(H,V)=>new D(F*.02,h+H,V),B=(H,V)=>new D(F*l,h+H+l*f,V);i.add(Le(R(.1*o-.007,c-.3*o),B(.1*o-.007,c-.3*o),.014,e)),i.add(Le(R(-.02*o+.007,c-.3*o),B(-.02*o+.007,c-.3*o),.014,e)),i.add(Hs(R(.012,c-.006),B(.012,c-.006),.009,n)),i.add(Le(R(.003,c-o+.02),B(.003,c-o+.02),.008,n))}i.add(se(.06,.006,o*.92,n,0,h+.1*o+.004,c-o*.47));let M=[[.66,.085,.09,-.07],[.42,.085,.11,-.11],[.12,.08,.12,-.12],[-.2,.066,.1,-.1],[-.52,.05,.075,-.07],[-.84,.035,.055,-.045],[-1.14,.02,.04,-.02]],p=(F,R,B)=>new D(R*F[1],B?F[2]:F[3],F[0]);for(let F=0;F<M.length;F++){let R=M[F];if(i.add(Le(p(R,-1,!0),p(R,1,!0),.012,t)),i.add(Le(p(R,-1,!1),p(R,1,!1),.012,t)),i.add(Le(p(R,-1,!1),p(R,-1,!0),.012,t)),i.add(Le(p(R,1,!1),p(R,1,!0),.012,t)),F<M.length-1){let B=M[F+1];for(let H of[-1,1])i.add(Le(p(R,H,!0),p(B,H,!0),.014,e)),i.add(Le(p(R,H,!1),p(B,H,!1),.014,e)),i.add(Le(p(R,H,!0),p(B,H,!1),.008,t)),i.add(Le(p(R,H,!1),p(B,H,!0),.008,t))}}for(let F of[-1,1])i.add(Le(new D(F*.1,.11,.36),new D(F*.06,h,.3),.012,e)),i.add(Le(new D(F*.1,.11,-.12),new D(F*.06,h,-.1),.012,e));i.add(se(.19,.17,.012,n,0,.01,.67));let m=Nn(.05,.05,.1,r);m.rotation.x=Math.PI/2,m.position.set(0,.01,.73),i.add(m);let S=new xe(new Ni(.045,.1,24),a);S.rotation.x=Math.PI/2,S.position.set(0,.01,.83),i.add(S);let E=new Pe;E.position.set(0,.01,.8);for(let F of[-1,1]){let R=se(.035,.3,.008,Ce(1776411,{roughness:.45,transparent:!0,opacity:.28}),0,F*.16,0);R.rotation.y=F*.35,E.add(R)}i.add(E);let y=-1.08,C=.26,A=.42,_=new mn(.008,.012,C);for(let F=-4;F<=4;F++){let R=new xe(_,Math.abs(F)===4?n:t);R.position.set(F*A/4,.03,y-C/2),i.add(R)}i.add(Le(new D(-A,.03,y),new D(A,.03,y),.012,e)),i.add(Le(new D(-A,.03,y-C),new D(A,.03,y-C),.01,e));let b=new D(0,.04,-.98),I=new D(0,.36,-1.2),w=new D(0,.36,-1.32),L=new D(0,.04,-1.3);[[b,I],[I,w],[w,L],[L,b]].forEach(([F,R])=>i.add(Le(F,R,.012,e)));for(let F=1;F<=3;F++){let R=.04+F*.08,B=-.98-(R-.04)/.32*.22;i.add(Le(new D(0,R,B),new D(0,R,-1.3-(R-.04)/.32*.02),.008,t))}for(let F of[-1,1]){i.add(Hs(new D(F*.1,-.11,.3),new D(F*.27,-.36,.27),.008,r));let R=new xe(new li(.055,.02,10,28),s);R.rotation.y=Math.PI/2,R.position.set(F*.29,-.36,.27),i.add(R)}i.add(Hs(new D(0,-.07,.62),new D(0,-.36,.64),.007,r));let N=new xe(new li(.045,.017,10,24),s);return N.rotation.y=Math.PI/2,N.position.set(0,-.36,.64),i.add(N),i.position.y=.05,{group:i,size:3,dist:[2.35,4.4],offY:[.06,.29],tick(F){E.rotation.z=F*38,i.position.y=.05+Math.sin(F*.9)*.05,i.rotation.z=Math.sin(F*.55)*.07,i.rotation.x=Math.sin(F*.7)*.025}}}function kg(){let i=new Pe,t=Ce(15921906,{roughness:.75}),e=Ce(14277340,{roughness:.7}),n=Ce(2829099,{roughness:.6}),s=Ce(3815994,{roughness:.5}),r=Ce(12107461,{roughness:.3,metalness:.7}),a=Ce(13214827,{roughness:.85}),o=Ce(10176783,{roughness:.35,metalness:.6}),l=Ce(11569754,{roughness:.9}),c=Ce(12572390,{roughness:.1,metalness:.1,transparent:!0,opacity:.55});i.add(se(3.3,.16,2.3,n,0,-.08,0)),i.add(se(3.24,.04,2.24,t,0,.02,0));let h=Ce(14263296,{roughness:.6});i.add(se(2.9,.004,.02,h,0,.042,.42)),i.add(se(2.9,.004,.02,h,0,.042,-.05)),i.add(se(3.2,.42,.04,t,0,.25,-1.1)),i.add(se(.04,.42,2.2,t,-1.6,.25,0));for(let I=0;I<6;I++)i.add(se(.36,.1,.045,c,-1.25+I*.5,.33,-1.1));for(let I=0;I<4;I++)i.add(se(.045,.1,.32,c,-1.6,.33,-.75+I*.5));let f=[];for(let I=0;I<3;I++){let w=-1.35+I*.28,L=-.8;i.add(Nn(.11,.11,.55,t,w,.62,L));let N=new xe(new Ni(.11,.14,24),t);N.rotation.x=Math.PI,N.position.set(w,.28,L),i.add(N);for(let[F,R]of[[-.08,-.08],[.08,-.08],[-.08,.08],[.08,.08]])i.add(Hs(new D(w+F,.04,L+R),new D(w+F,.38,L+R),.008,r));i.add(Nn(.025,.025,.08,o,w,.94,L,12))}i.add(se(.3,.22,.26,e,-1.2,.15,-.25)),i.add(Nn(.11,.09,.12,r,-1.2,.32,-.25)),i.add(se(.34,.16,.22,t,-.8,.12,.18)),i.add(se(1.3,.2,.26,t,0,.14,.18)),i.add(se(1.3,.035,.27,n,0,.08,.18));for(let I=0;I<5;I++)i.add(se(.012,.16,.272,e,-.52+I*.26,.15,.18));i.add(Nn(.03,.03,.34,r,-.35,.4,.18,12)),i.add(Nn(.03,.03,.34,r,.35,.4,.18,12)),i.add(Nn(.2,.2,.42,t,1.05,.25,-.55));for(let I=0;I<5;I++){let w=new xe(new li(.205,.008,6,40),n);w.rotation.x=Math.PI/2,w.position.set(1.05,.1+I*.08,-.55),i.add(w)}let u=[new D(-1.02,.1,.62),new D(1.2,.1,.62),new D(1.2,.1,.92),new D(-.4,.1,.92)],d=[],g=0;for(let I=0;I<u.length-1;I++){let w=u[I],L=u[I+1],N=w.distanceTo(L),F=Math.abs(w.x-L.x)>.001;i.add(se(F?N+.12:.12,.025,F?.12:N+.12,s,(w.x+L.x)/2,.08,(w.z+L.z)/2)),i.add(se(F?N+.12:.14,.02,F?.14:N+.12,r,(w.x+L.x)/2,.06,(w.z+L.z)/2)),d.push({a:w,b:L,len:N,start:g}),g+=N}let M=[];for(let I=0;I<12;I++){let w=se(.08,.06,.07,a);i.add(w),M.push(w)}i.add(se(.3,.2,.22,e,.35,.12,.62)),i.add(se(.26,.08,.2,c,.35,.26,.62)),i.add(se(.26,.18,.24,t,.95,.11,.92));let p=new Pe;p.position.set(-.75,.04,.92),p.add(Nn(.07,.08,.06,n,0,.03,0));let m=new Pe;m.position.y=.06,p.add(m),m.add(Nn(.045,.045,.08,o,0,.04,0));let S=new Pe;S.position.y=.08,m.add(S),S.add(se(.04,.28,.04,t,0,.14,0)),S.rotation.z=-.35;let E=new Pe;E.position.y=.28,S.add(E),E.add(se(.24,.035,.035,t,.12,0,0)),E.rotation.z=-.25,E.add(se(.03,.06,.03,n,.24,-.03,0)),i.add(p);for(let[I,w]of[[-1.25,.92],[-1.25,.55]]){i.add(se(.26,.03,.22,l,I,.06,w));for(let L=0;L<2;L++)for(let N=0;N<2;N++)for(let F=0;F<2;F++)i.add(se(.11,.07,.095,a,I-.06+L*.12,.115+F*.075,w-.05+N*.1))}let y=new Pe;y.add(se(.12,.07,.18,o,0,.06,0)),y.add(se(.1,.06,.05,n,0,.12,-.03)),y.add(se(.012,.18,.012,r,-.04,.14,.09)),y.add(se(.012,.18,.012,r,.04,.14,.09)),y.add(se(.1,.008,.1,r,0,.04,.14)),i.add(y);let C=[],A=(I,w,L,N,F)=>{i.add(Hs(new D(I,w-.12,L),new D(I,w,L),.005,r));let R=Ce(N,{emissive:N,emissiveIntensity:1.2,roughness:.3}),B=new xe(new bs(.022,14,10),R);B.position.set(I,w+.01,L),i.add(B),C.push({m:R,blink:F})};A(-1.2,.52,-.25,2278750,!1),A(0,.38,.18,15680580,!0),A(1.05,.6,-.55,2278750,!1),A(.35,.44,.62,16096779,!0),A(.95,.34,.92,2278750,!1);let _=new D;function b(I){I=(I%g+g)%g;for(let w of d)if(I<=w.start+w.len)return _.copy(w.a).lerp(w.b,(I-w.start)/w.len);return _.copy(u[u.length-1])}return{group:i,size:3.6,tilt:!0,dist:[3,5.4],offY:[0,.3],tick(I){M.forEach((w,L)=>{let N=b(I*.22+L*g/M.length);w.position.set(N.x,.125,N.z)}),m.rotation.y=Math.sin(I*.8)*1.2,S.rotation.z=-.35+Math.sin(I*1.6)*.15,y.position.set(-.3+Math.sin(I*.45)*.75,0,.2+0),y.position.z=.27,y.rotation.y=Math.cos(I*.45)>0?-Math.PI/2:Math.PI/2,C.forEach(w=>{w.blink&&(w.m.emissiveIntensity=.3+(Math.sin(I*5)>0?1.4:0))})}}}function Gg(i,t={}){let e=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new Xa({antialias:!0,alpha:!0})}catch(N){return null}n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=ke,n.toneMapping=Ps,n.toneMappingExposure=1.05;let s=n.domElement;s.className="hero__model",i.appendChild(s);let r=new cs;r.add(new ws(16777215,10135224,1.6));let a=new zi(16777215,2.4);a.position.set(-3,5,4),r.add(a);let o=new zi(14674175,1);o.position.set(4,2,-4),r.add(o);let l={avion:zg,fabrica:kg},c={},h=new Pe;r.add(h);let f=null;function u(N){N=l[N]?N:"avion",c[N]||(c[N]=l[N]()),f&&h.remove(f.group),f=c[N],h.add(f.group),m(),(e||!_)&&w()}let d=new Ge(30,1,.1,100),g=0,M=0,p=!1;function m(){g=i.clientWidth,M=i.clientHeight,p=g<800,n.setSize(g,M,!1),d.aspect=g/M;let N=f.size*f.dist[p?1:0],F=f.tilt?.62:.32;d.position.set(0,Math.sin(F)*N,Math.cos(F)*N),d.lookAt(0,f.tilt?.15:0,0),p?d.setViewOffset(g,M,0,M*f.offY[1],g,M):d.setViewOffset(g,M,-g*.22,M*f.offY[0],g,M),d.updateProjectionMatrix()}window.addEventListener("resize",m);let S=t.yaw!=null?t.yaw:-.6,E=0,y=null,C=0;s.style.touchAction="pan-y",s.addEventListener("pointerdown",N=>{y={x:N.clientX,y:N.clientY,yaw:S,pitch:C},s.setPointerCapture(N.pointerId),s.style.cursor="grabbing"}),s.addEventListener("pointermove",N=>{y&&(S=y.yaw+(N.clientX-y.x)*.008,C=Math.max(-.35,Math.min(.35,y.pitch+(N.clientY-y.y)*.004)))});let A=()=>{y=null,s.style.cursor="grab"};s.addEventListener("pointerup",A),s.addEventListener("pointercancel",A),s.style.cursor="grab";let _=!0,b=performance.now(),I=0;u(t.model),"IntersectionObserver"in window&&new IntersectionObserver(N=>{let F=_;_=N[0].isIntersecting,_&&!F&&!e&&(b=performance.now(),requestAnimationFrame(L))}).observe(i);function w(){h.rotation.y=S,h.rotation.x=(f.tilt,0+C),f.tick(I),n.render(r,d)}function L(N){if(!_)return;let F=Math.min(.05,(N-b)/1e3);b=N,I+=F,y||(C*=.96,S+=F*(f.tilt?.12:.18)),w(),requestAnimationFrame(L)}return e?(I=1.2,w()):requestAnimationFrame(L),{canvas:s,setModel:u}}window.Maqueta={mount:Gg};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
