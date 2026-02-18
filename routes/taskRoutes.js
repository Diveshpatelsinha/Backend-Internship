const router = require("express").Router()
const auth = require("../middleware/authMiddleware")
const taskCtrl = require("../controllers/taskController")

router.use(auth)

router.get("/",taskCtrl.getTasks)
router.post("/",taskCtrl.createTask)
router.put("/:id",taskCtrl.updateTask)
router.delete("/:id",taskCtrl.deleteTask)

module.exports = router
