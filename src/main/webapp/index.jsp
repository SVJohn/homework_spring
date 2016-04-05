<%--
  Created by IntelliJ IDEA.
  User: John
  Date: 01.04.16
  Time: 6:42
  To change this template use File | Settings | File Templates.
--%>
<%@page contentType="text/html; charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/security/tags" prefix="security"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <link href="<c:url value="/css/pages.css" />" rel="stylesheet">
    <script type="text/javascript" src=" <c:url value='/js/jquery-1.12.2.js'/>"></script>
    <script type="text/javascript" src=" <c:url value='/js/jquery.json-2.4.js'/>"></script>
    <script type="text/javascript" src="<c:url value="/js/api.js" />"></script>
    <script type="text/javascript" src="<c:url value="/js/ui_class.js" />"></script>
</head>

<body>

<div id = "b-logout" class="b-logout">
    <a href = "/logout" title="Log Out"> &times;</a>
</div>
<div id ="page" class = "page">
    <div id = "worksPanel" class="worksPanel" >
        <select id="listData" class = "listData" size="35">

        </select>
        <input type="text" id = "editable_text" class = "editable_text" >

        <button id = "bAdd" class = "button add"> add </button>
    </div>
    <div id = "buttonsPanel" class=" buttonPanel">
        <button id = "bUp" class = "button up"> up </button>
        <div class="b-button-save-delete">
            <button id = "bSave" class = "button save"> save </button>
            <button id = "bDel" class = "button delete"> delete </button>
        </div>
        <button id = "bDown" class = "button down"> down </button>
    </div>
</div>

</body>
</html>
