import { RoleTo } from "../../to/RoleTo ";

/**
 * @export
 * @interface IRoleFacade
 */
export interface IRoleFacade {

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleFacade
     */
    create(role: RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<RoleTo>}
     * @memberof IRoleFacade
     */
    update(id: number, role: RoleTo): Promise<RoleTo>;

    /**
     * @returns {Promise<void>}
     * @memberof IRoleFacade
     */
    eliminate(id: number): Promise<void>;

    /**
     * @returns {Promise<RoleTo[]>}
     * @memberof IRoleFacade
     */
    findAll(): Promise<RoleTo[]>;
}
