function startGame() {
    const RowSize = 8;

    const toolRows = [1, 2, 7, 8];
    const tools = ["rook", "knight", "bishop", "king", "queen", "bishop", "knight", "rook"];


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

    const getChessToolOnStart = (rowIndex, columnIndex) => {
        if (rowIndex === 2 || rowIndex === 7) {
            return "pawn";
        }

        //Return chess tool according to column index
        return tools[columnIndex - 1];
    }
    const getToolByTdId = (rowIndex, columnIndex) => {
        let chosenSqure = document.getElementById(`${rowIndex}_${columnIndex}`);
        return chosenSqure.getElementsByTagName('img')[0].id;
    };

    const getToolName = (toolId) => {
        let strTool = toolId;
        let toolName = '';
        if (strTool.includes('_black')) {
            toolName = toolId.replace('_black', '');
        }
        else {
            toolName = toolId.replace('_white', '');
        }
        return toolName;
    }


    const buildBoard = () => {
        for (let rowIndex = 1; rowIndex <= RowSize; rowIndex++) {
            let row = document.createElement('tr');

            color = getRowColor(rowIndex);
            for (let columnIndex = 1; columnIndex <= RowSize; columnIndex++) {

                tool = getChessToolOnStart(rowIndex, columnIndex);

                let square = document.createElement('td');
                square.setAttribute('id', `${rowIndex}_${columnIndex}`);
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
                    let toolName = getToolName(getToolByTdId(rowIndex, columnIndex))
                    switch (toolName) {
                        case 'rook':
                            colorAllRow(rowIndex);
                            colorAllColume(columnIndex);
                            break;
                        case 'bishop':
                            colorDiagnal(rowIndex, columnIndex);
                            break;
                        case 'queen':
                            colorAllRow(rowIndex);
                            colorAllColume(columnIndex);
                            colorDiagnal(rowIndex, columnIndex);
                            break;
                        case 'pawn': colorOneColume(rowIndex, columnIndex, color);
                            break;
                            case 'king': colorAllAround(rowIndex,columnIndex);
                            break;
                    }

                    savedSquare = square;

                };

                row.appendChild(square);

                if (toolRows.indexOf(rowIndex) !== -1) {
                    let toolImg = document.createElement('img');
                    toolImg.setAttribute('id', `${tool}_${color}`);
                    toolImg.src = `images/${color}_${tool}.png`;
                    square.appendChild(toolImg);
                }
            }
            tbody.appendChild(row);
        }
    }

    buildBoard();
    const paintAllRow = () => {
    }

    const colorAllRow = (rowIndex) => {
        let allTd = document.getElementsByTagName('td');
        for (let i = 0; i < allTd.length; i++) {
            let specidicId = allTd[i].id;
            if (specidicId.includes(`${rowIndex}_`)) {
                allTd[i].style.backgroundColor = pressedColor;
            }
        }
    }


    const colorAllColume = (columnIndex) => {
        let allTd = document.getElementsByTagName('td');
        for (let i = 0; i < allTd.length; i++) {
            let specidicId = allTd[i].id;
            if (specidicId.includes(`_${columnIndex}`)) {
                allTd[i].style.backgroundColor = pressedColor;
            }
        }
    }


    const colorDiagnal = (rowIndex, columnIndex) => {
        let allTd = document.getElementsByTagName('td');
        for (let i = 0; i < allTd.length; i++) {
            let specidicId = allTd[i].id;
            if (parseInt(specidicId[0]) + parseInt(specidicId[2]) == parseInt(rowIndex) + parseInt(columnIndex) ||
                parseInt(specidicId[0]) - parseInt(specidicId[2]) == parseInt(rowIndex) - parseInt(columnIndex)) {
                allTd[i].style.backgroundColor = pressedColor;
            }
        }
    }

    const colorOneColume = (rowIndex, columnIndex, color) => {
        let allTd = document.getElementsByTagName('td');
        let chosenSqure=document.getElementById(`${rowIndex}_${columnIndex}`);
        let chosenImg=chosenSqure.getElementsByTagName('img')[0].id;
        let needRow = '';
        if(chosenImg.includes('black')){
            needRow=rowIndex-1;
        }
        else{
            needRow=rowIndex+1;
        }
        for (let i = 0; i < allTd.length; i++) {
            let specidicId = allTd[i].id;
            if (specidicId.includes(`${needRow}_${columnIndex}`)) {
                allTd[i].style.backgroundColor = pressedColor;
            }
        }
    }

    const colorAllAround=(rowIndex,columnIndex)=>{
        let allTd = document.getElementsByTagName('td');
        for (let i = 0; i < allTd.length; i++) {
            let specidicId = allTd[i].id;
            //if ((specidicId[0]==rowIndex-1 && specidicId.includes(`_${columnIndex}`)|| (specidicId[0]==rowIndex && specidicId.includes(`_${columnIndex}`) || (specidicId[0]==rowIndex+1 && specidicId.includes(`_${columnIndex}`)
              //  || (specidicId[2]==columnIndex-1 && specidicId.includes(`_${rowIndex}`) || (specidicId[2]==columnIndex && specidicId.includes(`_${rowIndex}`) || (specidicId[2]==columnIndex-1 && specidicId.includes(`_${rowIndex}`)) {
                //allTd[i].style.backgroundColor = pressedColor;
            //}
        }
    }


}