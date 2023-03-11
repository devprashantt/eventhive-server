import { json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

function bodyParserMiddleware() {
    return json();
}

function corsMiddleware() {
    return cors();
}

function loggingMiddleware() {
    return morgan('tiny');
}

function helmetMiddleware() {
    return helmet();
}

export default {
    bodyParserMiddleware,
    corsMiddleware,
    loggingMiddleware,
    helmetMiddleware,
};
