import { Utils } from "../../commons/utils/Utils";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";
import * as Kafka from '../../config/stream/kafka';
import { ParametersError } from "../../config/error/index";
/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<UserTo[]> {

        try {
            let User = await UserService.findAll();
            return User;
        } catch (error) {
            throw new ParametersError("No se pudo encontrar la lista de usuarios");
        }
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async create(user: UserTo): Promise<UserTo> {
        try {
            Utils.required({email: user.email});
            await UserService.validateExistUser(user.email);
            let userResponse: UserTo = await UserService.create(user);
            return userResponse;
        } catch (error) {
            throw new ParametersError("No se pudo crear el usuario");
        }
    },

    /**
     * @returns {Promise<UserTo>}
     * @memberof UserFacade
     */
    async update(id: number, user: UserTo): Promise<UserTo> {
        try {
            Utils.required({ email: user.email });
            let userResponse: UserTo = await UserService.update(id, user);
            return userResponse;
        } catch (error) {
            throw new ParametersError("No se pudo actualizar el usuario");
        }
    },

    /**
     * @returns {Promise<void>}
     * @memberof UserFacade
     */
    async publish_eliminate(id: number): Promise<void> {
        try {
            await Kafka.send("user-service-topic", `${id}`);
        } catch (error) {
            throw new ParametersError("No se pudo eliminar el usuario");
        }
    },
    async consumer_eliminate(id: number): Promise<void> {
        try {
            await UserService.eliminates(id);
        } catch (error) {
            throw new ParametersError("No se pudo eliminar el usuario");
        }
    },

}

export default UserFacade;
