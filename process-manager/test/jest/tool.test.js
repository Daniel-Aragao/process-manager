const tool = require('../../core/entities/Tool');

describe('test add tool', ()=> {
  it('contains tool in ArrayList', ()=>{
    expec(tool.add()).toBe({_id: 1, Name: "tool1", Process: 1, Task: 1})
  })
});

describe('test remove tool', ()=> {
  it('contains tool in ArrayList', ()=>{
    expec(tool.remove()).toBe({_id: 1, Name: "tool1", Process: 1, Task: 1})
  })
});

describe('test edit tool', ()=> {
  it('contains tool in ArrayList', ()=>{
    expec(tool.edit({_id: 1, Name: "tool1"})).toBe({_id: 1, Name: "tool1", Process: 2, Task: 1})
  })
});

describe('test get tool', ()=> {
    it('contains tool in ArrayList', ()=>{
        expec(tool.getAll()).toBe([{_id: 1, Name: "tool1"}])
    })
});
