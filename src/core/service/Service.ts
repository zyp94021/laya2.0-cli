import { Dispatcher } from "./dispatcher/Dispatcher";

export module service {
    export class Service {
        public static Init(): void {
            service
        }

        public static get dispatcher(): Dispatcher {
            return Dispatcher.CreateOrGet()
        }

    }
}
