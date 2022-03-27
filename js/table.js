function insertDataIntoTable(table, columns, data)
{
    data.forEach( row_data =>
    {
        let row = table.insertRow(-1);

        const link = document.createElement("a");
        link.href = '#'
        const name = document.createTextNode(row_data[columns[0]])
        row.insertCell(0).appendChild(link).appendChild(name);

        for (var i = 1; i < columns.length - 1; i++)
        {
            row.insertCell(i).appendChild(document.createTextNode(row_data[columns[i]]));
        }


        status_colors = {
            'обработан': 'paid',
            'ожидает обработки': 'unpaid',
        }

        const status_block = document.createElement("div");
        status_text = row_data[columns[columns.length - 1]]
        const status_color_class = 'table__status-' + status_colors[status_text];
        status_block.classList.add(...['table__status', status_color_class]);
        const status = document.createTextNode(status_text);
        row.insertCell(columns.length - 1).appendChild(status_block).appendChild(status);
    })
}