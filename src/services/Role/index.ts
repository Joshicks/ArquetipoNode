import { RoleTo } from '../../to/RoleTo ';
import RoleService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
    return await RoleService.create(role);
    
}

/**
 * @export
 * @param {RoleTo} role
 * @returns {Promise<RoleTo>}
 */
export async function update(id:number,role: RoleTo): Promise<RoleTo> {
    return await RoleService.update(id,role);
}

/**
 * @export
 * @param {number} id
 * @returns {Promise<void>}
 */
export async function eliminate(id: number): Promise<void> {
    return await RoleService.eliminate(id);
}

/**
 * @export
 * @returns {Promise<RoleTo[]>}
 */
export async function findAll(): Promise<RoleTo[]> {
    return await RoleService.findAll();
}
