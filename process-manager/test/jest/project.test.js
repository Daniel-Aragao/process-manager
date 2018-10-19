const project = require('../../core/entities/Project');

describe('test add project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.add()).toBe({_id: 1, Name: "project1", Manager: 1, Collaborator: 1})
  })
});

describe('test remove project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.remove()).toBe({_id: 1, Name: "project1", Manager: 1, Collaborator: 1})
  })
});

describe('test edit project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.edit({_id: 1, Name: "project1"})).toBe({_id: 1, Name: "project2", Manager: 1, Collaborator: 3})
  })
});

describe('test get project', ()=> {
    it('contains project in ArrayList', ()=>{
        expec(project.getAll()).toBe([{_id: 1, Name: "project1"}])
    })
});
