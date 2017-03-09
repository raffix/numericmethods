var parser=function(){function c(){this.yy={}}var a={trace:function(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"+":6,"-":7,"*":8,"/":9,"^":10,"(":11,")":12,NUMBER:13,e:14,PI:15,sqrt:16,cos:17,sin:18,tan:19,sec:20,log:21,cot:22,csc:23,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"^",11:"(",12:")",13:"NUMBER",14:"e",15:"PI",16:"sqrt",17:"cos",18:"sin",19:"tan",20:"sec",21:"log",22:"cot",23:"csc"},productions_:[0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,3],[4,1],[4,1],[4,1],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4]],performAction:function(b,c,d,e,f,g,h){var i=g.length-1;switch(f){case 1:return g[i-1];case 2:this.$=g[i-2]+g[i];break;case 3:this.$=g[i-2]-g[i];break;case 4:this.$=g[i-2]*g[i];break;case 5:this.$=g[i-2]/g[i];break;case 6:this.$=Math.pow(g[i-2],g[i]);break;case 7:this.$=-g[i];break;case 8:this.$=g[i-1];break;case 9:this.$=Number(b);break;case 10:this.$=Math.E;break;case 11:this.$=Math.PI;break;case 12:this.$=Math.sqrt(g[i-1]);break;case 13:this.$=Math.cos(g[i-1]);break;case 14:this.$=Math.sin(g[i-1]);break;case 15:this.$=Math.tan(g[i-1]);break;case 16:this.$=math.sec(g[i-1]);break;case 17:this.$=Math.log(g[i-1]);break;case 18:this.$=math.cot(g[i-1]);break;case 19:this.$=math.csc(g[i-1])}},table:[{3:1,4:2,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{1:[3]},{5:[1,16],6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21]},{4:22,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:23,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],12:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],12:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],12:[2,11]},{11:[1,24]},{11:[1,25]},{11:[1,26]},{11:[1,27]},{11:[1,28]},{11:[1,29]},{11:[1,30]},{11:[1,31]},{1:[2,1]},{4:32,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:33,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:34,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:35,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:36,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],12:[2,7]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,37]},{4:38,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:39,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:40,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:41,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:42,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:43,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:44,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{4:45,7:[1,3],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15]},{5:[2,2],6:[2,2],7:[2,2],8:[1,19],9:[1,20],10:[1,21],12:[2,2]},{5:[2,3],6:[2,3],7:[2,3],8:[1,19],9:[1,20],10:[1,21],12:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,21],12:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[1,21],12:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],12:[2,6]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],12:[2,8]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,46]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,47]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,48]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,49]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,50]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,51]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,52]},{6:[1,17],7:[1,18],8:[1,19],9:[1,20],10:[1,21],12:[1,53]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],12:[2,12]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],12:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],12:[2,14]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],12:[2,15]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],12:[2,16]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],12:[2,17]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],12:[2,18]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],12:[2,19]}],defaultActions:{16:[2,1]},parseError:function(b,c){if(!c.recoverable)throw new Error(b);this.trace(b)},parse:function(b){function r(){var a;return a=c.lexer.lex()||m,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0,l=2,m=1,n=f.slice.call(arguments,1);this.lexer.setInput(b),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var o=this.lexer.yylloc;f.push(o);var p=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError?this.parseError=this.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var s,t,u,v,x,z,A,B,C,y={};;){if(u=d[d.length-1],this.defaultActions[u]?v=this.defaultActions[u]:(null!==s&&"undefined"!=typeof s||(s=r()),v=g[u]&&g[u][s]),"undefined"==typeof v||!v.length||!v[0]){var D="";C=[];for(z in g[u])this.terminals_[z]&&z>l&&C.push("'"+this.terminals_[z]+"'");D=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+C.join(", ")+", got '"+(this.terminals_[s]||s)+"'":"Parse error on line "+(i+1)+": Unexpected "+(s==m?"end of input":"'"+(this.terminals_[s]||s)+"'"),this.parseError(D,{text:this.lexer.match,token:this.terminals_[s]||s,line:this.lexer.yylineno,loc:o,expected:C})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+u+", token: "+s);switch(v[0]){case 1:d.push(s),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(v[1]),s=null,t?(s=t,t=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,o=this.lexer.yylloc,k>0&&k--);break;case 2:if(A=this.productions_[v[1]][1],y.$=e[e.length-A],y._$={first_line:f[f.length-(A||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(A||1)].first_column,last_column:f[f.length-1].last_column},p&&(y._$.range=[f[f.length-(A||1)].range[0],f[f.length-1].range[1]]),x=this.performAction.apply(y,[h,j,i,this.yy,v[1],e,f].concat(n)),"undefined"!=typeof x)return x;A&&(d=d.slice(0,-1*A*2),e=e.slice(0,-1*A),f=f.slice(0,-1*A)),d.push(this.productions_[v[1]][0]),e.push(y.$),f.push(y._$),B=g[d[d.length-2]][d[d.length-1]],d.push(B);break;case 3:return!0}}return!0}},b=function(){var a={EOF:1,parseError:function(b,c){if(!this.yy.parser)throw new Error(b);this.yy.parser.parseError(b,c)},setInput:function(a){return this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},test_match:function(a,b){var c,d,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),d=a[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,b,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var f in e)this[f]=e[f];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d;this._more||(this.yytext="",this.match="");for(var e=this._currentRules(),f=0;f<e.length;f++)if(c=this._input.match(this.rules[e[f]]),c&&(!b||c[0].length>b[0].length)){if(b=c,d=f,this.options.backtrack_lexer){if(a=this.test_match(c,e[f]),a!==!1)return a;if(this._backtrack){b=!1;continue}return!1}if(!this.options.flex)break}return b?(a=this.test_match(b,e[d]),a!==!1&&a):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var b=this.next();return b?b:this.lex()},begin:function(b){this.conditionStack.push(b)},popState:function(){var b=this.conditionStack.length-1;return b>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(b){return b=this.conditionStack.length-1-Math.abs(b||0),b>=0?this.conditionStack[b]:"INITIAL"},pushState:function(b){this.begin(b)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(b,c,d,e){switch(d){case 0:break;case 1:return 13;case 2:return 8;case 3:return 9;case 4:return 7;case 5:return 6;case 6:return 10;case 7:return 11;case 8:return 12;case 9:return 15;case 10:return"e";case 11:return 21;case 12:return 19;case 13:return 18;case 14:return 17;case 15:return 22;case 16:return 20;case 17:return 16;case 18:return 23;case 19:return 5;case 20:return"INVALID"}},rules:[/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:e\b)/,/^(?:log\b)/,/^(?:tan\b)/,/^(?:sin\b)/,/^(?:cos\b)/,/^(?:cot\b)/,/^(?:sec\b)/,/^(?:sqrt\b)/,/^(?:csc\b)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],inclusive:!0}}};return a}();return a.lexer=b,c.prototype=a,a.Parser=c,new c}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=parser,exports.Parser=parser.Parser,exports.parse=function(){return parser.parse.apply(parser,arguments)},exports.main=function(b){b[1]||(console.log("Usage: "+b[0]+" FILE"),process.exit(1));var c=require("fs").readFileSync(require("path").normalize(b[1]),"utf8");return exports.parser.parse(c)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1)));