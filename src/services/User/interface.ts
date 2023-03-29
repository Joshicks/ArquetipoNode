import Users from "../../models/User.model";
import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<UserTo>}
     * @memberof IUserService
     */
    validateExistUser(email?: string): Promise<void>;

     /**
     * @returns {Promise<UserTo>}
     * @memberof IUserService
     */
    create(user: UserTo): Promise<Users>;

    /**
 * @memberof IUserService
 * @returns {Promise < any[] >}
 */
eliminates(id: number): Promise<void>
/**
 * @memberof IUserService
 * @returns {Promise < any[] >}
 */
update(id: number, user: UserTo): Promise<UserTo>
}