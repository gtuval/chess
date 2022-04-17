const TableSize = 8;
function addTable() {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    document.body.appendChild(table);
    let color;
    let tool;
    for (let i = 1; i <= TableSize; i++) {
        let row = document.createElement('tr');

        switch (i) {
            case 1: color = ("black");
                break;
            case 2: color = ("black");
                break;
            default: color = ("white");
        }
        for (let j = 1; j <= TableSize; j++) {
            if (i !== 1 || i !== 7) {
                switch (j) {
                    case 1: tool = ("rook");
                        break;
                    case 2: tool = ("knight");
                        break;
                    case 3: tool = ("bishop");
                        break;
                    case 4: tool = ("queen");
                        break;
                    case 5: tool = ("king");
                        break;
                    case 6: tool = ("bishop");
                        break;
                    case 7: tool = ("knight");
                        break;
                    case 8: tool = ("rook");
                        break;
                }
            }
            else
            {
                tool="pawn";
            }
                let square = document.createElement('td');
            row.appendChild(square);
            let toolImg=document.createElement('img');
            toolImg.src='images/'+color+'_'+tool+'.png';
            square.appendChild(toolImg);
        }
        tbody.appendChild(row);
    }
}