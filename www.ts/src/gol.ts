// Original tutorial from wasm-pack and class modifications based upon
// https://kernhanda.github.io/tutorial-typescript-canvas-drawing/


import { Universe, Cell } from "wasm-rust-gol";
import { memory } from "wasm-rust-gol/wasm_rust_gol_bg.wasm";

export type ColourValueHex = `#${string}`;

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class GOLApp {
    private CELL_SIZE: number = 5; // pixels
    private GRID_COLOR: ColourValueHex = "#CCCCCC";
    private DEAD_COLOR: ColourValueHex = "#FFFFFF";
    private ALIVE_COLOR: ColourValueHex = "#000000";
    universe: Universe;
    width: number;
    height: number;
    canvas: HTMLCanvasElement;
    ctx: any

    getIndex = (row: number, column: number) => {
        return row * this.width + column;
    }

    drawGrid() {
        let ctx = this.ctx

        ctx.beginPath();
        ctx.strokeStyle = this.GRID_COLOR;

        // Vertical lines.
        for (let i = 0; i <= this.width; i++) {
            ctx.moveTo(i * (this.CELL_SIZE + 1) + 1, 0);
            ctx.lineTo(i * (this.CELL_SIZE + 1) + 1, (this.CELL_SIZE + 1) * this.height + 1);
        }

        // Horizontal lines.
        for (let j = 0; j <= this.height; j++) {
            ctx.moveTo(0, j * (this.CELL_SIZE + 1) + 1);
            ctx.lineTo((this.CELL_SIZE + 1) * this.width + 1, j * (this.CELL_SIZE + 1) + 1);
        }

        ctx.stroke();
    };

    drawCells = () => {
        let cellsPtr = this.universe.cells();
        let cells = new Uint8Array(memory.buffer, cellsPtr, this.width * this.height);

        this.ctx.beginPath();

        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                let idx = this.getIndex(row, col);

                this.ctx.fillStyle = cells[idx] === Cell.Dead
                    ? this.DEAD_COLOR
                    : this.ALIVE_COLOR;

                this.ctx.fillRect(
                    col * (this.CELL_SIZE + 1) + 1,
                    row * (this.CELL_SIZE + 1) + 1,
                    this.CELL_SIZE,
                    this.CELL_SIZE
                );
            }
        }

        this.ctx.stroke();
    };

    constructor(elementId: string) {
        // Construct the universe, and get its width and height.
        let universe = Universe.new();
        this.universe = Universe.new();
        this.width = this.universe.width();
        this.height = this.universe.height();

        // create the canvas if able to
        let canvas = document.getElementById(elementId) as HTMLCanvasElement;
        let ctx = canvas.getContext("2d");

        canvas.height = (this.CELL_SIZE + 1) * this.height + 1;
        canvas.width = (this.CELL_SIZE + 1) * this.width + 1;

        this.canvas = canvas;
        this.ctx = ctx;

    }

    tick() {
        this.universe.tick();
    }

}

const app = new GOLApp('game-of-life-canvas');
const renderLoop = () => {
    app.tick();
    app.drawGrid();
    app.drawCells();

    sleep(100).then(() => { requestAnimationFrame(renderLoop) });
};

requestAnimationFrame(renderLoop);
