process.env.NODE_ENV = 'test';

import { expect } from 'chai';
import { db } from '../../src/config/connection/database';
import { ParametersError } from '../../src/config/error';
import { RoleTo } from '../../src/to/RoleTo ';
import RoleFacade from '../../src/facade/Role/facade';

describe('RoleFacade Test', () => {

  before('Init', async () => {
    await db.sync({ force: true });
  });

  describe('Create', () => {
    it('should create one role', async () => {
      let roleTo: RoleTo = {
        name: 'Admin',
      };
      const role: RoleTo = await RoleFacade.create(roleTo);
      expect(role.id).to.not.be.null;
      expect(role.name).to.equal('Admin');
    });

    it('should throw ParametersError when name is missing', async () => {
      let roleTo: RoleTo = {};
      try {
        await RoleFacade.create(roleTo);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal('El atributo name es requerido');
      }
    });
  });

  describe('Read', () => {
    it('should read all roles', async () => {
      const roles: RoleTo[] = await RoleFacade.findAll();
      expect(roles.length).to.equal(1);
    });
  });

  describe('Update', () => {
    it('should update one role', async () => {
      let roleTo: RoleTo = {
        name: 'Super Admin',
      };
      const roles: RoleTo[] = await RoleFacade.findAll();
      const updatedRole: RoleTo = await RoleFacade.update(1, roleTo);
      expect(updatedRole.id).to.equal(roles[0].id);
      expect(updatedRole.name).to.equal('Super Admin');
    });

    it('should return null when role is not found', async () => {
      let roleTo: RoleTo = {
        name: 'Super Admin',
      };
      const updatedRole: RoleTo = await RoleFacade.update(9999, roleTo);
      expect(updatedRole).to.be.null;
    });
  });

//   describe('Delete', () => {
//     it('should delete one role', async () => {
//       const roles: RoleTo[] = await RoleFacade.findAll();
//       const result: number = await RoleFacade.eliminate(roles[0].id);
//       expect(result).to.equal(1);
//     });
//   })
})