const collaboratorController = require('../src/controller/collaboratorController.js')

const arrayCollaborator = [{Name: "coll1", Matricula: 1809085, Password: "123", Projects: 1},
                           {Name: "coll2", Matricula: 1876892, Password: "000", Projects: 2}]


describe('Collaborator', () => {
  test('Pesquisar um nome de colaborador que existe', ()=> {
    expect(collaboratorController.findByName(arrayCollaborator, "coll1")).toEqual({Name: "coll1", Matricula: 1809085, Password: "123", Projects: 1});
  })

  test('Pesquisar um nome de colaborador que  nao existe', ()=> {
    expect(collaboratorController.findByName(arrayCollaborator, "coll5")).toBeUndefined();
  });
});
