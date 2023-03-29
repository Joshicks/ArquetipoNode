import { RoleTo } from "../../to/RoleTo ";

/**
 * @export
 * @interface IRoleService
 */
export interface IRoleService {

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    create(role: RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleService
     */
    update(id:number,role: RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<void>}
     * @memberof IRoleService
     */
    eliminate(id: number): Promise<void>;

    /**
     * @returns {Promise<RoleTo[]>}
     * @memberof IRoleService
     */
    findAll(): Promise<RoleTo[]>;

}
