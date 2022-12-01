
import express, { Express, Request, Response } from 'express';
import knex from 'knex';
var router= express.Router();

import  moduleknex  from '../modules/dbConfig';



router.get('/hh',async(req, res)=>{
    res.send()})
  

    //let b = JSON.parse(req.body).data;
    //res.render('pages/test', {result: {result,b}});
    //res.status=200;


//})


export default router;