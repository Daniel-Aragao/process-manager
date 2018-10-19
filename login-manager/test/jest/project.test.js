const project = require('../../core/entities/project');

describe('test add project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.add()).toBe({_id: 1, Name: "process-manager-project", Manager: 1})
  })
});

describe('remove project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.remove(1)).toBe({_id: 1, Name: "process-manager-project", Manager: 1})
  })
});

describe('edit project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.edit({_id: 1, Manager: 2})).toBe({_id: 1, Name: "process-manager-project", Manager: 2})
  })
});

describe('get project', ()=> {
    it('contains project in ArrayList', ()=>{
        expec(project.getAll()).toBe([{_id: 1, Name: "process-manager-project", Manager: 2}])
    })
});