import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import * as Kafka from "../../config/stream/kafka";
import { RoleTo } from "../../to/RoleTo ";
import { ParametersError } from "../../config/error";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {

    /**
     * @returns {Promise<RoleTo>}
     * @memberof RoleService
     */
    async create(role: RoleTo): Promise<RoleTo> {
        let roleModel = await Role.create(role);
        return roleModel
    },

    /**
     * @returns {Promise<RoleTo>}
     * @memberof RoleService
     */
    async findAll(): Promise<RoleTo[]> {
        let roleModels = await Role.findAll();
        return roleModels;
    },

    /**
     * @returns {Promise<RoleTo>}
     * @memberof RoleService
     */
    async update(id: number, role: RoleTo): Promise<Role> {
        const existingUser = await Role.findByPk(id);
        if (!existingUser) {
            throw new ParametersError("El usuario no existe");
        }

        const updatedUser = await existingUser.update(role,{where: {id: id}});
        return updatedUser;
    },

    /**
     * @returns {Promise<void>}
     * @memberof RoleService
     */
    async eliminate(id: number): Promise<void> {
            try {
            await Role.destroy({
              where: {
                id: id,
              },
            });
          } catch (error) {
            throw new ParametersError("Not deleted");
          }
    }

}

export default RoleService;
