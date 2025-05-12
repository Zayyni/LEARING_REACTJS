"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomUserService_1 = require("./services/RandomUserService");
var users = RandomUserService_1.RandomUserSerice.getAllUsers();
if (users) {
    console.log(users[0]);
}
