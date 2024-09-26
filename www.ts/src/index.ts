// export * from './gol'

// let app = new GOLApp();
// app.setupCanvas("game-of-life-canvas");
import('./gol').catch(e => console.error("Error importing `gol.js`:", e));
