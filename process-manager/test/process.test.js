const processController = require('../src/controller/processController.js')

const arrayProcess = [{_id: 1, Name: "process1", Team: 1, Project: 1, Descricao: "aaa", Artifact: 1, Task: 1, Tool: 1},
                      {_id: 2, Name: "process2", Team: 4, Project: 1, Descricao: "vvvv", Artifact: 2, Task: 1, Tool: 1},
                      {_id: 3, Name: "process3", Team: 2, Project: 2, Descricao: "bbb", Artifact: 1, Task: 1, Tool: 5}]


describe('Process', () => {
  test('Pesquisar um nome de processo que existe', ()=> {
    expect(processController.findByName(arrayProcess, "process1")).toEqual({_id: 1, Name: "process1", Team: 1, Project: 1, Descricao: "aaa", Artifact: 1, Task: 1, Tool: 1});
  })

  test('Pesquisar um nome de processo que  nao existe', ()=> {
    expect(processController.findByName(arrayProcess, "process4")).toBeUndefined();
  });
});
