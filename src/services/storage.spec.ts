import { StorageService } from './';

let storage: StorageService = null;

describe('StorageService', () => {

  beforeEach(() => {
    storage = new StorageService();
    spyOn(storage['storage'], 'get').and.callThrough();
    spyOn(storage['storage'], 'set').and.callThrough();
    spyOn(storage['storage'], 'remove').and.callThrough();
  });

  it('initialises', () => {
    expect(storage).not.toBeNull();
  });

  it('gets', () => {
    storage.get('abv');
    expect(storage['storage'].get).toHaveBeenCalledWith('abv');
  });

  it('sets', () => {
    storage.set('abv', 'test');
    expect(storage['storage'].set).toHaveBeenCalledWith('abv', 'test');
  });

  it('removes', () => {
    storage.remove('abv');
    expect(storage['storage'].remove).toHaveBeenCalledWith('abv');
  });
});
