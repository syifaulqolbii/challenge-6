const biodata = require('../controllers/biodata.js');
const mockRequest = (body = {})=> ({body});
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

//endpoint GET /
describe('biodata.get function', () => {
    //case success
    test('res.json return success get', done => {
        const res = mockResponse();

        biodata.show(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: user
        });
        done();
    });
    test('res.json return false get', done =>{
        const res = mockResponse();

        biodata.show(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: false,
            message: err.message
        });
        done();
    })

})


//endpoint POST Input /
describe('biodata.input function', () => {
    //case success
    test('res.json return success regist', done => {
        const req = mockRequest({
            name: "syifaul",
            email: "darojat123@mail.com"

        });
        const res = mockResponse();

        biodata.inputBio(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                name: req.body.name,
                email: req.body.email,
            }
        });
        done();
    });
    test('res.json return failed input', done => {
        const req = mockRequest({
            name: "syifaul",
            email: "darojat12@mail.com"

        });
        const res = mockResponse();

        biodata.inputBio(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: err.message
        });
        done();
    })
})

describe('biodata.update function', () => {
    //case success
    test('res.json return success update', done => {
        const req = mockRequest({
            name: "syifaul",
            email: "darojat13@mail.com"
        });
        const res = mockResponse();

        biodata.updateBio(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                name: req.body.name,
                email: req.body.email,
            }
        });
        done();
    });
    test('res.json return failed update', done => {
        const req = mockRequest({
            name: "syifaul",
            email: "darojat12@mail.com"

        });
        const res = mockResponse();

        biodata.updateBio(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: err.message
        });
        done();
    })
})

describe('biodata.delete function', () => {
    //case success
    test('res.json return success delete', done => {
        const req = mockRequest({
            name: "syifaul",
        });
        const res = mockResponse();

        biodata.deleteData(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                name: req.body.name
            }
        });
        done();
    });
    test('res.json return failed delete', done => {
        const req = mockRequest({
            name: "syifa",

        });
        const res = mockResponse();

        biodata.deleteData(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: err.message
        });
        done();
    })
})