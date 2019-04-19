import { Dispatcher } from "./dispatcher/Dispatcher";
import socket from "../../net/socket";

export module service {
    export class Service {
        public static Init(): void {
        }

        public static get dispatcher(): Dispatcher {
            return Dispatcher.CreateOrGet()
        }
   
    }
}
