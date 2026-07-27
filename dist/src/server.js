"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const prisma_1 = require("./lib/prisma");
const port = process.env.PORT;
async function main() {
    try {
        await prisma_1.prisma.$connect();
        console.log("Connected to the database successfully");
        app_1.default.listen(port, () => {
            console.log(`Connected to the database and listening on port http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        await prisma_1.prisma.$disconnect();
        process.exit(1);
    }
}
main();
//# sourceMappingURL=server.js.map