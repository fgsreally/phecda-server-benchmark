import { Get, Controller } from "phecda-server";

@Controller('')
export class AppController {
    @Get('/hello')
    get() {
        return 'Hello World!'
    }
}
