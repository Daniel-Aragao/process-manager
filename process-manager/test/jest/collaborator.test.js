const collaborator = require('../../core/entities/Collaborator');

describe('test add collaborator', ()=> {
  it('contains collaborator in ArrayList', ()=>{
    expec(collaborator.add()).toBe({Name: "coll1", Matricula: 00123, Password: "123", Projects: 1})
  })
});

describe('test remove collaborator', ()=> {
  it('contains collaborator in ArrayList', ()=>{
    expec(collaborator.remove()).toBe({Name: "coll1", Matricula: 00123, Password: "123", Projects: 1})
  })
});

describe('test edit collaborator', ()=> {
  it('contains collaborator in ArrayList', ()=>{
    expec(collaborator.edit({Name: "coll1", Matricula: 00123})).toBe({Name: "coll1", Matricula: 00345, Password: "123", Projects: 2})
  })
});

describe('test get collaborator', ()=> {
    it('contains collaborator in ArrayList', ()=>{
        expec(collaborator.getAll()).toBe([{Name: "coll1", Matricula: 00123, Password: "123", Projects: 1}])
    })
});
