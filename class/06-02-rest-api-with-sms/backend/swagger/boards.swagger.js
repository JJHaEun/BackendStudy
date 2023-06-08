/**
 * @swagger
 * /boards:
 *   get:
 *     description: ..
 *     summary: 게시글 가져오기
 *     tags: [Board]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                 type: array
 *                 items:
 *                     properties:
 *                        number:
 *                            type: int
 *                            example: 3
 *                        writer:
 *                            type: string
 *                            example: 바트
 *                        title:
 *                            type: string
 *                            example: title...stupid...
 *                        contents:
 *                            type: string
 *                            example: what's the problem
 */

/**
 * @swagger
 * /boards:
 *  post:
 *     summary: 게시글 등록하기
 *     tags: [Board]
 *     responses:
 *         200:
 *             description: 성공
 */
