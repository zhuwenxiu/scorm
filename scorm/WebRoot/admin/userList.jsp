<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>table</title>
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	font: 14px "楷体", "Consolas", "Monaco", "Bitstream Vera Sans Mono",
		"Courier New", Courier, monospace;
}
image{
 border:0;
}
.STYLE1 {
	font-size: 14px
}

.STYLE3 {
	font-size: 14px;
	font-weight: bold;
}

.STYLE4 {
	color: #03515d;
	font-size: 14px;
}

a {
	text-decoration: none;
	color: #03515d;
}
-->
</style>
		
<script>
var  highlightcolor='#c1ebff';
var  clickcolor='#51b2f6';
function  changeto(){
source=event.srcElement;
if  (source.tagName=="TR"||source.tagName=="TABLE")
return;
while(source.tagName!="TD")
source=source.parentElement;
source=source.parentElement;
cs  =  source.children;
//alert(cs.length);
if  (cs[1].style.backgroundColor!=highlightcolor&&source.id!="nc"&&cs[1].style.backgroundColor!=clickcolor)
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor=highlightcolor;
}
}

function  changeback(){
if  (event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="nc")
return
if  (event.toElement!=source&&cs[1].style.backgroundColor!=clickcolor)
//source.style.backgroundColor=originalcolor
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor="";
}
}

function  clickto(){
source=event.srcElement;
if  (source.tagName=="TR"||source.tagName=="TABLE")
return;
while(source.tagName!="TD")
source=source.parentElement;
source=source.parentElement;
cs  =  source.children;
//alert(cs.length);
if  (cs[1].style.backgroundColor!=clickcolor&&source.id!="nc")
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor=clickcolor;
}
else
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor="";
}
}
</script>

</head>

<body>
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td height="30"
				background="${pageContext.request.contextPath }/admin/images/tab_05.gif"><table
					width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="12" height="30"><img
							src="${pageContext.request.contextPath }/admin/images/tab_03.gif"
							width="12" height="30" />
						</td>
						<td><table width="100%" border="0" cellspacing="0"
								cellpadding="0">
								<tr>
									<td width="46%" valign="middle"><table width="100%"
											border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td width="5%"><div align="center">
														<img
															src="${pageContext.request.contextPath }/admin/images/tb.gif"
															width="16" height="16" />
													</div>
												</td>
												<td width="95%" class="STYLE1"><span class="STYLE3">当前位置</span>：[人员管理]-[学员管理]</td>
											</tr>
										</table>
									</td>
									<td width="54%"><table border="0" align="right"
											cellpadding="0" cellspacing="0">
											<tr>
												<td width="60"><table width="87%" border="0"
														cellpadding="0" cellspacing="0">
														<tr>
															<td class="STYLE1"><div align="center">
																	
																</div>
															</td>
															
															</td>
														</tr>
													</table>
												</td>
												<td width="60"><table width="90%" border="0"
														cellpadding="0" cellspacing="0">
														<tr>
															
														</tr>
													</table>
												</td>
												<td width="60"><table width="90%" border="0"
														cellpadding="0" cellspacing="0">
														<tr>
															
														</tr>
													</table>
												</td>
												<td width="52"><table width="88%" border="0"
														cellpadding="0" cellspacing="0">
														<tr>
															
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
						<td width="16"><img
							src="${pageContext.request.contextPath }/admin/images/tab_07.gif"
							width="16" height="30" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>

				<div style="width:100%;float:left;">

						
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="8"
									background="${pageContext.request.contextPath }/admin/images/tab_12.gif">&nbsp;</td>
								<td><table width="100%" border="0" cellpadding="0"
										cellspacing="1" bgcolor="b5d6e6" onmouseover="changeto()"
										onmouseout="changeback()">
										<tr>
											<td width="7%" height="22"
												background="${pageContext.request.contextPath }/admin/images/bg1.gif"
												bgcolor="#FFFFFF"><div align="center">
													<span class="STYLE1">学生编号</span>
												</div>
											</td>
											
											<td width="12%" height="22"
												background="${pageContext.request.contextPath }/admin/images/bg1.gif"
												bgcolor="#FFFFFF"><div align="center">
													<span class="STYLE1">学生姓名</span>
												</div>
											</td>
											<td width="12%" height="22"
												background="${pageContext.request.contextPath }/admin/images/bg1.gif"
												bgcolor="#FFFFFF"><div align="center">
													<span class="STYLE1">学生性别</span>
												</div>
											</td>
											<td width="14%" height="22"	background="${pageContext.request.contextPath }/admin/images/bg1.gif"
												bgcolor="#FFFFFF"><div align="center">
													<span class="STYLE1">学生邮箱</span>
												</div>
											</td>
											<td width="14%" height="22"	background="${pageContext.request.contextPath }/admin/images/bg1.gif"
												bgcolor="#FFFFFF"><div align="center">
													<span class="STYLE1">学生号码</span>
												</div>
											</td>
											<td width="15%" height="22"
												background="${pageContext.request.contextPath }/admin/images/bg1.gif"
												bgcolor="#FFFFFF" class="STYLE1"><div align="center">基本操作</div>
											</td>
										</tr>
										<s:iterator value="#session.userList" var="list">
											<tr>

												<td height="20" bgcolor="#FFFFFF"><div align="center">
														<span class="STYLE1"><s:property value="#list.userId"/>
														</span>
													</div>
												</td>
												<td height="20" bgcolor="#FFFFFF"><div align="center">
														<span class="STYLE1"><s:property value="#list.userName"/>
														</span>
													</div>
												</td>
												<td height="20" bgcolor="#FFFFFF"><div align="center">
														<span class="STYLE1"><s:property value="#list.userSex"/>
														</span>
													</div>
												</td>
												<td bgcolor="#FFFFFF"><div align="center">
														<span class="STYLE1"><s:property value="#list.userEmail"/>
														</span>
													</div>
												</td>
												<td height="20" bgcolor="#FFFFFF"><div align="center">
														<span class="STYLE1"><s:property value="#list.userPhone"/>
														</span>
													</div>
												</td>
												
												<td height="20" bgcolor="#FFFFFF"><div align="center">
														<span class="STYLE4">
<img src="${pageContext.request.contextPath }/admin/images/edt.gif"
													width="16" height="16" /><a href="detailUser.action?userId=${userId} " >编辑&nbsp; </a>
<img src="${pageContext.request.contextPath }/admin/images/del.gif"
													width="16" height="16" />
													<a href="deleteUser.action?userId=${userId} " 
                onclick="return window.confirm('与该用户相关的学习记录有可能清除，您确定要删除？')" >删除</a>
														</span>
													</div>
												</td>
											</tr>
										</s:iterator>
									</table>
								</td>
								<td width="8" background="images/tab_15.gif">&nbsp;</td>
							</tr>
						</table>
						
						</div>
			</td>
		</tr>
		<tr>
			<td height="35" background="${pageContext.request.contextPath }/admin/images/tab_19.gif"><table	width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="12" height="35"><img	src="${pageContext.request.contextPath }/admin/images/tab_18.gif"	width="12" height="35" />
						</td>
						<td>
						
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="STYLE4">&nbsp;&nbsp;当前第${pageStart}/${page.pageCount} 页</
            <td><table border="0" align="right" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="40"><a href="userList.action?pageStart=1"><img src="${pageContext.request.contextPath }/admin/images/first.gif" width="37" height="15" /></a></td>
                  <td width="45"><a href="userList.action?pageStart=${pageStart-1 }"><img src="${pageContext.request.contextPath }/admin/images/back.gif" width="43" height="15" /></a></td>
                  <td width="45"><a href="userList.action?pageStart=${pageStart+1 }"><img src="${pageContext.request.contextPath }/admin/images/next.gif" width="43" height="15" /></a></td>
                  <td width="40"><a href="userList.action?pageStart=${pageStart-1}"><img src="${pageContext.request.contextPath }/admin/images/last.gif" width="37" height="15" /></a></td>
                  <td width="100">
                  <td>
                  <form action="userList.action" method="post">
                  <span class="STYLE1">转到第
                    <input name="pageNow" type="text" size="4" style="height:12px; width:20px; border:1px solid #999999;" id="pages"/>页 </span>
                    </td>
                    <td>
                  <input style="background:url(images/go.gif);width:37px;height:15px; margin:0px;padding:0px" width="37" height="15" type="submit" value="" onClick="return pagejian('pages')"/>
                  </td>
                  </form>
                </tr>
            </table>
             <script>
            	function pagejian(id){
            		var pageSt = document.getElementById(id).value;
            		if(!isNaN(pageSt)){
            			if((""+pageSt).indexOf(".") > 0)//如果有数字
            			{
            				 alert("请填入正确数字");
            				 return false;
            			}
            			  document.getElementById(id).value = pageSt-1 ;
					}else{
					   alert("请填入正确数字");
					   return false;
					}
            		return true;
            	}
            </script>
						</td>
						<td width="16"><img
							src="${pageContext.request.contextPath }/admin/images/tab_20.gif"
							width="16" height="35" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	</td>
	</tr>
	</table>
	</td>
	</tr>
	</table>
</body>
</html>
