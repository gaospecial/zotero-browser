var z = Components.classes["@zotero.org/Zotero;1"] .getService(Components.interfaces.nsISupports).wrappedJSObject;
var json = Components.classes["@mozilla.org/dom/json;1"].createInstance(Components.interfaces.nsIJSON);
var report = new Array;
var collectionid = pow_server.GET.id;
var collection = z.Collections.get(collectionid);
var items = collection.getChildItems();
for (var i=0;i<items.length;i++) {
    item = items[i];
    var qc = z.QuickCopy;
    var cite = escape(qc.getContentFromItems(new Array(item),
        z.Prefs.get("export.quickCopy.setting")).html);
    var type = z.ItemTypes.getName(item.itemTypeID);
    var date = z.Date.formatDate(z.Date.strToDate(item.getField('date')),'y')
    var abs = escape(item.getField('abstractNote'));
    report.push({ 'citation': cite, 'date': date, 'abstract': abs, 'type': type });
}
document.writeln(json.encode(report));
