Bug:
     Auth middleware expects token directly but real apps send "Bearer token"

File:
     middleware/authMiddleware.js line 4

Problem:
     If we send "Bearer eyJ..."     jwt.verify fails.

Fix:
     Split token from header:
     const token = req.header("Authorization")?.split(" ")[1]
