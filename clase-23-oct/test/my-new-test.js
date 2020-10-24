const assert = require('assert');

describe('A series of tests', ()=>{
    describe('String is correct', ()=>{
        it('Should say hello world',()=>{
            assert.strictEqual("hello world", "hello world");
        })
    })
})