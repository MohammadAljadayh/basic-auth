'use strict';

const { server } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(server);
const {db} = require('../src/models/index');

beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});

describe('TEST ALL', () => {


  // Check if 404 is handled 

test('Should respond with 404 status on an invalid method', async () => {

    const response = await mockRequest.get('/notfound');
    expect(response.status).toBe(404);

  });


  // Check if general error handling is working

  test('should respond with 500 on an error', async () => {

    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);
  });

  
});


describe('Server Test',()=>{
    it('SignUp test',async()=>{
        const user=await mockRequest.post('/signup').send({
            username:"admin",
            password:"admin"
        });
        expect(user.status).toEqual(200);
    });

    it('SignIn',async()=>{
        const  user=await mockRequest.post('/signin').auth('admin','admin');
        expect(user.status).toEqual(200);
    });

    it(' not access MiddelWare',async()=>{
        const  user=await mockRequest.post('/signin').auth('aaasd','aasfdmiasfn');
        expect(user.status).toEqual(403);
    });

    it('SignUp , SignIn',async()=>{
        const Obj=await mockRequest.post('/signup').send({
            username:'admin',
            password:'admin'
        });
        const user=await mockRequest.post('/signin').send({
            username:'admin',
            password:'admin'
        }).auth(Obj.body.username,'admin');
        expect(user.status).toEqual(200);
    })
})