import { LiveRepository } from "../repositories/implementations/LiveRepository";
import { ListLiveController } from "./ListLiveController";
import { ListLiveUseCase } from "./ListLiveUseCase";



const livesRepository = null;

const listLiveUseCase = new ListLiveUseCase(livesRepository);

const listLiveController = new ListLiveController(listLiveUseCase);

export { listLiveController }