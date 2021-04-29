const { Router } = require("express");
const authController = require('../controllers/authController');
const { requireAuth } = require("../middleware/authMiddleware");
const router = Router();

router.get('/register', authController.register_get);
router.post('/register', authController.register_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.post('/shopkeeper/ssprofile/update/:id', requireAuth,authController.update_post);
router.get('/shopkeeper/ssprofile/:username',requireAuth, authController.shopkeeper_get);
router.get('/admin/admin-shopkeeper-details',requireAuth, authController.details_post);
router.delete('/admin/admin-shopkeeper-details/:id',requireAuth, authController.user_delete);
// router.get('/admin/admin-dashboard',authController.admin_dashboard);

module.exports = router;