const assert = require('assert');

describe('A series of tests', ()=>{
    
    describe('Book has correct total', ()=>{
        it('Should say 116',()=>{
            let book = new Book("A","A",100);
            assert.strictEqual(book.getTotal(), book.subtotal*1.16);
        })
    })
    describe('Book has correct full title', ()=>{
        it('Should say {title} - {author}',()=>{
            let book = new Book("A","A",100);
            assert.strictEqual("A - A", book.getFullTitle);
        })
    })
})



class Book{
    constructor(author, title, subtotal){
        this.author = author
        this.title = title
        this.subtotal = subtotal
    }
    getTotal(){
        return this.subtotal*1.16
    }
    getFullTitle(){
        return this.title + " - " + this.author
    }
}

class Calculadora{
    constructor(a, b, x){
        this.author = author
        this.title = title
        this.subtotal = subtotal
    }
    getSuma(){
        return this.a + this.b
    }
    getSub(){
        return this.a - this.b
    }
    getScalar(){
        return this.a - this.b
    }
    getDot(){
        return this.a - this.b
    }
}