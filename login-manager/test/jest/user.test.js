const user = require('../../core/entities/User');

describe('test add user', ()=> {
  it('contains user in ArrayList', ()=>{
    expec(user.add()).toBe({_id: "1", Name: "dazema", UserName: "dzm", password: "123"})
  })
});

describe('remove user', ()=> {
  it('contains user in ArrayList', ()=>{
    expec(user.remove()).toBe({_id: "1", Name: "dazema", UserName: "dzm", password: "123"})
  })
});

describe('edit user', ()=> {
  it('contains user in ArrayList', ()=>{
    expec(user.edit({_id: "1", Name: "zemada"})).toBe({_id: "1", Name: "zemada", UserName: "dzm", password: "123"})
  })
});

describe('get user', ()=> {
    it('contains user in ArrayList', ()=>{
        expec(user.getAll()).toBe([{_id: "1", Name: "zemada", UserName: "dzm", password: "123"}])
    })
});