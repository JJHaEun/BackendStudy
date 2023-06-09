/**
 * @swagger
 * /token/phone:
 *         post:
 *          summary: 핸드폰으로 인증번호 전송하기
 *          tags: [Users]
 *          responses:
 *            200:
 *              description: 성공
 *              content:
 *               application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                            phone:
 *                               type: string
 *                               example: 01012343456
 *
 */
