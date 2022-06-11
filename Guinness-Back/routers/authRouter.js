import express from 'express';
const router = express.Router();
import db from '../config/dbConnection.js';

import { check, validationResult } from 'express-validator';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
 

router.post('/register', [
    check('nickName', 'nickName is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], 
(req, res, next) => {
    db.query(
      `SELECT * FROM user WHERE LOWER(email) = LOWER(${db.escape(
        req.body.email
      )});`,
      (err, result) => {
        if (result.length) {
          return res.status(409).send({
            msg: 'This user is already in use!'
          });
        } else {
          // username is available
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err
              });
            } else {
              // has hashed pw => add to database
              db.query(
                `INSERT INTO user (nickName, email, password) VALUES ('${req.body.nickName}', ${db.escape(
                  req.body.email
                )}, ${db.escape(hash)})`,
                (err, result) => {
                  if (err) {
                    throw err;
                    return res.status(400).send({
                      msg: err
                    });
                  }
                  return res.status(201).send({
                    msg: 'The user has been registerd with us!'
                  });
                }
              );
            }
          });
        }
      }
    );
  });
  
  router.post('/login', [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 1 })
  ], (req, res, next) => {
    db.query(
      `SELECT * FROM user WHERE email = ${db.escape(req.body.email)};`,
      (err, result) => {
        // user does not exists
        if (err) {
          throw err;
          return res.status(400).send({
            msg: err
          });
        }
        if (!result.length) {
          return res.status(401).send({
            msg: 'Email or password is incorrect!'
          });
        }
        // check password
        bcrypt.compare(
          req.body.password,
          result[0]['password'],
          (bErr, bResult) => {
            // wrong password
            if (bErr) {
              throw bErr;
              return res.status(401).send({
                msg: 'Email or password is incorrect!'
              });
            }
            if (bResult) {
              const token = jwt.sign({id:result[0].id},'the-super-strong-secrect',{ expiresIn: '1h' });
              /*db.query(
                `UPDATE user SET last_login = now() WHERE id = '${result[0].id}'`
              );*/
              return res.status(200).send({
                msg: 'Logged in!',
                token,
                user: result[0]
              });
            }
            return res.status(401).send({
              msg: 'email or password is incorrect!'
            });
          }
        );
      }
    );
  });
   
  export default router;