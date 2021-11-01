import { LiveRepository } from "../repositories/implementations/LiveRepository";
import { CreateLiveController } from "./CreateLiveController";
import { CreateLiveUseCase } from "./CreateLiveUseCase";


export default(): CreateLiveController =>{
    const livesRepository = new LiveRepository();

    const createLiveUseCase = new CreateLiveUseCase(livesRepository);

    const createLiveController = new CreateLiveController(createLiveUseCase);

    return createLiveController
}









