/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저목록 가져오기
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *          application/json:
 *             schema:
 *                type: array
 *                items:
 *                    properties:
 *                       email:
 *                          type: string
 *                          example: Nick@nick.com
 *                       name:
 *                          type: string
 *                          example: Nick
 *                       phone:
 *                          type: string
 *                          example: 010-1234-3456
 *                       personal:
 *                             type: string
 *                             example: 220219-0000000
 *                       prefer:
 *                           type: string
 *                           example: http://nickell.com
 *
 */
