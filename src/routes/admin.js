import express from 'express';
import User from "../models/User";
import parseErrors from "../utils/parseErrors";
import { sendAdminConfirmationEmail } from "../mailer";


const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body.admin;
  const admin = new User({ email });
  admin.setPassword(password);
  admin.setConfirmationToken();
  admin
    .save()
    .then(adminRecord => {
      sendAdminConfirmationEmail(adminRecord);
      res.json({ admin: adminRecord.toAuthJSON() });
    })
    .catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

export default router;
