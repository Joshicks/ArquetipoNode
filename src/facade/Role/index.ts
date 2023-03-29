import RoleFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { logger } from '../../config/logger/logger';
import { RoleTo } from '../../to/RoleTo ';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function save(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let role: RoleTo = { ...req.body };
        logger.info("(%s) - Request post: %s","RoleRouter.ts",JSON.stringify(role));
        role = await RoleFacade.create(role);
        res.status(HttpStatusCode.OK).json(role);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const roles: RoleTo[] = await RoleFacade.findAll();
        res.status(HttpStatusCode.OK).json(roles);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const role: RoleTo = { ...req.body };
        const roleId: number = parseInt(req.params.id);
        logger.info("(%s) - Request put: %s","RoleRouter.ts",JSON.stringify(role));
        const updatedRole: RoleTo = await RoleFacade.update(roleId, role);
        res.status(HttpStatusCode.OK).json(updatedRole);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function eliminate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const roleId: number = parseInt(req.params.id);
        logger.info("(%s) - Request delete: %s","RoleRouter.ts",JSON.stringify(roleId));
        await RoleFacade.eliminate(roleId);
        res.status(HttpStatusCode.OK).json({message: "Role deleted successfully"});
    } catch (error) {
        next(error);
    }
}
