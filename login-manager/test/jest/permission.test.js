const permission = require('../../core/entities/Permission');

describe('test add permission', ()=> {
  it('contains permission in ArrayList', ()=>{
    expec(permission.add()).toBe({_id: 1, Manager: 1, permission: 1, PermissionType: 3})
  })
});

describe('remove permission', ()=> {
  it('contains permission in ArrayList', ()=>{
    expec(permission.remove(1)).toBe({_id: 1, Manager: 1, permission: 1, PermissionType: 3})
  })
});

describe('edit permission', ()=> {
  it('contains permission in ArrayList', ()=>{
    expec(permission.edit({_id: 1, PermissionType: 2})).toBe({_id: 1, Manager: 1, permission: 1, PermissionType: 2})
  })
});

describe('get permission', ()=> {
    it('contains permission in ArrayList', ()=>{
        expec(permission.getAll()).toBe([{_id: 1, Manager: 1, permission: 1, PermissionType: 2}])
    })
});