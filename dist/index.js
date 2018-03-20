"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
/**
 * @var {{}} process
 */
const port = process.env.PORT || 3000;
app_1.default.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    return console.log(`server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map