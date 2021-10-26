import { LiveRepository } from "../repositories/LiveRepository";
import { ListLiveController } from "./ListLiveController";
import { ListLiveUseCase } from "./ListLiveUseCase";



const livesRepository = LiveRepository.getInstance();

const listLiveUseCase = new ListLiveUseCase(livesRepository);

const listLiveController = new ListLiveController(listLiveUseCase);

export { listLiveController }