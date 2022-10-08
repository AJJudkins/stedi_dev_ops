const {hello} = require('./hello.js')

it('Should print hello', ()=>{
    expect(hello()).toBe('hello')
});