import { RandomUser } from "./models/RandomUser";
import { RandomUserSerice } from "./services/RandomUserService";

const users:RandomUser[]= RandomUserSerice.getAllUsers();
if(users){
    console.log(users[0]);
}