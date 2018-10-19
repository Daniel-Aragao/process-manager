const project = require('../../core/entities/project');

describe('test add project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.add()).toBe({_id: 1, Project: 1, Manager: 1, Name: "Gerenciador de Processo", Address: "www.x.com.br"})
  })
});

describe('remove project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.remove(1)).toBe({_id: 1, Project: 1, Manager: 1, Name: "Gerenciador de Processo", Address: "www.x.com.br"})
  })
});

describe('edit project', ()=> {
  it('contains project in ArrayList', ()=>{
    expec(project.edit({_id: 1, Address: "www.y.com.br"})).toBe({_id: 1, Project: 1, Manager: 1, Name: "Gerenciador de Processo", Address: "www.y.com.br"})
  })
});

describe('get project', ()=> {
    it('contains project in ArrayList', ()=>{
        expec(project.getAll()).toBe([{_id: 1, Project: 1, Manager: 1, Name: "Gerenciador de Processo", Address: "www.y.com.br"}])
    })
});