let chai = require('chai')
let chaiHttp = require('chai-http')
let app =  require('../index')
chai.should();
chai.use(chaiHttp);

describe('Tests get enpoint at /',()=>{
    it('Should return hello world',(done)=>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            res.text.should.be.eql('Hello world')
            done();
        })
    })
})
