import UserFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';
import { UserTo } from '../../to/UserTo';
import { logger } from '../../config/logger/logger';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const User: any[] = await UserFacade.findAll();
        res.status(HttpStatusCode.OK).json(User);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function save(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let user: UserTo = { ...req.body };
        logger.info("(%s) - Request post: %s", "UserRouter.ts", JSON.stringify(user));
        user = await UserFacade.create(user);
        res.status(HttpStatusCode.OK).json(user);
    } catch (error) {
        next(error);
    }}
/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id: number = parseInt(req.params.id);
        const user: UserTo = { ...req.body };
        logger.info("(%s) - Request put: %s", "UserRouter.ts", JSON.stringify(user));
        await UserFacade.update(id, user);
        res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function publish_eliminate(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id: number = parseInt(req.params.id);
        await UserFacade.publish_eliminate(id);
        res.status(HttpStatusCode.NO_CONTENT).send();
    } catch (error) {
        next(error);
    }
}