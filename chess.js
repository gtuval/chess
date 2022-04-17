const TableSize=8;
function addTable()
{
    let table =document.createElement('table');
    let tbody =document.createElement('tbody');
    table.appendChild(tbody);
    document.body.appendChild(table);
    for(let i=0;i<TableSize;i++)
    {
        let row=document.createElement('tr');
            for(let j=0;j<TableSize;j++)
            {
            let square=document.createElement('td');
            row.appendChild(square);
            }
        tbody.appendChild(row);
    }
}