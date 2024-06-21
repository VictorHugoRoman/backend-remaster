import m from 'mongoose';

export default class HomeService {
    index() {
        return {
            message: "Hello Mundo!"
        };
    }
}
