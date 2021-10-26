import { LiveRepository } from "../repositories/LiveRepository";
import { CreateLiveController } from "./CreateLiveController";
import { CreateLiveUseCase } from "./CreateLiveUseCase";



const livesRepository = LiveRepository.getInstance();

const createLiveUseCase = new CreateLiveUseCase(livesRepository);

const createLiveController = new CreateLiveController(createLiveUseCase);

export { createLiveController }
