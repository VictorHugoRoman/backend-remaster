declare module 'express-async-errors' {
    import express from 'express';
    function enhanceYourApp(app: express.Application): void;
    export = enhanceYourApp;
}