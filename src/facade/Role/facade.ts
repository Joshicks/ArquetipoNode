import { eliminate } from ".";
import { Utils } from "../../commons/utils/Utils";
import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo ";
import { IRoleFacade } from "./interface";


/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
    
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async create(role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name});
        let RoleResponse: RoleTo = await RoleService.create(role);
        return RoleResponse;
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async findAll(): Promise<RoleTo[]> {
        let roles: RoleTo[] = await RoleService.findAll();
        return roles;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async update(id: number, role: RoleTo): Promise<RoleTo> {
        Utils.required({name: role.name});
        let RoleResponse: RoleTo = await RoleService.update(id, role);
        return RoleResponse;
    },

    /**
     * @returns {Promise < any[] >}
     * @memberof RoleFacade
     */
    async eliminate(id: number): Promise<void> {
        await RoleService.eliminate(id);
    }
}

export default RoleFacade;
