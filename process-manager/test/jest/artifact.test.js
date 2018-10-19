const artifact = require('../../core/entities/Artifact');

describe('test add artifact', ()=> {
  it('contains artifact in ArrayList', ()=>{
    expec(artifact.add()).toBe({_id: "1", Name: "art1", ETypeArtifact: 1, Password: "123", Task: 1})
  })
});

describe('test remove artifact', ()=> {
  it('contains artifact in ArrayList', ()=>{
    expec(artifact.remove()).toBe({_id: "1", Name: "art1", ETypeArtifact: 1, Password: "123", Task: 1})
  })
});

describe('test edit artifact', ()=> {
  it('contains artifact in ArrayList', ()=>{
    expec(artifact.edit({_id: "1", Name: "art1"})).toBe({_id: "1", Name: "art1", ETypeArtifact: 2, Password: "1234", Task: 3})
  })
});

describe('test get artifact', ()=> {
    it('contains artifact in ArrayList', ()=>{
        expec(artifact.getAll()).toBe([{_id: "1", Name: "art1", ETypeArtifact: 1}])
    })
});
