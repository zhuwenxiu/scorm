/*
 * JQuery zTree 2.6
 * http://code.google.com/p/jquerytree/
 *
 * Copyright (c) 2010 Hunter.z (baby666.cn)
 *
 * Licensed same as jquery - under the terms of either the MIT License or the GPL Version 2 License
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * email: hunter.z@263.net
 * Date: 2011-06-01
 */
(function(h){function lb(a,b){var c={treeObjId:a.treeObjId};a.treeObj.unbind("click",w);a.treeObj.bind("click",c,w);a.treeObj.unbind("dblclick",w);a.treeObj.bind("dblclick",c,w);a.treeObj.unbind("mouseover",w);a.treeObj.bind("mouseover",c,w);a.treeObj.unbind("mouseout",w);a.treeObj.bind("mouseout",c,w);a.treeObj.unbind("mousedown",w);a.treeObj.bind("mousedown",c,w);a.treeObj.unbind("mouseup",w);a.treeObj.bind("mouseup",c,w);a.treeObj.unbind("contextmenu",w);a.treeObj.bind("contextmenu",c,w);b.unbind(na);
b.bind(na,function(d,e,g){i.apply(a.callback.nodeCreated,[d,e,g])});b.unbind(oa);b.bind(oa,function(d,e,g){i.apply(a.callback.click,[d,e,g])});b.unbind(pa);b.bind(pa,function(d,e,g){i.apply(a.callback.change,[d,e,g])});b.unbind(qa);b.bind(qa,function(d,e,g){i.apply(a.callback.rename,[d,e,g])});b.unbind(ra);b.bind(ra,function(d,e,g){i.apply(a.callback.remove,[d,e,g])});b.unbind(sa);b.bind(sa,function(d,e,g){i.apply(a.callback.drag,[d,e,g])});b.unbind(da);b.bind(da,function(d,e,g,j,f){i.apply(a.callback.drop,
[d,e,g,j,f])});b.unbind(ta);b.bind(ta,function(d,e,g){i.apply(a.callback.expand,[d,e,g])});b.unbind(ua);b.bind(ua,function(d,e,g){i.apply(a.callback.collapse,[d,e,g])});b.unbind(va);b.bind(va,function(d,e,g,j){i.apply(a.callback.asyncSuccess,[d,e,g,j])});b.unbind(wa);b.bind(wa,function(d,e,g,j,f,o){i.apply(a.callback.asyncError,[d,e,g,j,f,o])})}function ea(a,b,c,d){if(c){b=Na(a,b,c,d);d?h("#"+d.tId+D).append(b.join("")):a.treeObj.append(b.join(""));T(a,d);Oa(a,c)}}function Oa(a,b){for(var c=0,d=b.length;c<
d;c++){var e=b[c];i.apply(a.addDiyDom,[a.treeObjId,e]);a.treeObj.trigger(na,[a.treeObjId,e]);e[a.nodesCol]&&e[a.nodesCol].length>0&&Oa(a,e[a.nodesCol],e)}}function Na(a,b,c,d){if(!c)return[];for(var e=[],g=0,j=c.length;g<j;g++){var f=c[g];f.level=b;f.tId=a.treeObjId+"_"+ ++mb;f.parentNode=d;f[a.checkedCol]=!!f[a.checkedCol];f.checkedOld=f[a.checkedCol];f.check_Focus=false;f.check_True_Full=true;f.check_False_Full=true;f.editNameStatus=false;f.isAjaxing=null;J[a.treeObjId][f.tId]=f;Pa(a,f);f.isFirstNode=
(d?d:a.root)[a.nodesCol].length==c.length&&g==0;f.isLastNode=g==c.length-1;if(f[a.nodesCol]&&f[a.nodesCol].length>0){f.open=f.open?true:false;f.isParent=true}else f.isParent=f.isParent?true:false;var o=f.url&&!a.editable?f.url:null,k=Qa(a,f),A=[],B;for(B in k)A.push(B,":",k[B],";");k=[];if(f[a.nodesCol]&&f[a.nodesCol].length>0)k=Na(a,b+1,f[a.nodesCol],f);e.push("<li id='",f.tId,"' treenode>","<button type='button' id='",f.tId,F,"' title='' class='",Ra(a,f),"' treeNode",F," onfocus='this.blur();'></button>");
if(a.checkable){Sa(a,f);if(a.checkStyle==U&&a.checkRadioType==xa&&f[a.checkedCol])a.checkRadioCheckedList=a.checkRadioCheckedList.concat([f]);e.push("<button type='button' ID='",f.tId,x,"' class='",Ta(a,f),"' treeNode",x," onfocus='this.blur();' ",f.nocheck===true?"style='display:none;'":"","></button>")}e.push("<a id='",f.tId,q,"' treeNode",q,' onclick="',f.click||"",'" ',o!=null&&o.length>0?"href='"+o+"'":""," target='",f.target||"_blank","' style='",A.join(""),"'><button type='button' id='",f.tId,
u,"' title='' treeNode",u," onfocus='this.blur();' class='",Ua(a,f),"' style='",ya(a,f),"'></button><span id='",f.tId,fa,"'>",f[a.nameCol].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"</span></a><ul id='",f.tId,D,"' class='",a.showLine&&!f.isLastNode?ga:"","' style='display:",f.open?"block":"none","'>");e.push(k.join(""));e.push("</ul></li>")}return e}function w(a){var b=a.target,c=a.relatedTarget,d=r[a.data.treeObjId],e="",g="",j="",f=null;if(i.eqs(a.type,"mouseover"))if(d.checkable&&
i.eqs(b.tagName,"button")&&b.getAttribute("treeNode"+x)!==null){e=b.parentNode.id;g="mouseoverCheck"}else{if(f=i.getMDom(d,b,[{tagName:"a",attrName:"treeNode"+q}])){e=f.parentNode.id;g="hoverOverNode"}}else if(i.eqs(a.type,"mouseout"))if(d.checkable&&i.eqs(b.tagName,"button")&&b.getAttribute("treeNode"+x)!==null){e=b.parentNode.id;g="mouseoutCheck"}else{f=i.getMDom(d,c,[{tagName:"a",attrName:"treeNode"+q}]);if(!f){e="remove";g="hoverOutNode"}}else if(i.eqs(a.type,"mousedown")){j="mousedown";if(f=
i.getMDom(d,b,[{tagName:"a",attrName:"treeNode"+q}])){e=f.parentNode.id;g="mousedownNode"}}else if(i.eqs(a.type,"mouseup")){j="mouseup";if(f=i.getMDom(d,b,[{tagName:"a",attrName:"treeNode"+q}]))e=f.parentNode.id}else if(i.eqs(a.type,"contextmenu")){j="contextmenu";if(f=i.getMDom(d,b,[{tagName:"a",attrName:"treeNode"+q}]))e=f.parentNode.id}else if(i.eqs(a.type,"click"))if(i.eqs(b.tagName,"button")&&b.getAttribute("treeNode"+F)!==null){e=b.parentNode.id;g="switchNode"}else if(d.checkable&&i.eqs(b.tagName,
"button")&&b.getAttribute("treeNode"+x)!==null){e=b.parentNode.id;g="checkNode"}else{if(f=i.getMDom(d,b,[{tagName:"a",attrName:"treeNode"+q}])){e=f.parentNode.id;g="clickNode"}}else if(i.eqs(a.type,"dblclick")){j="dblclick";if(f=i.getMDom(d,b,[{tagName:"a",attrName:"treeNode"+q}])){e=f.parentNode.id;g="switchNode"}}if(e.length>0||j.length>0)if(g!="hoverOverNode"&&g!="hoverOutNode"&&g!="mouseoverCheck"&&g!="mouseoutCheck"&&b.getAttribute("treeNode"+V)===null&&!G.checkEvent(d))return false;if(e.length>
0){d.curTreeNode&&d.curTreeNode.editNameStatus||i.noSel();a.data.treeNode=J[d.treeObjId][e];switch(g){case "switchNode":C.onSwitchNode(a);break;case "clickNode":C.onClickNode(a);break;case "checkNode":C.onCheckNode(a);break;case "mouseoverCheck":C.onMouseoverCheck(a);break;case "mouseoutCheck":C.onMouseoutCheck(a);break;case "mousedownNode":C.onMousedownNode(a);break;case "hoverOverNode":C.onHoverOverNode(a);break;case "hoverOutNode":C.onHoverOutNode(a)}}else a.data.treeNode=null;switch(j){case "mousedown":return C.onZTreeMousedown(a);
case "mouseup":return C.onZTreeMouseup(a);case "dblclick":return C.onZTreeDblclick(a);case "contextmenu":return C.onZTreeContextmenu(a)}}function Va(a){for(;ha.length>0;){ha[0].remove();ha.shift()}if(a){a=h("iframe");for(var b=0,c=a.length;b<c;b++){var d=a.get(b),e=i.getAbs(d);d=h("<div id='zTreeMask_"+b+"' class='zTreeMask' style='top:"+e[1]+"px; left:"+e[0]+"px; width:"+d.offsetWidth+"px; height:"+d.offsetHeight+"px;'></div>");d.appendTo("body");ha.push(d)}}}function za(a,b){h("#"+b.tId+fa).text(b[a.nameCol])}
function S(a,b){if(b){var c=h("#"+b.tId+F),d=h("#"+b.tId+D),e=h("#"+b.tId+u),g=a.showLine&&!b.isLastNode?ga:"";g.length==0?d.removeClass(ga):d.addClass(g);c.attr("class",Ra(a,b));e.attr("style",ya(a,b));e.attr("class",Ua(a,b))}}function Ra(a,b){var c=["switch"];if(a.showLine)if(b.level==0&&b.isFirstNode&&b.isLastNode)c.push(Aa);else if(b.level==0&&b.isFirstNode)c.push(Ba);else b.isLastNode?c.push(ia):c.push(Wa);else c.push(Xa);b.isParent?c.push(b.open?N:O):c.push(P);return c.join("_")}function Ua(a,
b){var c=["ico"];if(!b.isAjaxing){c[0]=(b.iconSkin?b.iconSkin:"")+" "+c[0];b.isParent?c.push(b.open?N:O):c.push(P)}return c.join("_")}function ya(a,b){var c=[];if(!b.isAjaxing){var d=b.isParent&&b.iconOpen&&b.iconClose?b.open?b.iconOpen:b.iconClose:b.icon;d&&c.push("background:url(",d,") 0 0 no-repeat;");if(a.showIcon==false||!i.apply(a.showIcon,[a.treeObjId,b],true))c.push("width:0px;height:0px;")}return c.join("")}function Qa(a,b){var c=i.apply(a.fontCss,[a.treeObjId,b]);if(c==null)c=a.fontCss;
return c?c:{}}function H(a,b){if(a){var c=a.attr("class");if(c!=undefined){c=c.split("_");switch(b){case Aa:case Ba:case Wa:case ia:case Xa:c[1]=b;break;case N:case O:case P:c[2]=b}a.attr("class",c.join("_"))}}}function W(a,b,c){if(!(!b||a.isAjaxing)){a=b.attr("class");if(a!=undefined){a=a.split("_");switch(c){case N:case O:case P:a[1]=c}b.attr("class",a.join("_"))}}}function Ya(a,b){if(a.dragStatus==0){b.isHover=true;if(a.editable){nb(a,b);ob(a,b)}i.apply(a.addHoverDom,[a.treeObjId,b])}}function X(a,
b){b.isHover=false;h("#"+b.tId+Y).unbind().remove();h("#"+b.tId+Z).unbind().remove();i.apply(a.removeHoverDom,[a.treeObjId,b])}function nb(a,b){if(!(b.editNameStatus||h("#"+b.tId+Y).length>0))if(i.apply(a.edit_renameBtn,[b],a.edit_renameBtn)){h("#"+b.tId+fa).after("<button type='button' class='edit' id='"+b.tId+Y+"' title='' treeNode"+Y+" onfocus='this.blur();' style='display:none;'></button>");h("#"+b.tId+Y).bind("click",function(){if(i.apply(a.callback.beforeRename,[a.treeObjId,b],true)==false)return true;
b.editNameStatus=true;X(a,b);K(a,b);return false}).show()}}function ob(a,b){if(!(!a.edit_removeBtn||h("#"+b.tId+Z).length>0))if(i.apply(a.edit_removeBtn,[b],a.edit_removeBtn)){h("#"+b.tId+q).append("<button type='button' class='remove' id='"+b.tId+Z+"' title='' treeNode"+Z+" onfocus='this.blur();' style='display:none;'></button>");h("#"+b.tId+Z).bind("click",function(){if(i.apply(a.callback.beforeRemove,[a.treeObjId,b],true)==false)return true;Ca(a,b);a.treeObj.trigger(ra,[a.treeObjId,b]);return false}).bind("mousedown",
function(){return true}).show()}}function Za(a,b){var c,d,e;if(a.checkStyle==U)if(b[a.checkedCol])if(a.checkRadioType==xa){for(d=a.checkRadioCheckedList.length-1;d>=0;d--){c=a.checkRadioCheckedList[d];c[a.checkedCol]=false;a.checkRadioCheckedList.splice(d,1);L(a,h("#"+c.tId+x),c);c.parentNode!=b.parentNode&&T(a,c)}a.checkRadioCheckedList=a.checkRadioCheckedList.concat([b])}else{var g=b.parentNode?b.parentNode:a.root;d=0;for(e=g[a.nodesCol].length;d<e;d++){c=g[a.nodesCol][d];if(c[a.checkedCol]&&c!=
b){c[a.checkedCol]=false;L(a,h("#"+c.tId+x),c)}}}else{if(a.checkRadioType==xa){d=0;for(e=a.checkRadioCheckedList.length;d<e;d++)if(b==a.checkRadioCheckedList[d]){a.checkRadioCheckedList.splice(d,1);break}}}else{b[a.checkedCol]&&a.checkType.Y.indexOf("s")>-1&&ja(a,b,true);b[a.checkedCol]&&a.checkType.Y.indexOf("p")>-1&&Da(a,b,true);!b[a.checkedCol]&&a.checkType.N.indexOf("s")>-1&&ja(a,b,false);!b[a.checkedCol]&&a.checkType.N.indexOf("p")>-1&&Da(a,b,false)}}function Da(a,b,c){var d=h("#"+b.tId+x);b[a.checkedCol]=
c;L(a,d,b);if(b.parentNode){d=true;if(!c)for(var e=0,g=b.parentNode[a.nodesCol].length;e<g;e++)if(b.parentNode[a.nodesCol][e][a.checkedCol]){d=false;break}d&&Da(a,b.parentNode,c)}}function ja(a,b,c){if(b){var d=h("#"+b.tId+x);if(b!=a.root){b[a.checkedCol]=c;b.check_True_Full=true;b.check_False_Full=true;L(a,d,b)}if(b[a.nodesCol]){d=0;for(var e=b[a.nodesCol].length;d<e;d++)b[a.nodesCol][d]&&ja(a,b[a.nodesCol][d],c)}}}function L(a,b,c){if(b){c.nocheck===true?b.hide():b.show();b.removeClass();b.addClass(Ta(a,
c))}}function Ta(a,b){var c=a.checkStyle+"_"+(b[a.checkedCol]?pb:qb)+"_"+(b[a.checkedCol]||a.checkStyle==U?b.check_True_Full?$a:ab:b.check_False_Full?$a:ab);c=b.checkboxFocus?c+"_"+rb:c;return sb+" "+c}function Ea(a,b){if(b&&b.parentNode){bb(a,b.parentNode);Ea(a,b.parentNode)}}function T(a,b){if(b)b[a.nodesCol]&&b[a.nodesCol].length>0?Ea(a,b[a.nodesCol][0]):Ea(a,b)}function bb(a,b){if(b){Sa(a,b);var c=h("#"+b.tId+x);L(a,c,b)}}function Sa(a,b){if(b){var c={trueFlag:true,falseFlag:true};if(b[a.nodesCol])for(var d=
0,e=b[a.nodesCol].length;d<e;d++){if(a.checkStyle==U&&(b[a.nodesCol][d][a.checkedCol]||!b[a.nodesCol][d].check_True_Full))c.trueFlag=false;else if(a.checkStyle!=U&&b[a.checkedCol]&&(!b[a.nodesCol][d][a.checkedCol]||!b[a.nodesCol][d].check_True_Full))c.trueFlag=false;else if(a.checkStyle!=U&&!b[a.checkedCol]&&(b[a.nodesCol][d][a.checkedCol]||!b[a.nodesCol][d].check_False_Full))c.falseFlag=false;if(!c.trueFlag||!c.falseFlag)break}b.check_True_Full=c.trueFlag;b.check_False_Full=c.falseFlag}}function Fa(a,
b){if(b.open||b&&b[a.nodesCol]&&b[a.nodesCol].length>0)Q(a,b,!b.open);else if(a.async)i.apply(a.callback.beforeAsync,[a.treeObjId,b],true)==false?Q(a,b,!b.open):Ga(a,b);else b&&Q(a,b,!b.open)}function Ga(a,b){var c,d;if(!(b&&(b.isAjaxing||!b.isParent))){if(b){b.isAjaxing=true;h("#"+b.tId+u).attr("class","ico_loading")}var e="";c=0;for(d=a.asyncParam.length;b&&c<d;c++)e+=(e.length>0?"&":"")+a.asyncParam[c]+"="+b[a.asyncParam[c]];if(i.isArray(a.asyncParamOther)){c=0;for(d=a.asyncParamOther.length;c<
d;c+=2)e+=(e.length>0?"&":"")+a.asyncParamOther[c]+"="+a.asyncParamOther[c+1]}else for(var g in a.asyncParamOther)e+=(e.length>0?"&":"")+g+"="+a.asyncParamOther[g];h.ajax({type:"POST",url:i.apply(a.asyncUrl,[b],a.asyncUrl),data:e,dataType:"text",success:function(j){var f=[];try{f=!j||j.length==0?[]:typeof j=="string"?eval("("+j+")"):j}catch(o){}if(b)b.isAjaxing=null;S(a,b);if(f&&f!=""){f=i.apply(a.asyncDataFilter,[a.treeObjId,b,f],f);M(a,b,f,false)}else M(a,b,[],false);a.treeObj.trigger(va,[a.treeObjId,
b,j])},error:function(j,f,o){a.expandTriggerFlag=false;S(a,b);if(b)b.isAjaxing=null;a.treeObj.trigger(wa,[a.treeObjId,b,j,f,o])}})}}function Q(a,b,c,d,e){if(!b||b.open==c)i.apply(e,[]);else{if(a.expandTriggerFlag){e=function(){b.open?a.treeObj.trigger(ta,[a.treeObjId,b]):a.treeObj.trigger(ua,[a.treeObjId,b])};a.expandTriggerFlag=false}c=h("#"+b.tId+F);var g=h("#"+b.tId+u),j=h("#"+b.tId+D);if(b.isParent){b.open=!b.open;b.iconOpen&&b.iconClose&&g.attr("style",ya(a,b));if(b.open){H(c,N);W(b,g,N);if(d==
false||a.expandSpeed==""){j.show();i.apply(e,[])}else if(b[a.nodesCol]&&b[a.nodesCol].length>0)j.show(a.expandSpeed,e);else{j.show();i.apply(e,[])}}else{H(c,O);W(b,g,O);if(d==false||a.expandSpeed==""){j.hide();i.apply(e,[])}else j.hide(a.expandSpeed,e)}}else i.apply(e,[])}}function Ha(a,b,c,d,e){var g=b?b[a.nodesCol]:a.root[a.nodesCol],j=b?false:d;if(g)for(var f=0,o=g.length;f<o;f++)g[f]&&Ha(a,g[f],c,j);Q(a,b,c,d,e)}function $(a,b,c,d,e){if(b)if(b.parentNode){Q(a,b,c,d);b.parentNode&&$(a,b.parentNode,
c,d,e)}else Q(a,b,c,d,e)}function cb(a,b,c){if(c){c.level=b?b.level+1:0;if(c[a.nodesCol]){b=0;for(var d=c[a.nodesCol].length;b<d;b++)c[a.nodesCol][b]&&cb(a,c,c[a.nodesCol][b])}}}function M(a,b,c,d){if(!(a.keepLeaf&&b&&!b.isParent)){if(a.isSimpleData)c=Ia(a,c);if(b){if(a.treeObj.find("#"+b.tId).length!=0){var e=h("#"+b.tId+F),g=h("#"+b.tId+u),j=h("#"+b.tId+D);if(!b.open){H(e,O);W(b,g,O);b.open=false;j.css({display:"none"})}db(a,b,c);ea(a,b.level+1,c,b);d||$(a,b,true)}}else{db(a,a.root,c);ea(a,0,c,
null)}}}function db(a,b,c){b[a.nodesCol]||(b[a.nodesCol]=[]);if(b[a.nodesCol].length>0){b[a.nodesCol][b[a.nodesCol].length-1].isLastNode=false;S(a,b[a.nodesCol][b[a.nodesCol].length-1])}b.isParent=true;b[a.nodesCol]=b[a.nodesCol].concat(c)}function aa(a,b,c,d,e){if(b!=c)if(!(a.keepLeaf&&b&&!b.isParent&&d==t)){var g=c.parentNode==null?a.root:c.parentNode,j=b===null||b==a.root;if(j&&b===null)b=a.root;if(j)d=t;var f=b.parentNode?b.parentNode:a.root;if(d!=ba&&d!=ka)d=t;var o,k,A=-1,B=0,n=null,p=null;
if(c.isFirstNode){A=0;if(g[a.nodesCol].length>1){n=g[a.nodesCol][1];n.isFirstNode=true}}else if(c.isLastNode){A=g[a.nodesCol].length-1;n=g[a.nodesCol][A-1];n.isLastNode=true}else{o=0;for(k=g[a.nodesCol].length;o<k;o++)if(g[a.nodesCol][o].tId==c.tId)A=o}A>=0&&g[a.nodesCol].splice(A,1);if(d!=t){o=0;for(k=f[a.nodesCol].length;o<k;o++)if(f[a.nodesCol][o].tId==b.tId)B=o}if(d==t){if(j)c.parentNode=null;else{b.isParent=true;c.parentNode=b}b[a.nodesCol]||(b[a.nodesCol]=[]);if(b[a.nodesCol].length>0){p=b[a.nodesCol][b[a.nodesCol].length-
1];p.isLastNode=false}b[a.nodesCol].splice(b[a.nodesCol].length,0,c);c.isLastNode=true;c.isFirstNode=b[a.nodesCol].length==1}else if(b.isFirstNode&&d==ba){f[a.nodesCol].splice(B,0,c);p=b;p.isFirstNode=false;c.parentNode=b.parentNode;c.isFirstNode=true;c.isLastNode=false}else if(b.isLastNode&&d==ka){f[a.nodesCol].splice(B+1,0,c);p=b;p.isLastNode=false;c.parentNode=b.parentNode;c.isFirstNode=false;c.isLastNode=true}else{d==ba?f[a.nodesCol].splice(B,0,c):f[a.nodesCol].splice(B+1,0,c);c.parentNode=b.parentNode;
c.isFirstNode=false;c.isLastNode=false}Pa(a,c);cb(a,c.parentNode,c);var la,ma;if(j)f=j=a.treeObj;else{j=h("#"+b.tId);la=h("#"+b.tId+F);ma=h("#"+b.tId+u);f=h("#"+b.tId+D)}if(d==t){H(la,N);W(b,ma,N);b.open=true;f.css({display:"block"});f.append(h("#"+c.tId).remove(null,true))}else if(d==ba)j.before(h("#"+c.tId).remove(null,true));else d==ka&&j.after(h("#"+c.tId).remove(null,true));S(a,c);if(!a.keepParent&&g[a.nodesCol].length<1){g.isParent=false;b=h("#"+g.tId+D);d=h("#"+g.tId+F);n=h("#"+g.tId+u);H(d,
P);W(g,n,P);b.css("display","none")}else n&&S(a,n);p&&S(a,p);if(a.checkable){bb(a,g);T(a,g);g!=c.parent&&T(a,c)}$(a,c.parentNode,true,e)}}function Pa(a,b){if(a.isSimpleData)b[a.treeNodeParentKey]=b.parentNode?b.parentNode[a.treeNodeKey]:a.rootPID}function Ca(a,b){var c=b.parentNode==null?a.root:b.parentNode;if(a.curTreeNode===b)a.curTreeNode=null;if(a.curEditTreeNode===b)a.curEditTreeNode=null;h("#"+b.tId).remove();delete J[a.treeObjId][b.tId];for(var d=-1,e=0,g=c[a.nodesCol].length;e<g;e++)if(c[a.nodesCol][e].tId==
b.tId)d=e;d>=0&&c[a.nodesCol].splice(d,1);if(!a.keepParent&&c[a.nodesCol].length<1){c.isParent=false;c.open=false;d=h("#"+c.tId+D);e=h("#"+c.tId+F);g=h("#"+c.tId+u);H(e,P);W(c,g,P);d.css("display","none")}else if(a.showLine&&c[a.nodesCol].length>0){c[a.nodesCol][c[a.nodesCol].length-1].isLastNode=true;c[a.nodesCol][c[a.nodesCol].length-1].isFirstNode=c[a.nodesCol].length==1;d=h("#"+c[a.nodesCol][c[a.nodesCol].length-1].tId+D);e=h("#"+c[a.nodesCol][c[a.nodesCol].length-1].tId+F);h("#"+c[a.nodesCol][c[a.nodesCol].length-
1].tId+u);if(c==a.root)if(c[a.nodesCol].length==1)H(e,Aa);else{c=h("#"+c[a.nodesCol][0].tId+F);H(c,Ba);H(e,ia)}else H(e,ia);d.removeClass(ga)}}function eb(a,b,c,d){if(!b||!c)return null;for(var e=0,g=b.length;e<g;e++){if(b[e][c]==d)return b[e];var j=eb(a,b[e][a.nodesCol],c,d);if(j)return j}return null}function fb(a,b,c,d){if(!b||!c)return[];for(var e=[],g=0,j=b.length;g<j;g++){b[g][c]==d&&e.push(b[g]);e=e.concat(fb(a,b[g][a.nodesCol],c,d))}return e}function gb(a,b,c,d){if(!b||!c)return[];for(var e=
[],g=0,j=b.length;g<j;g++){typeof b[g][c]=="string"&&b[g][c].indexOf(d)>-1&&e.push(b[g]);e=e.concat(gb(a,b[g][a.nodesCol],c,d))}return e}function K(a,b){if(!(a.curTreeNode==b&&a.curEditTreeNode==b&&b.editNameStatus)){G.cancelPreEditNode(a);G.cancelPreSelectedNode(a);if(a.editable&&b.editNameStatus){h("#"+b.tId+fa).html("<input type=text class='rename' id='"+b.tId+V+"' treeNode"+V+" >");var c=h("#"+b.tId+V);a.curEditInput=c;c.attr("value",b[a.nameCol]);i.inputFocus(c);c.bind("blur",function(){if(G.checkEvent(a)){b.editNameStatus=
false;K(a,b)}}).bind("keyup",function(d){if(d.keyCode=="13"){if(G.checkEvent(a)){b.editNameStatus=false;K(a,b)}}else if(d.keyCode=="27"){c.attr("value",b[a.nameCol]);b.editNameStatus=false;K(a,b)}}).bind("click",function(){return false}).bind("dblclick",function(){return false});h("#"+b.tId+q).addClass(hb);a.curEditTreeNode=b}else h("#"+b.tId+q).addClass(Ja);Ya(a,b);a.curTreeNode=b}}function ib(a,b,c){if(!b)return[];for(var d=[],e=0,g=b.length;e<g;e++){if(b[e].nocheck!==true&&b[e][a.checkedCol]==
c)d=d.concat([b[e]]);var j=ib(a,b[e][a.nodesCol],c);if(j.length>0)d=d.concat(j)}return d}function jb(a,b){if(!b)return[];for(var c=[],d=0,e=b.length;d<e;d++){if(b[d].nocheck!==true&&b[d][a.checkedCol]!=b[d].checkedOld)c=c.concat([b[d]]);var g=jb(a,b[d][a.nodesCol]);if(g.length>0)c=c.concat(g)}return c}function Ia(a,b){var c,d,e=a.treeNodeKey,g=a.treeNodeParentKey;if(!e||e==""||!b)return[];if(i.isArray(b)){var j=[],f=[];c=0;for(d=b.length;c<d;c++)f[b[c][e]]=b[c];c=0;for(d=b.length;c<d;c++)if(f[b[c][g]]){f[b[c][g]][a.nodesCol]||
(f[b[c][g]][a.nodesCol]=[]);f[b[c][g]][a.nodesCol].push(b[c])}else j.push(b[c]);return j}else return[b]}function Ka(a,b){if(!b)return[];var c=[];if(i.isArray(b))for(var d=0,e=b.length;d<e;d++){c.push(b[d]);if(b[d][a.nodesCol])c=c.concat(Ka(a,b[d][a.nodesCol]))}else{c.push(b);if(b[a.nodesCol])c=c.concat(Ka(a,b[a.nodesCol]))}return c}function tb(){return{container:null,setting:null,init:function(a){this.container=a;this.setting=r[a.attr("id")];return this},refresh:function(){this.setting.treeObj.empty();
J[this.setting.treeObjId]=[];this.setting.curTreeNode=null;this.setting.curEditTreeNode=null;this.setting.dragStatus=0;this.setting.dragNodeShowBefore=false;this.setting.checkRadioCheckedList=[];ea(this.setting,0,this.setting.root[this.setting.nodesCol])},setEditable:function(a){this.setting.editable=a;return this.refresh()},transformTozTreeNodes:function(a){return Ia(this.setting,a)},transformToArray:function(a){return Ka(this.setting,a)},getNodes:function(){return this.setting.root[this.setting.nodesCol]},
getSelectedNode:function(){return this.setting.curTreeNode},getCheckedNodes:function(a){return ib(this.setting,this.setting.root[this.setting.nodesCol],a!=false)},getChangeCheckedNodes:function(){return jb(this.setting,this.setting.root[this.setting.nodesCol])},getNodeByTId:function(a){if(!a)return null;return J[this.setting.treeObjId][a]},getNodeByParam:function(a,b){if(!a)return null;return eb(this.setting,this.setting.root[this.setting.nodesCol],a,b)},getNodesByParam:function(a,b){if(!a)return null;
return fb(this.setting,this.setting.root[this.setting.nodesCol],a,b)},getNodesByParamFuzzy:function(a,b,c){if(!a)return null;return gb(this.setting,c?c[this.setting.nodesCol]:this.setting.root[this.setting.nodesCol],a,b)},getNodeIndex:function(a){if(!a)return null;for(var b=a.parentNode==null?this.setting.root:a.parentNode,c=0,d=b[this.setting.nodesCol].length;c<d;c++)if(b[this.setting.nodesCol][c]==a)return c;return-1},getSetting:function(){var a=this.setting,b={checkType:{},callback:{}},c=a.checkType;
a.checkType=undefined;var d=a.callback;a.callback=undefined;var e=a.root;a.root=undefined;h.extend(b,a);a.checkType=c;a.callback=d;a.root=e;h.extend(true,b.checkType,c);h.extend(b.callback,d);return b},updateSetting:function(a){if(a){var b=this.setting,c=b.treeObjId,d=a.checkType;a.checkType=undefined;var e=a.callback;a.callback=undefined;var g=a.root;a.root=undefined;h.extend(b,a);a.checkType=d;a.callback=e;a.root=g;h.extend(true,b.checkType,d);h.extend(b.callback,e);b.treeObjId=c;b.treeObj=this.container}},
expandAll:function(a){Ha(this.setting,null,a,true)},expandNode:function(a,b,c,d){if(a){b&&a.parentNode&&$(this.setting,a.parentNode,b,false);if(c)Ha(this.setting,a,b,false,function(){d!==false&&h("#"+a.tId+u).focus().blur()});else if(a.open!=b){Fa(this.setting,a);d!==false&&h("#"+a.tId+u).focus().blur()}}},selectNode:function(a){if(a)if(G.checkEvent(this.setting)){K(this.setting,a);a.parentNode?$(this.setting,a.parentNode,true,false,function(){h("#"+a.tId+u).focus().blur()}):h("#"+a.tId+u).focus().blur()}},
cancleSelectedNode:function(){this.cancelSelectedNode()},cancelSelectedNode:function(){G.cancelPreSelectedNode(this.setting)},checkAllNodes:function(a){var b=this.setting;if(b.checkable)for(var c=0;c<b.root[b.nodesCol].length;c++){var d=b.root[b.nodesCol][c];d[b.checkedCol]=a;ja(b,d,a)}},reAsyncChildNodes:function(a,b){if(this.setting.async){var c=!a;if(c)a=this.setting.root;if(b=="refresh"){a[this.setting.nodesCol]=[];c?this.setting.treeObj.empty():h("#"+a.tId+D).empty()}Ga(this.setting,c?null:a)}},
addNodes:function(a,b,c){if(b){a||(a=null);b=i.isArray(b)?b:[b];M(this.setting,a,b,c==true)}},inputNodeName:function(a){if(a)if(G.checkEvent(this.setting)){var b=this.setting;a.editNameStatus=true;X(b,a);K(b,a)}},cancelInput:function(a){if(this.setting.curEditTreeNode){var b=this.setting.curEditTreeNode;G.cancelPreEditNode(this.setting,a?a:b[this.setting.nameCol]);this.selectNode(b)}},updateNode:function(a,b){if(a)if(G.checkEvent(this.setting)){var c=h("#"+a.tId+x);if(this.setting.checkable){b==true&&
Za(this.setting,a);L(this.setting,c,a);T(this.setting,a)}za(this.setting,a);h("#"+a.tId+q).attr("target",a.target||"_blank");var d=this.setting;c=h("#"+a.tId+q);d=a.url&&!d.editable?a.url:null;d==null||d.length==0?c.removeAttr("href"):c.attr("href",d);S(this.setting,a);d=this.setting;c=h("#"+a.tId+q);(d=Qa(d,a))&&c.css(d)}},moveNode:function(a,b,c){if(b)if(!(a&&(b.parentNode==a&&c==t||h("#"+b.tId).find("#"+a.tId).length>0))){a||(a=null);aa(this.setting,a,b,c,false)}},copyNode:function(a,b,c){if(!b)return null;
b=i.clone(b);if(!a){a=null;c=t}if(c==t)M(this.setting,a,[b]);else{M(this.setting,a.parentNode,[b]);aa(this.setting,a,b,c,false)}return b},removeNode:function(a){a&&Ca(this.setting,a)}}}var na="ZTREE_NODECREATED",oa="ZTREE_CLICK",pa="ZTREE_CHANGE",qa="ZTREE_RENAME",ra="ZTREE_REMOVE",sa="ZTREE_DRAG",da="ZTREE_DROP",ta="ZTREE_EXPAND",ua="ZTREE_COLLAPSE",va="ZTREE_ASYNC_SUCCESS",wa="ZTREE_ASYNC_ERROR",F="_switch",u="_ico",fa="_span",V="_input",x="_check",Y="_edit",Z="_remove",D="_ul",q="_a",Aa="root",
Ba="roots",Wa="center",ia="bottom",Xa="noLine",ga="line",N="open",O="close",P="docu",Ja="curSelectedNode",hb="curSelectedNode_Edit",U="radio",sb="chk",qb="false",pb="true",$a="full",ab="part",rb="focus",xa="all",t="inner",ba="before",ka="after",r=[],mb=0,J=[];h.fn.zTree=function(a,b){var c={treeObjId:"",treeObj:null,checkable:false,editable:false,edit_renameBtn:true,edit_removeBtn:true,showLine:true,showIcon:true,keepParent:false,keepLeaf:false,curTreeNode:null,curEditTreeNode:null,dragStatus:0,dragNodeShowBefore:false,
dragCopy:false,dragMove:true,checkStyle:"checkbox",checkType:{Y:"ps",N:"ps"},checkRadioType:"level",checkRadioCheckedList:[],async:false,asyncUrl:"",asyncParam:[],asyncParamOther:[],asyncDataFilter:null,isSimpleData:false,treeNodeKey:"",treeNodeParentKey:"",rootPID:null,nameCol:"name",nodesCol:"nodes",checkedCol:"checked",expandSpeed:"fast",expandTriggerFlag:false,addHoverDom:null,removeHoverDom:null,addDiyDom:null,fontCss:{},root:{isRoot:true,nodes:[]},callback:{beforeAsync:null,beforeClick:null,
beforeRightClick:null,beforeMouseDown:null,beforeMouseUp:null,beforeChange:null,beforeDrag:null,beforeDrop:null,beforeRename:null,beforeRemove:null,beforeExpand:null,beforeCollapse:null,confirmDragOpen:null,confirmRename:null,nodeCreated:null,click:null,rightClick:null,mouseDown:null,mouseUp:null,change:null,drag:null,drop:null,rename:null,remove:null,expand:null,collapse:null,asyncConfirmData:null,asyncSuccess:null,asyncError:null}};if(a){var d=a.checkType;a.checkType=undefined;var e=a.callback;
a.callback=undefined;var g=a.root;a.root=undefined;h.extend(c,a);a.checkType=d;h.extend(true,c.checkType,d);a.callback=e;h.extend(c.callback,e);a.root=g;h.extend(c.root,g)}c.treeObjId=this.attr("id");c.treeObj=this;c.root.tId=-1;c.root.name="ZTREE ROOT";c.root.isRoot=true;c.checkRadioCheckedList=[];c.curTreeNode=null;c.curEditTreeNode=null;c.dragNodeShowBefore=false;c.dragStatus=0;c.expandTriggerFlag=false;c.root[c.nodesCol]||(c.root[c.nodesCol]=[]);if(b)c.root[c.nodesCol]=b;if(c.isSimpleData)c.root[c.nodesCol]=
Ia(c,c.root[c.nodesCol]);r[c.treeObjId]=c;c.treeObj.empty();J[c.treeObjId]=[];lb(c,this);if(c.root[c.nodesCol]&&c.root[c.nodesCol].length>0)ea(c,0,c.root[c.nodesCol]);else c.async&&c.asyncUrl&&c.asyncUrl.length>0&&Ga(c);return(new tb).init(this)};var i={eqs:function(a,b){return a.toLowerCase()===b.toLowerCase()},isArray:function(a){return Object.prototype.toString.apply(a)==="[object Array]"},noSel:function(){window.getSelection?window.getSelection().removeAllRanges():setTimeout(function(){document.selection.empty()},
10)},inputFocus:function(a){if(a.get(0)){a.focus();var b=a.get(0);a=a.val().length;if(b.setSelectionRange){b.focus();b.setSelectionRange(a,a)}else if(b.createTextRange){b=b.createTextRange();b.collapse(true);b.moveEnd("character",a);b.moveStart("character",a);b.select()}}},apply:function(a,b,c){if(typeof a=="function")return a.apply(i,b);return c},getAbs:function(a){oRect=a.getBoundingClientRect();return[oRect.left,oRect.top]},getMDom:function(a,b,c){if(!b)return null;for(;b&&b.id!==a.treeObjId;){for(var d=
0,e=c.length;b.tagName&&d<e;d++)if(i.eqs(b.tagName,c[d].tagName)&&b.getAttribute(c[d].attrName)!==null)return b;b=b.parentNode}return null},clone:function(a){var b;if(a instanceof Array){b=[];for(var c=a.length;c--;)b[c]=arguments.callee(a[c]);return b}else if(typeof a=="function")return a;else if(a instanceof Object){b={};for(c in a)if(c!="parentNode")b[c]=arguments.callee(a[c]);return b}else return a}},G={checkEvent:function(a){return G.checkCancelPreEditNode(a)},cancelPreSelectedNode:function(a){if(a.curTreeNode){h("#"+
a.curTreeNode.tId+q).removeClass(Ja);za(a,a.curTreeNode);X(a,a.curTreeNode);a.curTreeNode=null}},checkCancelPreEditNode:function(a){if(a.curEditTreeNode){var b=a.curEditInput;if(i.apply(a.callback.confirmRename,[a.treeObjId,a.curEditTreeNode,b.val()],true)===false){a.curEditTreeNode.editNameStatus=true;i.inputFocus(b);return false}}return true},cancelPreEditNode:function(a,b){if(a.curEditTreeNode){var c=h("#"+a.curEditTreeNode.tId+V);a.curEditTreeNode[a.nameCol]=b?b:c.val();a.treeObj.trigger(qa,[a.treeObjId,
a.curEditTreeNode]);h("#"+a.curEditTreeNode.tId+q).removeClass(hb);c.unbind();za(a,a.curEditTreeNode);a.curEditTreeNode.editNameStatus=false;a.curEditTreeNode=null;a.curEditInput=null}return true}},C={onSwitchNode:function(a){var b=r[a.data.treeObjId];a=a.data.treeNode;if(a.open){if(i.apply(b.callback.beforeCollapse,[b.treeObjId,a],true)==false)return}else if(i.apply(b.callback.beforeExpand,[b.treeObjId,a],true)==false)return;b.expandTriggerFlag=true;Fa(b,a)},onClickNode:function(a){var b=r[a.data.treeObjId];
a=a.data.treeNode;if(i.apply(b.callback.beforeClick,[b.treeObjId,a],true)!=false){K(b,a);b.treeObj.trigger(oa,[b.treeObjId,a])}},onCheckNode:function(a){var b=r[a.data.treeObjId];a=a.data.treeNode;if(i.apply(b.callback.beforeChange,[b.treeObjId,a],true)!=false){a[b.checkedCol]=!a[b.checkedCol];Za(b,a);var c=h("#"+a.tId+x);L(b,c,a);T(b,a);b.treeObj.trigger(pa,[b.treeObjId,a])}},onMouseoverCheck:function(a){var b=r[a.data.treeObjId];a=a.data.treeNode;var c=h("#"+a.tId+x);a.checkboxFocus=true;L(b,c,
a)},onMouseoutCheck:function(a){var b=r[a.data.treeObjId];a=a.data.treeNode;var c=h("#"+a.tId+x);a.checkboxFocus=false;L(b,c,a)},onMousedownNode:function(a){var b=r[a.data.treeObjId],c=a.data.treeNode;if(!(a.button==2||!b.editable||!b.dragCopy&&!b.dragMove)){var d=a.target;if(!(c.editNameStatus&&i.eqs(d.tagName,"input")&&d.getAttribute("treeNode"+V)!==null)){var e=document,g,j,f,o=false,k=b,A=null,B=null,n=null,p=t,la=a.clientX,ma=a.clientY,kb=(new Date).getTime();h(e).mousemove(function(m){i.noSel();
if(b.dragStatus==0&&Math.abs(la-m.clientX)<"5"&&Math.abs(ma-m.clientY)<"5")return true;h("body").css("cursor","pointer");if(b.dragStatus==0&&c.isParent&&c.open){Q(b,c,!c.open);b.dragNodeShowBefore=true}if(b.dragStatus==0){b.dragStatus=-1;if(i.apply(b.callback.beforeDrag,[b.treeObjId,c],true)==false)return true;b.dragStatus=1;Va(true);c.editNameStatus=false;K(b,c);X(b,c);var s=h("#"+c.tId).clone();s.attr("id",c.tId+"_tmp");s.css("padding","0");s.children("#"+c.tId+q).removeClass(Ja);s.children("#"+
c.tId+D).css("display","none");g=h("<ul class='zTreeDragUL'></ul>").append(s);g.attr("id",c.tId+D+"_tmp");g.addClass(b.treeObj.attr("class"));g.appendTo("body");j=h("<button class='tmpzTreeMove_arrow'></button>");j.attr("id","zTreeMove_arrow_tmp");j.appendTo("body");b.treeObj.trigger(sa,[b.treeObjId,c])}if(b.dragStatus==1&&j.attr("id")!=m.target.id){if(f){f.removeClass("tmpTargetTree");n&&h("#"+n+q,f).removeClass("tmpTargetNode")}n=f=null;o=false;k=b;for(var l in r)if(r[l].editable&&r[l].treeObjId!=
b.treeObjId&&(m.target.id==r[l].treeObjId||h(m.target).parents("#"+r[l].treeObjId).length>0)){o=true;k=r[l]}s=h(e).scrollTop();l=h(e).scrollLeft();var I=k.treeObj.offset(),La=k.treeObj.get(0).scrollHeight,v=k.treeObj.get(0).scrollWidth,y=m.clientY+s-I.top,R=k.treeObj.height()+I.top-m.clientY-s,E=m.clientX+l-I.left;I=k.treeObj.width()+I.left-m.clientX-l;y=y<10&&y>-5;R=R<10&&R>-5;E=E<10&&E>-5;I=I<10&&I>-5;var ub=y&&k.treeObj.scrollTop()<=0;La=R&&k.treeObj.scrollTop()+k.treeObj.height()+10>=La;var vb=
E&&k.treeObj.scrollLeft()<=0;v=I&&k.treeObj.scrollLeft()+k.treeObj.width()+10>=v;if(m.target.id&&k.treeObj.find("#"+m.target.id).length>0){for(var z=m.target;z&&z.tagName&&!i.eqs(z.tagName,"li")&&z.id!=k.treeObjId;)z=z.parentNode;var Ma=false;if(c.parentNode&&z.id!=c.tId&&h("#"+c.tId).find("#"+z.id).length==0)Ma=true;else if(c.parentNode==null&&z.id!=c.tId&&h("#"+c.tId).find("#"+z.id).length==0)Ma=true;if(Ma)if(m.target.id&&(m.target.id==z.id+q||h(m.target).parents("#"+z.id+q).length>0)){f=h(z);n=
z.id}}if(m.target.id==k.treeObjId||h(m.target).parents("#"+k.treeObjId).length>0){if(!f&&(ub||La||vb||v)&&(o||!o&&c.parentNode!=null)){f=k.treeObj;f.addClass("tmpTargetTree")}if(y)k.treeObj.scrollTop(k.treeObj.scrollTop()-10);else R&&k.treeObj.scrollTop(k.treeObj.scrollTop()+10);if(E)k.treeObj.scrollLeft(k.treeObj.scrollLeft()-10);else I&&k.treeObj.scrollLeft(k.treeObj.scrollLeft()+10);f&&f!=k.treeObj&&f.offset().left<k.treeObj.offset().left&&k.treeObj.scrollLeft(k.treeObj.scrollLeft()+f.offset().left-
k.treeObj.offset().left)}g.css({top:m.clientY+s+3+"px",left:m.clientX+l+3+"px"});v=l=0;if(f&&f.attr("id")!=k.treeObjId){y=n==null?null:J[k.treeObjId][n];l=h("#"+c.tId);v=l.prev().attr("id")==n;l=l.next().attr("id")!=n;v=!v;E=!(c.parentNode&&c.parentNode.tId==n)&&!(k.keepLeaf&&!y.isParent);if(!l&&!v&&!E){f=null;n="";p=t;j.css({display:"none"});window.zTreeMoveTimer&&clearTimeout(window.zTreeMoveTimer)}else{y=h("#"+n+q,f);y.addClass("tmpTargetNode");R=l?E?0.25:v?0.5:1:-1;E=v?E?0.75:l?0.5:0:-1;m=(m.clientY+
s-y.offset().top)/y.height();if((R==1||m<=R&&m>=-0.2)&&l){l=1-j.width();v=0-j.height()/2;p=ba}else if((E==0||m>=E&&m<=1.2)&&v){l=1-j.width();v=y.height()-j.height()/2;p=ka}else{l=5-j.width();v=0;p=t}j.css({display:"block",top:y.offset().top+v+"px",left:y.offset().left+l+"px"});if(A!=n||B!=p)kb=(new Date).getTime();if(p==t)window.zTreeMoveTimer=setTimeout(function(){if(p==t){var ca=J[k.treeObjId][n];ca&&ca.isParent&&!ca.open&&(new Date).getTime()-kb>500&&i.apply(k.callback.confirmDragOpen,[k.treeObjId,
ca],true)&&Fa(k,ca)}},600)}}else{p=t;j.css({display:"none"});window.zTreeMoveTimer&&clearTimeout(window.zTreeMoveTimer)}A=n;B=p}return false});h(e).mouseup(function(m){window.zTreeMoveTimer&&clearTimeout(window.zTreeMoveTimer);B=A=null;h(e).unbind("mousemove");h(e).unbind("mouseup");h("body").css("cursor","auto");if(f){f.removeClass("tmpTargetTree");n&&h("#"+n+q,f).removeClass("tmpTargetNode")}Va(false);if(b.dragStatus!=0){b.dragStatus=0;if(c.isParent&&b.dragNodeShowBefore&&!c.open){Q(b,c,!c.open);
b.dragNodeShowBefore=false}g&&g.remove();j&&j.remove();if(f&&n&&c.parentNode&&n==c.parentNode.tId&&p==t)f=null;if(f){var s=n==null?null:J[k.treeObjId][n];if(i.apply(b.callback.beforeDrop,[k.treeObjId,c,s,p],true)!=false){var l=(m=m.ctrlKey&&b.dragMove&&b.dragCopy||!b.dragMove&&b.dragCopy)?i.clone(c):c;if(o){m||Ca(b,c);if(p==t)M(k,s,[l]);else{M(k,s.parentNode,[l]);aa(k,s,l,p,false)}}else if(m)if(p==t)M(k,s,[l]);else{M(k,s.parentNode,[l]);aa(k,s,l,p,false)}else aa(k,s,l,p);K(k,l);h("#"+l.tId+u).focus().blur();
b.treeObj.trigger(da,[k.treeObjId,l,s,p])}}else b.treeObj.trigger(da,[b.treeObjId,null,null,null])}});a.preventDefault&&a.preventDefault()}}},onHoverOverNode:function(a){var b=r[a.data.treeObjId],c=a.data.treeNode;if(b.curHoverTreeNode!=c){a.data.treeNode=b.curHoverTreeNode;C.onHoverOutNode(a)}b.curHoverTreeNode=c;Ya(b,c)},onHoverOutNode:function(a){a=r[a.data.treeObjId];if(a.curHoverTreeNode&&a.curTreeNode!=a.curHoverTreeNode){X(a,a.curHoverTreeNode);a.curHoverTreeNode=null}},onZTreeMousedown:function(a){var b=
r[a.data.treeObjId],c=a.data.treeNode;i.apply(b.callback.beforeMouseDown,[b.treeObjId,c],true)&&i.apply(b.callback.mouseDown,[a,b.treeObjId,c]);return true},onZTreeMouseup:function(a){var b=r[a.data.treeObjId],c=a.data.treeNode;i.apply(b.callback.beforeMouseUp,[b.treeObjId,c],true)&&i.apply(b.callback.mouseUp,[a,b.treeObjId,c]);return true},onZTreeDblclick:function(a){var b=r[a.data.treeObjId],c=a.data.treeNode;i.apply(b.callback.beforeDblclick,[b.treeObjId,c],true)&&i.apply(b.callback.dblclick,[a,
b.treeObjId,c]);return true},onZTreeContextmenu:function(a){var b=r[a.data.treeObjId],c=a.data.treeNode;i.apply(b.callback.beforeRightClick,[b.treeObjId,c],true)&&i.apply(b.callback.rightClick,[a,b.treeObjId,c]);return typeof b.callback.rightClick!="function"}},ha=[]})(jQuery);


/* Wayfarer Tooltip
 * Version 1.0.9
 * Author Abel Mohler
 * URI: http://www.wayfarerweb.com/wtooltip.php
 * Released with the MIT License: http://www.wayfarerweb.com/mit.php
 */
(function($){ //jQuery.noConflict()compliant
    $.fn.wTooltip = function(o, callback){
        o = $.extend({ //defaults, can be overidden
            content: null, //string content for tooltip.
            ajax: null, //path to content for tooltip
            follow: true, //does tooltip follow the cursor?
            auto: true, //If false, tooltip won't automatically transition, it must be manually shown/hidden
            fadeIn: 0, //fade in, in milliseconds ("fast, "slow", etc may also be used)
            fadeOut: 0, //fade out, in milliseconds ("fast, "slow", etc may also be used)
            appendTip: document.body, //should probably not need to be overridden, but could be useful if you require a tip that remains relative to an exact point
            degrade: false, //if true, in IE6 tooltip will degrade to a title attribute message
            offsetY: 10, //offsetY and offsetX properties designate position from the cursor
            offsetX: 1,
            style: {},
            className: null, //to style the tooltip externally, pass a className or id
            id: null,
            callBefore: function(tooltip, node, settings){
            }, //called when mouse enters the area
            callAfter: function(tooltip, node, settings){
            }, //called when mouse leaves the area (same as "callback" option)
            clickAction: function(tooltip, node){
                $(tooltip).hide();
            }, //called when the element is clicked, with access to tooltip
            delay: 0, //delay (in milliseconds)before tooltip appears and callBefore executes
            timeout: 0 //delay (in milliseconds)before tooltip transitions away, and callAfter executes
        }, o ||
        {});

        if (!o.style && typeof o.style != "object") {
            o.style = {};
            o.style.zIndex = "1000";
        }
        else {
            o.style = $.extend({ //the default style rules of the tooltip
                border: "1px solid gray",
                background: "#FFF8CC", //#edeef0
                color: "#000",
                padding: "5px",
                zIndex: "1000",
                textAlign: "left"
            }, o.style ||
            {});
        }

        if (typeof callback == "function")
            o.callAfter = callback || o.callAfter;

        o.style.display = "none", o.style.position = "absolute"; //permanent defaults
        //private settings
        var title, timeout, timeout2, iId, over = {}, firstMove = true, hovered = false, maxed = false, tooltip = document.createElement('div'), ie6 = (typeof document.body.style.maxWidth == "undefined") ? true : false, talk = (typeof $.talk == "function" && typeof $.listen == "function") ? true : false;

        if (o.id)
            tooltip.id = o.id;
        if (o.className)
            tooltip.className = o.className;

        o.degrade = (o.degrade && ie6) ? true : false; //only degrades if also IE6
        for (var p in o.style)//apply styles to tooltip
             tooltip.style[p] = o.style[p];

        function fillTooltip(condition){
            if (condition) {
                if (o.degrade)//replace html characters for proper degradation to title attribute
                    $(tooltip).html(o.content.replace(/<\/?[^>]+>/gi, ''));
                else //otherwise just fill the tooltip with content
                     $(tooltip).html(o.content);
            }
        }

        if (o.ajax) { //if o.ajax is selected, this will fill and thus override o.content
            $.get(o.ajax, function(data){
                if (data)
                    o.content = data;
                fillTooltip(o.content);
            });
        }

        function offConditions(that){
            function _offActions(that){
                if (title && !o.content) {
                    title = "";
                }
            }
            function _execute(){
                if (!hovered && o.auto) {
                    clearInterval(iId);
                    if (o.fadeOut) {
                        $(tooltip).fadeOut(o.fadeOut, function(){
                            _offActions(that);
                        });
                    }
                    else {
                        _offActions(that);
                        tooltip.style.display = "none";
                    }
                }
                if (typeof o.callAfter == "function")
                    o.callAfter(tooltip, that, o);
                if (talk)
                    o = $.listen(o);
            }
            if (o.timeout > 0) {
                timeout2 = setTimeout(function(){
                    _execute();
                }, o.timeout);
            }
            else {
                _execute();
            }
        }

        $(tooltip).hover(function(){
            hovered = true;
        }, function(){
            hovered = false;
            offConditions(over);
        });

        //initialize
        if (talk) { //A "channel" for plugins to "talk" to each other, and callbacks to manipulate settings
            o.key = tooltip;
            o.plugin = "wTooltip";
            o.channel = "wayfarer";
            $.talk(o);
        }

        fillTooltip(o.content && !o.ajax);
        $(tooltip).appendTo(o.appendTip);

        return this.each(function(){ //returns the element chain
            $(this).hover(function(){
                var that = this;
                clearTimeout(timeout2);
                if ((this.title || this.titleMemKeep) && !o.degrade && !o.content) {
                    title = this.title || this.titleMemKeep;
                    if(this.title) {
                        this.titleMemKeep = this.title;
                        this.title = "";
                    }
                }
                if (o.content && o.degrade)
                    this.title = tooltip.innerHTML;

                function _execute(){
                    if (typeof o.callBefore == "function")
                        o.callBefore(tooltip, that, o);
                    if (talk)
                        o = $.listen(o); //ping for new settings

                    var display;
                    if (o.content) {
                        if (!o.degrade)
                            display = "block";
                    }
                    else
                        if (title && !o.degrade) {
                            $(tooltip).html(unescape(title));
                            display = "block";
                            title = "";
                        }
                        else {
                            display = "none";
                        }
                    if (o.auto) {
                        if (display == "block" && o.fadeIn)
                            $(tooltip).fadeIn(o.fadeIn);
                        else
                            tooltip.style.display = display;
                    }
                }

                if (o.delay > 0) {
                    timeout = setTimeout(function(){
                        _execute();
                    }, o.delay);
                }
                else {
                    _execute();
                }
            }, function() {
                clearTimeout(timeout);
                var that = this;
                firstMove = true;
                if (!o.follow || maxed || ((o.offsetX < 0 && (0 - o.offsetX < $(tooltip).outerWidth())) && (o.offsetY > 0 && 0 - o.offsetY < $(tooltip).outerHeight()))) {
                    setTimeout(function(){
                        iId = setInterval(function(){
                            offConditions(that)
                        }, 1)
                    }, 1);
                }
                else {
                    offConditions(this);
                }
            });

            $(this).mousemove(function(e){
                over = this; //tracks the event trigger in the plugin-global "over"
                if (o.follow || firstMove) {
                    var scrollY = $(window).scrollTop(), scrollX = $(window).scrollLeft(), top = e.clientY + scrollY + o.offsetY, left = e.clientX + scrollX + o.offsetX, outerH = $(o.appendTip).outerHeight(), innerH = $(o.appendTip).innerHeight(), maxLeft = $(window).width() + scrollX - $(tooltip).outerWidth(), maxTop = $(window).height() + scrollY - $(tooltip).outerHeight();

                    top = (outerH > innerH) ? top - (outerH - innerH) : top; //if appended area (usually BODY) has a border on top, adjust
                    maxed = (top > maxTop || left > maxLeft) ? true : false;

                    if (left - scrollX <= 0 && o.offsetX < 0)
                        left = scrollX;
                    else
                        if (left > maxLeft)
                            left = maxLeft;
                    if (top - scrollY <= 0 && o.offsetY < 0)
                        top = scrollY;
                    else
                        if (top > maxTop)
                            top = maxTop;

                    tooltip.style.top = top + "px";
                    tooltip.style.left = left + "px";
                    firstMove = false;
                }
            });

            if (typeof o.clickAction == "function") {
                $(this).click(function(){
                    o.clickAction(tooltip, this);
                });
            }
        });
    }
})(jQuery);

/* Wayfarer Tooltip
 * Version 1.0.9
 * Author Abel Mohler
 * URI: http://www.wayfarerweb.com/wtooltip.php
 * Released with the MIT License: http://www.wayfarerweb.com/mit.php
 */
(function($){ //jQuery.noConflict()compliant
    $.fn.wTooltip = function(o, callback){
        o = $.extend({ //defaults, can be overidden
            content: null, //string content for tooltip.
            ajax: null, //path to content for tooltip
            follow: true, //does tooltip follow the cursor?
            auto: true, //If false, tooltip won't automatically transition, it must be manually shown/hidden
            fadeIn: 0, //fade in, in milliseconds ("fast, "slow", etc may also be used)
            fadeOut: 0, //fade out, in milliseconds ("fast, "slow", etc may also be used)
            appendTip: document.body, //should probably not need to be overridden, but could be useful if you require a tip that remains relative to an exact point
            degrade: false, //if true, in IE6 tooltip will degrade to a title attribute message
            offsetY: 10, //offsetY and offsetX properties designate position from the cursor
            offsetX: 1,
            style: {},
            className: null, //to style the tooltip externally, pass a className or id
            id: null,
            callBefore: function(tooltip, node, settings){
            }, //called when mouse enters the area
            callAfter: function(tooltip, node, settings){
            }, //called when mouse leaves the area (same as "callback" option)
            clickAction: function(tooltip, node){
                $(tooltip).hide();
            }, //called when the element is clicked, with access to tooltip
            delay: 0, //delay (in milliseconds)before tooltip appears and callBefore executes
            timeout: 0 //delay (in milliseconds)before tooltip transitions away, and callAfter executes
        }, o ||
        {});

        if (!o.style && typeof o.style != "object") {
            o.style = {};
            o.style.zIndex = "1000";
        }
        else {
            o.style = $.extend({ //the default style rules of the tooltip
                border: "1px solid gray",
                background: "#FFF8CC", //#edeef0
                color: "#000",
                padding: "5px",
                zIndex: "1000",
                textAlign: "left"
            }, o.style ||
            {});
        }

        if (typeof callback == "function")
            o.callAfter = callback || o.callAfter;

        o.style.display = "none", o.style.position = "absolute"; //permanent defaults
        //private settings
        var title, timeout, timeout2, iId, over = {}, firstMove = true, hovered = false, maxed = false, tooltip = document.createElement('div'), ie6 = (typeof document.body.style.maxWidth == "undefined") ? true : false, talk = (typeof $.talk == "function" && typeof $.listen == "function") ? true : false;

        if (o.id)
            tooltip.id = o.id;
        if (o.className)
            tooltip.className = o.className;

        o.degrade = (o.degrade && ie6) ? true : false; //only degrades if also IE6
        for (var p in o.style)//apply styles to tooltip
             tooltip.style[p] = o.style[p];

        function fillTooltip(condition){
            if (condition) {
                if (o.degrade)//replace html characters for proper degradation to title attribute
                    $(tooltip).html(o.content.replace(/<\/?[^>]+>/gi, ''));
                else //otherwise just fill the tooltip with content
                     $(tooltip).html(o.content);
            }
        }

        if (o.ajax) { //if o.ajax is selected, this will fill and thus override o.content
            $.get(o.ajax, function(data){
                if (data)
                    o.content = data;
                fillTooltip(o.content);
            });
        }

        function offConditions(that){
            function _offActions(that){
                if (title && !o.content) {
                    title = "";
                }
            }
            function _execute(){
                if (!hovered && o.auto) {
                    clearInterval(iId);
                    if (o.fadeOut) {
                        $(tooltip).fadeOut(o.fadeOut, function(){
                            _offActions(that);
                        });
                    }
                    else {
                        _offActions(that);
                        tooltip.style.display = "none";
                    }
                }
                if (typeof o.callAfter == "function")
                    o.callAfter(tooltip, that, o);
                if (talk)
                    o = $.listen(o);
            }
            if (o.timeout > 0) {
                timeout2 = setTimeout(function(){
                    _execute();
                }, o.timeout);
            }
            else {
                _execute();
            }
        }

        $(tooltip).hover(function(){
            hovered = true;
        }, function(){
            hovered = false;
            offConditions(over);
        });

        //initialize
        if (talk) { //A "channel" for plugins to "talk" to each other, and callbacks to manipulate settings
            o.key = tooltip;
            o.plugin = "wTooltip";
            o.channel = "wayfarer";
            $.talk(o);
        }

        fillTooltip(o.content && !o.ajax);
        $(tooltip).appendTo(o.appendTip);

        return this.each(function(){ //returns the element chain
            $(this).hover(function(){
                var that = this;
                clearTimeout(timeout2);
                if ((this.title || this.titleMemKeep) && !o.degrade && !o.content) {
                    title = this.title || this.titleMemKeep;
                    if(this.title) {
                        this.titleMemKeep = this.title;
                        this.title = "";
                    }
                }
                if (o.content && o.degrade)
                    this.title = tooltip.innerHTML;

                function _execute(){
                    if (typeof o.callBefore == "function")
                        o.callBefore(tooltip, that, o);
                    if (talk)
                        o = $.listen(o); //ping for new settings

                    var display;
                    if (o.content) {
                        if (!o.degrade)
                            display = "block";
                    }
                    else
                        if (title && !o.degrade) {
                            $(tooltip).html(unescape(title));
                            display = "block";
                            title = "";
                        }
                        else {
                            display = "none";
                        }
                    if (o.auto) {
                        if (display == "block" && o.fadeIn)
                            $(tooltip).fadeIn(o.fadeIn);
                        else
                            tooltip.style.display = display;
                    }
                }

                if (o.delay > 0) {
                    timeout = setTimeout(function(){
                        _execute();
                    }, o.delay);
                }
                else {
                    _execute();
                }
            }, function() {
                clearTimeout(timeout);
                var that = this;
                firstMove = true;
                if (!o.follow || maxed || ((o.offsetX < 0 && (0 - o.offsetX < $(tooltip).outerWidth())) && (o.offsetY > 0 && 0 - o.offsetY < $(tooltip).outerHeight()))) {
                    setTimeout(function(){
                        iId = setInterval(function(){
                            offConditions(that)
                        }, 1)
                    }, 1);
                }
                else {
                    offConditions(this);
                }
            });

            $(this).mousemove(function(e){
                over = this; //tracks the event trigger in the plugin-global "over"
                if (o.follow || firstMove) {
                    var scrollY = $(window).scrollTop(), scrollX = $(window).scrollLeft(), top = e.clientY + scrollY + o.offsetY, left = e.clientX + scrollX + o.offsetX, outerH = $(o.appendTip).outerHeight(), innerH = $(o.appendTip).innerHeight(), maxLeft = $(window).width() + scrollX - $(tooltip).outerWidth(), maxTop = $(window).height() + scrollY - $(tooltip).outerHeight();

                    top = (outerH > innerH) ? top - (outerH - innerH) : top; //if appended area (usually BODY) has a border on top, adjust
                    maxed = (top > maxTop || left > maxLeft) ? true : false;

                    if (left - scrollX <= 0 && o.offsetX < 0)
                        left = scrollX;
                    else
                        if (left > maxLeft)
                            left = maxLeft;
                    if (top - scrollY <= 0 && o.offsetY < 0)
                        top = scrollY;
                    else
                        if (top > maxTop)
                            top = maxTop;

                    tooltip.style.top = top + "px";
                    tooltip.style.left = left + "px";
                    firstMove = false;
                }
            });

            if (typeof o.clickAction == "function") {
                $(this).click(function(){
                    o.clickAction(tooltip, this);
                });
            }
        });
    }
})(jQuery);

/* Wayfarer Tooltip
 * Version 1.0.9
 * Author Abel Mohler
 * URI: http://www.wayfarerweb.com/wtooltip.php
 * Released with the MIT License: http://www.wayfarerweb.com/mit.php
 */
(function($){ //jQuery.noConflict()compliant
    $.fn.wTooltip = function(o, callback){
        o = $.extend({ //defaults, can be overidden
            content: null, //string content for tooltip.
            ajax: null, //path to content for tooltip
            follow: true, //does tooltip follow the cursor?
            auto: true, //If false, tooltip won't automatically transition, it must be manually shown/hidden
            fadeIn: 0, //fade in, in milliseconds ("fast, "slow", etc may also be used)
            fadeOut: 0, //fade out, in milliseconds ("fast, "slow", etc may also be used)
            appendTip: document.body, //should probably not need to be overridden, but could be useful if you require a tip that remains relative to an exact point
            degrade: false, //if true, in IE6 tooltip will degrade to a title attribute message
            offsetY: 10, //offsetY and offsetX properties designate position from the cursor
            offsetX: 1,
            style: {},
            className: null, //to style the tooltip externally, pass a className or id
            id: null,
            callBefore: function(tooltip, node, settings){
            }, //called when mouse enters the area
            callAfter: function(tooltip, node, settings){
            }, //called when mouse leaves the area (same as "callback" option)
            clickAction: function(tooltip, node){
                $(tooltip).hide();
            }, //called when the element is clicked, with access to tooltip
            delay: 0, //delay (in milliseconds)before tooltip appears and callBefore executes
            timeout: 0 //delay (in milliseconds)before tooltip transitions away, and callAfter executes
        }, o ||
        {});

        if (!o.style && typeof o.style != "object") {
            o.style = {};
            o.style.zIndex = "1000";
        }
        else {
            o.style = $.extend({ //the default style rules of the tooltip
                border: "1px solid gray",
                background: "#FFF8CC", //#edeef0
                color: "#000",
                padding: "5px",
                zIndex: "1000",
                textAlign: "left"
            }, o.style ||
            {});
        }

        if (typeof callback == "function")
            o.callAfter = callback || o.callAfter;

        o.style.display = "none", o.style.position = "absolute"; //permanent defaults
        //private settings
        var title, timeout, timeout2, iId, over = {}, firstMove = true, hovered = false, maxed = false, tooltip = document.createElement('div'), ie6 = (typeof document.body.style.maxWidth == "undefined") ? true : false, talk = (typeof $.talk == "function" && typeof $.listen == "function") ? true : false;

        if (o.id)
            tooltip.id = o.id;
        if (o.className)
            tooltip.className = o.className;

        o.degrade = (o.degrade && ie6) ? true : false; //only degrades if also IE6
        for (var p in o.style)//apply styles to tooltip
             tooltip.style[p] = o.style[p];

        function fillTooltip(condition){
            if (condition) {
                if (o.degrade)//replace html characters for proper degradation to title attribute
                    $(tooltip).html(o.content.replace(/<\/?[^>]+>/gi, ''));
                else //otherwise just fill the tooltip with content
                     $(tooltip).html(o.content);
            }
        }

        if (o.ajax) { //if o.ajax is selected, this will fill and thus override o.content
            $.get(o.ajax, function(data){
                if (data)
                    o.content = data;
                fillTooltip(o.content);
            });
        }

        function offConditions(that){
            function _offActions(that){
                if (title && !o.content) {
                    title = "";
                }
            }
            function _execute(){
                if (!hovered && o.auto) {
                    clearInterval(iId);
                    if (o.fadeOut) {
                        $(tooltip).fadeOut(o.fadeOut, function(){
                            _offActions(that);
                        });
                    }
                    else {
                        _offActions(that);
                        tooltip.style.display = "none";
                    }
                }
                if (typeof o.callAfter == "function")
                    o.callAfter(tooltip, that, o);
                if (talk)
                    o = $.listen(o);
            }
            if (o.timeout > 0) {
                timeout2 = setTimeout(function(){
                    _execute();
                }, o.timeout);
            }
            else {
                _execute();
            }
        }

        $(tooltip).hover(function(){
            hovered = true;
        }, function(){
            hovered = false;
            offConditions(over);
        });

        //initialize
        if (talk) { //A "channel" for plugins to "talk" to each other, and callbacks to manipulate settings
            o.key = tooltip;
            o.plugin = "wTooltip";
            o.channel = "wayfarer";
            $.talk(o);
        }

        fillTooltip(o.content && !o.ajax);
        $(tooltip).appendTo(o.appendTip);

        return this.each(function(){ //returns the element chain
            $(this).hover(function(){
                var that = this;
                clearTimeout(timeout2);
                if ((this.title || this.titleMemKeep) && !o.degrade && !o.content) {
                    title = this.title || this.titleMemKeep;
                    if(this.title) {
                        this.titleMemKeep = this.title;
                        this.title = "";
                    }
                }
                if (o.content && o.degrade)
                    this.title = tooltip.innerHTML;

                function _execute(){
                    if (typeof o.callBefore == "function")
                        o.callBefore(tooltip, that, o);
                    if (talk)
                        o = $.listen(o); //ping for new settings

                    var display;
                    if (o.content) {
                        if (!o.degrade)
                            display = "block";
                    }
                    else
                        if (title && !o.degrade) {
                            $(tooltip).html(unescape(title));
                            display = "block";
                            title = "";
                        }
                        else {
                            display = "none";
                        }
                    if (o.auto) {
                        if (display == "block" && o.fadeIn)
                            $(tooltip).fadeIn(o.fadeIn);
                        else
                            tooltip.style.display = display;
                    }
                }

                if (o.delay > 0) {
                    timeout = setTimeout(function(){
                        _execute();
                    }, o.delay);
                }
                else {
                    _execute();
                }
            }, function() {
                clearTimeout(timeout);
                var that = this;
                firstMove = true;
                if (!o.follow || maxed || ((o.offsetX < 0 && (0 - o.offsetX < $(tooltip).outerWidth())) && (o.offsetY > 0 && 0 - o.offsetY < $(tooltip).outerHeight()))) {
                    setTimeout(function(){
                        iId = setInterval(function(){
                            offConditions(that)
                        }, 1)
                    }, 1);
                }
                else {
                    offConditions(this);
                }
            });

            $(this).mousemove(function(e){
                over = this; //tracks the event trigger in the plugin-global "over"
                if (o.follow || firstMove) {
                    var scrollY = $(window).scrollTop(), scrollX = $(window).scrollLeft(), top = e.clientY + scrollY + o.offsetY, left = e.clientX + scrollX + o.offsetX, outerH = $(o.appendTip).outerHeight(), innerH = $(o.appendTip).innerHeight(), maxLeft = $(window).width() + scrollX - $(tooltip).outerWidth(), maxTop = $(window).height() + scrollY - $(tooltip).outerHeight();

                    top = (outerH > innerH) ? top - (outerH - innerH) : top; //if appended area (usually BODY) has a border on top, adjust
                    maxed = (top > maxTop || left > maxLeft) ? true : false;

                    if (left - scrollX <= 0 && o.offsetX < 0)
                        left = scrollX;
                    else
                        if (left > maxLeft)
                            left = maxLeft;
                    if (top - scrollY <= 0 && o.offsetY < 0)
                        top = scrollY;
                    else
                        if (top > maxTop)
                            top = maxTop;

                    tooltip.style.top = top + "px";
                    tooltip.style.left = left + "px";
                    firstMove = false;
                }
            });

            if (typeof o.clickAction == "function") {
                $(this).click(function(){
                    o.clickAction(tooltip, this);
                });
            }
        });
    }
})(jQuery);


/* Wayfarer Tooltip
 * Version 1.0.9
 * Author Abel Mohler
 * URI: http://www.wayfarerweb.com/wtooltip.php
 * Released with the MIT License: http://www.wayfarerweb.com/mit.php
 */
(function($){ //jQuery.noConflict()compliant
    $.fn.wTooltip = function(o, callback){
        o = $.extend({ //defaults, can be overidden
            content: null, //string content for tooltip.
            ajax: null, //path to content for tooltip
            follow: true, //does tooltip follow the cursor?
            auto: true, //If false, tooltip won't automatically transition, it must be manually shown/hidden
            fadeIn: 0, //fade in, in milliseconds ("fast, "slow", etc may also be used)
            fadeOut: 0, //fade out, in milliseconds ("fast, "slow", etc may also be used)
            appendTip: document.body, //should probably not need to be overridden, but could be useful if you require a tip that remains relative to an exact point
            degrade: false, //if true, in IE6 tooltip will degrade to a title attribute message
            offsetY: 10, //offsetY and offsetX properties designate position from the cursor
            offsetX: 1,
            style: {},
            className: null, //to style the tooltip externally, pass a className or id
            id: null,
            callBefore: function(tooltip, node, settings){
            }, //called when mouse enters the area
            callAfter: function(tooltip, node, settings){
            }, //called when mouse leaves the area (same as "callback" option)
            clickAction: function(tooltip, node){
                $(tooltip).hide();
            }, //called when the element is clicked, with access to tooltip
            delay: 0, //delay (in milliseconds)before tooltip appears and callBefore executes
            timeout: 0 //delay (in milliseconds)before tooltip transitions away, and callAfter executes
        }, o ||
        {});

        if (!o.style && typeof o.style != "object") {
            o.style = {};
            o.style.zIndex = "1000";
        }
        else {
            o.style = $.extend({ //the default style rules of the tooltip
                border: "1px solid gray",
                background: "#FFF8CC", //#edeef0
                color: "#000",
                padding: "5px",
                zIndex: "1000",
                textAlign: "left"
            }, o.style ||
            {});
        }

        if (typeof callback == "function")
            o.callAfter = callback || o.callAfter;

        o.style.display = "none", o.style.position = "absolute"; //permanent defaults
        //private settings
        var title, timeout, timeout2, iId, over = {}, firstMove = true, hovered = false, maxed = false, tooltip = document.createElement('div'), ie6 = (typeof document.body.style.maxWidth == "undefined") ? true : false, talk = (typeof $.talk == "function" && typeof $.listen == "function") ? true : false;

        if (o.id)
            tooltip.id = o.id;
        if (o.className)
            tooltip.className = o.className;

        o.degrade = (o.degrade && ie6) ? true : false; //only degrades if also IE6
        for (var p in o.style)//apply styles to tooltip
             tooltip.style[p] = o.style[p];

        function fillTooltip(condition){
            if (condition) {
                if (o.degrade)//replace html characters for proper degradation to title attribute
                    $(tooltip).html(o.content.replace(/<\/?[^>]+>/gi, ''));
                else //otherwise just fill the tooltip with content
                     $(tooltip).html(o.content);
            }
        }

        if (o.ajax) { //if o.ajax is selected, this will fill and thus override o.content
            $.get(o.ajax, function(data){
                if (data)
                    o.content = data;
                fillTooltip(o.content);
            });
        }

        function offConditions(that){
            function _offActions(that){
                if (title && !o.content) {
                    title = "";
                }
            }
            function _execute(){
                if (!hovered && o.auto) {
                    clearInterval(iId);
                    if (o.fadeOut) {
                        $(tooltip).fadeOut(o.fadeOut, function(){
                            _offActions(that);
                        });
                    }
                    else {
                        _offActions(that);
                        tooltip.style.display = "none";
                    }
                }
                if (typeof o.callAfter == "function")
                    o.callAfter(tooltip, that, o);
                if (talk)
                    o = $.listen(o);
            }
            if (o.timeout > 0) {
                timeout2 = setTimeout(function(){
                    _execute();
                }, o.timeout);
            }
            else {
                _execute();
            }
        }

        $(tooltip).hover(function(){
            hovered = true;
        }, function(){
            hovered = false;
            offConditions(over);
        });

        //initialize
        if (talk) { //A "channel" for plugins to "talk" to each other, and callbacks to manipulate settings
            o.key = tooltip;
            o.plugin = "wTooltip";
            o.channel = "wayfarer";
            $.talk(o);
        }

        fillTooltip(o.content && !o.ajax);
        $(tooltip).appendTo(o.appendTip);

        return this.each(function(){ //returns the element chain
            $(this).hover(function(){
                var that = this;
                clearTimeout(timeout2);
                if ((this.title || this.titleMemKeep) && !o.degrade && !o.content) {
                    title = this.title || this.titleMemKeep;
                    if(this.title) {
                        this.titleMemKeep = this.title;
                        this.title = "";
                    }
                }
                if (o.content && o.degrade)
                    this.title = tooltip.innerHTML;

                function _execute(){
                    if (typeof o.callBefore == "function")
                        o.callBefore(tooltip, that, o);
                    if (talk)
                        o = $.listen(o); //ping for new settings

                    var display;
                    if (o.content) {
                        if (!o.degrade)
                            display = "block";
                    }
                    else
                        if (title && !o.degrade) {
                            $(tooltip).html(unescape(title));
                            display = "block";
                            title = "";
                        }
                        else {
                            display = "none";
                        }
                    if (o.auto) {
                        if (display == "block" && o.fadeIn)
                            $(tooltip).fadeIn(o.fadeIn);
                        else
                            tooltip.style.display = display;
                    }
                }

                if (o.delay > 0) {
                    timeout = setTimeout(function(){
                        _execute();
                    }, o.delay);
                }
                else {
                    _execute();
                }
            }, function() {
                clearTimeout(timeout);
                var that = this;
                firstMove = true;
                if (!o.follow || maxed || ((o.offsetX < 0 && (0 - o.offsetX < $(tooltip).outerWidth())) && (o.offsetY > 0 && 0 - o.offsetY < $(tooltip).outerHeight()))) {
                    setTimeout(function(){
                        iId = setInterval(function(){
                            offConditions(that)
                        }, 1)
                    }, 1);
                }
                else {
                    offConditions(this);
                }
            });

            $(this).mousemove(function(e){
                over = this; //tracks the event trigger in the plugin-global "over"
                if (o.follow || firstMove) {
                    var scrollY = $(window).scrollTop(), scrollX = $(window).scrollLeft(), top = e.clientY + scrollY + o.offsetY, left = e.clientX + scrollX + o.offsetX, outerH = $(o.appendTip).outerHeight(), innerH = $(o.appendTip).innerHeight(), maxLeft = $(window).width() + scrollX - $(tooltip).outerWidth(), maxTop = $(window).height() + scrollY - $(tooltip).outerHeight();

                    top = (outerH > innerH) ? top - (outerH - innerH) : top; //if appended area (usually BODY) has a border on top, adjust
                    maxed = (top > maxTop || left > maxLeft) ? true : false;

                    if (left - scrollX <= 0 && o.offsetX < 0)
                        left = scrollX;
                    else
                        if (left > maxLeft)
                            left = maxLeft;
                    if (top - scrollY <= 0 && o.offsetY < 0)
                        top = scrollY;
                    else
                        if (top > maxTop)
                            top = maxTop;

                    tooltip.style.top = top + "px";
                    tooltip.style.left = left + "px";
                    firstMove = false;
                }
            });

            if (typeof o.clickAction == "function") {
                $(this).click(function(){
                    o.clickAction(tooltip, this);
                });
            }
        });
    }
})(jQuery);