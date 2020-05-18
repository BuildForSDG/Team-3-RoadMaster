import app from '../src/app';
import findClosestStation from '../src/javascript/findClosestStation';

const fireStations = [
  {
    Lekki: {
      lat: 6.4355376,
      lng: 3.4829765
    }
  },
  {
    Ajah: {
      lat: 6.4682876,
      lng: 3.5719866
    }
  },
  {
    Ikeja: {
      lat: 6.6004382,
      lng: 3.3513756
    }
  },
  {
    Ikorodu: {
      lat: 6.6144343,
      lng: 3.5094988
    }
  },
  {
    Epe: {
      lat: 6.5854286,
      lng: 3.9566465
    }
  },
  {
    Sangotedo: {
      lat: 6.4727703,
      lng: 3.6309526
    }
  }
];

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
    const nearestStation = findClosestStation(userLocation, fireStations);
    expect(...nearestStation).toEqual('Lekki');
  });
});
