"use strict";(self.webpackChunkreact_portfolio_template=self.webpackChunkreact_portfolio_template||[]).push([[3846,3047],{4490:(e,a,n)=>{var t=n(595);function r(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=r,r.displayName="handlebars",r.aliases=["hbs"]},595:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,r,o){if(n.language===t){var s=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,l=s.length;-1!==n.code.indexOf(r=a(t,l));)++l;return s[l]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var r=0,o=Object.keys(n.tokenStack);!function s(l){for(var i=0;i<l.length&&!(r>=o.length);i++){var u=l[i];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=o[r],p=n.tokenStack[c],g="string"===typeof u?u:u.content,f=a(t,c),d=g.indexOf(f);if(d>-1){++r;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,n.grammar),"language-"+t,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,s([k])),m.push(b),h&&m.push.apply(m,s([h])),"string"===typeof u?l.splice.apply(l,[i,1].concat(m)):u.content=m}}else u.content&&s(u.content)}return l}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.d3ebe22b.chunk.js.map