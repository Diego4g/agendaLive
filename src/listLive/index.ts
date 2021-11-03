import { LiveRepository } from "../repositories/implementations/LiveRepository";
import { ListLiveController } from "./ListLiveController";
import { ListLiveUseCase } from "./ListLiveUseCase";



export default(): ListLiveController =>{
    const livesRepository = new LiveRepository();

    const listLiveUseCase = new ListLiveUseCase(livesRepository);

    const listLiveController = new ListLiveController(listLiveUseCase);

    return listLiveController

}






