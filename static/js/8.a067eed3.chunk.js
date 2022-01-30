(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[8],{171:function(t,e,i){"use strict";i.r(e);var n=i(0),r=(i(1),i(5)),s=i(21),a=i(57),o=i.n(a),c=function(t){var e=t.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,children:e.title})}),Object(n.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(n.jsx)("a",{href:e.link,className:"image",children:Object(n.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.desc})})]})})},u=[{title:"climate vulnerability assessment",link:"https://kendallfrimodig.github.io/climate_vulnerability_viz/",image:"/images/projects/beeswarm.PNG",date:"2021-05",desc:"developed R code to visualize census tract groupings determined to be most vulnerable to climate change  within the context of individual measures "},{title:"superfund and toxic release inventory map",link:"https://kendallfrimodig.github.io/superfund_map/#7/34.214/-106.026",image:"/images/projects/superfund.PNG",date:"2021-02",desc:"sourced and aggregated data related to environmental hazards and developed an interactive map indicating relative risk of current toxic releases and historical superfund sites, "},{title:"health equity maps",link:"https://www.tpchd.org/healthy-people/health-equity/health-equity-maps",image:"/images/projects/tacoma.PNG",date:"2020-01",desc:"crafted a set of custom basemaps for future GIS work and produced a repository of indicator maps for  the health equity topic page "},{title:"HIV PrEP Survey Analysis",link:"https://kendallfrimodig.github.io/survey_analysis/",image:"/images/projects/tutu.PNG",date:"2018-07",desc:"developed SAS code to clean, re-group, and enumerate trends resulting from a bare survey data-set  identified trends in frequency tables via paper, glue, and whiteboard merkers and conducted a formal regression on medication preferences"},{title:"ecological niche modeling of west nile virus transmission potential",link:"https://photos.app.goo.gl/Ar15ekaHN9bMzdmr5",image:"/images/projects/wnv.jpg",date:"2017-08",desc:"worked with the kent county health department and developed a spatial predictive model for areas prone to increased transmission risk of west nile virus, utilizing historical infection and ecological parameters specific  to the local species"}];e.default=function(){return Object(n.jsx)(s.a,{title:"Projects",description:"Learn about Kendall Frimodigs's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("h4",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/projects",children:"click on each title for more"})})]})}),u.map((function(t){return Object(n.jsx)(c,{data:t},t.title)}))]})})}},57:function(t,e,i){t.exports=function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},m={s:f,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),r=i%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),r=e.clone().add(n,a),s=i-r<0,o=e.clone().add(n+(s?-1:1),a);return+(-(n+(i-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:c,w:s,d:r,D:u,h:n,m:i,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",$={};$[p]=l;var g=function(t){return t instanceof b},v=function(t,e,i){var n;if(!t)return p;if("string"==typeof t)$[t]&&(n=t),e&&($[t]=e,n=t);else{var r=t.name;$[r]=t,n=r}return!i&&n&&(p=n),n||!i&&p},y=function(t,e){if(g(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new b(i)},j=m;j.l=v,j.i=g,j.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function l(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(d);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=y(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,i){return j.u(t)?this[e]:this.set(i,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,h=!!j.u(o)||o,l=j.p(t),f=function(t,e){var i=j.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return h?i:i.endOf(r)},m=function(t,e){return j.w(d.toDate()[t].apply(d.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},p=this.$W,$=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case c:return h?f(1,0):f(31,11);case a:return h?f(1,$):f(0,$+1);case s:var y=this.$locale().weekStart||0,b=(p<y?p+7:p)-y;return f(h?g-b:g+(6-b),$);case r:case u:return m(v+"Hours",0);case n:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var d,h=j.p(s),l="set"+(this.$u?"UTC":""),f=(d={},d[r]=l+"Date",d[u]=l+"Date",d[a]=l+"Month",d[c]=l+"FullYear",d[n]=l+"Hours",d[i]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[h],m=h===r?this.$D+(o-this.$W):o;if(h===a||h===c){var p=this.clone().set(u,1);p.$d[f](m),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[j.p(t)]()},f.add=function(t,o){var u,d=this;t=Number(t);var h=j.p(o),l=function(e){var i=y(d);return j.w(i.date(i.date()+Math.round(e*t)),d)};if(h===a)return this.set(a,this.$M+t);if(h===c)return this.set(c,this.$y+t);if(h===r)return l(1);if(h===s)return l(7);var f=(u={},u[i]=6e4,u[n]=36e5,u[e]=1e3,u)[h]||1,m=this.$d.getTime()+t*f;return j.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=j.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,d=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},l=function(t){return j.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:d(r.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,c,2),ddd:d(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:j.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:n};return i.replace(h,(function(t,e){return e||m[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,d){var h,l=j.p(u),f=y(t),m=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,$=j.m(this,f);return $=(h={},h[c]=$/12,h[a]=$,h[o]=$/3,h[s]=(p-m)/6048e5,h[r]=(p-m)/864e5,h[n]=p/36e5,h[i]=p/6e4,h[e]=p/1e3,h)[l]||p,d?$:j.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=v(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),M=b.prototype;return y.prototype=M,[["$ms",t],["$s",e],["$m",i],["$H",n],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,b,y),t.$i=!0),y},y.locale=v,y.isDayjs=g,y.unix=function(t){return y(1e3*t)},y.en=$[p],y.Ls=$,y.p={},y}()}}]);
//# sourceMappingURL=8.a067eed3.chunk.js.map