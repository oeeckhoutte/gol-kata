import { expect } from 'chai';
import Cell from '../Cell';
import Game from '../Game';
import CellState from '../CellState';
// import { DEAD, ALIVE } from '../CellState';

const { DEAD, ALIVE } = CellState;

const deadState = [
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    // [DEAD, DEAD, DEAD, DEAD, DEAD],
    // [DEAD, DEAD, DEAD, DEAD, DEAD],
    // [DEAD, DEAD, DEAD, DEAD, DEAD],
    // [DEAD, DEAD, DEAD, DEAD, DEAD],
    // [DEAD, DEAD, DEAD, DEAD, DEAD]
];

describe('Game of Life', () => {
    it('Should be initialized with a given state', () => {

        const game = new Game(deadState);

        const cellState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];

        expect(game.state).to.deep.equal(cellState);

    });


    it('Should retrieve a cell at a given row and column', () => {
        const game = new Game(deadState);
        const cell = game.getCell(0, 0);
        expect(cell).to.be.an.instanceof(Cell);
        expect(cell.state).to.equal(deadState[0][0]);
        
        const gameState = [
            [ALIVE, DEAD],
            [DEAD, ALIVE],
        ];
        const newGame = new Game(gameState);
        
        const aliveCell = newGame.getCell(0, 0);
        expect(aliveCell).to.be.an.instanceof(Cell);
        expect(aliveCell.state).to.equal(gameState[0][0]);


        const deadCell = newGame.getCell(1, 1);
        expect(deadCell).to.be.an.instanceof(Cell);
        expect(deadCell.state).to.equal(gameState[1][1]);
        
        
    });

    it('Should get the number of alive neighbors above a given cell', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [DEAD, ALIVE, DEAD],
            [DEAD, DEAD, DEAD],
        ];
        
        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(1, 1);
        expect(numberNeighbors).to.equal(3);
        
        
    });
    
    it('Should get the number of alive neighbors below a given cell', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [DEAD, ALIVE, DEAD],
            [ALIVE, ALIVE, ALIVE],
        ];
        
        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(1, 1);
        expect(numberNeighbors).to.equal(3);
    });

    it('Should get the number of alive neighbors next to a given cell', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [ALIVE, ALIVE, ALIVE],
            [DEAD, DEAD, DEAD],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(1, 1);
        expect(numberNeighbors).to.equal(2);
    });

    it('Should get the number of alive neighbors for a given cell', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(1, 1);
        expect(numberNeighbors).to.equal(8);


    });

    it('Should get the number of alive neighbors for a cell in the top row', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(0, 1);
        expect(numberNeighbors).to.equal(2);


    });

    it('Should get the number of alive neighbors for a cell in the first column', () => {
        const gameState = [
            [ALIVE, ALIVE, DEAD],
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(0, 0);
        expect(numberNeighbors).to.equal(1);


    });

    it('Should get the number of alive neighbors for a cell in the first column and second row', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [ALIVE, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(1, 0);
        expect(numberNeighbors).to.equal(0);


    });

    it('Should get the number of alive neighbors for a cell in the bottom row', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
            [ALIVE, ALIVE, ALIVE],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(2, 1);
        expect(numberNeighbors).to.equal(2);


    });

    it('Should get the number of alive neighbors for a cell in the last column', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, ALIVE],
            [DEAD, DEAD, DEAD],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(1, 2);
        expect(numberNeighbors).to.equal(0);


    });

    it('Should get the number of alive neighbors for a cell in a big grid', () => {
        const gameState = [
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, ALIVE, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD,],
        ];

        const game = new Game(gameState);
        const numberNeighbors = game.getNumberOfAliveNeighbors(4, 5);
        expect(numberNeighbors).to.equal(8);

    });

    it('Should create the next state of the game', () => {
        const gameState = [
            [DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD],
        ];

        const game = new Game(gameState);

        const nextState = game.nextState();

        const expectedState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];

        expect(nextState).to.deep.equal(expectedState);

    });

});
