const { Router } = require("express");
const authController = require('../controllers/authController');
const  requireAuth  = require("../middleware/authMiddleware");
const router = Router();


router.post('/register', authController.register_post);

router.post('/login', authController.login_post);
router.post('/shopkeeper/ssprofile/update/:id',authController.update_post);
router.get('/shopkeeper/ssprofile/', authController.shopkeeper_get);
router.get('/admin/admin-shopkeeper-details', authController.details_post);
router.delete('/admin/admin-shopkeeper-details/:id', authController.user_delete);
// router.get('/admin/admin-dashboard',authController.admin_dashboard);

router.get('/shopkeeper/ssstockdetails',authController.stock_get);
router.get('/shopkeeper/ssuserdetails/', authController.rationUser_get);
router.post('/shopkeeper/ssuserdetails/:email', authController.rationUser_post);

module.exports = router;