import request from 'supertest';
import { expect } from 'chai';
const api = request('http://localhost:8081/')
const sampleTodod = {
    id: 1,
    name: 'sample todo',
    action: false
} 

describe('Test Todo Functionality', () => {
    it('confirm api health', (done) => {
        api.get('health-check').expect(200, (err) => {
        err ? done(err) : done()
      })
    })
    it('create a sample todo', (done) => {
        api.post('api/addToDo')
        .send(sampleTodod)
        .expect(200, (err) => {
            err ? done(err) : done()
        })
    })
    it('GET list of Todos', async () => {
        const response = await api.get('api/lists')
        expect(response.status).eq(200)
        expect(response.body).to.be.have.property('data')
        expect(response.body.data).to.be.an('array')
        expect(response.body.data).to.have.length.above(0)
        expect(response.body.data[0]).to.be.have.property('id')
        expect(response.body.data[0].id).to.equal(1)
        expect(response.body.data[0]).to.be.have.property('name')
        expect(response.body.data[0].name).to.equal('sample todo')
        expect(response.body.data[0]).to.be.have.property('action')
        expect(response.body.data[0].action).to.equal(false)
    })
    it('mark todo as completed', (done) => {
        api.put('api/doneTodo/1').expect(200, (err) => {
            err ? done(err) : done()
        })
    })
    it('mark todo as deleted', (done) => {
        api.delete('api/deleteTodo/1').expect(200, (err) => {
            err ? done(err) : done()
        })
    })
})

