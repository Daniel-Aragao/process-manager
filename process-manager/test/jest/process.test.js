const process = require('../../core/entities/Process');

describe('test add process', ()=> {
  it('contains process in ArrayList', ()=>{
    expec(process.add()).toBe({_id: 1, Name: "process1", Team: 1, Project: 1, Descricao: "aaa", Artifact: 1, Task: 1, Tool: 1})
  })
});

describe('test remove process', ()=> {
  it('contains process in ArrayList', ()=>{
    expec(process.remove()).toBe({_id: 1, Name: "process1", Team: 1, Project: 1, Descricao: "aaa", Artifact: 1, Task: 1, Tool: 1})
  })
});

describe('test edit process', ()=> {
  it('contains process in ArrayList', ()=>{
    expec(process.edit({_id: 1, Name: "process1"})).toBe({_id: 1, Name: "process1", Team: 2, Project: 2, Descricao: "aaa", Artifact: 1, Task: 1, Tool: 1})
  })
});

describe('test get process', ()=> {
    it('contains process in ArrayList', ()=>{
        expec(process.getAll()).toBe([{_id: 1, Name: "process1", Team: 1, Project: 1])
    })
});
