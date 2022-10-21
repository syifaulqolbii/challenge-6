const auth = require('../controllers/auth.js');
const mockRequest = (body = {})=> ({body});
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

//endpoint POST Login /
describe('auth.login function', () => {
    //case success
    test('res.json return success login', done => {
        const req = mockRequest({
            username: "qolbi",
            password: "qolbi123"

        });
        const res = mockResponse();

        auth.login(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                username: req.body.username,
                password: req.body.password,
            }
        });
        done();
    });
    test('res.json return false login', done =>{
        const req = mockRequest({
            username: "qolbi",
            password: "qolbi13"

        });
        const res = mockResponse();

        auth.login(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: false,
            message: 'username or password not match',
        });
        done();
    })

})


//endpoint POST Register /
describe('auth.register function', () => {
    //case success
    test('res.json return success regist', done => {
        const req = mockRequest({
            username: "darojat",
            password: "darojat123"

        });
        const res = mockResponse();

        auth.register(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                username: req.body.username,
                password: req.body.password,
            }
        });
        done();
    });
    test('res.json return failed regist', done => {
        const req = mockRequest({
            username: "qolbi",
            password: "qolbi123"
        });
        const res = mockResponse();

        auth.register(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: 'username already exist',

        });
        done();
    })
})
