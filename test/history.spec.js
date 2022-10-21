const history = require('../controllers/history.js');
const mockRequest = (body = {})=> ({body});
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

//endpoint GET /
describe('history.get function', () => {
    //case success
    test('res.json return success get', done => {
        const res = mockResponse();

        history.show(req, res);

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

        history.show(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: false,
            message: err.message
        });
        done();
    })

})


//endpoint POST Input /
describe('history.input function', () => {
    //case success
    test('res.json return success input', done => {
        const req = mockRequest({
            lamabermain: 3,
            ranking: "master"

        });
        const res = mockResponse();

        history.inputHis(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                id: req.body.id,
                lamabermain: req.body.lamabermain,
                ranking: req.body.ranking
            }
        });
        done();
    });
    test('res.json return failed input', done => {
        const req = mockRequest({
            lamabermain: 3,
            ranking: "mastr"

        });
        const res = mockResponse();

        history.inputHis(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: err.message
        });
        done();
    })
})

describe('history.update function', () => {
    //case success
    test('res.json return success update', done => {
        const req = mockRequest({
            lamabermain: 4,
            ranking: "epic"
        });
        const res = mockResponse();

        history.updateHis(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                lamabermain: req.body.lamabermain,
                ranking: req.body.ranking,
            }
        });
        done();
    });
    test('res.json return failed update', done => {
        const req = mockRequest({
            lamabermain: 5,
            ranking: "legend"

        });
        const res = mockResponse();

        history.updateHis(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: err.message
        });
        done();
    })
})

describe('history.delete function', () => {
    //case success
    test('res.json return success delete', done => {
        const req = mockRequest({
            lamabermain: 5,
        });
        const res = mockResponse();

        history.deleteData(req, res);

        expect(res.status).toBe(200);
        expect(res.json).toBe({
            status: true,
            message: 'success',
            data: {
                lamabermain: req.body.lamabermain
            }
        });
        done();
    });
    test('res.json return failed delete', done => {
        const req = mockRequest({
            lamabermain: 6,

        });
        const res = mockResponse();

        history.deleteData(req, res);

        expect(res.status).toBe(500);
        expect(res.json).toBe({
            status: true,
            message: err.message
        });
        done();
    })
})