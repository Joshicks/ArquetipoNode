import { Router } from 'express';
import { UserFacade } from '../facade';
import { logger } from '../config/logger/logger';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/:
 *  get:
 *    description: Get all Users
 *    tags: ["Users"]
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get('', UserFacade.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users:
 *  post:
 *    description: create Users
 *    tags: ["Users"]
 *    requestBody:
 *      description: object user
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserTo'
 *    responses:
 *      200:
 *        description: All Users
 *        content:
 *          appication/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.post('', UserFacade.save);


/**
 * DELETE method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/{id}/id:
 *  delete:
 *    description: delete user
 *    tags: ["Users"]
 *    parameters : [
 *      {
 *         name: 'id',
 *         in: 'path',
 *         schema: {
 *           type: 'number',
 *           example: 1
 *         },
 *         required: true
 *      }
 *    ]
 *    responses:
 *      200:
 *        description: user deleted
 *      400:
 *        description: Error bad parameters
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.delete('/:id/id', UserFacade.publish_eliminate);

/**
 * PATCH method route
 * @example http://localhost:PORT/users
 * @swagger
 * /users/{id}/id:
 *  patch:
 *    description: update a User by ID
 *    tags: ["Users"]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the user to update
 *        schema:
 *          type: number
 *    requestBody:
 *      description: user object
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserTo'
 *    responses:
 *      200:
 *        description: Updated User object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserTo'
 *      404:
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.patch('/:id/id', UserFacade.update);


/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  get:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get('/ping', async (req, res) => {
    logger.info("(%s) - Request accepted: %s","UserRouter.ts",'');
    res.send('pong');
    logger.info("(%s) - Sending Response: %s","UserRouter.ts",{data:"pong"});
});

/**
 * @export {express.Router}
 */
export default router;