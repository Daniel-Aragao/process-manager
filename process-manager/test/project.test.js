const projectController = require('../src/controller/projectController.js')

const arrayProject = [{_id: 1, Name: "project1", Manager: 1, Collaborator: 1},
                      {_id: 2, Name: "project2", Manager: 5, Collaborator: 2}]


describe('Project', () => {
  test('Pesquisar um nome de projetos que existe', ()=> {
    expect(projectController.findByName(arrayProject, "project1")).toEqual({_id: 1, Name: "project1", Manager: 1, Collaborator: 1});
  })

  test('Pesquisar projetos que existe pelo id ', ()=> {
    expect(projectController.findById(arrayProject, 2)).toEqual({_id: 2, Name: "project2", Manager: 5, Collaborator: 2});
  })

  test('Pesquisar um nome de projetos que  nao existe', ()=> {
    expect(projectController.findByName(arrayProject, "project5")).toBeUndefined();
  });
});
