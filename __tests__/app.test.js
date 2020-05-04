import app from '../src/app';
import findClosestStation from '../src/findClosestStation';
import fireStations from '../fireStations.json';

describe('app module', () => {
  test('it exists', async () => {
    expect(app).toBeDefined();
  });

  test('it returns program name with SDGs', async () => {
    const result = await app();
    const sdgPos = (result || '').indexOf('SDG');
    expect(sdgPos).toBeGreaterThanOrEqual(0);
  });

  test('it finds closest fire station', () => {
    /* user location sent from the client via geolocation api */
    const userLocation = { lat: 6.3445645, lng: 3.4533255 };
    const nearestStation = findClosestStation(userLocation, fireStations.fireStations);
    expect(...nearestStation).toEqual('Lekki');
  });
});
