function JSON2CSV (objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';

    //first row of json becomes table labels
    var head = array[0];
    
    for (var index in $.parseJSON(array[0])) {
        line += index + ',';
    }

    line = line.slice(0, -1);
    str += line + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';

        var jsonArray = $.parseJSON(array[i]);
        for (var index in jsonArray) {
            line += jsonArray[index.toString()] + ',';
        }

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
}