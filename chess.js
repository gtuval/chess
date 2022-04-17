function startGame() {
    const RowSize = 8;

    const toolRows = [1, 2, 7, 8];
    const tools = [ "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook" ];

    
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    table.appendChild(tbody);
    document.body.appendChild(table);
    
    let color;
    let tool;
    const pressedColor = '#D3FAC6';
    const firstRowColor = 'white';
    const lastRowColor = firstRowColor === 'black' ? 'white' : 'black';

    let savedSquare = undefined;

    const getRowColor = (rowIndex) => {
        if (rowIndex === 1 || rowIndex === 2) {
            return firstRowColor;
        }
        return lastRowColor;
    }

    const getChessTool = (rowIndex, columnIndex) => {
        if (rowIndex === 2 || rowIndex === 7) {
            return "pawn";
        }

        //Return chess tool according to column index
        return tools[columnIndex - 1];
    }

    const buildBoard = () => {
        for (let rowIndex = 1; rowIndex <= RowSize; rowIndex++) {
            let row = document.createElement('tr');
    
            color = getRowColor(rowIndex);
            for (let columnIndex = 1; columnIndex <= RowSize; columnIndex++) {
                
                tool = getChessTool(rowIndex, columnIndex);
                
                let square = document.createElement('td');
                square.setAttribute('id',`${rowIndex}_${columnIndex}`);
                square.onclick = () => {

                    //If saved square exists and its equal to square 
                    //then clear the color and saved color
                    if (savedSquare) {
                        if (savedSquare.id === square.id) {
                            square.style.background = '';
                            savedSquare = undefined;
                            return;
                        } else {
                            savedSquare.style.background = '';
                        }
                    } 
                    square.style.background = pressedColor;
                    savedSquare = square;
                };
                
                row.appendChild(square);
                
                if (toolRows.indexOf(rowIndex) !== -1) { 
                    let toolImg = document.createElement('img');
                    toolImg.src = `images/${color}_${tool}.png`; 
                    square.appendChild(toolImg);
                }
            }
            tbody.appendChild(row);
        }   
    }
    
    buildBoard();
}