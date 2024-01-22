/* 

Build a 3x3 grid of light cells (omitting the center cell)
where you can click on the cells to activate them, turning
them green. When all the cells have been activated,
they will be deactivated one by one in the reverse order
they were activated with a 300ms interval in between.

*/

import { RefObject, createRef, useRef, useState } from 'react';
import './styles.css';

const GridLights = () => {

    const [stack, setStack] = useState<string[]>([]);
    const gridContainerRef:RefObject<HTMLDivElement> = createRef();
    const handleClick = (event : React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        // console.log(target);

        if(target.className.includes("grid-cell")){
            const cellNumber = target.innerHTML;
            if(!target.className.includes("active")){
                target.className += " active";
                setStack([...stack, cellNumber]);
            }
        }
    }

    const handleReset = () => {
        stack.reverse().forEach((item:string, index) => {
            const ele = gridContainerRef.current;
            const gridEle  = ele?.childNodes[Number(item) - 1]  as HTMLDivElement;
            if(gridEle){
                console.log(gridEle.className);
                setTimeout(() => {
                    gridEle.className = gridEle.className.replace(" active", "");
                },index * 200);
            }
        })
    }
  return (
    <div className="app-container">
      <div className="grid-container" ref={gridContainerRef} onClick={handleClick}>
        <div className="grid-cell">1</div>
        <div className="grid-cell">2</div>
        <div className="grid-cell">3</div>
        <div className="grid-cell">4</div>
        <div className="grid-cell">5</div>
        <div className="grid-cell">6</div>
        <div className="grid-cell">7</div>
        <div className="grid-cell">8</div>
        <div className="grid-cell">9</div>
      </div>
      <div>
        <button type='submit' onClick={handleReset} disabled={stack.length === 0}>Reset</button>
      </div>
    </div>
  );
};

export default GridLights;
