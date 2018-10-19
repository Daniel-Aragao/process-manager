const task = require('../../core/entities/Task');

describe('test add task', ()=> {
  it('contains task in ArrayList', ()=>{
    expec(task.add()).toBe({Name: "task1", Details: "aaa", Artifact: 1, Responsible: "bbb", Process: 1, PreviousTask: 1, NextTask: 2, ETypeTask: 1, Participants: "ccc"})
  })
});

describe('test remove task', ()=> {
  it('contains task in ArrayList', ()=>{
    expec(task.remove()).toBe({Name: "task1", Details: "aaa", Artifact: 1, Responsible: "bbb", Process: 1, PreviousTask: 1, NextTask: 2, ETypeTask: 1, Participants: "ccc"})
  })
});

describe('test edit task', ()=> {
  it('contains task in ArrayList', ()=>{
    expec(task.edit({Name: "task1", Details: "aaa", Artifact: 1})).toBe({Name: "task1", Details: "abc", Artifact: 1, Responsible: "bbb", Process: 1, PreviousTask: 1, NextTask: 2, ETypeTask: 1, Participants: "ccc"})
  })
});

describe('test get task', ()=> {
    it('contains task in ArrayList', ()=>{
        expec(task.getAll()).toBe([{Name: "aaa", Details: "aaa", Artifact: 1})
    })
});
