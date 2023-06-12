/**
 * @swagger
 * /users:
 *   post:
 *     summary: 회원가입하기
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 성공
 *
 *         content:
 *          application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  user:
 *                    type: object
 *                    properties:
 *                       email:
 *                          type: string
 *                          example: Nick@nick.com
 *                       name:
 *                          type: string
 *                          example: Nick
 *                       phone:
 *                          type: string
 *                          example: 01012343456
 *                       personal:
 *                             type: string
 *                             example: 2202190000000
 *                       prefer:
 *                           type: string
 *                           example: http://nickell.com
 *                       password:
 *                             type: string
 *                             example: 123@1111qwee
 */
