import React, { useEffect, useState } from 'react';

function TaskLast() {
  const [grid, setGrid] = useState<React.ReactElement[]>([]);

  const getRandomNumber = () => Math.floor(Math.random() * 26);

  useEffect(() => {
    const numberOfCols = 26;
    const numberOfRows = 9;

    // const targetCells = [
    //   { row: 2, col: 5 },
    //   { row: 0, col: 0 },
    //   { row: 4, col: 10 },
    // ];

    const intervalFun = setInterval(() => {
      const newGrid = [];

      
      //For generating rows and cols
      for (let i = 0; i < numberOfRows; i++) {
        const row  = [];
        const randomCol = getRandomNumber();

        for (let j = 0; j < numberOfCols; j++) {
            //For targeting or selecting random row and cols
            let isTargetCell = false;

            if(randomCol === j) isTargetCell = true;

        //   let isTargetCell = false;

        //   for (let k = 0; k < targetCells.length; k++) {
        //     if (targetCells[k].row === i && targetCells[k].col === j) {
        //       isTargetCell = true;
        //       break;
        //     }
        //   }

        

          row.push(
            <div
              className='border-1 border-slate-300'
              key={`${i}-${j}`}
              style={{
                width: `${100 / numberOfCols}vw`,
                height: `${100 / numberOfRows}vh`,
                backgroundColor: isTargetCell ? '#5f3ea4' : '',
              }}
            />
          );
        }

        newGrid.push(
          <div key={i} className="flex">
            {row}
          </div>
        );
      }

      setGrid(newGrid); 
    }, 1000);

    return () => clearInterval(intervalFun);
  }, []);

  return <div className="w-screen h-screen">{grid}</div>;
}

export default TaskLast;
