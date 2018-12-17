// Shorter more automated Alternative (less TDD oriented)
// import { expect } from 'chai';

// import CellState from '../CellState';
// import Cell from '../Cell';

// describe('Cell', () => {
    
//     const testCases = [
//         [[CellState.ALIVE, 0], CellState.DEAD],
//         [[CellState.ALIVE, 1], CellState.DEAD],
//         [[CellState.ALIVE, 2], CellState.ALIVE],
//         [[CellState.ALIVE, 3], CellState.ALIVE],
//         [[CellState.ALIVE, 4], CellState.DEAD],
//         [[CellState.ALIVE, 5], CellState.DEAD],
//         [[CellState.ALIVE, 6], CellState.DEAD],
//         [[CellState.ALIVE, 7], CellState.DEAD],
//         [[CellState.ALIVE, 8], CellState.DEAD],
//         [[CellState.DEAD, 0], CellState.DEAD],
//         [[CellState.DEAD, 1], CellState.DEAD],
//         [[CellState.DEAD, 2], CellState.DEAD],
//         [[CellState.DEAD, 3], CellState.ALIVE],
//         [[CellState.DEAD, 4], CellState.DEAD],
//         [[CellState.DEAD, 5], CellState.DEAD],
//         [[CellState.DEAD, 6], CellState.DEAD],
//         [[CellState.DEAD, 7], CellState.DEAD],
//         [[CellState.DEAD, 8], CellState.DEAD],
//     ];

//     const cellStateNames = {
//         [CellState.ALIVE]: 'CellState.ALIVE',
//         [CellState.DEAD]: 'CellState.DEAD',
//     };

//     testCases.forEach(([[originalState, input], nextState]) => {
//         it(`Should result in ${cellStateNames[nextState]} when currently 
//         ${cellStateNames[nextState]} with ${input} neighbors`, () => {
//             const cell = new Cell(originalState);
//             expect(cell.getNextState(input)).to.eq(nextState);
//         });
//     });

// });
