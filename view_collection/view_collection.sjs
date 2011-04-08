<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Collection Viewer</title>
		<link rel="stylesheet" type="text/css" media="all" href="static/css/elastic.css" />
		<link rel="stylesheet" type="text/css" media="all" href="static/css/local.css" />
		<script src="../static/js/jquery.js" type="text/javascript" language="javascript" charset="utf-8"></script>
		<script src="../static/css/elastic.js" type="text/javascript" language="javascript" charset="utf-8"></script>
        <script src="../static/js/jquery-1.4.2.min.js" type="text/javascript"></script>
        <script src="../static/js/jquery.jqote2.min.js" type="text/javascript"></script>
    </head>
    <body>
        <h1>Collection Viewer</h1>


<table id="example">
<tr><th>Type</th><th>Date</th><th>Citation</th><th>Abstract</th></tr>
<!-- Container -->
</table>

<script type="text/html" id="template">
    <![CDATA[
<tr>
  <td> <%= unescape(this.type) %> </td>
  <td> <%= unescape(this.date) %> </td>
	<td> <%= unescape(this.citation) %> </td>
  <td> <%= unescape(this.abstract) %> </td>
</tr>
    ]]>
</script>

<script type="text/javascript">
     var citation_data = <?sjs pow_include('get_collection_items.js'); ?> ; 
    // let's do some jQote magic
    $('#example').jqoteapp('#template', citation_data);
</script>

    </body>
</html>
